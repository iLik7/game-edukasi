import * as THREE from 'three';
import { V3, merge, C, setSH, ell, limb, tube, canvasTex, addEyes, brainGeo } from './animal.js';
import { TAU, clamp, lerp, smooth, rng } from './util.js';

/* Generator ikan parametrik. Satu set parameter (P) per spesies menghasilkan:
   tubuh (loft penampang elips sepanjang sumbu x, kepala di +x), sirip, mata, sungut, tekstur sisik,
   rangka, organ, dan jalur aliran untuk adegan bedah, serta kawanan ikan yang berenang di danau.
   Panjang model dinormalkan 7 satuan. */
const L = 7, HL = L / 2;

function prof(P, t) {
  const p = Math.log(0.5) / Math.log(P.pm);
  let b = Math.pow(Math.max(0, Math.sin(Math.PI * Math.pow(t, p))), P.shape);
  b = Math.max(b, P.tailMin * (1 - smooth(0.0, 0.3, t)));
  if (t > 0.86) b = Math.max(b, Math.min(b + 0.3, P.blunt * Math.sqrt(Math.max(0, (1 - t) / 0.14))));
  return b;
}
const cyOf = (P, t) => P.arch * Math.sin(Math.PI * t) * P.H * 0.12 + (P.mouthUp || 0) * smooth(0.82, 1, t) * 0.18;
const hOf = (P, t) => P.H * prof(P, t);
const wOf = (P, t) => P.W * prof(P, t) * (1 + (P.headW || 0) * smooth(0.55, 0.95, t));
const tOf = (x) => (x + HL) / L;
export const topY = (P, x) => { const t = tOf(x); return cyOf(P, t) + hOf(P, t); };
export const botY = (P, x) => { const t = tOf(x); return cyOf(P, t) - hOf(P, t) * P.belly; };

/* tubuh: loft dengan normal analitik (tanpa jahitan di garis sisi) */
export function loft(P, sh = 1, nL = 48, nR = 24) {
  const pos = [], nor = [], uv = [], idx = [], t0 = 0.012, t1 = 0.995, e = 0.004;
  for (let i = 0; i <= nL; i++) {
    const t = t0 + (t1 - t0) * i / nL, x = -HL + t * L, cy = cyOf(P, t), h = hOf(P, t) * sh, w = Math.max(0.01, wOf(P, t) * sh);
    const dh = (hOf(P, Math.min(1, t + e)) - hOf(P, Math.max(0, t - e))) / (2 * e * L) * sh;
    for (let j = 0; j <= nR; j++) {
      const a = j / nR * TAU, s = Math.sin(a), c = Math.cos(a), hy = s > 0 ? h : h * P.belly;
      pos.push(x, cy + hy * s, w * c);
      const n = new THREE.Vector3(-dh * (s > 0 ? 1 : P.belly) * Math.abs(s) - dh * 0.6 * Math.abs(c), s / Math.max(0.01, hy), c / w).normalize();
      nor.push(n.x, n.y, n.z); uv.push(t, j / nR);
    }
  }
  for (let i = 0; i < nL; i++) for (let j = 0; j < nR; j++) { const a = i * (nR + 1) + j, b = a + nR + 1; idx.push(a, b, a + 1, b, b + 1, a + 1); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx);
  /* tutup ujung ekor dan moncong */
  const tq = t0, th = t1, capT = ell([0.05, hOf(P, tq) * sh, wOf(P, tq) * sh], [-HL + tq * L, cyOf(P, tq), 0], 12), capH = ell([0.08, Math.max(0.03, hOf(P, th) * sh), Math.max(0.03, wOf(P, th) * sh)], [-HL + th * L, cyOf(P, th), 0], 12);
  return merge([g, capT, capH]);
}

