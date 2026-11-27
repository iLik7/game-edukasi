import * as THREE from 'three';
import { merge, C, ell, limb, tube } from '../animal.js';
import { makeBird } from './burung.js';
import { lerp } from '../util.js';

/* Tiga burung baru dari pabrik burung, masing-masing dengan siluet sendiri. */
const vit = (b0, b1, r0, r1) => (a) => ({ bpm: Math.round(lerp(b0, b1, a)), rr: Math.round(lerp(r0, r1, a)) });
const tm = (c, o = {}) => new THREE.MeshStandardMaterial(Object.assign({ color: C(...c), roughness: 0.7, transparent: true }, o));
const offs = (B) => { const K = B.birdK; return [K.HEAD_P[0] - 0.75, K.HEAD_P[1] - 0.45]; };

/* ===== CENDRAWASIH KECIL (Paradisaea minor), jantan ===== */
const CB = makeBird({ id: 'cendrawasih', len: 1.0, girth: 1.0, head: 1.0, neck: [0.04, 0.04], tailL: 0.55, tailW: 1.0, wingL: 1.05, wingW: 1.05,
  beak: 'cone', beakCol: [0.62, 0.72, 0.82], beakL: 1.05, legCol: [0.45, 0.45, 0.5], legR: 1.1, cheek: null, eye: { r: 0.08, iris: [0.95, 0.85, 0.2] },
  back: { base: '#6a3418', dark: 'rgba(40,16,6,0.45)', light: 'rgba(150,90,40,0.25)' }, wing: { lead: '#7a4020', mid: '#5a2c14', trail: '#2e160a', covert: 'rgba(170,110,60,0.3)' } });
const [CX, CY] = offs(CB);
export const SP_CENDRAWASIH = {
  ...CB, worldScale: 0.13, dist: [9, 17],
  walk: { ...CB.walk, speed: 3.5, fly: 3.5, radius: 9, keep: 1.2, flapF: 16 },
  vitals: vit(300, 700, 40, 110),
  skinMats() {
    const b = CB.skinMats();
    return { ...b, head: new THREE.MeshPhysicalMaterial({ color: C(0.95, 0.82, 0.2), roughness: 0.6, sheen: 0.4, sheenColor: new THREE.Color(1, 0.9, 0.4) }),
      belly: new THREE.MeshStandardMaterial({ color: C(0.3, 0.12, 0.06), roughness: 0.75 }), vent: new THREE.MeshStandardMaterial({ color: C(0.3, 0.12, 0.06) }) };
  },
  face(A, HP) {
    const mats = CB.face(A, HP), o = (x, y, z) => [x + CX - HP[0], y + CY - HP[1], z - HP[2]];
    const throat = tm([0.1, 0.45, 0.25], { roughness: 0.25, metalness: 0.3 }), plume = tm([0.98, 0.85, 0.3], { side: THREE.DoubleSide, roughness: 0.8 }), wire = tm([0.08, 0.06, 0.05]);
    A.head.add(new THREE.Mesh(merge([ell([0.26, 0.2, 0.3], o(1.12, 0.55, 0), 14)]), throat));
    /* bulu hias panjang dari sisi badan, menjuntai ke belakang dan sedikit ke atas, kuning ke putih */
    const P = []; for (const s of [1, -1]) for (let k = 0; k < 14; k++) { const a = k / 13, z0 = s * (0.32 + 0.05 * Math.sin(k)); P.push(tube([[0.1, -0.05, z0], [-0.6, 0.0 + a * 0.25, z0 * 1.4 + s * a * 0.15], [-1.4 - a * 0.3, 0.1 + a * 0.5, z0 * 1.6 + s * a * 0.35], [-2.1 - a * 0.4, -0.1 + a * 0.7, z0 * 1.7 + s * a * 0.5]], 0.03 - a * 0.008, 12, 4)); }
    A.root.add(new THREE.Mesh(merge(P), plume));
    /* dua kawat ekor yang melengkung */
    A.tail.add(new THREE.Mesh(merge([1, -1].map((s) => tube([[-0.45, -0.15, s * 0.05], [-1.3, -0.45, s * 0.15], [-1.9, -0.35, s * 0.35], [-2.0, -0.1, s * 0.5]], 0.012, 20, 4))), wire));
    return mats.concat([throat, plume, wire]);
  },
  organs(addO, organMat) { const R = CB.organs(addO, organMat);
    const P = []; for (const s of [1, -1]) for (let k = 0; k < 8; k++) { const a = k / 7, z0 = s * 0.34; P.push(tube([[0.1, -0.05, z0], [-0.6, a * 0.25, z0 * 1.4 + s * a * 0.15], [-1.4 - a * 0.3, 0.1 + a * 0.5, z0 * 1.6 + s * a * 0.35]], 0.03, 10, 4)); }
    addO('hias', merge(P), organMat([0.98, 0.85, 0.3], 0.6, 0.2)); return R; },
};

