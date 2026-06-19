import * as THREE from 'three';
import { addMesh, disposeObject3D } from './ModelUtils';
import { IS_MOBILE } from './platform';

export type UfoHazardPhase = 'idle' | 'incoming' | 'scanning' | 'exit';

/** Night-only fly-over that sweeps an abduction beam across lanes. */
export class UfoSpotlightHazard {
  private group = new THREE.Group();
  private ufo: THREE.Group;
  private groundSpot: THREE.Mesh;
  private beam: THREE.Mesh;
  private ring: THREE.Mesh;

  phase: UfoHazardPhase = 'idle';
  beamX = 0;
  beamZ = 0;
  private timer = 0;
  private scanDir = 1;
  private ufoOffsetX = 0;
  private exposure = 0;
  private warned = false;

  constructor(private scene: THREE.Scene) {
    this.ufo = this.buildUfo();
    this.group.add(this.ufo);

    const spotSeg = IS_MOBILE ? 20 : 28;
    this.groundSpot = addMesh(
      this.group,
      new THREE.CircleGeometry(1.05, spotSeg),
      new THREE.MeshBasicMaterial({
        color: '#69F0AE',
        transparent: true,
        opacity: 0.55,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
      0,
      0.04,
      0,
      false
    );
    this.groundSpot.rotation.x = -Math.PI / 2;
    this.groundSpot.scale.set(1.15, 1.15, 1);

    this.ring = addMesh(
      this.group,
      new THREE.RingGeometry(0.92, 1.18, spotSeg),
      new THREE.MeshBasicMaterial({
        color: '#B2FF59',
        transparent: true,
        opacity: 0.42,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
      0,
      0.045,
      0,
      false
    );
    this.ring.rotation.x = -Math.PI / 2;

    this.beam = addMesh(
      this.group,
      new THREE.CylinderGeometry(0.08, 1.05, 14, spotSeg, 1, true),
      new THREE.MeshBasicMaterial({
        color: '#80DEEA',
        transparent: true,
        opacity: 0.28,
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
      0,
      7,
      0,
      false
    );

    this.group.visible = false;
    scene.add(this.group);
  }

  private buildUfo(): THREE.Group {
    const g = new THREE.Group();
    const seg = IS_MOBILE ? 10 : 14;
    addMesh(
      g,
      new THREE.CylinderGeometry(0.65, 1.05, 0.16, seg),
      new THREE.MeshStandardMaterial({
        color: '#546E7A',
        metalness: 0.65,
        roughness: 0.3,
        emissive: '#00E676',
        emissiveIntensity: 0.35,
      }),
      0,
      0,
      0
    );
    addMesh(
      g,
      new THREE.TorusGeometry(0.88, 0.04, 6, seg),
      new THREE.MeshBasicMaterial({ color: '#69F0AE', transparent: true, opacity: 0.85 }),
      0,
      -0.05,
      0,
      false
    );
    addMesh(
      g,
      new THREE.SphereGeometry(0.34, seg, seg / 2, 0, Math.PI * 2, 0, Math.PI / 2),
      new THREE.MeshBasicMaterial({
        color: '#80DEEA',
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
      0,
      0.14,
      0,
      false
    );
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      addMesh(
        g,
        new THREE.SphereGeometry(0.05, 6, 6),
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? '#FFEB3B' : '#FF5252',
          transparent: true,
          opacity: 0.9,
        }),
        Math.cos(a) * 0.78,
        -0.02,
        Math.sin(a) * 0.78,
        false
      );
    }
    return g;
  }

  get active(): boolean {
    return this.phase !== 'idle';
  }

  start(playerX: number, playerZ: number): void {
    this.phase = 'incoming';
    this.timer = 0;
    this.exposure = 0;
    this.warned = false;
    this.beamZ = playerZ + 42;
    this.beamX = THREE.MathUtils.clamp(playerX, -2.5, 2.5);
    this.scanDir = Math.random() < 0.5 ? 1 : -1;
    this.ufoOffsetX = this.scanDir > 0 ? -14 : 14;
    this.group.visible = true;
    this.syncPose(0);
  }

  private syncPose(time: number): void {
    const ufoX = this.beamX + this.ufoOffsetX * (this.phase === 'incoming' ? 1 : this.phase === 'exit' ? 1.4 : 0.15);
    const ufoY = 14 + Math.sin(time * 2.2) * 0.35;
    this.ufo.position.set(ufoX, ufoY, this.beamZ);
    this.ufo.rotation.y = time * 1.8;

    this.groundSpot.position.set(this.beamX, 0.04, this.beamZ);
    this.ring.position.set(this.beamX, 0.045, this.beamZ);
    this.beam.position.set(this.beamX, 7, this.beamZ);

    const pulse = 1 + Math.sin(time * 8) * 0.08;
    this.groundSpot.scale.set(1.15 * pulse, 1.15 * pulse, 1);
    (this.groundSpot.material as THREE.MeshBasicMaterial).opacity = 0.4 + Math.sin(time * 6) * 0.12;
    (this.ring.material as THREE.MeshBasicMaterial).opacity = 0.32 + Math.sin(time * 5 + 1) * 0.1;
    this.ring.rotation.z = time * 2.4;
    (this.beam.material as THREE.MeshBasicMaterial).opacity = 0.22 + Math.sin(time * 7) * 0.08;
  }

  update(dt: number, time: number, playerZ: number): void {
    if (this.phase === 'idle') return;

    this.timer += dt;

    if (this.phase === 'incoming') {
      this.ufoOffsetX = THREE.MathUtils.lerp(this.ufoOffsetX, 0, dt * 1.8);
      if (this.timer >= 1.6) {
        this.phase = 'scanning';
        this.timer = 0;
      }
    } else if (this.phase === 'scanning') {
      this.beamX += this.scanDir * dt * 4.2;
      if (this.beamX > 3.4) {
        this.beamX = 3.4;
        this.scanDir = -1;
      } else if (this.beamX < -3.4) {
        this.beamX = -3.4;
        this.scanDir = 1;
      }
      if (this.timer >= 4.8) {
        this.phase = 'exit';
        this.timer = 0;
      }
    } else if (this.phase === 'exit') {
      this.ufoOffsetX = THREE.MathUtils.lerp(this.ufoOffsetX, this.scanDir * 18, dt * 2.5);
      if (this.timer >= 1.4) {
        this.end();
        return;
      }
    }

    if (Math.abs(this.beamZ - playerZ) > (IS_MOBILE ? 75 : 95)) {
      this.end();
      return;
    }

    this.syncPose(time);
  }

  /** True once when scanning begins — for toast/SFX. */
  consumeWarning(): boolean {
    if (this.warned || this.phase !== 'scanning' || this.timer > 0.35) return false;
    this.warned = true;
    return true;
  }

  /** Returns true if beam should damage this frame (after brief exposure). */
  tickExposure(dt: number, playerX: number, playerZ: number, dodging: boolean): boolean {
    if (this.phase !== 'scanning') {
      this.exposure = 0;
      return false;
    }
    if (dodging) {
      this.exposure = Math.max(0, this.exposure - dt * 4);
      return false;
    }
    const inZ = Math.abs(playerZ - this.beamZ) < 2.2;
    const inX = Math.abs(playerX - this.beamX) < 1.05;
    if (inZ && inX) {
      this.exposure += dt;
      return this.exposure >= 0.55;
    }
    this.exposure = Math.max(0, this.exposure - dt * 2.5);
    return false;
  }

  getExposure(): number {
    return this.exposure;
  }

  end(): void {
    this.phase = 'idle';
    this.group.visible = false;
    this.exposure = 0;
  }

  dispose(): void {
    this.scene.remove(this.group);
    disposeObject3D(this.group);
  }
}