/* ---------- sirip ---------- */
function shapeGeo(pts) { return new THREE.ShapeGeometry(new THREE.Shape(pts.map((p) => new THREE.Vector2(p[0], p[1])))); }
function alongFin(P, a, b, h, top, rake = 0.5) {
  const pts = [], n = 8;
  for (let i = n; i >= 0; i--) { const x = -HL + (a + (b - a) * i / n) * L; pts.push([x, top ? topY(P, x) - 0.06 : botY(P, x) + 0.06]); }
  const xa = -HL + a * L, xb = -HL + b * L, s = top ? 1 : -1, ya = top ? topY(P, xa) : botY(P, xa), yb = top ? topY(P, xb) : botY(P, xb);
  pts.push([xa - rake * h, ya + s * h * 0.95]); pts.push([(xa + xb) / 2 - rake * h * 0.6, (ya + yb) / 2 + s * h * 0.85]); pts.push([xb - 0.1, yb + s * h * 0.35]);
  return shapeGeo(top ? pts.reverse() : pts);
}
function caudal(P) {
  const x0 = -HL + 0.1, k = P.cauH || 1, y0 = cyOf(P, 0.02), pts = [];
  if (P.caudal === 'forked') pts.push([x0, 0.22 * k], [x0 - 1.35 * k, 1.0 * k], [x0 - 1.1 * k, 0.75 * k], [x0 - 0.8 * k, 0.05], [x0 - 0.8 * k, -0.05], [x0 - 1.1 * k, -0.75 * k], [x0 - 1.35 * k, -1.0 * k], [x0, -0.22 * k]);
  else if (P.caudal === 'truncate') pts.push([x0, 0.22 * k], [x0 - 1.1 * k, 0.78 * k], [x0 - 1.2 * k, 0.0], [x0 - 1.1 * k, -0.78 * k], [x0, -0.22 * k]);
  else { pts.push([x0, 0.25 * k]); for (let i = 0; i <= 12; i++) { const a = Math.PI * (0.6 + 0.8 * i / 12); pts.push([x0 - 0.25 * k + Math.cos(a) * 1.0 * k, Math.sin(a) * 0.95 * k]); } pts.push([x0, -0.25 * k]); }
  const g = shapeGeo(pts); g.translate(0, y0, 0); return g;
}
function pairFin(P, t, len, wid, down, out, side) {
  const g = shapeGeo([[0, 0.06], [-len * 0.55, wid * 0.6], [-len, wid * 0.1], [-len * 0.8, -wid * 0.4], [-0.05, -0.08]]);
  g.rotateX(side * (Math.PI / 2 - down)); g.rotateY(side * out);
  const x = -HL + t * L; g.translate(x, cyOf(P, t) - hOf(P, t) * (P.finLow || 0.45), side * wOf(P, t) * 0.8); return g;
}
export function finGeo(P) {
  const g = [caudal(P)];
  for (const d of P.dorsal || []) g.push(alongFin(P, d[0], d[1], d[2], true, d[3] ?? 0.5));
  for (const d of P.anal || []) g.push(alongFin(P, d[0], d[1], d[2], false, d[3] ?? 0.4));
  for (const s of [1, -1]) {
    g.push(pairFin(P, P.pecT || 0.74, P.pecL || 0.9, 0.42, 0.35, 0.5, s));
    g.push(pairFin(P, P.pelT || 0.5, P.pelL || 0.6, 0.3, 0.15, 0.25, s));
    if (P.thread) { const x = -HL + (P.pelT || 0.5) * L, y = botY(P, x); g.push(tube([[x, y, s * 0.12], [x - 0.8, y - 0.5, s * 0.25], [x - 2.0, y - 0.6, s * 0.3], [x - 3.2, y - 0.3, s * 0.3]], 0.025, 24, 4)); }
  }
  return g;
}
function finTex(col) {
  return canvasTex(128, (x, N) => { x.fillStyle = col; x.fillRect(0, 0, N, N); for (let i = 0; i < 10; i++) { x.fillStyle = 'rgba(0,0,0,0.28)'; x.fillRect(i * N / 10, 0, 2, N); x.fillStyle = 'rgba(255,255,255,0.15)'; x.fillRect(i * N / 10 + 4, 0, 1, N); } }, [5, 5]);
}
/* sungut: [titik awal relatif moncong, arah, panjang] */
function barbelGeo(P) {
  const g = [], tip = HL - 0.05, y = cyOf(P, 1) - 0.05;
  for (const b of P.barbels || []) for (const s of [1, -1]) {
    const a = [tip - b[0], y + b[1], s * b[2]], d = b[3];
    g.push(tube([a, [a[0] + d[0] * 0.5, a[1] + d[1] * 0.5, a[2] + s * d[2] * 0.5], [a[0] + d[0], a[1] + d[1], a[2] + s * d[2]]], b[4] || 0.025, 10, 4));
  }
  return g;
}

