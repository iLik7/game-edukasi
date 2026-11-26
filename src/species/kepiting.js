import * as THREE from 'three';
import { merge, C, setSH, ell, limb, tube, cone, rel, hairTexture, brainGeo } from '../animal.js';
import { lerp } from '../util.js';

/* Spec KEPITING BAKAU (Scylla serrata). Model menghadap +x (mata di depan), karapas lebar ke arah z.
   Tanah di y = -0.9. Sepuluh kaki: capit, 3 pasang kaki jalan, 1 pasang kaki renang (dayung). Jalan menyamping.
   Lapisan "rangka" dipakai untuk INSANG (kepiting tidak punya tulang dalam; cangkangnya adalah rangka luar). */
const HEAD_P = [0.8, 0.0, 0], TAIL_P = [-0.4, -0.3, 0];
const LP = [[0.6, -0.12, 0.72], [0.6, -0.12, -0.72], [0.3, -0.15, 1.0], [0.3, -0.15, -1.0], [0.0, -0.15, 1.08], [0.0, -0.15, -1.08], [-0.3, -0.15, 1.0], [-0.3, -0.15, -1.0], [-0.55, -0.1, 0.8], [-0.55, -0.1, -0.8]];
const MID = [[0.95, -0.15, 0], [0.75, 0.0, 0], [0.5, 0.1, 0], [0.1, 0.1, 0], [-0.4, 0.05, 0], [-0.6, -0.2, 0], [-0.4, -0.4, 0], [0.0, -0.44, 0], [0.35, -0.44, 0]];

let tx = null;
const shell = () => tx || (tx = hairTexture('#4f5a34', (x, N, r) => {
  for (let i = 0; i < 260; i++) { const px = r() * N, py = r() * N, s = 6 + r() * 14; x.fillStyle = r() < 0.5 ? 'rgba(30,36,18,0.5)' : 'rgba(120,130,70,0.35)'; x.beginPath(); for (let k = 0; k < 6; k++) { const a = k / 6 * Math.PI * 2 + r() * 0.4; x.lineTo(px + Math.cos(a) * s, py + Math.sin(a) * s); } x.fill(); }
}, 91, [2, 2], 300));

/* karapas: elips pipih lebar dengan gerigi di tepi depan-samping (Scylla punya 9 gerigi tiap sisi) */
function carapace() {
  const g = ell([0.95, 0.38, 1.35], [0, 0, 0], 32); const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i), z = p.getZ(i); if (y > 0) p.setY(i, y * (0.75 + 0.25 * Math.cos(z * 0.8))); }
  g.computeVertexNormals(); const parts = [g];
  for (const s of [1, -1]) for (let k = 0; k < 9; k++) { const a = 0.25 + k / 8 * 1.05, x = Math.cos(a) * 0.9, z = s * Math.sin(a) * 1.3; parts.push(cone(0.06, 0.18, [x, 0.02, z], [Math.PI / 2 * s, 0, 0], 4).rotateY(0) ); }
  for (let k = 0; k < 4; k++) parts.push(cone(0.04, 0.12, [0.93, 0.05, -0.18 + k * 0.12], [0, 0, -Math.PI / 2], 4));
  return merge(parts);
}
function walkLeg(s, k) { const L = 1 + (k === 1 ? 0.12 : 0); return merge([limb([0, 0, 0], [0.04, 0.28, s * 0.7 * L], 0.09, 0.075), limb([0.04, 0.28, s * 0.7 * L], [0.08, -0.05, s * 1.2 * L], 0.07, 0.055), limb([0.08, -0.05, s * 1.2 * L], [0.1, -0.74, s * 1.42 * L], 0.05, 0.015)]); }
function paddle(s) { return merge([limb([0, 0, 0], [-0.12, 0.22, s * 0.6], 0.08, 0.065), limb([-0.12, 0.22, s * 0.6], [-0.25, 0.05, s * 0.95], 0.06, 0.05), ell([0.28, 0.03, 0.17], [-0.42, -0.02, s * 1.08], 14, [0.3 * s, 0.4 * s, 0])]); }
function claw(s) {
  return merge([limb([0, 0, 0], [0.42, 0.06, s * 0.42], 0.11, 0.1), limb([0.42, 0.06, s * 0.42], [0.72, 0.02, s * 0.5], 0.1, 0.12), cone(0.04, 0.14, [0.6, 0.15, s * 0.5], [0, 0, 0], 4),
    ell([0.55, 0.3, 0.24], [1.05, -0.02, s * 0.46], 20, [0, -s * 0.15, 0]),
    cone(0.12, 0.45, [1.68, -0.12, s * 0.4], [0, 0, -Math.PI / 2 - 0.12], 8), cone(0.1, 0.45, [1.64, 0.1, s * 0.4], [0, 0, -Math.PI / 2 + 0.18], 8)]);
}

