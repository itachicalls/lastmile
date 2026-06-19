import * as THREE from 'three';
import { addMesh, mat, type LimbSet } from './ModelUtils';
import { IS_MOBILE } from './platform';

export type ChibiSpecies = 'alien' | 'monkey' | 'bull' | 'cat' | 'fox' | 'frog';
export type ChibiTier = 'grunt' | 'raider' | 'boss';

export type AlienRig = THREE.Group & {
  userData: { limbs: LimbSet; bobPhase: number; species: ChibiSpecies };
};

const SEG = IS_MOBILE ? 6 : 8;

const SPECIES_POOL: Record<'pickpocket' | 'rival' | 'boss', ChibiSpecies[]> = {
  pickpocket: ['alien', 'monkey', 'frog'],
  rival: ['bull', 'fox', 'cat'],
  boss: ['bull', 'alien', 'frog'],
};

const TIER_POOL: Record<ChibiTier, ChibiSpecies[]> = {
  grunt: ['alien', 'monkey', 'frog'],
  raider: ['bull', 'fox', 'cat'],
  boss: ['bull', 'alien', 'frog'],
};

function chibiSkin(color: string, emissive: string, intensity = 0.08): THREE.MeshStandardMaterial {
  return mat(color, { emissive, emissiveIntensity: intensity, roughness: 0.92, metalness: 0 });
}

function addStubArm(parent: THREE.Object3D, side: number, sc: number, skin: THREE.Material, shoulderY: number, paw?: THREE.Material): THREE.Group {
  const arm = new THREE.Group();
  arm.position.set(side * 0.34 * sc, shoulderY, 0);
  addMesh(arm, new THREE.CylinderGeometry(0.07 * sc, 0.075 * sc, 0.22 * sc, SEG), skin, 0, -0.11 * sc, 0);
  addMesh(arm, new THREE.CylinderGeometry(0.065 * sc, 0.07 * sc, 0.18 * sc, SEG), skin, 0, -0.3 * sc, 0);
  addMesh(arm, new THREE.BoxGeometry(0.11 * sc, 0.08 * sc, 0.1 * sc), paw ?? skin, 0, -0.42 * sc, 0);
  parent.add(arm);
  return arm;
}

function addStubLeg(parent: THREE.Object3D, side: number, sc: number, skin: THREE.Material, shoe: THREE.Material): THREE.Group {
  const leg = new THREE.Group();
  leg.position.set(side * 0.14 * sc, 0.02 * sc, 0);
  addMesh(leg, new THREE.CylinderGeometry(0.08 * sc, 0.085 * sc, 0.2 * sc, SEG), skin, 0, -0.1 * sc, 0);
  addMesh(leg, new THREE.CylinderGeometry(0.075 * sc, 0.08 * sc, 0.16 * sc, SEG), skin, 0, -0.28 * sc, 0);
  addMesh(leg, new THREE.BoxGeometry(0.14 * sc, 0.07 * sc, 0.2 * sc), shoe, 0, -0.4 * sc, 0.03 * sc);
  parent.add(leg);
  return leg;
}

function addTanJaw(head: THREE.Group, sc: number, mul: number): void {
  addMesh(
    head,
    new THREE.BoxGeometry(0.34 * sc * mul, 0.2 * sc * mul, 0.16 * sc * mul),
    mat('#D4B896', { roughness: 0.95 }),
    0,
    -0.06 * sc,
    0.2 * sc
  );
}

function addAlmondEyes(head: THREE.Group, sc: number, glow: string): void {
  const eyeMat = mat('#0A0A0A', { emissive: glow, emissiveIntensity: 0.35, roughness: 1 });
  for (const sx of [-1, 1]) {
    const eye = addMesh(head, new THREE.BoxGeometry(0.13 * sc, 0.17 * sc, 0.035 * sc), eyeMat, sx * 0.11 * sc, 0.07 * sc, 0.24 * sc);
    eye.rotation.z = sx * 0.12;
    addMesh(head, new THREE.BoxGeometry(0.035 * sc, 0.035 * sc, 0.02 * sc), mat('#FFFFFF', { roughness: 1 }), sx * 0.14 * sc, 0.1 * sc, 0.27 * sc);
  }
}

function addMouthSlit(head: THREE.Group, sc: number, wide = 0.1): THREE.Mesh {
  return addMesh(
    head,
    new THREE.BoxGeometry(wide * sc, 0.025 * sc, 0.02 * sc),
    mat('#1A1A1A', { roughness: 1 }),
    0,
    -0.02 * sc,
    0.28 * sc
  );
}

