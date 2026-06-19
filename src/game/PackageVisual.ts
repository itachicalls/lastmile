import * as THREE from 'three';
import { addMesh, mat, disposeObject3D } from './ModelUtils';
import { IS_MOBILE } from './platform';

export type PackageSize = 'pickup' | 'carried' | 'throw' | 'mail';

export type PackageTheme = {
  core: string;
  mid: string;
  glow: string;
  particle: string;
  shell: string;
  ribbon: string;
};

const DEFAULT_THEME: PackageTheme = {
  core: '#FF9800',
  mid: '#FFB74D',
  glow: '#FFD54F',
  particle: '#FFF8E1',
  shell: '#FF6F00',
  ribbon: '#FFC107',
};

const MAIL_THEME: PackageTheme = {
  core: '#FFFDE7',
  mid: '#FFF9C4',
  glow: '#FFD54F',
  particle: '#FFFFFF',
  shell: '#FFEB3B',
  ribbon: '#00E5FF',
};

const SEG = IS_MOBILE ? 8 : 12;
const PARTICLES = IS_MOBILE ? 4 : 6;

function glowMat(color: string, intensity: number, opacity = 1): THREE.MeshStandardMaterial {
  return mat(color, {
    emissive: color,
    emissiveIntensity: intensity,
    transparent: opacity < 1,
    opacity,
    roughness: 0.18,
    metalness: 0.06,
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

function districtTheme(district: number): PackageTheme {
  if (district >= 5) {
    return { core: '#FF5252', mid: '#FF1744', glow: '#FF8A80', particle: '#FFCDD2', shell: '#D50000', ribbon: '#FFD54F' };
  }
  if (district >= 3) {
    return { core: '#448AFF', mid: '#2979FF', glow: '#82B1FF', particle: '#E3F2FD', shell: '#1565C0', ribbon: '#FFD54F' };
  }
  return DEFAULT_THEME;
}

function addOrbitingParticles(group: THREE.Group, color: string, orbit: number, count: number): THREE.Group {
  const ring = new THREE.Group();
  ring.userData.orbit = orbit;
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    const spark = addMesh(
      ring,
      new THREE.SphereGeometry(0.035 + (i % 2) * 0.012, 5, 5),
      glowMat(color, 1.2, 0.9),
      Math.cos(a) * orbit,
      Math.sin(i * 1.5) * 0.06,
      Math.sin(a) * orbit,
      false
    );
    spark.userData.angle = a;
    spark.userData.orbit = orbit;
    spark.userData.wobble = i * 1.1;
  }
  group.add(ring);
  return ring;
}

function addRibbonBow(parent: THREE.Object3D, sc: number, theme: PackageTheme, y: number): THREE.Group {
  const accent = new THREE.Group();
  accent.position.y = y;
  addMesh(accent, new THREE.BoxGeometry(0.34 * sc, 0.05 * sc, 0.36 * sc), glowMat(theme.ribbon, 0.85), 0, 0, 0, false);
  addMesh(accent, new THREE.BoxGeometry(0.05 * sc, 0.28 * sc, 0.36 * sc), glowMat(theme.ribbon, 0.85), 0, 0.02 * sc, 0, false);
  for (const sx of [-1, 1]) {
    addMesh(
      accent,
      new THREE.SphereGeometry(0.07 * sc, 6, 6),
      glowMat(theme.ribbon, 1.0),
      sx * 0.08 * sc,
      0.16 * sc,
      0.06 * sc,
      false
    );
  }
  addMesh(
    accent,
    new THREE.BoxGeometry(0.14 * sc, 0.04 * sc, 0.02 * sc),
    mat('#FFFDE7', { emissive: '#FFFFFF', emissiveIntensity: 0.35 }),
    0,
    0.14 * sc,
    0.2 * sc
  );
  parent.add(accent);
  return accent;
}

function addFragileTape(parent: THREE.Object3D, sc: number): void {
  addMesh(
    parent,
    new THREE.BoxGeometry(0.38 * sc, 0.05 * sc, 0.02 * sc),
    mat('#FFEB3B', { emissive: '#FFC107', emissiveIntensity: 0.45 }),
    0,
    -0.02 * sc,
    0.2 * sc
  );
  for (let i = 0; i < 3; i++) {
    addMesh(
      parent,
      new THREE.BoxGeometry(0.08 * sc, 0.055 * sc, 0.025 * sc),
      mat(i % 2 === 0 ? '#212121' : '#FFEB3B'),
      -0.1 * sc + i * 0.1 * sc,
      -0.02 * sc,
      0.22 * sc
    );
  }
}

export type PackageOrb = {
  group: THREE.Group;
  core: THREE.Mesh;
  outerGlow: THREE.Mesh;
  midShell: THREE.Mesh;
  groundRing?: THREE.Mesh;
};

export function buildPackageOrb(size: PackageSize, theme: PackageTheme = DEFAULT_THEME): PackageOrb {
  const sc = size === 'pickup' ? 1 : size === 'carried' ? 0.36 : size === 'throw' ? 0.58 : 0.48;
  const group = new THREE.Group();
  group.userData.packageOrb = true;
  group.userData.theme = { ...theme };

  const cy = size === 'pickup' ? 0.55 : size === 'carried' ? 0 : 0.35;
  const content = new THREE.Group();
  content.position.y = cy;
  group.add(content);

  let groundRing: THREE.Mesh | undefined;
  if (size === 'pickup') {
    groundRing = addMesh(
      group,
      new THREE.RingGeometry(0.38 * sc, 0.62 * sc, IS_MOBILE ? 12 : 18),
      shellMat(theme.glow, 0.38),
      0,
      0.04,
      0,
      false
    );
    groundRing.rotation.x = -Math.PI / 2;
    group.userData.groundRing = groundRing;
  }

  const outerGlow = addMesh(
    content,
    new THREE.SphereGeometry(0.48 * sc, SEG, SEG),
    shellMat(theme.glow, 0.18),
    0,
    0,
    0,
    false
  );
  group.userData.outerGlow = outerGlow;

  const midShell = addMesh(
    content,
    new THREE.BoxGeometry(0.42 * sc, 0.38 * sc, 0.42 * sc),
    glowMat(theme.shell, 0.5, 0.38),
    0,
    0,
    0,
    false
  );
  group.userData.midShell = midShell;

  const core =
    size === 'mail'
      ? addMesh(content, new THREE.BoxGeometry(0.28 * sc, 0.18 * sc, 0.06 * sc), glowMat(theme.core, 1.1), 0, 0, 0.04 * sc, false)
      : addMesh(content, new THREE.BoxGeometry(0.32 * sc, 0.3 * sc, 0.32 * sc), glowMat(theme.core, 1.25), 0, 0, 0, false);
  group.userData.core = core;

  addMesh(content, new THREE.SphereGeometry(0.1 * sc, 6, 6), glowMat('#FFFFFF', 1.2, 0.82), 0.08 * sc, 0.1 * sc, 0.14 * sc, false);

  if (size !== 'mail') {
    addRibbonBow(content, sc, theme, 0.18 * sc);
    if (size !== 'carried') addFragileTape(core, sc);
  } else {
    addMesh(content, new THREE.BoxGeometry(0.06 * sc, 0.12 * sc, 0.02 * sc), glowMat(theme.ribbon, 1.0), 0, 0.02 * sc, 0.08 * sc, false);
  }

  const orbit = size === 'carried' ? 0.28 * sc : 0.42 * sc;
  group.userData.particles = addOrbitingParticles(content, theme.particle, orbit, size === 'carried' ? 3 : PARTICLES);

  return { group, core, outerGlow, midShell, groundRing };
}

export function setPackageOrbTheme(group: THREE.Object3D, district: number, intensity: number): void {
  const theme = districtTheme(district);
  group.userData.theme = theme;

  group.traverse((c) => {
    if (!(c instanceof THREE.Mesh)) return;
    const ud = group.userData;
    if (c === ud.core && c.material instanceof THREE.MeshStandardMaterial) {
      c.material.color.set(theme.core);
      c.material.emissive.set(theme.core);
      c.material.emissiveIntensity = 0.9 + intensity * 0.4;
    }
    if (c === ud.outerGlow && c.material instanceof THREE.MeshBasicMaterial) {
      c.material.color.set(theme.glow);
    }
    if (c === ud.midShell && c.material instanceof THREE.MeshStandardMaterial) {
      c.material.color.set(theme.shell);
      c.material.emissive.set(theme.shell);
    }
    if (c === ud.groundRing && c.material instanceof THREE.MeshBasicMaterial) {
      c.material.color.set(theme.glow);
    }
  });
}

export function updatePackageOrb(group: THREE.Group, time: number, bobPhase = 0, floating = true): void {
  if (floating) {
    const bob = Math.sin(time * 3 + bobPhase) * 0.12;
    group.position.y = bob;
  }

  group.rotation.y = time * 1.4 + bobPhase;

  const core = group.userData.core as THREE.Mesh | undefined;
  const outerGlow = group.userData.outerGlow as THREE.Mesh | undefined;
  const midShell = group.userData.midShell as THREE.Mesh | undefined;
  const groundRing = group.userData.groundRing as THREE.Mesh | undefined;
  const particles = group.userData.particles as THREE.Group | undefined;

  const pulse = 1 + Math.sin(time * 4.2 + bobPhase) * 0.06;
  if (core) core.scale.setScalar(pulse);
  if (outerGlow) {
    outerGlow.scale.setScalar(1 + Math.sin(time * 3 + bobPhase) * 0.08);
    (outerGlow.material as THREE.MeshBasicMaterial).opacity = 0.14 + Math.sin(time * 5 + bobPhase) * 0.05;
  }
  if (midShell) midShell.rotation.y = -time * 2.2;
  if (groundRing) groundRing.scale.setScalar(1 + Math.sin(time * 4 + bobPhase) * 0.08);

  if (particles) {
    particles.rotation.y = time * 1.6;
    particles.children.forEach((c, i) => {
      if (!(c instanceof THREE.Mesh)) return;
      const angle = (c.userData.angle as number) + time * (1.1 + (i % 3) * 0.12);
      const orbit = c.userData.orbit as number;
      c.position.x = Math.cos(angle) * orbit;
      c.position.z = Math.sin(angle) * orbit;
      c.position.y = Math.sin(time * 4 + (c.userData.wobble as number)) * 0.08;
    });
  }
}

export function updateCarriedPackageOrb(group: THREE.Group, time: number): void {
  const core = group.userData.core as THREE.Mesh | undefined;
  const outerGlow = group.userData.outerGlow as THREE.Mesh | undefined;
  const pulse = 1 + Math.sin(time * 4) * 0.04;
  if (core) core.scale.setScalar(pulse);
  if (outerGlow) {
    outerGlow.scale.setScalar(pulse);
    (outerGlow.material as THREE.MeshBasicMaterial).opacity = 0.12 + Math.sin(time * 5) * 0.05;
  }
  const particles = group.userData.particles as THREE.Group | undefined;
  if (particles) particles.rotation.y = time * 1.2;
}

export function disposePackageOrb(group: THREE.Object3D): void {
  disposeObject3D(group);
}

export { DEFAULT_THEME, MAIL_THEME, districtTheme };
