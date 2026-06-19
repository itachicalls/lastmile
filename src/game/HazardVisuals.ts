import * as THREE from 'three';
import { addMesh, mat } from './ModelUtils';
import { IS_MOBILE } from './platform';
import type { ObstacleKind } from '../types';

const SEG = IS_MOBILE ? 6 : 10;

export function buildHazardMesh(group: THREE.Group, kind: ObstacleKind): void {
  switch (kind) {
    case 'newsbox-row':
      buildNewsboxRow(group);
      break;
    case 'dog-fence':
      buildDogFence(group);
      break;
    case 'party-tent':
      buildPartyTent(group);
      break;
    case 'bin-alley':
      buildBinAlley(group);
      break;
    case 'hoa-gate':
      buildHoaGate(group);
      break;
    case 'news-stand':
      buildNewsStand(group);
      break;
    case 'food-cart':
      buildFoodCart(group);
      break;
    case 'alien-beacon':
      buildAlienBeacon(group);
      break;
    case 'fallen-sign':
      buildFallenSign(group);
      break;
    case 'checkpoint':
      buildCheckpoint(group);
      break;
    case 'cactus-wall':
      buildCactusWall(group);
      break;
    case 'mirage-rock':
      buildMirageRock(group);
      break;
    case 'rockslide':
      buildRockslide(group);
      break;
    case 'sand-drift':
      buildSandDrift(group);
      break;
    case 'skull-rock':
      buildSkullRock(group);
      break;
    case 'fallen-log':
      buildFallenLog(group);
      break;
    case 'temple-rubble':
      buildTempleRubble(group);
      break;
    case 'thorn-bramble':
      buildThornBramble(group);
      break;
    case 'flood-wreck':
      buildFloodWreck(group);
      break;
    case 'totem-gate':
      buildTotemGate(group);
      break;
  }
}

function glowRing(parent: THREE.Object3D, radius: number, color: string, y = 0.04): THREE.Mesh {
  const ring = addMesh(
    parent,
    new THREE.RingGeometry(radius * 0.55, radius * 0.92, SEG * 2),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.45, side: THREE.DoubleSide }),
    0,
    y,
    0,
    false
  );
  ring.rotation.x = -Math.PI / 2;
  ring.userData.isGlow = true;
  return ring;
}

function hazardPad(parent: THREE.Object3D, radius: number, accent: string): void {
  addMesh(
    parent,
    new THREE.CylinderGeometry(radius * 0.95, radius, 0.05, SEG * 2),
    mat('#1a1a2e', { roughness: 0.95, emissive: accent, emissiveIntensity: 0.08 }),
    0,
    0.025,
    0,
    false
  );
  glowRing(parent, radius, accent);
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    const post = addMesh(
      parent,
      new THREE.CylinderGeometry(0.05, 0.07, 0.38, 6),
      mat(accent, { emissive: accent, emissiveIntensity: 0.5 }),
      Math.cos(a) * radius * 0.75,
      0.19,
      Math.sin(a) * radius * 0.75
    );
    post.userData.isBlink = true;
    post.userData.blinkPhase = i;
    addMesh(
      post,
      new THREE.SphereGeometry(0.07, 6, 6),
      mat('#FFEB3B', { emissive: '#FFC107', emissiveIntensity: 0.8 }),
      0,
      0.22,
      0
    );
  }
}

function cautionStripes(parent: THREE.Object3D, w: number, h: number, y: number, z: number): void {
  const board = addMesh(parent, new THREE.BoxGeometry(w, h, 0.06), mat('#212121', { roughness: 0.8 }), 0, y, z);
  for (let i = 0; i < Math.floor(w / 0.18); i++) {
    addMesh(
      board,
      new THREE.BoxGeometry(0.09, h + 0.02, 0.02),
      mat(i % 2 === 0 ? '#FFEB3B' : '#212121', { emissive: i % 2 === 0 ? '#FFC107' : '#000', emissiveIntensity: i % 2 === 0 ? 0.35 : 0 }),
      -w / 2 + 0.09 + i * 0.18,
      0,
      0.04
    );
  }
}

