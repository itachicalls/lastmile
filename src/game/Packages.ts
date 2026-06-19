import * as THREE from 'three';
import { buildPackageOrb, updatePackageOrb, disposePackageOrb, MAIL_THEME } from './PackageVisual';
import { IS_MOBILE, isNearZ } from './platform';

export type PackagePickup = {
  mesh: THREE.Group;
  x: number;
  z: number;
  collected: boolean;
  bobPhase: number;
};

export type ThrownPackage = {
  mesh: THREE.Group;
  velocity: THREE.Vector3;
  life: number;
  damage: number;
  bobPhase: number;
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
): number {
  let n = 0;
  for (const p of pickups) {
    if (p.collected) continue;
    const dx = p.x - px;
    const dz = p.z - pz;
    if (dx * dx + dz * dz < radius * radius) {
      p.collected = true;
      p.mesh.visible = false;
      n++;
    }
  }
  return n;
}

export function spawnThrow(
  scene: THREE.Scene,
  fromX: number,
  fromZ: number,
  targetX: number,
  targetZ: number
): ThrownPackage {
  const orb = buildPackageOrb('throw');
  orb.group.position.set(fromX, 1.2, fromZ);
  scene.add(orb.group);

  const dir = new THREE.Vector3(targetX - fromX, 0, targetZ - fromZ).normalize();
  const velocity = new THREE.Vector3(dir.x * 22, 12, dir.z * 22);

  return { mesh: orb.group, velocity, life: 1.2, damage: 8, bobPhase: Math.random() * 6 };
}

export function spawnMailShot(
  scene: THREE.Scene,
  fromX: number,
  fromZ: number,
  targetX: number,
  targetZ: number,
  damage: number
): ThrownPackage {
  const orb = buildPackageOrb('mail', MAIL_THEME);
  orb.group.position.set(fromX + 0.35, 1.05, fromZ + 0.2);
  scene.add(orb.group);

  const dir = new THREE.Vector3(targetX - fromX, 0, targetZ - fromZ).normalize();
  const velocity = new THREE.Vector3(dir.x * 28, 2, dir.z * 28);

  return { mesh: orb.group, velocity, life: 0.85, damage, bobPhase: Math.random() * 6 };
}

export function updateThrows(throws: ThrownPackage[], dt: number, scene: THREE.Scene, time = 0): ThrownPackage[] {
  const alive: ThrownPackage[] = [];
  for (const t of throws) {
    t.life -= dt;
    t.velocity.y -= 28 * dt;
    t.mesh.position.addScaledVector(t.velocity, dt);
    t.mesh.rotation.x += dt * 8;
    t.mesh.rotation.z += dt * 6;
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
