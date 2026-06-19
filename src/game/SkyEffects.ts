import * as THREE from 'three';
import { addMesh, mat, disposeObject3D } from './ModelUtils';
import { IS_MOBILE } from './platform';
import type { SpectacleKind } from './SpectacleDirector';

type SkyUfo = {
  group: THREE.Group;
  worldZ: number;
  baseX: number;
  baseY: number;
  phase: number;
  speed: number;
};

type ShootingStar = {
  mesh: THREE.Mesh;
  vx: number;
  vy: number;
  vz: number;
  life: number;
};

type WarFlash = {
  mesh: THREE.Mesh;
  life: number;
};

type SkyJet = {
  group: THREE.Group;
  life: number;
};

export class SkyEffects {
  private root = new THREE.Group();
  private ufos: SkyUfo[] = [];
  private stars: ShootingStar[] = [];
  private warFlashes: WarFlash[] = [];
  private jets: SkyJet[] = [];
  private starTimer = 0;
  private night = 0;

  constructor(private scene: THREE.Scene) {
    this.scene.add(this.root);
    this.root.name = 'skyEffects';
  }

  build(levelLength: number, rng: () => number): void {
    this.clear();
    const count = IS_MOBILE ? 4 : 5;
    for (let i = 0; i < count; i++) {
      const z = 40 + rng() * (levelLength + 80);
      const ufo = this.makeSkyUfo(rng);
      const bx = (rng() - 0.5) * 55;
      const by = 22 + rng() * 16;
      ufo.position.set(bx, by, z);
      this.root.add(ufo);
      this.ufos.push({ group: ufo, worldZ: z, baseX: bx, baseY: by, phase: rng() * 10, speed: 0.4 + rng() * 0.5 });
    }
  }

