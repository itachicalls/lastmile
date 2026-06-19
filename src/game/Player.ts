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
  isSliding = false;
  private slideTimer = 0;
  private readonly baseBodyY = 0.28;
  private shadow: THREE.Mesh;

  private body: THREE.Group;
  private leftLeg: THREE.Group;
  private rightLeg: THREE.Group;
  private leftArm: THREE.Group;
  private rightArm: THREE.Group;
  private packageOrb: THREE.Group;
  private hoverboard: THREE.Group;
  private backpack: THREE.Group;
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

    this.shadow = addMesh(
      scene,
      new THREE.CircleGeometry(0.42, 12),
      new THREE.MeshBasicMaterial({ color: '#000000', transparent: true, opacity: 0.28, depthWrite: false }),
      0,
      0.03,
      0,
      false
    );
    this.shadow.rotation.x = -Math.PI / 2;

    scene.add(this.mesh);
  }

  update(dt: number, roadHalfWidth: number, moving: boolean): void {
    const steerSpeed = 9;
    this.x += (this.targetX - this.x) * Math.min(1, steerSpeed * dt);
    this.x = THREE.MathUtils.clamp(this.x, -roadHalfWidth, roadHalfWidth);
    this.targetX = THREE.MathUtils.clamp(this.targetX, -roadHalfWidth, roadHalfWidth);

    if (this.slideTimer > 0) {
      this.slideTimer -= dt;
      if (this.slideTimer <= 0) {
        this.slideTimer = 0;
        this.isSliding = false;
      }
    }

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
    this.shadow.position.set(this.x, 0.03, this.z);
    const shadowScale = 1 - Math.min(0.45, this.jumpY * 0.12);
    this.shadow.scale.set(shadowScale, shadowScale, 1);
    (this.shadow.material as THREE.MeshBasicMaterial).opacity = 0.18 + shadowScale * 0.14;

    if (this.isSliding) {
      this.body.position.y = 0.08;
      this.body.rotation.x = 0.55;
      this.leftLeg.rotation.x = 1.1;
      this.rightLeg.rotation.x = 1.25;
      this.leftArm.rotation.x = 0.35;
      this.rightArm.rotation.x = 0.35;
      this.hoverboard.rotation.x = 0.15;
      this.hoverboard.position.y = 0.02;
      this.backpack.rotation.x = 0.25;
    } else if (moving) {
      this.runPhase += dt * 13;
      const swing = Math.sin(this.runPhase) * 0.48;
      this.leftLeg.rotation.x = swing;
      this.rightLeg.rotation.x = -swing;
      this.leftArm.rotation.x = -swing * 0.5;
      this.rightArm.rotation.x = swing * 0.5;
      this.body.rotation.x = 0;
      this.body.position.y = this.baseBodyY + Math.abs(Math.sin(this.runPhase * 2)) * 0.045;
      this.hoverboard.rotation.x = 0;
      this.hoverboard.position.y = 0;
      if (this.isJumping) {
        this.leftLeg.rotation.x = -0.65;
        this.rightLeg.rotation.x = -0.35;
        this.body.position.y = this.baseBodyY + 0.15;
        this.body.rotation.x = -0.08;
      }
      this.hoverboard.rotation.z = this.x * 0.032;
      this.backpack.rotation.x = Math.sin(this.runPhase) * 0.04;
      this.backpack.rotation.z = Math.sin(this.runPhase * 0.5) * 0.03;
    } else {
      this.body.rotation.x = 0;
      this.body.position.y = this.baseBodyY;
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
    if (this.isJumping || this.isSliding) return false;
    this.isJumping = true;
    this.jumpVel = this.jumpPower;
    return true;
  }

  slide(): boolean {
    if (this.isJumping || this.isSliding) return false;
    this.isSliding = true;
    this.slideTimer = 0.62;
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
      if (c instanceof THREE.Mesh && c !== this.shadow) {
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
    scene.remove(this.shadow);
    disposeObject3D(this.mesh);
    this.shadow.geometry.dispose();
    (this.shadow.material as THREE.Material).dispose();
  }
}