function buildNewsboxRow(g: THREE.Group): void {
  hazardPad(g, 0.95, '#42A5F5');
  for (const ox of [-0.55, 0, 0.55]) {
    const box = addMesh(g, new THREE.BoxGeometry(0.42, 0.62, 0.38), mat('#1565C0', { metalness: 0.35, roughness: 0.5 }), ox, 0.31, 0);
    addMesh(box, new THREE.BoxGeometry(0.44, 0.08, 0.4), mat('#0D47A1'), 0, 0.35, 0);
    addMesh(box, new THREE.PlaneGeometry(0.32, 0.38), mat('#E3F2FD', { emissive: '#90CAF9', emissiveIntensity: 0.15 }), 0, 0.02, 0.2);
    addMesh(g, new THREE.BoxGeometry(0.38, 0.06, 0.02), mat('#FFD54F', { emissive: '#FFC107', emissiveIntensity: 0.4 }), ox, 0.58, 0.2);
  }
}

function buildDogFence(g: THREE.Group): void {
  hazardPad(g, 1.0, '#FF7043');
  for (const ox of [-0.85, 0.85]) {
    addMesh(g, new THREE.BoxGeometry(0.08, 0.72, 0.08), mat('#EFEBE9', { roughness: 0.85 }), ox, 0.36, 0);
  }
  for (let i = 0; i < 5; i++) {
    const x = -0.65 + i * 0.32;
    addMesh(g, new THREE.BoxGeometry(0.28, 0.1, 0.06), mat('#EFEBE9'), x, 0.22 + (i % 2) * 0.28, 0);
    addMesh(g, new THREE.ConeGeometry(0.06, 0.14, 4), mat('#EFEBE9'), x, 0.58, 0);
  }
  addMesh(g, new THREE.CylinderGeometry(0.14, 0.16, 0.12, 8), mat('#78909C', { metalness: 0.6 }), 0.35, 0.06, 0.15);
  const bowl = addMesh(g, new THREE.CylinderGeometry(0.18, 0.14, 0.08, 8), mat('#FF7043', { emissive: '#FF5722', emissiveIntensity: 0.2 }), -0.35, 0.04, 0.12);
  bowl.userData.isBob = true;
}

function buildPartyTent(g: THREE.Group): void {
  hazardPad(g, 1.05, '#E91E63');
  const poleMat = mat('#546E7A', { metalness: 0.4 });
  for (const [px, pz] of [[-0.7, -0.35], [0.7, -0.35], [0, 0.45]] as const) {
    addMesh(g, new THREE.CylinderGeometry(0.04, 0.05, 0.85, 6), poleMat, px, 0.42, pz);
  }
  const canopy = addMesh(g, new THREE.ConeGeometry(0.95, 0.55, 4), mat('#F06292', { emissive: '#EC407A', emissiveIntensity: 0.12, roughness: 0.7 }), 0, 0.72, 0);
  canopy.rotation.y = Math.PI / 4;
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    const bal = addMesh(
      g,
      new THREE.SphereGeometry(0.1, 8, 8),
      mat(['#FFEB3B', '#42A5F5', '#66BB6A', '#FF7043'][i], { emissive: '#FFF', emissiveIntensity: 0.25 }),
      Math.cos(a) * 0.55,
      0.35 + (i % 2) * 0.15,
      Math.sin(a) * 0.35
    );
    bal.userData.isBob = true;
    bal.userData.bobPhase = i;
  }
  addMesh(g, new THREE.BoxGeometry(0.5, 0.35, 0.5), mat('#795548', { roughness: 0.9 }), 0, 0.18, 0);
}

