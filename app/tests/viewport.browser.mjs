import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { readFile } from 'node:fs/promises';
import { webkit } from 'playwright';

// Exercise the shipped HTML/CSS/client. Only Telegram and the remote socket/media
// are replaced, so these checks never send actions to a production room.
const publicDir = new URL('../public/', import.meta.url);
let browser;
before(async () => { browser = await webkit.launch(); });
after(async () => { await browser?.close(); });

async function openRoom(t, {width=390, height=844, visible=650, safe=34, room='main', telegram=true}={}) {
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
    window.testViewport = {height};
    Object.defineProperty(window.visualViewport,'height',{get:()=>window.testViewport.height});
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
  await page.goto(`https://delbirim.test/?room=${room}`);
  await page.evaluate(() => window.testSocket.onmessage({data:JSON.stringify({
    type:'state',status:'playing',seats:[],
    view:{players:[],profiles:{},media:{},feed:Array.from({length:60},(_,i)=>({kind:'chat',from:'system',text:`Message ${i}`}))},
  })}));
  await settle(page);
  return page;
}

const settle = page => page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
const geometry = page => page.evaluate(() => {
  const rect = selector => {const r=document.querySelector(selector).getBoundingClientRect();return {top:r.top,bottom:r.bottom,left:r.left,right:r.right,height:r.height}};
  return {game:rect('.game'),table:rect('.table'),chat:rect('.chatArea'),feed:rect('.feed'),composer:rect('.composer'),input:rect('#msg'),
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
