/* Run with a local Playwright install. PAIR_UI_PLAYWRIGHT and PAIR_UI_CHROMIUM may select a test toolchain. */
const fs=require('node:fs');
const http=require('node:http');
const path=require('node:path');
const assert=require('node:assert/strict');
const {chromium}=require(process.env.PAIR_UI_PLAYWRIGHT||'playwright');
const app=path.resolve(__dirname,'..');
const qa='\nwindow.__pairQA={openHeartDuel,closeHeartDuel,chooseHeartDuel,receiveHeartDuelPartnerChoice,renderPlayers,finishHeartDuelAtTimeout,playerId,stop:()=>{clearTimeout(demoIdleTimer);clearTimeout(demoPartnerTimer);clearTimeout(demoAutoTimer);clearTimeout(heartDuelResultTimer);clearInterval(heartDuelTimer)}};renderPlayers({},true);';
const server=http.createServer((req,res)=>{
  const name=new URL(req.url,'http://localhost').pathname;
  const file=path.join(app,'public',name==='/'?'index.html':name);
  if(!fs.existsSync(file)){res.writeHead(404);return res.end()}
  let b=fs.readFileSync(file);if(name==='/client.js')b=Buffer.from(b.toString()+qa);
  const mime={'.js':'text/javascript','.css':'text/css','.json':'application/json','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml'};
  res.setHeader('Content-Type',mime[path.extname(file)]||'text/html');res.end(b);
});
(async()=>{
  await new Promise(r=>server.listen(0,'127.0.0.1',r));
  const browser=await chromium.launch({executablePath:process.env.PAIR_UI_CHROMIUM||undefined,headless:true,args:['--no-sandbox']});
  try{
    for(const width of [320,375,390,414,520,768]){
      const page=await browser.newPage({viewport:{width,height:width===320?640:width>520?900:700}});
      const errors=[];page.on('pageerror',e=>errors.push(e.message));
      await page.routeWebSocket('**/*',ws=>ws.close());
      await page.addInitScript(()=>localStorage.setItem('kissmeet.theme','city'));
      await page.clock.install();await page.clock.pauseAt(new Date());
      await page.goto('http://127.0.0.1:'+server.address().port);
      await page.waitForFunction(()=>window.__pairQA);
      const open=async(targetLocal=false)=>page.evaluate(targetLocal=>{const q=window.__pairQA;q.closeHeartDuel();q.stop();q.renderPlayers({},true);const self=document.querySelector('.person.self'),other=document.querySelector('.person[data-gender="female"]');q.openHeartDuel(targetLocal?other:self,targetLocal?self:other,{automatic:targetLocal});},targetLocal);
      const geometry=()=>page.evaluate(()=>{
        const box=el=>{const r=el.getBoundingClientRect();return{x:r.x,y:r.y,w:r.width,h:r.height}};
        const pics=[...document.querySelectorAll('.pairScenePhoto')].map(box),link=box(document.querySelector('.pairSceneLink'));
        return{pics,link,arrows:[...document.querySelectorAll('.pairSceneArrowColor')].map(box),stage:box(document.querySelector('.pairSceneStage')),names:[...document.querySelectorAll('.pairSceneName')].map(box),buttons:[...document.querySelectorAll('.pairSceneActions button')].map(box)};
      });
      await open();await page.evaluate(()=>window.__pairQA.stop());
      const initial=await geometry();
      assert(Math.abs(initial.pics[0].w-initial.pics[0].h)<0.5,'reference portraits must be square');
      assert(initial.arrows[0].y+initial.arrows[0].h<=initial.pics[0].y+initial.pics[0].h*0.10,'upper arc crosses face');
      assert(initial.arrows[1].y>=initial.pics[0].y+initial.pics[0].h-1,'lower arc crosses face');
      assert.equal(await page.locator('.pairSceneLink').evaluate(n=>getComputedStyle(n).opacity),'0','kiss result must not be shown before choice');
      assert(initial.names.every(n=>n.y+n.h<=initial.buttons[0].y+0.5),'names overlap controls');
      assert(initial.buttons[0].x>=0&&initial.buttons[1].x+initial.buttons[1].w<=width,'controls outside viewport');
      assert.equal(await page.locator('.heartPairOrbit,.duelArc,.duel3dFx,.duelResultLabel').count(),0,'legacy graphics still mounted');
      await page.evaluate(()=>window.__pairQA.renderPlayers({},true));
      assert.equal(await page.locator('#players .heartDuelSource').count(),2,'source portraits duplicated after roster update');
      if(width===390)await page.screenshot({path:'/tmp/pair-choice.jpg',type:'jpeg',quality:40});
      await page.locator('#pairSceneKiss').click();
      assert.equal(await page.locator('#heartDuel').getAttribute('data-state'),'pending');
      assert.deepEqual((await geometry()).pics,initial.pics,'photos jump after choice');
      assert.deepEqual((await geometry()).link,initial.link,'arrows jump after choice');
      if(width===390)await page.screenshot({path:'/tmp/pair-pending.jpg',type:'jpeg',quality:40});
      await page.evaluate(()=>window.__pairQA.receiveHeartDuelPartnerChoice('kiss'));
      assert.equal(await page.locator('#heartDuel').getAttribute('data-state'),'mutual');
      assert.deepEqual(await page.locator('.pairSceneArrowColor').evaluateAll(nodes=>nodes.map(n=>getComputedStyle(n).stroke)),['rgb(142, 208, 68)','rgb(142, 208, 68)'],'both confirmed arrows must be green');
      assert.equal(await page.locator('.pairSceneLink').evaluate(n=>getComputedStyle(n).opacity),'1');
      assert.deepEqual((await geometry()).pics,initial.pics,'photos jump on result');
      assert.deepEqual((await geometry()).link,initial.link,'arrows jump on result');
      if(width===390){await page.screenshot({path:'/tmp/pair-mutual.jpg',type:'jpeg',quality:40});await page.locator('#heartDuel').screenshot({path:'/tmp/pair-detail.jpg',type:'jpeg',quality:85,scale:'css'})}
      await open();await page.evaluate(()=>window.__pairQA.stop());
      await page.locator('#pairSceneRefuse').click();await page.evaluate(()=>{window.__pairQA.receiveHeartDuelPartnerChoice('kiss');window.__pairQA.finishHeartDuelAtTimeout()});
      assert.equal(await page.locator('#heartDuel').getAttribute('data-state'),'declined');
      await open(true);await page.clock.runFor(2100);
      assert.equal(await page.locator('#heartDuel').getAttribute('data-state'),'choice','NPC chose for local target');
      assert.equal(await page.locator('#pairSceneKiss').isEnabled(),true);
      await page.clock.runFor(7000);assert.equal(await page.locator('#heartDuel').isVisible(),false,'no-input timeout must close');
      assert.equal(await page.locator('#players .heartDuelSource').count(),0);
      assert.deepEqual(errors,[],'browser errors');
      console.log('PASS '+width+'px: geometry, choice, refusal, mutual, target consent, timeout, roster refresh');
      await page.close();
    }
  }finally{await browser.close();server.close()}
})().catch(e=>{console.error(e);server.close();process.exitCode=1});
