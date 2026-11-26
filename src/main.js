import * as THREE from 'three';
import { TAU, $, clamp, lerp, smooth, rng, stepAngle } from './util.js';
import OBJ from './objects/pohon.js';
import { heightAt, WATER, buildTerrain, buildWater, setPaths } from './terrain.js';
import { createSky } from './sky.js';
import { buildVegetation } from './vegetation.js';
import { createFX } from './fx.js';
import { buildDissect } from './dissect.js';

(async function(){
'use strict';
const KEY='hutan-ilmu-v1',QKEY='hutan-ilmu-q';
const LAYERS=OBJ.layers,HEROES=OBJ.specimens,QUIZ=OBJ.quiz;
const isTouch=('ontouchstart' in window)||(navigator.maxTouchPoints>0)||window.matchMedia('(pointer:coarse)').matches;
const DEBUG=/[?&]debug/.test(location.search);
/* ---------------- state ---------------- */
const S={xp:0,found:{},trees:{},qdone:{},mission:false};
try{const j=localStorage.getItem(KEY);if(j){const o=JSON.parse(j);if(o&&typeof o==='object'){S.xp=o.xp|0;S.found=o.found||{};S.trees=o.trees||{};S.qdone=o.qdone||{};S.mission=!!o.mission}}}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
let toastT=0;
function toast(t){const el=$('#toast');el.textContent=t;el.classList.add('on');clearTimeout(toastT);toastT=setTimeout(function(){el.classList.remove('on')},2400)}
function missionText(){
  const n=Object.keys(S.found).length,t=Object.keys(S.trees).length;
  if(!S.mission)return 'Temukan 6 lapisan batang: '+n+'/6';
  if(t<HEROES.length)return 'Bedah semua pohon bertanda: '+t+'/'+HEROES.length;
  return 'Semua misi selesai. Coba kuis untuk XP tambahan.';
}
function updProfile(){
  const lvl=Math.floor(S.xp/100)+1;
  $('#lvl').textContent='Level '+lvl;
  $('#xpTxt').textContent=(S.xp%100)+' / 100 XP';
  $('#xpBar').style.width=(S.xp%100)+'%';
  $('#mission').textContent=missionText();
}
function award(n,why){S.xp+=n;toast('+'+n+' XP '+why);updProfile();save()}
function checkMission(){if(!S.mission&&Object.keys(S.found).length>=LAYERS.length){S.mission=true;award(60,'misi selesai');updProfile()}}

/* ---------------- renderer + kualitas ---------------- */
let quality=null;
try{quality=localStorage.getItem(QKEY)}catch(e){}
if(quality!=='tinggi'&&quality!=='hemat')quality=isTouch?'hemat':'tinggi';
const qo=(location.search.match(/[?&]q=(tinggi|hemat)/)||[])[1];if(DEBUG&&qo)quality=qo;
let renderer;
try{
  renderer=new THREE.WebGLRenderer({canvas:$('#view'),antialias:false,powerPreference:'high-performance'});
}catch(err){$('#nogl').style.display='flex';$('#loading').style.display='none';return}
const canvas=renderer.domElement;
renderer.toneMapping=THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure=1;
renderer.shadowMap.enabled=true;
renderer.shadowMap.type=THREE.PCFShadowMap;
const pixelRatio=function(){const d=window.devicePixelRatio||1;return quality==='tinggi'?Math.min(d,2):Math.min(d,1.25)};
function loadProgress(f,t){$('#loadBar').style.width=Math.round(f*100)+'%';if(t)$('#loadTxt').textContent=t}
const tick=function(){return new Promise(function(r){setTimeout(r,0)})};

/* ================= WORLD ================= */
setPaths(HEROES);
const world=new THREE.Scene();
const wcam=new THREE.PerspectiveCamera(66,1,0.15,1200);wcam.rotation.order='YXZ';
const sky=createSky(world,renderer);
buildTerrain(world);
const water=buildWater(world);

/* obstacles */
const GRID=8,grid=new Map();
function addObs(x,z,r){const k=Math.floor(x/GRID)+','+Math.floor(z/GRID);let a=grid.get(k);if(!a){a=[];grid.set(k,a)}a.push({x:x,z:z,r:r})}
function collide(p){
  const ix=Math.floor(p.x/GRID),iz=Math.floor(p.z/GRID);
  for(let a=-1;a<=1;a++)for(let b=-1;b<=1;b++){
    const arr=grid.get((ix+a)+','+(iz+b));if(!arr)continue;
    for(let i=0;i<arr.length;i++){
      const o=arr[i],ox=p.x-o.x,oz=p.z-o.z,d=Math.hypot(ox,oz),m=o.r+0.45;
      if(d<m&&d>0.0001){p.x=o.x+ox/d*m;p.z=o.z+oz/d*m}
    }
  }
}

const veg=await buildVegetation({scene:world,heroes:HEROES,addObs:addObs,quality:quality,progress:function(f,t){loadProgress(0.1+f*0.6,t)}});
const heroObjs=veg.heroObjs,heroHits=veg.heroHits;

const P={x:0,z:2,y:0,face:Math.PI,phase:0,jh:0,jv:0};
P.y=heightAt(P.x,P.z);
const cam={yaw:0,pitch:-0.04,fov:66};

/* ================= DISSECT ================= */
loadProgress(0.72,'Menyiapkan bedah batang…');await tick();
const D=buildDissect(renderer,LAYERS);
const dcam=D.camera,layerMeshes=D.layerMeshes,waterFlow=D.waterFlow,sugarFlow=D.sugarFlow,dState=D.state;
let selected=null,hovered=null;

/* ================= post-processing ================= */
loadProgress(0.85,'Menyiapkan efek visual…');await tick();
const fxW=createFX(renderer,world,wcam);
const fxD=createFX(renderer,D.scene,dcam,{aoRadius:0.45,bloomStrength:0.45});

let tDay=0.3,T=0;
function setClock(){
  const hrs=(tDay*24)%24,hh=Math.floor(hrs),mm=Math.floor((hrs-hh)*60);
  $('#clockTxt').textContent=(hh<10?'0':'')+hh+':'+(mm<10?'0':'')+mm;
  const nn=sky.day<0.25;if(nn!==wasNight){wasNight=nn;$('#clock').classList.toggle('night',nn)}
}
let wasNight=false;
function applyQuality(q){
  quality=q;try{localStorage.setItem(QKEY,q)}catch(e){}
  fxW.setQuality(q);fxD.setQuality(q);
  sky.setShadowSize(q==='tinggi'?2048:1024);sky.envEvery=q==='tinggi'?2.5:5;
  veg.setQuality(q);
  const b=$('#bQual');if(b)b.querySelector('span').textContent='Grafik: '+(q==='tinggi'?'Tinggi':'Hemat');
  resize();
}

/* ================= UI ================= */
let mode='world',curHero=0;
function sunCaption(){
  const s=dState.sun;
  $('#sunCap').textContent=s>0.66?'Matahari terik: daun menguapkan banyak air (transpirasi), sehingga air tertarik naik cepat. Fotosintesis tinggi, banyak gula dikirim lewat floem.'
    :s>0.33?'Cahaya sedang: transpirasi dan fotosintesis berjalan sedang.'
    :'Cahaya rendah atau malam: stomata cenderung menutup, aliran air melambat, dan gula yang dibuat berkurang.';
}
const CHECK='<svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>';
function renderChips(){
  const el=$('#chips');
  el.innerHTML=LAYERS.map(function(L){
    return '<button type="button" role="listitem" class="chip'+(selected===L.id?' sel':'')+'" data-id="'+L.id+'"><span class="sw" style="background:'+L.ui+'"></span>'+L.name+(S.found[L.id]?CHECK:'')+'</button>';
  }).join('');
}
function renderInfo(){
  const el=$('#info'),H=HEROES[curHero];
  if(!selected){
    el.innerHTML='<h2>Penampang batang</h2><p class="sci">'+H.name+'</p><p class="hint">Ketuk lapisan pada batang, atau pilih dari daftar, untuk mempelajarinya. Titik biru adalah air yang naik lewat xilem. Titik kuning adalah gula yang turun lewat floem.</p><h3>Tentang pohon ini</h3><p>'+H.fact+'</p>';
    return;
  }
  const L=LAYERS.find(function(x){return x.id===selected});
  el.innerHTML='<h2 style="color:'+L.ui+'">'+L.name+'</h2><p class="sci">'+L.sci+'</p><h3>Apa ini</h3><p>'+L.what+'</p><h3>Fungsi</h3><p>'+L.fn+'</p><h3>Tahukah kamu</h3><p>'+L.fact+'</p>'+(H.notes&&H.notes[L.id]?'<h3>Pada '+H.short+'</h3><p>'+H.notes[L.id]+'</p>':'');
}
function select(id){
  selected=id;
  if(id&&!S.found[id]){S.found[id]=1;award(20,'lapisan baru');checkMission()}
  renderChips();renderInfo();
  const p=$('#panel');if(p)p.scrollTop=0;
}
function fadeTo(fn){
  const f=$('#fade');f.style.opacity=1;
  setTimeout(function(){fn();f.style.opacity=0},window.matchMedia('(prefers-reduced-motion:reduce)').matches?0:380);
}
function enterDissect(i){
  fadeTo(function(){
    curHero=i;const H=HEROES[i];D.setSpecies(Object.assign({id:H.id},H.wood));
    mode='dissect';document.body.classList.add('dissect');
    $('#dName').textContent=H.name;$('#dSci').textContent='Penampang batang · '+H.sci;
    dState.yaw=0;dState.pitch=0.5;dState.dist=window.innerWidth<760?19:14;dState.user=false;
    if(!S.trees[H.id]){S.trees[H.id]=1;award(10,'pohon baru')}
    selected=null;renderChips();renderInfo();sunCaption();updProfile();resize();
    keys={};joy.x=0;joy.y=0;
  });
}
function exitDissect(){
  fadeTo(function(){mode='world';document.body.classList.remove('dissect');hideTip();updProfile();resize()});
}

/* modals */
function openModal(html){$('#sheet').innerHTML=html;$('#modal').classList.add('on');keys={};joy.x=0;joy.y=0}
function closeModal(){$('#modal').classList.remove('on')}
function modalOpen(){return $('#modal').classList.contains('on')}
function openJournal(){
  const nl=Object.keys(S.found).length,nt=Object.keys(S.trees).length;
  const lay=LAYERS.map(function(L){
    return S.found[L.id]
      ?'<div class="jc"><b><i style="background:'+L.ui+'"></i>'+L.name+'</b><em>'+L.sci+'</em><p>'+L.short+'</p></div>'
      :'<div class="jc lock"><b><i style="background:#3b4f47"></i>???</b><em>Belum ditemukan</em><p>Bedah sebuah pohon untuk menemukannya.</p></div>';
  }).join('');
  const tr=HEROES.map(function(H){
    return S.trees[H.id]
      ?'<div class="jc"><b>'+H.name+'</b><em>'+H.sci+'</em><p>'+H.fact+'</p></div>'
      :'<div class="jc lock"><b>???</b><em>Belum dibedah</em><p>Cari pohon bertanda di hutan.</p></div>';
  }).join('');
  openModal('<div class="head"><div><h2>Jurnal</h2><p style="color:var(--muted);font-size:14px">'+nl+'/'+LAYERS.length+' lapisan batang, '+nt+'/'+HEROES.length+' pohon</p></div><button class="x" type="button" data-close aria-label="Tutup">&times;</button></div><h3>Lapisan batang</h3><div class="grid">'+lay+'</div><h3>Pohon</h3><div class="grid">'+tr+'</div>');
}
let qz=null;
function shuffle(a,r){for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));const t=a[i];a[i]=a[j];a[j]=t}return a}
function startQuiz(){
  const r=Math.random;
  const pool=QUIZ.filter(function(q){return !q.sp||S.trees[q.sp]});
  const set=shuffle(pool.slice(),r).slice(0,6);
  qz={i:0,score:0,gain:0,set:set,order:set.map(function(_,i){return i}),done:false};
  renderQ();
}
function renderQ(){
  const q=qz.set[qz.order[qz.i]];
  if(!qz.optOrder||qz.optOrder.q!==q.id)qz.optOrder={q:q.id,o:shuffle(q.o.map(function(_,i){return i}),Math.random)};
  const opts=qz.optOrder.o.map(function(oi,k){return '<button type="button" class="opt" data-o="'+oi+'">'+q.o[oi]+'</button>'}).join('');
  openModal('<div class="head"><div><p style="color:var(--muted);font-size:13px;font-weight:800">Soal '+(qz.i+1)+' dari '+qz.set.length+'</p></div><button class="x" type="button" data-close aria-label="Tutup">&times;</button></div><p class="q">'+q.q+'</p><div class="opts" id="opts">'+opts+'</div><div id="qfb"></div>');
}
function answerQ(oi){
  const q=qz.set[qz.order[qz.i]],ok=oi===q.a;
  document.querySelectorAll('#opts .opt').forEach(function(b){
    const v=+b.dataset.o;b.disabled=true;
    if(v===q.a)b.classList.add('ok');else if(v===oi)b.classList.add('bad');
  });
  if(ok){qz.score++;if(!S.qdone[q.id]){S.qdone[q.id]=1;qz.gain+=15;S.xp+=15;updProfile();save()}}
  const last=qz.i>=qz.set.length-1;
  $('#qfb').innerHTML='<div class="exp"><b>'+(ok?'Benar. ':'Belum tepat. ')+'</b>'+q.e+'</div><div class="actions"><button type="button" class="btn primary" id="qnext">'+(last?'Lihat hasil':'Lanjut')+'</button></div>';
}
function nextQ(){
  if(qz.i>=qz.set.length-1){
    openModal('<div class="head"><h2>Hasil kuis</h2><button class="x" type="button" data-close aria-label="Tutup">&times;</button></div><p class="q">Skor '+qz.score+' dari '+qz.set.length+'</p><p style="color:var(--muted)">'+(qz.gain?'Kamu mendapat tambahan '+qz.gain+' XP dari soal yang baru benar pertama kali.':'XP hanya diberikan saat soal pertama kali dijawab benar.')+'</p><div class="actions"><button type="button" class="btn primary" id="qagain">Ulangi</button><button type="button" class="btn" data-close>Tutup</button></div>');
    return;
  }
  qz.i++;renderQ();
}
$('#modal').addEventListener('click',function(e){
  const t=e.target;
  if(t.id==='modal'||t.closest('[data-close]')){closeModal();return}
  const o=t.closest('.opt');if(o&&!o.disabled){answerQ(+o.dataset.o);return}
  if(t.closest('#qnext')){nextQ();return}
  if(t.closest('#qagain')){startQuiz()}
});
$('#bJournal').addEventListener('click',openJournal);
$('#bQuizW').addEventListener('click',startQuiz);
$('#dQuiz').addEventListener('click',startQuiz);
$('#bBack').addEventListener('click',exitDissect);
$('#chips').addEventListener('click',function(e){const b=e.target.closest('.chip');if(b)select(selected===b.dataset.id?null:b.dataset.id)});
$('#tWater').addEventListener('change',function(e){waterFlow.pts.visible=e.target.checked});
$('#tSugar').addEventListener('change',function(e){sugarFlow.pts.visible=e.target.checked});
$('#sun').addEventListener('input',function(e){dState.sun=+e.target.value/100;sunCaption()});
function hideTip(){$('#tip').style.display='none'}
$('#tipX').addEventListener('click',hideTip);
setTimeout(hideTip,20000);

