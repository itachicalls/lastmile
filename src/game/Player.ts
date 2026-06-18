import * as THREE from 'three';
import { addMesh, mat, disposeObject3D } from './ModelUtils';

export class Player {
  mesh: THREE.Group;
  x = 0;
  z = 0;
  targetX = 0;
  hurtFlash = 0;
  runPhase = 0;

  private body: THREE.Group;
  private leftLeg: THREE.Group;
  private rightLeg: THREE.Group;
  private leftArm: THREE.Group;
  private rightArm: THREE.Group;
  private packageMesh: THREE.Mesh;
  private packageGlow: THREE.Mesh;
  private hoverboard: THREE.Group;
  private trailMeshes: THREE.Mesh[] = [];

  constructor(scene: THREE.Scene) {
    this.mesh = new THREE.Group();
    this.body = new THREE.Group();

    const skin = mat('#FFCC80');
    const jacket = mat('#1565C0', { roughness: 0.4, metalness: 0.08 });
    const jacketLight = mat('#42A5F5', { roughness: 0.35 });
    const jacketTrim = mat('#FFD54F', { emissive: '#FFA000', emissiveIntensity: 0.2 });
    const pants = mat('#263238', { roughness: 0.85 });
    const boot = mat('#1A1A1A', { roughness: 0.9, metalness: 0.15 });
    const visor = mat('#80DEEA', { emissive: '#00BCD4', emissiveIntensity: 0.55, metalness: 0.65, transparent: true, opacity: 0.88 });

    // Hoverboard
    this.hoverboard = new THREE.Group();
    addMesh(this.hoverboard, new THREE.BoxGeometry(0.82, 0.09, 1.15), mat('#37474F', { metalness: 0.55, emissive: '#00E5FF', emissiveIntensity: 0.2 }), 0, 0.06, 0.04);
    addMesh(this.hoverboard, new THREE.BoxGeometry(0.7, 0.035, 1.0), mat('#00BCD4', { emissive: '#00E5FF', emissiveIntensity: 0.55 }), 0, 0.11, 0.04);
    for (const sx of [-0.3, 0.3]) {
      addMesh(this.hoverboard, new THREE.CylinderGeometry(0.1, 0.1, 0.035, 12), mat('#B0BEC5', { metalness: 0.75 }), sx, 0.05, -0.38);
      addMesh(this.hoverboard, new THREE.TorusGeometry(0.11, 0.018, 8, 16), mat('#00E5FF', { emissive: '#00E5FF', emissiveIntensity: 0.9 }), sx, 0.05, -0.38, false);
    }
    this.mesh.add(this.hoverboard);

    // Pelvis + torso — connected capsule stack (no floating cube)
    addMesh(this.body, new THREE.CapsuleGeometry(0.22, 0.18, 6, 10), pants, 0, 0.58, 0);
    addMesh(this.body, new THREE.CapsuleGeometry(0.26, 0.42, 8, 12), jacket, 0, 0.98, 0);
    addMesh(this.body, new THREE.BoxGeometry(0.5, 0.1, 0.28), jacketLight, 0, 1.18, 0.02);
    addMesh(this.body, new THREE.BoxGeometry(0.52, 0.08, 0.3), jacketTrim, 0, 1.26, 0.01);
    addMesh(this.body, new THREE.BoxGeometry(0.14, 0.28, 0.06), jacketTrim, 0, 1.0, 0.17);

    // Shoulder pads
    for (const sx of [-1, 1]) {
      addMesh(this.body, new THREE.SphereGeometry(0.11, 10, 8), jacketLight, sx * 0.32, 1.22, 0);
    }

    // Head + helmet
    addMesh(this.body, new THREE.SphereGeometry(0.24, 14, 12), skin, 0, 1.48, 0.02);
    addMesh(this.body, new THREE.SphereGeometry(0.27, 14, 12, 0, Math.PI * 2, 0, Math.PI * 0.55), jacket, 0, 1.52, 0);
    addMesh(this.body, new THREE.BoxGeometry(0.44, 0.12, 0.14), mat('#0D47A1'), 0, 1.62, 0.06);
    addMesh(this.body, new THREE.BoxGeometry(0.38, 0.09, 0.05), visor, 0, 1.52, 0.22);

    // Legs attach to pelvis
    this.leftLeg = this.buildLeg(-0.13, pants, boot);
    this.rightLeg = this.buildLeg(0.13, pants, boot);
    this.body.add(this.leftLeg, this.rightLeg);

    // Arms from shoulders
    this.leftArm = this.buildArm(-1, jacket, jacketLight, skin);
    this.rightArm = this.buildArm(1, jacket, jacketLight, skin);
    this.body.add(this.leftArm, this.rightArm);

    const pack = this.buildBackpack();
    this.packageMesh = pack.vipPouch;
    this.packageGlow = pack.vipGlow;

    // Scan gun
    const scanGun = new THREE.Group();
    scanGun.position.set(0.42, 0.94, 0.16);
    addMesh(scanGun, new THREE.BoxGeometry(0.09, 0.12, 0.36), mat('#546E7A', { metalness: 0.72 }), 0, 0, 0.1);
    addMesh(scanGun, new THREE.CylinderGeometry(0.04, 0.05, 0.08, 8), mat('#37474F', { metalness: 0.8 }), 0, 0, 0.32);
    addMesh(scanGun, new THREE.BoxGeometry(0.05, 0.05, 0.06), mat('#00E676', { emissive: '#00E676', emissiveIntensity: 1.1 }), 0, 0, 0.36);
    this.body.add(scanGun);

    // Speed trails
    for (let i = 0; i < 3; i++) {
      const t = addMesh(
        this.mesh,
        new THREE.PlaneGeometry(0.38, 0.07),
        new THREE.MeshBasicMaterial({ color: '#00E5FF', transparent: true, opacity: 0.32 - i * 0.09 }),
        0,
        0.1,
        -0.42 - i * 0.26,
        false
      );
      t.rotation.x = -Math.PI / 2;
      this.trailMeshes.push(t);
    }

    this.body.position.y = 0.28;
    this.mesh.add(this.body);
    scene.add(this.mesh);
  }

