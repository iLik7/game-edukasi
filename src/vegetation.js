import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { Tree, TreePreset } from '../node_modules/@dgreenheck/ez-tree/src/lib/index.js';
import { TAU, clamp, smooth, rng, yieldFrame } from './util.js';
import { heightAt, hash, WATER, SIZE, GLSL_TERRAIN, pathDist, pathUniforms, PATH_W, LAKE, START } from './terrain.js';

/* Gaya render tiap pohon bertanda (data sains tetap di src/objects/pohon.js) */
const HERO_STYLE = {
  /* jati: batang lurus tinggi, daun sangat besar, tajuk agak terbuka */
  jati: { preset: 'Ash Large', seed: 4211, height: 18, leafScale: 2.3, leafCount: 0.7, tint: 0x6f9c34, tweak(o) { o.branch.gnarliness[0] = 0.02; o.branch.length[0] *= 1.15; o.branch.angle[1] = 55; } },
  /* mahoni: tajuk rapat gelap, daun majemuk menyirip mengilap */
  mahoni: { preset: 'Oak Large', seed: 9083, height: 19, leaf: 'ash', leafScale: 1.0, leafCount: 1.9, tint: 0x2c6330 },
  /* beringin: tajuk kubah lebar, daun kecil rapat, akar gantung */
  beringin: { preset: 'Oak Large', seed: 1377, height: 14, bark: 'willow', leaf: 'aspen', leafScale: 0.85, leafCount: 1.9, tint: 0x4a8c3a, roots: true,
    tweak(o) { o.branch.length[0] *= 0.7; o.branch.radius[0] *= 1.5; o.branch.length[1] *= 1.25; o.branch.angle[1] = 80; } },
  /* pinus merkusii: kerucut tinggi, jarum panjang */
  pinus: { preset: 'Pine Large', seed: 6654, height: 22, tint: 0x3e6a3a },
  /* trembesi: payung lebar, batang pendek tebal */
  trembesi: { preset: 'Oak Large', seed: 2025, height: 15, leaf: 'ash', leafScale: 0.9, leafCount: 1.9, tint: 0x5b9a3c,
    tweak(o) { o.branch.length[0] *= 0.65; o.branch.radius[0] *= 1.35; o.branch.length[1] *= 1.7; o.branch.angle[1] = 88; o.branch.gnarliness[1] = 0.12; } },
};

export const windU = { uTime: { value: 0 }, uWindAmp: { value: 1 } };
const barkScale = {};

function cloneJson(o) { return JSON.parse(JSON.stringify(o)); }

