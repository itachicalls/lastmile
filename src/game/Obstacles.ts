import * as THREE from 'three';
import { disposeObject3D } from './ModelUtils';
import { IS_MOBILE, isNearZ } from './platform';
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
  group.position.set(x, 0, z);
  buildHazardMesh(group, type);
  scene.add(group);
  const meta = HAZARD_META[type];
  return { mesh: group, x, z, kind: type, radius: meta.radius, hit: false };
}

export function obstacleClearHeight(kind: ObstacleKind): number {
  return HAZARD_META[kind].clearHeight;
}

export function updateObstacles(obstacles: ObstacleEntity[], time: number, playerZ: number): void {
  for (const o of obstacles) {
    if (o.hit || !isNearZ(o.z, playerZ)) continue;

    o.mesh.traverse((c) => {
      if (!(c instanceof THREE.Mesh)) return;
      const phase = (c.userData.bobPhase as number) ?? 0;
      const blinkPhase = (c.userData.blinkPhase as number) ?? 0;

      if (c.userData.isGlow) {
        c.rotation.z = time * 0.9 + o.x;
        const m = c.material as THREE.MeshBasicMaterial;
        if (m.opacity !== undefined) m.opacity = 0.28 + Math.sin(time * 4 + o.z) * 0.14;
      }
      if (c.userData.isBob) {
        c.position.y = (c.userData.baseY as number | undefined) ?? c.position.y;
        if (c.userData.baseY === undefined) c.userData.baseY = c.position.y;
        c.position.y = (c.userData.baseY as number) + Math.sin(time * 3 + o.z + phase) * 0.05;
      }
      if (c.userData.isBlink) {
        const m = c.material as THREE.MeshStandardMaterial;
        m.emissiveIntensity = 0.35 + Math.sin(time * 6 + blinkPhase) * 0.25;
      }
      if (c.userData.isSpin) {
        c.rotation.y = time * 2 + phase;
      }
    });

    if (!IS_MOBILE) {
      o.mesh.position.y = Math.sin(time * 2.5 + o.x * 0.5) * 0.015;
    }
  }
}

export function disposeObstacles(obstacles: ObstacleEntity[], scene: THREE.Scene): void {
  for (const o of obstacles) {
    scene.remove(o.mesh);
    disposeObject3D(o.mesh);
  }
}
