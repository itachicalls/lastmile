import * as THREE from 'three';
import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { IS_MOBILE } from './platform';

/** Lightweight synthwave grade: vignette + chromatic aberration + saturation punch. */
export class ArcadePostPass extends Pass {
  private material: THREE.ShaderMaterial;
  private fsQuad: FullScreenQuad;

  constructor() {
    super();
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: null },
        vignette: { value: IS_MOBILE ? 0.28 : 0.38 },
        aberration: { value: IS_MOBILE ? 0.0012 : 0.0022 },
        saturation: { value: IS_MOBILE ? 1.06 : 1.12 },
        pulse: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float vignette;
        uniform float aberration;
        uniform float saturation;
        uniform float pulse;
        varying vec2 vUv;
        void main() {
          vec2 uv = vUv;
          vec2 dir = uv - 0.5;
          float ab = aberration * (1.0 + pulse * 2.5);
          vec3 col;
          col.r = texture2D(tDiffuse, uv + dir * ab).r;
          col.g = texture2D(tDiffuse, uv).g;
          col.b = texture2D(tDiffuse, uv - dir * ab).b;
          float luma = dot(col, vec3(0.299, 0.587, 0.114));
          float sat = saturation + pulse * 0.18;
          col = mix(vec3(luma), col, sat);
          float vig = 1.0 - dot(dir, dir) * vignette * 2.4;
          col *= clamp(vig, 0.0, 1.0);
          col *= 1.0 + pulse * 0.14;
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
    this.fsQuad = new FullScreenQuad(this.material);
  }

  setPulse(v: number): void {
    this.material.uniforms.pulse.value = v;
  }

  render(
    renderer: THREE.WebGLRenderer,
    writeBuffer: THREE.WebGLRenderTarget,
    readBuffer: THREE.WebGLRenderTarget
  ): void {
    this.material.uniforms.tDiffuse.value = readBuffer.texture;
    if (this.renderToScreen) {
      renderer.setRenderTarget(null);
      this.fsQuad.render(renderer);
    } else {
      renderer.setRenderTarget(writeBuffer);
      this.fsQuad.render(renderer);
    }
  }

  dispose(): void {
    this.material.dispose();
    this.fsQuad.dispose();
  }
}
