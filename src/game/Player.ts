import * as THREE from 'three';
import { addMesh, disposeObject3D } from './ModelUtils';
import { createMailmanMesh } from './MailmanModel';
import { setPackageOrbTheme, updateCarriedPackageOrb } from './PackageVisual';
import type { CharacterDef } from '../data/characters';

export class Player {
  mesh: THREE.Group;
  x = 0;
  z = 0;
  targetX = 0;
  hurtFlash = 0;
  runPhase = 0;
  jumpY = 0;
  private ghostMode = false;
  private jumpVel = 0;
  private jumpPower = 12;
  isJumping = false;
  private readonly baseBodyY = 0.28;

  private body: THREE.Group;
  private leftLeg: THREE.Group;
  private rightLeg: THREE.Group;
  private leftArm: THREE.Group;
  private rightArm: THREE.Group;
  private packageOrb: THREE.Group;
  private hoverboard: THREE.Group;
  private backpack: THREE.Group;
  private trailMeshes: THREE.Mesh[] = [];
  readonly characterName: string;

  constructor(scene: THREE.Scene, character: CharacterDef) {
    this.characterName = character.name;

    const built = createMailmanMesh(character);
    this.mesh = built.mesh;
    this.body = built.body;
    this.leftLeg = built.leftLeg;
    this.rightLeg = built.rightLeg;
    this.leftArm = built.leftArm;
    this.rightArm = built.rightArm;
    this.packageOrb = built.packageOrb;
    this.hoverboard = built.hoverboard;
    this.backpack = built.backpack;

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

    scene.add(this.mesh);
  }

  update(dt: number, roadHalfWidth: number, moving: boolean): void {
    const steerSpeed = 9;
    this.x += (this.targetX - this.x) * Math.min(1, steerSpeed * dt);
    this.x = THREE.MathUtils.clamp(this.x, -roadHalfWidth, roadHalfWidth);
    this.targetX = THREE.MathUtils.clamp(this.targetX, -roadHalfWidth, roadHalfWidth);

    if (this.isJumping) {
      this.jumpVel -= 34 * dt;
      this.jumpY += this.jumpVel * dt;
      if (this.jumpY <= 0) {
        this.jumpY = 0;
        this.jumpVel = 0;
        this.isJumping = false;
      }
    }

    this.mesh.position.set(this.x, this.jumpY, this.z);

    if (moving) {
      this.runPhase += dt * 13;
      const swing = Math.sin(this.runPhase) * 0.48;
      this.leftLeg.rotation.x = swing;
      this.rightLeg.rotation.x = -swing;
      this.leftArm.rotation.x = -swing * 0.5;
      this.rightArm.rotation.x = swing * 0.5;
      this.body.position.y = this.baseBodyY + Math.abs(Math.sin(this.runPhase * 2)) * 0.045;
      if (this.isJumping) {
        this.leftLeg.rotation.x = -0.65;
        this.rightLeg.rotation.x = -0.35;
        this.body.position.y = this.baseBodyY + 0.15;
      }
      this.hoverboard.rotation.z = this.x * 0.032;
      this.backpack.rotation.x = Math.sin(this.runPhase) * 0.04;
      this.backpack.rotation.z = Math.sin(this.runPhase * 0.5) * 0.03;

      this.trailMeshes.forEach((t, i) => {
        t.visible = true;
        t.position.z = -0.48 - i * 0.28;
        (t.material as THREE.MeshBasicMaterial).opacity = 0.32 - i * 0.09 + Math.sin(this.runPhase * 3) * 0.04;
      });
    } else {
      this.trailMeshes.forEach((t) => (t.visible = false));
    }

    updateCarriedPackageOrb(this.packageOrb, Date.now() * 0.001);

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

  jump(): boolean {
    if (this.isJumping) return false;
    this.isJumping = true;
    this.jumpVel = this.jumpPower;
    return true;
  }

  setJumpPower(power: number): void {
    this.jumpPower = power;
  }

  flashHurt(): void {
    this.hurtFlash = 0.45;
  }

  setGhostMode(on: boolean): void {
    this.ghostMode = on;
    const opacity = on ? 0.22 : 1;
    this.mesh.traverse((c) => {
      if (c instanceof THREE.Mesh) {
        const mats = Array.isArray(c.material) ? c.material : [c.material];
        for (const m of mats) {
          m.transparent = on || m.transparent;
          m.opacity = opacity;
        }
      }
    });
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
    setPackageOrbTheme(this.packageOrb, district, intensity);
  }

  dashOffset(): void {
    this.z += 4;
  }

  dispose(scene: THREE.Scene): void {
    scene.remove(this.mesh);
    disposeObject3D(this.mesh);
  }
}
