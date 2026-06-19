import * as THREE from 'three';
import { addMesh, mat } from './ModelUtils';
import { IS_MOBILE } from './platform';
import type { ObstacleKind } from '../types';

const SEG = IS_MOBILE ? 8 : 12;

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
    case 'mailbox-row':
      buildMailboxRow(group);
      break;
    case 'lawn-sprinkler':
      buildLawnSprinkler(group);
      break;
    case 'package-spill':
      buildPackageSpill(group);
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
    case 'traffic-barricade':
      buildTrafficBarricade(group);
      break;
    case 'burst-hydrant':
      buildBurstHydrant(group);
      break;
    case 'bus-shelter':
      buildBusShelter(group);
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
    case 'tumbleweed':
      buildTumbleweed(group);
      break;
    case 'bone-arch':
      buildBoneArch(group);
      break;
    case 'sun-bleached-wreck':
      buildSunBleachedWreck(group);
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
    case 'vine-snare':
      buildVineSnare(group);
      break;
    case 'quicksand-pit':
      buildQuicksandPit(group);
      break;
    case 'idol-shrine':
      buildIdolShrine(group);
      break;
  }
}

/** Subtle road wear + high-visibility hazard marker ring */
function groundBase(parent: THREE.Object3D, radius: number): void {
  if (IS_MOBILE) {
    const pad = addMesh(
      parent,
      new THREE.CircleGeometry(radius * 0.68, SEG * 2),
      mat('#ECEFF1', { roughness: 0.92, metalness: 0.02 }),
      0,
      0.008,
      0,
      false
    );
    pad.rotation.x = -Math.PI / 2;
    pad.userData.isHazardPad = true;
  }

  const shadow = addMesh(
    parent,
    new THREE.CircleGeometry(radius * 0.98, SEG * 2),
    mat('#0a0c12', { transparent: true, opacity: IS_MOBILE ? 0.28 : 0.52, roughness: 1 }),
    0,
    0.005,
    0,
    false
  );
  shadow.rotation.x = -Math.PI / 2;

  const warnRing = addMesh(
    parent,
    new THREE.RingGeometry(radius * 0.72, radius * 0.96, SEG * 2),
    new THREE.MeshBasicMaterial({
      color: '#FF9800',
      transparent: true,
      opacity: IS_MOBILE ? 0.58 : 0.42,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
    0,
    0.012,
    0,
    false
  );
  warnRing.rotation.x = -Math.PI / 2;
  warnRing.userData.isGlow = true;

  const innerRing = addMesh(
    parent,
    new THREE.RingGeometry(radius * 0.38, radius * 0.52, SEG * 2),
    new THREE.MeshBasicMaterial({
      color: '#FFE082',
      transparent: true,
      opacity: IS_MOBILE ? 0.38 : 0.22,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
    0,
    0.014,
    0,
    false
  );
  innerRing.rotation.x = -Math.PI / 2;
  innerRing.userData.isGlow = true;

  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    const post = addMesh(
      parent,
      new THREE.CylinderGeometry(0.025, 0.035, 0.28, 4),
      mat('#FF9800', { emissive: '#FF9800', emissiveIntensity: IS_MOBILE ? 0.55 : 0.35, roughness: 0.6 }),
      Math.cos(a) * radius * 0.82,
      0.14,
      Math.sin(a) * radius * 0.82
    );
    addMesh(
      post,
      new THREE.SphereGeometry(0.045, 6, 6),
      mat('#FFEB3B', { emissive: '#FFC107', emissiveIntensity: 0.55 }),
      0,
      0.16,
      0
    );
  }
}

function woodMat(color: string) {
  return mat(color, { roughness: 0.88, metalness: 0.02 });
}

function metalMat(color: string, metalness = 0.55) {
  return mat(color, { roughness: 0.35, metalness });
}

function cautionStripes(parent: THREE.Object3D, w: number, h: number, y: number, z: number): void {
  const board = addMesh(parent, new THREE.BoxGeometry(w, h, 0.06), mat('#1c1c1c', { roughness: 0.85 }), 0, y, z);
  for (let i = 0; i < Math.floor(w / 0.18); i++) {
    addMesh(
      board,
      new THREE.BoxGeometry(0.09, h + 0.02, 0.02),
      mat(i % 2 === 0 ? '#F9A825' : '#1c1c1c', { roughness: 0.7 }),
      -w / 2 + 0.09 + i * 0.18,
      0,
      0.04
    );
  }
}

function buildNewsboxRow(g: THREE.Group): void {
  groundBase(g, 0.95);
  for (const ox of [-0.55, 0, 0.55]) {
    const box = addMesh(g, new THREE.BoxGeometry(0.44, 0.68, 0.4), metalMat('#1E4E8C', 0.4), ox, 0.34, 0);
    addMesh(box, new THREE.BoxGeometry(0.46, 0.1, 0.42), metalMat('#0D2F5C'), 0, 0.39, 0);
    addMesh(box, new THREE.PlaneGeometry(0.34, 0.42), mat('#E8F4FD', { roughness: 0.4 }), 0, 0.02, 0.21);
    addMesh(box, new THREE.BoxGeometry(0.36, 0.05, 0.02), mat('#F5C518', { roughness: 0.5 }), 0, 0.22, 0.22);
    addMesh(g, new THREE.CylinderGeometry(0.02, 0.02, 0.08, 6), metalMat('#78909C'), ox + 0.18, 0.08, 0.15);
  }
}

function buildDogFence(g: THREE.Group): void {
  groundBase(g, 1.0);
  for (const ox of [-0.88, 0.88]) {
    addMesh(g, new THREE.BoxGeometry(0.07, 0.78, 0.07), woodMat('#D7CCC8'), ox, 0.39, 0);
    addMesh(g, new THREE.BoxGeometry(0.1, 0.1, 0.1), woodMat('#A1887F'), ox, 0.82, 0);
  }
  for (let i = 0; i < 6; i++) {
    const x = -0.75 + i * 0.3;
    addMesh(g, new THREE.BoxGeometry(0.26, 0.08, 0.05), woodMat('#EFEBE9'), x, 0.2 + (i % 2) * 0.28, 0);
    addMesh(g, new THREE.ConeGeometry(0.05, 0.12, 4), woodMat('#BCAAA4'), x, 0.58, 0);
  }
  addMesh(g, new THREE.CylinderGeometry(0.13, 0.15, 0.1, 8), metalMat('#607D8B'), 0.38, 0.05, 0.14);
  addMesh(g, new THREE.CylinderGeometry(0.17, 0.14, 0.07, 8), mat('#BF360C', { roughness: 0.6 }), -0.38, 0.035, 0.12);
}

function buildPartyTent(g: THREE.Group): void {
  groundBase(g, 1.05);
  const poleMat = metalMat('#546E7A', 0.45);
  for (const [px, pz] of [[-0.72, -0.38], [0.72, -0.38], [0, 0.48]] as const) {
    addMesh(g, new THREE.CylinderGeometry(0.035, 0.045, 0.9, 8), poleMat, px, 0.45, pz);
  }
  const canopy = addMesh(g, new THREE.ConeGeometry(1.0, 0.58, 4), mat('#C2185B', { roughness: 0.75 }), 0, 0.76, 0);
  canopy.rotation.y = Math.PI / 4;
  addMesh(canopy, new THREE.ConeGeometry(0.98, 0.56, 4), mat('#880E4F', { roughness: 0.8 }), 0, 0.01, 0);
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    const bal = addMesh(
      g,
      new THREE.SphereGeometry(0.09, 8, 8),
      mat(['#FDD835', '#42A5F5', '#66BB6A', '#FF7043', '#AB47BC'][i], { roughness: 0.5 }),
      Math.cos(a) * 0.58,
      0.38 + (i % 2) * 0.12,
      Math.sin(a) * 0.38
    );
    bal.userData.isBob = true;
    bal.userData.bobPhase = i;
  }
  addMesh(g, new THREE.BoxGeometry(0.55, 0.38, 0.52), woodMat('#5D4037'), 0, 0.19, 0);
  addMesh(g, new THREE.CylinderGeometry(0.04, 0.04, 0.12, 6), mat('#ECEFF1'), 0.15, 0.44, 0.1);
}

function buildBinAlley(g: THREE.Group): void {
  groundBase(g, 1.0);
  const colors = ['#2E7D32', '#1565C0', '#E65100'];
  for (let i = 0; i < 3; i++) {
    const bx = -0.55 + i * 0.55;
    const bin = addMesh(g, new THREE.BoxGeometry(0.4, 0.82, 0.4), mat(colors[i], { roughness: 0.5, metalness: 0.2 }), bx, 0.41, 0);
    addMesh(bin, new THREE.BoxGeometry(0.44, 0.07, 0.44), metalMat('#37474F'), 0, 0.44, 0);
    addMesh(bin, new THREE.BoxGeometry(0.14, 0.05, 0.02), mat('#FDD835', { roughness: 0.55 }), 0, 0.12, 0.21);
    addMesh(bin, new THREE.CylinderGeometry(0.03, 0.03, 0.06, 6), metalMat('#455A64'), 0.14, 0.55, 0.12);
    bin.rotation.z = (i - 1) * 0.07;
  }
}

function buildHoaGate(g: THREE.Group): void {
  groundBase(g, 1.15);
  for (const ox of [-0.98, 0.98]) {
    addMesh(g, new THREE.BoxGeometry(0.14, 1.0, 0.14), woodMat('#4E342E'), ox, 0.5, 0);
    addMesh(g, new THREE.SphereGeometry(0.11, 8, 8), mat('#F9A825', { roughness: 0.45 }), ox, 1.02, 0);
  }
  addMesh(g, new THREE.BoxGeometry(2.05, 0.12, 0.1), metalMat('#455A64'), 0, 0.88, 0);
  cautionStripes(g, 1.65, 0.58, 0.48, 0.07);
  addMesh(g, new THREE.BoxGeometry(0.58, 0.38, 0.05), mat('#C62828', { roughness: 0.55 }), 0, 0.58, 0.11);
  addMesh(g, new THREE.PlaneGeometry(0.38, 0.1), mat('#FAFAFA', { roughness: 0.6 }), 0, 0.58, 0.14);
}

function buildMailboxRow(g: THREE.Group): void {
  groundBase(g, 0.88);
  for (const ox of [-0.5, 0, 0.5]) {
    addMesh(g, new THREE.CylinderGeometry(0.04, 0.05, 0.55, 6), metalMat('#546E7A'), ox, 0.28, 0);
    const box = addMesh(g, new THREE.BoxGeometry(0.32, 0.28, 0.48), mat('#1565C0', { roughness: 0.45, metalness: 0.35 }), ox, 0.58, 0);
    addMesh(box, new THREE.BoxGeometry(0.34, 0.06, 0.5), metalMat('#0D47A1'), 0, 0.17, 0);
    addMesh(box, new THREE.PlaneGeometry(0.22, 0.14), mat('#ECEFF1', { roughness: 0.4 }), 0, 0.02, 0.25);
    addMesh(g, new THREE.BoxGeometry(0.08, 0.04, 0.02), mat('#FDD835'), ox, 0.52, 0.26);
  }
}

function buildLawnSprinkler(g: THREE.Group): void {
  groundBase(g, 0.85);
  for (const [ox, oz] of [[-0.35, 0.1], [0.35, -0.08]] as const) {
    addMesh(g, new THREE.CylinderGeometry(0.05, 0.07, 0.06, 8), metalMat('#78909C'), ox, 0.03, oz);
    const head = addMesh(g, new THREE.CylinderGeometry(0.04, 0.05, 0.18, 8), metalMat('#455A64'), ox, 0.12, oz);
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2 + ox;
      const jet = addMesh(
        g,
        new THREE.CylinderGeometry(0.008, 0.015, 0.35, 4),
        mat('#81D4FA', { transparent: true, opacity: 0.55, roughness: 0.2 }),
        ox + Math.cos(a) * 0.12,
        0.32,
        oz + Math.sin(a) * 0.12
      );
      jet.rotation.z = 0.85;
      jet.rotation.y = a;
      jet.userData.isBob = true;
      jet.userData.bobPhase = i;
    }
  }
  addMesh(g, new THREE.BoxGeometry(0.7, 0.02, 0.35), mat('#33691E', { roughness: 0.95 }), 0, 0.01, 0);
}

function buildPackageSpill(g: THREE.Group): void {
  groundBase(g, 0.92);
  const boxColors = ['#8D6E63', '#5D4037', '#795548', '#6D4C41'];
  for (let i = 0; i < 5; i++) {
    const bx = -0.45 + (i % 3) * 0.42;
    const bz = -0.15 + Math.floor(i / 3) * 0.28;
    const pkg = addMesh(
      g,
      new THREE.BoxGeometry(0.28 + (i % 2) * 0.06, 0.22 + (i % 3) * 0.04, 0.24),
      mat(boxColors[i], { roughness: 0.85 }),
      bx,
      0.12 + (i % 2) * 0.08,
      bz
    );
    pkg.rotation.y = i * 0.45;
    addMesh(pkg, new THREE.BoxGeometry(0.14, 0.04, 0.02), mat('#FDD835', { roughness: 0.6 }), 0, 0.08, 0.13);
    addMesh(pkg, new THREE.BoxGeometry(0.04, 0.14, 0.02), mat('#37474F'), -0.06, 0, 0.13);
  }
  addMesh(g, new THREE.PlaneGeometry(0.55, 0.35), mat('#ECEFF1', { transparent: true, opacity: 0.35 }), 0.1, 0.02, 0.2, false);
}

function buildNewsStand(g: THREE.Group): void {
  groundBase(g, 0.95);
  for (const ox of [-0.42, 0.42]) {
    addMesh(g, new THREE.BoxGeometry(0.07, 0.7, 0.07), metalMat('#37474F'), ox, 0.35, 0);
  }
  addMesh(g, new THREE.BoxGeometry(1.0, 0.1, 0.58), metalMat('#263238', 0.5), 0, 0.66, 0);
  addMesh(g, new THREE.BoxGeometry(0.9, 0.48, 0.48), mat('#1a1a1a', { roughness: 0.9 }), 0, 0.4, 0);
  for (let i = 0; i < 5; i++) {
    addMesh(
      g,
      new THREE.BoxGeometry(0.14, 0.4, 0.02),
      mat(i % 2 === 0 ? '#F9A825' : '#212121', { roughness: 0.65 }),
      -0.32 + i * 0.16,
      0.42,
      0.25
    );
  }
  addMesh(g, new THREE.BoxGeometry(0.52, 0.14, 0.02), mat('#C62828', { roughness: 0.55 }), 0, 0.76, 0.22);
}

function buildFoodCart(g: THREE.Group): void {
  groundBase(g, 1.0);
  for (const ox of [-0.38, 0.38]) {
    addMesh(g, new THREE.CylinderGeometry(0.06, 0.06, 0.02, 8), metalMat('#263238'), ox, 0.06, -0.22);
    addMesh(g, new THREE.CylinderGeometry(0.06, 0.06, 0.02, 8), mat('#212121', { roughness: 0.8 }), ox, 0.06, 0.22);
    addMesh(g, new THREE.CylinderGeometry(0.04, 0.04, 0.52, 8), metalMat('#37474F'), ox, 0.32, -0.22);
  }
  addMesh(g, new THREE.BoxGeometry(0.9, 0.58, 0.58), mat('#E64A19', { roughness: 0.55 }), 0, 0.58, 0);
  addMesh(g, new THREE.BoxGeometry(0.95, 0.08, 0.62), mat('#BF360C', { roughness: 0.7 }), 0, 0.88, 0);
  addMesh(g, new THREE.BoxGeometry(0.68, 0.38, 0.02), mat('#FFF8E1', { roughness: 0.5 }), 0, 0.68, 0.31);
  for (let i = 0; i < 3; i++) {
    addMesh(g, new THREE.CylinderGeometry(0.05, 0.05, 0.03, 8), mat('#FDD835', { roughness: 0.45 }), -0.22 + i * 0.22, 0.92, 0.16);
  }
  const steam = addMesh(g, new THREE.SphereGeometry(0.1, 6, 6), mat('#ECEFF1', { transparent: true, opacity: 0.2 }), 0, 0.98, 0.08, false);
  steam.userData.isBob = true;
}

function buildAlienBeacon(g: THREE.Group): void {
  groundBase(g, 0.92);
  addMesh(g, new THREE.CylinderGeometry(0.58, 0.74, 0.16, SEG), metalMat('#455A64', 0.65), 0, 0.08, 0);
  addMesh(g, new THREE.TorusGeometry(0.42, 0.04, 8, SEG), metalMat('#607D8B'), 0, 0.16, 0);
  addMesh(
    g,
    new THREE.SphereGeometry(0.36, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2),
    mat('#4DD0E1', { transparent: true, opacity: 0.5, roughness: 0.3 }),
    0,
    0.14,
    0
  );
  const core = addMesh(g, new THREE.OctahedronGeometry(0.16, 0), mat('#76FF03', { emissive: '#558B2F', emissiveIntensity: 0.35, roughness: 0.4 }), 0, 0.58, 0);
  core.userData.isBob = true;
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    addMesh(
      g,
      new THREE.BoxGeometry(0.03, 0.42, 0.03),
      mat('#AEEA00', { transparent: true, opacity: 0.45 }),
      Math.cos(a) * 0.28,
      0.32,
      Math.sin(a) * 0.28
    );
  }
}

