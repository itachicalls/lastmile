import * as THREE from 'three';
import { addMesh, mat, disposeObject3D } from './ModelUtils';

export type PowerUpKind = 'slowmo' | 'fastshot' | 'invincible';

export type PowerUpEntity = {
  mesh: THREE.Group;
  x: number;
  z: number;
  kind: PowerUpKind;
  collected: boolean;
  bobPhase: number;
};

const POWER_THEME: Record<PowerUpKind, { color: string; emissive: string; label: string }> = {
  slowmo: { color: '#42A5F5', emissive: '#2196F3', label: 'SLOW-MO' },
  fastshot: { color: '#FF9800', emissive: '#FF6D00', label: 'FAST SHOT' },
  invincible: { color: '#AB47BC', emissive: '#E040FB', label: 'SHIELD' },
};

export function createPowerUp(scene: THREE.Scene, kind: PowerUpKind, x: number, z: number): PowerUpEntity {
  const theme = POWER_THEME[kind];
  const group = new THREE.Group();
  group.position.set(x, 0, z);

  const base = addMesh(
    group,
    new THREE.CylinderGeometry(0.55, 0.65, 0.12, 24),
    mat(theme.color, { emissive: theme.emissive, emissiveIntensity: 0.55, metalness: 0.35 }),
    0,
    0.08,
    0
  );
  base.rotation.y = Math.PI / 8;

  if (kind === 'slowmo') {
    addMesh(group, new THREE.TorusGeometry(0.35, 0.06, 8, 24), mat('#E3F2FD', { emissive: '#90CAF9', emissiveIntensity: 0.6 }), 0, 0.45, 0, false);
  } else if (kind === 'fastshot') {
    addMesh(group, new THREE.ConeGeometry(0.2, 0.45, 4), mat('#FFD54F', { emissive: '#FFC107', emissiveIntensity: 0.7 }), 0, 0.42, 0);
  } else {
    addMesh(group, new THREE.OctahedronGeometry(0.28, 0), mat('#E1BEE7', { emissive: '#EA80FC', emissiveIntensity: 0.75 }), 0, 0.42, 0);
  }

  const ring = addMesh(
    group,
    new THREE.RingGeometry(0.6, 0.75, 28),
    new THREE.MeshBasicMaterial({ color: theme.emissive, transparent: true, opacity: 0.4, side: THREE.DoubleSide }),
    0,
    0.02,
    0,
    false
  );
  ring.rotation.x = -Math.PI / 2;

  scene.add(group);
  return { mesh: group, x, z, kind, collected: false, bobPhase: Math.random() * 6 };
}

export function updatePowerUps(pickups: PowerUpEntity[], time: number): void {
  for (const p of pickups) {
    if (p.collected) continue;
    p.mesh.position.y = Math.sin(time * 3 + p.bobPhase) * 0.12;
    p.mesh.rotation.y = time * 1.8;
  }
}

export function tryCollectPowerUp(
  pickups: PowerUpEntity[],
  px: number,
  pz: number,
  radius: number
): PowerUpKind | null {
  for (const p of pickups) {
    if (p.collected) continue;
    const dx = p.x - px;
    const dz = p.z - pz;
    if (dx * dx + dz * dz < radius * radius) {
      p.collected = true;
      p.mesh.visible = false;
      return p.kind;
    }
  }
  return null;
}

export function randomPowerUpKind(): PowerUpKind {
  const kinds: PowerUpKind[] = ['slowmo', 'fastshot', 'invincible'];
  return kinds[Math.floor(Math.random() * kinds.length)];
}

export function disposePowerUps(pickups: PowerUpEntity[], scene: THREE.Scene): void {
  for (const p of pickups) {
    scene.remove(p.mesh);
    disposeObject3D(p.mesh);
  }
}

export const POWER_LABELS: Record<PowerUpKind, string> = {
  slowmo: 'Slow-Mo!',
  fastshot: 'Fast Shot!',
  invincible: 'Invincible!',
};