/* ---------- tekstur kulit ---------- */
function skinTexture(P) {
  return canvasTex(512, (x, N) => {
    const B = new THREE.Color(P.back), S = new THREE.Color(P.side), Y = new THREE.Color(P.belly2), c = new THREE.Color();
    for (let y = 0; y < N; y++) { const v = y / N, d = Math.sin(TAU * v); c.copy(S).lerp(d > 0 ? B : Y, Math.pow(Math.abs(d), 0.8)); x.fillStyle = '#' + c.getHexString(); x.fillRect(0, y, N, 1); }
    const r = rng(P.seed || 3);
    if (P.bars) for (let i = 0; i < P.bars; i++) { x.fillStyle = 'rgba(20,25,30,0.16)'; x.fillRect(N * (0.28 + i * 0.065), 0, N * 0.03, N); }
    if (P.scale) {
      const s = P.scale; x.lineWidth = s > 30 ? 3 : 1.4;
      for (let j = 0; j < N / (s * 0.6) + 1; j++) for (let i = 0; i < N / s + 1; i++) {
        const cx = i * s + (j % 2) * s / 2, cy = j * s * 0.6;
        x.strokeStyle = P.scaleEdge || 'rgba(0,0,0,0.22)'; x.beginPath(); x.arc(cx, cy, s * 0.55, -Math.PI * 0.5, Math.PI * 0.5); x.stroke();
        if (P.scaleShine) { x.fillStyle = 'rgba(255,255,255,0.08)'; x.beginPath(); x.arc(cx - s * 0.15, cy, s * 0.3, 0, TAU); x.fill(); }
      }
    } else for (let i = 0; i < 3000; i++) { x.fillStyle = r() < 0.5 ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.04)'; x.fillRect(r() * N, r() * N, 2, 2); }
    /* gurat sisi dan tutup insang di kedua sisi */
    for (const v0 of [0.0, 0.5, 1.0]) {
      x.strokeStyle = 'rgba(20,20,20,0.45)'; x.lineWidth = 2; x.setLineDash([5, 3]); x.beginPath();
      for (let u = 0.12; u <= 0.84; u += 0.02) x.lineTo(u * N, v0 * N + Math.sin(u * 5) * 3 - (v0 === 0.5 ? 10 : -10) * 0.4); x.stroke(); x.setLineDash([]);
      x.strokeStyle = 'rgba(25,15,10,0.55)'; x.lineWidth = 3; x.beginPath(); const ou = (P.opT || 0.8) * N;
      for (let k = -0.14; k <= 0.14; k += 0.01) x.lineTo(ou - Math.cos(k * 11) * 12, (v0 + k) * N); x.stroke();
    }
  }, [1, 1]);
}
function myomereTexture() {
  return canvasTex(256, (x, N) => { x.fillStyle = '#e9b9a6'; x.fillRect(0, 0, N, N); x.strokeStyle = 'rgba(170,90,75,0.55)'; x.lineWidth = 2;
    for (let k = -2; k < 26; k++) { x.beginPath(); for (let y = 0; y <= N; y += 4) { const v = y / N; x.lineTo(k * 11 + Math.abs(Math.sin(v * TAU * 2)) * 14, y); } x.stroke(); } }, [1, 1]);
}