function buildBinAlley(g: THREE.Group): void {
  hazardPad(g, 1.0, '#66BB6A');
  const colors = ['#2E7D32', '#1565C0', '#F57C00'];
  for (let i = 0; i < 3; i++) {
    const bx = -0.55 + i * 0.55;
    const bin = addMesh(g, new THREE.BoxGeometry(0.38, 0.78, 0.38), mat(colors[i], { roughness: 0.55, metalness: 0.15 }), bx, 0.39, 0);
    addMesh(bin, new THREE.BoxGeometry(0.42, 0.06, 0.42), mat('#37474F', { metalness: 0.5 }), 0, 0.42, 0);
    addMesh(bin, new THREE.BoxGeometry(0.12, 0.04, 0.02), mat('#FFD54F', { emissive: '#FFC107', emissiveIntensity: 0.5 }), 0, 0.1, 0.2);
    bin.rotation.z = (i - 1) * 0.08;
  }
}

function buildHoaGate(g: THREE.Group): void {
  hazardPad(g, 1.15, '#FF1744');
  for (const ox of [-0.95, 0.95]) {
    addMesh(g, new THREE.BoxGeometry(0.12, 0.95, 0.12), mat('#5D4037', { roughness: 0.85 }), ox, 0.47, 0);
    addMesh(g, new THREE.SphereGeometry(0.1, 8, 8), mat('#FFD54F', { emissive: '#FFC107', emissiveIntensity: 0.45 }), ox, 0.95, 0);
  }
  addMesh(g, new THREE.BoxGeometry(2.0, 0.1, 0.08), mat('#37474F', { metalness: 0.45 }), 0, 0.82, 0);
  cautionStripes(g, 1.6, 0.55, 0.45, 0.06);
  addMesh(g, new THREE.BoxGeometry(0.55, 0.35, 0.04), mat('#FF1744', { emissive: '#D50000', emissiveIntensity: 0.35 }), 0, 0.55, 0.1);
  addMesh(g, new THREE.BoxGeometry(0.4, 0.08, 0.02), mat('#FFF', { emissive: '#FFF', emissiveIntensity: 0.2 }), 0, 0.55, 0.13);
}

function buildNewsStand(g: THREE.Group): void {
  hazardPad(g, 0.95, '#FF9800');
  addMesh(g, new THREE.BoxGeometry(0.08, 0.65, 0.08), mat('#455A64', { metalness: 0.5 }), -0.4, 0.32, 0);
  addMesh(g, new THREE.BoxGeometry(0.08, 0.65, 0.08), mat('#455A64', { metalness: 0.5 }), 0.4, 0.32, 0);
  addMesh(g, new THREE.BoxGeometry(0.95, 0.08, 0.55), mat('#37474F', { metalness: 0.4 }), 0, 0.62, 0);
  addMesh(g, new THREE.BoxGeometry(0.85, 0.45, 0.45), mat('#263238'), 0, 0.38, 0);
  for (let i = 0; i < 4; i++) {
    addMesh(
      g,
      new THREE.BoxGeometry(0.16, 0.38, 0.02),
      mat(i % 2 === 0 ? '#FFEB3B' : '#212121', { emissive: i % 2 === 0 ? '#FFC107' : '#000', emissiveIntensity: 0.3 }),
      -0.28 + i * 0.18,
      0.4,
      0.24
    );
  }
  addMesh(g, new THREE.BoxGeometry(0.5, 0.12, 0.02), mat('#F44336', { emissive: '#FF1744', emissiveIntensity: 0.4 }), 0, 0.72, 0.2);
}

function buildFoodCart(g: THREE.Group): void {
  hazardPad(g, 1.0, '#FF5722');
  addMesh(g, new THREE.BoxGeometry(0.08, 0.55, 0.08), mat('#37474F', { metalness: 0.55 }), -0.35, 0.28, -0.2);
  addMesh(g, new THREE.BoxGeometry(0.08, 0.55, 0.08), mat('#37474F', { metalness: 0.55 }), 0.35, 0.28, -0.2);
  addMesh(g, new THREE.BoxGeometry(0.85, 0.55, 0.55), mat('#FF7043', { emissive: '#FF5722', emissiveIntensity: 0.1 }), 0, 0.55, 0);
  addMesh(g, new THREE.BoxGeometry(0.9, 0.06, 0.6), mat('#BF360C'), 0, 0.84, 0);
  addMesh(g, new THREE.BoxGeometry(0.65, 0.35, 0.02), mat('#FFFDE7', { emissive: '#FFD54F', emissiveIntensity: 0.25 }), 0, 0.65, 0.3);
  for (let i = 0; i < 3; i++) {
    addMesh(g, new THREE.CylinderGeometry(0.06, 0.06, 0.02, 8), mat('#FFD54F', { emissive: '#FFC107', emissiveIntensity: 0.6 }), -0.2 + i * 0.2, 0.88, 0.15);
  }
  const steam = addMesh(g, new THREE.SphereGeometry(0.12, 6, 6), mat('#FFF', { transparent: true, opacity: 0.25 }), 0, 0.95, 0.1, false);
  steam.userData.isBob = true;
}