function buildFallenSign(g: THREE.Group): void {
  groundBase(g, 0.88);
  addMesh(g, new THREE.CylinderGeometry(0.05, 0.07, 0.95, 8), metalMat('#78909C'), 0.32, 0.1, 0.22);
  const sign = addMesh(g, new THREE.BoxGeometry(1.15, 0.68, 0.07), mat('#F9A825', { roughness: 0.55 }), -0.12, 0.2, -0.06);
  sign.rotation.z = 1.12;
  addMesh(sign, new THREE.BoxGeometry(0.16, 0.48, 0.02), mat('#212121'), 0, 0, 0.05);
  addMesh(sign, new THREE.BoxGeometry(0.12, 0.12, 0.02), mat('#212121'), 0.16, -0.12, 0.05);
  for (let i = 0; i < 4; i++) {
    addMesh(g, new THREE.BoxGeometry(0.07, 0.04, 0.28), metalMat('#607D8B'), -0.32 + i * 0.14, 0.04, 0.08 + i * 0.07);
  }
}

function buildCheckpoint(g: THREE.Group): void {
  groundBase(g, 1.12);
  for (const ox of [-0.92, 0.92]) {
    addMesh(g, new THREE.BoxGeometry(0.11, 0.92, 0.11), mat('#1a1a1a', { roughness: 0.85 }), ox, 0.46, 0);
    addMesh(g, new THREE.BoxGeometry(0.15, 0.15, 0.15), mat('#F9A825', { roughness: 0.45 }), ox, 0.96, 0);
  }
  addMesh(g, new THREE.BoxGeometry(1.9, 0.14, 0.12), mat('#1565C0', { roughness: 0.5, metalness: 0.25 }), 0, 0.82, 0);
  cautionStripes(g, 1.45, 0.52, 0.44, 0.09);
  addMesh(g, new THREE.BoxGeometry(0.38, 0.38, 0.05), mat('#C62828', { roughness: 0.55 }), 0, 0.58, 0.13);
}