/* bangun satu varian pohon dan siapkan geometri/material PBR miliknya */
function makeVariant(presetName, o) {
  const t = new Tree();
  t.options.copy(cloneJson(TreePreset[presetName]));
  t.options.seed = o.seed;
  if (o.bark) t.options.bark.type = o.bark;
  if (o.leaf) t.options.leaves.type = o.leaf;
  if (o.leafCount) t.options.leaves.count = Math.round(t.options.leaves.count * o.leafCount);
  if (o.leafScale) t.options.leaves.size *= o.leafScale;
  if (o.tint != null) t.options.leaves.tint = o.tint;
  if (o.tweak) o.tweak(t.options);
  if (o.lite) { /* LOD jauh: daun separuh tapi lebih besar, cabang lebih kasar */
    const op = t.options;
    op.leaves.count = Math.max(2, Math.round(op.leaves.count * (o.liteLeaf || 0.5))); op.leaves.size *= 1 / Math.sqrt(o.liteLeaf || 0.5);
    const lb = o.liteBranch || 0.5;
    for (const lv of [0, 1, 2, 3]) {
      if (op.branch.sections[lv]) op.branch.sections[lv] = Math.max(2, Math.ceil(op.branch.sections[lv] * lb));
      if (op.branch.segments[lv]) op.branch.segments[lv] = Math.max(3, Math.ceil(op.branch.segments[lv] * (lb > 0.7 ? 0.8 : 0.55)));
    }
  }
  const bt = t.options.bark.type;
  if (barkScale[bt]) t.options.bark.textureScale = cloneJson(barkScale[bt]); else barkScale[bt] = cloneJson(t.options.bark.textureScale);
  t.generate();

  const bm = t.branchesMesh, lm = t.leavesMesh;
  bm.geometry.computeBoundingBox(); lm.geometry.computeBoundingBox();
  const box = bm.geometry.boundingBox.clone().union(lm.geometry.boundingBox);
  const scale = o.height / Math.max(0.01, box.max.y);

  /* normal daun mengarah keluar dari pusat tajuk -> pencahayaan volumetrik lembut */
  const lg = lm.geometry, pos = lg.attributes.position, nr = new Float32Array(pos.count * 3);
  const cy = lg.boundingBox.min.y * 0.4 + lg.boundingBox.max.y * 0.6, v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.set(pos.getX(i), pos.getY(i) - cy, pos.getZ(i)).normalize(); v.y = v.y * 0.7 + 0.45; v.normalize();
    nr[i * 3] = v.x; nr[i * 3 + 1] = v.y; nr[i * 3 + 2] = v.z;
  }
  lg.setAttribute('normal', new THREE.BufferAttribute(nr, 3));

  const src = bm.material;
  const barkMat = new THREE.MeshStandardMaterial({ map: src.map, normalMap: src.normalMap, roughnessMap: src.roughnessMap, aoMap: src.aoMap, color: src.color.clone(), roughness: 1, metalness: 0 });
  const leafMat = leafMaterial(lm.material.map, new THREE.Color(t.options.leaves.tint));
  const depthMat = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: lm.material.map, alphaTest: 0.5, side: THREE.DoubleSide });
  const trunkR = (t.options.branch.radius[0] || 1) * scale;
  const tris = (bm.geometry.index.count + lm.geometry.index.count) / 3, btris = bm.geometry.index.count / 3, ltris = lm.geometry.index.count / 3;
  src.dispose(); lm.material.dispose();
  return { barkGeo: bm.geometry, leafGeo: lm.geometry, barkMat, leafMat, depthMat, scale, height: o.height, trunkR, tris, btris, ltris, tree: t };
}

