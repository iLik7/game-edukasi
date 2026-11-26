import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { TAU, clamp, smooth, rng } from './util.js';
import dirtUrl from '../node_modules/@dgreenheck/ez-tree/src/app/public/dirt_color.jpg';
import dirtNUrl from '../node_modules/@dgreenheck/ez-tree/src/app/public/dirt_normal.jpg';

/* Mesin hewan generik (kucing, sapi, kambing, ...).
   Tiap spesies = satu "spec" di src/species/: bentuk tubuh, rangka, organ, mata, jalur makanan, tanda vital.
   Mesin ini merakitnya menjadi (1) hewan yang berkeliaran di dunia dan (2) adegan bedah berlapis
   kulit -> otot -> rangka -> organ. Model menghadap +x. */

/* ---------- helper geometri (dipakai oleh spec) ---------- */
export const V3 = (a) => new THREE.Vector3(a[0], a[1], a[2]);
export const merge = (a) => mergeGeometries(a, false);
export const C = (r, g, b) => new THREE.Color().setRGB(r, g, b, THREE.SRGBColorSpace);
let SH = 1; /* faktor penyusutan jari-jari: lapisan otot = bentuk kulit yang lebih tipis di tempat yang sama */
export const setSH = (v) => { SH = v; };
export function ell(r, p, seg = 22, rot) {
  const g = new THREE.SphereGeometry(1, seg, Math.max(8, Math.round(seg * 0.7)));
  g.scale(r[0] * SH, r[1] * SH, r[2] * SH);
  if (rot) { g.rotateX(rot[0]); g.rotateY(rot[1]); g.rotateZ(rot[2]); }
  g.translate(p[0], p[1], p[2]); return g;
}
export function limb(a, b, r1, r2, seg = 10) {
  const s0 = SH; r1 *= s0; r2 *= s0; SH = 1;
  const A = V3(a), B = V3(b), d = B.clone().sub(A), L = d.length();
  const c = new THREE.CylinderGeometry(r2, r1, L, seg, 1, true);
  c.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.clone().normalize()));
  c.translate((A.x + B.x) / 2, (A.y + B.y) / 2, (A.z + B.z) / 2);
  const out = merge([c, ell([r1, r1, r1], a, seg), ell([r2, r2, r2], b, seg)]); SH = s0; return out;
}
export function tube(pts, r, seg = 24, radial = 8) { return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map(V3)), seg, r * SH, radial, false); }
export function cone(r, h, p, rot, seg = 8) { const g = new THREE.ConeGeometry(r * SH, h * SH, seg, 1); if (rot) { g.rotateX(rot[0]); g.rotateY(rot[1]); g.rotateZ(rot[2]); } g.translate(p[0], p[1], p[2]); return g; }
export const rel = (g, P) => { g.translate(-P[0], -P[1], -P[2]); return g; };

/* ---------- tekstur ---------- */
export function canvasTex(N, draw, repeat) {
  const c = document.createElement('canvas'); c.width = c.height = N; draw(c.getContext('2d'), N);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 4;
  if (repeat) t.repeat.set(repeat[0], repeat[1]); return t;
}
/* rambut halus di atas warna dasar; draw(x,N,r) melukis pola */
export function hairTexture(base, draw, seed = 11, repeat = [2, 2], hair = 5200) {
  return canvasTex(256, (x, N) => {
    const r = rng(seed); x.fillStyle = base; x.fillRect(0, 0, N, N);
    if (draw) draw(x, N, r);
    for (let i = 0; i < hair; i++) { x.strokeStyle = r() < 0.5 ? 'rgba(255,240,220,0.09)' : 'rgba(30,18,8,0.09)'; x.lineWidth = 1; const px = r() * N, py = r() * N; x.beginPath(); x.moveTo(px, py); x.lineTo(px + (r() - 0.5) * 3, py + 4 + r() * 6); x.stroke(); }
  }, repeat);
}
export function furMat(map, sheen = [1, 0.85, 0.62], rough = 0.95) {
  return new THREE.MeshPhysicalMaterial({ map, bumpMap: map, bumpScale: 0.6, roughness: rough, metalness: 0, sheen: 1, sheenRoughness: 0.55, sheenColor: new THREE.Color(sheen[0], sheen[1], sheen[2]) });
}
function muscleTexture() {
  return canvasTex(256, (x, N) => {
    const r = rng(23); x.fillStyle = '#8a2b22'; x.fillRect(0, 0, N, N);
    for (let i = 0; i < 900; i++) { x.strokeStyle = r() < 0.5 ? 'rgba(196,82,64,0.35)' : 'rgba(70,16,12,0.35)'; x.lineWidth = 1 + r() * 2.5; const px = r() * N; x.beginPath(); x.moveTo(px, 0); x.bezierCurveTo(px + 6, N * 0.3, px - 6, N * 0.7, px + (r() - 0.5) * 8, N); x.stroke(); }
    for (let i = 0; i < 14; i++) { x.strokeStyle = 'rgba(240,215,200,0.22)'; x.lineWidth = 1.2; const px = r() * N; x.beginPath(); x.moveTo(px, 0); x.lineTo(px + (r() - 0.5) * 20, N); x.stroke(); }
  }, [3, 2]);
}
export function dotTex() {
  const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d');
  const g = x.createRadialGradient(32, 32, 2, 32, 32, 30); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.55, 'rgba(255,255,255,0.9)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.beginPath(); x.arc(32, 32, 30, 0, TAU); x.fill(); return new THREE.CanvasTexture(c);
}