/* ================= input ================= */
let keys={},jumpReq=false;
const joy={x:0,y:0};
if(isTouch)document.body.classList.add('touch');
window.addEventListener('keydown',function(e){
  if(e.target&&e.target.tagName==='INPUT'&&e.target.type!=='checkbox'&&e.target.type!=='range')return;
  const k=e.key.toLowerCase();
  if(k==='escape'){if(modalOpen())closeModal();else if(mode==='dissect')exitDissect();return}
  if(modalOpen())return;
  if(mode==='world'){
    if(['w','a','s','d','arrowup','arrowdown','arrowleft','arrowright','shift'].indexOf(k)>=0){keys[k]=true;e.preventDefault()}
    if(k==='e')tryInteract();
    if(k===' '){jumpReq=true;e.preventDefault()}
    if(k==='j')openJournal();
  }
});
window.addEventListener('keyup',function(e){delete keys[e.key.toLowerCase()]});
window.addEventListener('blur',function(){keys={}});

/* joystick */
(function(){
  const el=$('#joy'),knob=$('#joyK');let id=null;
  function set(e){
    const r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
    let dx=e.clientX-cx,dy=e.clientY-cy;const m=Math.hypot(dx,dy),max=r.width/2-8;
    if(m>max){dx=dx/m*max;dy=dy/m*max}
    knob.style.transform='translate('+dx+'px,'+dy+'px)';
    joy.x=dx/max;joy.y=-dy/max;
  }
  el.addEventListener('pointerdown',function(e){id=e.pointerId;el.setPointerCapture(id);set(e);e.preventDefault()});
  el.addEventListener('pointermove',function(e){if(e.pointerId===id)set(e)});
  function end(e){if(e.pointerId!==id)return;id=null;joy.x=0;joy.y=0;knob.style.transform=''}
  el.addEventListener('pointerup',end);el.addEventListener('pointercancel',end);
})();

