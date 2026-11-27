import * as THREE from 'three';
import { TAU, $, clamp, lerp, smooth, rng, stepAngle } from './util.js';
import OBJ from './objects/pohon.js';
import { heightAt, WATER, LAKE, SIZE, buildTerrain, buildWater, setPaths, buildRiver, riverInfo, waterAt } from './terrain.js';
import { createSky } from './sky.js';
import { buildVegetation } from './vegetation.js';
import { createFX } from './fx.js';
import { buildDissect } from './dissect.js';
import CAT from './objects/kucing.js';
import { ruminantData } from './objects/ruminansia.js';
import { buildWorldAnimal, buildAnimalDissect, merge as mergeGeo } from './animal.js';
import SP_KUCING from './species/kucing.js';
import SP_SAPI from './species/sapi.js';
import SP_KAMBING from './species/kambing.js';
import SP_AYAM from './species/ayam.js';
import SP_KUPU from './species/kupu.js';
import SP_KATAK from './species/katak.js';
import SP_BURUNG from './species/burung.js';
import SP_PENYU from './species/penyu.js';
import SP_KERBAU from './species/kerbau.js';
import SP_ENGGANG from './species/enggang.js';
import { ENGGANG, RAFFLESIA, KANTONG, TAJUK } from './objects/hutanhujan.js';
import { buildRainforestDecor, buildRafflesiaDissect, buildPitcherDissect, buildCanopyDissect } from './rainforest.js';
import SP_BEBEK from './species/bebek.js';
import { PADI, KERBAU, BEBEK, LEBAH, KOMPOS } from './objects/peternakan.js';
import { buildFarm, buildRiceDissect, buildHiveDissect, buildCompostDissect } from './farm.js';
import SP_UNTA from './species/unta.js';
import { PENYU, UNTA, KARANG, GUMUK, KAKTUS } from './objects/pantaigurun.js';
import { buildCoastDecor, buildReefDissect, buildDuneDissect, buildCactusDissect } from './coast.js';
import SP_KEPITING from './species/kepiting.js';
import { BURUNG, KEPITING } from './objects/hewan3.js';
import { AYAM, KUPU, KATAK } from './objects/hewan2.js';
import { fishData, FISH_IDS } from './objects/ikan.js';
import { fishSpec, buildFishSchools } from './fish.js';
import { monoData } from './objects/monokotil.js';
import { buildPalm, buildBamboo, buildMonoDissect } from './monocot.js';
import DAUN from './objects/daun.js';
import { buildSapling, buildLeafDissect } from './leaf.js';
import { TANAH, BATUAN, AIR } from './objects/geo.js';
import { BAKAU, JAMUR } from './objects/ekosistem.js';
import { buildMangroveGrove, buildMangroveDissect, buildMushroomLog, buildFungusDissect } from './eco.js';
import { buildSoilDissect, buildRockDissect, buildWaterCycleDissect, buildSoilBank, buildRockOutcrop, buildSignboard } from './geo.js';
import BUNGA from './objects/bunga.js';
import { buildHibiscusBush, buildFlowerDissect } from './flower.js';
import { createAudio } from './audio.js';
import { createNav, CATS } from './nav.js';
import { biomeAt, dominant, coastR } from './world.js';
import { createSplash } from './splash.js';

