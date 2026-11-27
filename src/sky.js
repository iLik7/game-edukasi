import * as THREE from 'three';
import { TAU, clamp, lerp, smooth, rng } from './util.js';

/* Langit prosedural: gradien, cakram matahari (HDR, supaya bloom menangkapnya),
   awan fbm, dan bintang. Warna cakrawala dipakai sebagai warna kabut sehingga
   medan jauh menyatu dengan langit. Kubah yang sama dirender ke PMREM untuk IBL. */

const VERT = /* glsl */`
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  gl_Position.z = gl_Position.w; // selalu di bidang jauh
}`;

const FRAG = /* glsl */`
uniform vec3 uZenith, uHorizon, uBelow, uSunDir, uSunColor, uCloudLit, uCloudDark;
uniform float uTime, uCloud, uSunDisc;
varying vec3 vDir;
float h21(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
float fbm(vec2 p){ float a=.5, s=0.; for(int i=0;i<5;i++){ s+=a*vn(p); p=p*2.03+vec2(17.1,9.2); a*=.5; } return s; }
void main(){
  vec3 d = normalize(vDir);
  float y = d.y;
  vec3 col = y >= 0. ? mix(uHorizon, uZenith, pow(clamp(y,0.,1.), 0.42)) : mix(uHorizon, uBelow, smoothstep(0.,0.35,-y));
  float sd = max(dot(d, uSunDir), 0.);
  col += uSunColor * (pow(sd, 6.) * 0.10 + pow(sd, 48.) * 0.35 + pow(sd, 700.) * 1.4);
  col += uSunColor * uSunDisc * smoothstep(0.99985, 0.99992, sd) * 40.;
  if (uCloud > 0.001 && y > 0.0) {
    vec2 uv = d.xz / (y + 0.16) * 0.55 + vec2(uTime * 0.006, uTime * 0.002);
    float n = fbm(uv);
    float cov = smoothstep(0.50, 0.78, n) * uCloud;
    float thick = fbm(uv * 2.3 + 5.0);
    vec3 cc = mix(uCloudLit, uCloudDark, smoothstep(0.35, 0.85, thick) * 0.75);
    cc += uSunColor * pow(sd, 5.) * 0.35 * (1. - cov * 0.5);
    cov *= smoothstep(0.0, 0.22, y);
    col = mix(col, cc, cov);
  }
  gl_FragColor = vec4(col, 1.0);
}`;

function makeUniforms() {
  return {
    uZenith: { value: new THREE.Color() }, uHorizon: { value: new THREE.Color() }, uBelow: { value: new THREE.Color() },
    uSunDir: { value: new THREE.Vector3(0, 1, 0) }, uSunColor: { value: new THREE.Color() },
    uCloudLit: { value: new THREE.Color() }, uCloudDark: { value: new THREE.Color() },
    uTime: { value: 0 }, uCloud: { value: 0.8 }, uSunDisc: { value: 1 },
  };
}
function makeDome(u, radius) {
  const m = new THREE.Mesh(
    new THREE.SphereGeometry(radius, 48, 32),
    new THREE.ShaderMaterial({ uniforms: u, vertexShader: VERT, fragmentShader: FRAG, side: THREE.BackSide, depthWrite: false, fog: false })
  );
  m.frustumCulled = false; m.renderOrder = -10; m.userData.noAO = true;
  return m;
}

const C = (r, g, b) => new THREE.Color().setRGB(r, g, b, THREE.LinearSRGBColorSpace);
const NIGHT = { z: C(0.003, 0.007, 0.024), h: C(0.012, 0.024, 0.06) };
const DAY = { z: C(0.05, 0.20, 0.58), h: C(0.50, 0.66, 0.84) };
const DUSK = { z: C(0.06, 0.12, 0.30), h: C(1.05, 0.40, 0.17) };
const tmp = new THREE.Color();

