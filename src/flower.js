import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { TAU, clamp, lerp, smooth, rng } from './util.js';
import { terrainU } from './terrain.js';

/* BUNGA SEPATU (Hibiscus rosa-sinensis) dan PENYERBUKAN.
   Adegan bedah dengan slider "Tahap": lebah datang -> serbuk sari menempel di kepala putik ->
   tabung serbuk sari tumbuh -> pembuahan -> bakal buah membesar. */

const C = (r, g, b) => new THREE.Color().setRGB(r, g, b, THREE.SRGBColorSpace);
const V = (x, y, z) => new THREE.Vector3(x, y, z);
function tex(N, draw, srgb = true) { const c = document.createElement('canvas'); c.width = c.height = N; draw(c.getContext('2d'), N); const t = new THREE.CanvasTexture(c); if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t; }

/* kelopak bunga: lebar membulat dengan pangkal merah tua dan urat halus */
const petalShape = (v) => Math.pow(Math.sin(Math.PI * Math.min(1, v * 0.95 + 0.05)), 0.6) * (0.35 + 0.65 * v);
let PT = null;
function petalTex() {
  return PT || (PT = tex(256, (x, N) => {
    x.clearRect(0, 0, N, N);
    const g = x.createLinearGradient(0, N, 0, 0); g.addColorStop(0, '#5a0612'); g.addColorStop(0.22, '#b0101c'); g.addColorStop(1, '#e8283a');
    x.fillStyle = g; x.beginPath();
    for (let i = 0; i <= 40; i++) { const v = i / 40; x.lineTo(N / 2 + petalShape(v) * N * 0.48, N - v * N); }
    for (let i = 40; i >= 0; i--) { const v = i / 40; x.lineTo(N / 2 - petalShape(v) * N * 0.48, N - v * N); }
    x.fill();
    x.strokeStyle = 'rgba(120,0,10,0.35)'; x.lineWidth = 1.5;
    for (let k = -6; k <= 6; k++) { x.beginPath(); x.moveTo(N / 2, N); x.quadraticCurveTo(N / 2 + k * 10, N * 0.5, N / 2 + k * 18, N * 0.05); x.stroke(); }
  }));
}
function petalGeo(len, wid) {
  const p = new THREE.PlaneGeometry(wid, len, 10, 14); p.translate(0, len / 2, 0); const pos = p.attributes.position;
  for (let i = 0; i < pos.count; i++) { const x = pos.getX(i), y = pos.getY(i), v = y / len; pos.setZ(i, -v * v * len * 0.16 + Math.abs(x) * 0.22 - Math.sin(x * 4) * 0.03 * v); }
  p.computeVertexNormals(); return p;
}
/* lebah sederhana: badan bergaris, sayap bening */
export function beeGeo() {
  const body = [], stripes = [];
  const e = (r, p) => new THREE.SphereGeometry(1, 12, 10).scale(...r).translate(...p);
  body.push(e([0.16, 0.13, 0.13], [0.18, 0, 0]), e([0.12, 0.12, 0.12], [0.36, 0.02, 0]));
  for (let i = 0; i < 4; i++) (i % 2 ? body : stripes).push(e([0.07, 0.15 - i * 0.012, 0.15 - i * 0.012], [-0.02 - i * 0.1, -0.01, 0]));
  const wings = [1, -1].map((s) => new THREE.CircleGeometry(0.22, 12).scale(1.2, 0.6, 1).rotateX(-Math.PI / 2).translate(0.1, 0.13, s * 0.2));
  return { yellow: mergeGeometries(body), black: mergeGeometries(stripes), wings: mergeGeometries(wings) };
}