export default {
  id: 'kepiting', dist: [8, 16], groundY: -0.9, worldScale: 0.085, hitR: 0.32, hitY: 0.1, muscleShrink: 0.86,
  pivots: { head: HEAD_P, tail: TAIL_P, legs: LP },
  walk: { speed: 0.7, step: 10, swing: 0.35, radius: 3, keep: 1.6, sideways: true, legMask: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1], tailA: 0, tailF: 1 },
  camTarget: [0.1, -0.1, 0], camYaw: 0.55, bg: ['#2e4440', '#0e1816'], pedR: 3.6, dotSize: 0.08,
  vitals: (a) => ({ bpm: Math.round(lerp(60, 150, a)), rr: Math.round(lerp(60, 200, a)) }),
  capText: (s) => (s > 0.6 ? 'Kepiting aktif: pengipas insang (skafognatit) bergerak cepat mendorong lebih banyak air melewati insang, dan jantung berdetak lebih cepat.' : 'Kepiting beristirahat: aliran air di insang dan detak jantung melambat.') + ' Titik biru: air masuk dari pangkal kaki, melewati insang, lalu keluar di dekat mulut. Kepiting berdarah dingin, jadi angkanya sangat dipengaruhi suhu.',
  bodyParts(sh) {
    setSH(sh);
    const body = carapace();
    const head = rel(merge([ell([0.18, 0.12, 0.3], [0.88, -0.12, 0], 12), limb([0.85, 0.08, 0.22], [1.0, 0.25, 0.32], 0.035, 0.03), limb([0.85, 0.08, -0.22], [1.0, 0.25, -0.32], 0.035, 0.03)]), HEAD_P);
    const tail = rel(ell([0.55, 0.05, 0.35], [-0.05, -0.36, 0], 14), TAIL_P);   /* abdomen terlipat di bawah tubuh */
    const legs = LP.map((p, i) => { const s = Math.sign(p[2]); return i < 2 ? claw(s) : i >= 8 ? paddle(s) : walkLeg(s, (i >> 1) - 1); });
    const extra = [[ell([0.8, 0.12, 1.0], [0.05, -0.28, 0], 20), 'under']];
    setSH(1);
    return { body, head, tail, legs, extra };
  },
  skinMats() {
    const body = new THREE.MeshPhysicalMaterial({ map: shell(), bumpMap: shell(), bumpScale: 0.5, roughness: 0.5, clearcoat: 0.3, clearcoatRoughness: 0.5 });
    const legs = new THREE.MeshPhysicalMaterial({ map: shell(), roughness: 0.45, clearcoat: 0.5, color: C(0.95, 0.85, 0.75) });
    const under = new THREE.MeshStandardMaterial({ color: C(0.85, 0.78, 0.6), roughness: 0.6 });
    return { body, head: body, tail: under, legs, under };
  },
  face(A, HP) {
    const eyeM = new THREE.MeshPhysicalMaterial({ color: C(0.05, 0.05, 0.05), roughness: 0.15, clearcoat: 1, transparent: true });
    const tipM = new THREE.MeshStandardMaterial({ color: C(0.15, 0.12, 0.1), roughness: 0.4, transparent: true });
    const o = (x, y, z) => [x - HP[0], y - HP[1], z - HP[2]];
    for (const s of [1, -1]) A.head.add(new THREE.Mesh(ell([0.07, 0.07, 0.07], o(1.02, 0.28, s * 0.33), 12), eyeM));
    A.head.add(new THREE.Mesh(merge([limb(o(0.95, 0.0, 0.08), o(1.25, 0.12, 0.15), 0.012, 0.008, 4), limb(o(0.95, 0.0, -0.08), o(1.25, 0.12, -0.15), 0.012, 0.008, 4)]), tipM));
    /* ujung capit gelap */
    A.legs.slice(0, 2).forEach((g, i) => { const s = i ? -1 : 1; g.add(new THREE.Mesh(merge([cone(0.06, 0.2, [1.86, -0.14, s * 0.4], [0, 0, -Math.PI / 2 - 0.12], 6), cone(0.055, 0.2, [1.83, 0.12, s * 0.4], [0, 0, -Math.PI / 2 + 0.18], 6)]), tipM)); });
    return [eyeM, tipM];
  },
  /* "rangka" = insang berbentuk bulu di kedua sisi rongga insang */
  bones() {
    const g = [];
    for (const s of [1, -1]) for (let k = 0; k < 8; k++) {
      const x = 0.45 - k * 0.11, base = [x, -0.12, s * 0.45], top = [x - 0.1, 0.12, s * (0.85 + Math.sin(k / 7 * Math.PI) * 0.15)];
      g.push(limb(base, top, 0.03, 0.02, 5));
      for (let j = 0; j < 6; j++) { const t = (j + 1) / 7, p = [lerp(base[0], top[0], t), lerp(base[1], top[1], t), lerp(base[2], top[2], t)]; g.push(ell([0.05, 0.012, 0.09], p, 6)); }
    }
    return merge(g);
  },
  organs(addO, organMat) {
    addO('otak', merge([brainGeo([0.09, 0.06, 0.12], [[0.03, 0.03, 0.04], [-0.06, -0.02, 0]]), limb([0.7, 0.02, 0], [0.2, -0.22, 0], 0.025, 0.025, 5), ell([0.18, 0.05, 0.14], [0.15, -0.22, 0], 10)]), organMat([0.9, 0.78, 0.6], 0.5, 0.3), [0.72, 0.05, 0]);
    const HC = [-0.15, 0.18, 0];
    const heart = addO('jantung', rel(merge([ell([0.2, 0.08, 0.17], HC, 14), limb([-0.05, 0.2, 0], [0.55, 0.18, 0], 0.025, 0.02, 5), limb([-0.2, 0.18, 0.05], [-0.5, 0.05, 0.3], 0.02, 0.015, 5), limb([-0.2, 0.18, -0.05], [-0.5, 0.05, -0.3], 0.02, 0.015, 5)]), HC), organMat([0.75, 0.82, 0.92], 0.3, 0.8), HC);
    addO('hepato', merge([1, -1].flatMap((s) => [ell([0.42, 0.13, 0.32], [0.15, 0.0, s * 0.55], 16), ell([0.25, 0.1, 0.22], [-0.25, 0.0, s * 0.45], 12)])), organMat([0.95, 0.65, 0.2], 0.45, 0.4));
    addO('lambung', merge([ell([0.18, 0.14, 0.16], [0.5, 0.08, 0], 14), tube([[0.95, -0.15, 0], [0.8, -0.05, 0], [0.62, 0.05, 0]], 0.035, 10, 5)]), organMat([0.85, 0.7, 0.6], 0.4, 0.5));
    addO('usus', tube(MID.slice(2), 0.03, 50, 5), organMat([0.9, 0.82, 0.62], 0.45, 0.5));
    addO('gonad', merge([1, -1].map((s) => ell([0.35, 0.05, 0.14], [0.05, 0.12, s * 0.28], 12))), organMat([0.98, 0.45, 0.15], 0.5, 0.3));
    return { heart, lungs: [] };
  },
  food: { main: [[1.6, -0.1, 0.4], [1.2, -0.12, 0.2], ...MID], n: 26 },
  flows: [{ pts: [[-0.2, -0.32, 1.0], [-0.05, -0.15, 0.8], [0.15, 0.0, 0.75], [0.45, 0.0, 0.45], [0.8, -0.1, 0.15], [1.05, -0.12, 0.1]], color: new THREE.Color(0.5, 1.5, 2.6), n: 24, speed: 1.0, jit: 0.06 },
    { pts: [[-0.2, -0.32, -1.0], [-0.05, -0.15, -0.8], [0.15, 0.0, -0.75], [0.45, 0.0, -0.45], [0.8, -0.1, -0.15], [1.05, -0.12, -0.1]], color: new THREE.Color(0.5, 1.5, 2.6), n: 24, speed: 1.0, jit: 0.06 }],
};
