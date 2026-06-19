import * as THREE from 'three';
import { addMesh, mat, disposeObject3D } from './ModelUtils';
import { IS_MOBILE, isNearZ } from './platform';

export type PowerUpKind =
  | 'slowmo'
  | 'fastshot'
  | 'invincible'
  | 'health'
  | 'turbo'
  | 'triplefire';

export type PowerUpEntity = {
  mesh: THREE.Group;
  x: number;
  z: number;
  kind: PowerUpKind;
  collected: boolean;
  bobPhase: number;
  isBad: boolean;
};

type OrbTheme = {
  core: string;
  mid: string;
  glow: string;
  particle: string;
  shell: string;
  bad: boolean;
};

const POWER_THEME: Record<PowerUpKind, OrbTheme> = {
  slowmo: { core: '#80DEEA', mid: '#00BCD4', glow: '#00E5FF', particle: '#E0F7FA', shell: '#4DD0E1', bad: false },
  fastshot: { core: '#FFEB3B', mid: '#FF9800', glow: '#FF6D00', particle: '#FFD54F', shell: '#FF5722', bad: false },
  invincible: { core: '#E1F5FE', mid: '#29B6F6', glow: '#00B0FF', particle: '#FFFFFF', shell: '#0288D1', bad: false },
  health: { core: '#A5D6A7', mid: '#43A047', glow: '#00E676', particle: '#C8E6C9', shell: '#2E7D32', bad: false },
  turbo: { core: '#FF8A65', mid: '#FF3D00', glow: '#FF1744', particle: '#FFAB91', shell: '#D50000', bad: true },
  triplefire: { core: '#FFCC80', mid: '#FF6D00', glow: '#FF9100', particle: '#FFE0B2', shell: '#E65100', bad: false },
};

const SEG = IS_MOBILE ? 10 : 14;
const PARTICLE_COUNT = IS_MOBILE ? 4 : 6;

function glowMat(color: string, intensity: number, opacity = 1): THREE.MeshStandardMaterial {
  return mat(color, {
    emissive: color,
    emissiveIntensity: intensity,
    transparent: opacity < 1,
    opacity,
    roughness: 0.15,
    metalness: 0.05,
  });
}

function shellMat(color: string, opacity: number): THREE.MeshBasicMaterial {
  return new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
}

function addOrbParticles(group: THREE.Group, color: string, orbit: number): THREE.Group {
  const ring = new THREE.Group();
  ring.userData.orbit = orbit;
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const a = (i / PARTICLE_COUNT) * Math.PI * 2;
    const spark = addMesh(
      ring,
      new THREE.SphereGeometry(0.045 + (i % 3) * 0.015, 6, 6),
      glowMat(color, 1.4, 0.92),
      Math.cos(a) * orbit,
      Math.sin(i * 1.7) * 0.08,
      Math.sin(a) * orbit,
      false
    );
    spark.userData.angle = a;
    spark.userData.orbit = orbit;
    spark.userData.wobble = i * 1.3;
  }
  group.add(ring);
  return ring;
}

