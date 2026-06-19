import * as THREE from 'three';
import { addMesh, mat, disposeObject3D } from './ModelUtils';
import { IS_MOBILE } from './platform';

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

export class SkyEffects {
  private root = new THREE.Group();
  private ufos: SkyUfo[] = [];
  private stars: ShootingStar[] = [];
  private starTimer = 0;
  private night = 0;

  constructor(private scene: THREE.Scene) {
    this.scene.add(this.root);
    this.root.name = 'skyEffects';
  }

  build(levelLength: number, rng: () => number): void {
    this.clear();
    const count = IS_MOBILE ? 4 : 7;
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
      u.group.visible = n > 0.25 || !IS_MOBILE;
      u.group.traverse((c) => {
        if (c instanceof THREE.Mesh && c.userData.isUfoBeam) {
          (c.material as THREE.MeshBasicMaterial).opacity = 0.08 + n * 0.12;
        }
      });
    }
  }

  update(time: number, dt: number, playerZ: number): void {
    this.root.position.set(0, 0, 0);

    for (const u of this.ufos) {
      if (Math.abs(u.worldZ - playerZ) > (IS_MOBILE ? 90 : 120)) {
        u.group.visible = false;
        continue;
      }
      u.group.visible = this.night > 0.2 || !IS_MOBILE;
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
  }

  clear(): void {
    for (const s of this.stars) {
      this.root.remove(s.mesh);
      s.mesh.geometry.dispose();
      (s.mesh.material as THREE.Material).dispose();
    }
    this.stars = [];
    for (const u of this.ufos) disposeObject3D(u.group);
    this.ufos = [];
    while (this.root.children.length) this.root.remove(this.root.children[0]);
  }

  dispose(): void {
    this.clear();
    this.scene.remove(this.root);
  }
}
