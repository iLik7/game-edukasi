import * as THREE from 'three';
import { merge, C, setSH, ell, limb, tube, rel, canvasTex, addEyes } from '../animal.js';
import { rng } from '../util.js';

/* Spec KUPU-KUPU JERUK (Papilio demoleus). Serangga: kepala, toraks, abdomen, 6 kaki, 4 sayap.
   Satuan ~0,01 m (diperbesar di dunia), tanah di y = -1.0. Lapisan "rangka" dipakai untuk sistem trakea. */
const HEAD_P = [1.25, 0.05, 0], TAIL_P = [-0.1, 0, 0];
const LEGS = [[0.85, -0.28, 0.16], [0.85, -0.28, -0.16], [0.65, -0.3, 0.18], [0.65, -0.3, -0.18], [0.45, -0.28, 0.16], [0.45, -0.28, -0.16]];

function wingShape(pts) { const g = new THREE.ShapeGeometry(new THREE.Shape(pts.map((p) => new THREE.Vector2(p[0], p[1]))), 12); return g; }
/* sayap kanan di bidang XZ, pangkal di titik asal, membentang ke +z */
function wingGeo(side, fore) {
  const pts = fore ? [[0.3, 0], [0.55, 1.0], [0.5, 2.3], [0.1, 3.3], [-0.45, 3.2], [-0.8, 2.2], [-0.75, 1.0], [-0.35, 0.1]]
    : [[-0.1, 0], [-0.25, 1.1], [-0.75, 2.1], [-1.4, 2.25], [-1.95, 1.7], [-2.0, 0.9], [-1.5, 0.25], [-0.6, 0]];
  const g = wingShape(pts); g.rotateX(Math.PI / 2); if (side < 0) g.scale(1, 1, -1);
  return g;
}
let WT = null;
/* pola kupu-kupu jeruk: hitam dengan bintik kuning krem, bercak oranye dan biru di sayap belakang */
function wingTex() {
  if (WT) return WT;
  WT = canvasTex(512, (x, N) => {
    const r = rng(8), X = (u) => (u + 2.1) / 2.8 * N, Y = (v) => N - (v + 0.1) / 3.6 * N;
    x.fillStyle = '#141210'; x.fillRect(0, 0, N, N);
    x.fillStyle = '#f2d77a';
    for (let i = 0; i < 70; i++) { const u = -1.9 + r() * 2.3, v = r() * 3.3; x.beginPath(); x.ellipse(X(u), Y(v), 6 + r() * 12, 5 + r() * 9, r() * 3, 0, Math.PI * 2); x.fill(); }
    for (let i = 0; i < 16; i++) { const a = i / 16 * Math.PI * 0.9; x.beginPath(); x.arc(X(-0.2 + Math.cos(a) * -1.6), Y(Math.sin(a) * 3.0), 7, 0, Math.PI * 2); x.fill(); }
    x.fillStyle = '#d8582a'; x.beginPath(); x.arc(X(-1.6), Y(0.6), 16, 0, Math.PI * 2); x.fill();
    x.fillStyle = '#3c74c8'; x.beginPath(); x.arc(X(-1.6), Y(0.6), 8, 0, Math.PI * 2); x.fill();
    x.strokeStyle = 'rgba(0,0,0,0.6)'; x.lineWidth = 2; for (let i = 0; i < 10; i++) { x.beginPath(); x.moveTo(X(0), Y(0)); x.lineTo(X(-2 + i * 0.25), Y(3.3)); x.stroke(); }
  }, [1, 1]);
  WT.repeat.set(1 / 2.8, 1 / 3.6); WT.offset.set(2.1 / 2.8, 0.1 / 3.6);
  return WT;
}