function decorateSpeciesHead(head: THREE.Group, sc: number, species: ChibiSpecies, tier: ChibiTier): THREE.Mesh {
  const jawMul = tier === 'boss' ? 1.3 : 1;

  switch (species) {
    case 'alien':
      addTanJaw(head, sc, jawMul);
      addAlmondEyes(head, sc, '#76FF03');
      return addMouthSlit(head, sc);

    case 'monkey': {
      addMesh(head, new THREE.BoxGeometry(0.36 * sc, 0.14 * sc, 0.12 * sc), mat('#FFCC80', { roughness: 0.95 }), 0, -0.04 * sc, 0.22 * sc);
      for (const sx of [-1, 1]) {
        addMesh(head, new THREE.BoxGeometry(0.12 * sc, 0.08 * sc, 0.04 * sc), mat('#3E2723', { roughness: 1 }), sx * 0.11 * sc, 0.12 * sc, 0.25 * sc);
        addMesh(head, new THREE.BoxGeometry(0.08 * sc, 0.06 * sc, 0.03 * sc), mat('#FFFFFF'), sx * 0.11 * sc, 0.1 * sc, 0.27 * sc);
      }
      return addMouthSlit(head, sc, 0.08);
    }

    case 'bull': {
      addTanJaw(head, sc, jawMul * 0.9);
      addMesh(
        head,
        new THREE.BoxGeometry(0.4 * sc, 0.09 * sc, 0.06 * sc),
        mat('#212121', { emissive: '#000', emissiveIntensity: 0.2, roughness: 0.7 }),
        0,
        0.08 * sc,
        0.26 * sc
      );
      for (const sx of [-1, 1]) {
        const horn = addMesh(head, new THREE.BoxGeometry(0.08 * sc, 0.22 * sc, 0.08 * sc), mat('#ECEFF1'), sx * 0.2 * sc, 0.48 * sc, 0);
        horn.rotation.z = sx * -0.35;
      }
      return addMouthSlit(head, sc, 0.09);
    }

    case 'cat': {
      addMesh(head, new THREE.BoxGeometry(0.32 * sc, 0.12 * sc, 0.1 * sc), mat('#ECEFF1', { roughness: 0.95 }), 0, -0.03 * sc, 0.22 * sc);
      for (const sx of [-1, 1]) {
        const ear = addMesh(head, new THREE.BoxGeometry(0.1 * sc, 0.12 * sc, 0.06 * sc), mat('#78909C'), sx * 0.18 * sc, 0.42 * sc, 0);
        ear.rotation.z = sx * 0.25;
        addMesh(head, new THREE.BoxGeometry(0.09 * sc, 0.11 * sc, 0.03 * sc), mat('#FFEB3B', { emissive: '#FBC02D', emissiveIntensity: 0.25 }), sx * 0.11 * sc, 0.08 * sc, 0.25 * sc);
        addMesh(head, new THREE.BoxGeometry(0.02 * sc, 0.07 * sc, 0.02 * sc), mat('#111'), sx * 0.11 * sc, 0.08 * sc, 0.27 * sc);
      }
      return addMouthSlit(head, sc, 0.06);
    }

    case 'fox': {
      addMesh(head, new THREE.BoxGeometry(0.34 * sc, 0.16 * sc, 0.14 * sc), mat('#FFF3E0', { roughness: 0.95 }), 0, -0.05 * sc, 0.21 * sc);
      addAlmondEyes(head, sc, '#FF7043');
      for (const sx of [-1, 1]) {
        const ear = addMesh(head, new THREE.BoxGeometry(0.1 * sc, 0.14 * sc, 0.05 * sc), mat('#FF7043'), sx * 0.2 * sc, 0.44 * sc, -0.02 * sc);
        ear.rotation.z = sx * 0.3;
      }
      addMesh(head, new THREE.BoxGeometry(0.05 * sc, 0.05 * sc, 0.03 * sc), mat('#212121'), 0, -0.01 * sc, 0.29 * sc);
      return addMouthSlit(head, sc, 0.07);
    }

    case 'frog': {
      for (const sx of [-1, 1]) {
        addMesh(head, new THREE.BoxGeometry(0.14 * sc, 0.14 * sc, 0.12 * sc), mat('#FFFFFF', { roughness: 1 }), sx * 0.13 * sc, 0.38 * sc, 0.02 * sc);
        addMesh(head, new THREE.BoxGeometry(0.07 * sc, 0.07 * sc, 0.04 * sc), mat('#111'), sx * 0.13 * sc, 0.38 * sc, 0.09 * sc);
      }
      addMesh(head, new THREE.BoxGeometry(0.22 * sc, 0.08 * sc, 0.08 * sc), mat('#388E3C', { roughness: 0.9 }), 0, -0.04 * sc, 0.24 * sc);
      return addMesh(head, new THREE.BoxGeometry(0.16 * sc, 0.04 * sc, 0.03 * sc), mat('#2E7D32'), 0, -0.06 * sc, 0.28 * sc);
    }
  }
}

