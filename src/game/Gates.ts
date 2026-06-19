import * as THREE from 'three';
import type { BlockerKind, GateOption } from '../types';
import { addMesh, mat } from './ModelUtils';
import { getHexPadTexture } from './WorldTextures';
import { IS_MOBILE } from './platform';

export type GateEntity = {
  kind: 'route';
  mesh: THREE.Group;
  z: number;
  safeSide: 'left' | 'right';
  resolved: boolean;
  leftMesh: THREE.Group;
  rightMesh: THREE.Group;
  leftPortal: THREE.Group;
  rightPortal: THREE.Group;
  leftLabel: THREE.Sprite;
  rightLabel: THREE.Sprite;
  centerWall: THREE.Mesh;
  animTime: number;
};

export type BlockerEntity = {
  kind: 'blocker';
  mesh: THREE.Group;
  z: number;
  blocker: BlockerKind;
  required: number;
  packageCost: number;
  label: string;
  cleared: boolean;
  progress: number;
  barcodeMesh: THREE.Mesh;
  leftDoor: THREE.Mesh;
  rightDoor: THREE.Mesh;
  scannerBeam: THREE.Mesh;
  statusLight: THREE.Mesh;
};

export type DropoffEntity = {
  kind: 'dropoff';
  mesh: THREE.Group;
  z: number;
  reached: boolean;
  platform: THREE.Mesh;
  rings: THREE.Mesh[];
  beam: THREE.Mesh;
  holoSign: THREE.Sprite;
};

export type VaultGateEntity = {
  kind: 'vault';
  mesh: THREE.Group;
  z: number;
  clearance: 'jump' | 'slide';
  resolved: boolean;
  penalized: boolean;
  barrierMesh: THREE.Mesh;
  glowMesh: THREE.Mesh;
  sparks: THREE.Mesh[];
};

const BLOCKER_THEME: Record<BlockerKind, { accent: string; light: string; door: string; labelBg: string }> = {
  scan: { accent: '#00BFA5', light: '#69F0AE', door: '#00897B', labelBg: 'rgba(0,100,85,0.92)' },
  stamp: { accent: '#9C27B0', light: '#EA80FC', door: '#6A1B9A', labelBg: 'rgba(80,20,100,0.92)' },
  ram: { accent: '#E53935', light: '#FF8A80', door: '#C62828', labelBg: 'rgba(120,20,20,0.92)' },
  toll: { accent: '#FB8C00', light: '#FFCC80', door: '#EF6C00', labelBg: 'rgba(100,50,0,0.92)' },
};

export function createRouteGate(
  scene: THREE.Scene,
  z: number,
  safeSide: 'left' | 'right'
): GateEntity {
  const group = new THREE.Group();
  group.position.set(0, 0, z);

  const leftSafe = safeSide === 'left';
  const leftGate = makeSimpleGatePanel(2.35, leftSafe);
  const rightGate = makeSimpleGatePanel(-2.35, safeSide === 'right');
  group.add(leftGate.panel, rightGate.panel);

  const centerWall = addMesh(
    group,
    new THREE.BoxGeometry(0.18, 3.5, 0.12),
    mat('#37474F', { roughness: 0.8 }),
    0,
    1.75,
    0.05
  );

  scene.add(group);

  return {
    kind: 'route',
    mesh: group,
    z,
    safeSide,
    resolved: false,
    leftMesh: leftGate.panel,
    rightMesh: rightGate.panel,
    leftPortal: leftGate.portal,
    rightPortal: rightGate.portal,
    leftLabel: leftGate.label,
    rightLabel: rightGate.label,
    centerWall,
    animTime: 0,
  };
}

