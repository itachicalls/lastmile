import * as THREE from 'three';
import { addMesh, mat, disposeObject3D } from './ModelUtils';
import { IS_MOBILE, isNearZ } from './platform';

export type ObstacleKind = 'barricade' | 'pod' | 'cones' | 'debris';

export type ObstacleEntity = {
  mesh: THREE.Group;
  x: number;
  z: number;
  kind: ObstacleKind;
  radius: number;
  hit: boolean;
};

const SEG = IS_MOBILE ? 6 : 8;

function addHazardPad(group: THREE.Group, radius: number, color: string, accent: string): void {
  const pad = addMesh(
    group,
    new THREE.CylinderGeometry(radius * 0.92, radius, 0.04, SEG * 2),
    mat('#263238', { roughness: 0.95 }),
    0,
    0.018,
    0,
    false
  );
  pad.userData.isPad = true;

  const ring = addMesh(
    group,
    new THREE.RingGeometry(radius * 0.55, radius * 0.88, SEG * 2),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.42, side: THREE.DoubleSide }),
    0,
    0.04,
    0,
    false
  );
  ring.rotation.x = -Math.PI / 2;
  ring.userData.isRing = true;

  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    const post = addMesh(
      group,
      new THREE.BoxGeometry(0.07, 0.42, 0.07),
      mat(accent, { emissive: accent, emissiveIntensity: 0.35 }),
      Math.cos(a) * radius * 0.72,
      0.21,
      Math.sin(a) * radius * 0.72
    );
    post.userData.isPost = true;
    addMesh(
      group,
      new THREE.BoxGeometry(0.11, 0.09, 0.11),
      mat('#FFEB3B', { emissive: '#FFC107', emissiveIntensity: 0.55 }),
      post.position.x,
      0.44,
      post.position.z
    );
  }
}

function addCautionTape(parent: THREE.Object3D, length: number, y: number, z: number, rotY = 0): void {
  const tape = addMesh(
    parent,
    new THREE.BoxGeometry(length, 0.06, 0.04),
    mat('#FFEB3B', { emissive: '#FFC107', emissiveIntensity: 0.25, roughness: 0.8 }),
    0,
    y,
    z
  );
  tape.rotation.y = rotY;
  for (let i = 0; i < Math.floor(length / 0.22); i++) {
    addMesh(
      tape,
      new THREE.BoxGeometry(0.1, 0.065, 0.045),
      mat(i % 2 === 0 ? '#212121' : '#FFEB3B'),
      -length / 2 + 0.11 + i * 0.22,
      0,
      0
    );
  }
}

function addWarningSign(parent: THREE.Object3D, x: number, y: number, z: number, color: string): void {
  addMesh(parent, new THREE.BoxGeometry(0.05, 0.55, 0.05), mat('#546E7A', { metalness: 0.4 }), x, y, z);
  const board = addMesh(parent, new THREE.BoxGeometry(0.42, 0.42, 0.04), mat(color, { emissive: color, emissiveIntensity: 0.3 }), x, y + 0.38, z + 0.04);
  addMesh(board, new THREE.BoxGeometry(0.06, 0.28, 0.02), mat('#212121'), 0, 0.02, 0.04);
  addMesh(board, new THREE.BoxGeometry(0.06, 0.06, 0.02), mat('#212121'), 0, -0.1, 0.04);
}