function buildAlienBeacon(g: THREE.Group): void {
  hazardPad(g, 0.92, '#76FF03');
  addMesh(g, new THREE.CylinderGeometry(0.55, 0.72, 0.14, SEG), mat('#607D8B', { metalness: 0.65, emissive: '#00E676', emissiveIntensity: 0.35 }), 0, 0.07, 0);
  addMesh(g, new THREE.SphereGeometry(0.38, 10, 8, 0, Math.PI * 2, 0, Math.PI / 2), mat('#80DEEA', { transparent: true, opacity: 0.65, emissive: '#00BCD4', emissiveIntensity: 0.3 }), 0, 0.12, 0);
  const core = addMesh(g, new THREE.SphereGeometry(0.18, 8, 8), mat('#76FF03', { emissive: '#64DD17', emissiveIntensity: 0.9 }), 0, 0.55, 0);
  core.userData.isBob = true;
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    const beam = addMesh(
      g,
      new THREE.BoxGeometry(0.04, 0.5, 0.04),
      mat('#76FF03', { emissive: '#76FF03', emissiveIntensity: 0.7, transparent: true, opacity: 0.6 }),
      Math.cos(a) * 0.25,
      0.35,
      Math.sin(a) * 0.25
    );
    beam.userData.isSpin = true;
  }
  addMesh(g, new THREE.CircleGeometry(0.85, SEG), mat('#76FF03', { emissive: '#33691E', emissiveIntensity: 0.4, transparent: true, opacity: 0.5 }), 0, 0.02, 0, false);
}

function buildFallenSign(g: THREE.Group): void {
  hazardPad(g, 0.88, '#FFC107');
  addMesh(g, new THREE.CylinderGeometry(0.06, 0.08, 0.9, 6), mat('#78909C', { metalness: 0.5 }), 0.3, 0.12, 0.2);
  const sign = addMesh(g, new THREE.BoxGeometry(1.1, 0.65, 0.06), mat('#FFD54F', { emissive: '#FFC107', emissiveIntensity: 0.2 }), -0.1, 0.18, -0.05);
  sign.rotation.z = 1.15;
  addMesh(sign, new THREE.BoxGeometry(0.15, 0.45, 0.02), mat('#212121'), 0, 0, 0.05);
  addMesh(sign, new THREE.BoxGeometry(0.12, 0.12, 0.02), mat('#212121'), 0.15, -0.12, 0.05);
  for (let i = 0; i < 3; i++) {
    addMesh(g, new THREE.BoxGeometry(0.08, 0.04, 0.25), mat('#546E7A', { metalness: 0.4 }), -0.3 + i * 0.15, 0.04, 0.1 + i * 0.08);
  }
}

function buildCheckpoint(g: THREE.Group): void {
  hazardPad(g, 1.12, '#448AFF');
  for (const ox of [-0.9, 0.9]) {
    addMesh(g, new THREE.BoxGeometry(0.1, 0.88, 0.1), mat('#263238'), ox, 0.44, 0);
    addMesh(g, new THREE.BoxGeometry(0.14, 0.14, 0.14), mat('#FFD54F', { emissive: '#FFC107', emissiveIntensity: 0.55 }), ox, 0.92, 0);
  }
  addMesh(g, new THREE.BoxGeometry(1.85, 0.12, 0.1), mat('#1565C0', { emissive: '#2979FF', emissiveIntensity: 0.15 }), 0, 0.78, 0);
  cautionStripes(g, 1.4, 0.5, 0.42, 0.08);
  addMesh(g, new THREE.BoxGeometry(0.35, 0.35, 0.04), mat('#FF1744', { emissive: '#D50000', emissiveIntensity: 0.4 }), 0, 0.55, 0.12);
}