/* canvas pointer: orbit, pinch, click */
const pts=new Map();let moved=0,downT=0,pinch0=0;
const ray=new THREE.Raycaster(),ndc=new THREE.Vector2();
function setRay(cx,cy,cam){const r=canvas.getBoundingClientRect();ndc.set((cx-r.left)/r.width*2-1,-((cy-r.top)/r.height)*2+1);ray.setFromCamera(ndc,cam)}
function pickLayer(cx,cy){setRay(cx,cy,dcam);const h=ray.intersectObjects(layerMeshes,false)[0];return h?h.object.userData.layer:null}
function pickHero(cx,cy){setRay(cx,cy,wcam);const h=ray.intersectObjects(heroHits,false)[0];return h?h.object.userData.hero:-1}
function nearestHero(){
  let b=-1,bd=1e9;
  HEROES.forEach(function(H,i){const d=Math.hypot(P.x-H.x,P.z-H.z);if(d<bd){bd=d;b=i}});
  return {i:b,d:bd};
}
function tryInteract(){
  const n=nearestHero();
  if(n.d<8)enterDissect(n.i);else toast('Dekati pohon bertanda dulu ('+Math.round(n.d-7)+' m lagi)');
}
canvas.addEventListener('pointerdown',function(e){
  if(modalOpen())return;
  canvas.setPointerCapture(e.pointerId);pts.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(pts.size===1){moved=0;downT=performance.now()}
  if(pts.size===2){const a=Array.from(pts.values());pinch0=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y)}
  canvas.classList.add('dragging');
});
canvas.addEventListener('pointermove',function(e){
  const p=pts.get(e.pointerId);
  if(!p){
    if(mode==='dissect'&&e.pointerType==='mouse'){
      const id=pickLayer(e.clientX,e.clientY);
      if(id!==hovered){hovered=id;canvas.style.cursor=id?'pointer':'grab'}
      const tl=$('#tipL');
      if(id){tl.style.display='block';tl.textContent=LAYERS.find(function(l){return l.id===id}).name;tl.style.left=(e.clientX+14)+'px';tl.style.top=(e.clientY+14)+'px'}
      else tl.style.display='none';
    }
    return;
  }
  const dx=e.clientX-p.x,dy=e.clientY-p.y;p.x=e.clientX;p.y=e.clientY;
  if(pts.size===1){
    moved+=Math.abs(dx)+Math.abs(dy);
    if(mode==='world'){cam.yaw-=dx*0.0045;cam.pitch=clamp(cam.pitch-dy*0.004,-1.3,1.3)}
    else{dState.user=true;dState.yaw-=dx*0.008;dState.pitch=clamp(dState.pitch+dy*0.006,-0.25,1.2)}
  }else if(pts.size===2){
    const a=Array.from(pts.values()),d=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);
    if(pinch0>0){
      const f=pinch0/d;
      if(mode==='dissect'){dState.user=true;dState.dist=clamp(dState.dist*f,6,24)}
    }
    pinch0=d;moved+=20;
  }
});
function up(e){
  if(!pts.has(e.pointerId))return;
  const wasOne=pts.size===1;pts.delete(e.pointerId);
  if(pts.size===0)canvas.classList.remove('dragging');
  if(wasOne&&e.type==='pointerup'&&moved<8&&performance.now()-downT<600){
    if(mode==='world'){
      const i=pickHero(e.clientX,e.clientY);
      if(i>=0){const H=HEROES[i],d=Math.hypot(P.x-H.x,P.z-H.z);if(d<9)enterDissect(i);else toast('Terlalu jauh. Dekati '+H.name+' ('+Math.round(d-8)+' m lagi)')}
    }else{
      const id=pickLayer(e.clientX,e.clientY);
      if(id)select(id);
    }
  }
}
canvas.addEventListener('pointerup',up);canvas.addEventListener('pointercancel',up);
canvas.addEventListener('pointerleave',function(){$('#tipL').style.display='none'});
canvas.addEventListener('wheel',function(e){
  e.preventDefault();const f=Math.exp(e.deltaY*0.001);
  if(mode==='dissect'){dState.user=true;dState.dist=clamp(dState.dist*f,6,24)}
},{passive:false});
$('#act').addEventListener('click',tryInteract);
$('#jump').addEventListener('pointerdown',function(e){e.preventDefault();jumpReq=true});