function leafMaterial(map, tint) {
  const m = new THREE.MeshStandardMaterial({ map, color: tint, alphaTest: 0.5, alphaToCoverage: true, side: THREE.DoubleSide, roughness: 0.74, metalness: 0 });
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = windU.uTime; sh.uniforms.uWindAmp = windU.uWindAmp;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uTime; uniform float uWindAmp;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        {
          vec3 ip = vec3(0.0);
          #ifdef USE_INSTANCING
            ip = instanceMatrix[3].xyz;
          #endif
          float ph = ip.x * 0.21 + ip.z * 0.17 + position.x * 0.05 + position.y * 0.04;
          float w = 0.5 * sin(uTime * 1.3 + ph) + 0.3 * sin(uTime * 2.7 + ph * 1.7) + 0.2 * sin(uTime * 5.1 + ph * 2.3);
          transformed.xz += vec2(w * 0.9, w * 0.6) * uv.y * uWindAmp;
        }`);
  };
  return m;
}

/* ---------- rumput GPU: ratusan ribu bilah, hanya di sekitar pemain ---------- */
function tuftGeometry() {
  const r = rng(3), pos = [], col = [], nrm = [], idx = [];
  const base = new THREE.Color().setRGB(0.010, 0.030, 0.005), tip = new THREE.Color().setRGB(0.13, 0.23, 0.05);
  const NB = 9;
  for (let b = 0; b < NB; b++) {
    const a = b / NB * TAU + r() * 0.7, rr = 0.02 + r() * 0.09, cx = Math.cos(a) * rr, cz = Math.sin(a) * rr;
    const h = 0.13 + r() * 0.26, w = 0.011 + r() * 0.010, lean = (r() - 0.5) * 0.22, face = r() * TAU;
    const dx = Math.cos(face), dz = Math.sin(face), px = -dz, pz = dx, k = pos.length / 3;
    const P = (x, y, z, c) => { pos.push(x, y, z); col.push(c.r, c.g, c.b); nrm.push(0, 1, 0); };
    P(cx - px * w, 0, cz - pz * w, base); P(cx + px * w, 0, cz + pz * w, base);
    P(cx + dx * lean, h, cz + dz * lean, tip);
    idx.push(k, k + 1, k + 2);
  }
  const g = new THREE.InstancedBufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
  g.setIndex(idx);
  return g;
}

function buildGrass(scene, maxCount) {
  const g = tuftGeometry(), r = rng(77), R = 22;
  const off = new Float32Array(maxCount * 4);
  for (let i = 0; i < maxCount; i++) { off[i * 4] = (r() * 2 - 1) * R; off[i * 4 + 1] = (r() * 2 - 1) * R; off[i * 4 + 2] = r(); off[i * 4 + 3] = 0.8 + r() * 0.7; }
  g.setAttribute('aOff', new THREE.InstancedBufferAttribute(off, 4));
  g.instanceCount = maxCount;
  const u = { uPlayer: { value: new THREE.Vector3() }, uR: { value: R }, uTime: windU.uTime, uWater: { value: WATER }, uPathW: { value: PATH_W }, ...pathUniforms() };
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92, metalness: 0, side: THREE.DoubleSide });
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, u);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
        attribute vec4 aOff; uniform vec3 uPlayer; uniform float uR, uTime, uWater, uPathW;
        ${GLSL_TERRAIN}`)
      .replace('#include <color_vertex>', `#include <color_vertex>
        vColor.rgb *= 0.72 + 0.55 * aOff.z;`)
      .replace('#include <begin_vertex>', `
        vec2 rel = aOff.xy - uPlayer.xz; rel = mod(rel + uR, 2.0 * uR) - uR;
        vec2 wp = uPlayer.xz + rel;
        float gh = tHeight(wp);
        float fade = 1.0 - smoothstep(uR * 0.5, uR, length(rel));
        float ok = step(uWater + 0.55, gh) * smoothstep(uPathW * 0.85, uPathW * 1.6, tPath(wp)) * step(9.0, length(wp) + 14.0);
        float clump = 0.5 + 0.5 * sin(wp.x * 0.11) * sin(wp.y * 0.13 + 1.0);
        float sc = aOff.w * fade * ok * mix(0.6, 1.2, clump);
        float ang = aOff.z * 6.2831;
        mat2 Rm = mat2(cos(ang), -sin(ang), sin(ang), cos(ang));
        vec3 transformed = position;
        float hh = transformed.y;
        vec2 sway = vec2(sin(uTime * 1.7 + wp.x * 0.55 + wp.y * 0.35), sin(uTime * 1.3 + wp.y * 0.5 - wp.x * 0.3)) * 0.08 * hh * hh
                  + vec2(sin(uTime * 0.6 + wp.x * 0.08), cos(uTime * 0.5 + wp.y * 0.08)) * 0.1 * hh;
        transformed.xz = Rm * transformed.xz;
        transformed *= sc;
        transformed += vec3(wp.x + sway.x * sc, gh - 0.02, wp.y + sway.y * sc);
        #ifdef USE_ALPHAHASH
          vPosition = vec3(transformed);
        #endif`);
    /* normal selalu mengarah ke atas, juga di sisi belakang bilah */
    sh.fragmentShader = sh.fragmentShader.replace('#include <normal_fragment_begin>', '#include <normal_fragment_begin>\n normal = normalize(vNormal);');
  };
  const mesh = new THREE.Mesh(g, mat);
  mesh.frustumCulled = false; mesh.receiveShadow = true; mesh.userData.noAO = true;
  scene.add(mesh);
  return { mesh, u, maxCount, geo: g };
}