  private backpack: THREE.Group | null = null;

  private buildBackpack(): { vipPouch: THREE.Mesh; vipGlow: THREE.Mesh } {
    const pack = new THREE.Group();
    pack.position.set(0, 1.0, -0.1);
    this.backpack = pack;

    const fabric = mat('#5D4037', { roughness: 0.88 });
    const fabricDark = mat('#3E2723', { roughness: 0.92 });
    const strap = mat('#263238', { roughness: 0.8 });
    const buckle = mat('#90A4AE', { metalness: 0.72, roughness: 0.35 });
    const trim = mat('#FFD54F', { emissive: '#FFA000', emissiveIntensity: 0.18 });

    // Main pack body — flush against the courier's back
    addMesh(pack, new THREE.BoxGeometry(0.4, 0.44, 0.13), fabricDark, 0, 0.06, -0.04);
    addMesh(pack, new THREE.BoxGeometry(0.38, 0.14, 0.12), fabric, 0, 0.3, -0.03);
    addMesh(pack, new THREE.BoxGeometry(0.42, 0.05, 0.14), fabricDark, 0, 0.36, -0.04);

    // Shoulder straps (visible over jacket)
    for (const sx of [-0.13, 0.13]) {
      addMesh(pack, new THREE.BoxGeometry(0.055, 0.34, 0.035), strap, sx, 0.26, 0.04);
      addMesh(pack, new THREE.BoxGeometry(0.045, 0.2, 0.03), strap, sx * 0.85, 0.46, 0.06);
      addMesh(pack, new THREE.BoxGeometry(0.07, 0.035, 0.025), buckle, sx, 0.2, 0.06);
    }

    // Waist strap
    addMesh(pack, new THREE.BoxGeometry(0.44, 0.05, 0.03), strap, 0, -0.08, 0.02);
    addMesh(pack, new THREE.BoxGeometry(0.08, 0.06, 0.025), buckle, 0, -0.08, 0.04);

    // Side utility pockets
    for (const sx of [-1, 1]) {
      addMesh(pack, new THREE.BoxGeometry(0.09, 0.16, 0.09), fabric, sx * 0.22, 0.02, 0.01);
      addMesh(pack, new THREE.BoxGeometry(0.1, 0.03, 0.01), trim, sx * 0.22, 0.1, 0.06);
    }

    // Reflective courier stripe
    addMesh(pack, new THREE.BoxGeometry(0.41, 0.035, 0.01), trim, 0, 0.14, 0.07);

    // VIP thermal pouch — mounted on top of pack, not floating
    const vipPouch = addMesh(
      pack,
      new THREE.BoxGeometry(0.26, 0.2, 0.11),
      mat('#FF8F00', { emissive: '#FF6F00', emissiveIntensity: 0.75, roughness: 0.45, metalness: 0.08 }),
      0,
      0.44,
      0.0
    );
    addMesh(vipPouch, new THREE.BoxGeometry(0.28, 0.04, 0.02), mat('#FFD54F', { emissive: '#FFC107', emissiveIntensity: 0.45 }), 0, 0.11, 0.06);
    addMesh(vipPouch, new THREE.BoxGeometry(0.09, 0.07, 0.01), mat('#FFF'), 0, 0.02, 0.06);
    addMesh(vipPouch, new THREE.BoxGeometry(0.02, 0.1, 0.01), mat('#FFF'), 0, 0, 0.06);

    const vipGlow = addMesh(
      pack,
      new THREE.BoxGeometry(0.3, 0.025, 0.12),
      mat('#FFD54F', { emissive: '#FFAB00', emissiveIntensity: 0.9, transparent: true, opacity: 0.55 }),
      0,
      0.56,
      0.0,
      false
    );

    // Courier radio stub
    addMesh(pack, new THREE.CylinderGeometry(0.01, 0.01, 0.12, 6), mat('#455A64', { metalness: 0.65 }), 0.15, 0.42, 0.03);
    addMesh(pack, new THREE.SphereGeometry(0.022, 8, 8), mat('#00E676', { emissive: '#00E676', emissiveIntensity: 0.75 }), 0.15, 0.49, 0.03);

    this.body.add(pack);
    return { vipPouch, vipGlow };
  }