/* ================= loop ================= */
const tags=HEROES.map(function(H){const d=document.createElement('div');d.className='tag';$('#tags').appendChild(d);return d});
const tv=new THREE.Vector3();
let nearAcc=0;
function updWorld(dt){
  const kx=(keys.d||keys.arrowright?1:0)-(keys.a||keys.arrowleft?1:0);
  const ky=(keys.w||keys.arrowup?1:0)-(keys.s||keys.arrowdown?1:0);
  const ix=clamp(kx+joy.x,-1,1),iy=clamp(ky+joy.y,-1,1);
  const fx=-Math.sin(cam.yaw),fz=-Math.cos(cam.yaw),rx=Math.cos(cam.yaw),rz=-Math.sin(cam.yaw);
  const mx=fx*iy+rx*ix,mz=fz*iy+rz*ix,mag=Math.min(1,Math.hypot(mx,mz));
  let speedNow=0;
  if(mag>0.06){
    const L=Math.hypot(mx,mz),dx=mx/L,dz=mz/L;
    const run=keys.shift||(joy.x*joy.x+joy.y*joy.y>0.72);
    speedNow=(run?8.2:4.6)*mag;
    const nx=P.x+dx*speedNow*dt,nz=P.z+dz*speedNow*dt;
    const walk=function(x,z){return Math.hypot(x,z)<112&&heightAt(x,z)>WATER-0.3};
    if(walk(nx,P.z))P.x=nx;
    if(walk(P.x,nz))P.z=nz;
    collide(P);
    P.phase+=speedNow*dt*1.25;
  }
  const gy=heightAt(P.x,P.z);P.y+=(gy-P.y)*Math.min(1,dt*14);
  if(jumpReq&&P.jh<=0.001){P.jv=6.4}
  jumpReq=false;
  if(P.jh>0||P.jv>0){P.jv-=20*dt;P.jh=Math.max(0,P.jh+P.jv*dt);if(P.jh===0)P.jv=0}

  /* kamera orang pertama: tinggi mata 1,68 m, goyangan langkah halus, FOV melebar saat lari */
  const mv=Math.min(1,speedNow/4.6);
  const bob=Math.sin(P.phase*2)*0.032*mv,sway=Math.cos(P.phase)*0.018*mv;
  wcam.position.set(P.x+Math.cos(cam.yaw)*sway,P.y+1.68+bob+P.jh,P.z-Math.sin(cam.yaw)*sway);
  wcam.rotation.set(cam.pitch,cam.yaw,0);
  const tf=66+(speedNow>6?5:0);cam.fov+=(tf-cam.fov)*Math.min(1,dt*5);
  if(Math.abs(wcam.fov-cam.fov)>0.02){wcam.fov=cam.fov;wcam.updateProjectionMatrix()}

  /* markers, tags, prompt */
  let bestD=1e9,bestI=-1;
  heroObjs.forEach(function(o,i){
    const H=HEROES[i];
    o.mk.rotation.y+=dt*1.6;o.mk.position.y=o.y+H.top+2.2+Math.sin(T*2+i)*0.3;
    const s=1+0.1*Math.sin(T*3+i);o.ring.scale.set(s,s,s);
    const d=Math.hypot(P.x-H.x,P.z-H.z),tg=tags[i];
    if(d<bestD){bestD=d;bestI=i}
    tv.set(H.x,o.y+H.top*0.6,H.z).project(wcam);
    if(tv.z<1&&d<60&&d>11){
      const w=window.innerWidth,h=window.innerHeight;
      tg.style.display='block';
      tg.style.transform='translate('+((tv.x*0.5+0.5)*w)+'px,'+((-tv.y*0.5+0.5)*h)+'px) translate(-50%,-100%)';
      tg.className='tag'+(S.trees[H.id]?' done':'');
      tg.innerHTML=H.name+'<small>'+Math.round(d)+' m</small>';
    }else tg.style.display='none';
  });
  /* prompt ala GTA: menempel di batang pohon terdekat */
  const act=$('#act');
  if(bestD<9&&!modalOpen()){
    const H=HEROES[bestI],o=heroObjs[bestI];
    tv.set(H.x,o.y+1.7,H.z).project(wcam);
    const w=window.innerWidth,h=window.innerHeight;
    let ax=(tv.x*0.5+0.5)*w,ay=(-tv.y*0.5+0.5)*h;
    if(tv.z>1){ax=w*0.5;ay=h*0.62}
    ax=clamp(ax,110,w-110);ay=clamp(ay,100,h-170);
    act.style.transform='translate('+ax+'px,'+ay+'px) translate(-50%,-50%)';
    if(act.dataset.i!==String(bestI)){act.dataset.i=bestI;$('#actName').textContent=H.name}
    act.classList.add('on');
  }else act.classList.remove('on');
  nearAcc+=dt;
  if(nearAcc>0.2){
    nearAcc=0;
    const n=nearestHero(),H=HEROES[n.i];
    $('#near').textContent='Terdekat: '+H.name+', '+Math.round(n.d)+' m';
  }
}
function resize(){
  const w=window.innerWidth,h=window.innerHeight,pr=pixelRatio();
  renderer.setPixelRatio(pr);renderer.setSize(w,h,false);
  fxW.setSize(w,h,pr);fxD.setSize(w,h,pr);
  wcam.aspect=w/h;wcam.updateProjectionMatrix();
  dcam.aspect=w/h;
  /* keep the trunk clear of the side panel on wide screens */
  if(w>760){dcam.setViewOffset(w,h,Math.min(120,w*0.09),0,w,h)}else{dcam.clearViewOffset()}
  dcam.updateProjectionMatrix();
}
window.addEventListener('resize',resize);
$('#bQual').addEventListener('click',function(){applyQuality(quality==='tinggi'?'hemat':'tinggi')});
applyQuality(quality);
updProfile();
sky.update(tDay,T,0.016,{x:P.x,y:P.y+1.6,z:P.z});setClock();

