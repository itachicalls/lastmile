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
  baseSpeed: number;
  alive: boolean;
  footShadow: THREE.Mesh;
  eliteRing?: THREE.Mesh;
  weakPoint: THREE.Mesh;
  elite: boolean;
  isBoss: boolean;
  /** 0 idle approach, 1 wind-up, 2 lunge */
  telegraph: number;
  telegraphT: number;
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
  grunt: { scale: 1.02, emissive: '#76FF03', speed: 10, hp: 1, label: 'Grunt' },
  raider: { scale: 1.14, emissive: '#FFC107', speed: 14, hp: 2, label: 'Raider' },
  stalker: { scale: 1.28, emissive: '#FF1744', speed: 19, hp: 3, label: 'Stalker' },
};

const RUNNER_TIER: Record<RunnerTier, ChibiTier> = {
  grunt: 'grunt',
  raider: 'raider',
  stalker: 'boss',
};

export type RunnerSpawnOpts = {
  elite?: boolean;
  boss?: boolean;
};

export function createRunner(
  scene: THREE.Scene,
  tier: RunnerTier,
  x: number,
  z: number,
  opts: RunnerSpawnOpts = {}
): RunnerEntity {
  const t = TIER[tier];
  const elite = !!opts.elite;
  const isBoss = !!opts.boss;
  const scaleMul = isBoss ? 1.5 : elite ? 1.22 : 1;
  const chibiTier = RUNNER_TIER[tier];
  const species = pickSpeciesForTier(chibiTier);
  const group = new THREE.Group();
  group.position.set(x, 0, z);

  const alien = buildChibiSpecies(species, t.scale * scaleMul, chibiTier);
  alien.rotation.y = Math.PI;
  group.add(alien);

  const shadowR = 0.44 * t.scale * scaleMul;
  const footShadow = addMesh(
    group,
    new THREE.CircleGeometry(shadowR, IS_MOBILE ? 10 : 14),
    new THREE.MeshBasicMaterial({
      color: '#101018',
      transparent: true,
      opacity: 0.28,
      depthWrite: false,
    }),
    0,
    0.02,
    0,
    false
  );
  footShadow.rotation.x = -Math.PI / 2;
  footShadow.scale.set(1.15, 1, 0.82);

  let eliteRing: THREE.Mesh | undefined;
  if (elite || isBoss) {
    eliteRing = addMesh(
      group,
      new THREE.RingGeometry(shadowR * 0.88, shadowR * 1.02, IS_MOBILE ? 12 : 18),
      new THREE.MeshBasicMaterial({
        color: isBoss ? '#9A7B2F' : '#6B5B45',
        transparent: true,
        opacity: isBoss ? 0.2 : 0.12,
        side: THREE.DoubleSide,
        depthWrite: false,
      }),
      0,
      0.025,
      0,
      false
    );
    eliteRing.rotation.x = -Math.PI / 2;
  }

  const headY = 0.55 * t.scale * scaleMul * 2.2;
  const weakPoint = addMesh(
    group,
    new THREE.SphereGeometry(0.07 * scaleMul, IS_MOBILE ? 6 : 8, IS_MOBILE ? 6 : 8),
    new THREE.MeshBasicMaterial({
      color: '#CC4444',
      transparent: true,
      opacity: tier === 'grunt' ? 0 : 0.22,
      depthWrite: false,
    }),
    0,
    headY,
    0.06 * scaleMul,
    false
  );
  weakPoint.visible = tier !== 'grunt';

  scene.add(group);

  let hp = t.hp + (elite ? 1 : 0);
  if (isBoss) hp = 8;

  return {
    mesh: group,
    x,
    z,
    tier,
    species,
    hp,
    maxHp: hp,
    speed: t.speed * (isBoss ? 0.85 : 1),
    baseSpeed: t.speed * (isBoss ? 0.85 : 1),
    alive: true,
    footShadow,
    eliteRing,
    weakPoint,
    elite,
    isBoss,
    telegraph: 0,
    telegraphT: 0,
  };
}

