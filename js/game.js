(function(){
'use strict';
const KEY='hutan-ilmu-v1';
const TAU=Math.PI*2;
const $=function(s){return document.querySelector(s)};
const clamp=function(v,a,b){return Math.max(a,Math.min(b,v))};
const lerp=function(a,b,t){return a+(b-a)*t};
const smooth=function(a,b,x){const t=clamp((x-a)/(b-a),0,1);return t*t*(3-2*t)};
function rng(seed){let s=seed>>>0;return function(){s+=0x6D2B79F5;let t=s;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296}}
function stepAngle(a,b,t){const d=((b-a+Math.PI)%TAU+TAU)%TAU-Math.PI;return a+d*t}

const OBJ=window.HI.objects.pohon,LAYERS=OBJ.layers,HEROES=OBJ.specimens,QUIZ=OBJ.quiz;

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

/* ---------------- renderer ---------------- */
let renderer;
try{
  renderer=new THREE.WebGLRenderer({canvas:$('#view'),antialias:true,powerPreference:'high-performance'});
}catch(err){$('#nogl').style.display='flex';return}
const canvas=renderer.domElement;
renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
renderer.shadowMap.enabled=true;
renderer.shadowMap.type=THREE.PCFSoftShadowMap;

/* ================= WORLD ================= */
const world=new THREE.Scene();
world.fog=new THREE.Fog(0x8fd1ff,55,200);
const wcam=new THREE.PerspectiveCamera(55,1,0.1,700);
const hemi=new THREE.HemisphereLight(0xcfe8ff,0x4a6b3a,0.7);world.add(hemi);
const sunL=new THREE.DirectionalLight(0xffffff,1.1);
sunL.castShadow=true;sunL.shadow.mapSize.set(1024,1024);
const sc=sunL.shadow.camera;sc.left=-38;sc.right=38;sc.top=38;sc.bottom=-38;sc.near=1;sc.far=240;
sunL.shadow.bias=-0.0008;
world.add(sunL);world.add(sunL.target);
const moonL=new THREE.DirectionalLight(0x6f86c8,0);world.add(moonL);

const WATER=-1.4,SIZE=240,SEG=130;
const LAKE={x:-34,z:26,r:15};
function baseH(x,z){return Math.sin(x*0.045+1.3)*Math.cos(z*0.038)*2.0+Math.sin(x*0.1+z*0.08)*0.5+Math.cos(x*0.02-z*0.03)*1.5}
function heightAt(x,z){
  let h=baseH(x,z);
  h*=smooth(9,26,Math.hypot(x,z));
  const dl=Math.hypot(x-LAKE.x,z-LAKE.z);
  if(dl<LAKE.r+9){h=lerp(h,-3.3,1-smooth(LAKE.r*0.3,LAKE.r+9,dl))}
  return h;
}
function hash(x,z){const s=Math.sin(x*12.9898+z*78.233)*43758.5453;return s-Math.floor(s)}

(function buildTerrain(){
  const g=new THREE.PlaneGeometry(SIZE,SIZE,SEG,SEG);g.rotateX(-Math.PI/2);
  const pos=g.attributes.position,n=pos.count,col=new Float32Array(n*3);
  const sand=new THREE.Color(0xd9c58d),g1=new THREE.Color(0x5aa646),g2=new THREE.Color(0xa0d05c),c=new THREE.Color();
  for(let i=0;i<n;i++){
    const x=pos.getX(i),z=pos.getZ(i),h=heightAt(x,z);pos.setY(i,h);
    if(h<WATER+0.4)c.copy(sand);
    else{c.copy(g1).lerp(g2,smooth(-0.8,3.2,h)*0.8+hash(x,z)*0.2);}
    col[i*3]=c.r;col[i*3+1]=c.g;col[i*3+2]=c.b;
  }
  g.setAttribute('color',new THREE.BufferAttribute(col,3));
  g.computeVertexNormals();
  const m=new THREE.Mesh(g,new THREE.MeshStandardMaterial({vertexColors:true,flatShading:true,roughness:1}));
  m.receiveShadow=true;world.add(m);
})();
const waterMesh=new THREE.Mesh(new THREE.PlaneGeometry(SIZE,SIZE),new THREE.MeshStandardMaterial({color:0x3aa6d8,transparent:true,opacity:0.74,roughness:0.15,metalness:0.1}));
waterMesh.rotation.x=-Math.PI/2;waterMesh.position.y=WATER;world.add(waterMesh);

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

/* ambient trees (instanced) */
const tmpM=new THREE.Matrix4(),tmpP=new THREE.Vector3(),tmpQ=new THREE.Quaternion(),tmpS=new THREE.Vector3(),tmpE=new THREE.Euler(),tmpC=new THREE.Color();
function setInst(mesh,i,x,y,z,sx,sy,sz,ry){tmpE.set(0,ry||0,0);tmpQ.setFromEuler(tmpE);tmpP.set(x,y,z);tmpS.set(sx,sy,sz);tmpM.compose(tmpP,tmpQ,tmpS);mesh.setMatrixAt(i,tmpM)}
(function buildForest(){
  const r=rng(7),spots=[];
  let tries=0;
  while(spots.length<280&&tries<7000){
    tries++;
    const x=(r()*2-1)*108,z=(r()*2-1)*108;
    if(Math.hypot(x,z)<9)continue;
    const h=heightAt(x,z);if(h<WATER+0.7)continue;
    let ok=true;
    for(let i=0;i<HEROES.length;i++){if(Math.hypot(x-HEROES[i].x,z-HEROES[i].z)<6){ok=false;break}}
    if(!ok)continue;
    for(let i=0;i<spots.length;i++){if(Math.hypot(x-spots[i].x,z-spots[i].z)<3.4){ok=false;break}}
    if(!ok)continue;
    spots.push({x:x,z:z,y:h,type:r()<0.62?0:1,s:0.8+r()*0.8,c:r()});
  }
  const rounds=spots.filter(function(s){return s.type===0}),cones=spots.filter(function(s){return s.type===1});
  const mT=new THREE.MeshStandardMaterial({color:0xffffff,roughness:1,flatShading:true});
  const mL=new THREE.MeshStandardMaterial({color:0xffffff,roughness:0.95,flatShading:true});
  const iT=new THREE.InstancedMesh(new THREE.CylinderGeometry(0.16,0.26,1,6),mT,spots.length);
  const iA=new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1,0),mL,rounds.length);
  const iB=new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1,0),mL,rounds.length);
  const iC=new THREE.InstancedMesh(new THREE.ConeGeometry(1,1,7),mL,cones.length);
  const iD=new THREE.InstancedMesh(new THREE.ConeGeometry(1,1,7),mL,cones.length);
  spots.forEach(function(s,i){
    const h=(s.type===0?2.2:1.6)*s.s;
    setInst(iT,i,s.x,s.y+h/2,s.z,s.s,h,s.s,s.c*6);
    tmpC.setHSL(0.07+s.c*0.03,0.35,0.2+s.c*0.12);iT.setColorAt(i,tmpC);
    addObs(s.x,s.z,0.3*s.s);
  });
  rounds.forEach(function(s,i){
    const h=2.2*s.s,a=s.c*TAU;
    setInst(iA,i,s.x,s.y+h+1.0*s.s,s.z,1.7*s.s,1.45*s.s,1.7*s.s,s.c*6);
    setInst(iB,i,s.x+Math.cos(a)*0.9*s.s,s.y+h+0.4*s.s,s.z+Math.sin(a)*0.9*s.s,1.1*s.s,0.95*s.s,1.1*s.s,s.c*3);
    tmpC.setHSL((95+s.c*35)/360,0.5,0.3+s.c*0.14);iA.setColorAt(i,tmpC);
    tmpC.setHSL((100+s.c*35)/360,0.5,0.38+s.c*0.12);iB.setColorAt(i,tmpC);
  });
  cones.forEach(function(s,i){
    const h=1.6*s.s;
    setInst(iC,i,s.x,s.y+h+1.1*s.s,s.z,1.5*s.s,2.4*s.s,1.5*s.s,s.c*6);
    setInst(iD,i,s.x,s.y+h+2.5*s.s,s.z,1.05*s.s,2.0*s.s,1.05*s.s,s.c*6);
    tmpC.setHSL((140+s.c*20)/360,0.4,0.2+s.c*0.1);iC.setColorAt(i,tmpC);
    tmpC.setHSL((140+s.c*20)/360,0.42,0.27+s.c*0.1);iD.setColorAt(i,tmpC);
  });
  [iT,iA,iB,iC,iD].forEach(function(m){m.castShadow=true;m.receiveShadow=false;m.instanceMatrix.needsUpdate=true;if(m.instanceColor)m.instanceColor.needsUpdate=true;world.add(m)});

  /* rocks, bushes, flowers */
  const r2=rng(99);
  const nR=70,rockM=new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1,0),new THREE.MeshStandardMaterial({color:0xffffff,roughness:1,flatShading:true}),nR);
  for(let i=0;i<nR;i++){
    let x,z,h,t=0;do{x=(r2()*2-1)*105;z=(r2()*2-1)*105;h=heightAt(x,z);t++}while((h<WATER+0.1||Math.hypot(x,z)<7)&&t<30);
    const s=0.3+r2()*0.9;setInst(rockM,i,x,h+s*0.3,z,s*1.3,s*0.8,s,r2()*6);
    tmpC.setHSL(0.1,0.04,0.38+r2()*0.18);rockM.setColorAt(i,tmpC);
    if(s>0.8)addObs(x,z,s*1.1);
  }
  rockM.castShadow=true;rockM.instanceMatrix.needsUpdate=true;rockM.instanceColor.needsUpdate=true;world.add(rockM);
  const nB=110,bushM=new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1,1),new THREE.MeshStandardMaterial({color:0xffffff,roughness:1,flatShading:true}),nB);
  for(let i=0;i<nB;i++){
    let x,z,h,t=0;do{x=(r2()*2-1)*105;z=(r2()*2-1)*105;h=heightAt(x,z);t++}while((h<WATER+0.6||Math.hypot(x,z)<6)&&t<30);
    const s=0.5+r2()*0.6;setInst(bushM,i,x,h+s*0.45,z,s*1.2,s*0.8,s*1.2,r2()*6);
    tmpC.setHSL((90+r2()*40)/360,0.5,0.25+r2()*0.12);bushM.setColorAt(i,tmpC);
  }
  bushM.castShadow=true;bushM.instanceMatrix.needsUpdate=true;bushM.instanceColor.needsUpdate=true;world.add(bushM);
  const nF=220,flM=new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1,0),new THREE.MeshStandardMaterial({color:0xffffff,roughness:0.8,flatShading:true}),nF);
  const fcols=[0xffffff,0xffd35a,0xff8fb1,0xb69cff,0xff9a5c];
  for(let i=0;i<nF;i++){
    let x,z,h,t=0;do{const a=r2()*TAU,d=4+r2()*60;x=Math.cos(a)*d;z=Math.sin(a)*d;h=heightAt(x,z);t++}while(h<WATER+0.5&&t<30);
    const s=0.1+r2()*0.08;setInst(flM,i,x,h+0.18,z,s,s,s,0);
    tmpC.setHex(fcols[Math.floor(r2()*fcols.length)]);flM.setColorAt(i,tmpC);
  }
  flM.instanceMatrix.needsUpdate=true;flM.instanceColor.needsUpdate=true;world.add(flM);
})();