function addKindAccent(group: THREE.Group, kind: PowerUpKind, theme: OrbTheme): THREE.Object3D | null {
  const accent = new THREE.Group();
  accent.position.y = 0.55;

  if (kind === 'slowmo') {
    for (const [ry, r] of [
      [0, 0.28],
      [0.12, 0.22],
      [-0.1, 0.24],
    ]) {
      const ring = addMesh(
        accent,
        new THREE.TorusGeometry(r, 0.025, 6, IS_MOBILE ? 12 : 16),
        glowMat(theme.glow, 0.9, 0.75),
        0,
        ry,
        0,
        false
      );
      ring.rotation.x = Math.PI / 2 + ry * 0.4;
      ring.rotation.z = ry * 2;
    }
  } else if (kind === 'fastshot') {
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2;
      const flame = addMesh(
        accent,
        new THREE.ConeGeometry(0.07, 0.22, 4),
        glowMat(theme.glow, 1.1),
        Math.cos(a) * 0.18,
        Math.sin(i) * 0.04,
        Math.sin(a) * 0.18,
        false
      );
      flame.rotation.x = Math.PI / 2;
      flame.rotation.z = a;
    }
  } else if (kind === 'invincible') {
    for (let i = 0; i < 4; i++) {
      const bolt = addMesh(
        accent,
        new THREE.BoxGeometry(0.04, 0.34, 0.04),
        glowMat('#FFFFFF', 1.5),
        0,
        0,
        0,
        false
      );
      bolt.rotation.z = (i / 4) * Math.PI * 2;
      bolt.rotation.x = 0.5 + i * 0.2;
      bolt.position.set(Math.cos(bolt.rotation.z) * 0.08, Math.sin(i) * 0.06, Math.sin(bolt.rotation.z) * 0.08);
    }
    addMesh(accent, new THREE.OctahedronGeometry(0.12, 0), glowMat(theme.particle, 1.3), 0, 0, 0, false);
  } else if (kind === 'health') {
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2 + 0.4;
      const leaf = addMesh(
        accent,
        new THREE.SphereGeometry(0.1, 6, 6),
        glowMat(theme.mid, 1.0),
        Math.cos(a) * 0.3,
        -0.08 + Math.sin(i) * 0.05,
        Math.sin(a) * 0.3,
        false
      );
      leaf.scale.set(1.4, 0.45, 0.8);
      leaf.rotation.y = a;
    }
    addMesh(accent, new THREE.SphereGeometry(0.14, 8, 8), glowMat('#FFFFFF', 0.8), 0, 0.02, 0.08, false);
  } else if (kind === 'triplefire') {
    for (const [ox, oz, rz] of [
      [-0.22, 0.12, 0.35],
      [0, 0, 0],
      [0.22, 0.12, -0.35],
    ] as const) {
      const barrel = addMesh(
        accent,
        new THREE.CylinderGeometry(0.04, 0.05, 0.26, 5),
        glowMat(theme.glow, 1.05),
        ox,
        0.02,
        oz,
        false
      );
      barrel.rotation.x = Math.PI / 2;
      barrel.rotation.z = rz;
      addMesh(
        accent,
        new THREE.ConeGeometry(0.06, 0.14, 4),
        glowMat('#FFFFFF', 1.2),
        ox + Math.sin(rz) * 0.14,
        0.06,
        oz + Math.cos(rz) * 0.14,
        false
      ).rotation.set(Math.PI / 2, 0, rz);
    }
  } else if (kind === 'turbo') {
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      const spike = addMesh(
        accent,
        new THREE.ConeGeometry(0.06, 0.28, 3),
        glowMat('#FF1744', 1.2),
        Math.cos(a) * 0.2,
        0,
        Math.sin(a) * 0.2,
        false
      );
      spike.rotation.x = Math.PI / 2;
      spike.rotation.z = a + Math.PI;
    }
    addMesh(accent, new THREE.BoxGeometry(0.28, 0.06, 0.06), mat('#212121', { emissive: '#FF1744', emissiveIntensity: 0.4 }), 0, 0.18, 0, false);
  } else {
    addMesh(accent, new THREE.SphereGeometry(0.16, 8, 8), glowMat(theme.particle, 0.7, 0.55), 0, 0, 0, false);
    addMesh(accent, new THREE.SphereGeometry(0.22, 8, 8), glowMat(theme.mid, 0.5, 0.35), 0, 0, 0, false);
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2;
      addMesh(
        accent,
        new THREE.TorusGeometry(0.12 + i * 0.05, 0.018, 6, 10),
        glowMat(theme.glow, 0.85, 0.6),
        0,
        0,
        0,
        false
      ).rotation.set(Math.PI / 2, a, 0);
    }
  }

  group.add(accent);
  return accent;
}