function speciesColors(species: ChibiSpecies): { skin: string; emissive: string; belly?: string; shoe: string; paw?: string } {
  switch (species) {
    case 'monkey':
      return { skin: '#FF9800', emissive: '#F57C00', belly: '#FFF8E1', shoe: '#5D4037', paw: '#FFCC80' };
    case 'bull':
      return { skin: '#795548', emissive: '#FF1744', shoe: '#3E2723' };
    case 'cat':
      return { skin: '#90A4AE', emissive: '#FFC107', belly: '#ECEFF1', shoe: '#FFFFFF', paw: '#FFFFFF' };
    case 'fox':
      return { skin: '#FF7043', emissive: '#FF5722', belly: '#FFF3E0', shoe: '#FFFFFF', paw: '#FFFFFF' };
    case 'frog':
      return { skin: '#66BB6A', emissive: '#00E676', belly: '#A5D6A7', shoe: '#33691E' };
    default:
      return { skin: '#B8E986', emissive: '#76FF03', belly: '#E8F5C8', shoe: '#2E2E2E' };
  }
}

function addTierExtras(g: THREE.Group, sc: number, tier: ChibiTier, species: ChibiSpecies, head: THREE.Group): void {
  if (tier === 'grunt' && species === 'alien') {
    addMesh(g, new THREE.BoxGeometry(0.18 * sc, 0.2 * sc, 0.14 * sc), mat('#FF8F00', { emissive: '#FF6F00', emissiveIntensity: 0.25 }), -0.32 * sc, 0.48 * sc, -0.06 * sc);
  }
  if (tier === 'raider') {
    addMesh(g, new THREE.BoxGeometry(0.05 * sc, 0.05 * sc, 0.42 * sc), mat('#00E5FF', { emissive: '#00B0FF', emissiveIntensity: 0.9 }), 0.36 * sc, 0.38 * sc, 0.12 * sc);
    if (species === 'bull') {
      addMesh(head, new THREE.BoxGeometry(0.44 * sc, 0.1 * sc, 0.06 * sc), mat('#E53935', { emissive: '#B71C1C', emissiveIntensity: 0.35 }), 0, 0.22 * sc, 0.24 * sc);
    }
  }
  if (tier === 'boss') {
    for (const sx of [-1, 0, 1]) {
      addMesh(
        head,
        new THREE.BoxGeometry(0.08 * sc, 0.14 * sc, 0.08 * sc),
        mat('#FFD54F', { emissive: '#FFA000', emissiveIntensity: 0.5, metalness: 0.3 }),
        sx * 0.12 * sc,
        0.48 * sc,
        0
      );
    }
    addMesh(
      g,
      new THREE.BoxGeometry(0.62 * sc, 0.48 * sc, 0.06 * sc),
      mat('#4A148C', { emissive: '#311B92', emissiveIntensity: 0.15, roughness: 0.9 }),
      0,
      0.44 * sc,
      -0.18 * sc
    );
  }
}

export function buildChibiSpecies(species: ChibiSpecies, sc: number, tier: ChibiTier = 'grunt'): AlienRig {
  const g = new THREE.Group() as AlienRig;
  const colors = speciesColors(species);
  const skin = chibiSkin(colors.skin, colors.emissive, tier === 'boss' ? 0.16 : 0.1);
  const shoe = mat(colors.shoe, { roughness: 0.9 });
  const paw = colors.paw ? mat(colors.paw, { roughness: 0.92 }) : skin;

  addMesh(g, new THREE.BoxGeometry(0.46 * sc, 0.44 * sc, 0.3 * sc), skin, 0, 0.42 * sc, 0);
  if (colors.belly) {
    addMesh(g, new THREE.BoxGeometry(0.38 * sc, 0.28 * sc, 0.08 * sc), mat(colors.belly, { roughness: 0.95 }), 0, 0.38 * sc, 0.14 * sc);
  }

  const head = new THREE.Group();
  head.position.y = 0.72 * sc;
  g.add(head);
  addMesh(head, new THREE.BoxGeometry(0.48 * sc, 0.46 * sc, 0.42 * sc), skin, 0, 0.2 * sc, 0);
  const mouth = decorateSpeciesHead(head, sc, species, tier);
  addTierExtras(g, sc, tier, species, head);

  const limbs: LimbSet = {
    leftArm: addStubArm(g, -1, sc, skin, 0.58 * sc, paw),
    rightArm: addStubArm(g, 1, sc, skin, 0.58 * sc, paw),
    leftLeg: addStubLeg(g, -1, sc, skin, shoe),
    rightLeg: addStubLeg(g, 1, sc, skin, shoe),
    mouth,
    head,
  };

  g.userData = { limbs, bobPhase: Math.random() * 6, species };
  return g;
}