export function createBlocker(
  scene: THREE.Scene,
  z: number,
  blocker: BlockerKind,
  label: string,
  required = 10,
  packageCost = 0
): BlockerEntity {
  const group = new THREE.Group();
  group.position.set(0, 0, z);

  const theme = BLOCKER_THEME[blocker];

  for (const x of [-4.0, 4.0]) {
    addMesh(group, new THREE.BoxGeometry(0.45, 4.8, 0.45), mat('#455A64', { metalness: 0.6, roughness: 0.35 }), x, 2.4, 0);
    addMesh(group, new THREE.BoxGeometry(0.5, 0.15, 0.5), mat(theme.accent, { emissive: theme.accent, emissiveIntensity: 0.4 }), x, 0.08, 0);
    for (const y of [1.0, 2.0, 3.0, 4.0]) {
      addMesh(
        group,
        new THREE.BoxGeometry(0.12, 0.08, 0.06),
        mat(theme.light, { emissive: theme.light, emissiveIntensity: 0.9 }),
        x,
        y,
        0.24
      );
    }
  }

  addMesh(group, new THREE.BoxGeometry(8.6, 0.5, 0.55), mat('#546E7A', { metalness: 0.55 }), 0, 4.65, 0);
  addMesh(group, new THREE.BoxGeometry(8.2, 0.12, 0.35), mat(theme.accent, { emissive: theme.accent, emissiveIntensity: 0.35 }), 0, 4.35, 0.1);

  const labelSprite = makeTextSprite(label, '#fff', theme.labelBg);
  labelSprite.position.set(0, 5.35, 0);
  labelSprite.scale.set(5.2, 1.25, 1);
  group.add(labelSprite);

  if (packageCost > 0) {
    const costSprite = makeTextSprite(`📦 ×${packageCost} required`, '#FFD54F', 'rgba(80,40,0,0.88)');
    costSprite.position.set(0, 4.85, 0);
    costSprite.scale.set(3.5, 0.85, 1);
    group.add(costSprite);
  }

  const doorMat = mat(theme.door, { metalness: 0.25, roughness: 0.5, emissive: theme.accent, emissiveIntensity: 0.35 });
  const leftDoor = addMesh(group, new THREE.BoxGeometry(3.8, 3.6, 0.22), doorMat, -1.95, 1.85, 0);
  const rightDoor = addMesh(group, new THREE.BoxGeometry(3.8, 3.6, 0.22), doorMat, 1.95, 1.85, 0);

  for (const dx of [-1.95, 1.95]) {
    addMesh(group, new THREE.BoxGeometry(2.8, 0.08, 0.02), mat('#263238'), dx, 3.2, 0.12);
    addMesh(group, new THREE.BoxGeometry(2.8, 0.08, 0.02), mat('#263238'), dx, 1.4, 0.12);
    for (let s = 0; s < 6; s++) {
      addMesh(group, new THREE.BoxGeometry(0.35, 0.5, 0.02), mat('#37474F', { metalness: 0.5 }), dx - 1.0 + s * 0.4, 2.3, 0.13);
    }
  }

  const scannerHousing = addMesh(group, new THREE.BoxGeometry(2.2, 0.55, 0.35), mat('#263238', { metalness: 0.65 }), 0, 3.85, 0.15);
  addMesh(scannerHousing, new THREE.BoxGeometry(1.8, 0.08, 0.02), mat(theme.light, { emissive: theme.light, emissiveIntensity: 1 }), 0, 0, 0.18);

  const barcode = addMesh(group, new THREE.BoxGeometry(1.5, 0.75, 0.04), mat('#1A1A1A', { metalness: 0.2 }), 0, 2.55, 0.14);
  for (let i = 0; i < 12; i++) {
    addMesh(group, new THREE.BoxGeometry(0.06, 0.6, 0.01), mat(i % 2 === 0 ? '#FFFFFF' : '#111111'), -0.6 + i * 0.1, 2.55, 0.17);
  }

  const scannerBeam = addMesh(
    group,
    new THREE.PlaneGeometry(3.6, 0.04),
    new THREE.MeshBasicMaterial({ color: theme.light, transparent: true, opacity: 0.55 }),
    0,
    2.55,
    0.2,
    false
  );

  const statusLight = addMesh(
    group,
    new THREE.SphereGeometry(0.14, 10, 10),
    mat('#FF1744', { emissive: '#FF1744', emissiveIntensity: 1.2 }),
    3.55,
    4.65,
    0.2
  );

  addMesh(group, new THREE.BoxGeometry(8.4, 0.03, 0.12), mat('#FFD54F', { emissive: '#FFC107', emissiveIntensity: 0.25 }), 0, 0.02, 1.8);
  for (const dx of [-2.5, 0, 2.5]) {
    addMesh(group, new THREE.BoxGeometry(0.15, 0.02, 1.2), mat('#FFFFFF', { emissive: '#FFFFFF', emissiveIntensity: 0.15 }), dx, 0.02, 0.8);
  }

  if (blocker === 'stamp') {
    addMesh(group, new THREE.CylinderGeometry(0.35, 0.35, 0.12, 16), mat('#7B1FA2', { emissive: '#AB47BC', emissiveIntensity: 0.4 }), 0, 2.9, 0.25);
  } else if (blocker === 'ram') {
    addMesh(group, new THREE.ConeGeometry(0.5, 0.8, 4), mat('#FF1744', { emissive: '#D50000', emissiveIntensity: 0.35 }), 0, 0.45, 0.5);
  } else if (blocker === 'toll') {
    addMesh(group, new THREE.BoxGeometry(1.2, 0.9, 0.6), mat('#F57C00'), -3.2, 0.5, 0.4);
    addMesh(group, new THREE.CylinderGeometry(0.08, 0.08, 0.5, 8), mat('#FFD54F', { emissive: '#FFC107', emissiveIntensity: 0.6 }), -3.2, 1.1, 0.4);
  }

  const gateLight = new THREE.PointLight(theme.light, IS_MOBILE ? 0.5 : 0, 14);
  gateLight.position.set(0, 3, 2);
  group.add(gateLight);

  scene.add(group);

  return {
    kind: 'blocker',
    mesh: group,
    z,
    blocker,
    required,
    packageCost,
    label,
    cleared: false,
    progress: 0,
    barcodeMesh: barcode,
    leftDoor,
    rightDoor,
    scannerBeam,
    statusLight,
  };
}

