import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { TAU, clamp, lerp, smooth, rng } from './util.js';
import dirtUrl from '../node_modules/@dgreenheck/ez-tree/src/app/public/dirt_color.jpg';
import dirtNUrl from '../node_modules/@dgreenheck/ez-tree/src/app/public/dirt_normal.jpg';

/* Kucing prosedural (gaya semi-realistis). Model menghadap +x, tanah di y = -1.6, satuan kira-kira 0,09 m.
   Dipakai dua kali: (1) kucing berkeliaran di dunia, (2) adegan bedah berlapis:
   kulit & bulu -> otot -> rangka -> organ dalam. Anatomi disederhanakan untuk pelajar SMP-SMA;
   perlu divalidasi dokter hewan sebelum dipakai di sekolah. */

const V3 = (a) => new THREE.Vector3(a[0], a[1], a[2]);
const merge = (a) => mergeGeometries(a, false);
let SH = 1; /* faktor penyusutan jari-jari (lapisan otot dibuat lebih tipis di tempat yang sama) */
const C = (r, g, b) => new THREE.Color().setRGB(r, g, b, THREE.SRGBColorSpace);
function ell(r, p, seg = 22, rot) {
  const g = new THREE.SphereGeometry(1, seg, Math.max(8, Math.round(seg * 0.7)));
  g.scale(r[0] * SH, r[1] * SH, r[2] * SH);
  if (rot) { g.rotateX(rot[0]); g.rotateY(rot[1]); g.rotateZ(rot[2]); }
  g.translate(p[0], p[1], p[2]); return g;
}
function limb(a, b, r1, r2, seg = 10) {
  const s0 = SH; r1 *= s0; r2 *= s0; SH = 1;
  const A = V3(a), B = V3(b), d = B.clone().sub(A), L = d.length();
  const c = new THREE.CylinderGeometry(r2, r1, L, seg, 1, true);
  c.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.clone().normalize()));
  c.translate((A.x + B.x) / 2, (A.y + B.y) / 2, (A.z + B.z) / 2);
  const out = merge([c, ell([r1, r1, r1], a, seg), ell([r2, r2, r2], b, seg)]); SH = s0; return out;
}
function tube(pts, r, seg = 24, radial = 8) { return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map(V3)), seg, r * SH, radial, false); }
const rel = (g, P) => { g.translate(-P[0], -P[1], -P[2]); return g; };

/* ---------- bagian kulit/otot (dipakai juga untuk kucing dunia) ---------- */
const HEAD_P = [3.0, 0.85, 0], TAIL_P = [-2.6, 0.2, 0];
const LEG_P = [[1.75, -0.3, 0.58], [1.75, -0.3, -0.58], [-1.7, -0.1, 0.65], [-1.7, -0.1, -0.65]];
function bodyParts(sh = 1) {
  SH = sh;
  const body = merge([ell([2.55, 1.12, 0.95], [0, 0, 0], 28), ell([1.3, 1.15, 0.95], [1.35, -0.05, 0]), ell([1.2, 1.15, 1.02], [-1.55, -0.05, 0]), ell([2.1, 0.9, 0.9], [0, -0.3, 0]), limb([2.2, 0.3, 0], [3.0, 0.85, 0], 0.78, 0.62)]);
  const ears = [1, -1].map((s) => { const g = new THREE.ConeGeometry(0.36 * SH, 0.7 * SH, 4, 1); g.rotateY(Math.PI / 4); g.rotateX(s * 0.28); g.translate(3.4, 1.85, s * 0.52); return g; });
  const head = rel(merge([ell([0.85, 0.78, 0.82], [3.55, 1.1, 0]), ell([0.42, 0.3, 0.42], [4.3, 0.88, 0]), ell([0.45, 0.38, 0.7], [3.8, 0.85, 0]), ...ears]), HEAD_P);
  const tail = rel(merge([tube([[-2.6, 0.2, 0], [-3.4, 0.45, 0.05], [-4.1, 1.1, 0.1], [-4.4, 2.0, 0], [-4.3, 2.5, -0.1]], 0.2, 28, 8), ell([0.2, 0.2, 0.2], [-4.3, 2.5, -0.1], 10)]), TAIL_P);
  const legs = LEG_P.map((p, i) => i < 2
    ? merge([limb([0, 0, 0], [0.1, -0.7, 0], 0.36, 0.27), limb([0.1, -0.7, 0], [0.05, -1.28, 0], 0.25, 0.2), ell([0.34, 0.17, 0.26], [0.2, -1.34, 0], 14)])
    : merge([ell([0.6, 0.85, 0.52], [0, -0.45, 0]), limb([0, -0.8, 0], [-0.2, -1.28, 0], 0.3, 0.2), ell([0.36, 0.17, 0.27], [-0.05, -1.42, 0], 14)]));
  SH = 1;
  return { body, head, tail, legs };
}
function scaledClone(g, k) { const c = g.clone(); c.scale(k, k, k); return c; }