  private makeSkyUfo(rng: () => number): THREE.Group {
    const g = new THREE.Group();
    g.userData.isSkyUfo = true;
    addMesh(
      g,
      new THREE.CylinderGeometry(0.55, 0.85, 0.12, IS_MOBILE ? 8 : 12),
      mat('#78909C', { metalness: 0.55, roughness: 0.35, emissive: '#00E676', emissiveIntensity: 0.25 }),
      0,
      0,
      0
    );
    addMesh(
      g,
      new THREE.TorusGeometry(0.72, 0.03, 6, IS_MOBILE ? 10 : 14),
      mat('#69F0AE', { emissive: '#00E676', emissiveIntensity: 0.85 }),
      0,
      -0.04,
      0
    );
    addMesh(
      g,
      new THREE.SphereGeometry(0.28, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2),
      mat('#80DEEA', { transparent: true, opacity: 0.55, emissive: '#00BCD4', emissiveIntensity: 0.45 }),
      0,
      0.12,
      0
    );
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2;
      addMesh(
        g,
        new THREE.BoxGeometry(0.06, 0.06, 0.06),
        mat(i % 2 === 0 ? '#FFEB3B' : '#FF1744', { emissive: i % 2 === 0 ? '#FFC107' : '#FF1744', emissiveIntensity: 0.9 }),
        Math.cos(a) * 0.65,
        -0.02,
        Math.sin(a) * 0.65
      );
    }
    const beam = addMesh(
      g,
      new THREE.CylinderGeometry(0.02, 0.35, 2.2, 8, 1, true),
      new THREE.MeshBasicMaterial({ color: '#69F0AE', transparent: true, opacity: 0.12, side: THREE.DoubleSide, depthWrite: false }),
      0,
      -1.1,
      0,
      false
    );
    beam.userData.isUfoBeam = true;
    g.rotation.y = rng() * Math.PI * 2;
    return g;
  }

  private spawnShootingStar(playerZ: number, rng: () => number): void {
    if (this.stars.length >= (IS_MOBILE ? 2 : 4)) return;
    const streak = addMesh(
      this.root,
      new THREE.BoxGeometry(0.04, 0.04, 2.8),
      new THREE.MeshBasicMaterial({ color: '#FFFFFF', transparent: true, opacity: 0.92 }),
      (rng() - 0.5) * 40,
      28 + rng() * 12,
      playerZ + 30 + rng() * 40,
      false
    );
    streak.rotation.x = -0.6 - rng() * 0.4;
    streak.rotation.z = (rng() - 0.5) * 0.8;
    const tail = addMesh(
      streak,
      new THREE.BoxGeometry(0.12, 0.12, 1.2),
      new THREE.MeshBasicMaterial({ color: '#80DEEA', transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending }),
      0,
      0,
      1.4,
      false
    );
    tail.userData.isTail = true;
    this.stars.push({
      mesh: streak,
      vx: (rng() - 0.5) * 8,
      vy: -18 - rng() * 12,
      vz: -25 - rng() * 15,
      life: 0.9 + rng() * 0.4,
    });
  }

  setNight(n: number): void {
    this.night = n;
    for (const u of this.ufos) {
      u.group.visible = n > 0.25;
      u.group.traverse((c) => {
        if (c instanceof THREE.Mesh && c.userData.isUfoBeam) {
          (c.material as THREE.MeshBasicMaterial).opacity = 0.08 + n * 0.12;
        }
      });
    }
  }

  playSpectacle(kind: SpectacleKind, playerZ: number): void {
    if (kind === 'dogfight') {
      this.spawnJet(playerZ + 35 + Math.random() * 20, -1);
      this.spawnJet(playerZ + 38 + Math.random() * 20, 1);
      return;
    }
    if (kind === 'meteor-streak') {
      for (let i = 0; i < (IS_MOBILE ? 2 : 4); i++) {
        this.spawnShootingStar(playerZ, Math.random);
      }
      return;
    }
    const count = kind === 'distant-barrage' ? (IS_MOBILE ? 2 : 4) : IS_MOBILE ? 1 : 2;
    for (let i = 0; i < count; i++) {
      this.spawnWarFlash(playerZ + 25 + Math.random() * 45, kind);
    }
  }

  private spawnWarFlash(z: number, kind: SpectacleKind): void {
    const x = (Math.random() - 0.5) * 50;
    const color =
      kind === 'orbital-flash' ? '#FF5252' : kind === 'energy-surge' ? '#00E5FF' : '#FFAB40';
    const flash = addMesh(
      this.root,
      new THREE.PlaneGeometry(3.5 + Math.random() * 4, 2 + Math.random() * 2),
      new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
      x,
      6 + Math.random() * 8,
      z,
      false
    );
    flash.rotation.y = (Math.random() - 0.5) * 0.6;
    this.warFlashes.push({ mesh: flash, life: 0.35 + Math.random() * 0.35 });
  }

  private spawnJet(z: number, side: number): void {
    const g = new THREE.Group();
    g.position.set(side * 22, 16 + Math.random() * 6, z);
    addMesh(g, new THREE.ConeGeometry(0.35, 1.2, 5), mat('#546E7A', { metalness: 0.6 }), 0, 0, 0);
    addMesh(
      g,
      new THREE.PlaneGeometry(0.8, 0.25),
      new THREE.MeshBasicMaterial({ color: '#FF5252', transparent: true, opacity: 0.7 }),
      -0.5,
      0,
      0,
      false
    );
    g.rotation.y = side > 0 ? -Math.PI / 2 : Math.PI / 2;
    g.rotation.z = side * 0.15;
    this.root.add(g);
    this.jets.push({ group: g, life: 3.5 });
  }

  update(time: number, dt: number, playerZ: number): void {
    this.root.position.set(0, 0, 0);

    for (const u of this.ufos) {
      if (Math.abs(u.worldZ - playerZ) > (IS_MOBILE ? 90 : 120)) {
        u.group.visible = false;
        continue;
      }
      u.group.visible = this.night > 0.2;
      u.group.position.set(
        u.baseX + Math.sin(time * 0.15 + u.phase) * 2.5,
        u.baseY + Math.sin(time * u.speed + u.phase) * 1.2,
        u.worldZ
      );
      u.group.rotation.y += dt * (0.25 + u.speed * 0.15);
    }

    if (this.night > 0.45) {
      this.starTimer += dt;
      const interval = IS_MOBILE ? 2.2 : 1.1;
      if (this.starTimer >= interval) {
        this.starTimer = 0;
        this.spawnShootingStar(playerZ, Math.random);
      }
    }

    for (let i = this.stars.length - 1; i >= 0; i--) {
      const s = this.stars[i];
      s.life -= dt;
      s.mesh.position.x += s.vx * dt;
      s.mesh.position.y += s.vy * dt;
      s.mesh.position.z += s.vz * dt;
      (s.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, s.life);
      if (s.life <= 0 || s.mesh.position.y < 8) {
        this.root.remove(s.mesh);
        s.mesh.geometry.dispose();
        (s.mesh.material as THREE.Material).dispose();
        s.mesh.traverse((c) => {
          if (c instanceof THREE.Mesh && c !== s.mesh) {
            c.geometry.dispose();
            (c.material as THREE.Material).dispose();
          }
        });
        this.stars.splice(i, 1);
      }
    }

    for (let i = this.warFlashes.length - 1; i >= 0; i--) {
      const f = this.warFlashes[i];
      f.life -= dt;
      const m = f.mesh.material as THREE.MeshBasicMaterial;
      m.opacity = Math.max(0, f.life * 2.2);
      f.mesh.scale.setScalar(1 + (0.35 - f.life) * 2);
      if (f.life <= 0) {
        this.root.remove(f.mesh);
        f.mesh.geometry.dispose();
        m.dispose();
        this.warFlashes.splice(i, 1);
      }
    }

    for (let i = this.jets.length - 1; i >= 0; i--) {
      const j = this.jets[i];
      j.life -= dt;
      j.group.position.x += dt * 14 * Math.sign(j.group.position.x || 1);
      j.group.position.z -= dt * 6;
      if (j.life <= 0 || Math.abs(j.group.position.z - playerZ) > 100) {
        disposeObject3D(j.group);
        this.jets.splice(i, 1);
      }
    }
  }

  clear(): void {
    for (const s of this.stars) {
      this.root.remove(s.mesh);
      s.mesh.geometry.dispose();
      (s.mesh.material as THREE.Material).dispose();
    }
    this.stars = [];
    for (const f of this.warFlashes) {
      this.root.remove(f.mesh);
      f.mesh.geometry.dispose();
      (f.mesh.material as THREE.Material).dispose();
    }
    this.warFlashes = [];
    for (const j of this.jets) disposeObject3D(j.group);
    this.jets = [];
    for (const u of this.ufos) disposeObject3D(u.group);
    this.ufos = [];
    while (this.root.children.length) this.root.remove(this.root.children[0]);
  }

  dispose(): void {
    this.clear();
    this.scene.remove(this.root);
  }
}
