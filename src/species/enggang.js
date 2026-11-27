import * as THREE from 'three';
import { merge, C, ell, limb, cone } from '../animal.js';
import BURUNG from './burung.js';
import { lerp } from '../util.js';

/* Spec ENGGANG CULA (Buceros rhinoceros), turunan kerangka burung: tubuh hitam, ekor putih bergaris hitam,
   paruh besar gading dengan cula (casque) jingga-merah melengkung ke atas. */
let tt = null;
const tailTex = () => tt || (tt = (() => { const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d'); x.fillStyle = '#f2f0ea'; x.fillRect(0, 0, 128, 128); x.fillStyle = '#111'; x.fillRect(0, 40, 128, 34); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })());

export default {
  ...BURUNG, id: 'enggang', worldScale: 0.26, dist: [10, 19], hitR: 0.45,
  walk: { ...BURUNG.walk, speed: 5, fly: 7, radius: 24, keep: 2, flapF: 7, graze: 0.3 },
  vitals: (a) => ({ bpm: Math.round(lerp(150, 350, a)), rr: Math.round(lerp(20, 60, a)) }),
  capText: (s) => 'Perkiraan kasar untuk burung besar: jantung ' + Math.round(lerp(150, 350, s)) + ' detak per menit. Kepakan sayap enggang terdengar keras seperti suara mesin karena tidak ada bulu penutup di pangkal bulu terbangnya. Titik biru: udara mengalir satu arah.',
  skinMats() {
    const black = new THREE.MeshPhysicalMaterial({ color: C(0.06, 0.06, 0.07), roughness: 0.55, sheen: 0.6, sheenColor: new THREE.Color(0.15, 0.2, 0.25) });
    const white = new THREE.MeshStandardMaterial({ color: C(0.92, 0.91, 0.88), roughness: 0.8 });
    const tail = new THREE.MeshStandardMaterial({ map: tailTex(), roughness: 0.8 });
    const wings = new THREE.MeshStandardMaterial({ color: C(0.07, 0.07, 0.08), roughness: 0.7, side: THREE.DoubleSide });
    return { body: black, head: black, tail, legs: black, belly: black, vent: white, wings };
  },
  face(A, HP) {
    const mats = BURUNG.face(A, HP);
    const o = (x, y, z) => [x - HP[0], y - HP[1], z - HP[2]];
    const ivory = new THREE.MeshStandardMaterial({ color: C(0.95, 0.85, 0.55), roughness: 0.35, transparent: true });
    const casM = new THREE.MeshStandardMaterial({ color: C(0.95, 0.42, 0.1), roughness: 0.35, transparent: true });
    /* paruh besar sedikit melengkung ke bawah */
    A.head.add(new THREE.Mesh(merge([limb(o(1.3, 0.72, 0), o(1.9, 0.6, 0), 0.17, 0.11, 12), limb(o(1.9, 0.6, 0), o(2.45, 0.38, 0), 0.11, 0.03, 12)]), ivory));
    /* cula melengkung ke atas */
    A.head.add(new THREE.Mesh(merge([ell([0.42, 0.13, 0.1], o(1.62, 0.92, 0), 14, [0, 0, -0.1]), limb(o(1.9, 0.92, 0), o(2.2, 1.12, 0), 0.1, 0.03, 10)]), casM));
    return mats.concat([ivory, casM]);
  },
  organs(addO, organMat) {
    const R = BURUNG.organs(addO, organMat);
    /* cula berongga seperti sarang lebah (ringan) */
    addO('cula', merge([ell([0.4, 0.11, 0.08], [1.62, 0.92, 0], 12, [0, 0, -0.1]), limb([1.9, 0.92, 0], [2.2, 1.12, 0], 0.09, 0.03, 8)]), organMat([0.95, 0.6, 0.3], 0.4, 0.4));
    return R;
  },
};