export function createDropoff(scene: THREE.Scene, z: number): DropoffEntity {
  const group = new THREE.Group();
  group.position.set(0, 0, z);
  const seg = IS_MOBILE ? 16 : 24;

  const padTex = getHexPadTexture();
  padTex.repeat.set(2, 2);
  const platform = addMesh(
    group,
    new THREE.CylinderGeometry(3.6, 3.9, 0.28, seg),
    new THREE.MeshStandardMaterial({
      map: padTex,
      color: '#FFD54F',
      emissive: '#FF8F00',
      emissiveIntensity: 0.45,
      metalness: 0.35,
      roughness: 0.45,
    }),
    0,
    0.16,
    0
  );

  addMesh(
    group,
    new THREE.CylinderGeometry(3.15, 3.15, 0.04, seg),
    mat('#00E676', { emissive: '#00E676', emissiveIntensity: 0.55, transparent: true, opacity: 0.55 }),
    0,
    0.32,
    0,
    false
  );

  const rings: THREE.Mesh[] = [];
  for (const [r0, r1, y, op] of [
    [3.0, 3.25, 0.08, 0.45],
    [2.4, 2.58, 0.12, 0.35],
    [1.75, 1.92, 0.16, 0.5],
  ] as const) {
    const ring = addMesh(
      group,
      new THREE.RingGeometry(r0, r1, seg),
      new THREE.MeshBasicMaterial({ color: '#FFD54F', transparent: true, opacity: op * 0.55, side: THREE.DoubleSide }),
      0,
      y,
      0,
      false
    );
    ring.rotation.x = -Math.PI / 2;
    rings.push(ring);
  }

  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const px = Math.cos(a) * 3.35;
    const pz = Math.sin(a) * 3.35;
    addMesh(group, new THREE.BoxGeometry(0.12, 2.8, 0.12), mat('#37474F', { metalness: 0.5, roughness: 0.4 }), px, 1.4, pz);
    addMesh(
      group,
      new THREE.BoxGeometry(0.08, 2.4, 0.04),
      mat('#00E676', { emissive: '#00E676', emissiveIntensity: 0.85 }),
      px + Math.cos(a) * 0.08,
      1.4,
      pz + Math.sin(a) * 0.08
    );
    addMesh(
      group,
      new THREE.SphereGeometry(0.14, 8, 8),
      mat('#FFD54F', { emissive: '#FFC107', emissiveIntensity: 1.0 }),
      px,
      2.85,
      pz
    );
  }

  const beam = addMesh(
    group,
    new THREE.CylinderGeometry(0.15, 1.8, 5.5, seg, 1, true),
    new THREE.MeshBasicMaterial({
      color: '#69F0AE',
      transparent: true,
      opacity: 0.22,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
    0,
    2.75,
    0,
    false
  );

  for (const sx of [-1, 1]) {
    const arrow = addMesh(
      group,
      new THREE.ConeGeometry(0.35, 0.7, 4),
      mat('#FFD54F', { emissive: '#FFAB00', emissiveIntensity: 0.65, transparent: true, opacity: 0.75 }),
      sx * 2.2,
      3.8,
      0,
      false
    );
    arrow.rotation.z = sx * Math.PI;
  }

  addMesh(
    group,
    new THREE.BoxGeometry(0.55, 0.45, 0.35),
    mat('#FF9800', { emissive: '#FF6F00', emissiveIntensity: 0.6 }),
    0,
    4.2,
    0
  );
  addMesh(
    group,
    new THREE.BoxGeometry(0.6, 0.08, 0.08),
    mat('#FFD54F', { emissive: '#FFC107', emissiveIntensity: 0.8 }),
    0,
    4.48,
    0
  );

  const holoSign = makeTextSprite('◆ DROP-OFF ZONE ◆', '#00E676', 'rgba(0,20,40,0.82)');
  holoSign.position.set(0, 5.2, 0);
  holoSign.scale.set(6, 1.4, 1);
  group.add(holoSign);

  const subSign = makeTextSprite('DELIVER PACKAGE TO WIN', '#FFD54F', 'rgba(0,0,0,0.65)');
  subSign.position.set(0, 4.35, 0);
  subSign.scale.set(4.5, 0.75, 1);
  group.add(subSign);

  scene.add(group);
  return { kind: 'dropoff', mesh: group, z, reached: false, platform, rings, beam, holoSign };
}


/** Downed power line — low bar to jump, high bar to slide under */
export function createVaultGate(
  scene: THREE.Scene,
  z: number,
  clearance: 'jump' | 'slide'
): VaultGateEntity {
  const group = new THREE.Group();
  group.position.set(0, 0, z);

  const isJump = clearance === 'jump';
  const barY = isJump ? 0.48 : 1.82;
  const poleH = isJump ? 1.28 : 2.72;
  const seg = IS_MOBILE ? 8 : 12;

  const wireEmissive = isJump ? '#FFD54F' : '#E040FB';
  const glowColor = isJump ? '#80DEEA' : '#EA80FC';
  const sparkA = isJump ? '#FFEB3B' : '#E1BEE7';
  const sparkB = isJump ? '#B2FF59' : '#B388FF';
  const arcColor = isJump ? '#CCFF90' : '#CE93D8';

  addMesh(group, new THREE.BoxGeometry(0.14, 0.05, 0.55), mat('#37474F', { metalness: 0.4 }), -2.4, 0.025, 0.18);
  addMesh(group, new THREE.CylinderGeometry(0.05, 0.06, 0.45, 6), mat('#455A64', { metalness: 0.55 }), -2.55, 0.04, -0.12);
  addMesh(group, new THREE.BoxGeometry(0.1, 0.04, 0.35), mat('#263238'), 2.1, 0.02, -0.08);

  for (const [x, lean] of [[-3.7, 0], [3.7, -0.12]] as const) {
    const pole = addMesh(
      group,
      new THREE.CylinderGeometry(0.085, 0.105, poleH, seg),
      mat('#6D4C41', { roughness: 0.92 }),
      x,
      poleH / 2,
      0
    );
    pole.rotation.z = lean;
    addMesh(
      group,
      new THREE.BoxGeometry(0.48, 0.06, 0.06),
      mat('#546E7A', { metalness: 0.45, roughness: 0.5 }),
      x + lean * 0.35,
      barY + 0.02,
      0.04
    );
    addMesh(
      group,
      new THREE.CylinderGeometry(0.055, 0.07, 0.12, 6),
      mat('#ECEFF1', { roughness: 0.45 }),
      x + lean * 0.4,
      barY,
      0.06
    );
  }

  const cableSpan = 7.35;
  const cableSegs = IS_MOBILE ? 4 : 6;
  for (let i = 0; i < cableSegs; i++) {
    const t0 = i / cableSegs;
    const t1 = (i + 1) / cableSegs;
    const x0 = -cableSpan / 2 + t0 * cableSpan;
    const x1 = -cableSpan / 2 + t1 * cableSpan;
    const y0 = barY - 0.1 * Math.sin(t0 * Math.PI);
    const y1 = barY - 0.1 * Math.sin(t1 * Math.PI);
    const mx = (x0 + x1) / 2;
    const my = (y0 + y1) / 2;
    const len = Math.hypot(x1 - x0, y1 - y0);
    const angle = Math.atan2(y1 - y0, x1 - x0);
    const segMesh = addMesh(
      group,
      new THREE.CylinderGeometry(0.055, 0.055, len, 8),
      mat('#37474F', { metalness: 0.65, roughness: 0.4 }),
      mx,
      my,
      0
    );
    segMesh.rotation.z = angle - Math.PI / 2;
  }

  const barrierMesh = addMesh(
    group,
    new THREE.CylinderGeometry(isJump ? 0.07 : 0.085, isJump ? 0.07 : 0.085, cableSpan, seg),
    mat('#263238', { metalness: 0.75, roughness: 0.35, emissive: wireEmissive, emissiveIntensity: isJump ? 0.15 : 0.35 }),
    0,
    barY - 0.05,
    0
  );
  barrierMesh.rotation.z = Math.PI / 2;

  const glowMesh = addMesh(
    group,
    new THREE.CylinderGeometry(isJump ? 0.11 : 0.14, isJump ? 0.11 : 0.14, cableSpan - 0.05, seg),
    new THREE.MeshBasicMaterial({
      color: glowColor,
      transparent: true,
      opacity: isJump ? 0.32 : 0.48,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
    0,
    barY - 0.05,
    0,
    false
  );
  glowMesh.rotation.z = Math.PI / 2;

  const sparks: THREE.Mesh[] = [];
  const sparkCount = IS_MOBILE ? 5 : 8;
  for (let i = 0; i < sparkCount; i++) {
    const t = i / (sparkCount - 1);
    const sx = -cableSpan / 2 + 0.4 + t * (cableSpan - 0.8);
    const sag = barY - 0.1 * Math.sin(t * Math.PI) - 0.05;
    const spark = addMesh(
      group,
      new THREE.SphereGeometry(0.035 + (i % 2) * 0.015, 6, 6),
      new THREE.MeshBasicMaterial({
        color: i % 3 === 0 ? sparkA : sparkB,
        transparent: true,
        opacity: isJump ? 0.65 : 0.78,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
      sx,
      sag + (i % 2) * 0.06,
      (i % 3 - 1) * 0.08,
      false
    );
    spark.userData.isSpark = true;
    spark.userData.sparkPhase = i;
    spark.userData.baseY = spark.position.y;
    sparks.push(spark);
  }

  for (let i = 0; i < (IS_MOBILE ? 2 : 4); i++) {
    const arc = addMesh(
      group,
      new THREE.PlaneGeometry(0.32, 0.06),
      new THREE.MeshBasicMaterial({
        color: arcColor,
        transparent: true,
        opacity: isJump ? 0.4 : 0.55,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
      -2.2 + i * 1.45,
      barY - 0.14 - (i % 2) * 0.05,
      0.1,
      false
    );
    arc.userData.isArc = true;
    arc.userData.sparkPhase = i + 0.5;
    sparks.push(arc);
  }


  scene.add(group);
  return {
    kind: 'vault',
    mesh: group,
    z,
    clearance,
    resolved: false,
    penalized: false,
    barrierMesh,
    glowMesh,
    sparks,
  };
}

export function animateVaultGate(v: VaultGateEntity, time: number): void {
  if (v.resolved) {
    v.mesh.visible = false;
    return;
  }

  const isSlide = v.clearance === 'slide';
  const flicker = 0.22 + Math.sin(time * 14 + v.z) * 0.1 + Math.sin(time * 27) * 0.06;
  const glowMat = v.glowMesh.material as THREE.MeshBasicMaterial;
  glowMat.opacity = (flicker + 0.12) * (isSlide ? 1.35 : 1);

  const barMat = v.barrierMesh.material as THREE.MeshStandardMaterial;
  const emBase = isSlide ? 0.25 : 0.1;
  barMat.emissiveIntensity = emBase + Math.abs(Math.sin(time * 11 + v.z * 0.3)) * (isSlide ? 0.55 : 0.35);

  for (const s of v.sparks) {
    const phase = (s.userData.sparkPhase as number) ?? 0;
    const m = s.material as THREE.MeshBasicMaterial;
    if (s.userData.isArc) {
      m.opacity = 0.08 + Math.abs(Math.sin(time * 9 + phase * 1.7)) * 0.42;
      s.scale.x = 0.7 + Math.abs(Math.sin(time * 13 + phase)) * 0.55;
      s.rotation.z = Math.sin(time * 6 + phase) * 0.35;
    } else {
      m.opacity = 0.2 + Math.abs(Math.sin(time * 16 + phase * 2.1)) * 0.55;
      s.position.y = (s.userData.baseY as number) + Math.sin(time * 20 + phase) * 0.012;
    }
  }
}

const portalVortexTex: { safe?: THREE.CanvasTexture; die?: THREE.CanvasTexture } = {};
const portalRuneTex: { safe?: THREE.CanvasTexture; die?: THREE.CanvasTexture } = {};

function makePortalVortexTexture(isSafe: boolean): THREE.CanvasTexture {
  const key = isSafe ? 'safe' : 'die';
  if (portalVortexTex[key]) return portalVortexTex[key]!;

  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const cx = size / 2;
  const cy = size / 2;

  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, size, size);

  const voidGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, size * 0.48);
  voidGrad.addColorStop(0, isSafe ? '#000810' : '#120008');
  voidGrad.addColorStop(0.22, isSafe ? '#003328' : '#3a0018');
  voidGrad.addColorStop(0.55, isSafe ? '#00C853' : '#D50000');
  voidGrad.addColorStop(0.78, isSafe ? '#004D40' : '#4A0020');
  voidGrad.addColorStop(1, '#000000');
  ctx.fillStyle = voidGrad;
  ctx.fillRect(0, 0, size, size);

  for (let arm = 0; arm < 6; arm++) {
    ctx.beginPath();
    ctx.strokeStyle = isSafe ? 'rgba(105,240,174,0.75)' : 'rgba(255,82,82,0.78)';
    ctx.lineWidth = arm % 2 === 0 ? 4 : 2.5;
    for (let t = 0; t < 140; t++) {
      const angle = arm * (Math.PI / 3) + t * 0.105;
      const r = 6 + t * 0.82;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (t === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  ctx.globalCompositeOperation = 'lighter';
  for (let arm = 0; arm < 6; arm++) {
    ctx.beginPath();
    ctx.strokeStyle = isSafe ? 'rgba(178,255,89,0.35)' : 'rgba(255,138,128,0.38)';
    ctx.lineWidth = 8;
    for (let t = 0; t < 90; t++) {
      const angle = arm * (Math.PI / 3) + t * 0.105 + 0.4;
      const r = 20 + t * 0.82;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (t === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  ctx.globalCompositeOperation = 'source-over';

  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    const r = size * 0.36 + (i % 2) * 6;
    const x = cx + Math.cos(a) * r;
    const y = cy + Math.sin(a) * r;
    ctx.fillStyle = isSafe ? 'rgba(0,229,255,0.55)' : 'rgba(255,64,129,0.55)';
    ctx.beginPath();
    ctx.moveTo(x, y - 5);
    ctx.lineTo(x + 4, y + 3);
    ctx.lineTo(x - 4, y + 3);
    ctx.closePath();
    ctx.fill();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  portalVortexTex[key] = tex;
  return tex;
}

function makePortalRuneRingTexture(isSafe: boolean): THREE.CanvasTexture {
  const key = isSafe ? 'safe' : 'die';
  if (portalRuneTex[key]) return portalRuneTex[key]!;

  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const cx = size / 2;
  const cy = size / 2;

  ctx.clearRect(0, 0, size, size);

  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * Math.PI * 2;
    const r = size * 0.41;
    const x = cx + Math.cos(a) * r;
    const y = cy + Math.sin(a) * r;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(a + Math.PI / 2);
    ctx.strokeStyle = isSafe ? 'rgba(105,240,174,0.85)' : 'rgba(255,82,82,0.85)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, -7);
    ctx.lineTo(5, 0);
    ctx.lineTo(0, 7);
    ctx.lineTo(-5, 0);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }

  ctx.strokeStyle = isSafe ? 'rgba(0,229,255,0.35)' : 'rgba(255,64,129,0.35)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx, cy, size * 0.43, 0, Math.PI * 2);
  ctx.stroke();

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  portalRuneTex[key] = tex;
  return tex;
}

function makeAlienPortal(isSafe: boolean): THREE.Group {
  const portal = new THREE.Group();
  portal.userData.isSafe = isSafe;

  const inner = isSafe ? '#00E676' : '#FF1744';
  const outer = isSafe ? '#69F0AE' : '#FF5252';
  const accent = isSafe ? '#00E5FF' : '#EA80FC';
  const seg = IS_MOBILE ? 24 : 36;
  const vortexTex = makePortalVortexTexture(isSafe);
  const runeTex = makePortalRuneRingTexture(isSafe);

  addMesh(
    portal,
    new THREE.CircleGeometry(1.08, seg),
    new THREE.MeshBasicMaterial({
      color: isSafe ? '#001a14' : '#1a0008',
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
    }),
    0,
    0,
    -0.06,
    false
  );

  const tunnelSteps = IS_MOBILE ? 4 : 6;
  for (let i = 0; i < tunnelSteps; i++) {
    const t = i / tunnelSteps;
    const scale = 1 - t * 0.55;
    const ring = addMesh(
      portal,
      new THREE.RingGeometry(0.32 * scale, 0.48 * scale, seg),
      new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? inner : outer,
        transparent: true,
        opacity: 0.22 - t * 0.08,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
      0,
      0,
      -0.02 + t * 0.04,
      false
    );
    ring.userData.tunnelIndex = i;
    ring.userData.tunnelSpeed = i % 2 === 0 ? 1.6 - t * 0.4 : -(1.2 - t * 0.3);
  }

  const vortexA = addMesh(
    portal,
    new THREE.CircleGeometry(0.98, seg),
    new THREE.MeshBasicMaterial({
      map: vortexTex,
      transparent: true,
      opacity: 0.92,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
    0,
    0,
    0.02,
    false
  );
  vortexA.userData.portalLayer = 'vortexA';

  const vortexB = addMesh(
    portal,
    new THREE.CircleGeometry(0.82, seg),
    new THREE.MeshBasicMaterial({
      map: vortexTex,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: isSafe ? '#B2FF59' : '#FF8A80',
    }),
    0,
    0,
    0.05,
    false
  );
  vortexB.userData.portalLayer = 'vortexB';

  const runeRing = addMesh(
    portal,
    new THREE.CircleGeometry(1.02, seg),
    new THREE.MeshBasicMaterial({
      map: runeTex,
      transparent: true,
      opacity: 0.78,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
    0,
    0,
    0.07,
    false
  );
  runeRing.userData.portalLayer = 'runes';

  for (const sx of [-0.92, 0.92]) {
    const pillar = addMesh(
      portal,
      new THREE.BoxGeometry(0.1, 1.65, 0.08),
      new THREE.MeshStandardMaterial({
        color: '#263238',
        metalness: 0.55,
        roughness: 0.35,
        emissive: inner,
        emissiveIntensity: 0.25,
      }),
      sx,
      0,
      0.04
    );
    addMesh(
      pillar,
      new THREE.BoxGeometry(0.04, 1.45, 0.02),
      new THREE.MeshBasicMaterial({
        color: accent,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
      sx > 0 ? -0.03 : 0.03,
      0,
      0.05,
      false
    );
    pillar.userData.portalLayer = 'pillar';
  }

  for (let i = 0; i < (IS_MOBILE ? 3 : 5); i++) {
    const corona = addMesh(
      portal,
      new THREE.RingGeometry(0.88 + i * 0.08, 0.96 + i * 0.08, seg),
      new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? outer : accent,
        transparent: true,
        opacity: 0.14 - i * 0.02,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
      0,
      0,
      0.03 + i * 0.004,
      false
    );
    corona.userData.portalLayer = 'corona';
    corona.userData.coronaIndex = i;
  }

  const core = addMesh(
    portal,
    new THREE.CircleGeometry(0.18, IS_MOBILE ? 12 : 16),
    new THREE.MeshBasicMaterial({
      color: '#FFFFFF',
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
    0,
    0,
    0.09,
    false
  );
  core.userData.portalLayer = 'core';

  const shardCount = IS_MOBILE ? 6 : 10;
  for (let i = 0; i < shardCount; i++) {
    const shard = addMesh(
      portal,
      new THREE.PlaneGeometry(0.08, 0.42),
      new THREE.MeshBasicMaterial({
        color: accent,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
      0,
      0,
      0.08,
      false
    );
    shard.userData.portalLayer = 'shard';
    shard.userData.shardIndex = i;
    shard.userData.shardCount = shardCount;
  }

  return portal;
}

function animatePortal(portal: THREE.Group, time: number, safe: boolean): void {
  const breathe = 1 + Math.sin(time * 3.8) * 0.035;
  portal.scale.set(breathe, breathe, 1);

  const inner = safe ? '#00E676' : '#FF1744';
  const outer = safe ? '#69F0AE' : '#FF5252';

  for (const child of portal.children) {
    const ud = child.userData;
    const layer = ud.portalLayer as string | undefined;

    if (ud.tunnelIndex !== undefined) {
      child.rotation.z = time * (ud.tunnelSpeed as number);
      const m = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
      m.opacity =
        (0.2 - (ud.tunnelIndex as number) * 0.03) +
        Math.sin(time * 4 + (ud.tunnelIndex as number)) * 0.06;
    }

    if (layer === 'vortexA') {
      child.rotation.z = time * 1.35;
      const m = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
      m.opacity = 0.78 + Math.sin(time * 5) * 0.12;
    } else if (layer === 'vortexB') {
      child.rotation.z = -time * 0.95;
      child.scale.setScalar(0.92 + Math.sin(time * 2.6) * 0.06);
    } else if (layer === 'runes') {
      child.rotation.z = time * 0.45;
      const m = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
      m.opacity = 0.62 + Math.sin(time * 6) * 0.14;
    } else if (layer === 'core') {
      const s = 1 + Math.sin(time * 7) * 0.18;
      child.scale.set(s, s, 1);
      const m = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
      m.opacity = 0.55 + Math.sin(time * 8) * 0.25;
      m.color.set(safe ? '#E0F7FA' : '#FFCDD2');
    } else if (layer === 'corona') {
      child.rotation.z = time * (0.6 + (ud.coronaIndex as number) * 0.15) * (safe ? 1 : -1);
      const m = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
      m.opacity = 0.1 + Math.sin(time * 3.5 + (ud.coronaIndex as number)) * 0.06;
    } else if (layer === 'shard') {
      const i = ud.shardIndex as number;
      const n = ud.shardCount as number;
      const a = time * 2.2 + (i / n) * Math.PI * 2;
      const r = 0.52 + Math.sin(time * 3.5 + i * 1.7) * 0.22;
      child.position.set(Math.cos(a) * r, Math.sin(a) * r, 0.08 + (i % 3) * 0.012);
      child.rotation.z = a + Math.PI / 2;
      const m = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
      m.opacity = 0.15 + Math.abs(Math.sin(time * 5 + i * 2)) * 0.35;
      m.color.set(i % 2 === 0 ? outer : inner);
    } else if (layer === 'pillar') {
      child.rotation.z = Math.sin(time * 2 + child.position.x) * 0.02;
    }
  }
}

function makeSimpleGatePanel(x: number, safe: boolean) {
  const panel = new THREE.Group();
  panel.position.set(x, 1.85, 0.08);

  const portal = makeAlienPortal(safe);
  portal.scale.set(1.55, 1.72, 1);
  panel.add(portal);

  const tex = makeGatePanelTexture(safe);
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(4.15, 3.55),
    new THREE.MeshBasicMaterial({
      map: tex,
      transparent: true,
      opacity: 0.94,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.NormalBlending,
    })
  );
  panel.add(mesh);

  const rimGlow = addMesh(
    panel,
    new THREE.PlaneGeometry(4.28, 3.68),
    new THREE.MeshBasicMaterial({
      color: safe ? '#69F0AE' : '#FF5252',
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    }),
    0,
    0,
    -0.02,
    false
  );
  rimGlow.userData.isGateRim = true;

  const placeholder = new THREE.Sprite(new THREE.SpriteMaterial({ visible: false }));
  placeholder.position.set(x, 3.2, 0);

  return { panel, portal, label: placeholder, rimGlow };
}

function makeGatePanelTexture(safe: boolean): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 352;
  const ctx = canvas.getContext('2d')!;
  const w = canvas.width;
  const h = canvas.height;
  const accent = safe ? '#69F0AE' : '#FF5252';
  const accent2 = safe ? '#00E5FF' : '#EA80FC';
  const fill = safe ? 'rgba(20,60,40,0.55)' : 'rgba(60,15,25,0.58)';

  ctx.fillStyle = fill;
  ctx.beginPath();
  ctx.roundRect(16, 16, w - 32, h - 32, 18);
  ctx.fill();

  const hole = ctx.createRadialGradient(w / 2, h / 2, 20, w / 2, h / 2, w * 0.38);
  hole.addColorStop(0, 'rgba(0,0,0,0.88)');
  hole.addColorStop(0.55, 'rgba(0,0,0,0.45)');
  hole.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = hole;
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = accent;
  ctx.lineWidth = 6;
  ctx.shadowColor = accent;
  ctx.shadowBlur = 14;
  ctx.beginPath();
  ctx.roundRect(20, 20, w - 40, h - 40, 16);
  ctx.stroke();
  ctx.shadowBlur = 0;

  ctx.lineWidth = 2;
  ctx.strokeStyle = accent2;
  ctx.beginPath();
  ctx.roundRect(34, 34, w - 68, h - 68, 12);
  ctx.stroke();

  for (const [px, py] of [
    [48, 48],
    [w - 48, 48],
    [48, h - 48],
    [w - 48, h - 48],
  ]) {
    ctx.save();
    ctx.translate(px, py);
    ctx.strokeStyle = accent2;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-12, 0);
    ctx.lineTo(0, -12);
    ctx.lineTo(12, 0);
    ctx.lineTo(0, 12);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 16, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  ctx.fillStyle = safe ? 'rgba(105,240,174,0.18)' : 'rgba(255,82,82,0.18)';
  ctx.font = 'bold 28px Segoe UI, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(safe ? '◆ WARP ◆' : '☠ VOID ☠', w / 2, h - 52);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeTextSprite(text: string, textColor: string, bg: string): THREE.Sprite {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 128;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = bg;
  ctx.beginPath();
  ctx.roundRect(8, 8, 496, 112, 14);
  ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.15)';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = textColor;
  ctx.font = 'bold 72px Segoe UI, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 256, 64);

  const tex = new THREE.CanvasTexture(canvas);
  return new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
}

export function animateGate(gate: GateEntity, time: number): void {
  gate.animTime = time;
  const leftSafe = gate.safeSide === 'left';
  const pulse = 1 + Math.sin(time * 3.5) * 0.012;
  gate.leftMesh.scale.set(pulse, pulse, pulse);
  gate.rightMesh.scale.set(pulse, pulse, pulse);

  animatePortal(gate.leftPortal, time, leftSafe);
  animatePortal(gate.rightPortal, time, !leftSafe);

  for (const panel of [gate.leftMesh, gate.rightMesh]) {
    const rim = panel.children.find((c) => c.userData.isGateRim) as THREE.Mesh | undefined;
    if (rim) {
      const m = rim.material as THREE.MeshBasicMaterial;
      const safe = panel === gate.leftMesh ? leftSafe : !leftSafe;
      m.opacity = 0.16 + Math.sin(time * 4.5) * 0.08;
      m.color.set(safe ? '#69F0AE' : '#FF5252');
    }
  }

  gate.centerWall.visible = !gate.resolved;
}

export function animateBlocker(b: BlockerEntity, time: number): void {
  if (b.cleared) return;

  const open = b.progress * 3.2;
  b.leftDoor.position.x = -1.95 - open;
  b.rightDoor.position.x = 1.95 + open;

  b.scannerBeam.position.y = 1.8 + ((Math.sin(time * 6) + 1) / 2) * 1.5;
  (b.scannerBeam.material as THREE.MeshBasicMaterial).opacity = 0.35 + Math.sin(time * 10) * 0.25;

  const scanned = b.progress > 0;
  const statusMat = b.statusLight.material as THREE.MeshStandardMaterial;
  if (b.progress >= 1) {
    statusMat.color.set('#00E676');
    statusMat.emissive.set('#00E676');
  } else if (scanned) {
    statusMat.color.set('#FFC107');
    statusMat.emissive.set('#FFC107');
  } else {
    statusMat.color.set('#FF1744');
    statusMat.emissive.set('#FF1744');
  }
  statusMat.emissiveIntensity = 0.8 + Math.sin(time * 5) * 0.4;

  if (b.barcodeMesh.material instanceof THREE.MeshStandardMaterial) {
    b.barcodeMesh.material.emissive.set(scanned ? '#00E676' : '#000000');
    b.barcodeMesh.material.emissiveIntensity = scanned ? 0.3 + Math.sin(time * 8) * 0.2 : 0;
  }
}

export function animateDropoff(d: DropoffEntity, time: number): void {
  d.platform.rotation.y = time * 0.65;
  d.platform.position.y = 0.16 + Math.sin(time * 2.2) * 0.05;

  d.rings.forEach((ring, i) => {
    ring.rotation.z = time * (i % 2 === 0 ? 1.2 : -0.9) + i;
    const matRing = ring.material as THREE.MeshBasicMaterial;
    matRing.opacity = 0.18 + Math.sin(time * 2.5 + i) * 0.08;
  });

  const beamMat = d.beam.material as THREE.MeshBasicMaterial;
  beamMat.opacity = 0.14 + Math.sin(time * 4) * 0.1;
  d.beam.scale.set(1 + Math.sin(time * 5) * 0.06, 1, 1 + Math.sin(time * 5) * 0.06);

  d.holoSign.position.y = 5.2 + Math.sin(time * 2.5) * 0.12;
  d.holoSign.material.opacity = 0.88 + Math.sin(time * 6) * 0.1;
}

export function applyGateEffect(
  effect: GateOption['effect'],
  run: {
    convoy: number;
    maxConvoy: number;
    packages: number;
    maxPackages: number;
    coins: number;
    stamps: number;
    integrity: number;
    maxIntegrity: number;
    speed: number;
    baseSpeed: number;
    bonusRoute: boolean;
  }
): string {
  const msgs: string[] = [];
  if (effect.convoy) {
    run.convoy = Math.min(run.maxConvoy, Math.max(0, run.convoy + effect.convoy));
    msgs.push(`${effect.convoy > 0 ? '+' : ''}${effect.convoy} convoy`);
  }
  if (effect.convoyMul) {
    run.convoy = Math.min(run.maxConvoy, Math.max(1, Math.floor(run.convoy * effect.convoyMul)));
    msgs.push(`×${effect.convoyMul} convoy!`);
    run.bonusRoute = true;
  }
  if (effect.packages) {
    run.packages = Math.min(run.maxPackages, run.packages + effect.packages);
    msgs.push(`${effect.packages > 0 ? '+' : ''}${effect.packages} packages`);
  }
  if (effect.coins) {
    run.coins += effect.coins;
    msgs.push(`+${effect.coins} coins`);
  }
  if (effect.stamps) {
    run.stamps += effect.stamps;
    msgs.push(`+${effect.stamps} stamp`);
  }
  if (effect.integrity) {
    run.integrity = Math.min(run.maxIntegrity, run.integrity + effect.integrity);
    msgs.push(`+${effect.integrity} integrity`);
  }
  if (effect.speedMul) {
    run.speed = run.baseSpeed * effect.speedMul;
    msgs.push('Speed boost!');
  }
  return msgs.join(' · ') || 'Route claimed!';
}

export function disposeEntity(group: THREE.Group, scene: THREE.Scene): void {
  scene.remove(group);
  group.traverse((c: THREE.Object3D) => {
    if (c instanceof THREE.Mesh) {
      c.geometry.dispose();
      const m = c.material;
      if (Array.isArray(m)) m.forEach((x) => x.dispose());
      else m.dispose();
    }
    if (c instanceof THREE.Sprite) {
      (c.material as THREE.SpriteMaterial).map?.dispose();
      c.material.dispose();
    }
  });
}