/* mata generik: bola mata + pupil (bentuk pupil menentukan "karakter" spesies).
   o: {p:[x,y,z] pusat mata kanan (z>0), r, iris:[r,g,b], pupil:'slit'|'bar'|'round', side (true = menghadap samping)} */
export function addEyes(head, HP, o) {
  const eyeM = new THREE.MeshPhysicalMaterial({ color: C(...o.iris), roughness: 0.08, clearcoat: 1, clearcoatRoughness: 0.05, transparent: true });
  const pupM = new THREE.MeshStandardMaterial({ color: 0x040404, roughness: 0.2, transparent: true });
  for (const s of [1, -1]) {
    const e = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 16), eyeM);
    const sc = o.scale || [0.75, 1, 1]; e.scale.set(o.r * sc[0], o.r * sc[1], o.r * sc[2]);
    e.position.set(o.p[0] - HP[0], o.p[1] - HP[1], s * o.p[2] - HP[2]); head.add(e);
    /* arah pandang: depan (+x, pemangsa) atau samping (+/-z, hewan mangsa) */
    const out = o.side ? new THREE.Vector3(0.35, 0.05, s).normalize() : new THREE.Vector3(1, 0, s * 0.35).normalize();
    let pg;
    if (o.pupil === 'slit') pg = new THREE.SphereGeometry(1, 10, 8).scale(o.r * 0.16, o.r * 0.78, o.r * 0.1);      /* celah tegak (kucing) */
    else if (o.pupil === 'bar') pg = new THREE.BoxGeometry(o.r * 1.0, o.r * 0.3, o.r * 0.1);                       /* persegi panjang mendatar (kambing) */
    else if (o.pupil === 'oval') pg = new THREE.SphereGeometry(1, 12, 10).scale(o.r * 0.6, o.r * 0.32, o.r * 0.1); /* lonjong mendatar (sapi) */
    else pg = new THREE.SphereGeometry(1, 12, 10).scale(o.r * 0.45, o.r * 0.45, o.r * 0.1);
    const pu = new THREE.Mesh(pg, pupM);
    pu.position.copy(e.position).addScaledVector(out, o.r * (o.side ? 0.93 : 0.76));
    pu.lookAt(pu.position.clone().add(out));
    head.add(pu);
  }
  return [eyeM, pupM];
}

/* rakit bagian (kulit/otot) menjadi grup berengsel; mats boleh satu material atau {body, head, tail, legs} */
function assemble(spec, parts, mats, layer) {
  const M = (k) => (mats.isMaterial ? mats : (mats[k] || mats.body));
  const root = new THREE.Group(), meshes = [];
  const mk = (geo, piv, k) => { const m = new THREE.Mesh(geo, M(k)); m.castShadow = m.receiveShadow = true; m.userData.layer = layer; const g = new THREE.Group(); g.position.set(piv[0], piv[1], piv[2]); g.add(m); meshes.push(m); root.add(g); return g; };
  const body = new THREE.Mesh(parts.body, M('body')); body.castShadow = body.receiveShadow = true; body.userData.layer = layer; root.add(body); meshes.push(body);
  const head = mk(parts.head, spec.pivots.head, 'head'), tail = mk(parts.tail, spec.pivots.tail, 'tail');
  const legs = parts.legs.map((g, i) => mk(g, spec.pivots.legs[i], 'legs'));
  return { root, meshes, head, tail, legs };
}

