import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

/* Satu pipeline per scene: Render (MSAA, HDR) -> GTAO -> Bloom -> Output (ACES).
   Mode "Hemat" mematikan GTAO dan bloom, tapi tetap lewat tone mapping yang sama
   supaya warna kabut dan langit konsisten di kedua mode. */
export function createFX(renderer, scene, camera, opts = {}) {
  const rt = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: 4 });
  const composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));

  const gtao = new GTAOPass(scene, camera, 4, 4);
  gtao.blendIntensity = opts.aoStrength ?? 1;
  gtao.updateGtaoMaterial({ radius: opts.aoRadius ?? 0.7, distanceExponent: 1, thickness: 1.5, scale: 1, samples: 12, distanceFallOff: 1, screenSpaceRadius: false });
  gtao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 5, rings: 2, samples: 12 });
  /* objek bertanda noAO (daun alpha-test, rumput GPU, langit, air) tidak ikut G-buffer */
  const ov = gtao._overrideVisibility.bind(gtao);
  gtao._overrideVisibility = function () {
    ov();
    scene.traverse((o) => { if (o.userData && o.userData.noAO && o.visible) { o.visible = false; gtao._visibilityCache.push(o); } });
  };
  composer.addPass(gtao);

  const bloom = new UnrealBloomPass(new THREE.Vector2(4, 4), opts.bloomStrength ?? 0.3, 0.7, opts.bloomThreshold ?? 1.0);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  return {
    composer, gtao, bloom,
    setSize(w, h, pr) { composer.setPixelRatio(pr); composer.setSize(w, h); },
    setQuality(q) {
      gtao.enabled = bloom.enabled = q === 'tinggi';
      const n = q === 'tinggi' ? 4 : 2; /* MSAA lebih ringan di mode Hemat */
      for (const t of [composer.renderTarget1, composer.renderTarget2]) if (t.samples !== n) { t.samples = n; t.dispose(); }
    },
    render(dt) { composer.render(dt); },
    dispose() { composer.dispose && composer.dispose(); },
  };
}