/* ---------- tekstur ---------- */
function canvasTex(N, draw, repeat) {
  const c = document.createElement('canvas'); c.width = c.height = N; draw(c.getContext('2d'), N);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 4;
  if (repeat) t.repeat.set(repeat[0], repeat[1]); return t;
}
function furTexture() {
  return canvasTex(256, (x, N) => {
    const r = rng(11); x.fillStyle = '#b4793c'; x.fillRect(0, 0, N, N);
    for (let i = 0; i < 18; i++) { const px = (i / 18) * N + r() * 8, w = 5 + r() * 9; x.fillStyle = 'rgba(48,28,14,0.55)'; x.beginPath(); x.moveTo(px, 0);
      for (let y = 0; y <= N; y += 16) x.lineTo(px + Math.sin(y * 0.06 + i) * 6, y); for (let y = N; y >= 0; y -= 16) x.lineTo(px + w + Math.sin(y * 0.06 + i) * 6, y); x.fill(); }
    for (let i = 0; i < 5200; i++) { x.strokeStyle = r() < 0.5 ? 'rgba(255,220,170,0.10)' : 'rgba(40,20,8,0.10)'; x.lineWidth = 1; const px = r() * N, py = r() * N; x.beginPath(); x.moveTo(px, py); x.lineTo(px + (r() - 0.5) * 3, py + 5 + r() * 7); x.stroke(); }
  }, [2, 2]);
}
function muscleTexture() {
  return canvasTex(256, (x, N) => {
    const r = rng(23); x.fillStyle = '#8a2b22'; x.fillRect(0, 0, N, N);
    for (let i = 0; i < 900; i++) { x.strokeStyle = r() < 0.5 ? 'rgba(196,82,64,0.35)' : 'rgba(70,16,12,0.35)'; x.lineWidth = 1 + r() * 2.5; const px = r() * N; x.beginPath(); x.moveTo(px, 0); x.bezierCurveTo(px + 6, N * 0.3, px - 6, N * 0.7, px + (r() - 0.5) * 8, N); x.stroke(); }
    for (let i = 0; i < 14; i++) { x.strokeStyle = 'rgba(240,215,200,0.22)'; x.lineWidth = 1.2; const px = r() * N; x.beginPath(); x.moveTo(px, 0); x.lineTo(px + (r() - 0.5) * 20, N); x.stroke(); }
  }, [3, 2]);
}
function dotTex() {
  const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d');
  const g = x.createRadialGradient(32, 32, 2, 32, 32, 30); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.55, 'rgba(255,255,255,0.9)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.beginPath(); x.arc(32, 32, 30, 0, TAU); x.fill(); return new THREE.CanvasTexture(c);
}
function furMat() {
  const map = furTexture();
  return new THREE.MeshPhysicalMaterial({ map, bumpMap: map, bumpScale: 0.6, roughness: 0.95, metalness: 0, sheen: 1, sheenRoughness: 0.55, sheenColor: new THREE.Color(1, 0.85, 0.62) });
}