/* ================= SEMAK KEMBANG SEPATU DI DUNIA ================= */
export function buildHibiscusBush(scene, x, y, z) {
  const r = rng(33), g = new THREE.Group();
  const leafM = new THREE.MeshStandardMaterial({ color: C(0.13, 0.33, 0.1), roughness: 0.45, side: THREE.DoubleSide });
  const petalM = new THREE.MeshStandardMaterial({ map: petalTex(), alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.5 });
  const leafG = [], stems = [], petals = [], cols = [];
  for (let i = 0; i < 420; i++) { const a = r() * TAU, rr = Math.sqrt(r()) * 0.9, h = 0.3 + r() * 1.2 * (1 - rr * 0.4); const l = new THREE.CircleGeometry(0.075, 10).scale(1.7, 1, 1).translate(0.06, 0, 0).rotateX(-Math.PI / 2 + (r() - 0.5) * 1.2).rotateY(r() * TAU).translate(Math.cos(a) * rr, h, Math.sin(a) * rr); leafG.push(l); }
  for (let i = 0; i < 7; i++) { const a = r() * TAU; stems.push(new THREE.CylinderGeometry(0.015, 0.025, 1.4, 5).translate(0, 0.7, 0).rotateZ((r() - 0.5) * 0.5).rotateY(a).translate(Math.cos(a) * 0.1, 0, Math.sin(a) * 0.1)); }
  const Y = V(0, 1, 0);
  for (let f = 0; f < 9; f++) {
    const a = r() * TAU, rr = 0.5 + r() * 0.45, h = 0.6 + r() * 0.8, c = V(Math.cos(a) * rr, h, Math.sin(a) * rr);
    const dir = c.clone().setY(0).normalize().add(V(0, 0.5, 0)).normalize(), M = new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(Y, dir));
    for (let k = 0; k < 5; k++) { const p = petalGeo(0.16, 0.14); p.rotateX(-0.9); p.rotateY(k / 5 * TAU); p.applyMatrix4(M); p.translate(c.x, c.y, c.z); petals.push(p); }
    cols.push(new THREE.CylinderGeometry(0.008, 0.008, 0.2, 4).translate(0, 0.1, 0).applyMatrix4(M).translate(c.x, c.y, c.z));
  }
  const lm = new THREE.Mesh(mergeGeometries(leafG), leafM), sm = new THREE.Mesh(mergeGeometries(stems), new THREE.MeshStandardMaterial({ color: C(0.35, 0.3, 0.2) })), pm = new THREE.Mesh(mergeGeometries(petals), petalM), cm = new THREE.Mesh(mergeGeometries(cols), new THREE.MeshStandardMaterial({ color: C(0.95, 0.75, 0.3) }));
  lm.castShadow = true; pm.castShadow = true; lm.userData.noAO = true; pm.userData.noAO = true;
  g.add(lm, sm, pm, cm);
  /* dua lebah yang berputar di sekitar semak */
  const B = beeGeo(), bees = [];
  const ym = new THREE.MeshStandardMaterial({ color: C(0.95, 0.72, 0.1), roughness: 0.6 }), bm = new THREE.MeshStandardMaterial({ color: C(0.08, 0.06, 0.04) }), wm = new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.45, side: THREE.DoubleSide });
  for (let i = 0; i < 2; i++) { const b = new THREE.Group(); b.add(new THREE.Mesh(B.yellow, ym), new THREE.Mesh(B.black, bm), new THREE.Mesh(B.wings, wm)); b.scale.setScalar(0.35); g.add(b); bees.push(b); }
  g.position.set(x, y, z); scene.add(g);
  return { group: g, update(T) { bees.forEach((b, i) => { const a = T * (0.7 + i * 0.3) + i * 3; b.position.set(Math.cos(a) * 0.9, 1.1 + Math.sin(T * 2 + i) * 0.25, Math.sin(a * 1.3) * 0.9); b.rotation.y = -a - Math.PI / 2; b.children[2].scale.y = 1 + Math.sin(T * 60) * 0.5; }); } };
}