function buildTrafficBarricade(g: THREE.Group): void {
  groundBase(g, 1.0);
  for (const ox of [-0.55, 0.55]) {
    addMesh(g, new THREE.BoxGeometry(0.08, 0.62, 0.08), metalMat('#37474F'), ox, 0.31, 0);
    addMesh(g, new THREE.CylinderGeometry(0.04, 0.04, 0.02, 6), mat('#212121'), ox, 0.02, 0.12);
  }
  for (let i = 0; i < 3; i++) {
    const bar = addMesh(g, new THREE.BoxGeometry(1.15, 0.14, 0.08), mat(i % 2 === 0 ? '#F9A825' : '#212121', { roughness: 0.6 }), 0, 0.22 + i * 0.18, 0);
    bar.rotation.z = (i - 1) * 0.04;
  }
  addMesh(g, new THREE.BoxGeometry(0.35, 0.22, 0.03), mat('#FAFAFA', { roughness: 0.7 }), 0, 0.48, 0.06);
}

function buildBurstHydrant(g: THREE.Group): void {
  groundBase(g, 0.9);
  addMesh(g, new THREE.CylinderGeometry(0.14, 0.16, 0.38, 10), mat('#C62828', { roughness: 0.45, metalness: 0.3 }), 0, 0.19, 0);
  addMesh(g, new THREE.CylinderGeometry(0.1, 0.1, 0.08, 10), mat('#B71C1C', { roughness: 0.45 }), 0, 0.4, 0);
  for (const ox of [-0.12, 0.12]) {
    addMesh(g, new THREE.CylinderGeometry(0.05, 0.05, 0.14, 8), mat('#C62828', { roughness: 0.45 }), ox, 0.28, 0.1);
  }
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    const drop = addMesh(
      g,
      new THREE.SphereGeometry(0.04 + (i % 2) * 0.02, 6, 6),
      mat('#29B6F6', { transparent: true, opacity: 0.65, roughness: 0.2 }),
      Math.cos(a) * 0.22,
      0.55 + i * 0.06,
      Math.sin(a) * 0.22
    );
    drop.userData.isBob = true;
    drop.userData.bobPhase = i;
  }
  addMesh(g, new THREE.CircleGeometry(0.55, SEG), mat('#0288D1', { transparent: true, opacity: 0.25 }), 0, 0.01, 0, false);
}