/* ================= HEWAN DI DUNIA ================= */
export function buildWorldAnimal(scene, env, spec, home, seed = 404, bounds = null) {
  const { heightAt, WATER } = env, S = spec.worldScale, G = -spec.groundY;
  const A = assemble(spec, spec.bodyParts(1), spec.skinMats(), 'kulit');
  if (spec.face) spec.face(A, spec.pivots.head);
  A.root.scale.setScalar(S);
  const wrap = new THREE.Group(); wrap.add(A.root); scene.add(wrap);
  const hit = new THREE.Mesh(new THREE.SphereGeometry(spec.hitR, 8, 6), new THREE.MeshBasicMaterial({ visible: false }));
  scene.add(hit);
  const W = spec.walk, r = rng(seed), an = { group: wrap, hit, x: home.x, z: home.z, y: heightAt(home.x, home.z), yaw: r() * TAU, parts: A };
  let st = 'idle', timer = 2 + r() * 3, tx = home.x, tz = home.z, phase = 0, amp = 0, graze = 0, grazeT = 0;
  an.update = (dt, T, P) => {
    const dxp = P.x - an.x, dzp = P.z - an.z, dp = Math.hypot(dxp, dzp);
    let speed = 0;
    if (st === 'idle') {
      timer -= dt;
      if (dp < 3 && !W.graze) { const want = Math.atan2(-dzp, dxp); let d = want - an.yaw; d = Math.atan2(Math.sin(d), Math.cos(d)); an.yaw += d * Math.min(1, dt * 3); }
      if (timer <= 0 && dp > W.keep) {
        for (let k = 0; k < 10; k++) { const a = r() * TAU, rr = 1.5 + r() * W.radius, nx = home.x + Math.cos(a) * rr, nz = home.z + Math.sin(a) * rr; if (heightAt(nx, nz) > WATER + 0.5 && (!bounds || Math.hypot(nx - bounds.x, nz - bounds.z) < bounds.r - 1.6)) { tx = nx; tz = nz; st = 'walk'; break; } }
        timer = 3 + r() * 6;
      }
    } else {
      const dx = tx - an.x, dz = tz - an.z, d = Math.hypot(dx, dz);
      if (d < 0.25 || dp < W.keep * 0.7) { st = 'idle'; timer = 3 + r() * 7; grazeT = W.graze ? 2 + r() * 6 : 0; }
      else {
        const want = Math.atan2(-dz, dx); let da = want - an.yaw; da = Math.atan2(Math.sin(da), Math.cos(da)); an.yaw += da * Math.min(1, dt * 3);
        speed = W.speed; an.x += (dx / d) * speed * dt; an.z += (dz / d) * speed * dt;
      }
    }
    /* merumput: kepala turun saat diam */
    grazeT -= dt; const gT = (st === 'idle' && grazeT > 0) ? 1 : 0; graze += (gT - graze) * Math.min(1, dt * 2);
    amp += ((speed > 0 ? 1 : 0) - amp) * Math.min(1, dt * 6); phase += speed * dt * W.step;
    const sw = Math.sin(phase) * W.swing * amp;
    A.legs[0].rotation.z = sw; A.legs[3].rotation.z = sw * 0.9; A.legs[1].rotation.z = -sw; A.legs[2].rotation.z = -sw * 0.9;
    A.tail.rotation.y = Math.sin(T * (W.tailF || 1.4)) * (W.tailA || 0.28);
    A.head.rotation.z = Math.sin(T * 0.8) * 0.04 - amp * 0.04 - graze * (W.graze || 0) + (graze > 0.5 ? Math.sin(T * 7) * 0.03 : 0);
    an.y += (heightAt(an.x, an.z) - an.y) * Math.min(1, dt * 10);
    wrap.position.set(an.x, an.y + G * S + Math.abs(Math.sin(phase)) * 0.012 * amp, an.z); wrap.rotation.y = an.yaw;
    hit.position.set(an.x, an.y + spec.hitY, an.z);
  };
  return an;
}