export function updateRunners(
  runners: RunnerEntity[],
  dt: number,
  time: number,
  timeScale: number,
  playerZ: number,
  onTelegraph?: (r: RunnerEntity) => void,
  night = 0
): void {
  for (const r of runners) {
    if (!r.alive) continue;

    const dist = r.z - playerZ;
    const near = isNearZ(r.z, playerZ, IS_MOBILE ? 60 : 85);
    r.mesh.visible = near;
    if (!near) continue;

    if (r.tier === 'stalker' && dist > 2.5 && dist < 22) {
      if (r.telegraph === 0) {
        r.telegraph = 1;
        r.telegraphT = 0;
        onTelegraph?.(r);
      }
    }

    let moveSpeed = r.baseSpeed;
    const sm = r.footShadow.material as THREE.MeshBasicMaterial;
    if (r.telegraph === 1) {
      r.telegraphT += dt;
      moveSpeed = r.baseSpeed * 0.35;
      sm.color.set('#4a1520');
      sm.opacity = 0.34 + Math.sin(time * 16) * 0.1;
      if (r.eliteRing) {
        const em = r.eliteRing.material as THREE.MeshBasicMaterial;
        em.color.set('#8B3030');
        em.opacity = 0.28 + Math.sin(time * 16) * 0.08;
      }
      if (r.telegraphT >= 0.55) {
        r.telegraph = 2;
        r.telegraphT = 0;
      }
    } else if (r.telegraph === 2) {
      r.telegraphT += dt;
      moveSpeed = r.baseSpeed * 2.4;
      sm.color.set('#101018');
      sm.opacity = 0.32;
      if (r.telegraphT >= 0.45) r.telegraph = 0;
    } else {
      sm.color.set('#101018');
      sm.opacity = 0.24 + (r.elite || r.isBoss ? 0.06 : 0);
      if (r.eliteRing) {
        const em = r.eliteRing.material as THREE.MeshBasicMaterial;
        em.color.set(r.isBoss ? '#9A7B2F' : '#6B5B45');
        em.opacity = (r.isBoss ? 0.18 : 0.1) + Math.sin(time * 3 + r.z) * 0.04;
      }
    }

    r.z -= moveSpeed * dt * timeScale;
    r.mesh.position.set(r.x, 0, r.z);

    const alien = r.mesh.children[0] as THREE.Group | undefined;
    if (alien) {
      animateAlienRig(alien, time + r.x, true);
      if (r.telegraph === 1) {
        alien.scale.setScalar(1 + Math.sin(time * 20) * 0.06);
      } else {
        alien.scale.setScalar(1);
      }
      alien.rotation.y = Math.PI + (IS_MOBILE ? 0 : Math.sin(time * 3 + r.x) * 0.08);
    }

    if (r.weakPoint.visible) {
      const wp = r.weakPoint.material as THREE.MeshBasicMaterial;
      wp.opacity = r.telegraph === 1 ? 0.38 : 0.16 + Math.sin(time * 6 + r.x) * 0.06;
    }

    if (alien) {
      alien.traverse((c) => {
        if (!(c instanceof THREE.Mesh) || !(c.material instanceof THREE.MeshStandardMaterial)) return;
        if (c.userData.baseEmissiveIntensity === undefined) {
          c.userData.baseEmissiveIntensity = c.material.emissiveIntensity;
        }
        const base = c.userData.baseEmissiveIntensity as number;
        if (night > 0.08 && !c.material.transparent) {
          c.material.emissive.set('#FFF3E0');
          c.material.emissiveIntensity = base + night * 0.18;
        } else {
          c.material.emissiveIntensity = base;
        }
      });
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
  return tier === 'stalker' ? 1.18 : tier === 'raider' ? 1.05 : 0.95;
}

export function isHeadshot(projectileY: number, r: RunnerEntity): boolean {
  if (r.tier === 'grunt') return false;
  const headY = r.weakPoint.position.y;
  return projectileY >= headY - 0.12;
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