function buildBusShelter(g: THREE.Group): void {
  groundBase(g, 1.05);
  for (const ox of [-0.75, 0.75]) {
    addMesh(g, new THREE.BoxGeometry(0.08, 0.88, 0.08), metalMat('#455A64'), ox, 0.44, -0.15);
  }
  addMesh(g, new THREE.BoxGeometry(1.6, 0.1, 0.55), mat('#37474F', { roughness: 0.55, metalness: 0.35 }), 0, 0.82, -0.05);
  addMesh(g, new THREE.BoxGeometry(1.55, 0.55, 0.04), mat('#81D4FA', { transparent: true, opacity: 0.35, roughness: 0.2 }), 0, 0.55, 0.18);
  addMesh(g, new THREE.BoxGeometry(0.55, 0.38, 0.06), mat('#546E7A', { roughness: 0.7 }), 0, 0.22, 0.05);
  addMesh(g, new THREE.BoxGeometry(0.12, 0.12, 0.02), mat('#FDD835'), 0, 0.65, 0.22);
}

function buildCactusWall(g: THREE.Group): void {
  groundBase(g, 1.05);
  addMesh(g, new THREE.BoxGeometry(1.65, 0.05, 0.55), mat('#A1887F', { roughness: 0.95 }), 0, 0.025, 0);
  for (const ox of [-0.58, 0, 0.58]) {
    const c = addMesh(g, new THREE.CylinderGeometry(0.13, 0.17, 0.78 + Math.abs(ox) * 0.08, 10), mat('#558B2F', { roughness: 0.92 }), ox, 0.4, 0);
    addMesh(c, new THREE.CylinderGeometry(0.09, 0.11, 0.32, 8), mat('#33691E', { roughness: 0.95 }), ox + (ox >= 0 ? 0.16 : -0.16), 0.58, 0);
    for (let s = 0; s < 5; s++) {
      addMesh(g, new THREE.ConeGeometry(0.025, 0.05, 4), mat('#33691E'), ox + 0.1, 0.18 + s * 0.13, 0.09);
    }
  }
}