/* hero trees */
const heroObjs=[],heroHits=[];
HEROES.forEach(function(H,i){
  const g=new THREE.Group(),y=heightAt(H.x,H.z);g.position.set(H.x,y,H.z);
  const tr=new THREE.Mesh(new THREE.CylinderGeometry(0.5*H.k,0.8*H.k,5,9),new THREE.MeshStandardMaterial({color:H.bark,roughness:1,flatShading:true}));
  tr.position.y=2.5;tr.castShadow=true;g.add(tr);
  const lm=new THREE.MeshStandardMaterial({color:H.leaf,roughness:0.95,flatShading:true});
  H.canopy.forEach(function(c){const m=new THREE.Mesh(new THREE.IcosahedronGeometry(c[3],1),lm);m.position.set(c[0],c[1],c[2]);m.castShadow=true;g.add(m)});
  const mk=new THREE.Mesh(new THREE.OctahedronGeometry(0.42,0),new THREE.MeshStandardMaterial({color:0xffd35a,emissive:0xffb400,emissiveIntensity:0.9,flatShading:true}));
  mk.position.y=H.top+1.3;g.add(mk);
  const ring=new THREE.Mesh(new THREE.RingGeometry(1.5,1.75,40),new THREE.MeshBasicMaterial({color:0xffd35a,transparent:true,opacity:0.7,side:THREE.DoubleSide,depthWrite:false}));
  ring.rotation.x=-Math.PI/2;ring.position.y=0.18;g.add(ring);
  const hit=new THREE.Mesh(new THREE.CylinderGeometry(1.9,1.9,H.top+2,8),new THREE.MeshBasicMaterial({visible:false}));
  hit.position.y=(H.top+2)/2;hit.userData.hero=i;g.add(hit);
  world.add(g);heroHits.push(hit);heroObjs.push({g:g,mk:mk,ring:ring,y:y});
  addObs(H.x,H.z,0.9*H.k);
});

