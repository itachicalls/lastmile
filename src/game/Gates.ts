import * as THREE from 'three';
import type { BlockerKind, GateOption } from '../types';
import { addMesh, mat } from './ModelUtils';
import { getHexPadTexture } from './WorldTextures';
import { IS_MOBILE } from './platform';

const GATE_PASS = '#43A047';
const GATE_DIE = '#E53935';
const FRAME_COLOR = '#ffffff';

export type GateEntity = {
  kind: 'route';
  mesh: THREE.Group;
  z: number;
  safeSide: 'left' | 'right';
  resolved: boolean;
  leftMesh: THREE.Group;
  rightMesh: THREE.Group;
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

  const gateLight = new THREE.PointLight(theme.light, 0.9, 14);
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
      new THREE.MeshBasicMaterial({ color: '#00E5FF', transparent: true, opacity: op, side: THREE.DoubleSide }),
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

function makeSimpleGatePanel(x: number, safe: boolean) {
  const panel = new THREE.Group();
  panel.position.set(x, 1.85, 0.08);

  const tex = makeGatePanelTexture(safe);
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(4.15, 3.55),
    new THREE.MeshBasicMaterial({
      map: tex,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    })
  );
  panel.add(mesh);

  const placeholder = new THREE.Sprite(new THREE.SpriteMaterial({ visible: false }));
  placeholder.position.set(x, 3.2, 0);

  return { panel, label: placeholder };
}

function makeGatePanelTexture(safe: boolean): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 176;
  const ctx = canvas.getContext('2d')!;
  const fill = safe ? GATE_PASS : GATE_DIE;

  ctx.fillStyle = fill;
  ctx.globalAlpha = 0.88;
  ctx.beginPath();
  ctx.roundRect(8, 8, 112, 160, 8);
  ctx.fill();
  ctx.globalAlpha = 1;

  ctx.strokeStyle = FRAME_COLOR;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.roundRect(8, 8, 112, 160, 8);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(0,0,0,0.25)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(12, 12, 104, 152, 6);
  ctx.stroke();

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
  const pulse = 1 + Math.sin(time * 3.5) * 0.018;
  gate.leftMesh.scale.set(pulse, pulse, pulse);
  gate.rightMesh.scale.set(pulse, pulse, pulse);

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
    matRing.opacity = 0.28 + Math.sin(time * 3 + i) * 0.15;
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
