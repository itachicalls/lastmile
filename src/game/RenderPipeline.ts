import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { BLOOM_RES_SCALE, IS_MOBILE } from './platform';
import { ArcadePostPass } from './ArcadePostPass';

export class RenderPipeline {
  private composer: EffectComposer;
  private bloomPass: UnrealBloomPass;
  private gradePass: ArcadePostPass;

  constructor(
    private renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.Camera
  ) {
    this.composer = new EffectComposer(renderer);
    this.composer.addPass(new RenderPass(scene, camera));

    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(1, 1),
      IS_MOBILE ? 0.34 : 0.38,
      IS_MOBILE ? 0.32 : 0.36,
      IS_MOBILE ? 0.85 : 0.78
    );
    this.composer.addPass(this.bloomPass);

    this.gradePass = new ArcadePostPass();
    this.gradePass.renderToScreen = true;
    this.composer.addPass(this.gradePass);
  }

  setSize(width: number, height: number): void {
    this.composer.setSize(width, height);
    const bw = Math.max(1, Math.floor(width * BLOOM_RES_SCALE));
    const bh = Math.max(1, Math.floor(height * BLOOM_RES_SCALE));
    this.bloomPass.resolution.set(bw, bh);
  }

  setBloomStrength(strength: number): void {
    this.bloomPass.strength = strength;
  }

  setGradePulse(pulse: number): void {
    this.gradePass.setPulse(pulse);
  }

  render(): void {
    this.composer.render();
  }

  dispose(): void {
    this.gradePass.dispose();
    this.composer.dispose();
  }
}
