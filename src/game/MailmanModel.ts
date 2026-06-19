import * as THREE from 'three';
import { addMesh, mat } from './ModelUtils';
import { buildPackageOrb } from './PackageVisual';
import type { CharacterDef } from '../data/characters';

export type MailmanMesh = {
  mesh: THREE.Group;
  body: THREE.Group;
  leftLeg: THREE.Group;
  rightLeg: THREE.Group;
  leftArm: THREE.Group;
  rightArm: THREE.Group;
  packageMesh: THREE.Mesh;
  packageGlow: THREE.Mesh;
  packageOrb: THREE.Group;
  hoverboard: THREE.Group;
  backpack: THREE.Group;
  mailGun: THREE.Group;
  mailGunMuzzle: THREE.Mesh;
};

function buildLeg(x: number, pants: THREE.Material, boot: THREE.Material): THREE.Group {
  const leg = new THREE.Group();
  leg.position.set(x, 0.48, 0.02);
  addMesh(leg, new THREE.CapsuleGeometry(0.085, 0.22, 5, 8), pants, 0, -0.12, 0);
  addMesh(leg, new THREE.CapsuleGeometry(0.075, 0.18, 5, 8), pants, 0, -0.38, 0);
  addMesh(leg, new THREE.BoxGeometry(0.15, 0.09, 0.26), boot, 0, -0.54, 0.05);
  addMesh(leg, new THREE.BoxGeometry(0.12, 0.04, 0.06), mat('#37474F', { roughness: 0.85 }), 0, -0.54, 0.16);
  return leg;
}

function buildArm(side: number, jacket: THREE.Material, accent: THREE.Material, skin: THREE.Material): THREE.Group {
  const arm = new THREE.Group();
  arm.position.set(side * 0.34, 1.1, 0);
  addMesh(arm, new THREE.CapsuleGeometry(0.065, 0.2, 5, 8), jacket, 0, -0.08, 0);
  addMesh(arm, new THREE.CapsuleGeometry(0.055, 0.18, 5, 8), accent, 0, -0.3, 0);
  addMesh(arm, new THREE.SphereGeometry(0.065, 8, 8), skin, 0, -0.46, 0);
  for (const f of [-0.035, 0, 0.035]) {
    addMesh(arm, new THREE.CapsuleGeometry(0.014, 0.045, 3, 4), skin, f, -0.52, 0.02);
  }
  return arm;
}

function buildBackpack(body: THREE.Group, character: CharacterDef): { pack: THREE.Group; vipPouch: THREE.Mesh; vipGlow: THREE.Mesh; packageOrb: THREE.Group } {
  const pack = new THREE.Group();
  pack.position.set(0, 1.0, -0.1);

  const fabric = mat(character.packMain, { roughness: 0.88 });
  const fabricDark = mat(character.packDark, { roughness: 0.92 });
  const strap = mat('#263238', { roughness: 0.8 });
  const buckle = mat('#90A4AE', { metalness: 0.72, roughness: 0.35 });
  const trim = mat(character.packTrim, { emissive: character.packTrim, emissiveIntensity: 0.18 });

  addMesh(pack, new THREE.BoxGeometry(0.4, 0.44, 0.13), fabricDark, 0, 0.06, -0.04);
  addMesh(pack, new THREE.BoxGeometry(0.38, 0.14, 0.12), fabric, 0, 0.3, -0.03);
  addMesh(pack, new THREE.BoxGeometry(0.42, 0.05, 0.14), fabricDark, 0, 0.36, -0.04);

  for (const sx of [-0.13, 0.13]) {
    addMesh(pack, new THREE.BoxGeometry(0.055, 0.34, 0.035), strap, sx, 0.26, 0.04);
    addMesh(pack, new THREE.BoxGeometry(0.045, 0.2, 0.03), strap, sx * 0.85, 0.46, 0.06);
    addMesh(pack, new THREE.BoxGeometry(0.07, 0.035, 0.025), buckle, sx, 0.2, 0.06);
  }

  addMesh(pack, new THREE.BoxGeometry(0.44, 0.05, 0.03), strap, 0, -0.08, 0.02);
  addMesh(pack, new THREE.BoxGeometry(0.08, 0.06, 0.025), buckle, 0, -0.08, 0.04);

  for (const sx of [-1, 1]) {
    addMesh(pack, new THREE.BoxGeometry(0.09, 0.16, 0.09), fabric, sx * 0.22, 0.02, 0.01);
    addMesh(pack, new THREE.BoxGeometry(0.1, 0.03, 0.01), trim, sx * 0.22, 0.1, 0.06);
  }

  addMesh(pack, new THREE.BoxGeometry(0.41, 0.035, 0.01), trim, 0, 0.14, 0.07);

  const carried = buildPackageOrb('carried');
  carried.group.position.set(0, 0.46, 0.04);
  carried.group.rotation.y = 0.35;
  pack.add(carried.group);

  addMesh(pack, new THREE.CylinderGeometry(0.01, 0.01, 0.12, 6), mat('#455A64', { metalness: 0.65 }), 0.15, 0.42, 0.03);
  addMesh(pack, new THREE.SphereGeometry(0.022, 8, 8), mat('#00E676', { emissive: '#00E676', emissiveIntensity: 0.75 }), 0.15, 0.49, 0.03);

  body.add(pack);
  return { pack, vipPouch: carried.core, vipGlow: carried.outerGlow, packageOrb: carried.group };
}

