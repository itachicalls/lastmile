import * as THREE from 'three';
import { buildPackageOrb, updatePackageOrb, disposePackageOrb, MAIL_THEME } from './PackageVisual';
import { IS_MOBILE, isNearZ } from './platform';
import type { RunnerEntity } from './Runners';

export type PackagePickup = {
  mesh: THREE.Group;
  x: number;
  z: number;
  collected: boolean;
  bobPhase: number;
  golden?: boolean;
};

export type ShotKind = 'mail' | 'package';

export type ThrownPackage = {
  mesh: THREE.Group;
  velocity: THREE.Vector3;
  life: number;
  damage: number;
  bobPhase: number;
  kind: ShotKind;
  pierceLeft: number;
  homing: boolean;
  trail?: THREE.Mesh;
};

export function createPackagePickups(
  scene: THREE.Scene,
  z: number,
  count: number,
  _spread = 3.5
): PackagePickup[] {
  const pickups: PackagePickup[] = [];
  const lanes = [-3.2, -1.6, 0, 1.6, 3.2];
  for (let i = 0; i < count; i++) {
    const x = lanes[Math.floor(Math.random() * lanes.length)];
    const pz = z + (i % 3) * 0.6;
    const bobPhase = i * 1.2 + Math.random();

    const orb = buildPackageOrb('pickup');
    orb.group.position.set(x, 0, pz);
    scene.add(orb.group);

    pickups.push({ mesh: orb.group, x, z: pz, collected: false, bobPhase });
  }
  return pickups;
}

export function updatePackagePickups(pickups: PackagePickup[], time: number, playerZ: number): void {
  for (const p of pickups) {
    if (p.collected || !isNearZ(p.z, playerZ, IS_MOBILE ? 55 : 75)) continue;
    p.mesh.position.x = p.x;
    p.mesh.position.z = p.z;
    updatePackageOrb(p.mesh, time, p.bobPhase, true);
  }
}

export function tryCollectPackages(
  pickups: PackagePickup[],
  px: number,
  pz: number,
  radius: number
): { packages: number; golden: number } {
  let packages = 0;
  let golden = 0;
  for (const p of pickups) {
    if (p.collected) continue;
    const dx = p.x - px;
    const dz = p.z - pz;
    if (dx * dx + dz * dz < radius * radius) {
      p.collected = true;
      p.mesh.visible = false;
      if (p.golden) golden++;
      else packages++;
    }
  }
  return { packages, golden };
}

function addMailTrail(group: THREE.Group): THREE.Mesh {
  const trail = new THREE.Mesh(
    new THREE.PlaneGeometry(0.08, 0.35),
    new THREE.MeshBasicMaterial({
      color: '#00E5FF',
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    })
  );
  trail.rotation.x = -Math.PI / 2;
  trail.position.set(0, -0.05, -0.2);
  group.add(trail);
  return trail;
}

const GOLDEN_MAIL_THEME = {
  core: '#FFD54F',
  mid: '#FFC107',
  glow: '#FFEB3B',
  particle: '#FFFDE7',
  shell: '#FF8F00',
  ribbon: '#FFFFFF',
};

/** Elite-only drop — coins + fast shot when collected. */
export function spawnGoldenMail(scene: THREE.Scene, x: number, z: number): PackagePickup {
  const orb = buildPackageOrb('pickup', GOLDEN_MAIL_THEME);
  orb.group.position.set(x, 0.35, z);
  orb.group.scale.setScalar(1.25);
  if (orb.outerGlow) {
    (orb.outerGlow.material as THREE.MeshBasicMaterial).opacity = 0.55;
  }
  scene.add(orb.group);
  return { mesh: orb.group, x, z, collected: false, bobPhase: Math.random() * 6, golden: true };
}

export function spawnThrow(
  scene: THREE.Scene,
  fromX: number,
  fromZ: number,
  targetX: number,
  targetZ: number,
  damage = 8
): ThrownPackage {
  const orb = buildPackageOrb('throw');
  orb.group.position.set(fromX, 1.2, fromZ);
  scene.add(orb.group);

  const dir = new THREE.Vector3(targetX - fromX, 0, targetZ - fromZ).normalize();
  const velocity = new THREE.Vector3(dir.x * 22, 12, dir.z * 22);

  return {
    mesh: orb.group,
    velocity,
    life: 1.2,
    damage,
    bobPhase: Math.random() * 6,
    kind: 'package',
    pierceLeft: 0,
    homing: false,
  };
}