/* player */
const player=new THREE.Group();
const pArmL=new THREE.Group(),pArmR=new THREE.Group(),pLegL=new THREE.Group(),pLegR=new THREE.Group();
(function(){
  const mk=function(w,h,d,c){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshStandardMaterial({color:c,roughness:0.9,flatShading:true}));m.castShadow=true;return m};
  const body=mk(0.7,0.85,0.42,0x2f9e6b);body.position.y=1.3;player.add(body);
  const head=mk(0.5,0.5,0.5,0xf1c9a0);head.position.y=1.98;player.add(head);
  const hair=mk(0.54,0.2,0.54,0x2b1d14);hair.position.y=2.22;player.add(hair);
  const pack=mk(0.52,0.62,0.22,0xe9b13a);pack.position.set(0,1.32,-0.3);player.add(pack);
  [[pArmL,-0.5],[pArmR,0.5]].forEach(function(a){const m=mk(0.2,0.78,0.22,0x2f9e6b);m.position.y=-0.34;a[0].add(m);a[0].position.set(a[1],1.66,0);player.add(a[0])});
  [[pLegL,-0.19],[pLegR,0.19]].forEach(function(a){const m=mk(0.28,0.82,0.3,0x2c3e5c);m.position.y=-0.4;a[0].add(m);a[0].position.set(a[1],0.86,0);player.add(a[0])});
  world.add(player);
})();
const P={x:0,z:2,y:0,face:Math.PI,phase:0};
P.y=heightAt(P.x,P.z);
const cam={yaw:0,pitch:0.4,dist:10};