/* ===== CEKAKAK JAWA (Halcyon cyanoventris) ===== */
const KB = makeBird({ id: 'cekakak', len: 0.95, girth: 1.0, head: 1.32, headShape: [1.1, 1, 1], neck: [0.02, 0.03], tailL: 0.6, tailW: 0.9, tailDroop: 0.55,
  wingL: 0.95, wingW: 1.0, legL: 0.55, legR: 1.2, legCol: [0.85, 0.2, 0.12], beak: 'dagger', beakL: 2.0, beakCol: [0.85, 0.12, 0.08], cheek: null, eye: { r: 0.085, iris: [0.2, 0.12, 0.08] },
  back: { base: '#1f5aa8', dark: 'rgba(10,30,80,0.4)', light: 'rgba(120,190,255,0.3)' }, wing: { lead: '#3a8ae0', mid: '#1f5aa8', trail: '#0e2a60', covert: 'rgba(140,210,255,0.4)', patch: ['rgba(255,255,255,0.9)', 0.25, 0.55, 0.62, 0.5] } });
export const SP_CEKAKAK = {
  ...KB, worldScale: 0.1, dist: [8, 15],
  walk: { ...KB.walk, speed: 4, fly: 2.5, radius: 7, keep: 1.4, flapF: 20 },
  vitals: vit(350, 800, 45, 120),
  skinMats() {
    const b = KB.skinMats();
    return { ...b, head: new THREE.MeshStandardMaterial({ color: C(0.32, 0.18, 0.1), roughness: 0.7 }), belly: new THREE.MeshStandardMaterial({ color: C(0.18, 0.12, 0.42), roughness: 0.7 }),
      vent: new THREE.MeshStandardMaterial({ color: C(0.15, 0.1, 0.35) }), tail: new THREE.MeshStandardMaterial({ color: C(0.12, 0.35, 0.75), roughness: 0.6 }) };
  },
  organs(addO, organMat) { const R = KB.organs(addO, organMat); const K = KB.birdK, hx = K.HEAD_P[0] - 0.75, hy = K.HEAD_P[1] - 0.45, bx = 1.2 + hx + 0.32 * 0.42;
    addO('paruh', merge([limb([bx - 0.1, 0.68 + hy, 0], [bx + 0.64, 0.66 + hy, 0], 0.13, 0.02, 12)]), organMat([0.85, 0.15, 0.1], 0.3, 0.5)); return R; },
};

/* ===== JALAK BALI (Leucopsar rothschildi) ===== */
const JB = makeBird({ id: 'jalakbali', len: 1.05, girth: 0.98, head: 1.05, neck: [0.05, 0.05], tailL: 0.85, tailW: 1.0, wingL: 1.05, wingW: 1.0, legL: 1.05, legR: 1.1,
  legCol: [0.55, 0.58, 0.65], beak: 'cone', beakCol: [0.75, 0.7, 0.55], beakL: 1.1, cheek: null, eye: { r: 0.08, iris: [0.2, 0.15, 0.1] },
  back: { base: '#f2f2ee', dark: 'rgba(200,200,195,0.4)', light: 'rgba(255,255,255,0.5)' }, wing: { lead: '#f6f6f2', mid: '#ecece6', trail: '#d8d8d0', quill: 'rgba(160,160,150,0.5)', covert: 'rgba(255,255,255,0.4)', tipCol: '#151515' } });
const [JX, JY] = offs(JB);
export const SP_JALAK = {
  ...JB, worldScale: 0.11, dist: [8, 16],
  walk: { ...JB.walk, speed: 3.4, fly: 2.2, radius: 8, keep: 1.1, flapF: 18 },
  vitals: vit(320, 760, 40, 115),
  skinMats() {
    const b = JB.skinMats(), w = new THREE.MeshStandardMaterial({ color: C(0.95, 0.95, 0.93), roughness: 0.8 });
    return { ...b, head: w, belly: w, vent: w, tail: new THREE.MeshStandardMaterial({ color: C(0.95, 0.95, 0.93), roughness: 0.8 }) };
  },
  face(A, HP) {
    const mats = JB.face(A, HP), o = (x, y, z) => [x + JX - HP[0], y + JY - HP[1], z - HP[2]];
    const blue = tm([0.15, 0.45, 0.95], { roughness: 0.4 }), white = tm([0.97, 0.97, 0.95], { side: THREE.DoubleSide }), black = tm([0.05, 0.05, 0.05]);
    /* kulit biru tanpa bulu di sekitar mata */
    A.head.add(new THREE.Mesh(merge([1, -1].map((s) => ell([0.15, 0.11, 0.05], o(1.18, 0.8, s * 0.27 * 1.05), 12))), blue));
    /* jambul putih panjang yang terkulai ke belakang */
    A.head.add(new THREE.Mesh(merge([-0.08, -0.03, 0.03, 0.08].map((z, i) => limb(o(1.0, 1.05, z), o(0.55 - i * 0.04, 1.22 - i * 0.03, z * 1.4), 0.06, 0.015, 8))), white));
    /* ujung ekor hitam */
    A.tail.add(new THREE.Mesh(ell([0.2, 0.06, 0.28], [-0.98, -0.47, 0], 10, [0, 0, 0.42]), black));
    return mats.concat([blue, white, black]);
  },
  organs(addO, organMat) { const R = JB.organs(addO, organMat); const K = JB.birdK;
    /* cincin penanda di kaki: dipasang pada burung hasil penangkaran sebelum dilepasliarkan */
    addO('konservasi', merge(K.LEGS.map((l) => new THREE.TorusGeometry(0.07, 0.025, 6, 14).rotateX(Math.PI / 2).translate(l[0] + 0.04, l[1] - 0.6 * 1.05, l[2]))), organMat([0.2, 0.55, 0.95], 0.3, 0.6)); return R; },
};