/* ================= BEDAH ================= */
export function buildAnimalDissect(renderer, spec) {
  const scene = new THREE.Scene();
  { const c = document.createElement('canvas'); c.width = c.height = 512; const x = c.getContext('2d');
    const g = x.createRadialGradient(256, 230, 20, 256, 256, 420); g.addColorStop(0, spec.bg[0]); g.addColorStop(0.55, spec.bg[1]); g.addColorStop(1, '#05090e');
    x.fillStyle = g; x.fillRect(0, 0, 512, 512); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; scene.background = t; }
  const pm = new THREE.PMREMGenerator(renderer);
  scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture; scene.environmentIntensity = 0.5;
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 120);
  const key = new THREE.DirectionalLight(0xfff1dc, 2.6); key.position.set(4, 9, 8); key.castShadow = true; key.shadow.mapSize.set(1024, 1024);
  const sc = key.shadow.camera; sc.left = -8; sc.right = 8; sc.top = 8; sc.bottom = -8; sc.near = 1; sc.far = 32; key.shadow.bias = -0.0005; key.shadow.normalBias = 0.03; scene.add(key);
  const rim = new THREE.DirectionalLight(0x8fd0ff, 1.2); rim.position.set(-6, 3, -5); scene.add(rim);
  const fill = new THREE.DirectionalLight(0xffffff, 0.6); fill.position.set(-3, 4, -9); scene.add(fill);

  const dt = new THREE.TextureLoader().load(dirtUrl), dn = new THREE.TextureLoader().load(dirtNUrl);
  for (const t of [dt, dn]) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(2.4, 2.4); }
  dt.colorSpace = THREE.SRGBColorSpace;
  const ped = new THREE.Mesh(new THREE.CylinderGeometry(spec.pedR || 5.6, (spec.pedR || 5.6) + 0.2, 0.3, 64), new THREE.MeshStandardMaterial({ map: dt, normalMap: dn, color: new THREE.Color(0.7, 0.66, 0.62), roughness: 1 }));
  ped.position.y = spec.groundY - 0.15; ped.receiveShadow = true; ped.userData.noAO = true; scene.add(ped);

  const layerMeshes = [], ent = {};
  const reg = (id, m) => { (ent[id] || (ent[id] = { mats: [], meshes: [] })); if (!ent[id].mats.includes(m.material)) ent[id].mats.push(m.material); ent[id].meshes.push(m); m.userData.layer = id; layerMeshes.push(m); };

  const skinA = assemble(spec, spec.bodyParts(1), spec.skinMats(), 'kulit'); const extraMats = spec.face ? spec.face(skinA, spec.pivots.head) : [];
  scene.add(skinA.root); skinA.meshes.forEach((m) => reg('kulit', m));
  const mm = new THREE.MeshPhysicalMaterial({ map: muscleTexture(), roughness: 0.5, clearcoat: 0.35, clearcoatRoughness: 0.4 });
  const musA = assemble(spec, spec.bodyParts(spec.muscleShrink || 0.84), mm, 'otot'); scene.add(musA.root); musA.meshes.forEach((m) => reg('otot', m));
  const bm = new THREE.MeshStandardMaterial({ color: C(0.9, 0.85, 0.72), roughness: 0.55 });
  const bones = new THREE.Mesh(spec.bones(), bm); bones.castShadow = true; bones.receiveShadow = true; scene.add(bones); reg('rangka', bones);
  if (spec.boneExtras) for (const [geo, mat] of spec.boneExtras()) { const m = new THREE.Mesh(geo, mat); m.castShadow = true; scene.add(m); reg('rangka', m); }

  const organMat = (c, rough = 0.42, cc = 0.35, map) => new THREE.MeshPhysicalMaterial({ color: C(c[0], c[1], c[2]), map: map || null, roughness: rough, clearcoat: cc, clearcoatRoughness: 0.3, transparent: true });
  const addO = (id, geo, m, pos) => { const o = new THREE.Mesh(geo, m); if (pos) o.position.set(pos[0], pos[1], pos[2]); o.castShadow = o.receiveShadow = true; scene.add(o); reg(id, o); return o; };
  const O = spec.organs(addO, organMat);   /* {heart, lungs[], pulse?: [{mesh, rate(act), amp}]} */

  /* aliran makanan: jalur utama (oranye) dan opsional jalur memamah biak (hijau) */
  const dot = dotTex(), flows = [];
  function mkFlow(pts, color, n, speed, loop) {
    const path = new THREE.CatmullRomCurve3(pts.map(V3), !!loop);
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
    const p = new THREE.Points(geo, new THREE.PointsMaterial({ map: dot, color, size: spec.dotSize || 0.16, sizeAttenuation: true, transparent: true, depthWrite: false }));
    p.frustumCulled = false; p.userData.noAO = true; scene.add(p);
    flows.push({ p, path, n, speed, u: Array.from({ length: n }, (_, i) => i / n), j: Array.from({ length: n }, () => [Math.random() - 0.5, Math.random() - 0.5]) });
  }
  mkFlow(spec.food.main, new THREE.Color(2.4, 1.3, 0.35), spec.food.n || 70, 1, false);
  if (spec.food.cud) mkFlow(spec.food.cud, new THREE.Color(0.6, 2.2, 0.5), 26, 1.6, false);

  const state = { yaw: spec.camYaw || 0, yaw0: spec.camYaw || 0, pitch: 0.3, dist: 16, user: false, sun: 0.2, depth: 0, depthT: 0 };
  for (const id in ent) for (const m of ent[id].mats) { m.userData.base = m.color.clone(); m.transparent = true; }
  ent.kulit.mats.push(...extraMats);
  const k = {}; for (const id in ent) k[id] = 0;
  const fade = { kulit: 1, otot: 1, rangka: 1 };
  let hb = 0, br = 0;
  const target = V3(spec.camTarget), dummy = { pts: { visible: true } };
  const isLayer = (id) => id === 'kulit' || id === 'otot' || id === 'rangka';

  return {
    scene, camera, layerMeshes, state, waterFlow: dummy, sugarFlow: dummy, spec, vitals: spec.vitals,
    update(dtm, T, selected, hovered) {
      if (!state.user) state.yaw = state.yaw0 + 0.35 * Math.sin(T * 0.4);
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
      skinA.head.visible = fade.kulit > 0.02;
      const v = spec.vitals(state.sun);
      hb += dtm * v.bpm / 60 * TAU; br += dtm * v.rr / 60 * TAU;
      const pulse = Math.pow(Math.max(0, Math.sin(hb)), 6), pulse2 = Math.pow(Math.max(0, Math.sin(hb * 2 - 1.1)), 8) * 0.5;
      if (O.heart) O.heart.scale.setScalar(1 + 0.13 * pulse + 0.05 * pulse2);
      const inh = 0.5 + 0.5 * Math.sin(br); (O.lungs || []).forEach((l) => l.scale.set(1 + 0.05 * inh, 1 + 0.09 * inh, 1 + 0.07 * inh));
      for (const q of O.pulse || []) { q.ph = (q.ph || 0) + dtm * q.rate(state.sun) / 60 * TAU; const s = Math.pow(Math.max(0, Math.sin(q.ph)), 4) * q.amp; q.mesh.scale.set(1 - s * 0.5, 1 - s, 1 - s * 0.5); }
      const organView = d > 0.55;
      for (const id in ent) if (!isLayer(id)) for (const me of ent[id].meshes) me.visible = d > 0.4;
      for (const F of flows) {
        F.p.visible = organView; if (!organView) continue;
        const pos = F.p.geometry.attributes.position, spd = (0.03 + 0.07 * state.sun) * F.speed;
        for (let i = 0; i < F.n; i++) { F.u[i] = (F.u[i] + spd * dtm) % 1; const p = F.path.getPoint(F.u[i]); pos.setXYZ(i, p.x + F.j[i][0] * 0.07, p.y + F.j[i][1] * 0.07, p.z); }
        pos.needsUpdate = true;
      }
      const organSel = selected && ent[selected] && !isLayer(selected);
      for (const id in ent) {
        const dim = (organSel && !isLayer(id) && selected !== id) ? 1 : 0;
        k[id] += (dim - k[id]) * Math.min(1, dtm * 8);
        const glow = selected === id ? 0.16 : (hovered === id ? 0.08 : 0);
        for (const m of ent[id].mats) {
          if (!isLayer(id)) { m.opacity = 1 - 0.8 * k[id]; m.depthWrite = k[id] < 0.05; }
          if (m.emissive && m.userData.base) m.emissive.copy(m.userData.base).multiplyScalar(glow);
        }
      }
    },
  };
}