export function createPowerUp(scene: THREE.Scene, kind: PowerUpKind, x: number, z: number): PowerUpEntity {
  const theme = POWER_THEME[kind];
  const group = new THREE.Group();
  group.position.set(x, 0, z);

  const groundRing = addMesh(
    group,
    new THREE.RingGeometry(0.42, 0.72, IS_MOBILE ? 14 : 22),
    shellMat(theme.glow, theme.bad ? 0.28 : 0.38),
    0,
    0.04,
    0,
    false
  );
  groundRing.rotation.x = -Math.PI / 2;
  group.userData.groundRing = groundRing;

  const outerGlow = addMesh(
    group,
    new THREE.SphereGeometry(0.52, SEG, SEG),
    shellMat(theme.glow, theme.bad ? 0.14 : 0.2),
    0,
    0.55,
    0,
    false
  );
  group.userData.outerGlow = outerGlow;

  const midShell = addMesh(
    group,
    new THREE.SphereGeometry(0.4, SEG, SEG),
    glowMat(theme.shell, 0.55, 0.42),
    0,
    0.55,
    0,
    false
  );
  group.userData.midShell = midShell;

  const core = addMesh(
    group,
    new THREE.SphereGeometry(0.3, SEG, SEG),
    glowMat(theme.core, theme.bad ? 1.15 : 1.35),
    0,
    0.55,
    0,
    false
  );
  group.userData.core = core;

  addMesh(
    group,
    new THREE.SphereGeometry(0.14, 8, 8),
    glowMat('#FFFFFF', theme.bad ? 0.9 : 1.4, 0.85),
    0,
    0.58,
    0.1,
    false
  );

  group.userData.particles = addOrbParticles(group, theme.particle, 0.48);
  group.userData.accent = addKindAccent(group, kind, theme);

  if (theme.bad) {
    addMesh(
      group,
      new THREE.RingGeometry(0.58, 0.66, IS_MOBILE ? 12 : 16),
      new THREE.MeshBasicMaterial({ color: '#FF1744', transparent: true, opacity: 0.45, side: THREE.DoubleSide }),
      0,
      0.55,
      0,
      false
    ).rotation.x = Math.PI / 2;
  }

  scene.add(group);
  return { mesh: group, x, z, kind, collected: false, bobPhase: Math.random() * 6, isBad: theme.bad };
}

export function updatePowerUps(pickups: PowerUpEntity[], time: number, playerZ: number): void {
  for (const p of pickups) {
    if (p.collected || !isNearZ(p.z, playerZ, IS_MOBILE ? 48 : 62)) continue;

    const bob = 0.52 + Math.sin(time * 3 + p.bobPhase) * 0.12;
    p.mesh.position.y = bob - 0.52;
    p.mesh.rotation.y = time * 1.6;

    const core = p.mesh.userData.core as THREE.Mesh | undefined;
    const outerGlow = p.mesh.userData.outerGlow as THREE.Mesh | undefined;
    const midShell = p.mesh.userData.midShell as THREE.Mesh | undefined;
    const groundRing = p.mesh.userData.groundRing as THREE.Mesh | undefined;
    const particles = p.mesh.userData.particles as THREE.Group | undefined;
    const accent = p.mesh.userData.accent as THREE.Object3D | undefined;

    const pulse = 1 + Math.sin(time * 4.5 + p.bobPhase) * 0.06;
    if (core) core.scale.setScalar(pulse);
    if (outerGlow) {
      const glowPulse = 1 + Math.sin(time * 3.2 + p.bobPhase) * 0.1;
      outerGlow.scale.setScalar(glowPulse);
      const matGlow = outerGlow.material as THREE.MeshBasicMaterial;
      matGlow.opacity = (p.isBad ? 0.14 : 0.2) + Math.sin(time * 5 + p.bobPhase) * 0.04;
    }
    if (midShell) midShell.rotation.y = -time * 2.4;
    if (groundRing) groundRing.scale.setScalar(1 + Math.sin(time * 4 + p.bobPhase) * 0.07);
    if (accent) accent.rotation.y = time * 2.8;

    if (particles) {
      particles.rotation.y = time * 1.8;
      particles.children.forEach((c, i) => {
        if (!(c instanceof THREE.Mesh)) return;
        const angle = (c.userData.angle as number) + time * (1.2 + (i % 3) * 0.15);
        const orbit = c.userData.orbit as number;
        c.position.x = Math.cos(angle) * orbit;
        c.position.z = Math.sin(angle) * orbit;
        c.position.y = Math.sin(time * 4 + (c.userData.wobble as number)) * 0.1;
      });
    }
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
  const roll = Math.random();
  if (roll < 0.08) return 'health';
  if (roll < 0.15) return 'turbo';
  if (roll < 0.22) return 'slowmo';
  if (roll < 0.3) return 'triplefire';
  if (roll < 0.64) return 'fastshot';
  return 'invincible';
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
  health: '❤ +1 Health!',
  turbo: '⚠ Overdrive — too fast!',
  triplefire: '🔫 Triple Fire!',
};

export function isBadPowerUp(kind: PowerUpKind): boolean {
  return POWER_THEME[kind].bad;
}