  private buildLeg(x: number, pants: THREE.Material, boot: THREE.Material): THREE.Group {
    const leg = new THREE.Group();
    leg.position.set(x, 0.48, 0.02);
    addMesh(leg, new THREE.CapsuleGeometry(0.085, 0.22, 5, 8), pants, 0, -0.12, 0);
    addMesh(leg, new THREE.CapsuleGeometry(0.075, 0.18, 5, 8), pants, 0, -0.38, 0);
    addMesh(leg, new THREE.BoxGeometry(0.15, 0.09, 0.26), boot, 0, -0.54, 0.05);
    addMesh(leg, new THREE.BoxGeometry(0.12, 0.04, 0.08), mat('#00E5FF', { emissive: '#00E5FF', emissiveIntensity: 0.4 }), 0, -0.54, 0.18);
    return leg;
  }

  private buildArm(side: number, jacket: THREE.Material, accent: THREE.Material, skin: THREE.Material): THREE.Group {
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

  update(dt: number, roadHalfWidth: number, moving: boolean): void {
    const steerSpeed = 14;
    this.x += (this.targetX - this.x) * Math.min(1, steerSpeed * dt);
    this.x = THREE.MathUtils.clamp(this.x, -roadHalfWidth, roadHalfWidth);
    this.targetX = THREE.MathUtils.clamp(this.targetX, -roadHalfWidth, roadHalfWidth);
    this.mesh.position.set(this.x, 0, this.z);

    if (moving) {
      this.runPhase += dt * 13;
      const swing = Math.sin(this.runPhase) * 0.48;
      this.leftLeg.rotation.x = swing;
      this.rightLeg.rotation.x = -swing;
      this.leftArm.rotation.x = -swing * 0.5;
      this.rightArm.rotation.x = swing * 0.5;
      this.body.position.y = 0.28 + Math.abs(Math.sin(this.runPhase * 2)) * 0.045;
      this.hoverboard.rotation.z = this.x * 0.032;
      if (this.backpack) {
        this.backpack.rotation.x = Math.sin(this.runPhase) * 0.04;
        this.backpack.rotation.z = Math.sin(this.runPhase * 0.5) * 0.03;
      }

      this.trailMeshes.forEach((t, i) => {
        t.visible = true;
        t.position.z = -0.48 - i * 0.28;
        (t.material as THREE.MeshBasicMaterial).opacity = 0.32 - i * 0.09 + Math.sin(this.runPhase * 3) * 0.04;
      });
    } else {
      this.trailMeshes.forEach((t) => (t.visible = false));
    }

    this.packageGlow.scale.setScalar(1 + Math.sin(Date.now() * 0.004) * 0.04);
    (this.packageGlow.material as THREE.MeshStandardMaterial).opacity =
      0.45 + Math.sin(Date.now() * 0.005) * 0.15;

    if (this.hurtFlash > 0) {
      this.hurtFlash -= dt;
      const flash = this.hurtFlash > 0;
      this.body.traverse((c) => {
        if (c instanceof THREE.Mesh && c.material instanceof THREE.MeshStandardMaterial) {
          c.material.emissive.set(flash ? '#FF1744' : '#000000');
          c.material.emissiveIntensity = flash ? 0.55 : 0;
        }
      });
    }
  }

  knockback(fromX: number, force = 1.2): void {
    this.targetX += this.x >= fromX ? force : -force;
  }

  flashHurt(): void {
    this.hurtFlash = 0.45;
  }

  throwAnim(): void {
    this.rightArm.rotation.x = -1.5;
    setTimeout(() => {
      this.rightArm.rotation.x = 0;
    }, 220);
  }

  mailGunAnim(): void {
    this.leftArm.rotation.x = -0.8;
    setTimeout(() => {
      this.leftArm.rotation.x = 0;
    }, 120);
  }

  setPackageGlow(intensity: number, district: number): void {
    const matP = this.packageMesh.material as THREE.MeshStandardMaterial;
    const matG = this.packageGlow.material as THREE.MeshStandardMaterial;
    if (district >= 5) {
      matP.emissive.set('#FF0000');
      matG.emissive.set('#FF1744');
    } else if (district >= 3) {
      matP.emissive.set('#448AFF');
      matG.emissive.set('#2979FF');
    } else {
      matP.emissive.set('#FF6F00');
      matG.emissive.set('#FFAB00');
    }
    matP.emissiveIntensity = 0.55 + intensity * 0.4;
    matG.emissiveIntensity = 0.7 + intensity * 0.4;
  }

  dashOffset(): void {
    this.z += 4;
  }

  dispose(scene: THREE.Scene): void {
    scene.remove(this.mesh);
    disposeObject3D(this.mesh);
  }
}
