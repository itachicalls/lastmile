import * as THREE from 'three';
import { addMesh, mat, disposeObject3D } from './ModelUtils';

export type RunnerTier = 'grunt' | 'raider' | 'stalker';

export type RunnerEntity = {
  mesh: THREE.Group;
  x: number;
  z: number;
  tier: RunnerTier;
  hp: number;
  maxHp: number;
  speed: number;
  alive: boolean;
};

const TIER: Record<
  RunnerTier,
  { color: string; emissive: string; speed: number; hp: number; scale: number; label: string }
> = {
  grunt: { color: '#66BB6A', emissive: '#00E676', speed: 10, hp: 1, scale: 0.95, label: 'Grunt' },
  raider: { color: '#FFD54F', emissive: '#FFC107', speed: 14, hp: 2, scale: 1.05, label: 'Raider' },
  stalker: { color: '#FF5252', emissive: '#FF1744', speed: 19, hp: 3, scale: 1.15, label: 'Stalker' },
};

export function createRunner(scene: THREE.Scene, tier: RunnerTier, x: number, z: number): RunnerEntity {
  const t = TIER[tier];
  const group = new THREE.Group();
  group.position.set(x, 0, z);

  const skin = mat(t.color, { emissive: t.emissive, emissiveIntensity: 0.35, roughness: 0.55 });
  const dark = mat('#263238', { roughness: 0.8 });
  const sc = t.scale;

  addMesh(group, new THREE.CapsuleGeometry(0.22 * sc, 0.35 * sc, 6, 10), skin, 0, 0.55 * sc, 0);
  addMesh(group, new THREE.SphereGeometry(0.2 * sc, 10, 10), skin, 0, 0.95 * sc, 0.05);
  for (const sx of [-1, 1]) {
    addMesh(group, new THREE.SphereGeometry(0.05 * sc, 6, 6), mat('#111', { emissive: t.emissive, emissiveIntensity: 1.2 }), sx * 0.1 * sc, 0.98 * sc, 0.12 * sc);
  }
  for (const sx of [-1, 1]) {
    const leg = new THREE.Group();
    leg.position.set(sx * 0.12 * sc, 0.2 * sc, 0);
    addMesh(leg, new THREE.CapsuleGeometry(0.07 * sc, 0.22 * sc, 4, 6), dark, 0, -0.08 * sc, 0);
    group.add(leg);
  }
  addMesh(group, new THREE.BoxGeometry(0.35 * sc, 0.25 * sc, 0.2 * sc), mat('#FF9800', { emissive: '#FF6D00', emissiveIntensity: 0.4 }), 0, 0.72 * sc, -0.15 * sc);

  const ring = addMesh(
    group,
    new THREE.RingGeometry(0.45 * sc, 0.55 * sc, 20),
    new THREE.MeshBasicMaterial({ color: t.emissive, transparent: true, opacity: 0.45, side: THREE.DoubleSide }),
    0,
    0.04,
    0,
    false
  );
  ring.rotation.x = -Math.PI / 2;

  scene.add(group);

  return { mesh: group, x, z, tier, hp: t.hp, maxHp: t.hp, speed: t.speed, alive: true };
}

export function updateRunners(runners: RunnerEntity[], dt: number, time: number, timeScale: number): void {
  for (const r of runners) {
    if (!r.alive) continue;
    r.z -= r.speed * dt * timeScale;
    r.mesh.position.z = r.z;
    r.mesh.position.y = Math.abs(Math.sin(time * 8 + r.x)) * 0.06;
    r.mesh.rotation.y = Math.PI;
    const swing = Math.sin(time * 12 + r.z) * 0.5;
    r.mesh.children.forEach((c, i) => {
      if (i >= 3 && i <= 4) c.rotation.x = swing;
    });
  }
}

export function pickRunnerTier(difficulty: number): RunnerTier {
  const roll = Math.random();
  if (difficulty >= 7 && roll < 0.25) return 'stalker';
  if (difficulty >= 4 && roll < 0.45) return 'raider';
  return 'grunt';
}

export function runnerTouchRadius(tier: RunnerTier): number {
  return tier === 'stalker' ? 1.05 : tier === 'raider' ? 0.95 : 0.85;
}

export function disposeRunners(runners: RunnerEntity[], scene: THREE.Scene): void {
  for (const r of runners) {
    scene.remove(r.mesh);
    disposeObject3D(r.mesh);
  }
}
