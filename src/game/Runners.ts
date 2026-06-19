import * as THREE from 'three';
import { addMesh, disposeObject3D } from './ModelUtils';
import { buildChibiSpecies, pickSpeciesForTier, animateAlienRig, type ChibiSpecies, type ChibiTier } from './AlienModels';
import { IS_MOBILE, isNearZ } from './platform';

export type RunnerTier = 'grunt' | 'raider' | 'stalker';

export type RunnerEntity = {
  mesh: THREE.Group;
  x: number;
  z: number;
  tier: RunnerTier;
  species: ChibiSpecies;
  hp: number;
  maxHp: number;
  speed: number;
  alive: boolean;
  aura: THREE.Mesh;
};

const TIER: Record<
  RunnerTier,
  {
    scale: number;
    emissive: string;
    speed: number;
    hp: number;
    label: string;
  }
> = {
  grunt: { scale: 0.82, emissive: '#76FF03', speed: 10, hp: 1, label: 'Grunt' },
  raider: { scale: 0.92, emissive: '#FFC107', speed: 14, hp: 2, label: 'Raider' },
  stalker: { scale: 1.05, emissive: '#FF1744', speed: 19, hp: 3, label: 'Stalker' },
};

const RUNNER_TIER: Record<RunnerTier, ChibiTier> = {
  grunt: 'grunt',
  raider: 'raider',
  stalker: 'boss',
};

export function createRunner(scene: THREE.Scene, tier: RunnerTier, x: number, z: number): RunnerEntity {
  const t = TIER[tier];
  const chibiTier = RUNNER_TIER[tier];
  const species = pickSpeciesForTier(chibiTier);
  const group = new THREE.Group();
  group.position.set(x, 0, z);

  const alien = buildChibiSpecies(species, t.scale, chibiTier);
  alien.rotation.y = Math.PI;
  group.add(alien);

  const ringSegs = IS_MOBILE ? 14 : 22;
  const aura = addMesh(
    group,
    new THREE.RingGeometry(0.55 * t.scale * 3, 0.68 * t.scale * 3, ringSegs),
    new THREE.MeshBasicMaterial({
      color: t.emissive,
      transparent: true,
      opacity: 0.38,
      side: THREE.DoubleSide,
    }),
    0,
    0.03,
    0,
    false
  );
  aura.rotation.x = -Math.PI / 2;

  const shadow = addMesh(
    group,
    new THREE.CircleGeometry(0.45 * t.scale * 2.2, IS_MOBILE ? 10 : 16),
    new THREE.MeshBasicMaterial({ color: '#000000', transparent: true, opacity: 0.28 }),
    0,
    0.02,
    0,
    false
  );
  shadow.rotation.x = -Math.PI / 2;

  scene.add(group);

  return { mesh: group, x, z, tier, species, hp: t.hp, maxHp: t.hp, speed: t.speed, alive: true, aura };
}

export function updateRunners(
  runners: RunnerEntity[],
  dt: number,
  time: number,
  timeScale: number,
  playerZ: number
): void {
  for (const r of runners) {
    if (!r.alive) continue;
    r.z -= r.speed * dt * timeScale;
    r.mesh.position.set(r.x, 0, r.z);

    const near = isNearZ(r.z, playerZ, IS_MOBILE ? 60 : 85);
    r.mesh.visible = near;
    if (!near) continue;

    const alien = r.mesh.children[0] as THREE.Group | undefined;
    if (alien) {
      animateAlienRig(alien, time + r.x, true);
      if (!IS_MOBILE) alien.rotation.y = Math.PI + Math.sin(time * 3 + r.x) * 0.08;
      else alien.rotation.y = Math.PI;
    }

    if (!IS_MOBILE) {
      r.aura.rotation.z = time * 1.5;
      (r.aura.material as THREE.MeshBasicMaterial).opacity = 0.28 + Math.sin(time * 6 + r.z) * 0.12;
    }
  }
}

export function pickRunnerTier(difficulty: number): RunnerTier {
  const roll = Math.random();
  if (difficulty >= 7 && roll < 0.25) return 'stalker';
  if (difficulty >= 4 && roll < 0.45) return 'raider';
  return 'grunt';
}

export function runnerTouchRadius(tier: RunnerTier): number {
  return tier === 'stalker' ? 1.1 : tier === 'raider' ? 0.95 : 0.85;
}

export function disposeRunner(r: RunnerEntity, scene: THREE.Scene): void {
  scene.remove(r.mesh);
  disposeObject3D(r.mesh);
  r.alive = false;
}

export function disposeRunners(runners: RunnerEntity[], scene: THREE.Scene): void {
  for (const r of runners) {
    scene.remove(r.mesh);
    disposeObject3D(r.mesh);
  }
}