/* ---------- penyebaran pohon per chunk ---------- */
function chunkInstances(scene, variant, spots, chunks, size, lod) {
  const byKey = new Map();
  for (const s of spots) {
    const k = Math.floor(s.x / size) + ',' + Math.floor(s.z / size);
    (byKey.get(k) || byKey.set(k, []).get(k)).push(s);
  }
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), sc = new THREE.Vector3(), e = new THREE.Euler(), c = new THREE.Color();
  byKey.forEach((arr, k) => {
    const [kx, kz] = k.split(',').map(Number);
    const bark = new THREE.InstancedMesh(variant.barkGeo, variant.barkMat, arr.length);
    const leaf = new THREE.InstancedMesh(variant.leafGeo, variant.leafMat, arr.length);
    leaf.customDepthMaterial = variant.depthMat; leaf.userData.noAO = true;
    arr.forEach((s, i) => {
      e.set(0, s.r * TAU, 0); q.setFromEuler(e); p.set(s.x, s.y - 0.1, s.z);
      const f = variant.scale * s.s; sc.set(f, f, f * (0.92 + s.c * 0.16)); m4.compose(p, q, sc);
      bark.setMatrixAt(i, m4); leaf.setMatrixAt(i, m4);
      c.setRGB(0.82 + s.c * 0.3, 0.86 + s.c * 0.26, 0.78 + s.c * 0.2); leaf.setColorAt(i, c);
    });
    for (const m of [bark, leaf]) { m.castShadow = lod === 0; m.receiveShadow = true; m.instanceMatrix.needsUpdate = true; m.computeBoundingSphere(); m.visible = false; scene.add(m); }
    bark.userData.bark = true;
    leaf.instanceColor.needsUpdate = true;
    chunks.push({ cx: (kx + 0.5) * size, cz: (kz + 0.5) * size, half: size * 0.72, meshes: [bark, leaf], n: arr.length, lod: lod || 0, bush: !!variant.bush });
  });
}

/* ---------- GLB (batu, bunga) ---------- */
let _draco = null;
async function loadGlb(url) {
  if (!_draco) { _draco = new DRACOLoader(); _draco.setDecoderPath('assets/draco/'); }
  const l = new GLTFLoader(); l.setDRACOLoader(_draco); return l.loadAsync(url);
}
function normalizedMeshes(root, targetSize) {
  const box = new THREE.Box3().setFromObject(root), size = box.getSize(new THREE.Vector3()), s = targetSize / Math.max(size.x, size.y, size.z);
  const out = [];
  root.updateMatrixWorld(true);
  root.traverse((o) => {
    if (!o.isMesh) return;
    const g = o.geometry.clone(); g.applyMatrix4(o.matrixWorld); g.scale(s, s, s);
    out.push({ geo: g, mat: o.material });
  });
  const bb = new THREE.Box3(); out.forEach((m) => { m.geo.computeBoundingBox(); bb.union(m.geo.boundingBox); });
  out.forEach((m) => m.geo.translate(-(bb.min.x + bb.max.x) / 2, -bb.min.y, -(bb.min.z + bb.max.z) / 2));
  return out;
}