/* sky objects */
const sunMesh=new THREE.Mesh(new THREE.SphereGeometry(7,16,12),new THREE.MeshBasicMaterial({color:0xfff2b8,fog:false}));
const moonMesh=new THREE.Mesh(new THREE.SphereGeometry(5,16,12),new THREE.MeshBasicMaterial({color:0xdfe7ff,fog:false}));
world.add(sunMesh);world.add(moonMesh);
const stars=(function(){
  const r=rng(5),n=450,a=new Float32Array(n*3);
  for(let i=0;i<n;i++){const u=r()*TAU,v=r()*0.95+0.05,rr=Math.sqrt(1-v*v);a[i*3]=Math.cos(u)*rr*420;a[i*3+1]=v*420;a[i*3+2]=Math.sin(u)*rr*420}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(a,3));
  const p=new THREE.Points(g,new THREE.PointsMaterial({color:0xffffff,size:1.8,sizeAttenuation:false,transparent:true,opacity:0,fog:false,depthWrite:false}));
  world.add(p);return p;
})();
const clouds=[],cloudMat=new THREE.MeshBasicMaterial({color:0xffffff,fog:false});
(function(){
  const r=rng(21);
  for(let i=0;i<12;i++){
    const g=new THREE.Group(),n=3+Math.floor(r()*3);
    for(let k=0;k<n;k++){const m=new THREE.Mesh(new THREE.SphereGeometry(1,8,6),cloudMat);const s=5+r()*5;m.scale.set(s*1.5,s*0.6,s);m.position.set(k*7-n*3,r()*2,r()*4-2);g.add(m)}
    g.position.set((r()*2-1)*170,75+r()*30,(r()*2-1)*170);g.userData.v=0.8+r()*1.4;world.add(g);clouds.push(g);
  }
})();