/* ---------- spec untuk adegan bedah (dipakai buildAnimalDissect) ---------- */
export function fishSpec(P) {
  const H = P.H, W = P.W, cyM = cyOf(P, 0.5);
  const iris = P.iris || [0.85, 0.7, 0.25], eyeT = P.eyeT || 0.87, ex = -HL + eyeT * L;
  const k = (y) => cyM + y * H, zw = (z) => z * W;
  return {
    id: P.id, kind: 'fish', groundY: -2.3, noPed: true, worldScale: 1, hitR: 0.5, hitY: 0,
    pivots: { head: [0, 0, 0], tail: [0, 0, 0], legs: [] },
    camTarget: [0, 0, 0], camYaw: 0, bg: ['#1f5774', '#0a1f2e'], dotSize: 0.12, muscleShrink: 0.86,
    vitals: (a) => ({ bpm: Math.round(lerp(40, 90, a)), rr: Math.round(lerp(40, 110, a)) }),
    bodyParts(sh) {
      const body = loft(P, sh);
      const lip = ell([0.1, 0.07 * sh, 0.14 * sh], [HL - 0.02, cyOf(P, 1) - 0.06, 0], 10);
      const fins = sh === 1 ? merge(finGeo(P)) : ell([0.05, 0.05, 0.05], [0, 0, 0], 6);
      return { body, head: lip, tail: fins, legs: [] };
    },
    muscleMat() { return new THREE.MeshPhysicalMaterial({ map: myomereTexture(), roughness: 0.45, clearcoat: 0.5, clearcoatRoughness: 0.3 }); },
    skinMats() {
      const skin = new THREE.MeshPhysicalMaterial({ map: skinTexture(P), roughness: P.scale ? 0.42 : 0.5, metalness: P.metal ?? 0.05, clearcoat: 0.3, clearcoatRoughness: 0.35, envMapIntensity: 0.55 });
      const fin = new THREE.MeshStandardMaterial({ map: finTex(P.fin), side: THREE.DoubleSide, roughness: 0.55, transparent: true, opacity: 0.85 });
      return { body: skin, head: skin, tail: fin, legs: skin };
    },
    face(A, HP) {
      const ey = cyOf(P, eyeT) + hOf(P, eyeT) * (P.eyeY ?? 0.3), ez = wOf(P, eyeT) * 0.86;
      const mats = addEyes(A.head, HP, { p: [ex, ey, ez], r: P.eyeR || 0.17, scale: [1, 1, 0.55], iris, pupil: 'round', side: true });
      const dark = new THREE.MeshStandardMaterial({ color: C(...(P.barbelCol || [0.12, 0.1, 0.09])), roughness: 0.6, transparent: true });
      const bg = barbelGeo(P); if (bg.length) A.head.add(new THREE.Mesh(merge(bg), dark));
      A.head.add(new THREE.Mesh(ell([0.04, 0.05, 0.12], [HL + 0.04, cyOf(P, 1) - 0.08, 0], 8), dark));
      return mats.concat([dark]);
    },
    bones() {
      const g = [], cy = (x) => cyOf(P, tOf(x));
      g.push(ell([0.62, hOf(P, 0.9) * 0.8, wOf(P, 0.9) * 0.75], [HL - 0.75, cy(HL - 0.75), 0], 16), limb([HL - 0.4, cy(HL) - 0.05, 0], [HL - 0.02, cy(HL) - 0.1, 0], 0.07, 0.05));
      const n = 34, x0 = HL - 1.1, x1 = -HL + 0.25;
      for (let i = 0; i < n; i++) {
        const x = x0 + (x1 - x0) * i / (n - 1), t = tOf(x), y = cyOf(P, t) + hOf(P, t) * 0.12, top = topY(P, x) * 0.92 + y * 0.08, bot = botY(P, x) * 0.85 + y * 0.15;
        g.push(ell([0.07, 0.06, 0.06], [x, y, 0], 6), limb([x, y, 0], [x - 0.12, top, 0], 0.012, 0.008));
        if (t < 0.42) g.push(limb([x, y, 0], [x - 0.12, bot, 0], 0.012, 0.008));
        else if (t < 0.74) for (const s of [1, -1]) g.push(tube([[x, y, s * 0.05], [x - 0.05, (y + bot) / 2, s * wOf(P, t) * 0.75], [x - 0.12, bot * 0.9, s * wOf(P, t) * 0.4]], 0.018, 6, 4));
      }
      /* jari-jari sirip */
      const rays = (geo) => { geo.computeBoundingBox(); };
      for (const d of (P.dorsal || []).concat(P.anal || [])) { const top = (P.dorsal || []).includes(d); for (let k = 0; k <= 6; k++) { const x = -HL + (d[0] + (d[1] - d[0]) * k / 6) * L, yb = top ? topY(P, x) : botY(P, x); g.push(limb([x, yb, 0], [x - d[2] * 0.5, yb + (top ? 1 : -1) * d[2] * 0.8, 0], 0.01, 0.006)); } }
      for (let k = -4; k <= 4; k++) g.push(limb([-HL + 0.1, cyOf(P, 0.02), 0], [-HL - 1.0 * (P.cauH || 1), cyOf(P, 0.02) + k * 0.2 * (P.cauH || 1), 0], 0.012, 0.006));
      rays(g[0]);
      return merge(g);
    },
    organs(addO, organMat) {
      addO('otak', brainGeo([0.22, 0.13, 0.13], [[0.1, 0.08, 0.09], [-0.2, -0.02, 0]]), organMat([0.9, 0.72, 0.7], 0.5, 0.3), [ex - 0.25, cyOf(P, eyeT) + hOf(P, eyeT) * 0.35, 0]);
      /* insang: empat lengkung tiap sisi dengan filamen */
      const gill = [], gx = ex - 0.75;
      for (const s of [1, -1]) for (let a = 0; a < 4; a++) {
        const x = gx + 0.1 - a * 0.11, pts = [[x, k(0.35), s * 0.1], [x - 0.05, k(0.05), zw(s * 0.55)], [x, k(-0.4), s * 0.1]];
        gill.push(tube(pts, 0.03, 14, 5));
        for (let f = 0; f < 9; f++) { const c = new THREE.CatmullRomCurve3(pts.map(V3)).getPoint(0.1 + f * 0.09); gill.push(limb([c.x, c.y, c.z], [c.x - 0.22, c.y, c.z * 0.92], 0.028, 0.008, 5)); }
      }
      addO('insang', merge(gill), organMat([0.78, 0.1, 0.16], 0.45, 0.5));
      const HC = [gx - 0.2, k(-0.55), 0];
      const heart = addO('jantung', merge([ell([0.16, 0.12, 0.14], [-0.15, 0.02, 0], 14), ell([0.17, 0.15, 0.14], [0.05, -0.02, 0], 14), limb([0.15, 0, 0], [0.45, 0.12, 0], 0.06, 0.05)]), organMat([0.55, 0.06, 0.1], 0.3, 0.8), HC);
      addO('hati', ell([0.55, 0.3 * H, 0.32 * W], [gx - 0.75, k(-0.35), zw(0.15)], 18), organMat([0.45, 0.14, 0.1], 0.35, 0.7));
      const BC = [-0.15, k(0.28), 0];
      const bl = P.twoChamber ? merge([ell([0.55, 0.26 * H, 0.26 * W], [0.55, 0.02, 0], 18), ell([0.85, 0.28 * H, 0.28 * W], [-0.75, -0.02, 0], 18)]) : ell([1.35, 0.28 * H, 0.28 * W], [0, 0, 0], 20);
      const bladder = addO('gelembung', bl, new THREE.MeshPhysicalMaterial({ color: C(0.88, 0.9, 0.92), roughness: 0.15, metalness: 0.35, clearcoat: 1, transparent: true }), BC);
      const anus = -HL + (P.anal && P.anal[0] ? P.anal[0][0] : 0.35) * L + 0.1;
      const gut = [[gx - 0.3, k(-0.15), 0], [gx - 0.9, k(-0.45), -0.1], [0.3, k(-0.5), zw(0.3)], [-0.2, k(-0.35), zw(-0.3)], [-0.6, k(-0.6), zw(0.3)], [anus + 0.4, k(-0.5), 0], [anus, k(-0.85), 0]];
      addO('usus', merge([ell([0.45, 0.22 * H, 0.22 * W], [gx - 1.0, k(-0.3), 0], 16), tube(gut, 0.07, 80, 6)]), organMat([0.92, 0.68, 0.6], 0.45, 0.6));
      addO('ginjal', tube([[gx - 0.2, k(0.42), 0], [0, k(0.5), 0], [anus, k(0.45), 0]], 0.07, 24, 6), organMat([0.4, 0.1, 0.1], 0.4, 0.6));
      if (P.labirin) {
        const lab = [];
        if (P.labirin === 'pohon') { for (const s of [1, -1]) { const b = [gx + 0.05, k(0.35), zw(s * 0.3)]; for (let i = 0; i < 5; i++) { const e = [b[0] - 0.1 + i * 0.05, b[1] + 0.2 + (i % 2) * 0.1, b[2] + s * 0.05 * i]; lab.push(limb(b, e, 0.035, 0.02, 5)); for (let j = 0; j < 2; j++) lab.push(limb(e, [e[0] + (j ? 0.08 : -0.08), e[1] + 0.12, e[2]], 0.018, 0.01, 4)); } } }
        else { for (const s of [1, -1]) for (let i = 0; i < 7; i++) lab.push(ell([0.08, 0.06, 0.06], [gx + 0.05 + Math.sin(i * 1.7) * 0.12, k(0.32) + Math.cos(i * 2.3) * 0.08, zw(s * 0.32) + Math.sin(i) * 0.05], 8)); }
        addO('labirin', merge(lab), organMat([0.82, 0.42, 0.45], 0.4, 0.5));
      }
      return { heart, lungs: [], bladder, BC };
    },
    food: { main: [[HL - 0.05, cyOf(P, 1) - 0.08, 0], [ex - 0.5, k(-0.1), 0], [ex - 1.2, k(-0.25), 0], [ex - 1.75, k(-0.3), 0], [0.3, k(-0.5), zw(0.3)], [-0.2, k(-0.35), zw(-0.3)], [-0.6, k(-0.6), zw(0.3)], [-HL + (P.anal && P.anal[0] ? P.anal[0][0] : 0.35) * L + 0.1, k(-0.85), 0]], n: 45 },
    flows: [
      { pts: [[HL - 0.05, cyOf(P, 1), 0], [ex - 0.3, k(0), zw(0.15)], [ex - 0.75, k(0), zw(0.5)], [ex - 1.15, k(-0.1), zw(0.95)], [ex - 1.6, k(-0.15), zw(1.3)]], color: new THREE.Color(0.5, 1.5, 2.6), n: 50, speed: 2.2, jit: 0.16 },
      { pts: [[ex - 1.0, k(-0.05), zw(0.42)], [ex - 0.45, k(0.0), zw(0.42)]], color: new THREE.Color(2.6, 0.25, 0.25), n: 34, speed: 3.2, jit: 0.28, dir: (st) => (st.counter === false ? -1 : 1) },
    ],
    neutral: P.neutral ?? 0.5,
    onUpdate(st, rig, O, dt, T) {
      if (st.gas == null) { st.gas = 0.25; st.vy = 0; st.fy = 0; st.hold = 0; st.counter = true; }
      const N = this.neutral, a = (st.gas - N) * 4.2;
      st.vy += a * dt; st.vy *= Math.exp(-1.6 * dt); st.fy += st.vy * dt;
      if (st.fy < -1.2) { st.fy = -1.2; st.vy = 0; } if (st.fy > 1.4) { st.fy = 1.4; st.vy = 0; }
      rig.position.y = st.fy; rig.rotation.z = clamp(st.vy * 0.25, -0.25, 0.25) + Math.sin(T * 1.2) * 0.015;
      if (O.bladder) O.bladder.scale.setScalar(0.55 + 0.9 * st.gas);
      st.status = st.gas < N - 0.04 ? 'tenggelam' : st.gas > N + 0.04 ? 'mengapung' : 'melayang';
      if (st.status === 'melayang' && Math.abs(st.vy) < 0.12) st.hold += dt; else st.hold = 0;
      if (st.hold > 2.5 && !st.buoyOk) st.buoyOk = true;
    },
  };
}