function buildMirageRock(g: THREE.Group): void {
  groundBase(g, 0.95);
  for (let i = 0; i < 4; i++) {
    const rock = addMesh(
      g,
      new THREE.DodecahedronGeometry(0.24 + (i % 3) * 0.07, 0),
      mat('#8D6E63', { roughness: 0.98 }),
      -0.42 + i * 0.28,
      0.2 + (i % 2) * 0.1,
      (i - 1.5) * 0.1
    );
    rock.rotation.set(0.25, i * 0.55, 0.12);
    rock.userData.isBob = true;
    rock.userData.bobPhase = i;
  }
  addMesh(
    g,
    new THREE.PlaneGeometry(1.1, 0.35),
    mat('#FFF9C4', { transparent: true, opacity: 0.12, side: THREE.DoubleSide }),
    0,
    0.15,
    0,
    false
  );
}

function buildRockslide(g: THREE.Group): void {
  groundBase(g, 1.08);
  addMesh(g, new THREE.BoxGeometry(1.45, 0.38, 0.72), mat('#78909C', { roughness: 0.95 }), 0, 0.19, 0);
  for (let i = 0; i < 6; i++) {
    const r = addMesh(
      g,
      new THREE.DodecahedronGeometry(0.2 + (i % 3) * 0.07, 0),
      mat(i % 2 === 0 ? '#78909C' : '#607D8B', { roughness: 0.98 }),
      -0.55 + i * 0.22,
      0.36 + (i % 2) * 0.14,
      (i - 2.5) * 0.09
    );
    r.rotation.y = i * 0.65;
  }
  for (let i = 0; i < 2; i++) {
    const dust = addMesh(g, new THREE.SphereGeometry(0.12, 6, 6), mat('#BCAAA4', { transparent: true, opacity: 0.18 }), 0.15 + i * 0.2, 0.52, 0.08);
    dust.userData.isBob = true;
    dust.userData.bobPhase = i;
  }
}