(async function(){
'use strict';
const KEY='hutan-ilmu-v1',QKEY='hutan-ilmu-q';
const TLAYERS=OBJ.layers,TREES=OBJ.specimens,QUIZ=OBJ.quiz;
const AN=[{data:CAT,spec:SP_KUCING},{data:ruminantData('sapi'),spec:SP_SAPI},{data:ruminantData('kambing'),spec:SP_KAMBING},{data:AYAM,spec:SP_AYAM,extra:[[-6,13.5],[-2.5,14]]},{data:KUPU,spec:SP_KUPU,extra:[[-5,-1],[0,-5.5]]},{data:KATAK,spec:SP_KATAK,extra:[[-19,18],[-17.5,23.5]]},{data:BURUNG,spec:SP_BURUNG,extra:[[-9,2],[11,-5]]},{data:KEPITING,spec:SP_KEPITING,extra:[[-22,16],[-22,38]]},{data:PENYU,spec:SP_PENYU,extra:[[-12,176]]},{data:UNTA,spec:SP_UNTA,extra:[[255,235],[220,190]]},{data:KERBAU,spec:SP_KERBAU,extra:[[228,-12]]},{data:BEBEK,spec:SP_BEBEK,extra:[[270,-100],[258,-99],[262,-92]]},{data:ENGGANG,spec:SP_ENGGANG,extra:[[-300,-30]]}];
const FI=FISH_IDS.map(function(id){const d=fishData(id);return {data:d,spec:fishSpec(d.P),fish:true}});
const MO=['kelapa','bambu'].map(function(id){const d=monoData(id);return {data:d,mono:true,buildD:function(r){return buildMonoDissect(r,{type:id})}}});
const LF=[{data:DAUN,leaf:true,buildD:function(r){return buildLeafDissect(r)}}];
const GEO=[{data:TANAH,geo:true,buildD:buildSoilDissect},{data:BATUAN,geo:true,buildD:buildRockDissect},{data:AIR,geo:true,buildD:buildWaterCycleDissect}];
const FL=[{data:BUNGA,flower:true,buildD:buildFlowerDissect}];
const ECO=[{data:BAKAU,geo:true,buildD:buildMangroveDissect},{data:JAMUR,geo:true,buildD:buildFungusDissect},{data:KARANG,geo:true,buildD:buildReefDissect},{data:GUMUK,geo:true,buildD:buildDuneDissect},{data:KAKTUS,geo:true,buildD:buildCactusDissect},{data:PADI,geo:true,buildD:buildRiceDissect},{data:LEBAH,geo:true,buildD:buildHiveDissect},{data:KOMPOS,geo:true,buildD:buildCompostDissect},{data:RAFFLESIA,geo:true,buildD:buildRafflesiaDissect},{data:KANTONG,geo:true,buildD:buildPitcherDissect},{data:TAJUK,geo:true,buildD:buildCanopyDissect}];
const ALL=AN.concat(FI,MO,LF,GEO,FL,ECO);
const HEROES=TREES.concat(ALL.map(function(a){return a.data.specimen}));
ALL.forEach(function(a,i){a.hi=TREES.length+i});
const PADDOCK={x:13,z:22.5,r:8.5};
let LAYERS=TLAYERS,subject='tree';
const isAnimal=function(){return subject!=='tree'};
const anOf=function(id){return ALL.find(function(a){return a.data.id===id})};
const isFish=function(){return isAnimal()&&!!anOf(subject).fish};
const fishCount=function(){return FI.filter(function(a){return S.trees[a.data.id]}).length};
const fk=function(id){return subject==='tree'?id:(subject==='kucing'?'cat:':subject+':')+id};
const animalCount=function(){return AN.filter(function(a){return S.trees[a.data.id]}).length};
const treeCount=function(){return TREES.filter(function(t){return S.trees[t.id]}).length};
const foundCount=function(){return Object.keys(S.found).filter(function(k){return k.indexOf(':')<0}).length};
const isTouch=('ontouchstart' in window)||(navigator.maxTouchPoints>0)||window.matchMedia('(pointer:coarse)').matches;
const DEBUG=/[?&]debug/.test(location.search);
/* ---------------- state ---------------- */
const S={xp:0,found:{},trees:{},qdone:{},mission:false};
try{const j=localStorage.getItem(KEY);if(j){const o=JSON.parse(j);if(o&&typeof o==='object'){S.xp=o.xp|0;S.found=o.found||{};S.trees=o.trees||{};S.qdone=o.qdone||{};S.mission=!!o.mission}}}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
let toastT=0;
function toast(t){const el=$('#toast');el.textContent=t;el.classList.add('on');clearTimeout(toastT);toastT=setTimeout(function(){el.classList.remove('on')},2400)}
function missionText(){
  const n=foundCount(),t=treeCount();
  if(!S.mission)return 'Temukan 6 lapisan batang: '+n+'/6';
  if(t<TREES.length)return 'Bedah semua pohon bertanda: '+t+'/'+TREES.length;
  if(animalCount()<AN.length)return 'Bedah hewan: kucing, sapi, kambing, ayam, kupu-kupu, katak '+animalCount()+'/'+AN.length;
  const mc=MO.filter(function(a){return S.trees[a.data.id]}).length;
  if(mc<MO.length)return 'Bedah tumbuhan monokotil (kelapa, bambu) dan bandingkan dengan jati: '+mc+'/'+MO.length;
  const gc=GEO.filter(function(a){return S.trees[a.data.id]}).length;
  if(S.trees.daun&&gc<GEO.length)return 'Pelajari tanah, batuan, dan siklus air: '+gc+'/'+GEO.length;
  if(!S.trees.daun)return 'Pelajari daun dan fotosintesis di anakan jati dekat jalan setapak.';
  if(fishCount()<FI.length)return 'Selami danau dan bedah 5 jenis ikan: '+fishCount()+'/'+FI.length;
  return 'Semua misi selesai. Coba kuis untuk XP tambahan.';
}
function updProfile(){
  const lvl=Math.floor(S.xp/100)+1;
  $('#lvl').textContent='Level '+lvl;
  $('#xpTxt').textContent=(S.xp%100)+' / 100 XP';
  $('#xpBar').style.width=(S.xp%100)+'%';
  $('#mission').textContent=missionText();
}
function award(n,why){S.xp+=n;toast('+'+n+' XP '+why);audio.chime(n>=30);updProfile();save()}
function checkMission(){if(!S.mission&&foundCount()>=TLAYERS.length){S.mission=true;award(60,'misi selesai');updProfile()}}

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
setPaths(TREES.concat(MO.map(function(a){return a.data.specimen})));
const world=new THREE.Scene();
const wcam=new THREE.PerspectiveCamera(66,1,0.15,1200);wcam.rotation.order='YXZ';
const sky=createSky(world,renderer);
const terrain=buildTerrain(world);const coastDeco=buildCoastDecor(world,heightAt,WATER);const rain=buildRainforestDecor(world,heightAt,{tajuk:[-250,20],rafflesia:[-262,34],kantong:[-238,40]});const farm=buildFarm(world,heightAt,{sawah:{x0:225,z0:-75,nx:4,nz:3,w:14,d:10},kandang:[302,22],lebah:[300,-75],kompos:[292,12],center:[260,-30]});terrain.update({x:0,z:2},true);
const water=buildWater(world);
const splash=createSplash(world,WATER);
const river=buildRiver(world);

/* obstacles */
const GRID=8,grid=new Map();
function addObs(x,z,r){const k=Math.floor(x/GRID)+','+Math.floor(z/GRID);let a=grid.get(k);if(!a){a=[];grid.set(k,a)}a.push({x:x,z:z,r:r})}
function blocked(x,z,m){const ix=Math.floor(x/GRID),iz=Math.floor(z/GRID);for(let a=-1;a<=1;a++)for(let b=-1;b<=1;b++){const arr=grid.get((ix+a)+','+(iz+b));if(!arr)continue;for(let i=0;i<arr.length;i++){const o=arr[i];if(Math.hypot(x-o.x,z-o.z)<o.r+(m||0.6))return true}}return false}
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

const veg=await buildVegetation({scene:world,heroes:TREES,clear:[PADDOCK,{x:4,z:-3,r:2.5},{x:-12,z:-16,r:3.5},{x:20,z:-2,r:4},{x:-18.5,z:29.5,r:2.5},{x:-27,z:14.5,r:7},{x:13,z:-8,r:2.5},{x:-250,z:20,r:12},{x:-290,z:45,r:9},{x:-220,z:-15,r:9},{x:-262,z:34,r:4},{x:-238,z:40,r:4}].concat(MO.map(function(a){const H=a.data.specimen;return {x:H.x,z:H.z,r:5}}),[{x:-18,z:38,r:5}]),addObs:addObs,quality:quality,progress:function(f,t){loadProgress(0.1+f*0.6,t)}});
const heroObjs=veg.heroObjs,heroHits=veg.heroHits;
/* hewan di dunia: dijadwalkan setelah pohon supaya tag, prompt, dan klik memakai jalur yang sama */
AN.forEach(function(a,k){
  const H=a.data.specimen;
  a.w=buildWorldAnimal(world,{heightAt:heightAt,WATER:WATER,blocked:blocked},a.spec,{x:H.x,z:H.z},404+k*31,(a.data.id==='sapi'||a.data.id==='kambing')?PADDOCK:null);
  const mk=new THREE.Mesh(new THREE.OctahedronGeometry(a.data.id==='sapi'?0.3:0.16,0),new THREE.MeshStandardMaterial({color:0xffd35a,emissive:0xffa800,emissiveIntensity:2.2,roughness:0.3}));mk.userData.noAO=true;world.add(mk);
  const rr=a.data.id==='sapi'?1.6:a.data.id==='kambing'?0.9:0.55;
  const rg=new THREE.RingGeometry(rr,rr+0.1,48,1);rg.rotateX(-Math.PI/2);
  const ring=new THREE.Mesh(rg,new THREE.MeshBasicMaterial({color:new THREE.Color(2.2,1.7,0.5),transparent:true,opacity:0.8,side:THREE.DoubleSide,depthWrite:false}));ring.userData.noAO=true;world.add(ring);
  a.w.hit.userData.hero=a.hi;heroHits.push(a.w.hit);
  heroObjs.push({g:a.w.group,mk:mk,ring:ring,y:a.w.y});
  a.callT=4+k*5;
  a.extraW=(a.extra||[]).map(function(p,j){return buildWorldAnimal(world,{heightAt:heightAt,WATER:WATER,blocked:blocked},a.spec,{x:p[0],z:p[1]},900+k*17+j*5,null)});
});
/* ikan di danau: kawanan instanced; spesimen bedah mengikuti ikan pertama tiap jenis */
const fishW=buildFishSchools(world,{heightAt:heightAt,WATER:WATER},FI.map(function(a){return Object.assign({P:a.data.P},a.data.world)}),LAKE);
FI.forEach(function(a,k){
  const hit=new THREE.Mesh(new THREE.SphereGeometry(0.6,8,6),new THREE.MeshBasicMaterial({visible:false}));hit.userData.hero=a.hi;world.add(hit);heroHits.push(hit);
  a.hit=hit;a.G=fishW.groups[k];
  heroObjs.push({g:new THREE.Object3D(),mk:new THREE.Object3D(),ring:new THREE.Object3D(),y:WATER-1});
});
/* kelapa di tepi danau dan rumpun bambu */
MO.forEach(function(a){
  const H=a.data.specimen,y=heightAt(H.x,H.z);
  if(a.data.id==='kelapa'){buildPalm(world,H.x,y,H.z,7,9.5);addObs(H.x,H.z,0.35);[[-20,40,3,8],[-14,37,5,10],[-22,43,9,7.5]].forEach(function(p){buildPalm(world,p[0],heightAt(p[0],p[1]),p[1],p[2],p[3]);addObs(p[0],p[1],0.3)})}
  else{buildBamboo(world,H.x,y,H.z,3);addObs(H.x,H.z,1.1)}
  const mk=new THREE.Mesh(new THREE.OctahedronGeometry(0.3,0),new THREE.MeshStandardMaterial({color:0xffd35a,emissive:0xffa800,emissiveIntensity:2.2,roughness:0.3}));mk.position.set(H.x,0,H.z);mk.userData.noAO=true;world.add(mk);
  const rg=new THREE.RingGeometry(1.4,1.55,48,1);rg.rotateX(-Math.PI/2);
  const ring=new THREE.Mesh(rg,new THREE.MeshBasicMaterial({color:new THREE.Color(2.2,1.7,0.5),transparent:true,opacity:0.8,side:THREE.DoubleSide,depthWrite:false}));ring.position.set(H.x,y+0.05,H.z);ring.userData.noAO=true;world.add(ring);
  const hit=new THREE.Mesh(new THREE.CylinderGeometry(1.2,1.2,6,8),new THREE.MeshBasicMaterial({visible:false}));hit.position.set(H.x,y+3,H.z);hit.userData.hero=a.hi;world.add(hit);heroHits.push(hit);
  heroObjs.push({g:new THREE.Object3D(),mk:mk,ring:ring,y:y});
});
/* anakan jati untuk pelajaran daun */
LF.forEach(function(a){
  const H=a.data.specimen,y=heightAt(H.x,H.z);buildSapling(world,H.x,y,H.z);addObs(H.x,H.z,0.2);
  const mk=new THREE.Mesh(new THREE.OctahedronGeometry(0.16,0),new THREE.MeshStandardMaterial({color:0xffd35a,emissive:0xffa800,emissiveIntensity:2.2,roughness:0.3}));mk.position.set(H.x,0,H.z);mk.userData.noAO=true;world.add(mk);
  const rg=new THREE.RingGeometry(0.7,0.8,40,1);rg.rotateX(-Math.PI/2);
  const ring=new THREE.Mesh(rg,new THREE.MeshBasicMaterial({color:new THREE.Color(2.2,1.7,0.5),transparent:true,opacity:0.8,side:THREE.DoubleSide,depthWrite:false}));ring.position.set(H.x,y+0.05,H.z);ring.userData.noAO=true;world.add(ring);
  const hit=new THREE.Mesh(new THREE.CylinderGeometry(0.6,0.6,2.4,8),new THREE.MeshBasicMaterial({visible:false}));hit.position.set(H.x,y+1.2,H.z);hit.userData.hero=a.hi;world.add(hit);heroHits.push(hit);
  heroObjs.push({g:new THREE.Object3D(),mk:mk,ring:ring,y:y});
});
/* tanah, batuan, papan siklus air */
GEO.forEach(function(a){
  const H=a.data.specimen,y=heightAt(H.x,H.z),face=Math.atan2(0-H.x,2-H.z);
  if(a.data.id==='tanah'){buildSoilBank(world,H.x,y,H.z,face);addObs(H.x,H.z,1.2)}
  else if(a.data.id==='batuan'){const og=buildRockOutcrop(world,H.x,y,H.z);og.children.forEach(function(m){let lo=1e9;for(let k=0;k<6;k++){const aa=k/6*Math.PI*2;lo=Math.min(lo,heightAt(H.x+m.position.x+Math.cos(aa)*0.6,H.z+m.position.z+Math.sin(aa)*0.6))}m.position.y+=lo-y-0.12});addObs(H.x,H.z,1.4)}
  else{buildSignboard(world,H.x,y,H.z,face);addObs(H.x,H.z,0.6)}
  const mk=new THREE.Mesh(new THREE.OctahedronGeometry(0.2,0),new THREE.MeshStandardMaterial({color:0xffd35a,emissive:0xffa800,emissiveIntensity:2.2,roughness:0.3}));mk.position.set(H.x,0,H.z);mk.userData.noAO=true;world.add(mk);
  const rg=new THREE.RingGeometry(1.5,1.62,48,1);rg.rotateX(-Math.PI/2);
  const ring=new THREE.Mesh(rg,new THREE.MeshBasicMaterial({color:new THREE.Color(2.2,1.7,0.5),transparent:true,opacity:0.8,side:THREE.DoubleSide,depthWrite:false}));ring.position.set(H.x,y+0.05,H.z);ring.userData.noAO=true;world.add(ring);
  const hit=new THREE.Mesh(new THREE.CylinderGeometry(1.3,1.3,2.4,8),new THREE.MeshBasicMaterial({visible:false}));hit.position.set(H.x,y+1.2,H.z);hit.userData.hero=a.hi;world.add(hit);heroHits.push(hit);
  heroObjs.push({g:new THREE.Object3D(),mk:mk,ring:ring,y:y});
});
/* semak kembang sepatu dengan lebah */
let bush=null;
FL.forEach(function(a){
  const H=a.data.specimen,y=heightAt(H.x,H.z);bush=buildHibiscusBush(world,H.x,y,H.z);addObs(H.x,H.z,0.9);
  const mk=new THREE.Mesh(new THREE.OctahedronGeometry(0.18,0),new THREE.MeshStandardMaterial({color:0xffd35a,emissive:0xffa800,emissiveIntensity:2.2,roughness:0.3}));mk.position.set(H.x,0,H.z);mk.userData.noAO=true;world.add(mk);
  const rg=new THREE.RingGeometry(1.3,1.42,48,1);rg.rotateX(-Math.PI/2);
  const ring=new THREE.Mesh(rg,new THREE.MeshBasicMaterial({color:new THREE.Color(2.2,1.7,0.5),transparent:true,opacity:0.8,side:THREE.DoubleSide,depthWrite:false}));ring.position.set(H.x,y+0.05,H.z);ring.userData.noAO=true;world.add(ring);
  const hit=new THREE.Mesh(new THREE.CylinderGeometry(1.1,1.1,2.4,8),new THREE.MeshBasicMaterial({visible:false}));hit.position.set(H.x,y+1.2,H.z);hit.userData.hero=a.hi;world.add(hit);heroHits.push(hit);
  heroObjs.push({g:new THREE.Object3D(),mk:mk,ring:ring,y:y});
});
/* ekosistem: rumpun bakau di tepi danau dan batang kayu berjamur */
ECO.forEach(function(a){
  const H=a.data.specimen,y=heightAt(H.x,H.z);
  if(a.data.id==='bakau'){buildMangroveGrove(world,[[-31,11.5,'R',0.85],[-29,13.2,'R',1],[-26.6,15.4,'R',0.9],[-24.6,17.4,'R',0.8],[-30.5,15.5,'R',0.95],[-27.8,10.6,'A',0.9],[-23.4,15.2,'A',0.8]],heightAt);[[-29,13.2],[-26.6,15.4],[-31,11.5],[-24.6,17.4]].forEach(function(q){addObs(q[0],q[1],0.5)})}
  else if(a.data.id==='jamur'){buildMushroomLog(world,H.x,y,H.z,0.4);addObs(H.x,H.z,1.2)}
  else if(a.data.id==='lebah'||a.data.id==='kompos'){addObs(H.x,H.z,a.data.id==='kompos'?1.3:0.5)}
  else if(a.data.id==='padi'){}
  else if(a.data.id==='tajuk'){[[-250,20],[-290,45],[-220,-15]].forEach(function(q){addObs(q[0],q[1],2.6)})}
  else if(a.data.id==='kaktus'){const cm=new THREE.MeshStandardMaterial({color:new THREE.Color().setRGB(0.3,0.5,0.26,THREE.SRGBColorSpace),roughness:0.55});const k=new THREE.Mesh(new THREE.CylinderGeometry(0.45,0.5,4.2,14).translate(0,2.1,0),cm),t=new THREE.Mesh(new THREE.SphereGeometry(0.45,14,10).translate(0,4.2,0),cm),arm=new THREE.Mesh(new THREE.CylinderGeometry(0.28,0.3,1.6,12).translate(0.9,3.0,0),cm),arm2=new THREE.Mesh(new THREE.CylinderGeometry(0.28,0.3,0.6,10).rotateZ(Math.PI/2).translate(0.6,2.2,0),cm);[k,t,arm,arm2].forEach(function(m){m.castShadow=true;m.position.set(H.x,y-0.1,H.z);world.add(m)});addObs(H.x,H.z,0.7)}
  const mk=new THREE.Mesh(new THREE.OctahedronGeometry(0.2,0),new THREE.MeshStandardMaterial({color:0xffd35a,emissive:0xffa800,emissiveIntensity:2.2,roughness:0.3}));mk.position.set(H.x,0,H.z);mk.userData.noAO=true;world.add(mk);
  const rg=new THREE.RingGeometry(1.5,1.62,48,1);rg.rotateX(-Math.PI/2);
  const ry=Math.max(y,WATER)+0.05;
  const ring=new THREE.Mesh(rg,new THREE.MeshBasicMaterial({color:new THREE.Color(2.2,1.7,0.5),transparent:true,opacity:0.8,side:THREE.DoubleSide,depthWrite:false}));ring.position.set(H.x,ry,H.z);ring.userData.noAO=true;world.add(ring);
  const hit=new THREE.Mesh(new THREE.CylinderGeometry(1.4,1.4,3,8),new THREE.MeshBasicMaterial({visible:false}));hit.position.set(H.x,ry+1.5,H.z);hit.userData.hero=a.hi;world.add(hit);heroHits.push(hit);
  heroObjs.push({g:new THREE.Object3D(),mk:mk,ring:ring,y:ry});
});
/* pagar padang rumput, ada celah gerbang menghadap titik awal */
(function(){
  const n=28,gate=Math.atan2(2-PADDOCK.z,0-PADDOCK.x),posts=[],rails=[],P0=[];
  for(let i=0;i<n;i++){const a=i/n*Math.PI*2,x=PADDOCK.x+Math.cos(a)*PADDOCK.r,z=PADDOCK.z+Math.sin(a)*PADDOCK.r;P0.push({a:a,x:x,z:z,y:heightAt(x,z)})}
  const ad=function(a,b){return Math.abs(Math.atan2(Math.sin(a-b),Math.cos(a-b)))};
  P0.forEach(function(p,i){
    const g=new THREE.CylinderGeometry(0.07,0.09,1.2,6);g.translate(p.x,p.y+0.55,p.z);posts.push(g);addObs(p.x,p.z,0.12);
    const q=P0[(i+1)%n],mid=(p.a+q.a)/2+(i===n-1?Math.PI:0);
    if(ad(mid,gate)<0.18)return;
    const L=Math.hypot(q.x-p.x,q.z-p.z);
    for(const h of [0.45,0.9]){const r=new THREE.BoxGeometry(L,0.07,0.05);r.rotateY(-Math.atan2(q.z-p.z,q.x-p.x));r.translate((p.x+q.x)/2,(p.y+q.y)/2+h,(p.z+q.z)/2);rails.push(r)}
  });
  const wood=new THREE.MeshStandardMaterial({color:new THREE.Color().setRGB(0.36,0.25,0.16,THREE.SRGBColorSpace),roughness:0.9});
  const m=new THREE.Mesh(mergeGeo(posts.concat(rails)),wood);m.castShadow=true;m.receiveShadow=true;world.add(m);
})();

const nav=createNav({heroes:HEROES,world:world,catOf:function(i){return catOf(i)},visited:function(i){return !!S.trees[HEROES[i].id]},onPick:function(i){pickTarget(i)},onTravel:function(b){travel(b)}});
$('#mini').addEventListener('click',function(){openJournal()});
const P={x:0,z:2,y:0,face:Math.PI,phase:0,jh:0,jv:0,swim:false,ey:0,eyeS:0,wet:false,under:false,step:0,stroke:0,bub:0};
P.y=heightAt(P.x,P.z);
const cam={yaw:0,pitch:-0.04,fov:66};
let zoomT=1,zoomC=1;
function zoomBy(f){zoomT=clamp(zoomT*f,0.3,1.15)}
/* suara */
const audio=createAudio(),SKEY='hutan-ilmu-snd';
try{if(localStorage.getItem(SKEY)==='0')audio.setEnabled(false)}catch(e){}
function sndLabel(){const b=$('#bSnd');if(b)b.querySelector('span').textContent='Suara: '+(audio.enabled?'Nyala':'Mati')}
['pointerdown','keydown','touchstart'].forEach(function(ev){window.addEventListener(ev,function(){audio.init()},{passive:true})});

/* ================= DISSECT ================= */
loadProgress(0.72,'Menyiapkan bedah batang…');await tick();
const DT=buildDissect(renderer,TLAYERS);
let D=DT,dcam=D.camera,layerMeshes=D.layerMeshes,waterFlow=D.waterFlow,sugarFlow=D.sugarFlow,dState=D.state;
let selected=null,hovered=null;

/* ================= post-processing ================= */
loadProgress(0.85,'Menyiapkan efek visual…');await tick();
const fxW=createFX(renderer,world,wcam);
let fxD=createFX(renderer,DT.scene,DT.camera,{aoRadius:0.45,bloomStrength:0.45});

let tDay=0.3,T=0;
function setClock(){
  const hrs=(tDay*24)%24,hh=Math.floor(hrs),mm=Math.floor((hrs-hh)*60);
  $('#clockTxt').textContent=(hh<10?'0':'')+hh+':'+(mm<10?'0':'')+mm;
  const nn=sky.day<0.25;if(nn!==wasNight){wasNight=nn;$('#clock').classList.toggle('night',nn)}
}
let wasNight=false;
function applyQuality(q){
  quality=q;try{localStorage.setItem(QKEY,q)}catch(e){}
  fxW.setQuality(q);fxD.setQuality(q);ALL.forEach(function(a){if(a.fx)a.fx.setQuality(q)});
  sky.setShadowSize(q==='tinggi'?2048:1024);sky.envEvery=q==='tinggi'?2.5:5;
  veg.setQuality(q);
  const b=$('#bQual');if(b)b.querySelector('span').textContent='Grafik: '+(q==='tinggi'?'Tinggi':'Hemat');
  resize();
}

/* ganti objek bedah: pohon atau kucing */
function useSubject(kind){
  subject=kind;
  if(kind!=='tree'){
    const a=anOf(kind);
    if(!a.D){a.D=a.buildD?a.buildD(renderer):buildAnimalDissect(renderer,a.spec);a.fx=createFX(renderer,a.D.scene,a.D.camera,{aoRadius:0.4,bloomStrength:0.35});a.fx.setQuality(quality);a.fx.setSize(window.innerWidth,window.innerHeight,pixelRatio())}
    D=a.D;LAYERS=a.data.layers;
  }else{D=DT;LAYERS=TLAYERS}
  dcam=D.camera;layerMeshes=D.layerMeshes;waterFlow=D.waterFlow;sugarFlow=D.sugarFlow;dState=D.state;
  document.body.classList.toggle('catmode',kind!=='tree');
  document.body.classList.toggle('monomode',kind!=='tree'&&!!anOf(kind).mono);
  const lf=kind!=='tree'&&!!anOf(kind).leaf;document.body.classList.toggle('leafmode',lf);
  $('#depthLbl').textContent=lf?'Perbesaran':'Kedalaman';
  $('#sunLbl').textContent=lf?'Cahaya':(kind==='tree'||anOf(kind).mono)?'Matahari':'Aktivitas';
  const lab=kind!=='tree'&&D.labels;document.body.classList.toggle('nodepth',!!(lab&&lab.depth===null));document.body.classList.toggle('nosun',!!(lab&&lab.sun===null));if(lab&&lab.sun)$('#sunLbl').textContent=lab.sun;if(lab&&lab.depth)$('#depthLbl').textContent=lab.depth;
  document.body.classList.toggle('forestmode',kind==='siklusair');
  document.body.classList.toggle('fishmode',kind!=='tree'&&!!anOf(kind).fish);
}
const fxCur=function(){return subject==='tree'?fxD:anOf(subject).fx};

/* ================= UI ================= */
let mode='world',curHero=0;
function geoCaption(){
  const s=dState.sun;
  if(subject==='tanah')return s>0.66?'Hujan deras: air cepat meresap di lapisan atas yang gembur, melambat di lapisan lempung, lalu tertahan di atas batuan dasar.':s>0.25?'Hujan sedang: air meresap perlahan ke dalam tanah.':'Hujan ringan: hanya sedikit air yang meresap.';
  if(subject==='karang'){const t=lerp(26,33,s).toFixed(1);return s<0.6?'Suhu laut '+t+' °C: karang sehat. Zooxanthellae di jaringan berfotosintesis dan memberi makanan bagi polip.':s<0.75?'Suhu laut '+t+' °C: karang mulai stres. Bila panas bertahan berminggu-minggu, karang mengeluarkan alganya.':'Suhu laut '+t+' °C: pemutihan karang! Alga keluar (titik kuning), warna karang hilang, ikan berkurang. Jika suhu cepat kembali normal, karang masih bisa pulih.'}
  if(subject==='gumuk')return s<0.25?'Angin pelan: belum cukup kuat mengangkat butir pasir, gumuk diam.':s<0.6?'Angin sedang: butir pasir mulai melompat-lompat (saltasi) di sisi landai dan longsor di sisi curam.':'Angin kencang: saltasi intens, gumuk bergeser lebih cepat searah angin. Kecepatan geser dipercepat supaya terlihat.';
  if(subject==='kaktus')return (s<0.4?'Malam: stomata terbuka, CO2 masuk (titik biru) dan disimpan sebagai asam. Udara dingin membuat sedikit air hilang.':'Siang: stomata menutup rapat untuk menahan air. CO2 yang disimpan semalam dipakai untuk fotosintesis.')+' '+(dState.depthT<0.4?'Batang mengerut karena cadangan air menipis.':'Batang mengembang berisi air.');
  if(subject==='padi')return s<0.15?'Bibit: padi muda baru dipindah tanam ke sawah berair.':s<0.45?'Fase anakan: rumpun membentuk banyak batang baru. Sawah tetap digenangi.':s<0.65?'Berbunga: malai keluar dan bunga padi menyerbuk sendiri.':s<0.85?'Pengisian bulir: pati dari daun mengalir ke bulir. Malai mulai merunduk.':'Matang dan menguning, sawah dikeringkan, siap panen. Umur padi umumnya sekitar 3 sampai 4 bulan.';
  if(subject==='lebah'){const d=Math.round(s*21);return 'Hari ke-'+d+': '+(d<3?'telur di dasar sel.':d<9?'larva diberi makan terus oleh lebah perawat.':d<21?'sel ditutup lilin, larva berubah menjadi pupa.':'lebah pekerja dewasa keluar dari sel.')}
  if(subject==='kompos'){const w=Math.round(s*12),t=Math.round(dState.temp||30);return 'Minggu ke-'+w+', suhu dalam tumpukan sekitar '+t+' °C. '+(w<1?'Bahan baru ditumpuk berlapis hijau dan cokelat.':w<4?'Fase panas: mikroba bekerja sangat aktif. Tumpukan perlu dibalik agar dapat oksigen.':w<9?'Tumpukan mendingin, cacing tanah dan jamur mulai datang.':'Kompos matang: gelap, gembur, berbau tanah.')}
  if(subject==='rafflesia')return s<0.7?'Kuncup tumbuh perlahan dari liana inang selama berbulan-bulan ('+Math.round(s/0.7*9)+' dari sekitar 9 bulan).':s<0.9?'Mekar! Bau seperti bangkai menarik lalat bangkai. Bunga hanya bertahan sekitar seminggu.':'Bunga layu, menghitam, dan membusuk.';
  if(subject==='kantong')return s<0.15?'Semut tertarik nektar di bibir kantong.':s<0.55?'Bibir yang licin membuat semut tergelincir; dinding berlilin mencegahnya memanjat keluar.':s<0.8?'Semut tenggelam di cairan pencerna dan mulai diuraikan enzim.':'Hara (nitrogen, fosfor) dari semut diserap dinding kantong (titik hijau).';
  if(subject==='tajuk'){const h=Math.round(lerp(1,44,s));return 'Ketinggian sekitar '+h+' m. '+(h<5?'Lantai hutan: gelap dan lembap, hanya sekitar 1-2% cahaya matahari yang sampai.':h<15?'Bawah tajuk: teduh, daun-daun lebar menangkap sisa cahaya.':h<36?'Kanopi: atap hutan yang rapat, paling banyak buah dan hewan.':'Pohon mencuat: cahaya penuh, angin kencang, dan panas.')+' (Diorama diperkecil.)'}
  if(subject==='batuan')return 'Kecepatan dipercepat supaya terlihat. Di alam, satu putaran siklus batuan bisa butuh jutaan tahun.';
  if(subject==='siklusair'){const f=dState.forest||0,fl=dState.flood||0;return 'Hutan '+Math.round(f*100)+'%. '+(fl>0.6?'Limpasan sangat besar: risiko banjir tinggi, sungai keruh membawa tanah (erosi).':fl>0.35?'Sebagian air mengalir di permukaan, sebagian meresap.':'Sebagian besar air hujan meresap ke tanah dan menjadi air tanah. Sungai tetap jernih.')}
  if(subject==='bakau'){return s<0.3?'Air surut: akar napas dan lumpur terbuka. Oksigen (titik biru) masuk lewat lentisel akar napas. Glodok keluar dari liangnya mencari makan.':s<0.65?'Air setengah pasang: lumpur mulai tergenang dan pori-pori akar tertutup air.':'Air pasang: akar napas terendam. Anak ikan berenang di sela akar tunjang untuk berlindung dan mencari makan. Akar yang rapat meredam ombak.'}
  if(subject==='jamur'){return s<0.2?'Awal: pohon baru tumbang. Spora jamur yang mendarat mulai tumbuh menjadi hifa.':s<0.45?'Beberapa minggu: miselium (benang putih) menyebar di dalam kayu dan mengeluarkan enzim pencerna.':s<0.8?'Jamur tumbuh dari kayu dan menebar jutaan spora dari bilahnya. Kayu makin lunak dan gelap.':'Bertahun-tahun kemudian: kayu sudah lapuk menjadi humus. Unsur hara kembali ke tanah dan dipakai tunas baru.'}
  return '';
}
function sunCaption(){
  const s=dState.sun;
  if(isAnimal()&&anOf(subject).leaf){$('#sunCap').textContent='';return}
  if(isAnimal()&&anOf(subject).flower){$('#sunCap').textContent=D.stageText(dState.depthT);return}
  if(isAnimal()&&anOf(subject).geo){$('#sunCap').textContent=geoCaption();return}
  if(isAnimal()&&anOf(subject).mono){$('#sunCap').textContent=s>0.6?'Cahaya kuat: stomata di daun terbuka lebar, penguapan (transpirasi) tinggi, sehingga air naik cepat lewat xilem di berkas pembuluh. Gula hasil fotosintesis turun lewat floem.':s>0.25?'Cahaya sedang: air naik lebih pelan.':'Gelap: stomata menutup, aliran air melambat.';return}
  if(isFish()){$('#sunCap').textContent=s>0.6?'Ikan aktif: tutup insang bergerak cepat supaya lebih banyak air melewati insang, dan jantung berdetak lebih cepat.':s>0.3?'Aktivitas sedang: tutup insang membuka-menutup dengan teratur.':'Ikan beristirahat: gerakan tutup insang dan detak jantung melambat.';return}
  if(isAnimal()&&D.spec&&D.spec.capText){$('#sunCap').textContent=D.spec.capText(s);return}
  if(isAnimal()){const v=D.vitals(s);$('#sunCap').textContent='Perkiraan: jantung '+v.bpm+' detak per menit, napas '+v.rr+' kali per menit. Saat aktif, otot butuh lebih banyak oksigen sehingga jantung dan paru bekerja lebih cepat.'+(subject!=='kucing'?' Rumen ikut berkontraksi lebih sering.':'')+' Angka ini kisaran umum, bukan patokan diagnosis.';return}
  $('#sunCap').textContent=s>0.66?'Matahari terik: daun menguapkan banyak air (transpirasi), sehingga air tertarik naik cepat. Fotosintesis tinggi, banyak gula dikirim lewat floem.'
    :s>0.33?'Cahaya sedang: transpirasi dan fotosintesis berjalan sedang.'
    :'Cahaya rendah atau malam: stomata cenderung menutup, aliran air melambat, dan gula yang dibuat berkurang.';
}
const CHECK='<svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>';
function renderChips(){
  const el=$('#chips');
  el.innerHTML=LAYERS.map(function(L){
    return '<button type="button" role="listitem" class="chip'+(selected===L.id?' sel':'')+'" data-id="'+L.id+'"><span class="sw" style="background:'+L.ui+'"></span>'+L.name+(S.found[fk(L.id)]?CHECK:'')+'</button>';
  }).join('');
}
function renderInfo(){
  const el=$('#info'),H=HEROES[curHero];
  if(!selected&&isAnimal()&&anOf(subject).geo){
    el.innerHTML='<h2>'+H.name+'</h2><p class="sci">'+H.sci+'</p><p class="hint">'+H.hint+'</p><h3>Tentang '+H.short+'</h3><p>'+H.fact+'</p>';
    return;
  }
  if(!selected&&isAnimal()&&anOf(subject).flower){
    el.innerHTML='<h2>Bunga dan penyerbukan</h2><p class="sci">'+H.sci+' · '+H.family+'</p><p class="hint">'+H.hint+'</p><h3>Tentang '+H.short+'</h3><p>'+H.fact+'</p>';
    return;
  }
  if(!selected&&isAnimal()&&anOf(subject).leaf){
    el.innerHTML='<h2>Daun dan fotosintesis</h2><p class="sci">'+H.sci+'</p><p class="hint">'+H.hint+'</p><h3>Persamaan</h3><p>'+H.fact+'</p>';
    return;
  }
  if(!selected&&isAnimal()&&anOf(subject).mono){
    el.innerHTML='<h2>Penampang batang '+H.short+'</h2><p class="sci">'+H.sci+' · monokotil</p><p class="hint">'+H.hint+'</p><h3>Tentang '+H.short+'</h3><p>'+H.fact+'</p>';
    return;
  }
  if(!selected&&isAnimal()){
    el.innerHTML='<h2>Anatomi '+H.short+'</h2><p class="sci">'+H.sci+'</p><p class="hint">'+H.hint+'</p><h3>Tentang '+H.short+'</h3><p>'+H.fact+'</p>';
    return;
  }
  if(!selected){
    el.innerHTML='<h2>Penampang batang</h2><p class="sci">'+H.name+'</p><p class="hint">Ketuk lapisan pada batang, atau pilih dari daftar, untuk mempelajarinya. Titik biru adalah air yang naik lewat xilem. Titik kuning adalah gula yang turun lewat floem.</p><h3>Tentang pohon ini</h3><p>'+H.fact+'</p>';
    return;
  }
  const L=LAYERS.find(function(x){return x.id===selected});
  el.innerHTML='<h2 style="color:'+L.ui+'">'+L.name+'</h2><p class="sci">'+L.sci+'</p><h3>Apa ini</h3><p>'+L.what+'</p><h3>Fungsi</h3><p>'+L.fn+'</p><h3>Tahukah kamu</h3><p>'+L.fact+'</p>'+(H.notes&&H.notes[L.id]?'<h3>Pada '+H.short+'</h3><p>'+H.notes[L.id]+'</p>':'');
}
function select(id){
  selected=id;
  if(id&&!S.found[fk(id)]){S.found[fk(id)]=1;award(20,isAnimal()?'bagian tubuh baru':'lapisan baru');checkMission()}
  if(isAnimal()&&id){const dd=D.depthFor?D.depthFor(id):{kulit:0,otot:0.32,rangka:0.68}[id];dState.depthT=dd!==undefined?dd:1;const sl=$('#depth');if(sl)sl.value=Math.round(dState.depthT*100);if(anOf(subject).flower)sunCaption()}
  renderChips();renderInfo();
  const p=$('#panel');if(p)p.scrollTop=0;
}
function fadeTo(fn,ms){
  const f=$('#fade');f.style.opacity=1;
  setTimeout(function(){fn();if(!camFx)f.style.opacity=0},window.matchMedia('(prefers-reduced-motion:reduce)').matches?0:(ms||380));
}
/* TRANSISI: kamera dunia meluncur ke objek, layar memudar singkat, lalu kamera bedah mundur-maju (zoom in) */
let camFx=null,dIntro=null;
const RM=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
const easeIO=function(t){t=clamp(t,0,1);return t<0.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2};
function enterDissect(i){
  if(nav.target===i)nav.setTarget(-1);
  if(mode!=='world'||camFx)return;
  if(RM){doEnter(i);return}
  camFx={i:i,t:0,dur:0.75,dir:1,done:function(){doEnter(i)}};audio.whoosh(true);keys={};joy.x=0;joy.y=0;
}
function camFxApply(dt){
  if(!camFx)return;
  camFx.t+=dt;const k=easeIO(camFx.t/camFx.dur),kk=camFx.dir>0?k:1-k,H=HEROES[camFx.i],o=heroObjs[camFx.i];
  const tp=new THREE.Vector3(H.x,o.y+(camFx.i<TREES.length?1.4:clamp(H.top*0.55,0.15,2.2)),H.z),from=wcam.position.clone(),away=from.clone().sub(tp);away.y=Math.max(away.y,0.3);
  const close=camFx.i<TREES.length?2.2:clamp(H.top*0.9+1.2,1.6,4),to=tp.clone().add(away.normalize().multiplyScalar(close));
  wcam.position.lerpVectors(from,to,kk*0.92);
  const q0=wcam.quaternion.clone(),m=new THREE.Matrix4().lookAt(wcam.position,tp,new THREE.Vector3(0,1,0)),q1=new THREE.Quaternion().setFromRotationMatrix(m);
  wcam.quaternion.copy(q0).slerp(q1,kk);wcam.fov=cam.fov*(1-0.25*kk);wcam.updateProjectionMatrix();
  $('#fade').style.opacity=camFx.dir>0?smooth(0.7,1,camFx.t/camFx.dur):1-smooth(0,0.35,camFx.t/camFx.dur);
  if(camFx.t>=camFx.dur){const f=camFx.done;camFx=null;if(f)f()}
}
function doEnter(i){
  fadeTo(function(){
    curHero=i;const H=HEROES[i];
    useSubject(H.kind?H.id:'tree');
    if(isAnimal()&&H.kind==='animal')audio.call(H.id,0.2,0);
    if(subject==='tree')D.setSpecies(Object.assign({id:H.id},H.wood));
    mode='dissect';document.body.classList.add('dissect');
    $('#dName').textContent=H.name;$('#dSci').textContent=(H.kind==='geo'?'Bumi dan lingkungan · ':H.kind==='leaf'?'Daun dan fotosintesis · ':H.kind==='flower'?'Bunga dan penyerbukan · ':isAnimal()&&H.kind!=='mono'?'Anatomi dan fisiologi · ':'Penampang batang · ')+H.sci;
    dState.yaw=dState.yaw0||0;dState.user=false;
    if(H.kind==='geo'){const b=H.dist||{tanah:15,batuan:15,siklusair:19}[H.id];dState.dist=window.innerWidth<760?b*1.8:b;dState.sun=0.5;if(H.id==='kaktus'){dState.sun=0.8;dState.depthT=0.8;const dd=$('#depth');if(dd)dd.value=80;const a=$('#sun');if(a)a.value=80}else if(H.id==='karang'){dState.sun=0.3}else if(H.id==='rafflesia'){dState.sun=0.8}else if(H.id==='tajuk'){dState.sun=0}else if(H.id==='kantong'){dState.sun=0.3}if(H.id==='siklusair'){dState.forest=0.8;const f=$('#forest');if(f)f.value=80}const a=$('#sun');if(a)a.value=Math.round(dState.sun*100)}
    else if(H.kind==='leaf'){dState.pitch=0.45;dState.dist=window.innerWidth<760?22:13;dState.depthT=0;dState.depth=0;dState.sun=0.7;dState.co2=0.6;dState.h2o=0.8;dState.hold=0;dState.ok=!!S.found[fk('maks')];[['#sun',70],['#depth',0],['#co2',60],['#h2o',80]].forEach(function(q){const e=$(q[0]);if(e)e.value=q[1]})}
    else if(H.kind==='flower'){dState.pitch=0.35;dState.dist=window.innerWidth<760?20:11;dState.depthT=0;dState.depth=0;const b=$('#depth');if(b)b.value=0}
    else if(H.kind==='mono'){dState.pitch=0.55;dState.dist=window.innerWidth<760?24:14;dState.depthT=0;dState.depth=0;dState.sun=0.65;const a=$('#sun'),b=$('#depth');if(a)a.value=65;if(b)b.value=0}
    else if(isFish()){dState.pitch=0.25;dState.dist=window.innerWidth<760?35:13;dState.depthT=0;dState.depth=0;dState.sun=0.3;dState.gas=0.25;dState.vy=0;dState.fy=0;dState.hold=0;dState.counter=true;dState.buoyOk=!!S.found[fk('buoy')];const a=$('#sun'),b=$('#depth'),g=$('#gas'),c=$('#counter');if(a)a.value=30;if(b)b.value=0;if(g)g.value=25;if(c)c.checked=true}
    else if(isAnimal()){dState.pitch=0.3;dState.dist=(D.spec&&D.spec.dist)?D.spec.dist[window.innerWidth<760?1:0]:window.innerWidth<760?(H.id==='sapi'?46:38):(H.id==='sapi'?21:16);dState.depthT=0;dState.depth=0;dState.sun=0.2;const a=$('#sun'),b=$('#depth');if(a)a.value=20;if(b)b.value=0}
    else{dState.pitch=0.5;dState.dist=window.innerWidth<760?19:14}
    if(!S.trees[H.id]){S.trees[H.id]=1;award(10,isAnimal()?H.short+' dibedah':'pohon baru')}
    selected=null;renderChips();renderInfo();sunCaption();updProfile();resize();
    keys={};joy.x=0;joy.y=0;
    if(!RM){dIntro={t:0,d1:dState.dist};dState.dist*=1.7}
  },RM?380:120);
}
function exitDissect(){
  if(RM){fadeTo(function(){mode='world';useSubject('tree');document.body.classList.remove('dissect');hideTip();updProfile();resize()});return}
  audio.whoosh(false);dIntro={t:0,d1:dState.dist,out:true};
  setTimeout(function(){fadeTo(function(){mode='world';useSubject('tree');document.body.classList.remove('dissect');hideTip();updProfile();resize();dIntro=null;
    camFx={i:curHero,t:0,dur:0.7,dir:-1,done:null};$('#fade').style.opacity=1},120)},300);
}

/* modals */
function openModal(html){$('#sheet').innerHTML=html;$('#modal').classList.add('on');keys={};joy.x=0;joy.y=0}
function closeModal(){$('#modal').classList.remove('on')}
function modalOpen(){return $('#modal').classList.contains('on')}
function catOf(i){if(i<TREES.length)return 'pohon';const a=ALL[i-TREES.length];return a.fish?'ikan':a.spec?'hewan':a.geo?'bumi':'tumbuhan'}
function openJournal(){
  const nl=foundCount(),nv=HEROES.filter(function(H){return S.trees[H.id]}).length;
  const groups=CATS.map(function(c){
    const items=HEROES.map(function(H,i){return {H:H,i:i}}).filter(function(q){return catOf(q.i)===c.id});
    const done=items.filter(function(q){return S.trees[q.H.id]}).length;
    const cards=items.map(function(q){const H=q.H,v=S.trees[H.id],d=Math.round(Math.hypot(P.x-H.x,P.z-H.z));
      return '<div class="jc'+(v?'':' todo')+'"><b><i style="background:'+c.col+'"></i>'+H.name+(v?CHECK:'')+'</b><em>'+H.sci+'</em>'+(v?'<p>'+H.fact+'</p>':'<p>Belum dibedah.</p>')+'<button class="go" type="button" data-go="'+q.i+'">Arahkan · '+d+' m</button></div>'}).join('');
    return '<h3><i class="dot" style="background:'+c.col+'"></i>'+c.name+' <small>'+done+'/'+items.length+'</small></h3><div class="grid">'+cards+'</div>';
  }).join('');
  const lay=TLAYERS.map(function(L){
    return S.found[L.id]
      ?'<div class="jc"><b><i style="background:'+L.ui+'"></i>'+L.name+'</b><em>'+L.sci+'</em><p>'+L.short+'</p></div>'
      :'<div class="jc lock"><b><i style="background:#3b4f47"></i>???</b><em>Belum ditemukan</em><p>Bedah sebuah pohon untuk menemukannya.</p></div>';
  }).join('');
  const leg=CATS.map(function(c){return '<span><i style="background:'+c.col+'"></i>'+c.name+'</span>'}).join('');
  openModal('<div class="head"><div><h2>Jurnal dan peta</h2><p style="color:var(--muted);font-size:14px">'+nv+'/'+HEROES.length+' objek dibedah, '+nl+'/'+TLAYERS.length+' lapisan batang</p></div><button class="x" type="button" data-close aria-label="Tutup">&times;</button></div>'+
    '<div class="mapbox"><div class="mtabs"><button type="button" class="on" data-mv="hub">Hutan Ilmu</button><button type="button" data-mv="pulau">Seluruh pulau</button></div><canvas id="bigMap" width="720" height="720" aria-label="Peta Hutan Ilmu"></canvas><div class="legend">'+leg+'<span><i class="hollow"></i>Belum dibedah</span></div><p class="mhint">Ketuk titik di peta atau tombol Arahkan untuk memasang penunjuk arah.</p></div>'+groups+'<h3>Lapisan batang</h3><div class="grid">'+lay+'</div>');
  nav.bigMap($('#bigMap'),P,cam.yaw,'hub');
  $('#sheet').querySelectorAll('[data-mv]').forEach(function(b){b.addEventListener('click',function(){$('#sheet').querySelectorAll('[data-mv]').forEach(function(x){x.classList.toggle('on',x===b)});nav.bigMap($('#bigMap'),P,cam.yaw,b.dataset.mv)})});
  $('#sheet').querySelectorAll('[data-go]').forEach(function(b){b.addEventListener('click',function(){pickTarget(+b.dataset.go)})});
}
const TRAVEL={hutan:[0,2,Math.PI],gunung:[10,-205,0],peternakan:[255,-10,-Math.PI/2],gurun:[190,195,-0.9],hujan:[-245,30,Math.PI/2]};
function travel(b){const q=TRAVEL[b.id];if(!q)return;closeModal();audio.whoosh(true);fadeTo(function(){P.x=q[0];P.z=q[1];P.y=heightAt(q[0],q[1]);P.swim=false;P.jh=0;P.jv=0;P.eyeS=0;cam.yaw=q[2];cam.pitch=-0.04;terrain.update(P,true)},450)}
function pickTarget(i){nav.setTarget(i);closeModal();toast('Ikuti panah dan tiang cahaya ke '+HEROES[i].name)}
let qz=null;
function shuffle(a,r){for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));const t=a[i];a[i]=a[j];a[j]=t}return a}
function startQuiz(){
  const r=Math.random;
  const pool=(isAnimal()&&mode==='dissect')?anOf(subject).data.quiz.slice():QUIZ.filter(function(q){return !q.sp||S.trees[q.sp]}).concat([].concat.apply([],ALL.map(function(a){return S.trees[a.data.id]&&mode==='world'?a.data.quiz:[]})));
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
  audio.quizSfx(ok);
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
$('#depth').addEventListener('input',function(e){dState.depthT=+e.target.value/100;dState.user=true;if(isAnimal()&&anOf(subject).flower)sunCaption()});
$('#gas').addEventListener('input',function(e){dState.gas=+e.target.value/100});
$('#co2').addEventListener('input',function(e){dState.co2=+e.target.value/100});
$('#h2o').addEventListener('input',function(e){dState.h2o=+e.target.value/100});
$('#forest').addEventListener('input',function(e){dState.forest=+e.target.value/100;sunCaption()});
$('#counter').addEventListener('change',function(e){dState.counter=e.target.checked});
function hideTip(){$('#tip').style.display='none'}
$('#tipX').addEventListener('click',hideTip);
setTimeout(hideTip,20000);

/* ================= input ================= */
let keys={},jumpReq=false,upHold=false;
const joy={x:0,y:0};
if(isTouch)document.body.classList.add('touch');
window.addEventListener('keydown',function(e){
  if(e.target&&e.target.tagName==='INPUT'&&e.target.type!=='checkbox'&&e.target.type!=='range')return;
  const k=e.key.toLowerCase();
  if(k==='escape'){if(modalOpen())closeModal();else if(mode==='dissect')exitDissect();return}
  if(modalOpen())return;
  if(mode==='world'){
    if(['w','a','s','d','arrowup','arrowdown','arrowleft','arrowright','shift',' ','c','control'].indexOf(k)>=0){keys[k]=true;e.preventDefault()}
    if(k==='e')tryInteract();
    if(k==='+'||k==='=')zoomBy(0.8);
    if(k==='-'||k==='_')zoomBy(1.25);
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
function pickLayer(cx,cy){setRay(cx,cy,dcam);const h=ray.intersectObjects(layerMeshes.filter(function(m){return m.visible}),false)[0];return h?h.object.userData.layer:null}
function pickHero(cx,cy){setRay(cx,cy,wcam);const h=ray.intersectObjects(heroHits,false)[0];return h?h.object.userData.hero:-1}
function nearestHero(){
  let b=-1,bd=1e9;
  HEROES.forEach(function(H,i){if(H.needSwim&&!(P.swim||P.under))return;const d=Math.hypot(P.x-H.x,P.z-H.z)+(H.reach?8-H.reach:0);if(d<bd){bd=d;b=i}});
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
    if(mode==='world'){const zk=Math.max(0.45,zoomC);cam.yaw-=dx*0.0045*zk;cam.pitch=clamp(cam.pitch-dy*0.004*zk,-1.3,1.3)}
    else{dState.user=true;dState.yaw-=dx*0.008;dState.pitch=clamp(dState.pitch+dy*0.006,-0.25,1.2)}
  }else if(pts.size===2){
    const a=Array.from(pts.values()),d=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);
    if(pinch0>0){
      const f=pinch0/d;
      if(mode==='dissect'){dState.user=true;dState.dist=clamp(dState.dist*f,6,46)}
      else zoomBy(f);
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
      if(i>=0&&!(HEROES[i].needSwim&&!(P.swim||P.under))){const H=HEROES[i],d=Math.hypot(P.x-H.x,P.z-H.z);if(d<(H.reach||9))enterDissect(i);else toast('Terlalu jauh. Dekati '+H.name+' ('+Math.round(d-8)+' m lagi)')}
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
  if(mode==='dissect'){dState.user=true;dState.dist=clamp(dState.dist*f,6,46)}
  else if(!modalOpen())zoomBy(Math.exp(e.deltaY*0.0012));
},{passive:false});
$('#act').addEventListener('click',tryInteract);
$('#zIn').addEventListener('click',function(){zoomBy(0.78)});
$('#zOut').addEventListener('click',function(){zoomBy(1.28)});
$('#bSnd').addEventListener('click',function(){audio.init();audio.setEnabled(!audio.enabled);try{localStorage.setItem(SKEY,audio.enabled?'1':'0')}catch(e){}sndLabel();if(audio.enabled)audio.meow(0.08,0)});
sndLabel();
$('#jump').addEventListener('pointerdown',function(e){e.preventDefault();jumpReq=true;upHold=true});
['pointerup','pointercancel','pointerleave'].forEach(function(ev){$('#jump').addEventListener(ev,function(){upHold=false})});


/* ================= loop ================= */
const tags=HEROES.map(function(H){const d=document.createElement('div');d.className='tag';$('#tags').appendChild(d);return d});
const tv=new THREE.Vector3();
let nearAcc=0,gasAcc=0;
/* tetes air di lensa kamera */
function screenDrops(n){
  const box=$('#drops');if(!box||window.matchMedia('(prefers-reduced-motion:reduce)').matches)return;
  for(let i=0;i<n;i++){const d=document.createElement('i');const s=18+Math.random()*46;d.style.width=d.style.height=s+'px';d.style.left=(Math.random()*100)+'%';d.style.top=(Math.random()*85)+'%';d.style.animationDelay=(Math.random()*0.15)+'s';box.appendChild(d);setTimeout(function(){d.remove()},1900)}
}
function updWorld(dt){
  if(camFx){keys={};joy.x=0;joy.y=0}
  const kx=(keys.d||keys.arrowright?1:0)-(keys.a||keys.arrowleft?1:0);
  const ky=(keys.w||keys.arrowup?1:0)-(keys.s||keys.arrowdown?1:0);
  const ix=clamp(kx+joy.x,-1,1),iy=clamp(ky+joy.y,-1,1);
  const fx=-Math.sin(cam.yaw),fz=-Math.cos(cam.yaw),rx=Math.cos(cam.yaw),rz=-Math.sin(cam.yaw);
  const mx=fx*iy+rx*ix,mz=fz*iy+rz*ix,mag=Math.min(1,Math.hypot(mx,mz));
  let speedNow=0;
  const dep0=waterAt(P.x,P.z)-heightAt(P.x,P.z);
  if(mag>0.06){
    const L=Math.hypot(mx,mz),dx=mx/L,dz=mz/L;
    const run=keys.shift||(joy.x*joy.x+joy.y*joy.y>0.72);
    if(P.swim)speedNow=(run?3.6:2.3)*mag;
    else{speedNow=(run?8.2:4.6)*mag;if(dep0>0)speedNow*=1-0.55*clamp(dep0/1.3,0,1)}  /* air memperlambat langkah */
    const nx=P.x+dx*speedNow*dt,nz=P.z+dz*speedNow*dt;
    const walk=function(x,z){return Math.hypot(x,z)<coastR(x,z)+90};
    if(walk(nx,P.z))P.x=nx;
    if(walk(P.x,nz))P.z=nz;
    collide(P);
    {const r=Math.hypot(P.x,P.z),lim=coastR(P.x,P.z)+85;if(r>lim){P.x*=lim/r;P.z*=lim/r;if(T-edgeT>6){edgeT=T;toast('Arus laut terlalu kuat. Kembali ke pantai.')}}}
    P.phase+=speedNow*dt*1.25;
  }
  const wy=waterAt(P.x,P.z);splash.setLevel(wy);
  const gy=heightAt(P.x,P.z),dep=wy-gy;P.y+=(gy-P.y)*Math.min(1,dt*14);
  const fx2=P.x+fx*0.55,fz2=P.z+fz*0.55;
  /* masuk / keluar mode berenang */
  const SWIM_D=1.35;
  if(!P.swim&&dep>SWIM_D){P.swim=true;P.ey=Math.max(P.y+1.68+P.jh,WATER-0.1);splash.splash(fx2,fz2,46,1.3);water.ripple(P.x,P.z,1);audio.splash(2);screenDrops(9)}
  if(P.swim&&dep<SWIM_D-0.2){P.swim=false;P.jh=0;P.jv=0}
  const landedWet=P.jh>0;
  if(P.swim){
    let vy=0;
    if(mag>0.06)vy+=Math.sin(cam.pitch)*iy*speedNow*1.1;   /* lihat ke bawah + maju = menyelam */
    if(keys[' ']||upHold)vy+=1.9;
    if(keys.c||keys.control)vy-=1.9;
    if(Math.abs(vy)<0.05)vy+=0.32;                         /* daya apung */
    P.ey=clamp(P.ey+vy*dt,gy+0.45,WATER+0.24);
    jumpReq=false;P.jh=0;P.jv=0;
  }else{
    if(jumpReq&&P.jh<=0.001&&dep<0.8){P.jv=6.4}
    jumpReq=false;
    if(P.jh>0||P.jv>0){P.jv-=20*dt;P.jh=Math.max(0,P.jh+P.jv*dt);if(P.jh===0)P.jv=0}
    if(landedWet&&P.jh===0&&dep>0.05){splash.splash(fx2,fz2,30,1);water.ripple(P.x,P.z,0.9);audio.splash(dep>0.5?2:1);if(dep>0.3)screenDrops(5)}
  }
  /* langkah di air dangkal: cipratan kecil tiap langkah */
  const wet=!P.swim&&dep>0.03;
  if(wet&&!P.wet&&speedNow>0){splash.splash(fx2,fz2,10,0.6);water.ripple(P.x,P.z,0.6);audio.splash(1,0.7)}
  P.wet=wet;
  const stp=Math.floor(P.phase/(Math.PI/2));
  if(stp!==P.step){P.step=stp;if(wet&&speedNow>0.5&&P.jh===0){const k=clamp(dep/1.2,0.15,1);splash.splash(fx2+rx*(stp%2?0.15:-0.15),fz2+rz*(stp%2?0.15:-0.15),Math.round(5+k*10),0.35+k*0.6*(speedNow/6));water.ripple(P.x,P.z,0.35+k*0.4);audio.splash(0,0.5+k)}}
  /* kayuhan renang di permukaan */
  if(P.swim&&speedNow>0.3&&P.ey>WATER-0.35){P.stroke-=dt;if(P.stroke<=0){P.stroke=0.8;splash.splash(fx2,fz2,9,0.45);water.ripple(fx2,fz2,0.6);audio.splash(0,0.8)}}
  /* kamera orang pertama: tinggi mata 1,68 m, goyangan langkah halus, FOV melebar saat lari */
  const mv=Math.min(1,speedNow/4.6);
  const bob=Math.sin(P.phase*2)*0.032*mv,sway=Math.cos(P.phase)*0.018*mv;
  const eyeT=P.swim?P.ey+(P.ey>WATER-0.3?Math.sin(T*1.7)*0.05:Math.sin(T*0.9)*0.03):P.y+1.68+bob*(wet?0.5:1)+P.jh;
  P.eyeS=P.eyeS?P.eyeS+(eyeT-P.eyeS)*Math.min(1,dt*(P.swim?6:16)):eyeT;
  wcam.position.set(P.x+Math.cos(cam.yaw)*sway,P.eyeS,P.z-Math.sin(cam.yaw)*sway);
  /* bawah air: kabut, suara teredam, gelembung */
  const under=wcam.position.y<wy-0.03&&wy-gy>0.05;
  if(under!==P.under){P.under=under;document.body.classList.toggle('underwater',under);audio.setUnder(under);
    if(under){splash.bubbles(P.x+fx*0.4,P.eyeS-0.1,P.z+fz*0.4,14);audio.bubbles(8)}else{splash.splash(P.x+fx*0.4,P.z+fz*0.4,12,0.5);audio.splash(1,0.6);screenDrops(6)}}
  if(under){P.bub-=dt;if(P.bub<=0){P.bub=speedNow>0.3?0.5:1.6;splash.bubbles(P.x+fx*0.7,P.eyeS-0.35,P.z+fz*0.7,speedNow>0.3?4:2);if(Math.random()<0.4)audio.bubbles(2,0.03)}}
  splash.update(dt,T);
  wcam.rotation.set(cam.pitch,cam.yaw,0);
  zoomC+=(zoomT-zoomC)*Math.min(1,dt*8);const tf=(66+(speedNow>6?5:0))*zoomC;cam.fov+=(tf-cam.fov)*Math.min(1,dt*5);
  if(Math.abs(wcam.fov-cam.fov)>0.02||camFx){wcam.fov=cam.fov;wcam.updateProjectionMatrix()}
  camFxApply(dt);

  /* markers, tags, prompt */
  AN.forEach(function(a){
    /* hewan kecil disembunyikan dari jauh supaya draw call di HP tetap rendah */
    const vis=a.spec.worldScale<0.12?(quality==='hemat'?22:34):(quality==='hemat'?45:70);
    const w=a.w;w.update(dt,T,P);w.group.visible=Math.hypot(w.x-P.x,w.z-P.z)<vis;
    a.extraW.forEach(function(e){const de=Math.hypot(e.x-P.x,e.z-P.z);e.group.visible=de<vis*0.8;if(e.group.visible)e.update(dt,T,P)});
    const H=HEROES[a.hi],o=heroObjs[a.hi];H.x=w.x;H.z=w.z;o.y=w.y+(a.spec.walk.perch?w.alt||0:0);o.mk.position.x=w.x;o.mk.position.z=w.z;o.ring.position.set(w.x,w.y+0.04,w.z);
    /* suara hewan sesekali saat pemain dekat */
    const dx=w.x-P.x,dz=w.z-P.z,d=Math.hypot(dx,dz)||1;
    a.callT-=dt;if(a.callT<=0){a.callT=8+Math.random()*16;if(d<14&&!P.under)audio.call(a.data.id,0.2*Math.max(0.15,1-d/15),(dx*Math.cos(cam.yaw)-dz*Math.sin(cam.yaw))/d)}
  });
  fishW.update(dt,T,P,wcam.position.y);
  FI.forEach(function(a){const f=a.G.fish[0].p,H=HEROES[a.hi],o=heroObjs[a.hi];H.x=f.x;H.z=f.z;o.y=f.y;a.hit.position.copy(f)});
  const canFish=P.swim||P.under;
  let bestD=1e9,bestI=-1;
  /* label hanya untuk 6 objek terdekat supaya layar tidak penuh */
  const near=new Set(HEROES.map(function(H,i){return [Math.hypot(P.x-H.x,P.z-H.z),i]}).filter(function(q){return !(HEROES[q[1]].needSwim&&!canFish)}).sort(function(a,b){return a[0]-b[0]}).slice(0,6).map(function(q){return q[1]}));
  heroObjs.forEach(function(o,i){
    const H=HEROES[i];
    o.mk.rotation.y+=dt*1.6;o.mk.position.y=o.y+H.top+(H.mkOff!=null?H.mkOff:2.2)+Math.sin(T*2+i)*(H.kind==='animal'?0.06:0.3);
    const s=1+0.1*Math.sin(T*3+i);o.ring.scale.set(s,s,s);
    const d=Math.hypot(P.x-H.x,P.z-H.z),tg=tags[i];
    if(H.needSwim&&!canFish){tags[i].style.display='none';return}
    if(d<bestD&&d<(H.reach||9)){bestD=d;bestI=i}
    tv.set(H.x,o.y+H.top*0.6,H.z).project(wcam);
    if(tv.z<1&&(near.has(i)||i===nav.target)&&d<(H.needSwim?14:50)&&d>(H.tagNear||11)){
      const w=window.innerWidth,h=window.innerHeight;
      tg.style.display='block';
      tg.style.transform='translate('+((tv.x*0.5+0.5)*w)+'px,'+((-tv.y*0.5+0.5)*h)+'px) translate(-50%,-100%)';
      tg.className='tag'+(S.trees[H.id]?' done':'')+(i===nav.target?' tgt':'');tg.style.opacity=i===nav.target?1:clamp(1.5-d/40,0.45,1);
      tg.innerHTML=H.name+'<small>'+Math.round(d)+' m</small>';
    }else tg.style.display='none';
  });
  /* prompt ala GTA: menempel di batang pohon terdekat */
  const act=$('#act');
  if(bestD<9&&!modalOpen()){
    const H=HEROES[bestI],o=heroObjs[bestI];
    tv.set(H.x,o.y+(H.promptY||1.7),H.z).project(wcam);
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
  fxW.setSize(w,h,pr);fxD.setSize(w,h,pr);ALL.forEach(function(a){if(a.fx)a.fx.setSize(w,h,pr)});
  wcam.aspect=w/h;wcam.updateProjectionMatrix();
  dcam.aspect=w/h;
  /* keep the trunk clear of the side panel on wide screens */
  if(w>760){dcam.setViewOffset(w,h,Math.min(120,w*0.09),0,w,h)}else if(isAnimal()){dcam.setViewOffset(w,h,0,Math.round(h*0.13),w,h)}else{dcam.clearViewOffset()}
  dcam.updateProjectionMatrix();
}
window.addEventListener('resize',resize);
$('#bQual').addEventListener('click',function(){applyQuality(quality==='tinggi'?'hemat':'tinggi')});
applyQuality(quality);
updProfile();
sky.update(tDay,T,0.016,{x:P.x,y:P.y+1.6,z:P.z});setClock();

$('#loading').classList.add('done');
setTimeout(function(){$('#loading').style.display='none'},700);

if(DEBUG)window.__hi={enter:function(i){doEnter(i)},enterFx:enterDissect,exit:exitDissect,select:select,P:P,cam:cam,startQuiz:startQuiz,openJournal:openJournal,renderer:renderer,world:world,veg:veg,sky:sky,applyQuality:applyQuality,setTime:function(t){tDay=t},look:function(i,d){const H=HEROES[i];d=d||11;const L=Math.hypot(H.x,H.z-2)||1;P.x=H.x+(0-H.x)/L*d;P.z=H.z+(2-H.z)/L*d;P.y=heightAt(P.x,P.z);cam.yaw=Math.atan2(P.x-H.x,P.z-H.z);cam.pitch=0.22},getMode:function(){return mode},nav:nav,h:heightAt,terrain:terrain,wcam:wcam,THREE:THREE,fx:function(){return [camFx&&camFx.t,camFx&&camFx.dir,dIntro&&dIntro.t]},ds:function(){return dState},fishW:fishW};

let last=performance.now(),paused=false,edgeT=-99;
/* suasana bioma: kabut, rona langit, dan nama wilayah saat berpindah */
const ZONE={hutan:['Hutan Ilmu',0.0155,[1,1,1]],hujan:['Hutan Hujan Tropis',0.026,[0.9,1.0,0.95]],gunung:['Pegunungan',0.0095,[0.95,0.98,1.05]],peternakan:['Peternakan dan Sawah',0.010,[1.03,1.02,0.95]],gurun:['Gurun Pasir',0.0088,[1.12,1.0,0.82]],pantai:['Pantai',0.009,[1.0,1.02,1.05]],laut:['Laut',0.009,[0.95,1.0,1.08]]};
let bioAcc=0,bioCur='hutan',bioW={},bioT={d:0.0155,c:new THREE.Color(1,1,1)};
function updBiome(dt){
  bioAcc+=dt;if(bioAcc>0.3){bioAcc=0;const b=biomeAt(P.x,P.z);bioW=b;let d=0,c=[0,0,0],s=0;
    const ws={hutan:b.hutan,hujan:b.hujan,gunung:b.gunung,peternakan:b.peternakan,gurun:b.gurun,pantai:b.pantai*1.5,laut:b.laut*2};
    for(const k in ws){s+=ws[k];d+=ws[k]*ZONE[k][1];c[0]+=ws[k]*ZONE[k][2][0];c[1]+=ws[k]*ZONE[k][2][1];c[2]+=ws[k]*ZONE[k][2][2]}
    bioT.d=d/s;bioT.c.setRGB(c[0]/s,c[1]/s,c[2]/s);
    const dm=dominant(b);if(dm!==bioCur){bioCur=dm;const z=$('#zone');z.innerHTML='<small>Memasuki</small>'+ZONE[dm][0];z.classList.remove('on');void z.offsetWidth;z.classList.add('on')}}
  sky.fogD+=(bioT.d-sky.fogD)*Math.min(1,dt*0.8);sky.tint.lerp(bioT.c,Math.min(1,dt*0.8));
}
function step(dt){
  T+=dt;
  if(mode==='world'){
    tDay=(tDay+dt/240)%1;
    updWorld(dt);
    sky.update(tDay,T,dt,{x:P.x,y:P.y+1.6,z:P.z},P.under);setClock();
    terrain.update(P);coastDeco.update(P);farm.update(P,T);rain.update(P);updBiome(dt);veg.update(P,T,dt);water.update(T,P);if(bush)bush.update(T);river.update(T);nav.update(dt,P,cam.yaw,T);
    {const rd=riverInfo(P.x,P.z).d;const nb=function(x,z,r){return Math.pow(clamp(1-Math.hypot(P.x-x,P.z-z)/r,0,1),1.5)};audio.update(dt,{day:sky.day,world:true,under:P.under,river:Math.pow(clamp(1-rd/28,0,1),2),buzz:nb(BUNGA.specimen.x,BUNGA.specimen.z,9),shore:nb(BAKAU.specimen.x,BAKAU.specimen.z,16),log:nb(JAMUR.specimen.x,JAMUR.specimen.z,10),bio:bioW,surf:clamp(1-Math.abs(Math.hypot(P.x,P.z)-coastR(P.x,P.z))/60,0,1)})}
    fxW.render(dt);
  }else{
    D.update(dt,T,selected,hovered);
    if(isAnimal()&&anOf(subject).leaf&&dState.R){
      gasAcc+=dt;if(gasAcc>0.12){gasAcc=0;const R=dState.R,pc=Math.round(R.rate*100);$('#rateBar').style.width=pc+'%';$('#rateTxt').textContent=pc+'%';
        $('#rateCap').textContent='Laju fotosintesis '+pc+'%. '+(R.rate>0.95?'Maksimal! Semua faktor cukup.':'Faktor pembatas: '+R.lim+'.')+' Stomata '+(R.open>0.7?'terbuka lebar':R.open>0.25?'setengah terbuka':'menutup')+(R.open<0.25&&dState.h2o<0.3?' karena kekurangan air.':R.open<0.25?' karena gelap.':'.')}
      if(dState.ok&&!S.found[fk('maks')]){S.found[fk('maks')]=1;award(30,'fotosintesis maksimal');save()}
    }
    if(isAnimal()&&anOf(subject).flower&&dState.depth>0.95&&!S.found[fk('buah')]){S.found[fk('buah')]=1;award(30,'pembuahan berhasil');save()}
    if(isAnimal()&&anOf(subject).geo){gasAcc+=dt;if(gasAcc>0.25){gasAcc=0;$('#sunCap').textContent=geoCaption()}}
    if(isFish()){
      gasAcc+=dt;if(gasAcc>0.15){gasAcc=0;const st=dState.status;$('#gasCap').textContent=(st==='melayang'?'Ikan melayang: daya apung seimbang dengan berat tubuh.':st==='tenggelam'?'Ikan tenggelam: gas di gelembung renang kurang.':'Ikan naik: gas di gelembung renang terlalu banyak.')+(dState.counter===false?' Aliran searah: darah dan air sejalan, oksigen yang terserap jauh lebih sedikit.':' Aliran berlawanan arah: darah (merah) melawan arus air (biru), oksigen terserap maksimal.')}
      if(dState.buoyOk&&!S.found[fk('buoy')]){S.found[fk('buoy')]=1;award(30,'ikan melayang seimbang');save()}
    }
    audio.update(dt,{day:sky.day,world:false,under:false,catSub:subject==='kucing',buzz:subject==='bunga'?0.6*(1-smooth(0.6,0.85,dState.depth||0)):0,shore:subject==='bakau'?0.5+0.5*(dState.sun||0):0,log:subject==='jamur'?0.7:0});
    if(dIntro){dIntro.t+=dt;if(dIntro.out)dState.dist=dIntro.d1*(1+0.6*easeIO(dIntro.t/0.4));else if(dState.user&&dIntro.t>0.15)dIntro=null;else{dState.dist=lerp(dIntro.d1*1.7,dIntro.d1,easeIO(dIntro.t/0.9));if(dIntro.t>0.9)dIntro=null}}
    fxCur().render(dt);
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
  const dt=Math.max(0,Math.min(0.05,(now-last)/1000));last=now;
  if(!paused){step(dt);perfWatch(dt)}
  requestAnimationFrame(frame);
}
if(DEBUG){window.__hi.pause=function(v){paused=v!==false};window.__hi.step=step}
requestAnimationFrame(frame);
})().catch(function(e){console.error(e);const l=document.getElementById('loadTxt');if(l)l.textContent='Gagal memuat: '+(e&&e.message||e)});
