import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { mkdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { webkit } from 'playwright';

// Exercise the shipped HTML/CSS/client. Only Telegram and the remote socket/media
// are replaced, so these checks never send actions to a production room.
const publicDir = new URL('../public/', import.meta.url);
let browser;
before(async () => { browser = await webkit.launch({timeout:15000}); });
after(async () => { await browser?.close(); });

async function openRoom(t, {width=390, height=844, visible=650, safe=34, room='main', telegram=true, players=0}={}) {
  const context = await browser.newContext({viewport:{width,height},isMobile:true,hasTouch:true});
  t.after(() => context.close());
  await context.route('**/*', async route => {
    const url = new URL(route.request().url());
    if (url.origin !== 'https://delbirim.test') return route.abort();
    const path = url.pathname === '/' ? 'index.html' : url.pathname.slice(1);
    try {
      await route.fulfill({body:await readFile(new URL(path,publicDir)),contentType:path.endsWith('.css')?'text/css':path.endsWith('.js')?'text/javascript':'text/html'});
    } catch { await route.abort(); }
  });
  await context.addInitScript(({visible,safe,telegram,height}) => {
    const handlers = {};
    window.testViewport = {height,top:0};
    Object.defineProperty(window.visualViewport,'height',{get:()=>window.testViewport.height});
    Object.defineProperty(window.visualViewport,'offsetTop',{get:()=>window.testViewport.top});
    localStorage.setItem('kissmeet.pid','test-player-0');
    const tg = {
      platform:'ios',viewportHeight:visible,viewportStableHeight:visible,
      safeAreaInset:{top:0,bottom:safe,left:0,right:0},
      contentSafeAreaInset:{top:0,bottom:0,left:0,right:0},
      ready(){},expand(){},onEvent(name,fn){(handlers[name]??=[]).push(fn)},
    };
    if (telegram) window.Telegram = {WebApp:tg};
    window.emitTelegram = (name, data) => (handlers[name]||[]).forEach(fn=>fn(data));
    window.WebSocket = class {
      constructor(){this.readyState=1;window.testSocket=this;this.sent=[]}
      send(data){this.sent.push(JSON.parse(data))}
    };
  },{visible,safe,telegram,height});
  const page = await context.newPage();
  const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  t.after(()=>assert.deepEqual(errors,[], 'client has no runtime errors'));
  await page.goto(`https://delbirim.test/?room=${room}${players?'&live=1':''}`);
  await page.evaluate(count => {
    const ids=Array.from({length:count},(_,i)=>`test-player-${i}`);
    window.testSocket.onmessage({data:JSON.stringify({
      type:'state',status:'playing',seats:ids,
      view:{players:ids,turn:ids[0],profiles:Object.fromEntries(ids.map((id,i)=>[id,{name:`Игрок ${i+1}`,hearts:100}])),media:{},feed:Array.from({length:60},(_,i)=>({kind:'chat',from:'system',text:`Message ${i}`}))},
    })});
  },players);
  await settle(page);
  return page;
}

const settle = page => page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
const geometry = page => page.evaluate(() => {
  const rect = selector => {const r=document.querySelector(selector).getBoundingClientRect();return {top:r.top,bottom:r.bottom,left:r.left,right:r.right,height:r.height}};
  return {game:rect('.game'),table:rect('.table'),chat:rect('.chatArea'),feed:rect('.feed'),composer:rect('.composer'),input:rect('#msg'),roulette:rect('#bottle'),spin:rect('#spin'),
    players:[...document.querySelectorAll('.person')].map(el=>{const r=el.getBoundingClientRect();return {top:r.top,bottom:r.bottom,left:r.left,right:r.right,x:el.style.left,y:el.style.top}}),
    scrollHeight:document.scrollingElement.scrollHeight,clientHeight:document.scrollingElement.clientHeight};
});

for (const room of ['main','vip-bishkek-kg']) {
  test(`${room}: fits Telegram safe area; only messages scroll; seats stay in place`,async t=>{
    const page=await openRoom(t,{room});
    const g=await geometry(page);
    assert.equal(g.game.height,650);
    assert.ok(g.composer.bottom<=616.5,`composer ${g.composer.bottom} must clear the 34px home indicator`);
    assert.ok(g.feed.height>=60,'chat retains visible messages');
    assert.equal(g.chat.top,g.table.bottom);
    assert.ok(g.scrollHeight<=g.clientHeight+1,'document must not scroll');
    assert.equal(g.players.length,11);
    assert.deepEqual(g.players[9]&&[g.players[9].x,g.players[9].y],['50%','94%']);
    for (const p of g.players) {
      assert.ok(p.top>=g.table.top && p.bottom<=g.table.bottom,'players must remain inside the table');
    }
    // The two vertically adjacent left-hand seats overlapped in the 57% layout.
    assert.ok(g.players[4].bottom<=g.players[6].top,'adjacent player cards must not overlap');
    const scrolled=await page.evaluate(()=>{const f=document.querySelector('#feed');f.scrollTop=200;return {feed:f.scrollTop,page:window.scrollY}});
    assert.ok(scrolled.feed>0);assert.equal(scrolled.page,0);
    assert.deepEqual((await geometry(page)).composer,g.composer,'scrolling messages does not move the input');
    await page.locator('#msg').fill('Layout regression check');
    await page.locator('#send').click();
    assert.equal(await page.locator('#msg').inputValue(),'');
    assert.ok(await page.evaluate(()=>testSocket.sent.some(m=>m.action?.text==='Layout regression check')),'chat action still sent');
    await page.locator('#settingsBtn').click();
    assert.equal(await page.locator('#settingsOverlay').isVisible(),true);
    await page.locator('#settingsClose').click();
  });
}

test('stable Telegram height ignores intermediate drag values; keyboard and safe-area changes resize the room',async t=>{
  const page=await openRoom(t);
  await page.evaluate(()=>{Telegram.WebApp.viewportHeight=500;emitTelegram('viewportChanged',{isStateStable:false})});
  await settle(page);
  assert.equal((await geometry(page)).game.height,650,'wait for Telegram stable height');
  await page.evaluate(()=>{Telegram.WebApp.viewportStableHeight=600;emitTelegram('viewportChanged',{isStateStable:true})});
  await settle(page);
  assert.equal((await geometry(page)).game.height,600);
  await page.locator('#msg').focus();
  await page.evaluate(()=>{testViewport.height=320;visualViewport.dispatchEvent(new Event('resize'))});
  await settle(page);
  assert.ok((await geometry(page)).composer.bottom<=320,'keyboard must not cover the composer when SDK height is stale');
  await page.evaluate(()=>{testViewport.height=844;visualViewport.dispatchEvent(new Event('resize'));Telegram.WebApp.safeAreaInset.bottom=20;Telegram.WebApp.contentSafeAreaInset.top=28;emitTelegram('safeAreaChanged');emitTelegram('contentSafeAreaChanged')});
  await settle(page);
  const g=await geometry(page);
  assert.equal(g.game.height,600);assert.ok(g.table.top>=28);assert.ok(g.composer.bottom<=580.5);
});

for (const [width,height,visible] of [[375,667,550],[430,932,780],[844,390,330]]) {
  test(`Telegram ${width}x${height}, visible ${visible}px`,async t=>{
    const page=await openRoom(t,{width,height,visible});
    const g=await geometry(page);
    assert.equal(g.game.height,visible);
    assert.ok(g.composer.bottom<=visible-34+.5);
    assert.ok(g.feed.height>0);
    assert.ok(g.scrollHeight<=g.clientHeight+1);
  });
}

test('SDK unavailable: mobile browser uses visual viewport and restores after keyboard closes',async t=>{
  const page=await openRoom(t,{telegram:false});
  assert.equal((await geometry(page)).game.height,844);
  await page.evaluate(()=>{testViewport.height=360;visualViewport.dispatchEvent(new Event('resize'))});
  await settle(page);assert.equal((await geometry(page)).game.height,360);
  await page.evaluate(()=>{testViewport.height=844;visualViewport.dispatchEvent(new Event('resize'))});
  await settle(page);assert.equal((await geometry(page)).game.height,844);
});

test('rotation updates the existing room and respects landscape side insets',async t=>{
  const page=await openRoom(t);
  await page.setViewportSize({width:844,height:390});
  await page.evaluate(()=>{
    testViewport.height=390;
    Telegram.WebApp.viewportHeight=330;Telegram.WebApp.viewportStableHeight=330;
    Telegram.WebApp.safeAreaInset={top:0,bottom:21,left:44,right:44};
    emitTelegram('viewportChanged',{isStateStable:true});emitTelegram('safeAreaChanged');
  });
  await settle(page);
  const g=await geometry(page);
  assert.equal(g.game.height,330);assert.ok(g.composer.bottom<=309.5);
  assert.ok(g.table.left>=44 && g.table.right<=800);
  assert.equal(g.players.length,11);
});

test('older Telegram SDK falls back to viewportHeight',async t=>{
  const page=await openRoom(t);
  await page.evaluate(()=>{
    delete Telegram.WebApp.viewportStableHeight;delete Telegram.WebApp.safeAreaInset;
    delete Telegram.WebApp.contentSafeAreaInset;
    Telegram.WebApp.viewportHeight=580;emitTelegram('viewportChanged',{isStateStable:true});
  });
  await settle(page);
  assert.equal((await geometry(page)).game.height,580);
  assert.ok((await geometry(page)).composer.bottom<=580.5);
});

test('ordinary desktop browser retains the existing desktop layout',async t=>{
  const page=await openRoom(t,{telegram:false,width:1280,height:900});
  assert.equal(await page.evaluate(()=>document.documentElement.classList.contains('roomViewport')),false);
  assert.equal((await geometry(page)).table.height,700);
});

const mainSeats=[[14,16],[38,8],[62,8],[86,16],[9,42],[91,42],[9,68],[91,68],[26,88],[50,94]];
const vipSeats=[[15,15],[38,8],[62,8],[85,15],[10,40],[90,40],[10,67],[90,67],[27,88],[50,94]];
const screenshot = async (page,name) => {
  if (!process.env.VIEWPORT_SCREENSHOTS) return;
  await mkdir(process.env.VIEWPORT_SCREENSHOTS,{recursive:true});
  await page.screenshot({path:join(process.env.VIEWPORT_SCREENSHOTS,`${name}.png`)});
};

for (const room of ['main','vip-bishkek-kg']) {
  for (const visible of [896,780,650]) {
    test(`iPhone 11 414x896 / ${visible}px ${room}: compact table and usable chat with ten players`,async t=>{
      const page=await openRoom(t,{width:414,height:896,visible,room,players:10});
      const g=await geometry(page);
      await screenshot(page,`iphone11-${room}-${visible}`);
      assert.equal(g.players.length,10);
      assert.deepEqual(g.players.map(p=>[p.x,p.y]),(room==='main'?mainSeats:vipSeats).map(p=>p.map(n=>`${n}%`)));
      assert.ok(g.table.height<=400.5,`table ${g.table.height}px leaves too little chat`);
      assert.ok(g.chat.height>=(visible-34)*.4-1,'chat gets at least 40% of usable height');
      assert.ok(g.feed.height>=180,'several messages must be visible, not just the composer');
      assert.equal(g.chat.top,g.table.bottom,'chat starts immediately after table');
      for (const r of [...g.players,g.roulette,g.spin]) {
        assert.ok(r.top>=g.table.top && r.bottom<=g.table.bottom,'all players and roulette controls fit inside table');
        assert.ok(r.left>=g.table.left && r.right<=g.table.right,'table content fits horizontally');
      }
      assert.ok(g.composer.bottom<=visible-34+.5,'input clears the home indicator');
      const top=await page.locator('#spin').evaluate(el=>{const r=el.getBoundingClientRect();return document.elementFromPoint(r.x+r.width/2,r.y+r.height/2)?.closest('#spin')===el});
      assert.ok(top,'spin is not covered by a player or another control');
      await page.locator('#spin').click();
      assert.ok(await page.evaluate(()=>testSocket.sent.some(m=>m.action?.type==='spin')),'real game spin action still works');
      const scroll=await page.evaluate(()=>{const feed=document.querySelector('#feed');feed.scrollTop=200;window.scrollTo(0,150);return {feed:feed.scrollTop,page:window.scrollY}});
      assert.ok(scroll.feed>0);assert.equal(scroll.page,0);
      assert.deepEqual((await geometry(page)).composer,g.composer);
    });
  }
}

test('iPhone 11 keyboard pan: room and composer follow the visual viewport offset',async t=>{
  const page=await openRoom(t,{width:414,height:896,visible:780,players:10});
  await page.locator('#msg').focus();
  await page.evaluate(()=>{testViewport.height=360;testViewport.top=100;visualViewport.dispatchEvent(new Event('resize'));visualViewport.dispatchEvent(new Event('scroll'))});
  await settle(page);
  await screenshot(page,'iphone11-keyboard');
  const g=await geometry(page);
  assert.equal(g.game.top,100,'room starts at the panned visual viewport origin');
  assert.ok(g.composer.bottom<=460-34+.5);
  assert.ok(g.composer.bottom>=400,'composer stays at the lower visible edge');
  await page.evaluate(()=>{testViewport.top=130;visualViewport.dispatchEvent(new Event('scroll'))});
  await settle(page);assert.equal((await geometry(page)).game.top,130);
  await page.locator('#msg').fill('Visible above keyboard');
  await page.locator('#send').click();
  assert.ok(await page.evaluate(()=>testSocket.sent.some(m=>m.action?.text==='Visible above keyboard')));
  await page.evaluate(()=>{testViewport.height=896;testViewport.top=0;visualViewport.dispatchEvent(new Event('resize'));visualViewport.dispatchEvent(new Event('scroll'))});
  await settle(page);assert.equal((await geometry(page)).game.top,0);
});