function buildCactusWall(g: THREE.Group): void {
  hazardPad(g, 1.05, '#FF9800');
  for (const ox of [-0.55, 0, 0.55]) {
    const c = addMesh(g, new THREE.CylinderGeometry(0.14, 0.18, 0.75 + Math.abs(ox) * 0.1, 8), mat('#558B2F', { roughness: 0.9 }), ox, 0.38, 0);
    addMesh(c, new THREE.CylinderGeometry(0.1, 0.12, 0.35, 6), mat('#33691E'), ox + (ox > 0 ? 0.18 : -0.18), 0.55, 0);
    for (let s = 0; s < 4; s++) {
      addMesh(g, new THREE.ConeGeometry(0.03, 0.06, 4), mat('#33691E'), ox + 0.12, 0.2 + s * 0.15, 0.08);
    }
  }
  addMesh(g, new THREE.BoxGeometry(1.6, 0.04, 0.5), mat('#BCAAA4', { roughness: 0.95 }), 0, 0.02, 0);
}

function buildMirageRock(g: THREE.Group): void {
  hazardPad(g, 0.95, '#FFE082');
  for (let i = 0; i < 3; i++) {
    const rock = addMesh(
      g,
      new THREE.DodecahedronGeometry(0.28 + i * 0.08, 0),
      mat('#A1887F', { roughness: 0.95, emissive: '#FFE082', emissiveIntensity: 0.08 }),
      -0.35 + i * 0.35,
      0.22 + i * 0.08,
      (i - 1) * 0.12
    );
    rock.rotation.set(0.2, i * 0.5, 0.15);
    rock.userData.isBob = true;
    rock.userData.bobPhase = i;
  }
  const shimmer = addMesh(
    g,
    new THREE.RingGeometry(0.3, 0.85, SEG * 2),
    new THREE.MeshBasicMaterial({ color: '#FFF9C4', transparent: true, opacity: 0.25, side: THREE.DoubleSide }),
    0,
    0.06,
    0,
    false
  );
  shimmer.rotation.x = -Math.PI / 2;
  shimmer.userData.isGlow = true;
}

function buildRockslide(g: THREE.Group): void {
  hazardPad(g, 1.08, '#FF7043');
  const rockMat = mat('#78909C', { roughness: 0.92 });
  addMesh(g, new THREE.BoxGeometry(1.4, 0.35, 0.7), rockMat, 0, 0.18, 0);
  for (let i = 0; i < 5; i++) {
    const r = addMesh(
      g,
      new THREE.DodecahedronGeometry(0.22 + (i % 3) * 0.06, 0),
      mat(i % 2 === 0 ? '#78909C' : '#607D8B', { roughness: 0.95 }),
      -0.5 + i * 0.25,
      0.35 + (i % 2) * 0.12,
      (i - 2) * 0.1
    );
    r.rotation.y = i * 0.7;
  }
  for (let i = 0; i < 3; i++) {
    const dust = addMesh(g, new THREE.SphereGeometry(0.15, 6, 6), mat('#BCAAA4', { transparent: true, opacity: 0.2 }), 0.2 + i * 0.15, 0.55 + i * 0.1, 0.1);
    dust.userData.isBob = true;
    dust.userData.bobPhase = i;
  }
}