export function createSky(scene, renderer) {
  const U = makeUniforms();
  const dome = makeDome(U, 900);
  scene.add(dome);

  /* kubah terpisah untuk IBL (bawah = warna tanah) */
  const UE = makeUniforms();
  UE.uCloud.value = 0; UE.uSunDisc.value = 0.35;
  const envScene = new THREE.Scene();
  envScene.add(makeDome(UE, 50));
  const pmrem = new THREE.PMREMGenerator(renderer);
  let envRT = null;

  /* bintang + bulan */
  const stars = (() => {
    const r = rng(5), n = 700, a = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { const u = r() * TAU, v = r() * 0.95 + 0.05, rr = Math.sqrt(1 - v * v); a[i * 3] = Math.cos(u) * rr * 800; a[i * 3 + 1] = v * 800; a[i * 3 + 2] = Math.sin(u) * rr * 800; }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(a, 3));
    const p = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffffff, size: 1.6, sizeAttenuation: false, transparent: true, opacity: 0, fog: false, depthWrite: false }));
    p.frustumCulled = false; p.userData.noAO = true; scene.add(p); return p;
  })();
  const moon = new THREE.Mesh(new THREE.SphereGeometry(18, 24, 16), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 2.3, 2.6), fog: false, toneMapped: true }));
  moon.userData.noAO = true; scene.add(moon);

  /* cahaya */
  const sun = new THREE.DirectionalLight(0xffffff, 3);
  sun.castShadow = true;
  const sc = sun.shadow.camera; sc.left = -42; sc.right = 42; sc.top = 42; sc.bottom = -42; sc.near = 1; sc.far = 320;
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.05;
  scene.add(sun); scene.add(sun.target);
  const moonL = new THREE.DirectionalLight(0x7f95d8, 0); scene.add(moonL);

  scene.fog = new THREE.FogExp2(0xaabbcc, 0.0155);

  const sunDir = new THREE.Vector3();
  let envTimer = 99, lastElev = 9, isNight = false;
  const api = {
    sun, sunDir, day: 1, elev: 1, get isNight() { return isNight; },
    /* suasana bioma: kepadatan kabut dan rona cakrawala (diatur dari main) */
    fogD: 0.0155, tint: new THREE.Color(1, 1, 1),
    envEvery: 2.5,
    setShadowSize(px) {
      if (sun.shadow.mapSize.x === px) return;
      sun.shadow.mapSize.set(px, px);
      if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; }
    },
    update(tDay, T, dt, focus, under) {
      const a = (tDay - 0.25) * TAU, elev = Math.sin(a);
      const day = smooth(-0.12, 0.3, elev), twi = Math.exp(-Math.pow(elev / 0.2, 2));
      api.day = day; api.elev = elev;
      sunDir.set(Math.cos(a) * 0.8, elev, 0.45).normalize();

      for (const u of [U, UE]) {
        u.uZenith.value.copy(NIGHT.z).lerp(DAY.z, day).lerp(DUSK.z, twi * 0.5);
        u.uHorizon.value.copy(NIGHT.h).lerp(DAY.h, day).lerp(DUSK.h, twi * 0.75);
        u.uSunDir.value.copy(sunDir);
        u.uSunColor.value.setRGB(1.0, 0.62 + 0.38 * smooth(0, 0.5, elev), 0.38 + 0.62 * smooth(0, 0.6, elev)).multiplyScalar(smooth(-0.1, 0.08, elev));
        u.uCloudLit.value.setRGB(lerp(0.03, 0.95, day), lerp(0.04, 0.96, day), lerp(0.07, 1.0, day)).lerp(tmp.setRGB(1.3, 0.62, 0.38), twi * 0.65);
        u.uCloudDark.value.copy(u.uCloudLit.value).multiplyScalar(0.5).lerp(tmp.setRGB(0.05, 0.08, 0.16), 0.25);
        u.uTime.value = T;
      }
      UE.uBelow.value.setRGB(0.05, 0.07, 0.03).multiplyScalar(0.15 + 0.85 * day);
      U.uBelow.value.copy(U.uHorizon.value);

      scene.fog.color.copy(U.uHorizon.value).multiply(api.tint);
      /* bawah air: kabut pekat hijau-biru, langit disembunyikan */
      if (under) {
        scene.fog.color.setRGB(0.012, 0.06, 0.065).multiplyScalar(0.25 + 0.75 * day);
        scene.fog.density = 0.11; dome.visible = false; stars.visible = false; moon.visible = false;
        scene.background = scene.fog.color;
      } else { scene.fog.density = api.fogD; dome.visible = true; stars.visible = true; scene.background = null; }
      scene.environmentIntensity = 0.42 + 0.85 * day;

      const cx = focus.x, cy = focus.y, cz = focus.z;
      dome.position.set(cx, cy, cz);
      stars.position.set(cx, 0, cz); stars.material.opacity = Math.pow(1 - day, 2) * 0.95;
      moon.position.set(cx - sunDir.x * 700, cy - sunDir.y * 700, cz - sunDir.z * 700); moon.visible = elev < 0.1 && !under;

      /* matahari/bulan mengikuti pemain, dibulatkan agar bayangan tidak berkedip */
      const sx = Math.round(cx * 2) / 2, sz = Math.round(cz * 2) / 2;
      sun.position.set(sx + sunDir.x * 120, cy + sunDir.y * 120, sz + sunDir.z * 120);
      sun.target.position.set(sx, cy, sz); sun.target.updateMatrixWorld();
      sun.intensity = 6.0 * smooth(-0.02, 0.28, elev);
      sun.color.setRGB(1.0, 0.72 + 0.28 * smooth(0, 0.5, elev), 0.5 + 0.5 * smooth(0, 0.6, elev));
      sun.castShadow = elev > 0.01;
      moonL.intensity = 0.95 * (1 - day);
      moonL.position.set(cx - sunDir.x * 100, cy - sunDir.y * 100 + 20, cz - sunDir.z * 100);

      const night = day < 0.25; if (night !== isNight) isNight = night;

      envTimer += dt;
      if (envTimer > api.envEvery && Math.abs(elev - lastElev) > 0.002) { envTimer = 0; lastElev = elev; api.refreshEnv(scene); }
    },
    refreshEnv(target) {
      const next = pmrem.fromScene(envScene, 0, 0.1, 100, { size: 128 });
      if (envRT) envRT.dispose();
      envRT = next; target.environment = next.texture;
    },
  };
  return api;
}