/* rakit satu set bagian (kulit atau otot) menjadi grup; k = skala (otot 0,9) */
function assemble(parts, k, mat, layer) {
  const root = new THREE.Group(), meshes = [];
  const mk = (geo, piv) => { const m = new THREE.Mesh(scaledClone(geo, k), mat); m.castShadow = m.receiveShadow = true; m.userData.layer = layer; const g = new THREE.Group(); g.position.set(piv[0] * k, piv[1] * k, piv[2] * k); g.add(m); meshes.push(m); root.add(g); return g; };
  const body = new THREE.Mesh(scaledClone(parts.body, k), mat); body.castShadow = body.receiveShadow = true; body.userData.layer = layer; root.add(body); meshes.push(body);
  const head = mk(parts.head, HEAD_P), tail = mk(parts.tail, TAIL_P), legs = parts.legs.map((g, i) => mk(g, LEG_P[i]));
  return { root, meshes, head, tail, legs };
}
/* mata, hidung, kumis (hanya kulit) */
function faceExtras(headGroup) {
  const mats = [];
  const eyeM = new THREE.MeshStandardMaterial({ color: C(0.62, 0.8, 0.25), roughness: 0.15, transparent: true });
  const pupM = new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 0.3, transparent: true });
  const noseM = new THREE.MeshStandardMaterial({ color: 0xd98a8a, roughness: 0.5, transparent: true });
  const wM = new THREE.LineBasicMaterial({ color: 0xf5efe6, transparent: true, opacity: 0.9 });
  mats.push(eyeM, pupM, noseM, wM);
  for (const s of [1, -1]) {
    const e = new THREE.Mesh(new THREE.SphereGeometry(0.17, 16, 12), eyeM); e.position.set(4.0 - HEAD_P[0], 1.25 - HEAD_P[1], s * 0.4); headGroup.add(e);
    const p = new THREE.Mesh(ell([0.04, 0.14, 0.05], [0, 0, 0], 10), pupM); p.position.set(4.14 - HEAD_P[0], 1.25 - HEAD_P[1], s * 0.4); p.userData.noPick = true; headGroup.add(p);
    const pts = [];
    for (let i = 0; i < 3; i++) { const a = (i - 1) * 0.22; pts.push(V3([4.25 - HEAD_P[0], 0.9 - HEAD_P[1], s * 0.25]), V3([4.45 - HEAD_P[0], 0.92 - HEAD_P[1] + a, s * 1.2])); }
    const ls = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(pts), wM); headGroup.add(ls);
  }
  const n = new THREE.Mesh(ell([0.09, 0.07, 0.12], [4.7, 0.98, 0], 10), noseM); n.position.set(-HEAD_P[0], -HEAD_P[1], 0); headGroup.add(n);
  return mats;
}

/* ================= KUCING DI DUNIA ================= */
export function buildWorldCat(scene, env, home) {
  const { heightAt, WATER } = env, S = 0.1;
  const parts = bodyParts(), mat = furMat();
  const A = assemble(parts, 1, mat, 'kulit'); faceExtras(A.head);
  A.root.scale.setScalar(S);
  const wrap = new THREE.Group(); wrap.add(A.root); scene.add(wrap);
  const hit = new THREE.Mesh(new THREE.SphereGeometry(0.75, 8, 6), new THREE.MeshBasicMaterial({ visible: false }));
  hit.position.set(home.x, 0.4, home.z); scene.add(hit);
  const r = rng(404), cat = { group: wrap, hit, x: home.x, z: home.z, y: heightAt(home.x, home.z), yaw: 0 };
  let st = 'idle', timer = 2, tx = home.x, tz = home.z, phase = 0, amp = 0;
  cat.update = (dt, T, P) => {
    const dxp = P.x - cat.x, dzp = P.z - cat.z, dp = Math.hypot(dxp, dzp);
    let speed = 0;
    if (st === 'idle') {
      timer -= dt;
      if (dp < 3) { const want = Math.atan2(-dzp, dxp); let d = want - cat.yaw; d = Math.atan2(Math.sin(d), Math.cos(d)); cat.yaw += d * Math.min(1, dt * 3); }
      if (timer <= 0 && dp > 1.6) {
        for (let k = 0; k < 10; k++) { const a = r() * TAU, rr = 2 + r() * 6, nx = home.x + Math.cos(a) * rr, nz = home.z + Math.sin(a) * rr; if (heightAt(nx, nz) > WATER + 0.5) { tx = nx; tz = nz; st = 'walk'; break; } }
        timer = 3 + r() * 5;
      }
    } else {
      const dx = tx - cat.x, dz = tz - cat.z, d = Math.hypot(dx, dz);
      if (d < 0.25 || dp < 1.0) { st = 'idle'; timer = 3 + r() * 6; }
      else {
        const want = Math.atan2(-dz, dx); let da = want - cat.yaw; da = Math.atan2(Math.sin(da), Math.cos(da)); cat.yaw += da * Math.min(1, dt * 4);
        speed = 0.9; cat.x += (dx / d) * speed * dt; cat.z += (dz / d) * speed * dt;
      }
    }
    amp += ((speed > 0 ? 1 : 0) - amp) * Math.min(1, dt * 6); phase += speed * dt * 5.5;
    const sw = Math.sin(phase) * 0.6 * amp;
    A.legs[0].rotation.z = sw; A.legs[3].rotation.z = sw; A.legs[1].rotation.z = -sw; A.legs[2].rotation.z = -sw;
    A.tail.rotation.y = Math.sin(T * 1.4) * 0.28; A.head.rotation.z = Math.sin(T * 0.8) * 0.05 - amp * 0.05;
    cat.y += (heightAt(cat.x, cat.z) - cat.y) * Math.min(1, dt * 10);
    wrap.position.set(cat.x, cat.y + 1.6 * S + Math.abs(Math.sin(phase)) * 0.012 * amp, cat.z); wrap.rotation.y = cat.yaw;
    hit.position.set(cat.x, cat.y + 0.35, cat.z);
  };
  return cat;
}

