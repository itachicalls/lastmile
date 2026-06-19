import * as THREE from 'three';
import { IS_MOBILE } from './platform';

type Particle = {
  mesh: THREE.Mesh;
  vel: THREE.Vector3;
  life: number;
  maxLife: number;
  active: boolean;
};

const MAX_PARTICLES = IS_MOBILE ? 28 : 48;
const SHARED_GEO = new THREE.BoxGeometry(0.1, 0.1, 0.1);
const SPARK_GEO = new THREE.PlaneGeometry(0.14, 0.04);

export class ParticleSystem {
  private particles: Particle[] = [];
  private scene: THREE.Scene;
  private materials = new Map<string, THREE.MeshBasicMaterial>();

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    for (let i = 0; i < MAX_PARTICLES; i++) {
      const mat = this.getMaterial('#ffffff');
      const mesh = new THREE.Mesh(SHARED_GEO, mat);
      mesh.visible = false;
      this.scene.add(mesh);
      this.particles.push({
        mesh,
        vel: new THREE.Vector3(),
        life: 0,
        maxLife: 1,
        active: false,
      });
    }
  }

  private getMaterial(color: string, additive = true): THREE.MeshBasicMaterial {
    const key = `${color}|${additive ? 1 : 0}`;
    let m = this.materials.get(key);
    if (!m) {
      m = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
        depthWrite: false,
      });
      this.materials.set(key, m);
    }
    return m;
  }

  burst(x: number, y: number, z: number, color: string, count = 12, speed = 4): void {
    const cap = IS_MOBILE ? Math.min(count, 10) : count;
    let spawned = 0;
    for (const p of this.particles) {
      if (spawned >= cap) break;
      if (p.active) continue;
      p.active = true;
      p.mesh.visible = true;
      p.mesh.geometry = SHARED_GEO;
      p.mesh.material = this.getMaterial(color);
      p.mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      p.mesh.position.set(x, y, z);
      p.mesh.scale.setScalar(0.8 + Math.random() * 0.6);
      p.vel.set(
        (Math.random() - 0.5) * speed,
        Math.random() * speed * 0.85 + 1.2,
        (Math.random() - 0.5) * speed
      );
      p.maxLife = 0.55 + Math.random() * 0.45;
      p.life = p.maxLife;
      spawned++;
    }
  }

  sparkStreak(x: number, y: number, z: number, color: string, count = 4): void {
    let spawned = 0;
    const cap = IS_MOBILE ? 3 : count;
    for (const p of this.particles) {
      if (spawned >= cap) break;
      if (p.active) continue;
      p.active = true;
      p.mesh.visible = true;
      p.mesh.geometry = SPARK_GEO;
      p.mesh.material = this.getMaterial(color);
      p.mesh.position.set(x + (Math.random() - 0.5) * 0.4, y, z + (Math.random() - 0.5) * 0.4);
      p.mesh.rotation.y = Math.random() * Math.PI * 2;
      p.mesh.rotation.z = (Math.random() - 0.5) * 0.8;
      p.mesh.scale.setScalar(1.2 + Math.random());
      p.vel.set(0, 0.5 + Math.random(), -2 - Math.random() * 2);
      p.maxLife = 0.25 + Math.random() * 0.2;
      p.life = p.maxLife;
      spawned++;
    }
  }

  collectBurst(x: number, z: number): void {
    this.burst(x, 1, z, '#FFE082', 8, 3.5);
    this.sparkStreak(x, 1.1, z, '#FFD54F', 3);
    if (!IS_MOBILE) this.burst(x, 1.2, z, '#FF9800', 5, 2.5);
  }

  hitBurst(x: number, z: number): void {
    this.burst(x, 1, z, '#FF5252', IS_MOBILE ? 8 : 12, 5.5);
    this.sparkStreak(x, 1, z, '#FF1744', 4);
  }

  alienHit(x: number, y: number, z: number, headshot = false): void {
    const color = headshot ? '#EA80FC' : '#76FF03';
    this.burst(x, y, z, color, IS_MOBILE ? 6 : 10, headshot ? 6.5 : 4.5);
    this.sparkStreak(x, y, z, headshot ? '#E040FB' : '#B2FF59', headshot ? 5 : 3);
  }

  muzzleFlash(x: number, y: number, z: number): void {
    this.burst(x, y, z, '#00E5FF', IS_MOBILE ? 4 : 6, 3.5);
    this.sparkStreak(x, y, z, '#FFF59D', IS_MOBILE ? 2 : 4);
  }

  gateBurst(x: number, z: number, color: string): void {
    this.burst(x, 2, z, color, IS_MOBILE ? 12 : 18, 6.5);
    this.sparkStreak(x, 2.2, z, color, IS_MOBILE ? 2 : 5);
  }

  update(dt: number): void {
    for (const p of this.particles) {
      if (!p.active) continue;
      p.life -= dt;
      p.vel.y -= 14 * dt;
      p.mesh.position.addScaledVector(p.vel, dt);
      const alpha = Math.max(0, p.life / p.maxLife);
      (p.mesh.material as THREE.MeshBasicMaterial).opacity = alpha;
      p.mesh.scale.multiplyScalar(0.985);
      if (p.life <= 0) {
        p.active = false;
        p.mesh.visible = false;
      }
    }
  }

  clear(): void {
    for (const p of this.particles) {
      p.active = false;
      p.mesh.visible = false;
    }
  }

  dispose(): void {
    this.clear();
    for (const p of this.particles) this.scene.remove(p.mesh);
    SHARED_GEO.dispose();
    SPARK_GEO.dispose();
    this.materials.forEach((m) => m.dispose());
    this.materials.clear();
    this.particles = [];
  }
}

export class CameraShake {
  intensity = 0;

  shake(amount: number): void {
    this.intensity = Math.max(this.intensity, amount);
  }

  apply(camera: THREE.PerspectiveCamera, basePos: THREE.Vector3, baseLook: THREE.Vector3): void {
    if (this.intensity > 0.001) {
      camera.position.x = basePos.x + (Math.random() - 0.5) * this.intensity;
      camera.position.y = basePos.y + (Math.random() - 0.5) * this.intensity * 0.5;
      camera.position.z = basePos.z + (Math.random() - 0.5) * this.intensity * 0.3;
      this.intensity *= 0.88;
    } else {
      camera.position.copy(basePos);
    }
    camera.lookAt(baseLook);
  }
}