function buildSandDrift(g: THREE.Group): void {
  groundBase(g, 0.9);
  addMesh(g, new THREE.SphereGeometry(0.78, SEG, SEG, 0, Math.PI * 2, 0, Math.PI / 2.2), mat('#FFE082', { roughness: 0.98 }), 0, 0.08, 0);
  addMesh(g, new THREE.SphereGeometry(0.48, SEG, SEG, 0, Math.PI * 2, 0, Math.PI / 2.5), mat('#FFCC80', { roughness: 0.98 }), 0.42, 0.06, 0.16);
  addMesh(g, new THREE.SphereGeometry(0.38, SEG, SEG, 0, Math.PI * 2, 0, Math.PI / 2.5), mat('#FFCC80', { roughness: 0.98 }), -0.38, 0.05, -0.12);
  for (let i = 0; i < 3; i++) {
    const wisp = addMesh(
      g,
      new THREE.SphereGeometry(0.07, 6, 6),
      mat('#FFF8E1', { transparent: true, opacity: 0.28 }),
      (i - 1) * 0.22,
      0.32 + i * 0.07,
      0.18
    );
    wisp.userData.isBob = true;
    wisp.userData.bobPhase = i;
  }
}

function buildSkullRock(g: THREE.Group): void {
  groundBase(g, 1.05);
  addMesh(g, new THREE.BoxGeometry(1.25, 0.42, 0.68), mat('#8D6E63', { roughness: 0.96 }), 0, 0.21, 0);
  const skull = addMesh(g, new THREE.SphereGeometry(0.34, 12, 12), mat('#BCAAA4', { roughness: 0.92 }), 0, 0.54, 0.16);
  addMesh(skull, new THREE.BoxGeometry(0.09, 0.11, 0.02), mat('#212121'), -0.11, 0.05, 0.3);
  addMesh(skull, new THREE.BoxGeometry(0.09, 0.11, 0.02), mat('#212121'), 0.11, 0.05, 0.3);
  addMesh(skull, new THREE.BoxGeometry(0.15, 0.07, 0.02), mat('#212121'), 0, -0.09, 0.3);
  addMesh(g, new THREE.CylinderGeometry(0.035, 0.035, 0.52, 6), mat('#795548', { roughness: 0.9 }), 0.48, 0.56, -0.1);
  addMesh(g, new THREE.CylinderGeometry(0.035, 0.035, 0.48, 6), mat('#795548', { roughness: 0.9 }), -0.42, 0.53, -0.16);
}

function buildTumbleweed(g: THREE.Group): void {
  groundBase(g, 0.88);
  const tw = addMesh(g, new THREE.IcosahedronGeometry(0.42, 1), mat('#8D6E63', { roughness: 0.98 }), 0, 0.38, 0);
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    addMesh(
      tw,
      new THREE.CylinderGeometry(0.008, 0.008, 0.35, 4),
      mat('#6D4C41', { roughness: 0.95 }),
      Math.cos(a) * 0.28,
      (i % 3) * 0.08 - 0.08,
      Math.sin(a) * 0.28
    );
  }
  tw.userData.isSpin = true;
  addMesh(g, new THREE.CircleGeometry(0.35, SEG), mat('#A1887F', { transparent: true, opacity: 0.2 }), 0, 0.01, 0, false);
}

function buildBoneArch(g: THREE.Group): void {
  groundBase(g, 1.0);
  for (const ox of [-0.62, 0.62]) {
    const bone = addMesh(g, new THREE.CylinderGeometry(0.08, 0.1, 0.85, 8), mat('#EFEBE9', { roughness: 0.85 }), ox, 0.42, 0);
    addMesh(bone, new THREE.SphereGeometry(0.1, 8, 8), mat('#ECEFF1', { roughness: 0.8 }), 0, 0.48, 0);
    addMesh(bone, new THREE.SphereGeometry(0.08, 8, 8), mat('#ECEFF1', { roughness: 0.8 }), 0, -0.48, 0);
  }
  addMesh(g, new THREE.TorusGeometry(0.55, 0.07, 8, SEG, 0, Math.PI), mat('#EFEBE9', { roughness: 0.85 }), 0, 0.78, 0);
  addMesh(g, new THREE.BoxGeometry(0.35, 0.08, 0.08), mat('#EFEBE9', { roughness: 0.85 }), 0, 0.72, 0.12);
}