/* time of day */
let tDay=0.3,T=0;
const cNight=new THREE.Color(0x0a1330),cDay=new THREE.Color(0x8fd1ff),cDusk=new THREE.Color(0xff9b6b),cSky=new THREE.Color();
const cWarm=new THREE.Color(0xffc58a),cWhite=new THREE.Color(0xffffff);
let isNight=false;
function updEnv(){
  const a=(tDay-0.25)*TAU,elev=Math.sin(a);
  const day=smooth(-0.15,0.3,elev),twi=Math.exp(-Math.pow(elev/0.22,2));
  cSky.copy(cNight).lerp(cDay,day).lerp(cDusk,twi*0.55);
  world.background=cSky;world.fog.color.copy(cSky);
  hemi.intensity=0.16+0.6*day;
  sunL.intensity=1.15*smooth(-0.05,0.3,elev);
  sunL.color.copy(cWarm).lerp(cWhite,smooth(0,0.5,elev));
  moonL.intensity=0.28*(1-day);
  const dx=Math.cos(a)*0.8,dy=elev,dz=0.45;
  const L=Math.hypot(dx,dy,dz);
  const cx=P.x,cy=P.y+1.5,cz=P.z;
  sunL.position.set(cx+dx/L*90,cy+dy/L*90,cz+dz/L*90);sunL.target.position.set(cx,cy,cz);
  moonL.position.set(cx-dx/L*90,cy-dy/L*90+20,cz-dz/L*90);
  sunMesh.position.set(cx+dx/L*300,cy+dy/L*300,cz+dz/L*300);sunMesh.visible=elev>-0.08;
  moonMesh.position.set(cx-dx/L*300,cy-dy/L*300,cz-dz/L*300);moonMesh.visible=elev<0.08;
  stars.position.set(cx,0,cz);stars.material.opacity=Math.pow(1-day,2)*0.95;
  cloudMat.color.setRGB(lerp(0.25,1,day),lerp(0.28,1,day),lerp(0.4,1,day));
  const hrs=(tDay*24)%24,hh=Math.floor(hrs),mm=Math.floor((hrs-hh)*60);
  $('#clockTxt').textContent=(hh<10?'0':'')+hh+':'+(mm<10?'0':'')+mm;
  const nn=day<0.25;if(nn!==isNight){isNight=nn;$('#clock').classList.toggle('night',nn)}
}