export function createObstacle(scene: THREE.Scene, type: ObstacleKind, x: number, z: number): ObstacleEntity {
  const group = new THREE.Group();
  group.position.set(x, 0, z);

  switch (type) {
    case 'barricade': {
      const frame = mat('#FF6F00', { emissive: '#E65100', emissiveIntensity: 0.2, roughness: 0.65 });
      const leg = mat('#37474F', { metalness: 0.45, roughness: 0.55 });
      for (const sx of [-1, 1]) {
        const legG = new THREE.Group();
        legG.position.set(sx * 0.9, 0, 0);
        legG.rotation.z = sx * 0.1;
        addMesh(legG, new THREE.BoxGeometry(0.09, 1.0, 0.09), leg, 0, 0.5, 0);
        addMesh(legG, new THREE.BoxGeometry(0.14, 0.07, 0.14), mat('#FFD54F', { emissive: '#FFC107', emissiveIntensity: 0.45 }), 0, 0.98, 0);
        group.add(legG);
      }
      addMesh(group, new THREE.BoxGeometry(2.05, 0.09, 0.12), frame, 0, 0.92, 0);
      const panel = addMesh(group, new THREE.BoxGeometry(1.95, 0.72, 0.07), mat('#FAFAFA', { roughness: 0.45 }), 0, 0.5, 0.05);
      panel.userData.isPanel = true;
      for (let i = 0; i < 4; i++) {
        addMesh(
          panel,
          new THREE.BoxGeometry(1.82, 0.12, 0.02),
          mat(i % 2 === 0 ? '#FFEB3B' : '#212121', { emissive: i % 2 === 0 ? '#FFC107' : '#000', emissiveIntensity: i % 2 === 0 ? 0.35 : 0 }),
          0,
          -0.24 + i * 0.16,
          0.05
        );
      }
      addMesh(group, new THREE.BoxGeometry(0.38, 0.14, 0.09), mat('#212121'), 0, 0.78, 0.1);
      addCautionTape(group, 2.3, 0.86, 0.14, 0.08);
      addWarningSign(group, -1.15, 0, 0.22, '#FF1744');
      addWarningSign(group, 1.15, 0, 0.22, '#FF1744');
      addHazardPad(group, 1.15, '#FF1744', '#FF5252');
      break;
    }
    case 'pod': {
      const shell = mat('#689F38', { emissive: '#33691E', emissiveIntensity: 0.22, roughness: 0.6 });
      const goo = mat('#76FF03', { emissive: '#64DD17', emissiveIntensity: 0.45, transparent: true, opacity: 0.72 });
      addMesh(group, new THREE.BoxGeometry(0.72, 0.52, 0.72), shell, 0, 0.38, 0);
      addMesh(group, new THREE.BoxGeometry(0.58, 0.12, 0.58), shell, 0, 0.66, 0);
      for (const sx of [-1, 1]) {
        const shard = new THREE.Group();
        shard.position.set(sx * 0.38, 0.58, 0);
        shard.rotation.z = sx * 0.55;
        addMesh(shard, new THREE.BoxGeometry(0.22, 0.32, 0.07), shell, 0, 0, 0);
        shard.userData.isShard = true;
        group.add(shard);
      }
      const puddle = addMesh(group, new THREE.CylinderGeometry(0.88, 0.95, 0.03, SEG * 2), goo, 0, 0.02, 0, false);
      puddle.userData.isPuddle = true;
      for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2;
        addMesh(
          group,
          new THREE.BoxGeometry(0.07, 0.18, 0.07),
          goo,
          Math.cos(a) * 0.62,
          0.09,
          Math.sin(a) * 0.62
        );
      }
      const peek = addMesh(
        group,
        new THREE.BoxGeometry(0.2, 0.2, 0.18),
        mat('#B8E986', { emissive: '#76FF03', emissiveIntensity: 0.25 }),
        0,
        0.52,
        0.18
      );
      peek.userData.isPeek = true;
      addMesh(peek, new THREE.BoxGeometry(0.12, 0.08, 0.05), mat('#D4B896'), 0, -0.02, 0.12);
      for (const sx of [-1, 1]) {
        addMesh(peek, new THREE.BoxGeometry(0.04, 0.06, 0.02), mat('#111'), sx * 0.04, 0.04, 0.1);
      }
      addHazardPad(group, 0.95, '#76FF03', '#AEEA00');
      break;
    }
    case 'cones': {
      for (const [ox, oz, rot] of [[-0.52, 0.08, 0.1], [0, 0, 0], [0.52, -0.08, -0.08]] as const) {
        const cone = new THREE.Group();
        cone.position.set(ox, 0, oz);
        cone.rotation.y = rot;
        addMesh(cone, new THREE.BoxGeometry(0.48, 0.07, 0.48), mat('#455A64', { roughness: 0.85 }), 0, 0.035, 0);
        addMesh(cone, new THREE.BoxGeometry(0.08, 0.52, 0.08), mat('#FF9800', { emissive: '#F57C00', emissiveIntensity: 0.12 }), 0, 0.33, 0);
        addMesh(cone, new THREE.BoxGeometry(0.36, 0.1, 0.36), mat('#FF9800', { emissive: '#F57C00', emissiveIntensity: 0.1 }), 0, 0.12, 0);
        addMesh(cone, new THREE.BoxGeometry(0.22, 0.1, 0.22), mat('#FF9800'), 0, 0.52, 0);
        for (let s = 0; s < 2; s++) {
          addMesh(
            cone,
            new THREE.BoxGeometry(0.38 - s * 0.1, 0.05, 0.38 - s * 0.1),
            mat('#FFEB3B', { emissive: '#FFC107', emissiveIntensity: 0.4 }),
            0,
            0.22 + s * 0.16,
            0
          );
        }
        cone.userData.isCone = true;
        group.add(cone);
      }
      addMesh(group, new THREE.BoxGeometry(1.55, 0.04, 0.48), mat('#546E7A', { metalness: 0.35, roughness: 0.6 }), 0, 0.02, 0);
      addCautionTape(group, 1.45, 0.18, 0.15, 0.04);
      addHazardPad(group, 0.85, '#FF9800', '#FFB74D');
      break;
    }
    case 'debris': {
      const metal = mat('#546E7A', { metalness: 0.65, roughness: 0.4 });
      addMesh(group, new THREE.BoxGeometry(1.05, 0.22, 0.58), mat('#455A64', { metalness: 0.45 }), 0, 0.12, 0);
      addMesh(group, new THREE.BoxGeometry(0.52, 0.4, 0.44), metal, 0.4, 0.24, 0.16);
      addMesh(group, new THREE.BoxGeometry(0.38, 0.1, 0.38), metal, -0.34, 0.08, -0.1);
      addMesh(group, new THREE.BoxGeometry(0.22, 0.22, 0.2), mat('#B8E986', { emissive: '#76FF03', emissiveIntensity: 0.2 }), -0.14, 0.4, 0.24);
      addMesh(group, new THREE.BoxGeometry(0.14, 0.1, 0.06), mat('#D4B896'), -0.14, 0.34, 0.36);
      for (const sx of [-1, 1]) {
        addMesh(group, new THREE.BoxGeometry(0.05, 0.07, 0.02), mat('#111'), -0.14 + sx * 0.05, 0.42, 0.36);
      }
      addMesh(
        group,
        new THREE.BoxGeometry(0.06, 0.48, 0.06),
        mat('#00E676', { emissive: '#00E676', emissiveIntensity: 0.75 }),
        0.22,
        0.48,
        -0.08
      );
      for (let i = 0; i < 3; i++) {
        const wisp = addMesh(
          group,
          new THREE.BoxGeometry(0.16 + i * 0.05, 0.12 + i * 0.04, 0.16 + i * 0.05),
          mat('#78909C', { transparent: true, opacity: 0.22 - i * 0.04 }),
          0.08 + i * 0.07,
          0.58 + i * 0.12,
          0.04,
          false
        );
        wisp.userData.isSmoke = true;
        wisp.userData.smokeIdx = i;
      }
      addHazardPad(group, 0.88, '#FF7043', '#FF5722');
      break;
    }
  }

  scene.add(group);
  const radius = type === 'barricade' ? 1.15 : type === 'cones' ? 0.85 : 0.78;
  return { mesh: group, x, z, kind: type, radius, hit: false };
}