/* ================= BEDAH ================= */
export function vitals(act) { return { bpm: Math.round(lerp(140, 220, act)), rr: Math.round(lerp(24, 48, act)) }; }

function boneGeo() {
  const g = [];
  g.push(ell([0.7, 0.58, 0.6], [3.55, 1.1, 0], 20), limb([3.9, 1.0, 0], [4.3, 0.88, 0], 0.3, 0.2), limb([3.7, 0.66, 0], [4.25, 0.68, 0], 0.16, 0.12));
  const spine = new THREE.CatmullRomCurve3([[3.0, 0.85, 0], [2.0, 0.78, 0], [0, 0.7, 0], [-1.8, 0.55, 0], [-2.6, 0.25, 0]].map(V3));
  for (let i = 0; i < 26; i++) { const p = spine.getPoint(i / 25); g.push(ell([0.16, 0.13, 0.13], [p.x, p.y, p.z], 8)); }
  const tail = new THREE.CatmullRomCurve3([[-2.6, 0.2, 0], [-3.4, 0.45, 0.05], [-4.1, 1.1, 0.1], [-4.4, 2.0, 0], [-4.3, 2.5, -0.1]].map(V3));
  for (let i = 1; i < 19; i++) { const p = tail.getPoint(i / 19), s = 0.14 - i * 0.004; g.push(ell([s, s, s], [p.x, p.y, p.z], 7)); }
  for (let i = 0; i < 13; i++) for (const s of [1, -1]) {
    const x = 2.1 - i * 0.2, f = 1 - 0.38 * Math.abs(i - 4) / 9;
    const sp = new THREE.CatmullRomCurve3([V3([x, 0.62, s * 0.15]), V3([x, 0.35 * f, s * 0.75 * f]), V3([x, -0.25 * f, s * 0.85 * f]), V3([x, -0.75 * f, s * 0.55 * f]), V3([x, -0.95 * f, s * 0.1])]);
    g.push(new THREE.TubeGeometry(sp, 10, 0.045, 5, false));
  }
  g.push(limb([2.0, -0.95, 0], [0.1, -0.95, 0], 0.07, 0.07));
  for (const s of [1, -1]) {
    g.push(ell([0.12, 0.5, 0.26], [1.95, 0.3, s * 0.4], 10, [0, 0, 0.3]));
    const [sh, el, wr, to] = [[1.75, -0.3, s * 0.58], [1.85, -0.95, s * 0.55], [1.8, -1.4, s * 0.5], [2.0, -1.62, s * 0.48]];
    g.push(limb(sh, el, 0.11, 0.09), limb(el, wr, 0.09, 0.07), limb(wr, to, 0.07, 0.05), ell([0.15, 0.15, 0.15], sh, 8), ell([0.12, 0.12, 0.12], el, 8));
    const [hp, kn, hk, ht] = [[-1.7, -0.1, s * 0.65], [-1.45, -0.8, s * 0.62], [-1.85, -1.3, s * 0.58], [-1.7, -1.62, s * 0.56]];
    g.push(limb(hp, kn, 0.14, 0.1), limb(kn, hk, 0.1, 0.07), limb(hk, ht, 0.07, 0.05), ell([0.17, 0.17, 0.17], hp, 8), ell([0.12, 0.12, 0.12], kn, 8));
  }
  g.push(ell([0.28, 0.5, 0.75], [-1.85, 0.3, 0], 12, [0, 0, 0.2]));
  return merge(g);
}