/* ================= kawanan ikan di danau ================= */
export function buildFishSchools(scene, env, list, lake) {
  const { heightAt, WATER } = env, U = { uTime: { value: 0 } }, groups = [];
  const wave = (m, amp, freq) => { m.onBeforeCompile = (sh) => { sh.uniforms.uTime = U.uTime; sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nuniform float uTime;').replace('#include <begin_vertex>', `#include <begin_vertex>
      { float tt = clamp((${HL.toFixed(2)} - position.x) / ${L.toFixed(2)}, 0.0, 1.0); float ph = float(gl_InstanceID) * 2.37;
        transformed.z += sin(position.x * 1.1 + uTime * ${freq.toFixed(2)} + ph) * ${amp.toFixed(3)} * tt * tt; }`); }; };
  const r = rng(77);
  const pick = (pref, bedOff) => {
    for (let k = 0; k < 20; k++) { const a = r() * TAU, rr = Math.sqrt(r()) * (lake.r - 4), x = lake.x + Math.cos(a) * rr, z = lake.z + Math.sin(a) * rr, bed = heightAt(x, z); if (WATER - bed > 1.0) { const y = lerp(bed + bedOff, WATER - 0.35, pref + (r() - 0.5) * 0.25); return [x, clamp(y, bed + 0.25, WATER - 0.3), z]; } }
    return [lake.x, WATER - 1, lake.z];
  };
  for (const item of list) {
    const P = item.P, spec = fishSpec(P), n = item.count;
    const parts = spec.bodyParts(1), mats = spec.skinMats();
    const skin = new THREE.MeshStandardMaterial({ map: mats.body.map, roughness: 0.45, metalness: 0.05 }), fin = mats.tail;
    const eyeG = []; const ey = cyOf(P, P.eyeT || 0.87) + hOf(P, P.eyeT || 0.87) * (P.eyeY ?? 0.3), ez = wOf(P, P.eyeT || 0.87) * 0.86, ex = -HL + (P.eyeT || 0.87) * L, er = P.eyeR || 0.17;
    for (const s of [1, -1]) { const e = ell([er, er, er * 0.55], [ex, ey, s * ez], 10); const p = ell([er * 0.5, er * 0.5, er * 0.2], [ex + 0.02, ey, s * (ez + er * 0.48)], 8);
      const ce = new Float32Array(e.attributes.position.count * 3).fill(0); const col = C(...(P.iris || [0.85, 0.7, 0.25])); for (let i = 0; i < ce.length; i += 3) { ce[i] = col.r; ce[i + 1] = col.g; ce[i + 2] = col.b; }
      e.setAttribute('color', new THREE.BufferAttribute(ce, 3)); p.setAttribute('color', new THREE.BufferAttribute(new Float32Array(p.attributes.position.count * 3).fill(0.02), 3)); eyeG.push(e, p); }
    const eyeM = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.15 });
    const finAll = merge([parts.tail, ...barbelGeo(P)]);
    const amp = item.amp || 0.18, freq = item.freq || 6;
    [skin, fin, eyeM].forEach((m) => wave(m, amp, freq));
    const body = new THREE.InstancedMesh(merge([parts.body, parts.head]), skin, n), fins = new THREE.InstancedMesh(finAll, fin, n), eyes = new THREE.InstancedMesh(merge(eyeG), eyeM, n);
    for (const m of [body, fins, eyes]) { m.frustumCulled = false; m.castShadow = false; m.userData.noAO = true; scene.add(m); }
    const fish = [];
    for (let i = 0; i < n; i++) { const p = pick(item.depth, item.bedOff || 0.35); fish.push({ p: V3(p), v: new THREE.Vector3(r() - 0.5, 0, r() - 0.5).multiplyScalar(0.3), tgt: V3(pick(item.depth, item.bedOff || 0.35)), off: new THREE.Vector3((r() - 0.5) * 2, (r() - 0.5) * 0.5, (r() - 0.5) * 2), yaw: r() * TAU, pitch: 0 }); }
    groups.push({ item, P, body, fins, eyes, fish, scale: item.scale });
  }
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(0, 0, 0, 'YZX'), sc = new THREE.Vector3(), des = new THREE.Vector3(), away = new THREE.Vector3();
  return {
    groups,
    update(dt, T, P, eyeY) {
      U.uTime.value = T;
      const far = Math.hypot(P.x - lake.x, P.z - lake.z) > lake.r + 35;
      for (const G of groups) {
        G.body.visible = G.fins.visible = G.eyes.visible = !far; if (far) continue;
        const sp = G.item.speed || 0.6;
        G.fish.forEach((f, i) => {
          const lead = G.fish[0], tgt = i === 0 || !G.item.school ? f.tgt : des.copy(lead.p).add(f.off);
          if (i === 0 || !G.item.school) { if (f.p.distanceTo(f.tgt) < 0.8) f.tgt.copy(V3(pick(G.item.depth, G.item.bedOff || 0.35))); }
          des.copy(tgt).sub(f.p); const d = des.length(); if (d > 0.001) des.multiplyScalar(sp / d);
          away.set(f.p.x - P.x, f.p.y - eyeY, f.p.z - P.z); const pd = away.length();
          if (pd < 1.6) des.add(away.multiplyScalar((1.6 - pd) * 1.5 / Math.max(0.1, pd)));
          f.v.lerp(des, Math.min(1, dt * 1.2)); f.p.addScaledVector(f.v, dt);
          const bed = heightAt(f.p.x, f.p.z); f.p.y = clamp(f.p.y, bed + 0.22, WATER - 0.25);
          if (Math.hypot(f.p.x - lake.x, f.p.z - lake.z) > lake.r - 3) { f.p.x += (lake.x - f.p.x) * dt * 0.5; f.p.z += (lake.z - f.p.z) * dt * 0.5; }
          const hs = Math.hypot(f.v.x, f.v.z);
          if (hs > 0.02) { const want = Math.atan2(-f.v.z, f.v.x); let da = want - f.yaw; da = Math.atan2(Math.sin(da), Math.cos(da)); f.yaw += da * Math.min(1, dt * 3); }
          f.pitch += (clamp(Math.atan2(f.v.y, hs + 0.01), -0.5, 0.5) - f.pitch) * Math.min(1, dt * 3);
          e.set(0, f.yaw, f.pitch); q.setFromEuler(e); sc.setScalar(G.scale); m4.compose(f.p, q, sc);
          G.body.setMatrixAt(i, m4); G.fins.setMatrixAt(i, m4); G.eyes.setMatrixAt(i, m4);
        });
        G.body.instanceMatrix.needsUpdate = G.fins.instanceMatrix.needsUpdate = G.eyes.instanceMatrix.needsUpdate = true;
      }
    },
  };
}