function buildSandDrift(g: THREE.Group): void {
  hazardPad(g, 0.9, '#FFB74D');
  addMesh(g, new THREE.SphereGeometry(0.75, SEG, SEG, 0, Math.PI * 2, 0, Math.PI / 2.2), mat('#FFE082', { roughness: 0.98 }), 0, 0.08, 0);
  addMesh(g, new THREE.SphereGeometry(0.45, SEG, SEG, 0, Math.PI * 2, 0, Math.PI / 2.5), mat('#FFCC80', { roughness: 0.98 }), 0.4, 0.06, 0.15);
  addMesh(g, new THREE.SphereGeometry(0.35, SEG, SEG, 0, Math.PI * 2, 0, Math.PI / 2.5), mat('#FFCC80', { roughness: 0.98 }), -0.35, 0.05, -0.1);
  for (let i = 0; i < 4; i++) {
    const wisp = addMesh(
      g,
      new THREE.SphereGeometry(0.08, 6, 6),
      mat('#FFF8E1', { transparent: true, opacity: 0.35 }),
      (i - 1.5) * 0.2,
      0.35 + i * 0.08,
      0.2
    );
    wisp.userData.isBob = true;
    wisp.userData.bobPhase = i;
  }
}

function buildSkullRock(g: THREE.Group): void {
  hazardPad(g, 1.05, '#FF5722');
  addMesh(g, new THREE.BoxGeometry(1.2, 0.4, 0.65), mat('#8D6E63', { roughness: 0.95 }), 0, 0.2, 0);
  const skull = addMesh(g, new THREE.SphereGeometry(0.32, 10, 10), mat('#BCAAA4', { roughness: 0.9 }), 0, 0.52, 0.15);
  addMesh(skull, new THREE.BoxGeometry(0.08, 0.1, 0.02), mat('#212121'), -0.1, 0.05, 0.28);
  addMesh(skull, new THREE.BoxGeometry(0.08, 0.1, 0.02), mat('#212121'), 0.1, 0.05, 0.28);
  addMesh(skull, new THREE.BoxGeometry(0.14, 0.06, 0.02), mat('#212121'), 0, -0.08, 0.28);
  addMesh(g, new THREE.CylinderGeometry(0.04, 0.04, 0.5, 6), mat('#795548'), 0.45, 0.55, -0.1);
  addMesh(g, new THREE.CylinderGeometry(0.04, 0.04, 0.45, 6), mat('#795548'), -0.4, 0.52, -0.15);
}

function buildFallenLog(g: THREE.Group): void {
  hazardPad(g, 1.0, '#66BB6A');
  const log = addMesh(g, new THREE.CylinderGeometry(0.28, 0.32, 1.6, SEG), mat('#5D4037', { roughness: 0.95 }), 0, 0.28, 0);
  log.rotation.z = Math.PI / 2;
  addMesh(log, new THREE.CircleGeometry(0.28, SEG), mat('#8D6E63', { roughness: 0.9 }), 0.8, 0, 0);
  for (let i = 0; i < 3; i++) {
    addMesh(g, new THREE.BoxGeometry(0.06, 0.25, 0.02), mat('#2E7D32', { emissive: '#1B5E20', emissiveIntensity: 0.15 }), -0.3 + i * 0.3, 0.15, 0.25);
  }
  addMesh(g, new THREE.SphereGeometry(0.12, 6, 6), mat('#FF7043', { emissive: '#E64A19', emissiveIntensity: 0.3 }), 0.5, 0.35, 0.2);
}

function buildTempleRubble(g: THREE.Group): void {
  hazardPad(g, 1.02, '#FFD54F');
  addMesh(g, new THREE.BoxGeometry(0.55, 0.75, 0.45), mat('#78909C', { roughness: 0.88 }), -0.35, 0.38, 0);
  addMesh(g, new THREE.BoxGeometry(0.45, 0.35, 0.4), mat('#607D8B', { roughness: 0.9 }), 0.3, 0.18, 0.1);
  const pillar = addMesh(g, new THREE.CylinderGeometry(0.18, 0.22, 0.55, 8), mat('#B0BEC5', { roughness: 0.85 }), 0.35, 0.55, -0.15);
  pillar.rotation.z = 0.35;
  addMesh(g, new THREE.BoxGeometry(0.5, 0.08, 0.5), mat('#455A64'), 0, 0.04, 0);
  for (let i = 0; i < 3; i++) {
    addMesh(
      g,
      new THREE.BoxGeometry(0.12, 0.12, 0.02),
      mat('#FFD54F', { emissive: '#FFC107', emissiveIntensity: 0.35 }),
      -0.1 + i * 0.12,
      0.55,
      0.25
    );
  }
}