export type MailShotOpts = {
  pierceLeft?: number;
  homing?: boolean;
  spreadIndex?: number;
};

export function spawnMailShot(
  scene: THREE.Scene,
  fromX: number,
  fromZ: number,
  targetX: number,
  targetZ: number,
  damage: number,
  opts: MailShotOpts = {}
): ThrownPackage {
  const orb = buildPackageOrb('mail', MAIL_THEME);
  orb.group.position.set(fromX + 0.35, 1.05, fromZ + 0.2);
  const core = orb.core;
  (core.material as THREE.MeshStandardMaterial).emissiveIntensity = 1.1;
  if (orb.outerGlow) {
    (orb.outerGlow.material as THREE.MeshBasicMaterial).opacity = 0.35;
  }
  scene.add(orb.group);

  const dir = new THREE.Vector3(targetX - fromX, 0, targetZ - fromZ).normalize();
  const spread = opts.spreadIndex ?? 0;
  if (spread !== 0) {
    const angle = spread * 0.14;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const dx = dir.x * cos - dir.z * sin;
    const dz = dir.x * sin + dir.z * cos;
    dir.set(dx, 0, dz);
  }

  const velocity = new THREE.Vector3(dir.x * 28, 2, dir.z * 28);
  const trail = addMailTrail(orb.group);

  return {
    mesh: orb.group,
    velocity,
    life: 0.85,
    damage,
    bobPhase: Math.random() * 6,
    kind: 'mail',
    pierceLeft: opts.pierceLeft ?? 0,
    homing: opts.homing ?? false,
    trail,
  };
}

export function updateThrows(
  throws: ThrownPackage[],
  dt: number,
  scene: THREE.Scene,
  time = 0,
  runners: RunnerEntity[] = [],
  homingBoost = 1
): ThrownPackage[] {
  const alive: ThrownPackage[] = [];
  for (const t of throws) {
    if (t.homing && runners.length) {
      let best: RunnerEntity | null = null;
      let bestD = Infinity;
      for (const r of runners) {
        if (!r.alive) continue;
        const dz = r.z - t.mesh.position.z;
        if (dz < -2 || dz > 45) continue;
        const d = (r.x - t.mesh.position.x) ** 2 + dz * dz;
        if (d < bestD) {
          bestD = d;
          best = r;
        }
      }
      if (best) {
        const steer = new THREE.Vector3(best.x - t.mesh.position.x, 0, best.z - t.mesh.position.z);
        if (steer.lengthSq() > 0.01) {
          steer.normalize().multiplyScalar(16 * dt * homingBoost);
          t.velocity.x += steer.x;
          t.velocity.z += steer.z;
          const spd = Math.min(32, Math.hypot(t.velocity.x, t.velocity.z));
          const dir = new THREE.Vector3(t.velocity.x, 0, t.velocity.z).normalize();
          t.velocity.x = dir.x * spd;
          t.velocity.z = dir.z * spd;
        }
      }
    }

    t.life -= dt;
    t.velocity.y -= t.kind === 'mail' ? 8 * dt : 28 * dt;
    t.mesh.position.addScaledVector(t.velocity, dt);
    t.mesh.rotation.x += dt * (t.kind === 'mail' ? 12 : 8);
    t.mesh.rotation.z += dt * (t.kind === 'mail' ? 10 : 6);
    if (t.trail) {
      (t.trail.material as THREE.MeshBasicMaterial).opacity = 0.35 + Math.sin(time * 20) * 0.15;
    }
    updatePackageOrb(t.mesh, time + t.bobPhase, t.bobPhase, false);

    if (t.life > 0 && t.mesh.position.y > 0.1) alive.push(t);
    else {
      scene.remove(t.mesh);
      disposePackageOrb(t.mesh);
    }
  }
  return alive;
}

export function disposePickups(pickups: PackagePickup[], scene: THREE.Scene): void {
  for (const p of pickups) {
    scene.remove(p.mesh);
    disposePackageOrb(p.mesh);
  }
}