/* ================= ADEGAN BEDAH BUNGA ================= */
export function buildFlowerDissect(renderer) {
  const scene = new THREE.Scene();
  { const c = document.createElement('canvas'); c.width = c.height = 512; const x = c.getContext('2d'); const g = x.createRadialGradient(256, 220, 20, 256, 256, 420); g.addColorStop(0, '#3e4a2a'); g.addColorStop(0.55, '#161c0e'); g.addColorStop(1, '#05090e'); x.fillStyle = g; x.fillRect(0, 0, 512, 512); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; scene.background = t; }
  scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture; scene.environmentIntensity = 0.55;
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 120);
  const key = new THREE.DirectionalLight(0xfff1dc, 2.4); key.position.set(4, 9, 6); key.castShadow = true; key.shadow.mapSize.set(1024, 1024); const sc = key.shadow.camera; sc.left = -6; sc.right = 6; sc.top = 6; sc.bottom = -6; sc.near = 1; sc.far = 30; scene.add(key);
  { const rim = new THREE.DirectionalLight(0x9fd6ff, 1.0); rim.position.set(-6, 3, -5); scene.add(rim); }
  const layerMeshes = [], ent = {};
  const reg = (id, m) => { (ent[id] || (ent[id] = { mats: [], meshes: [] })); if (!ent[id].mats.includes(m.material)) ent[id].mats.push(m.material); ent[id].meshes.push(m); m.userData.layer = id; layerMeshes.push(m); };
  const add = (id, geo, mat, parent = scene) => { const m = new THREE.Mesh(geo, mat); m.castShadow = m.receiveShadow = true; parent.add(m); reg(id, m); return m; };
  const pm = (o) => new THREE.MeshPhysicalMaterial(Object.assign({ roughness: 0.5, transparent: true }, o));
  const r = rng(5), BASE = V(0, 0.6, 0);

  /* tangkai dan daun */
  scene.add(Object.assign(new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 1.6, 8).translate(0, -0.2, 0), new THREE.MeshStandardMaterial({ color: C(0.3, 0.45, 0.2) })), { castShadow: true }));
  /* bakal buah (dengan bakal biji di dalamnya) */
  const ovary = add('bakal', new THREE.SphereGeometry(0.28, 20, 16).scale(1, 1.15, 1).translate(0, 0.72, 0), pm({ color: C(0.55, 0.75, 0.35), opacity: 0.55, depthWrite: false, clearcoat: 0.5 }));
  const ovules = []; for (let i = 0; i < 10; i++) { const a = i / 10 * TAU; ovules.push(new THREE.SphereGeometry(0.05, 10, 8).translate(Math.cos(a) * 0.13, 0.62 + (i % 2) * 0.16, Math.sin(a) * 0.13)); }
  const ovuleM = pm({ color: C(0.95, 0.95, 0.85), roughness: 0.3, emissive: C(0, 0, 0) });
  const ovm = add('bakal', mergeGeometries(ovules), ovuleM);
  /* kelopak (hijau) dan kelopak tambahan */
  const sep = [], epi = [];
  for (let k = 0; k < 5; k++) { const s = new THREE.ConeGeometry(0.16, 0.7, 4).scale(1, 1, 0.3).translate(0, 0.35, 0).rotateX(-0.35).rotateY(k / 5 * TAU + 0.3).translate(0, 0.62, 0); sep.push(s); }
  for (let k = 0; k < 7; k++) epi.push(new THREE.ConeGeometry(0.03, 0.4, 3).translate(0, 0.2, 0).rotateX(-0.9).rotateY(k / 7 * TAU).translate(0, 0.55, 0));
  add('kelopak', mergeGeometries([...sep, ...epi]), pm({ color: C(0.32, 0.55, 0.22), roughness: 0.6 }));
  /* mahkota: 5 helai merah */
  const petM = new THREE.MeshPhysicalMaterial({ map: petalTex(), alphaTest: 0.05, side: THREE.DoubleSide, roughness: 0.55, sheen: 0.35, sheenColor: C(0.6, 0.05, 0.1), transparent: true });
  const petals = [];
  for (let k = 0; k < 5; k++) { const p = petalGeo(2.4, 2.0); p.rotateX(-0.78); p.rotateZ(0.12); p.rotateY(k / 5 * TAU); p.translate(0, 0.95, 0); petals.push(p); }
  const petalMesh = add('mahkota', mergeGeometries(petals), petM);
  /* nektar di pangkal mahkota */
  const nec = []; for (let k = 0; k < 5; k++) { const a = k / 5 * TAU + 0.6; nec.push(new THREE.SphereGeometry(0.06, 10, 8).translate(Math.cos(a) * 0.32, 1.02, Math.sin(a) * 0.32)); }
  add('nektar', mergeGeometries(nec), pm({ color: C(1, 0.85, 0.5), roughness: 0.05, clearcoat: 1, transmission: 0.6, opacity: 0.8 }));
  /* tabung benang sari dengan kepala sari, putik keluar dari ujungnya */
  const colTop = 3.0, col = new THREE.CylinderGeometry(0.06, 0.09, colTop - 0.9, 10).translate(0, 0.9 + (colTop - 0.9) / 2, 0).rotateZ(0.12);
  const anth = []; const tip = (h) => V(Math.sin(0.12) * -(h - 0.9), h, 0);
  for (let i = 0; i < 46; i++) { const h = 2.0 + r() * 0.95, a = r() * TAU, c = tip(h), f = new THREE.CylinderGeometry(0.008, 0.008, 0.18, 4).translate(0, 0.09, 0).rotateZ(Math.PI / 2 - 0.4).rotateY(a).translate(c.x, c.y, c.z); anth.push(f, new THREE.SphereGeometry(0.045, 8, 6).scale(1, 0.7, 1).translate(c.x + Math.cos(a) * 0.17, c.y + 0.07, c.z - Math.sin(a) * 0.17)); }
  const colM = pm({ color: C(0.86, 0.2, 0.28), roughness: 0.5 }); const colMesh = add('benangsari', col, colM);
  add('benangsari', mergeGeometries(anth), pm({ color: C(0.98, 0.75, 0.25), roughness: 0.5 }));
  const styleTop = tip(colTop + 0.35);
  const sty = [new THREE.CylinderGeometry(0.025, 0.03, 0.4, 6).translate(0, colTop + 0.2, 0).rotateZ(0.12), new THREE.CylinderGeometry(0.025, 0.025, 2.2, 6).translate(0, 1.95, 0).rotateZ(0.12)];
  const stig = []; const stigPts = [];
  for (let k = 0; k < 5; k++) { const a = k / 5 * TAU, p = styleTop.clone().add(V(Math.cos(a) * 0.18, 0.12, Math.sin(a) * 0.18)); stigPts.push(p); stig.push(new THREE.CylinderGeometry(0.012, 0.012, 0.22, 4).translate(0, 0.11, 0).rotateZ(Math.PI / 2 - 0.6).rotateY(-a).translate(styleTop.x, styleTop.y, styleTop.z), new THREE.SphereGeometry(0.065, 10, 8).translate(p.x, p.y, p.z)); }
  add('putik', mergeGeometries([...sty, ...stig]), pm({ color: C(0.85, 0.12, 0.18), roughness: 0.6 }));
  /* tabung serbuk sari: tumbuh dari kepala putik turun ke bakal biji */
  const tubes = []; const tubeM = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 1.4, 0.5) });
  for (let k = 0; k < 4; k++) { const p = stigPts[k], o = ovules[k * 2].boundingSphere || (ovules[k * 2].computeBoundingSphere(), ovules[k * 2].boundingSphere); const off = V(Math.cos(k * 1.6) * 0.045, 0, Math.sin(k * 1.6) * 0.045); const curve = new THREE.CatmullRomCurve3([p, styleTop.clone().add(V(0, -0.2, 0)).add(off), tip(2.4).add(off), tip(1.3).add(off), V(0, 1.0, 0).add(off.clone().multiplyScalar(2)), o.center.clone()]); const tg = new THREE.TubeGeometry(curve, 80, 0.018, 5); const m = new THREE.Mesh(tg, tubeM); m.userData.count = tg.index.count; tg.setDrawRange(0, 0); scene.add(m); tubes.push(m); }

  /* lebah penyerbuk */
  const B = beeGeo(), bee = new THREE.Group();
  const ym = pm({ color: C(0.95, 0.72, 0.1), roughness: 0.6 }), bm = pm({ color: C(0.08, 0.06, 0.04) }), wm = new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.45, side: THREE.DoubleSide });
  const by = add('lebah', B.yellow, ym, bee); add('lebah', B.black, bm, bee); const bw = new THREE.Mesh(B.wings, wm); bee.add(bw);
  bee.scale.setScalar(1.3); scene.add(bee);
  const beePath = new THREE.CatmullRomCurve3([V(4, 4.5, 2.5), V(2.2, 3.6, 2.4), V(0.9, 3.3, 0.9), tip(2.6).add(V(0.25, 0.1, 0.2)), styleTop.clone().add(V(0.15, 0.25, 0.1))]);

  /* serbuk sari: dari kepala sari ke lebah ke kepala putik */
  const dot = tex(64, (x, N) => { const g = x.createRadialGradient(32, 32, 2, 32, 32, 30); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.55, 'rgba(255,255,255,0.9)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, N, N); }, false);
  const NP = 40, pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(NP * 3), 3));
  const pollen = new THREE.Points(pg, new THREE.PointsMaterial({ map: dot, color: new THREE.Color(2.4, 2.0, 0.4), size: 0.08, transparent: true, depthWrite: false })); pollen.frustumCulled = false; scene.add(pollen);
  const pSeed = Array.from({ length: NP }, () => [r(), r(), r(), r()]);

  const state = { yaw: 0.5, yaw0: 0.5, pitch: 0.35, dist: 11, user: false, sun: 0.5, depth: 0, depthT: 0 };
  for (const id in ent) for (const m of ent[id].mats) { m.userData.base = m.color.clone(); }
  const dimC = new THREE.Color(0.25, 0.28, 0.3), kk = {}; for (const id in ent) kk[id] = 0;
  const target = V(0, 2.0, 0), tmp = V(0, 0, 0);
  return {
    scene, camera, layerMeshes, state, waterFlow: { pts: {} }, sugarFlow: { pts: {} }, labels: { depth: 'Tahap', sun: null },
    depthFor: (id) => ({ lebah: 0.25, benangsari: 0.35, putik: 0.55, bakal: 0.9, nektar: 0.25 })[id] ?? state.depthT,
    stageText(s) {
      if (s < 0.2) return 'Tahap 1: bunga mekar. Warna merah mencolok dan nektar manis menarik hewan penyerbuk.';
      if (s < 0.45) return 'Tahap 2: lebah hinggap untuk mengisap nektar. Tubuhnya yang berbulu tertempel serbuk sari dari kepala sari.';
      if (s < 0.65) return 'Tahap 3: penyerbukan. Serbuk sari menempel di kepala putik (bisa dari bunga lain yang dikunjungi lebah).';
      if (s < 0.85) return 'Tahap 4: serbuk sari berkecambah. Tabung serbuk sari tumbuh menembus tangkai putik menuju bakal biji.';
      return 'Tahap 5: pembuahan. Sel kelamin jantan membuahi sel telur di bakal biji. Mahkota layu, bakal buah tumbuh menjadi buah, bakal biji menjadi biji.';
    },
    update(dt, T, selected, hovered) {
      if (!state.user) state.yaw = state.yaw0 + 0.3 * Math.sin(T * 0.3);
      const cp = Math.cos(state.pitch), sp = Math.sin(state.pitch);
      camera.position.set(target.x + Math.sin(state.yaw) * cp * state.dist, target.y + sp * state.dist, target.z + Math.cos(state.yaw) * cp * state.dist); camera.lookAt(target);
      state.depth += (state.depthT - state.depth) * Math.min(1, dt * 3); const s = state.depth;
      /* lebah: terbang mendekat (0..0.4), hinggap di kepala sari, lalu ke kepala putik, lalu pergi */
      const bu = s < 0.4 ? smooth(0.0, 0.4, s) * 0.72 : s < 0.62 ? 0.72 + smooth(0.4, 0.62, s) * 0.28 : 1 - smooth(0.62, 0.85, s) * 1.0;
      beePath.getPoint(clamp(bu, 0, 1), tmp); bee.position.copy(tmp).add(V(Math.sin(T * 3) * 0.04, Math.sin(T * 5) * 0.04, 0));
      const look = beePath.getTangent(clamp(bu, 0.01, 0.99)); bee.rotation.y = Math.atan2(-look.z, look.x) + (s > 0.62 ? Math.PI : 0);
      bw.scale.y = 1 + Math.sin(T * 70) * 0.6;
      /* serbuk sari menempel di lebah lalu pindah ke kepala putik */
      const pos = pg.attributes.position, onBee = smooth(0.25, 0.4, s), onStig = smooth(0.5, 0.62, s);
      for (let i = 0; i < NP; i++) { const q = pSeed[i], st = stigPts[i % 5];
        const anther = tip(2.1 + q[0] * 0.9).add(V(Math.cos(q[1] * TAU) * 0.18, 0.06, Math.sin(q[1] * TAU) * 0.18));
        const onB = bee.position.clone().add(V((q[2] - 0.5) * 0.35, -0.08 + q[3] * 0.1, (q[0] - 0.5) * 0.3));
        const onS = st.clone().add(V((q[2] - 0.5) * 0.1, 0.05, (q[3] - 0.5) * 0.1));
        const p = anther.lerp(onB, onBee).lerp(onS, i < NP * 0.6 ? onStig : 0); pos.setXYZ(i, p.x, p.y, p.z); }
      pos.needsUpdate = true;
      /* tabung serbuk sari tumbuh, lalu pembuahan */
      const grow = smooth(0.66, 0.86, s); tubes.forEach((m, i) => m.geometry.setDrawRange(0, Math.floor(m.userData.count * clamp(grow * 1.1 - i * 0.03, 0, 1) / 3) * 3));
      const fert = smooth(0.86, 1.0, s); ovuleM.emissive.setRGB(fert * 0.9, fert * 0.7, fert * 0.2);
      ovary.scale.setScalar(1 + fert * 0.7); ovm.scale.setScalar(1 + fert * 0.5); ovary.position.y = -fert * 0.45; ovm.position.y = -fert * 0.3;
      /* mahkota memudar supaya bagian dalam terlihat, lalu layu */
      const petalOp = 1 - 0.55 * smooth(0.55, 0.75, s) - 0.1 * fert;
      colM.opacity = 1 - 0.65 * smooth(0.6, 0.72, s); colM.depthWrite = colM.opacity > 0.98; petM.opacity = petalOp; petM.depthWrite = petalOp > 0.98;
      petalMesh.scale.set(1, 1 - fert * 0.35, 1); petalMesh.rotation.x = fert * 0.25;
      for (const id in ent) { const dim = selected && selected !== id ? 1 : 0; kk[id] += (dim - kk[id]) * Math.min(1, dt * 8); const glow = selected === id ? 0.14 : (hovered === id ? 0.07 : 0);
        for (const m of ent[id].mats) { if (!m.userData.base) continue; m.color.copy(m.userData.base).lerp(dimC, kk[id] * 0.45); if (m.emissive && m !== ovuleM) m.emissive.copy(m.userData.base).multiplyScalar(glow); } }
    },
  };
}