export async function buildVegetation({ scene, heroes, addObs, progress, quality }) {
  const chunkSize = 40, chunks = [], lowDetail = { v: quality === 'hemat' };
  const step = async (t, f) => { progress && progress(f, t); await yieldFrame(); };

  /* varian pohon ambient */
  await step('Menumbuhkan pohon…', 0.05);
  const defs = [
    { k: 'oak', preset: 'Oak Medium', seed: 11, height: 11, w: 0.26 },
    { k: 'oak', preset: 'Oak Medium', seed: 23, height: 13, w: 0.2, tint: 0x4d8a34 },
    { k: 'ash', preset: 'Ash Medium', seed: 5, height: 12, w: 0.16 },
    { k: 'pine', preset: 'Pine Medium', seed: 3, height: 15, w: 0.2 },
    { k: 'pine', preset: 'Pine Medium', seed: 9, height: 12, w: 0.1 },
    { k: 'aspen', preset: 'Aspen Medium', seed: 8, height: 12, w: 0.08 },
  ];
  const variants = [], lites = [];
  for (let i = 0; i < defs.length; i++) {
    variants.push(makeVariant(defs[i].preset, { ...defs[i], lite: true, liteLeaf: 0.65, liteBranch: 0.8 }));
    lites.push(makeVariant(defs[i].preset, { ...defs[i], lite: true, liteLeaf: 0.32 }));
    await step('Menumbuhkan pohon…', 0.05 + 0.25 * (i + 1) / defs.length);
  }

  /* titik pohon */
  const r = rng(7), spots = [], heroR = 8;
  let tries = 0;
  const total = 230;
  while (spots.length < total && tries < 9000) {
    tries++;
    const x = (r() * 2 - 1) * 108, z = (r() * 2 - 1) * 108;
    if (Math.hypot(x, z) < 10) continue;
    const h = heightAt(x, z); if (h < WATER + 0.9) continue;
    if (pathDist(x, z) < 2.6) continue;
    if (heroes.some((H) => Math.hypot(x - H.x, z - H.z) < heroR)) continue;
    if (spots.some((s) => Math.hypot(x - s.x, z - s.z) < 4.2)) continue;
    spots.push({ x, y: h, z, s: 0.8 + r() * 0.5, r: r(), c: r(), n: Math.sin(x * 0.03) * Math.cos(z * 0.025) });
  }
  /* pilih jenis: berkelompok mengikuti noise rendah */
  const groups = variants.map(() => []);
  const wsum = defs.reduce((a, d) => a + d.w, 0);
  for (const s of spots) {
    const t = clamp((s.n * 0.5 + 0.5) * 0.7 + s.c * 0.3, 0, 0.999) * wsum;
    let a = 0, vi = 0;
    for (let i = 0; i < defs.length; i++) { a += defs[i].w; if (t < a) { vi = i; break; } }
    groups[vi].push(s);
    addObs(s.x, s.z, Math.max(0.28, Math.min(0.9, variants[vi].trunkR * s.s * 0.6)));
  }
  variants.forEach((v, i) => { if (groups[i].length) { chunkInstances(scene, v, groups[i], chunks, chunkSize, 0); chunkInstances(scene, lites[i], groups[i], chunks, chunkSize, 1); } });
  await step('Menanam semak…', 0.4);

  /* semak */
  const bushDefs = [['Bush 1', 31, 1.5], ['Bush 2', 32, 1.2], ['Bush 3', 33, 1.4]];
  const bushVars = bushDefs.map((d) => { const v = makeVariant(d[0], { seed: d[1], height: d[2], lite: true, liteLeaf: 0.6 }); v.bush = true; return v; });
  const bs = [[], [], []], rb = rng(99);
  for (let i = 0, t = 0; i < 150 && t < 3000; t++) {
    const x = (rb() * 2 - 1) * 108, z = (rb() * 2 - 1) * 108, h = heightAt(x, z);
    if (h < WATER + 0.7 || Math.hypot(x, z) < 6 || pathDist(x, z) < 1.8) continue;
    bs[i % 3].push({ x, y: h, z, s: 0.7 + rb() * 0.7, r: rb(), c: rb() }); i++;
  }
  bushVars.forEach((v, i) => chunkInstances(scene, v, bs[i], chunks, chunkSize, 0));
  await step('Menanam rumput…', 0.5);

  /* pohon bertanda */
  const heroObjs = [], heroHits = [];
  for (let i = 0; i < heroes.length; i++) {
    const H = heroes[i], st = HERO_STYLE[H.id];
    const v = makeVariant(st.preset, st);
    const g = new THREE.Group(), y = heightAt(H.x, H.z);
    g.position.set(H.x, y - 0.1, H.z); g.rotation.y = i * 2.1;
    const bark = new THREE.Mesh(v.barkGeo, v.barkMat), leaf = new THREE.Mesh(v.leafGeo, v.leafMat);
    leaf.customDepthMaterial = v.depthMat; leaf.userData.noAO = true;
    for (const m of [bark, leaf]) { m.castShadow = true; m.receiveShadow = true; m.scale.setScalar(v.scale); g.add(m); }
    if (st.roots) { /* akar gantung beringin: satu mesh gabungan, murah */
      const rr = rng(88 + i), parts = [];
      for (let q = 0; q < 34; q++) {
        const a = rr() * TAU, d = 1.2 + Math.pow(rr(), 0.7) * 5.2, rad = 0.012 + rr() * 0.02;
        const top = 4.2 + rr() * 3.6, hh = top - (rr() < 0.35 ? 0 : rr() * (top - 0.6)); /* sebagian menyentuh tanah, sebagian menggantung */
        const cg = new THREE.CylinderGeometry(rad * 0.5, rad, hh, 4, 3, true); cg.translate(0, -hh / 2, 0);
        const p3 = cg.attributes.position; for (let k = 0; k < p3.count; k++) { const yy = p3.getY(k); p3.setX(k, p3.getX(k) + Math.sin(yy * 1.7 + q) * 0.05); }
        cg.rotateZ((rr() - 0.5) * 0.1); cg.translate(Math.cos(a) * d, top, Math.sin(a) * d); parts.push(cg);
      }
      const rm = new THREE.Mesh(mergeGeometries(parts), v.barkMat); rm.castShadow = true; g.add(rm);
    }
    scene.add(g);
    H.top = v.height; /* dipakai penanda dan kolom klik */
    const mk = new THREE.Mesh(new THREE.OctahedronGeometry(0.5, 0), new THREE.MeshStandardMaterial({ color: 0xffd35a, emissive: 0xffa800, emissiveIntensity: 2.2, roughness: 0.3 }));
    mk.position.set(H.x, y + v.height + 2.2, H.z); mk.userData.noAO = true; scene.add(mk);
    const rg = new THREE.RingGeometry(1.9, 2.15, 64, 1); rg.rotateX(-Math.PI / 2);
    { const pp = rg.attributes.position; for (let q = 0; q < pp.count; q++) pp.setY(q, heightAt(H.x + pp.getX(q), H.z + pp.getZ(q)) - y + 0.14); }
    const ring = new THREE.Mesh(rg, new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 1.7, 0.5), transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthWrite: false }));
    ring.position.set(H.x, y, H.z); ring.userData.noAO = true; scene.add(ring);
    const hit = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 2.6, v.height + 2, 8), new THREE.MeshBasicMaterial({ visible: false }));
    hit.position.set(H.x, y + (v.height + 2) / 2, H.z); hit.userData.hero = i; scene.add(hit);
    heroHits.push(hit); heroObjs.push({ g, mk, ring, y });
    addObs(H.x, H.z, Math.max(0.8, v.trunkR * 0.9));
    await step('Menumbuhkan pohon bertanda…', 0.5 + 0.2 * (i + 1) / heroes.length);
  }

  /* rumput */
  const grass = buildGrass(scene, quality === 'hemat' ? 8000 : 34000);
  grass.maxCount = 34000;

  /* batu dan bunga */
  await step('Menata batu dan bunga…', 0.78);
  const rockGeo = [];
  try {
    const rr = rng(404), m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), p = new THREE.Vector3(), sc = new THREE.Vector3();
    for (const f of ['rock1', 'rock2', 'rock3']) {
      const gl = await loadGlb('assets/models/' + f + '.glb');
      const parts = normalizedMeshes(gl.scene, 1);
      const N = 16;
      for (const part of parts) {
        const im = new THREE.InstancedMesh(part.geo, part.mat, N);
        for (let i = 0; i < N; i++) {
          let x, z, h, t = 0;
          do { const a = rr() * TAU, d = rr() < 0.4 ? LAKE.r + 2 + rr() * 8 : 12 + rr() * 95; x = (rr() < 0.4 ? LAKE.x : 0) + Math.cos(a) * d; z = (rr() < 0.4 ? LAKE.z : 0) + Math.sin(a) * d; h = heightAt(x, z); t++; } while ((h < WATER - 0.3 || Math.hypot(x, z) < 8 || pathDist(x, z) < 2 || Math.abs(x) > 110 || Math.abs(z) > 110) && t < 40);
          const s = 0.5 + rr() * rr() * 2.4;
          e.set((rr() - 0.5) * 0.4, rr() * TAU, (rr() - 0.5) * 0.4); q.setFromEuler(e); p.set(x, h + s * 0.06, z); sc.set(s * (0.9 + rr() * 0.4), s * (0.7 + rr() * 0.3), s);
          m4.compose(p, q, sc); im.setMatrixAt(i, m4);
          if (s > 1.2 && part === parts[0]) addObs(x, z, s * 0.42);
        }
        im.castShadow = true; im.receiveShadow = true; im.instanceMatrix.needsUpdate = true; scene.add(im); rockGeo.push(im);
      }
    }
  } catch (err) { console.warn('rock load failed', err); }
  try {
    const rf = rng(808), m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), p = new THREE.Vector3(), sc = new THREE.Vector3();
    const spotsF = [];
    for (let i = 0, t = 0; i < 80 && t < 2000; t++) {
      const a = rf() * TAU, d = 5 + rf() * 55, x = Math.cos(a) * d, z = Math.sin(a) * d, h = heightAt(x, z);
      if (h < WATER + 0.6 || pathDist(x, z) < 1.4) continue;
      for (let k = 0; k < 3; k++) { const ax = x + (rf() - 0.5) * 3, az = z + (rf() - 0.5) * 3, ah = heightAt(ax, az); if (ah > WATER + 0.5) spotsF.push({ x: ax, y: ah, z: az, s: 0.7 + rf() * 0.6, r: rf() * TAU }); }
      i++;
    }
    for (const f of ['flower_blue', 'flower_white', 'flower_yellow']) {
      const gl = await loadGlb('assets/models/' + f + '.glb');
      const parts = normalizedMeshes(gl.scene, 0.4);
      const mine = spotsF.filter((_, i) => i % 3 === ['flower_blue', 'flower_white', 'flower_yellow'].indexOf(f));
      for (const part of parts) {
        const im = new THREE.InstancedMesh(part.geo, part.mat, mine.length);
        mine.forEach((s, i) => { e.set(0, s.r, 0); q.setFromEuler(e); p.set(s.x, s.y - 0.02, s.z); sc.setScalar(s.s); m4.compose(p, q, sc); im.setMatrixAt(i, m4); });
        im.instanceMatrix.needsUpdate = true; im.frustumCulled = false; im.userData.noAO = true; scene.add(im);
      }
    }
  } catch (err) { console.warn('flower load failed', err); }
  await step('Selesai', 1);

  const info = { treeVariants: variants.map((v, i) => ({ b: v.btris, l: v.ltris, lb: lites[i].btris, ll: lites[i].ltris })), bush: bushVars.map((v) => ({ b: v.btris, l: v.ltris })), chunkCount: chunks.length };
  return {
    heroObjs, heroHits, grass, chunks, info,
    setQuality(q) {
      lowDetail.v = q === 'hemat';
      /* Hemat: batang pohon sekitar tidak ikut pass bayangan (bayangan tajuk tetap ada) */
      for (const c of chunks) if (c.lod === 0 && !c.bush) c.meshes[0].castShadow = !lowDetail.v;
      grass.geo.instanceCount = q === 'hemat' ? 8000 : 34000;
    },
    update(P, T, dt) {
      windU.uTime.value = T;
      grass.u.uPlayer.value.set(P.x, P.y, P.z);
      const cull = lowDetail.v ? 60 : 130, lodD = lowDetail.v ? 17 : 42, thin = lowDetail.v ? 0.45 : 1;
      for (const c of chunks) {
        const d = Math.hypot(P.x - c.cx, P.z - c.cz) - c.half;
        let vis;
        if (c.bush) vis = d < cull * 0.38; else if (c.lod === 0) vis = d < lodD; else vis = d >= lodD && d < cull;
        for (const m of c.meshes) { m.visible = vis; if (vis) m.count = Math.max(1, Math.ceil(c.n * (c.bush ? 1 : thin))); }
      }
    },
  };
}