function buildSunBleachedWreck(g: THREE.Group): void {
  groundBase(g, 0.98);
  addMesh(g, new THREE.BoxGeometry(0.85, 0.32, 0.55), mat('#BCAAA4', { roughness: 0.92 }), 0.15, 0.16, 0);
  addMesh(g, new THREE.BoxGeometry(0.45, 0.22, 0.38), mat('#A1887F', { roughness: 0.95 }), -0.35, 0.11, 0.08);
  addMesh(g, new THREE.CylinderGeometry(0.04, 0.04, 0.55, 6), mat('#8D6E63', { roughness: 0.95 }), 0.45, 0.35, -0.12);
  addMesh(g, new THREE.PlaneGeometry(0.65, 0.4), mat('#FFFDE7', { transparent: true, opacity: 0.15, side: THREE.DoubleSide }), 0, 0.45, 0.2, false);
  for (let i = 0; i < 3; i++) {
    addMesh(g, new THREE.BoxGeometry(0.06, 0.04, 0.2), mat('#78909C', { roughness: 0.8 }), -0.2 + i * 0.15, 0.04, 0.15);
  }
}

function buildFallenLog(g: THREE.Group): void {
  groundBase(g, 1.0);
  const log = addMesh(g, new THREE.CylinderGeometry(0.3, 0.34, 1.65, SEG), woodMat('#4E342E'), 0, 0.3, 0);
  log.rotation.z = Math.PI / 2;
  addMesh(log, new THREE.CircleGeometry(0.3, SEG), woodMat('#6D4C41'), 0.82, 0, 0);
  for (let i = 0; i < 4; i++) {
    addMesh(g, new THREE.BoxGeometry(0.05, 0.22, 0.02), mat('#2E7D32', { roughness: 0.9 }), -0.35 + i * 0.22, 0.14, 0.26);
  }
  addMesh(g, new THREE.SphereGeometry(0.1, 6, 6), mat('#FF7043', { roughness: 0.7 }), 0.55, 0.34, 0.22);
}

function buildTempleRubble(g: THREE.Group): void {
  groundBase(g, 1.02);
  addMesh(g, new THREE.BoxGeometry(0.58, 0.78, 0.48), mat('#78909C', { roughness: 0.88 }), -0.38, 0.39, 0);
  addMesh(g, new THREE.BoxGeometry(0.48, 0.38, 0.42), mat('#607D8B', { roughness: 0.9 }), 0.32, 0.19, 0.1);
  const pillar = addMesh(g, new THREE.CylinderGeometry(0.17, 0.21, 0.58, 10), mat('#B0BEC5', { roughness: 0.85 }), 0.38, 0.58, -0.16);
  pillar.rotation.z = 0.32;
  addMesh(g, new THREE.BoxGeometry(0.52, 0.08, 0.52), mat('#455A64', { roughness: 0.85 }), 0, 0.04, 0);
  for (let i = 0; i < 4; i++) {
    addMesh(
      g,
      new THREE.BoxGeometry(0.1, 0.1, 0.02),
      mat('#F9A825', { roughness: 0.5 }),
      -0.12 + i * 0.1,
      0.56,
      0.26
    );
  }
}

function buildThornBramble(g: THREE.Group): void {
  groundBase(g, 0.95);
  addMesh(g, new THREE.SphereGeometry(0.58, 10, 10), mat('#2E7D32', { roughness: 0.95 }), 0, 0.36, 0);
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    const thorn = addMesh(
      g,
      new THREE.ConeGeometry(0.035, 0.38, 4),
      mat('#33691E', { roughness: 0.92 }),
      Math.cos(a) * 0.48,
      0.26 + (i % 3) * 0.1,
      Math.sin(a) * 0.48
    );
    thorn.rotation.x = -0.55;
    thorn.rotation.y = a;
  }
  addMesh(g, new THREE.BoxGeometry(0.26, 0.26, 0.04), mat('#C62828', { roughness: 0.55 }), 0, 0.56, 0.36);
}

function buildFloodWreck(g: THREE.Group): void {
  groundBase(g, 0.98);
  addMesh(g, new THREE.BoxGeometry(1.15, 0.1, 0.62), mat('#0288D1', { transparent: true, opacity: 0.45, roughness: 0.3 }), 0, 0.05, 0);
  addMesh(g, new THREE.BoxGeometry(0.58, 0.38, 0.42), metalMat('#546E7A', 0.45), 0.22, 0.24, 0);
  addMesh(g, new THREE.BoxGeometry(0.38, 0.22, 0.32), mat('#78909C', { roughness: 0.7, metalness: 0.3 }), -0.38, 0.16, 0.06);
  const crate = addMesh(g, new THREE.BoxGeometry(0.32, 0.32, 0.32), mat('#689F38', { roughness: 0.85 }), -0.16, 0.3, 0.16);
  crate.userData.isBob = true;
}