export function buildCatDissect(renderer, IDS) {
  const scene = new THREE.Scene();
  { const c = document.createElement('canvas'); c.width = c.height = 512; const x = c.getContext('2d');
    const g = x.createRadialGradient(256, 230, 20, 256, 256, 420); g.addColorStop(0, '#2a3f52'); g.addColorStop(0.55, '#121f2b'); g.addColorStop(1, '#05090e');
    x.fillStyle = g; x.fillRect(0, 0, 512, 512); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; scene.background = t; }
  const pm = new THREE.PMREMGenerator(renderer);
  scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture; scene.environmentIntensity = 0.5;
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 120);
  const key = new THREE.DirectionalLight(0xfff1dc, 2.6); key.position.set(4, 9, 8); key.castShadow = true; key.shadow.mapSize.set(1024, 1024);
  const sc = key.shadow.camera; sc.left = -7; sc.right = 7; sc.top = 7; sc.bottom = -7; sc.near = 1; sc.far = 30; key.shadow.bias = -0.0005; key.shadow.normalBias = 0.03; scene.add(key);
  const rim = new THREE.DirectionalLight(0x8fd0ff, 1.2); rim.position.set(-6, 3, -5); scene.add(rim);

  /* alas */
  const dt = new THREE.TextureLoader().load(dirtUrl), dn = new THREE.TextureLoader().load(dirtNUrl);
  for (const t of [dt, dn]) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(2.4, 2.4); }
  dt.colorSpace = THREE.SRGBColorSpace;
  const ped = new THREE.Mesh(new THREE.CylinderGeometry(5.4, 5.6, 0.3, 64), new THREE.MeshStandardMaterial({ map: dt, normalMap: dn, color: new THREE.Color(0.7, 0.66, 0.62), roughness: 1 }));
  ped.position.y = -1.75; ped.receiveShadow = true; ped.userData.noAO = true; scene.add(ped);

  const parts = bodyParts(), layerMeshes = [], ent = {};
  const reg = (id, m) => { (ent[id] || (ent[id] = { mats: [], meshes: [] })); if (!ent[id].mats.includes(m.material)) ent[id].mats.push(m.material); ent[id].meshes.push(m); m.userData.layer = id; layerMeshes.push(m); };

  /* lapisan 1: kulit & bulu */
  const skinA = assemble(parts, 1, furMat(), 'kulit'); const faceMats = faceExtras(skinA.head);
  skinA.root.userData.fade = 'kulit'; scene.add(skinA.root); skinA.meshes.forEach((m) => reg('kulit', m));
  /* lapisan 2: otot */
  const mm = new THREE.MeshPhysicalMaterial({ map: muscleTexture(), roughness: 0.5, clearcoat: 0.35, clearcoatRoughness: 0.4 });
  const musA = assemble(bodyParts(0.84), 1, mm, 'otot'); scene.add(musA.root); musA.meshes.forEach((m) => reg('otot', m));
  /* lapisan 3: rangka */
  const bm = new THREE.MeshStandardMaterial({ color: C(0.9, 0.85, 0.72), roughness: 0.55 });
  const bones = new THREE.Mesh(boneGeo(), bm); bones.castShadow = true; bones.receiveShadow = true; scene.add(bones); reg('rangka', bones);

  /* organ */
  const organMat = (c, rough = 0.42, cc = 0.35) => new THREE.MeshPhysicalMaterial({ color: C(c[0], c[1], c[2]), roughness: rough, clearcoat: cc, clearcoatRoughness: 0.3, transparent: true });
  const addO = (id, geo, m, pos) => { const o = new THREE.Mesh(geo, m); if (pos) o.position.set(pos[0], pos[1], pos[2]); o.castShadow = o.receiveShadow = true; scene.add(o); reg(id, o); return o; };
  /* otak: dua belahan berlekuk */
  { const hem = ell([0.5, 0.38, 0.4], [0, 0, 0], 40); const p = hem.attributes.position, n = hem.attributes.normal;
    for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i), z = p.getZ(i), d = Math.sin(x * 11) * Math.sin(y * 9 + 1) * Math.sin(z * 12) * 0.045 + Math.sin(x * 20 + z * 17) * 0.015; p.setXYZ(i, x + n.getX(i) * d, y + n.getY(i) * d, z + n.getZ(i) * d); }
    hem.computeVertexNormals();
    addO('otak', merge([hem, ell([0.2, 0.17, 0.2], [-0.42, -0.14, 0], 14)]), organMat([0.86, 0.64, 0.66], 0.5, 0.3), [3.5, 1.3, 0]); }
  /* jantung */
  const HC = [1.35, -0.3, 0.05];
  const heart = addO('jantung', rel(merge([ell([0.34, 0.42, 0.3], [1.3, -0.3, 0.05], 24), ell([0.27, 0.3, 0.26], [1.47, -0.18, -0.1], 20), limb([1.42, -0.0, 0.0], [1.55, 0.4, 0.0], 0.1, 0.08), limb([1.3, 0.0, 0.1], [1.15, 0.38, 0.12], 0.08, 0.07)]), HC), organMat([0.62, 0.07, 0.1], 0.3, 0.8), HC);
  /* paru-paru (dua) + trakea */
  const lungs = [1, -1].map((s) => addO('paru', rel(merge([ell([0.72, 0.5, 0.32], [1.3, 0.42, s * 0.5], 24, [0, 0, 0.12]), ell([0.36, 0.34, 0.28], [0.85, 0.3, s * 0.46], 16)]), [1.3, 0.42, s * 0.5]), organMat([0.88, 0.45, 0.5], 0.55, 0.2), [1.3, 0.42, s * 0.5]));
  addO('paru', merge([tube([[3.0, 0.72, 0], [2.1, 0.5, 0], [1.6, 0.3, 0]], 0.09, 16, 8), limb([1.6, 0.3, 0], [1.4, 0.25, 0.5], 0.07, 0.05), limb([1.6, 0.3, 0], [1.4, 0.25, -0.5], 0.07, 0.05)]), organMat([0.88, 0.86, 0.82], 0.4, 0.4));
  /* hati, lambung, usus, ginjal, kandung kemih */
  addO('hati', merge([ell([0.45, 0.42, 0.58], [0.72, -0.42, 0.12], 22), ell([0.35, 0.3, 0.4], [0.5, -0.58, -0.22], 18)]), organMat([0.4, 0.1, 0.08], 0.35, 0.7));
  addO('lambung', merge([ell([0.5, 0.36, 0.34], [0.05, -0.5, -0.32], 22, [0, 0, 0.5]), tube([[2.9, 0.7, 0], [1.9, 0.18, -0.05], [0.9, -0.3, -0.25], [0.3, -0.4, -0.3]], 0.07, 24, 8)]), organMat([0.9, 0.52, 0.48], 0.4, 0.6));
  const gut = [[0.0, -0.62, -0.1], [-0.45, -0.72, 0.4], [-0.9, -0.6, -0.4], [-1.2, -0.74, 0.4], [-1.5, -0.55, -0.35], [-1.7, -0.3, 0.2], [-2.0, -0.15, 0], [-2.7, -0.1, 0]];
  addO('usus', merge([tube(gut.slice(0, 6), 0.14, 150, 8), tube(gut.slice(5), 0.17, 30, 8)]), organMat([0.94, 0.68, 0.64], 0.45, 0.6));
  for (const s of [1, -1]) addO('ginjal', ell([0.3, 0.19, 0.2], [-0.65, 0.4, s * 0.28], 16, [0, 0, 0.3]), organMat([0.5, 0.14, 0.1], 0.35, 0.7));
  addO('kandung', ell([0.3, 0.28, 0.28], [-1.78, -0.62, 0], 18), organMat([0.95, 0.85, 0.5], 0.25, 0.9));

  /* aliran makanan: mulut -> kerongkongan -> lambung -> usus -> anus */
  const dot = dotTex();
  const path = new THREE.CatmullRomCurve3([[4.35, 0.82, 0], [3.4, 0.6, 0], [2.3, 0.25, 0], [1.0, -0.3, -0.15], [0.1, -0.5, -0.3], ...gut.map((q) => q.slice())].map(V3));
  const NP = 70, fgeo = new THREE.BufferGeometry(); fgeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(NP * 3), 3));
  const food = new THREE.Points(fgeo, new THREE.PointsMaterial({ map: dot, color: new THREE.Color(2.4, 1.3, 0.35), size: 0.16, sizeAttenuation: true, transparent: true, depthWrite: false }));
  food.frustumCulled = false; food.userData.noAO = true; scene.add(food);
  const fu = Array.from({ length: NP }, (_, i) => i / NP), fj = Array.from({ length: NP }, () => [Math.random() - 0.5, Math.random() - 0.5]);

  const state = { yaw: 0, pitch: 0.3, dist: 16, user: false, sun: 0.2, depth: 0, depthT: 0 };
  const dimC = new THREE.Color(0.18, 0.2, 0.24), tmp = new THREE.Color();
  for (const id in ent) for (const m of ent[id].mats) { m.userData.base = m.color.clone(); m.transparent = true; }
  ent.kulit.mats.push(...faceMats);
  const k = {}; for (const id in ent) k[id] = 0;
  const fade = { kulit: 1, otot: 1, rangka: 1 };
  let hb = 0, br = 0;
  const target = new THREE.Vector3(0.2, 0.1, 0), dummy = { pts: { visible: true } };

  return {
    scene, camera, layerMeshes, state, waterFlow: dummy, sugarFlow: dummy,
    update(dtm, T, selected, hovered) {
      if (!state.user) state.yaw = 0.35 * Math.sin(T * 0.4);
      const cp = Math.cos(state.pitch), sp = Math.sin(state.pitch);
      camera.position.set(target.x + Math.sin(state.yaw) * cp * state.dist, target.y + sp * state.dist, target.z + Math.cos(state.yaw) * cp * state.dist);
      camera.lookAt(target);
      state.depth += (state.depthT - state.depth) * Math.min(1, dtm * 6);
      const d = state.depth;
      fade.kulit = 1 - smooth(0.1, 0.28, d); fade.otot = 1 - smooth(0.4, 0.55, d); fade.rangka = 1 - 0.72 * smooth(0.78, 0.95, d);
      for (const id of ['kulit', 'otot', 'rangka']) {
        const op = fade[id];
        for (const m of ent[id].mats) { m.opacity = op; m.depthWrite = op > 0.98; }
        for (const me of ent[id].meshes) { me.visible = op > 0.02 && (id !== 'rangka' || d > 0.38); me.castShadow = op > 0.5; }
      }
      const eyes = skinA.head; eyes.visible = fade.kulit > 0.02;
      const v = vitals(state.sun);
      hb += dtm * v.bpm / 60 * TAU; br += dtm * v.rr / 60 * TAU;
      const pulse = Math.pow(Math.max(0, Math.sin(hb)), 6), pulse2 = Math.pow(Math.max(0, Math.sin(hb * 2 - 1.1)), 8) * 0.5;
      heart.scale.setScalar(1 + 0.13 * pulse + 0.05 * pulse2);
      const inh = 0.5 + 0.5 * Math.sin(br); lungs.forEach((l) => l.scale.set(1 + 0.05 * inh, 1 + 0.09 * inh, 1 + 0.07 * inh));
      const organView = d > 0.55, pos = fgeo.attributes.position, sp2 = 0.03 + 0.07 * state.sun;
      food.visible = organView;
      for (const id in ent) if (id !== 'kulit' && id !== 'otot' && id !== 'rangka') for (const me of ent[id].meshes) me.visible = d > 0.4;
      if (organView) {
        for (let i = 0; i < NP; i++) { fu[i] = (fu[i] + sp2 * dtm) % 1; const p = path.getPoint(fu[i]); pos.setXYZ(i, p.x + fj[i][0] * 0.07, p.y + fj[i][1] * 0.07, p.z); }
        pos.needsUpdate = true;
      }
      const organSel = selected && ent[selected] && selected !== 'kulit' && selected !== 'otot' && selected !== 'rangka';
      for (const id in ent) {
        const isOrgan = id !== 'kulit' && id !== 'otot' && id !== 'rangka', dim = (organSel && isOrgan && selected !== id) ? 1 : 0;
        k[id] += (dim - k[id]) * Math.min(1, dtm * 8);
        const glow = selected === id ? 0.16 : (hovered === id ? 0.08 : 0);
        for (const m of ent[id].mats) {
          if (isOrgan) { m.opacity = 1 - 0.8 * k[id]; m.depthWrite = k[id] < 0.05; }
          if (m.emissive && m.userData.base) m.emissive.copy(m.userData.base).multiplyScalar(glow);
        }
      }
    },
  };
}