export function obstacleClearHeight(kind: ObstacleKind): number {
  const heights: Record<ObstacleKind, number> = {
    cones: 0.42,
    debris: 0.48,
    pod: 0.52,
    barricade: 0.82,
  };
  return heights[kind];
}

export function updateObstacles(obstacles: ObstacleEntity[], time: number, playerZ: number): void {
  for (const o of obstacles) {
    if (o.hit || !isNearZ(o.z, playerZ)) continue;

    o.mesh.traverse((c) => {
      if (!(c instanceof THREE.Mesh)) return;
      if (c.userData.isRing) {
        c.rotation.z = time * 0.8 + o.x;
        (c.material as THREE.MeshBasicMaterial).opacity = 0.32 + Math.sin(time * 4 + o.z) * 0.1;
      }
      if (c.userData.isPost) {
        c.position.y = 0.21 + Math.sin(time * 5 + o.x + c.position.x) * 0.015;
      }
      if (c.userData.isShard) {
        c.rotation.z += Math.sin(time * 2 + o.x) * 0.003;
      }
      if (c.userData.isPeek) {
        c.position.y = 0.52 + Math.sin(time * 4 + o.z) * 0.04;
      }
      if (c.userData.isSmoke) {
        const i = c.userData.smokeIdx as number;
        c.position.y = 0.58 + i * 0.12 + Math.sin(time * 2 + o.z + i) * 0.05;
        c.rotation.y = time * 0.5 + i;
      }
      if (c.userData.isCone) {
        c.rotation.y += Math.sin(time * 1.5 + o.x) * 0.001;
      }
    });

    if (o.kind === 'pod') {
      o.mesh.position.y = Math.sin(time * 3 + o.x) * 0.04;
    }
    if (o.kind === 'barricade') {
      o.mesh.rotation.y = Math.sin(time * 2 + o.x) * 0.012;
    }
  }
}

export function disposeObstacles(obstacles: ObstacleEntity[], scene: THREE.Scene): void {
  for (const o of obstacles) {
    scene.remove(o.mesh);
    disposeObject3D(o.mesh);
  }
}
