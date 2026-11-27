import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { TAU, clamp, smooth, rng } from './util.js';
import { terrainU } from './terrain.js';
import dirtUrl from '../node_modules/@dgreenheck/ez-tree/src/app/public/dirt_color.jpg';
import dirtNUrl from '../node_modules/@dgreenheck/ez-tree/src/app/public/dirt_normal.jpg';

/* Tumbuhan monokotil: kelapa (palem) dan bambu.
   Batang monokotil tidak punya kambium: berkas pembuluh tersebar di jaringan dasar, tidak ada cincin tahun,
   dan batang praktis tidak membesar setelah tumbuh. Modul ini membuat (1) model di dunia dan
   (2) adegan bedah penampang batang yang memakai antarmuka yang sama dengan objek bedah lain. */

const C = (r, g, b) => new THREE.Color().setRGB(r, g, b, THREE.SRGBColorSpace);
function tex(N, draw, rep, srgb = true) {
  const c = document.createElement('canvas'); c.width = c.height = N; draw(c.getContext('2d'), N);
  const t = new THREE.CanvasTexture(c); if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 4;
  if (rep) t.repeat.set(rep[0], rep[1]); return t;
}
/* daun dengan alfa: bentuk lanset sempit (anak daun kelapa / daun bambu) */
function leafTex(base, rib) {
  return tex(128, (x, N) => {
    x.clearRect(0, 0, N, N);
    const g = x.createLinearGradient(0, 0, N, 0); g.addColorStop(0, base[0]); g.addColorStop(0.5, base[1]); g.addColorStop(1, base[0]);
    x.fillStyle = g; x.beginPath(); x.moveTo(N / 2, 0); x.bezierCurveTo(N * 0.95, N * 0.25, N * 0.95, N * 0.7, N / 2, N); x.bezierCurveTo(N * 0.05, N * 0.7, N * 0.05, N * 0.25, N / 2, 0); x.fill();
    x.strokeStyle = rib; x.lineWidth = 3; x.beginPath(); x.moveTo(N / 2, 0); x.lineTo(N / 2, N); x.stroke();
  }, null);
}
function swayMat(m, amt, base) {
  m.onBeforeCompile = (sh) => { sh.uniforms.uTime = terrainU.uTime; sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nuniform float uTime;').replace('#include <begin_vertex>', `#include <begin_vertex>
    { float hh = max(0.0, position.y - ${base.toFixed(2)}); float w = hh * hh * ${amt.toFixed(4)};
      transformed.x += sin(uTime * 1.3 + position.z * 0.4 + position.x * 0.2) * w; transformed.z += cos(uTime * 1.1 + position.x * 0.4) * w * 0.7; }`); };
  return m;
}
/* daftar quad (anak daun) dari titik pangkal, arah, panjang, lebar */
function quads(list) {
  const pos = [], uv = [], idx = []; let n = 0;
  const a = new THREE.Vector3(), d = new THREE.Vector3(), s = new THREE.Vector3();
  for (const q of list) {
    a.copy(q.p); d.copy(q.d).normalize(); s.copy(q.s).normalize().multiplyScalar(q.w / 2);
    const b = a.clone().addScaledVector(d, q.l).add(q.droop || new THREE.Vector3());
    pos.push(a.x - s.x, a.y - s.y, a.z - s.z, a.x + s.x, a.y + s.y, a.z + s.z, b.x + s.x, b.y + s.y, b.z + s.z, b.x - s.x, b.y - s.y, b.z - s.z);
    uv.push(0, 0, 1, 0, 1, 1, 0, 1); idx.push(n, n + 1, n + 2, n, n + 2, n + 3); n += 4;
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals(); return g;
}

/* ================= KELAPA DI DUNIA ================= */
let PALM = null;
export function palmAssets() {
  if (PALM) return PALM;
  const r = rng(91);
  /* batang: bekas pelepah berupa cincin */
  const bark = tex(256, (x, N) => { x.fillStyle = '#7d7262'; x.fillRect(0, 0, N, N); for (let i = 0; i < 1600; i++) { x.fillStyle = r() < 0.5 ? 'rgba(40,32,24,0.15)' : 'rgba(220,210,190,0.12)'; x.fillRect(r() * N, r() * N, 1 + r() * 2, 6 + r() * 14); }
    for (let i = 0; i < 16; i++) { x.fillStyle = 'rgba(40,30,22,0.55)'; x.fillRect(i * N / 16, 0, 3, N); x.fillStyle = 'rgba(200,190,170,0.25)'; x.fillRect(i * N / 16 + 3, 0, 2, N); } }, [3, 1]);
  const trunkM = new THREE.MeshStandardMaterial({ map: bark, roughness: 0.92 });
  const leafM = swayMat(new THREE.MeshStandardMaterial({ map: leafTex(['#3f6a1f', '#6a9a2c'], '#c9d08a'), alphaTest: 0.45, side: THREE.DoubleSide, roughness: 0.6 }), 0.004, 6.5);
  const nutM = new THREE.MeshStandardMaterial({ color: C(0.42, 0.5, 0.16), roughness: 0.55 });
  return (PALM = { trunkM, leafM, nutM });
}
export function palmGeo(seed, H) {
  const r = rng(seed), lean = new THREE.Vector3(r() - 0.5, 0, r() - 0.5).normalize().multiplyScalar(0.8 + r() * 1.2);
  const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(0, -0.3, 0), new THREE.Vector3(lean.x * 0.15, H * 0.35, lean.z * 0.15), new THREE.Vector3(lean.x * 0.55, H * 0.75, lean.z * 0.55), new THREE.Vector3(lean.x, H, lean.z)]);
  const trunk = new THREE.TubeGeometry(curve, 24, 1, 10, false);
  /* jari-jari batang: pangkal sedikit membesar lalu hampir sama sampai pucuk (tanpa pertumbuhan sekunder) */
  const p = trunk.attributes.position, c = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) { const seg = Math.floor(i / 11), t = seg / 24; curve.getPoint(t, c); const rad = 0.17 + 0.12 * Math.pow(1 - t, 6); p.setXYZ(i, c.x + (p.getX(i) - c.x) * rad, c.y + (p.getY(i) - c.y) * rad, c.z + (p.getZ(i) - c.z) * rad); }
  trunk.computeVertexNormals();
  const top = curve.getPoint(1), Q = [];
  const nF = 16;
  for (let f = 0; f < nF; f++) {
    const a = f / nF * TAU + r() * 0.3, up = 0.35 - (f % 3) * 0.28 - r() * 0.2, len = 3.4 + r() * 1.2;
    const dir = new THREE.Vector3(Math.cos(a), up, Math.sin(a)).normalize(), side = new THREE.Vector3(-Math.sin(a), 0, Math.cos(a));
    const rach = (t) => top.clone().addScaledVector(dir, t * len).add(new THREE.Vector3(0, -t * t * len * 0.55, 0));
    for (let i = 2; i < 40; i++) {
      const t = i / 40, b = rach(t), nx = rach(Math.min(1, t + 0.03)).sub(b).normalize(), ll = (0.55 + 0.45 * Math.sin(Math.PI * Math.min(1, t * 1.15))) * 0.85;
      for (const s of [1, -1]) {
        const d = side.clone().multiplyScalar(s).addScaledVector(nx, 0.55).add(new THREE.Vector3(0, -0.35, 0));
        Q.push({ p: b, d, s: nx, l: ll, w: 0.09, droop: new THREE.Vector3(0, -0.12 * ll, 0) });
      }
    }
  }
  const leaves = quads(Q);
  const nuts = []; for (let i = 0; i < 7; i++) { const a = i / 7 * TAU, g = new THREE.SphereGeometry(0.13, 10, 8); g.scale(1, 1.15, 1); g.translate(top.x + Math.cos(a) * 0.22, top.y - 0.28 - (i % 2) * 0.1, top.z + Math.sin(a) * 0.22); nuts.push(g); }
  return { trunk, leaves, nuts: mergeGeometries(nuts), top };
}
export function buildPalm(scene, x, y, z, seed = 1, H = 9) {
  const A = palmAssets(), G = palmGeo(seed, H), g = new THREE.Group();
  const t = new THREE.Mesh(G.trunk, A.trunkM), l = new THREE.Mesh(G.leaves, A.leafM), n = new THREE.Mesh(G.nuts, A.nutM);
  t.castShadow = t.receiveShadow = true; l.castShadow = true; n.castShadow = true; l.userData.noAO = true;
  g.add(t, l, n); g.position.set(x, y, z); scene.add(g);
  return { group: g, top: G.top.y };
}

/* ================= BAMBU DI DUNIA ================= */
function culmTex() {
  const r = rng(17);
  return tex(256, (x, N) => { const g = x.createLinearGradient(0, 0, 0, N); g.addColorStop(0, '#5f8a2e'); g.addColorStop(0.5, '#7aa23c'); g.addColorStop(1, '#5f8a2e'); x.fillStyle = g; x.fillRect(0, 0, N, N);
    for (let i = 0; i < 900; i++) { x.fillStyle = r() < 0.5 ? 'rgba(30,60,10,0.12)' : 'rgba(230,240,190,0.1)'; x.fillRect(r() * N, r() * N, 10 + r() * 30, 1); }
    for (let i = 0; i < 4; i++) { const px = i * N / 4; x.fillStyle = 'rgba(60,70,25,0.9)'; x.fillRect(px, 0, 4, N); x.fillStyle = 'rgba(235,235,215,0.55)'; x.fillRect(px + 4, 0, 8, N); } }, [1, 1]);
}
export function buildBamboo(scene, x, y, z, seed = 3) {
  const r = rng(seed), culmM = new THREE.MeshStandardMaterial({ map: culmTex(), roughness: 0.38, metalness: 0 });
  const leafM = swayMat(new THREE.MeshStandardMaterial({ map: leafTex(['#4f7a26', '#86ad3e'], '#bcd27a'), alphaTest: 0.45, side: THREE.DoubleSide, roughness: 0.6 }), 0.003, 3.0);
  const culms = [], Q = [], n = 15, nodeLen = 0.42;
  for (let i = 0; i < n; i++) {
    const a = r() * TAU, d = Math.sqrt(r()) * 0.9, H = 8 + r() * 3.5, out = 0.12 + r() * 0.12, rad = 0.045 + r() * 0.025;
    const b = new THREE.Vector3(Math.cos(a) * d, -0.2, Math.sin(a) * d), dir = new THREE.Vector3(Math.cos(a) * out, 1, Math.sin(a) * out).normalize();
    const curve = new THREE.CatmullRomCurve3([b, b.clone().addScaledVector(dir, H * 0.5), b.clone().addScaledVector(dir, H * 0.85).add(new THREE.Vector3(Math.cos(a) * H * 0.08, 0, Math.sin(a) * H * 0.08)), b.clone().addScaledVector(dir, H).add(new THREE.Vector3(Math.cos(a) * H * 0.22, -H * 0.05, Math.sin(a) * H * 0.22))]);
    const tg = new THREE.TubeGeometry(curve, 30, rad, 7, false);
    /* uv u (sepanjang batang) diulang per ruas supaya buku muncul tiap ~0,4 m */
    const uvA = tg.attributes.uv; for (let k = 0; k < uvA.count; k++) uvA.setX(k, uvA.getX(k) * H / nodeLen / 4);
    culms.push(tg);
    /* ranting di tiap buku bagian atas, tiap ranting membawa kipas daun */
    for (let k = 0; k < 34; k++) {
      const t = 0.32 + 0.68 * k / 34, p = curve.getPoint(t), side = new THREE.Vector3(r() - 0.5, (r() - 0.3) * 0.4, r() - 0.5).normalize(), reach = 0.5 + r() * 0.9 * (1 - t * 0.5);
      for (let m = 0; m < 11; m++) {
        const tip = p.clone().addScaledVector(side, reach * (0.35 + 0.65 * m / 11)).add(new THREE.Vector3(0, -0.1 * m / 11, 0));
        const dd = side.clone().add(new THREE.Vector3((r() - 0.5) * 1.2, -0.45 - r() * 0.5, (r() - 0.5) * 1.2)).normalize();
        Q.push({ p: tip, d: dd, s: new THREE.Vector3(0, 1, 0).cross(dd).normalize(), l: 0.24 + r() * 0.12, w: 0.055 });
      }
    }
  }
  const g = new THREE.Group(), cm = new THREE.Mesh(mergeGeometries(culms), culmM), lm = new THREE.Mesh(quads(Q), leafM);
  cm.castShadow = cm.receiveShadow = true; lm.castShadow = true; lm.userData.noAO = true;
  g.add(cm, lm); g.position.set(x, y, z); scene.add(g);
  return { group: g, top: 9 };
}

/* ================= BEDAH PENAMPANG BATANG MONOKOTIL ================= */
/* bentuk sektor 270 derajat (seperempat dipotong supaya bagian dalam terlihat) */
function sectorShape(ro, ri, a0 = Math.PI * 0.25, a1 = Math.PI * 1.75, n = 64) {
  const s = new THREE.Shape();
  for (let i = 0; i <= n; i++) { const a = a0 + (a1 - a0) * i / n; const x = Math.cos(a) * ro, y = Math.sin(a) * ro; i ? s.lineTo(x, y) : s.moveTo(x, y); }
  if (ri > 0) { for (let i = n; i >= 0; i--) { const a = a0 + (a1 - a0) * i / n; s.lineTo(Math.cos(a) * ri, Math.sin(a) * ri); } } else s.lineTo(0, 0);
  s.closePath(); return s;
}
function ring(ro, ri, h, y0 = 0) {
  const g = new THREE.ExtrudeGeometry(sectorShape(ro, ri), { depth: h, bevelEnabled: false, curveSegments: 64 });
  g.rotateX(-Math.PI / 2); g.translate(0, y0, 0);
  /* uv tutup = koordinat dunia (supaya tekstur penampang cocok), uv sisi = sudut x tinggi */
  const p = g.attributes.position, n = g.attributes.normal, uv = g.attributes.uv, SP = 6;
  for (let i = 0; i < p.count; i++) { if (Math.abs(n.getY(i)) > 0.9) uv.setXY(i, p.getX(i) / SP + 0.5, -p.getZ(i) / SP + 0.5); else uv.setXY(i, Math.atan2(p.getZ(i), p.getX(i)) / TAU * 4, p.getY(i) / 3); }
  return g;
}
/* gambar satu berkas pembuluh (kolateral tertutup): tudung serat, xilem (2 pembuluh besar), floem */
function drawBundle(x, cx, cy, s) {
  x.fillStyle = '#5b3a1e'; x.beginPath(); x.ellipse(cx, cy, s * 1.05, s * 1.25, 0, 0, TAU); x.fill();
  x.fillStyle = '#d9c9a0'; x.beginPath(); x.ellipse(cx, cy + s * 0.15, s * 0.75, s * 0.85, 0, 0, TAU); x.fill();
  x.fillStyle = '#a3c36b'; x.beginPath(); x.ellipse(cx, cy - s * 0.35, s * 0.42, s * 0.3, 0, 0, TAU); x.fill();
  x.fillStyle = '#3a6fa8'; for (const sx of [-1, 1]) { x.beginPath(); x.arc(cx + sx * s * 0.38, cy + s * 0.3, s * 0.24, 0, TAU); x.fill(); }
}
export function buildMonoDissect(renderer, M) {
  const scene = new THREE.Scene();
  { const c = document.createElement('canvas'); c.width = c.height = 512; const x = c.getContext('2d'); const g = x.createRadialGradient(256, 230, 20, 256, 256, 420); g.addColorStop(0, '#2f4a2c'); g.addColorStop(0.55, '#132014'); g.addColorStop(1, '#05090e'); x.fillStyle = g; x.fillRect(0, 0, 512, 512); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; scene.background = t; }
  scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture; scene.environmentIntensity = 0.5;
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 120);
  const key = new THREE.DirectionalLight(0xfff1dc, 2.6); key.position.set(5, 10, 7); key.castShadow = true; key.shadow.mapSize.set(1024, 1024);
  const sc = key.shadow.camera; sc.left = -7; sc.right = 7; sc.top = 7; sc.bottom = -7; sc.near = 1; sc.far = 32; key.shadow.bias = -0.0005; key.shadow.normalBias = 0.03; scene.add(key);
  { const rim = new THREE.DirectionalLight(0x9fd6ff, 1.1); rim.position.set(-6, 3, -5); scene.add(rim); }
  const dt = new THREE.TextureLoader().load(dirtUrl), dn = new THREE.TextureLoader().load(dirtNUrl);
  for (const t of [dt, dn]) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(2.4, 2.4); } dt.colorSpace = THREE.SRGBColorSpace;
  const ped = new THREE.Mesh(new THREE.CylinderGeometry(4.6, 4.8, 0.3, 64), new THREE.MeshStandardMaterial({ map: dt, normalMap: dn, color: C(0.75, 0.7, 0.66), roughness: 1 }));
  ped.position.y = -0.15; ped.receiveShadow = true; ped.userData.noAO = true; scene.add(ped);

  const isBam = M.type === 'bambu', R = isBam ? 2.4 : 2.6, Hh = 5.2, r = rng(isBam ? 5 : 9);
  /* posisi berkas pembuluh: tersebar, makin rapat ke arah luar */
  const B = [], rIn = isBam ? 1.72 : 0.05, rOut = isBam ? 2.3 : 2.18, N = isBam ? 230 : 280;
  while (B.length < N) { const a = r() * TAU, u = Math.pow(r(), isBam ? 0.45 : 0.6), rr = rIn + (rOut - rIn) * u; if (a > Math.PI * 0.25 - 0.02 && a < Math.PI * 1.75 + 0.02) B.push([Math.cos(a) * rr, Math.sin(a) * rr, 0.035 + 0.03 * (1 - u) + r() * 0.01]); }
  /* tekstur penampang (tutup atas) dengan berkas di posisi yang sama dengan batang 3D */
  const SP = 6, capT = tex(1024, (x, Np) => {
    const k = Np / SP, cx = Np / 2, cy = Np / 2;
    x.fillStyle = isBam ? '#d9cf9e' : '#e6d9b8'; x.fillRect(0, 0, Np, Np);
    const rr = rng(3); for (let i = 0; i < 5000; i++) { x.fillStyle = rr() < 0.5 ? 'rgba(120,100,60,0.08)' : 'rgba(255,255,240,0.1)'; x.fillRect(rr() * Np, rr() * Np, 2, 2); }
    if (!isBam) { x.strokeStyle = 'rgba(110,80,40,0.6)'; x.lineWidth = 0.25 * k; x.beginPath(); x.arc(cx, cy, 2.42 * k, 0, TAU); x.stroke(); x.fillStyle = '#b79a6a'; x.beginPath(); x.arc(cx, cy, 2.6 * k, 0, TAU); x.arc(cx, cy, 2.3 * k, 0, TAU, true); x.fill(); }
    for (const b of B) drawBundle(x, cx + b[0] * k, cy - b[1] * k, b[2] * k * 1.3);
  }, [1, 1]);
  const scene3 = new THREE.Group(); scene.add(scene3);
  const layerMeshes = [], ent = {};
  const reg = (id, m) => { (ent[id] || (ent[id] = { mats: [], meshes: [] })); if (!ent[id].mats.includes(m.material)) ent[id].mats.push(m.material); ent[id].meshes.push(m); m.userData.layer = id; layerMeshes.push(m); };
  const add = (id, geo, mat) => { const m = new THREE.Mesh(geo, mat); m.castShadow = m.receiveShadow = true; scene3.add(m); reg(id, m); return m; };
  const mat = (o) => new THREE.MeshPhysicalMaterial(Object.assign({ roughness: 0.75, transparent: true }, o));
  const fiber = tex(256, (x, N) => { x.fillStyle = isBam ? '#d8cc98' : '#cdb88a'; x.fillRect(0, 0, N, N); for (let i = 0; i < 160; i++) { x.fillStyle = 'rgba(110,80,40,0.35)'; x.fillRect(i / 160 * N + Math.random() * 2, 0, 1 + Math.random() * 2, N); } }, [6, 2]);

  if (!isBam) {
    const barkT = tex(256, (x, N) => { x.fillStyle = '#7d7262'; x.fillRect(0, 0, N, N); for (let i = 0; i < 2000; i++) { x.fillStyle = Math.random() < 0.5 ? 'rgba(40,32,24,0.18)' : 'rgba(220,210,190,0.12)'; x.fillRect(Math.random() * N, Math.random() * N, 6 + Math.random() * 14, 1 + Math.random() * 2); } for (let i = 0; i < 6; i++) { x.fillStyle = 'rgba(40,30,22,0.5)'; x.fillRect(0, i * N / 6, N, 4); } }, [3, 1]);
    add('kulit', ring(R, 2.42, Hh), [mat({ map: capT }), mat({ map: barkT, roughness: 0.95 })]);
    add('korteks', ring(2.42, 2.2, Hh), [mat({ map: capT }), mat({ map: fiber })]);
    add('parenkim', ring(2.2, 0, Hh), [mat({ map: capT }), mat({ map: fiber, color: C(1, 0.98, 0.92) })]);
  } else {
    const skinT = culmTex(); skinT.repeat.set(4, 1);
    add('kulit', ring(R, 2.32, Hh), [mat({ map: capT }), mat({ map: skinT, roughness: 0.35, clearcoat: 0.4 })]);
    add('dinding', ring(2.32, 1.7, Hh), [mat({ map: capT }), mat({ map: fiber })]);
    /* buku: sekat melintang (diafragma) + tonjolan cincin di luar */
    const nodeY = Hh * 0.55;
    const dia = new THREE.ExtrudeGeometry(sectorShape(1.72, 0), { depth: 0.18, bevelEnabled: false, curveSegments: 48 }); dia.rotateX(-Math.PI / 2); dia.translate(0, nodeY, 0);
    const ridge = ring(R + 0.08, R - 0.02, 0.16, nodeY + 0.01);
    add('buku', mergeGeometries([dia, ridge]), mat({ color: C(0.78, 0.72, 0.45), roughness: 0.6 }));
    add('rongga', ring(1.69, 0, Hh * 0.98, 0.02), mat({ color: C(0.6, 0.85, 1.0), roughness: 0.1, opacity: 0.12, depthWrite: false }));
  }
  /* berkas pembuluh 3D (instanced): batang tipis vertikal di posisi yang sama dengan gambar penampang */
  const bundleM = mat({ color: C(0.42, 0.28, 0.14), roughness: 0.5 });
  const inst = new THREE.InstancedMesh(new THREE.CylinderGeometry(1, 1, 1, 6), bundleM, B.length), m4 = new THREE.Matrix4();
  B.forEach((b, i) => { m4.compose(new THREE.Vector3(b[0], Hh / 2, -b[1]), new THREE.Quaternion(), new THREE.Vector3(b[2], Hh * 0.995, b[2])); inst.setMatrixAt(i, m4); });
  inst.castShadow = true; scene3.add(inst); reg('berkas', inst);

  /* aliran air (biru, naik lewat xilem) dan gula (oranye, turun lewat floem) di sebagian berkas */
  const dot = tex(64, (x, N) => { const g = x.createRadialGradient(32, 32, 2, 32, 32, 30); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.55, 'rgba(255,255,255,0.9)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, N, N); }, null, false);
  const mkFlow = (col, n, up) => { const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3)); const p = new THREE.Points(geo, new THREE.PointsMaterial({ map: dot, color: col, size: 0.14, transparent: true, depthWrite: false })); p.frustumCulled = false; p.userData.noAO = true; scene3.add(p); return { pts: p, n, up, b: Array.from({ length: n }, () => B[Math.floor(r() * B.length)]), u: Array.from({ length: n }, () => r()) }; };
  const waterFlow = mkFlow(new THREE.Color(0.5, 1.6, 2.8), 70, true), sugarFlow = mkFlow(new THREE.Color(2.6, 1.4, 0.3), 45, false);

  const state = { yaw: 1.15, yaw0: 1.15, pitch: 0.55, dist: 14, user: false, sun: 0.65, depth: 0, depthT: 0 };
  for (const id in ent) for (const m of [].concat(...ent[id].mats)) { m.userData.base = m.color.clone(); }
  const k = {}; for (const id in ent) k[id] = 0;
  const target = new THREE.Vector3(0, Hh * 0.45, 0), dimC = new THREE.Color(0.2, 0.22, 0.26);
  const fadeOf = (id, d) => {
    if (id === 'kulit') return 1 - smooth(0.12, 0.32, d);
    if (id === 'korteks') return 1 - smooth(0.4, 0.58, d);
    if (id === 'parenkim' || id === 'dinding') return 1 - 0.85 * smooth(0.75, 0.95, d);
    return 1;
  };
  return {
    scene, camera, layerMeshes, state, waterFlow, sugarFlow,
    depthFor: (id) => ({ kulit: 0, korteks: 0.45, parenkim: 0.6, dinding: 0.5, buku: 0.5, rongga: 0.5, berkas: 1 })[id] ?? 1,
    update(dtm, T, selected, hovered) {
      if (!state.user) state.yaw = state.yaw0 + 0.3 * Math.sin(T * 0.35);
      const cp = Math.cos(state.pitch), sp = Math.sin(state.pitch);
      camera.position.set(target.x + Math.sin(state.yaw) * cp * state.dist, target.y + sp * state.dist, target.z + Math.cos(state.yaw) * cp * state.dist); camera.lookAt(target);
      state.depth += (state.depthT - state.depth) * Math.min(1, dtm * 6); const d = state.depth;
      for (const id in ent) {
        const op = fadeOf(id, d), mats = [].concat(...ent[id].mats);
        const dim = selected && selected !== id && id !== 'berkas' && selected !== 'rongga' ? 0.5 : 0; k[id] += (dim - k[id]) * Math.min(1, dtm * 8);
        const glow = selected === id ? 0.14 : (hovered === id ? 0.07 : 0);
        for (const m of mats) { if (id !== 'rongga') { m.opacity = op; m.depthWrite = op > 0.98; } if (m.userData.base) m.color.copy(m.userData.base).lerp(dimC, k[id] * 0.6); if (m.emissive && m.userData.base) m.emissive.copy(m.userData.base).multiplyScalar(glow); }
        for (const me of ent[id].meshes) me.visible = op > 0.02;
      }
      /* kecepatan aliran mengikuti cahaya matahari (transpirasi) */
      const spd = 0.05 + 0.3 * state.sun;
      for (const F of [waterFlow, sugarFlow]) {
        const pos = F.pts.geometry.attributes.position;
        for (let i = 0; i < F.n; i++) { F.u[i] = (F.u[i] + spd * (F.up ? 1 : 0.6) * dtm) % 1; const y = F.up ? F.u[i] * Hh : (1 - F.u[i]) * Hh, b = F.b[i]; pos.setXYZ(i, b[0], y, -b[1]); }
        pos.needsUpdate = true;
      }
    },
  };
}