/** Postal mail blaster — envelope hopper + barrel, not a flashlight cone. */
function buildMailBlaster(): { gun: THREE.Group; muzzle: THREE.Mesh } {
  const gun = new THREE.Group();
  const metal = mat('#607D8B', { metalness: 0.78, roughness: 0.28 });
  const dark = mat('#37474F', { metalness: 0.82, roughness: 0.22 });
  const stamp = mat('#FF9800', { emissive: '#FF9800', emissiveIntensity: 0.3 });

  addMesh(gun, new THREE.BoxGeometry(0.07, 0.15, 0.08), dark, 0, -0.07, 0.01);
  addMesh(gun, new THREE.BoxGeometry(0.05, 0.04, 0.05), mat('#263238', { roughness: 0.9 }), 0.04, -0.1, 0.02);

  addMesh(gun, new THREE.BoxGeometry(0.12, 0.12, 0.28), metal, 0, 0.02, 0.1);
  addMesh(gun, new THREE.BoxGeometry(0.1, 0.035, 0.2), mat('#FFF8E1', { roughness: 0.7 }), 0, 0.09, 0.08);
  addMesh(gun, new THREE.BoxGeometry(0.08, 0.006, 0.16), stamp, 0, 0.115, 0.08);

  for (const sx of [-0.035, 0.035]) {
    addMesh(gun, new THREE.BoxGeometry(0.012, 0.05, 0.14), dark, sx, 0.02, 0.1);
  }

  addMesh(gun, new THREE.CylinderGeometry(0.038, 0.044, 0.2, 8), dark, 0, 0.02, 0.32);
  addMesh(gun, new THREE.CylinderGeometry(0.032, 0.038, 0.08, 8), metal, 0, 0.02, 0.44);

  const muzzle = addMesh(
    gun,
    new THREE.TorusGeometry(0.048, 0.01, 6, 12),
    mat('#00E5FF', { emissive: '#00E5FF', emissiveIntensity: 0.65 }),
    0,
    0.02,
    0.5
  );
  muzzle.userData.isMailMuzzle = true;

  addMesh(
    gun,
    new THREE.BoxGeometry(0.018, 0.03, 0.05),
    mat('#00E676', { emissive: '#00E676', emissiveIntensity: 0.7 }),
    0,
    0.1,
    0.22
  );
  addMesh(gun, new THREE.BoxGeometry(0.04, 0.025, 0.06), mat('#455A64', { metalness: 0.6 }), 0, 0.1, 0.14);

  gun.rotation.set(-0.2, -0.15, 0.05);
  return { gun, muzzle };
}