export default {
  id: 'kupu', dist: [10, 20], groundY: -1.0, worldScale: 0.028, hitR: 0.35, hitY: 0.05, muscleShrink: 0.85, wingRest: 0.25,
  pivots: { head: HEAD_P, tail: TAIL_P, legs: LEGS },
  walk: { speed: 1.2, step: 4, swing: 0.2, radius: 4, keep: 0.5, fly: 1.1 },
  camTarget: [0, -0.2, 0], camYaw: 0.35, bg: ['#3a4a2a', '#141c0e'], pedR: 4.2, dotSize: 0.1,
  vitals: (a) => ({ bpm: 60 + a * 60, rr: 20 + a * 40 }),
  capText: (s) => s > 0.6 ? 'Kupu-kupu aktif terbang: otot terbang di toraks bekerja keras dan butuh banyak oksigen, yang dialirkan langsung lewat trakea.' : 'Kupu-kupu beristirahat. Pembuluh punggung memompa hemolimfa (darah serangga) pelan-pelan.',
  bodyParts(sh) {
    setSH(sh);
    const segs = []; for (let i = 0; i < 7; i++) segs.push(ell([0.2, 0.22 - i * 0.015, 0.22 - i * 0.015], [0.05 - i * 0.24, -0.06 - i * 0.01, 0], 12));
    const body = merge([ell([0.55, 0.38, 0.36], [0.65, 0, 0], 20), ...segs]);
    const head = rel(ell([0.26, 0.26, 0.28], [1.3, 0.05, 0], 16), HEAD_P);
    const tail = rel(ell([0.1, 0.1, 0.1], [-1.55, -0.12, 0], 8), TAIL_P);
    const legs = LEGS.map((p, i) => { const f = Math.floor(i / 2), fw = f === 0 ? 0.35 : f === 1 ? 0.05 : -0.3; return merge([limb([0, 0, 0], [fw * 0.5, -0.25, 0.25], 0.035, 0.03, 6), limb([fw * 0.5, -0.25, 0.25], [fw, -0.72, 0.4], 0.03, 0.02, 6)]); });
    const wings = sh === 1 ? [1, -1].flatMap((s) => [{ geo: wingGeo(s, true), piv: [0.8, 0.22, s * 0.18], side: s }, { geo: wingGeo(s, false), piv: [0.55, 0.18, s * 0.18], side: s }]) : null;
    setSH(1);
    return { body, head, tail, legs, wings };
  },
  skinMats() {
    const body = new THREE.MeshStandardMaterial({ color: C(0.12, 0.1, 0.08), roughness: 0.6 });
    const wings = new THREE.MeshStandardMaterial({ map: wingTex(), side: THREE.DoubleSide, roughness: 0.75, transparent: true });
    return { body, head: body, tail: body, legs: body, wings };
  },
  face(A, HP) {
    const mats = addEyes(A.head, HP, { p: [1.38, 0.1, 0.2], r: 0.18, scale: [1, 1, 1], iris: [0.18, 0.2, 0.12], pupil: 'round', side: true, noPupil: true });
    const m = new THREE.MeshStandardMaterial({ color: C(0.1, 0.08, 0.06), roughness: 0.5, transparent: true });
    const o = (x, y, z) => [x - HP[0], y - HP[1], z - HP[2]];
    const g = [];
    for (const s of [1, -1]) { g.push(tube([o(1.45, 0.25, s * 0.08), o(1.9, 0.9, s * 0.3), o(2.25, 1.5, s * 0.5)], 0.02, 14, 4), ell([0.07, 0.07, 0.07], o(2.27, 1.55, s * 0.5), 8)); }
    const sp = []; for (let i = 0; i <= 24; i++) { const a = i / 24 * Math.PI * 3, rr = 0.2 - i * 0.006; sp.push(o(1.52 + Math.cos(a) * rr * 0.4, -0.12 - Math.sin(a) * rr - 0.1, Math.cos(a) * 0.01)); }
    g.push(tube(sp, 0.02, 40, 4));
    A.head.add(new THREE.Mesh(merge(g), m));
    return mats.concat([m]);
  },
  /* sistem trakea: lubang napas (spirakel) di sisi tubuh bercabang ke seluruh tubuh */
  bones() {
    const g = [], r = rng(3);
    for (const s of [1, -1]) {
      g.push(tube([[1.0, 0.0, s * 0.25], [0.2, 0.0, s * 0.2], [-0.8, -0.05, s * 0.15], [-1.4, -0.1, s * 0.1]], 0.025, 30, 5));
      for (let i = 0; i < 8; i++) { const x = 0.9 - i * 0.3; g.push(ell([0.04, 0.04, 0.02], [x, -0.02, s * (i < 2 ? 0.37 : 0.23 - i * 0.012)], 6)); for (let k = 0; k < 3; k++) g.push(limb([x, 0, s * 0.2], [x + (r() - 0.5) * 0.3, (r() - 0.5) * 0.3, s * (0.05 + r() * 0.1)], 0.012, 0.006, 4)); }
    }
    return merge(g);
  },
  organs(addO, organMat) {
    addO('otak', merge([ell([0.12, 0.1, 0.18], [1.28, 0.08, 0], 12), ell([0.06, 0.06, 0.08], [1.18, -0.08, 0], 8)]), organMat([0.92, 0.75, 0.6], 0.5, 0.3));
    const heart = addO('jantung', tube([[-1.4, 0.06, 0], [-0.6, 0.12, 0], [0.3, 0.2, 0], [1.1, 0.16, 0]], 0.04, 30, 6), organMat([0.4, 0.75, 0.45], 0.4, 0.5));
    addO('usus', merge([tube([[1.45, -0.18, 0], [1.2, -0.05, 0], [0.75, -0.05, 0]], 0.03, 16, 5), ell([0.16, 0.11, 0.11], [0.62, -0.05, 0], 12), ell([0.35, 0.1, 0.1], [0.0, -0.08, 0], 14), tube([[-0.35, -0.08, 0], [-0.8, -0.06, 0.04], [-1.2, -0.1, -0.03], [-1.55, -0.12, 0]], 0.04, 20, 5)]), organMat([0.95, 0.8, 0.55], 0.45, 0.4));
    const mp = [], r = rng(9); for (let k = 0; k < 6; k++) { const pts = []; for (let i = 0; i < 6; i++) pts.push([-0.35 - i * 0.18, -0.08 + (r() - 0.5) * 0.15, (r() - 0.5) * 0.3]); mp.push(tube(pts, 0.012, 20, 4)); }
    addO('malpighi', merge(mp), organMat([0.95, 0.95, 0.75], 0.4, 0.4));
    return { heart, lungs: [], pulse: [{ mesh: heart, rate: (a) => 40 + 50 * a, amp: 0.05 }] };
  },
  keepDepth: ['telur', 'ulat', 'kepompong'],
  decor(addD, organMat) {
    const leaf = new THREE.MeshStandardMaterial({ color: C(0.3, 0.55, 0.2), roughness: 0.6, side: THREE.DoubleSide });
    const lf = (x, z) => { const g = new THREE.CircleGeometry(0.55, 20); g.scale(1.4, 1, 1); g.rotateX(-Math.PI / 2); g.translate(x, -1.12, z); return g; };
    addD('telur', merge([lf(-2.2, 2.4)]), leaf);
    addD('telur', merge([ell([0.06, 0.06, 0.06], [-2.2, -1.06, 2.4], 10), ell([0.06, 0.06, 0.06], [-2.0, -1.06, 2.5], 10)]), organMat([0.95, 0.85, 0.4], 0.3, 0.8));
    const cat = []; for (let i = 0; i < 9; i++) cat.push(ell([0.16, 0.15 - Math.abs(i - 4) * 0.008, 0.15], [-0.6 + i * 0.15, -0.98, 2.6], 10));
    addD('ulat', merge([lf(0, 2.6)]), leaf);
    addD('ulat', merge(cat), organMat([0.45, 0.72, 0.28], 0.45, 0.4));
    addD('kepompong', merge([limb([2.1, -1.15, 2.4], [2.1, 0.2, 2.4], 0.04, 0.03, 6)]), new THREE.MeshStandardMaterial({ color: C(0.4, 0.3, 0.2), roughness: 0.8 }));
    addD('kepompong', ell([0.18, 0.4, 0.16], [2.25, -0.35, 2.4], 14, [0, 0, 0.25]), organMat([0.6, 0.72, 0.35], 0.5, 0.3));
  },
  food: { main: [[2.0, -0.75, 0], [1.6, -0.35, 0], [1.45, -0.18, 0], [1.2, -0.05, 0], [0.62, -0.05, 0], [0.0, -0.08, 0], [-0.8, -0.06, 0], [-1.55, -0.12, 0]], n: 30 },
  flows: [{ pts: [[0.85, -0.02, 0.4], [0.85, 0, 0.2], [0.6, 0.05, 0.1], [0.3, 0.1, 0.05]], color: new THREE.Color(0.5, 1.5, 2.6), n: 20, speed: 2, jit: 0.06 }],
};