$('#loading').classList.add('done');
setTimeout(function(){$('#loading').style.display='none'},700);

if(DEBUG)window.__hi={enter:enterDissect,select:select,P:P,cam:cam,startQuiz:startQuiz,openJournal:openJournal,renderer:renderer,world:world,veg:veg,sky:sky,applyQuality:applyQuality,setTime:function(t){tDay=t},look:function(i,d){const H=HEROES[i];d=d||11;const L=Math.hypot(H.x,H.z-2)||1;P.x=H.x+(0-H.x)/L*d;P.z=H.z+(2-H.z)/L*d;P.y=heightAt(P.x,P.z);cam.yaw=Math.atan2(P.x-H.x,P.z-H.z);cam.pitch=0.22},getMode:function(){return mode}};

let last=performance.now(),paused=false;
function step(dt){
  T+=dt;
  if(mode==='world'){
    tDay=(tDay+dt/240)%1;
    updWorld(dt);
    sky.update(tDay,T,dt,{x:P.x,y:P.y+1.6,z:P.z});setClock();
    veg.update(P,T,dt);water.update(T);
    fxW.render(dt);
  }else{
    D.update(dt,T,selected,hovered);
    fxD.render(dt);
  }
}
let perfAcc=0,perfN=0,perfT=0,autoDone=false;
function perfWatch(dt){
  if(autoDone||quality!=='tinggi'||mode!=='world'||DEBUG)return;
  perfT+=dt;if(perfT<5)return;
  perfAcc+=dt;perfN++;
  if(perfAcc>=4){autoDone=true;if(perfAcc/perfN>0.034){applyQuality('hemat');toast('Grafik diturunkan ke Hemat agar tetap lancar. Ganti lewat tombol Grafik.')}}
}
function frame(now){
  const dt=Math.min(0.05,(now-last)/1000);last=now;
  if(!paused){step(dt);perfWatch(dt)}
  requestAnimationFrame(frame);
}
if(DEBUG){window.__hi.pause=function(v){paused=v!==false};window.__hi.step=step}
requestAnimationFrame(frame);
})().catch(function(e){console.error(e);const l=document.getElementById('loadTxt');if(l)l.textContent='Gagal memuat: '+(e&&e.message||e)});