/* ---------- rangka generik berkaki empat ----------
   cfg: skull[[r,p,seg?]...], jaw[[a,b,r1,r2]...], spine pts, nV, vr, tail pts, nT, tr,
        ribs {n, x0, dx, cy, hh, hw}, sternum [a,b,r], scap [r,p], pelvis [r,p,rot],
        front [[sh,el,wr,to]] (z positif; dicerminkan), hind [[hp,kn,hk,to]], br (jari-jari tulang kaki) */
export function quadSkeleton(cfg) {
  const g = [];
  for (const s of cfg.skull) g.push(ell(s[0], s[1], s[2] || 18));
  for (const j of cfg.jaw || []) g.push(limb(j[0], j[1], j[2], j[3]));
  const spine = new THREE.CatmullRomCurve3(cfg.spine.map(V3));
  for (let i = 0; i < cfg.nV; i++) { const p = spine.getPoint(i / (cfg.nV - 1)); g.push(ell([cfg.vr * 1.2, cfg.vr, cfg.vr], [p.x, p.y, p.z], 8)); }
  if (cfg.tail) { const tail = new THREE.CatmullRomCurve3(cfg.tail.map(V3)); for (let i = 1; i < cfg.nT; i++) { const p = tail.getPoint(i / cfg.nT), s = cfg.tr * (1 - i / cfg.nT * 0.6); g.push(ell([s, s, s], [p.x, p.y, p.z], 7)); } }
  const R = cfg.ribs;
  for (let i = 0; i < R.n; i++) for (const s of [1, -1]) {
    const x = R.x0 - i * R.dx, f = 1 - 0.38 * Math.abs(i - R.n * 0.32) / R.n, cy = R.cy, hh = R.hh, hw = R.hw;
    const sp = new THREE.CatmullRomCurve3([V3([x, cy + hh * 0.82, s * hw * 0.15]), V3([x, cy + hh * 0.42 * f, s * hw * 0.88 * f]), V3([x, cy - hh * 0.2 * f, s * hw * f]), V3([x, cy - hh * 0.78 * f, s * hw * 0.62 * f]), V3([x, cy - hh * f, s * hw * 0.1])]);
    g.push(new THREE.TubeGeometry(sp, 10, R.t || 0.045, 5, false));
  }
  if (cfg.sternum) g.push(limb(cfg.sternum[0], cfg.sternum[1], cfg.sternum[2], cfg.sternum[2]));
  const b = cfg.br || [0.11, 0.09, 0.07, 0.05];
  for (const s of [1, -1]) {
    const m = (p) => [p[0], p[1], p[2] * s];
    if (cfg.scap) g.push(ell(cfg.scap[0], m(cfg.scap[1]), 10, [0, 0, 0.3]));
    for (const L of cfg.front) { const [a, e, w, t] = L.map(m); g.push(limb(a, e, b[0], b[1]), limb(e, w, b[1], b[2]), limb(w, t, b[2], b[3]), ell([b[0] * 1.35, b[0] * 1.35, b[0] * 1.35], a, 8), ell([b[1] * 1.3, b[1] * 1.3, b[1] * 1.3], e, 8)); }
    for (const L of cfg.hind) { const [a, e, w, t] = L.map(m); g.push(limb(a, e, b[0] * 1.25, b[1]), limb(e, w, b[1], b[2]), limb(w, t, b[2], b[3]), ell([b[0] * 1.5, b[0] * 1.5, b[0] * 1.5], a, 8), ell([b[1] * 1.3, b[1] * 1.3, b[1] * 1.3], e, 8)); }
  }
  if (cfg.pelvis) g.push(ell(cfg.pelvis[0], cfg.pelvis[1], 12, cfg.pelvis[2]));
  return merge(g);
}

/* otak berlekuk (dua belahan + otak kecil) di titik p */
export function brainGeo(r, cb) {
  const hem = ell(r, [0, 0, 0], 40); const p = hem.attributes.position, n = hem.attributes.normal, k = 1 / r[0];
  for (let i = 0; i < p.count; i++) { const x = p.getX(i) * k * 0.5, y = p.getY(i) * k * 0.5, z = p.getZ(i) * k * 0.5, d = (Math.sin(x * 11) * Math.sin(y * 9 + 1) * Math.sin(z * 12) * 0.045 + Math.sin(x * 20 + z * 17) * 0.015) * r[0] * 2; p.setXYZ(i, p.getX(i) + n.getX(i) * d, p.getY(i) + n.getY(i) * d, p.getZ(i) + n.getZ(i) * d); }
  hem.computeVertexNormals();
  return merge([hem, ell(cb[0], cb[1], 14)]);
}