export function createMailmanMesh(character: CharacterDef): MailmanMesh {
  const mesh = new THREE.Group();
  const body = new THREE.Group();

  const skin = mat(character.skin);
  const jacket = mat(character.jacket, { roughness: 0.4, metalness: 0.08 });
  const jacketLight = mat(character.jacketLight, { roughness: 0.35 });
  const jacketTrim = mat(character.jacketTrim, { emissive: character.jacketTrim, emissiveIntensity: 0.2 });
  const hat = mat(character.hat, { roughness: 0.45, metalness: 0.1 });
  const hatBrim = mat(character.hatBrim, { roughness: 0.5 });
  const pants = mat('#263238', { roughness: 0.85 });
  const boot = mat('#1A1A1A', { roughness: 0.9, metalness: 0.15 });
  const visor = mat('#80DEEA', { emissive: '#00BCD4', emissiveIntensity: 0.55, metalness: 0.65, transparent: true, opacity: 0.88 });

  const hoverboard = new THREE.Group();
  addMesh(hoverboard, new THREE.BoxGeometry(0.82, 0.09, 1.15), mat('#37474F', { metalness: 0.45, roughness: 0.55 }), 0, 0.06, 0.04);
  addMesh(hoverboard, new THREE.BoxGeometry(0.7, 0.035, 1.0), mat('#546E7A', { metalness: 0.35, roughness: 0.65 }), 0, 0.11, 0.04);
  addMesh(hoverboard, new THREE.BoxGeometry(0.55, 0.02, 0.85), mat('#263238', { roughness: 0.9 }), 0, 0.13, 0.04);
  for (const sx of [-0.3, 0.3]) {
    addMesh(hoverboard, new THREE.CylinderGeometry(0.1, 0.1, 0.035, 12), mat('#78909C', { metalness: 0.65, roughness: 0.4 }), sx, 0.05, -0.38);
    addMesh(hoverboard, new THREE.TorusGeometry(0.11, 0.014, 8, 16), mat('#455A64', { metalness: 0.5 }), sx, 0.05, -0.38, false);
  }
  mesh.add(hoverboard);

  addMesh(body, new THREE.CapsuleGeometry(0.22, 0.18, 6, 10), pants, 0, 0.58, 0);
  addMesh(body, new THREE.CapsuleGeometry(0.26, 0.42, 8, 12), jacket, 0, 0.98, 0);
  addMesh(body, new THREE.BoxGeometry(0.5, 0.1, 0.28), jacketLight, 0, 1.18, 0.02);
  addMesh(body, new THREE.BoxGeometry(0.52, 0.08, 0.3), jacketTrim, 0, 1.26, 0.01);
  addMesh(body, new THREE.BoxGeometry(0.14, 0.28, 0.06), jacketTrim, 0, 1.0, 0.17);

  for (const sx of [-1, 1]) {
    addMesh(body, new THREE.SphereGeometry(0.11, 10, 8), jacketLight, sx * 0.32, 1.22, 0);
  }

  addMesh(body, new THREE.SphereGeometry(0.24, 14, 12), skin, 0, 1.48, 0.02);
  addMesh(body, new THREE.SphereGeometry(0.27, 14, 12, 0, Math.PI * 2, 0, Math.PI * 0.55), hat, 0, 1.52, 0);
  addMesh(body, new THREE.BoxGeometry(0.44, 0.12, 0.14), hatBrim, 0, 1.62, 0.06);
  addMesh(body, new THREE.BoxGeometry(0.38, 0.09, 0.05), visor, 0, 1.52, 0.22);

  const leftLeg = buildLeg(-0.13, pants, boot);
  const rightLeg = buildLeg(0.13, pants, boot);
  body.add(leftLeg, rightLeg);

  const leftArm = buildArm(-1, jacket, jacketLight, skin);
  const rightArm = buildArm(1, jacket, jacketLight, skin);
  body.add(leftArm, rightArm);

  const { pack, vipPouch, vipGlow, packageOrb } = buildBackpack(body, character);

  const { gun: mailGun, muzzle: mailGunMuzzle } = buildMailBlaster();
  mailGun.position.set(0.08, -0.4, 0.1);
  rightArm.add(mailGun);

  body.position.y = 0.28;
  mesh.add(body);

  return {
    mesh,
    body,
    leftLeg,
    rightLeg,
    leftArm,
    rightArm,
    packageMesh: vipPouch,
    packageGlow: vipGlow,
    packageOrb,
    hoverboard,
    backpack: pack,
    mailGun,
    mailGunMuzzle,
  };
}