function buildTotemGate(g: THREE.Group): void {
  groundBase(g, 1.15);
  for (const ox of [-0.68, 0.68]) {
    const totem = addMesh(g, new THREE.CylinderGeometry(0.17, 0.21, 1.08, 10), woodMat('#4E342E'), ox, 0.54, 0);
    addMesh(totem, new THREE.BoxGeometry(0.3, 0.13, 0.3), mat('#E64A19', { roughness: 0.65 }), 0, 0.36, 0.13);
    addMesh(totem, new THREE.BoxGeometry(0.24, 0.11, 0.24), mat('#F9A825', { roughness: 0.55 }), 0, 0.66, 0.13);
    addMesh(totem, new THREE.BoxGeometry(0.09, 0.09, 0.02), mat('#212121'), -0.04, 0.8, 0.15);
    addMesh(totem, new THREE.BoxGeometry(0.09, 0.09, 0.02), mat('#212121'), 0.04, 0.8, 0.15);
  }
  addMesh(g, new THREE.BoxGeometry(1.55, 0.13, 0.12), mat('#33691E', { roughness: 0.85 }), 0, 0.98, 0);
  addMesh(g, new THREE.BoxGeometry(0.07, 0.58, 0.07), mat('#33691E', { roughness: 0.85 }), 0, 0.74, 0.16);
}

function buildVineSnare(g: THREE.Group): void {
  groundBase(g, 0.95);
  for (const ox of [-0.45, 0.45]) {
    addMesh(g, new THREE.CylinderGeometry(0.05, 0.07, 0.72, 8), woodMat('#5D4037'), ox, 0.36, 0);
  }
  addMesh(g, new THREE.BoxGeometry(1.05, 0.08, 0.08), woodMat('#6D4C41'), 0, 0.62, 0);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI;
    const vine = addMesh(
      g,
      new THREE.TorusGeometry(0.18 + (i % 2) * 0.06, 0.025, 6, 10, 0, Math.PI),
      mat('#2E7D32', { roughness: 0.9 }),
      Math.cos(a) * 0.15,
      0.28 + i * 0.06,
      Math.sin(a) * 0.1
    );
    vine.rotation.y = a;
    vine.userData.isBob = true;
    vine.userData.bobPhase = i;
  }
}

function buildQuicksandPit(g: THREE.Group): void {
  groundBase(g, 0.95);
  addMesh(g, new THREE.CylinderGeometry(0.72, 0.82, 0.06, SEG), mat('#D7CCC8', { roughness: 0.98 }), 0, 0.03, 0);
  addMesh(g, new THREE.CylinderGeometry(0.55, 0.65, 0.04, SEG), mat('#BCAAA4', { roughness: 0.98 }), 0, 0.05, 0);
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    const bubble = addMesh(
      g,
      new THREE.SphereGeometry(0.05, 6, 6),
      mat('#A1887F', { transparent: true, opacity: 0.5 }),
      Math.cos(a) * 0.28,
      0.08,
      Math.sin(a) * 0.28
    );
    bubble.userData.isBob = true;
    bubble.userData.bobPhase = i;
  }
  addMesh(g, new THREE.BoxGeometry(0.22, 0.04, 0.14), mat('#795548', { roughness: 0.9 }), 0.15, 0.06, 0.1);
}

function buildIdolShrine(g: THREE.Group): void {
  groundBase(g, 1.02);
  addMesh(g, new THREE.BoxGeometry(0.95, 0.12, 0.65), mat('#455A64', { roughness: 0.85 }), 0, 0.06, 0);
  addMesh(g, new THREE.BoxGeometry(0.75, 0.08, 0.55), mat('#37474F', { roughness: 0.85 }), 0, 0.14, 0);
  const idol = addMesh(g, new THREE.CylinderGeometry(0.22, 0.28, 0.62, 10), mat('#F9A825', { roughness: 0.45, metalness: 0.35 }), 0, 0.52, 0);
  addMesh(idol, new THREE.BoxGeometry(0.38, 0.12, 0.18), mat('#F9A825', { roughness: 0.45, metalness: 0.35 }), 0, 0.38, 0);
  addMesh(idol, new THREE.SphereGeometry(0.14, 10, 10), mat('#F9A825', { roughness: 0.45, metalness: 0.35 }), 0, 0.72, 0);
  for (const ox of [-0.42, 0.42]) {
    addMesh(g, new THREE.CylinderGeometry(0.06, 0.08, 0.45, 8), mat('#33691E', { roughness: 0.9 }), ox, 0.22, 0.22);
    addMesh(g, new THREE.TorusGeometry(0.12, 0.025, 6, 8), mat('#F9A825', { roughness: 0.5 }), ox, 0.48, 0.22);
  }
}
