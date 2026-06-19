import * as THREE from 'three';
import { disposeObject3D } from './ModelUtils';
import { isNearZ } from './platform';
import { HAZARD_META } from '../data/hazards';
import { buildHazardMesh } from './HazardVisuals';
import type { ObstacleKind } from '../types';

export type { ObstacleKind };

export type ObstacleEntity = {
  mesh: THREE.Group;
  x: number;
  z: number;
  kind: ObstacleKind;
  radius: number;
  hit: boolean;
};

export function createObstacle(scene: THREE.Scene, type: ObstacleKind, x: number, z: number): ObstacleEntity {
  const group = new THREE.Group();
  group.position.set(x, 0.02, z);
  buildHazardMesh(group, type);
  scene.add(group);
  const meta = HAZARD_META[type];
  return { mesh: group, x, z, kind: type, radius: meta.radius, hit: false };
}

export function obstacleClearHeight(kind: ObstacleKind): number {
  return HAZARD_META[kind].clearHeight;
}

export function updateObstacles(
  obstacles: ObstacleEntity[],
  time: number,
  playerZ: number,
  night = 0
): void {
  for (const o of obstacles) {
    if (o.hit || !isNearZ(o.z, playerZ)) continue;

    o.mesh.traverse((c) => {
      if (!(c instanceof THREE.Mesh)) return;
      const phase = (c.userData.bobPhase as number) ?? 0;
      const blinkPhase = (c.userData.blinkPhase as number) ?? 0;

      if (c.userData.isGlow) {
        c.rotation.z = time * 0.25 + o.x;
        const m = c.material as THREE.MeshBasicMaterial;
        if (m.opacity !== undefined) m.opacity = 0.32 + Math.sin(time * 2.5 + o.z) * 0.1;
      }
      if (c.userData.isBob) {
        c.position.y = (c.userData.baseY as number | undefined) ?? c.position.y;
        if (c.userData.baseY === undefined) c.userData.baseY = c.position.y;
        c.position.y = (c.userData.baseY as number) + Math.sin(time * 3 + o.z + phase) * 0.05;
      }
      if (c.userData.isBlink) {
        const m = c.material as THREE.MeshStandardMaterial;
        if (m.emissiveIntensity !== undefined) {
          if (c.userData.baseEmissiveIntensity === undefined) {
            c.userData.baseEmissiveIntensity = m.emissiveIntensity;
          }
          m.emissiveIntensity =
            (c.userData.baseEmissiveIntensity as number) +
            0.22 +
            Math.sin(time * 4 + blinkPhase) * 0.12 +
            night * 0.35;
        }
      }
      if (c.material instanceof THREE.MeshStandardMaterial && !c.userData.isBlink) {
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
      }
      if (c.userData.isSpin) {
        c.rotation.y = time * 2 + phase;
      }
    });

    o.mesh.position.y = Math.sin(time * 2.5 + o.x * 0.5) * 0.012;
  }
}

export function disposeObstacles(obstacles: ObstacleEntity[], scene: THREE.Scene): void {
  for (const o of obstacles) {
    scene.remove(o.mesh);
    disposeObject3D(o.mesh);
  }
}