function buildThornBramble(g: THREE.Group): void {
  hazardPad(g, 0.95, '#FF1744');
  addMesh(g, new THREE.SphereGeometry(0.55, 8, 8), mat('#2E7D32', { emissive: '#1B5E20', emissiveIntensity: 0.12, roughness: 0.95 }), 0, 0.35, 0);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const thorn = addMesh(
      g,
      new THREE.ConeGeometry(0.04, 0.35, 4),
      mat('#33691E', { emissive: '#1B5E20', emissiveIntensity: 0.1 }),
      Math.cos(a) * 0.45,
      0.25 + (i % 3) * 0.12,
      Math.sin(a) * 0.45
    );
    thorn.rotation.x = -0.6;
    thorn.rotation.y = a;
  }
  addMesh(g, new THREE.BoxGeometry(0.25, 0.25, 0.04), mat('#FF1744', { emissive: '#D50000', emissiveIntensity: 0.35 }), 0, 0.55, 0.35);
}

function buildFloodWreck(g: THREE.Group): void {
  hazardPad(g, 0.98, '#29B6F6');
  addMesh(g, new THREE.BoxGeometry(1.1, 0.08, 0.6), mat('#0288D1', { transparent: true, opacity: 0.55, emissive: '#0288D1', emissiveIntensity: 0.15 }), 0, 0.04, 0);
  addMesh(g, new THREE.BoxGeometry(0.55, 0.35, 0.4), mat('#546E7A', { metalness: 0.5 }), 0.2, 0.22, 0);
  addMesh(g, new THREE.BoxGeometry(0.35, 0.2, 0.3), mat('#78909C', { metalness: 0.4 }), -0.35, 0.15, 0.05);
  const crate = addMesh(g, new THREE.BoxGeometry(0.3, 0.3, 0.3), mat('#689F38', { emissive: '#33691E', emissiveIntensity: 0.15 }), -0.15, 0.28, 0.15);
  crate.userData.isBob = true;
  for (let i = 0; i < 3; i++) {
    addMesh(
      g,
      new THREE.RingGeometry(0.08, 0.14, 8),
      new THREE.MeshBasicMaterial({ color: '#4FC3F7', transparent: true, opacity: 0.4, side: THREE.DoubleSide }),
      -0.3 + i * 0.3,
      0.06,
      0.15,
      false
    );
  }
}

function buildTotemGate(g: THREE.Group): void {
  hazardPad(g, 1.15, '#FF5722');
  for (const ox of [-0.65, 0.65]) {
    const totem = addMesh(g, new THREE.CylinderGeometry(0.18, 0.22, 1.05, 8), mat('#5D4037', { roughness: 0.9 }), ox, 0.52, 0);
    addMesh(totem, new THREE.BoxGeometry(0.28, 0.12, 0.28), mat('#FF7043', { emissive: '#FF5722', emissiveIntensity: 0.25 }), 0, 0.35, 0.12);
    addMesh(totem, new THREE.BoxGeometry(0.22, 0.1, 0.22), mat('#FFD54F', { emissive: '#FFC107', emissiveIntensity: 0.35 }), 0, 0.65, 0.12);
    addMesh(totem, new THREE.BoxGeometry(0.1, 0.1, 0.02), mat('#212121'), -0.04, 0.78, 0.14);
    addMesh(totem, new THREE.BoxGeometry(0.1, 0.1, 0.02), mat('#212121'), 0.04, 0.78, 0.14);
  }
  addMesh(g, new THREE.BoxGeometry(1.5, 0.12, 0.1), mat('#33691E', { emissive: '#1B5E20', emissiveIntensity: 0.15 }), 0, 0.95, 0);
  addMesh(g, new THREE.BoxGeometry(0.08, 0.55, 0.08), mat('#33691E'), 0, 0.72, 0.15);
}