export function pickSpeciesForTier(tier: ChibiTier): ChibiSpecies {
  const pool = TIER_POOL[tier];
  return pool[Math.floor(Math.random() * pool.length)];
}

function pickSpeciesForEnemyType(type: 'pickpocket' | 'rival' | 'boss'): ChibiSpecies {
  const pool = SPECIES_POOL[type];
  return pool[Math.floor(Math.random() * pool.length)];
}

function enemyTypeToTier(type: 'pickpocket' | 'rival' | 'boss'): ChibiTier {
  if (type === 'rival') return 'raider';
  if (type === 'boss') return 'boss';
  return 'grunt';
}

function buildUFO(sc: number): THREE.Group {
  const g = new THREE.Group();
  const hullSeg = IS_MOBILE ? 10 : 14;
  addMesh(
    g,
    new THREE.CylinderGeometry(0.48 * sc, 0.68 * sc, 0.14 * sc, hullSeg),
    mat('#78909C', { metalness: 0.5, roughness: 0.35, emissive: '#00E676', emissiveIntensity: 0.2 }),
    0,
    2.1 * sc,
    0
  );
  addMesh(
    g,
    new THREE.TorusGeometry(0.58 * sc, 0.035 * sc, 6, hullSeg),
    mat('#69F0AE', { emissive: '#00E676', emissiveIntensity: 0.7 }),
    0,
    2.04 * sc,
    0
  );
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    addMesh(
      g,
      new THREE.BoxGeometry(0.06 * sc, 0.06 * sc, 0.06 * sc),
      mat('#FFEB3B', { emissive: '#FFC107', emissiveIntensity: 0.8 }),
      Math.cos(a) * 0.52 * sc,
      2.03 * sc,
      Math.sin(a) * 0.52 * sc
    );
  }
  addMesh(
    g,
    new THREE.BoxGeometry(0.42 * sc, 0.22 * sc, 0.42 * sc),
    mat('#80DEEA', { transparent: true, opacity: 0.7, emissive: '#00BCD4', emissiveIntensity: 0.4 }),
    0,
    2.24 * sc,
    0
  );

  const pilot = buildChibiSpecies('alien', 0.42 * sc, 'grunt');
  pilot.position.set(0, 2.02 * sc, 0);
  g.add(pilot);

  const beam = addMesh(
    g,
    new THREE.CylinderGeometry(0.03 * sc, 0.35 * sc, 1.4 * sc, 8, 1, true),
    new THREE.MeshBasicMaterial({ color: '#69F0AE', transparent: true, opacity: 0.22, side: THREE.DoubleSide }),
    0,
    1.2 * sc,
    0,
    false
  );
  beam.userData.isBeam = true;
  return g;
}

export function buildAlien(type: 'pickpocket' | 'rival' | 'drone' | 'boss', sc: number): THREE.Group {
  if (type === 'drone') return buildUFO(sc);
  const species = pickSpeciesForEnemyType(type);
  return buildChibiSpecies(species, sc, enemyTypeToTier(type));
}

export function animateAlienRig(rig: THREE.Group, time: number, active: boolean): void {
  const data = (rig as AlienRig).userData;
  if (!data?.limbs) return;

  const { limbs, bobPhase, species } = data;
  const t = time * (active ? 11 : 4) + bobPhase;
  const swing = active ? 0.65 : 0.18;
  const hop = species === 'frog' ? 1.25 : 1;

  limbs.leftArm.rotation.x = Math.sin(t) * swing;
  limbs.rightArm.rotation.x = -Math.sin(t) * swing;
  limbs.leftLeg.rotation.x = -Math.sin(t) * swing * 0.75;
  limbs.rightLeg.rotation.x = Math.sin(t) * swing * 0.75;

  if (limbs.head) limbs.head.rotation.y = Math.sin(time * 2.2 + bobPhase) * (active ? 0.18 : 0.06);
  if (limbs.mouth && active) {
    limbs.mouth.scale.y = 1 + Math.abs(Math.sin(time * 9 + bobPhase)) * (species === 'frog' ? 0.5 : 0.35);
  }

  rig.position.y = Math.abs(Math.sin(time * (active ? 9 : 3) + bobPhase)) * (active ? 0.09 * hop : 0.03);
}

export function animateUFO(rig: THREE.Group, time: number): void {
  rig.position.y = Math.sin(time * 4) * 0.16;
  rig.rotation.y = time * 0.75;
  rig.traverse((c) => {
    if (c instanceof THREE.Mesh && c.userData.isBeam) {
      (c.material as THREE.MeshBasicMaterial).opacity = 0.16 + Math.sin(time * 6) * 0.1;
    }
  });
}