/* ================= DISSECT ================= */
const dsc=new THREE.Scene();dsc.background=new THREE.Color(0x0f2a26);
const dcam=new THREE.PerspectiveCamera(38,1,0.1,100);
const dhemi=new THREE.HemisphereLight(0xdff3ff,0x1d3a30,0.85);dsc.add(dhemi);
const ddir=new THREE.DirectionalLight(0xffffff,1.1);ddir.position.set(4,9,8);dsc.add(ddir);
const dfill=new THREE.DirectionalLight(0x9ad7ff,0.35);dfill.position.set(-6,3,-5);dsc.add(dfill);
const TL=6,TR=2.5,A0=320*Math.PI/180,A1=A0+260*Math.PI/180;
const layerMeshes=[],layerMat={};
function ringGeo(ro,ri){
  const s=new THREE.Shape();
  if(ri<=0.001){s.moveTo(0,0);s.lineTo(ro*Math.cos(A0),ro*Math.sin(A0));s.absarc(0,0,ro,A0,A1,false);s.lineTo(0,0)}
  else{s.absarc(0,0,ro,A0,A1,false);s.absarc(0,0,ri,A1,A0,true);s.closePath()}
  const g=new THREE.ExtrudeGeometry(s,{depth:TL,bevelEnabled:false,curveSegments:72});
  g.rotateX(-Math.PI/2);g.translate(0,-TL/2,0);return g;
}
LAYERS.forEach(function(L){
  const mat=new THREE.MeshStandardMaterial({color:L.col,roughness:0.85,metalness:0,flatShading:false});
  const m=new THREE.Mesh(ringGeo(L.ro,L.ri),mat);m.userData.layer=L.id;dsc.add(m);
  layerMeshes.push(m);layerMat[L.id]={mat:mat,base:new THREE.Color(L.col),k:0};
});
(function detail(){
  /* annual rings on the top face */
  const rm=new THREE.MeshBasicMaterial({color:0x7a4a26,transparent:true,opacity:0.55,side:THREE.DoubleSide,polygonOffset:true,polygonOffsetFactor:-2,polygonOffsetUnits:-2});
  [0.46,0.64,0.82,1.0,1.12,1.32,1.44,1.56,1.68,1.78].forEach(function(r){
    const g=new THREE.RingGeometry(r,r+0.014,128,1,A0,A1-A0);g.rotateX(-Math.PI/2);
    const m=new THREE.Mesh(g,rm);m.position.y=TL/2+0.004;dsc.add(m);
  });
  /* rays */
  const ry=new THREE.MeshBasicMaterial({color:0xfff0cc,transparent:true,opacity:0.5,polygonOffset:true,polygonOffsetFactor:-3,polygonOffsetUnits:-3});
  const N=16;
  for(let k=0;k<N;k++){
    const th=A0+(k+0.5)/N*(A1-A0),r1=0.32,r2=2.24,len=r2-r1;
    const m=new THREE.Mesh(new THREE.BoxGeometry(len,0.004,0.016),ry);
    m.position.set((r1+len/2)*Math.cos(th),TL/2+0.006,-(r1+len/2)*Math.sin(th));m.rotation.y=th;dsc.add(m);
  }
  /* bark ridges */
  const r=rng(11),bm=new THREE.MeshStandardMaterial({color:0x3f2a1d,roughness:1,flatShading:true});
  for(let k=0;k<34;k++){
    const th=A0+r()*(A1-A0),len=TL*(0.55+r()*0.45),off=(r()-0.5)*(TL-len);
    const m=new THREE.Mesh(new THREE.BoxGeometry(0.1,len,0.07+r()*0.07),bm);
    m.position.set((TR+0.01)*Math.cos(th),off,-(TR+0.01)*Math.sin(th));m.rotation.y=th;dsc.add(m);
  }
  /* pedestal */
  const ped=new THREE.Mesh(new THREE.CylinderGeometry(3.6,3.8,0.3,56),new THREE.MeshStandardMaterial({color:0x1d4a3a,roughness:1}));
  ped.position.y=-TL/2-0.15;dsc.add(ped);
})();
/* flow particles */
function dotTex(){
  const c=document.createElement('canvas');c.width=c.height=64;const x=c.getContext('2d');
  const g=x.createRadialGradient(32,32,2,32,32,30);g.addColorStop(0,'rgba(255,255,255,1)');g.addColorStop(0.55,'rgba(255,255,255,0.9)');g.addColorStop(1,'rgba(255,255,255,0)');
  x.fillStyle=g;x.beginPath();x.arc(32,32,30,0,TAU);x.fill();return new THREE.CanvasTexture(c);
}
const dot=dotTex();
function makeFlow(n,band,dir,color,size,seed){
  const r=rng(seed),data=[];
  for(let i=0;i<n;i++)data.push({f:i%2,r:band[0]+r()*(band[1]-band[0]),y:(r()-0.5)*TL,v:0.7+r()*0.7,p:r()*TAU});
  const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.BufferAttribute(new Float32Array(n*3),3));
  const pts=new THREE.Points(geo,new THREE.PointsMaterial({map:dot,color:color,size:size,sizeAttenuation:true,transparent:true,depthWrite:false}));
  pts.frustumCulled=false;dsc.add(pts);return {pts:pts,data:data,dir:dir};
}
const OFF=0.03;
const waterFlow=makeFlow(96,[1.32,1.82],1,0x4cc3ff,0.2,31);
const sugarFlow=makeFlow(70,[2.04,2.24],-1,0xffb13b,0.2,32);
const dState={yaw:0,pitch:0.4,dist:14,user:false,sun:0.65};
function stepFlow(F,speed,dt){
  const pos=F.pts.geometry.attributes.position;
  for(let i=0;i<F.data.length;i++){
    const d=F.data[i];
    d.y+=F.dir*d.v*speed*dt;
    if(d.y>TL/2)d.y-=TL;else if(d.y<-TL/2)d.y+=TL;
    const th=(d.f===0?A0-OFF:A1+OFF)+Math.sin(T*1.6+d.p)*0.006;
    pos.setXYZ(i,d.r*Math.cos(th),d.y,-d.r*Math.sin(th));
  }
  pos.needsUpdate=true;
}
let selected=null,hovered=null;
const dimC=new THREE.Color(0x1d2f29);
function updDissect(dt){
  if(!dState.user)dState.yaw=0.3*Math.sin(T*0.45);
  const cp=Math.cos(dState.pitch),sp=Math.sin(dState.pitch);
  dcam.position.set(Math.sin(dState.yaw)*cp*dState.dist,sp*dState.dist,Math.cos(dState.yaw)*cp*dState.dist);
  dcam.lookAt(0,0,0);
  const s=dState.sun;
  ddir.intensity=0.3+0.7*s;dhemi.intensity=0.35+0.4*s;
  stepFlow(waterFlow,0.25+1.7*s,dt);
  stepFlow(sugarFlow,0.12+0.75*s,dt);
  LAYERS.forEach(function(L){
    const e=layerMat[L.id],tk=(selected&&selected!==L.id)?0.62:0;
    e.k+=(tk-e.k)*Math.min(1,dt*10);
    e.mat.color.copy(e.base).lerp(dimC,e.k);
    const glow=selected===L.id?0.1:(hovered===L.id?0.06:0);
    e.mat.emissive.copy(e.base).multiplyScalar(glow);
  });
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
  el.innerHTML='<h2 style="color:'+L.ui+'">'+L.name+'</h2><p class="sci">'+L.sci+'</p><h3>Apa ini</h3><p>'+L.what+'</p><h3>Fungsi</h3><p>'+L.fn+'</p><h3>Tahukah kamu</h3><p>'+L.fact+'</p>';
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
    curHero=i;const H=HEROES[i];
    mode='dissect';document.body.classList.add('dissect');
    $('#dName').textContent=H.name;$('#dSci').textContent='Penampang batang · '+H.sci;
    dState.yaw=0;dState.pitch=0.4;dState.dist=window.innerWidth<760?19:14;dState.user=false;
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
  qz={i:0,score:0,gain:0,order:shuffle(QUIZ.map(function(_,i){return i}),r),done:false};
  renderQ();
}
function renderQ(){
  const q=QUIZ[qz.order[qz.i]];
  if(!qz.optOrder||qz.optOrder.q!==q.id)qz.optOrder={q:q.id,o:shuffle(q.o.map(function(_,i){return i}),Math.random)};
  const opts=qz.optOrder.o.map(function(oi,k){return '<button type="button" class="opt" data-o="'+oi+'">'+q.o[oi]+'</button>'}).join('');
  openModal('<div class="head"><div><p style="color:var(--muted);font-size:13px;font-weight:800">Soal '+(qz.i+1)+' dari '+QUIZ.length+'</p></div><button class="x" type="button" data-close aria-label="Tutup">&times;</button></div><p class="q">'+q.q+'</p><div class="opts" id="opts">'+opts+'</div><div id="qfb"></div>');
}
function answerQ(oi){
  const q=QUIZ[qz.order[qz.i]],ok=oi===q.a;
  document.querySelectorAll('#opts .opt').forEach(function(b){
    const v=+b.dataset.o;b.disabled=true;
    if(v===q.a)b.classList.add('ok');else if(v===oi)b.classList.add('bad');
  });
  if(ok){qz.score++;if(!S.qdone[q.id]){S.qdone[q.id]=1;qz.gain+=15;S.xp+=15;updProfile();save()}}
  const last=qz.i>=QUIZ.length-1;
  $('#qfb').innerHTML='<div class="exp"><b>'+(ok?'Benar. ':'Belum tepat. ')+'</b>'+q.e+'</div><div class="actions"><button type="button" class="btn primary" id="qnext">'+(last?'Lihat hasil':'Lanjut')+'</button></div>';
}
function nextQ(){
  if(qz.i>=QUIZ.length-1){
    openModal('<div class="head"><h2>Hasil kuis</h2><button class="x" type="button" data-close aria-label="Tutup">&times;</button></div><p class="q">Skor '+qz.score+' dari '+QUIZ.length+'</p><p style="color:var(--muted)">'+(qz.gain?'Kamu mendapat tambahan '+qz.gain+' XP dari soal yang baru benar pertama kali.':'XP hanya diberikan saat soal pertama kali dijawab benar.')+'</p><div class="actions"><button type="button" class="btn primary" id="qagain">Ulangi</button><button type="button" class="btn" data-close>Tutup</button></div>');
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
let keys={};
const joy={x:0,y:0};
const isTouch=('ontouchstart' in window)||(navigator.maxTouchPoints>0)||window.matchMedia('(pointer:coarse)').matches;
if(isTouch)document.body.classList.add('touch');
window.addEventListener('keydown',function(e){
  if(e.target&&e.target.tagName==='INPUT'&&e.target.type!=='checkbox'&&e.target.type!=='range')return;
  const k=e.key.toLowerCase();
  if(k==='escape'){if(modalOpen())closeModal();else if(mode==='dissect')exitDissect();return}
  if(modalOpen())return;
  if(mode==='world'){
    if(['w','a','s','d','arrowup','arrowdown','arrowleft','arrowright','shift'].indexOf(k)>=0){keys[k]=true;e.preventDefault()}
    if(k==='e')tryInteract();
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
    if(mode==='world'){cam.yaw-=dx*0.006;cam.pitch=clamp(cam.pitch+dy*0.005,0.1,1.25)}
    else{dState.user=true;dState.yaw-=dx*0.008;dState.pitch=clamp(dState.pitch+dy*0.006,-0.25,1.2)}
  }else if(pts.size===2){
    const a=Array.from(pts.values()),d=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);
    if(pinch0>0){
      const f=pinch0/d;
      if(mode==='world')cam.dist=clamp(cam.dist*f,4,16);else{dState.user=true;dState.dist=clamp(dState.dist*f,6,24)}
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
  if(mode==='world')cam.dist=clamp(cam.dist*f,4,16);else{dState.user=true;dState.dist=clamp(dState.dist*f,6,24)}
},{passive:false});
$('#act').addEventListener('click',tryInteract);

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
    speedNow=(run?9:5.4)*mag;
    const nx=P.x+dx*speedNow*dt,nz=P.z+dz*speedNow*dt;
    const walk=function(x,z){return Math.hypot(x,z)<112&&heightAt(x,z)>WATER-0.3};
    if(walk(nx,P.z))P.x=nx;
    if(walk(P.x,nz))P.z=nz;
    collide(P);
    P.face=stepAngle(P.face,Math.atan2(dx,dz),Math.min(1,dt*12));
    P.phase+=speedNow*dt*1.5;
  }
  const gy=heightAt(P.x,P.z);P.y+=(gy-P.y)*Math.min(1,dt*14);
  player.position.set(P.x,P.y,P.z);player.rotation.y=P.face;
  const amp=Math.min(1,speedNow/5.4)*0.9,sw=Math.sin(P.phase);
  pArmL.rotation.x=sw*amp;pArmR.rotation.x=-sw*amp;pLegL.rotation.x=-sw*amp;pLegR.rotation.x=sw*amp;
  player.children[0].position.y=1.3+Math.abs(Math.cos(P.phase))*0.04*Math.min(1,speedNow);

  /* camera */
  const ty=P.y+1.5,cp=Math.cos(cam.pitch),sp=Math.sin(cam.pitch);
  let cx=P.x+Math.sin(cam.yaw)*cp*cam.dist,cy=ty+sp*cam.dist,cz=P.z+Math.cos(cam.yaw)*cp*cam.dist;
  const gh=heightAt(cx,cz)+0.9;if(cy<gh)cy=gh;
  wcam.position.set(cx,cy,cz);wcam.lookAt(P.x,ty,P.z);

  /* markers, tags, prompt */
  heroObjs.forEach(function(o,i){
    o.mk.rotation.y+=dt*1.6;o.mk.position.y=HEROES[i].top+1.3+Math.sin(T*2+i)*0.25;
    const s=1+0.12*Math.sin(T*3+i);o.ring.scale.set(s,s,s);
    const H=HEROES[i],d=Math.hypot(P.x-H.x,P.z-H.z),tg=tags[i];
    tv.set(H.x,o.y+H.top*0.62,H.z).project(wcam);
    if(tv.z<1&&d<48&&d>10){
      const w=window.innerWidth,h=window.innerHeight;
      tg.style.display='block';
      tg.style.transform='translate('+((tv.x*0.5+0.5)*w)+'px,'+((-tv.y*0.5+0.5)*h)+'px) translate(-50%,-100%)';
      tg.className='tag'+(S.trees[H.id]?' done':'');
      tg.innerHTML=H.name+'<small>'+Math.round(d)+' m</small>';
    }else tg.style.display='none';
  });
  nearAcc+=dt;
  if(nearAcc>0.2){
    nearAcc=0;
    const n=nearestHero(),H=HEROES[n.i];
    $('#near').textContent='Terdekat: '+H.name+', '+Math.round(n.d)+' m';
    const act=$('#act');
    if(n.d<8){act.classList.add('on');act.textContent='Bedah '+H.name}else act.classList.remove('on');
  }
  clouds.forEach(function(c){c.position.x+=c.userData.v*dt;if(c.position.x>190)c.position.x=-190});
  waterMesh.position.y=WATER+Math.sin(T*0.8)*0.04;
}
function resize(){
  const w=window.innerWidth,h=window.innerHeight;
  renderer.setSize(w,h,false);
  wcam.aspect=w/h;wcam.updateProjectionMatrix();
  dcam.aspect=w/h;
  /* keep the trunk clear of the side panel on wide screens */
  if(w>760){dcam.setViewOffset(w,h,Math.min(120,w*0.09),0,w,h)}else{dcam.clearViewOffset()}
  dcam.updateProjectionMatrix();
}
window.addEventListener('resize',resize);
resize();

let last=performance.now();
function frame(now){
  const dt=Math.min(0.05,(now-last)/1000);last=now;T+=dt;
  tDay=(tDay+dt/240)%1;
  if(mode==='world'){updWorld(dt);updEnv();renderer.render(world,wcam)}
  else{updDissect(dt);renderer.render(dsc,dcam)}
  requestAnimationFrame(frame);
}
updProfile();updEnv();
requestAnimationFrame(frame);
})();
