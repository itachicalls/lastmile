import * as THREE from 'three';
import { addMesh, disposeObject3D } from './ModelUtils';
import { IS_MOBILE } from './platform';
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
  private speedTrails: THREE.Mesh[] = [];
  private trailPhase = 0;
  private nightLevel = 0;
  private footLight: THREE.Mesh;
  private playerLight: THREE.PointLight;
  private headLight: THREE.PointLight;
  private mailGunMuzzle: THREE.Mesh;
  private visorMesh: THREE.Mesh | null = null;
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
    this.mailGunMuzzle = built.mailGunMuzzle;

    this.mailGunMuzzle.userData.baseEmissiveIntensity = (
      this.mailGunMuzzle.material as THREE.MeshStandardMaterial
    ).emissiveIntensity;

    this.body.traverse((c) => {
      if (c instanceof THREE.Mesh && c.material instanceof THREE.MeshStandardMaterial) {
        if (c.material.emissive && c.material.emissive.getHex() > 0 && c !== this.mailGunMuzzle) {
          c.userData.baseEmissiveIntensity = c.material.emissiveIntensity;
        }
        if (c.material.transparent && c.material.opacity < 1 && c.position.y > 1.45) {
          this.visorMesh = c;
        }
      }
    });

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

    const trailMat = new THREE.MeshBasicMaterial({
      color: '#80DEEA',
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    for (let i = 0; i < (IS_MOBILE ? 3 : 4); i++) {
      const trail = addMesh(
        scene,
        new THREE.PlaneGeometry(0.35, 0.06),
        trailMat.clone(),
        0,
        0.12,
        0,
        false
      );
      trail.rotation.x = -Math.PI / 2;
      trail.visible = false;
      this.speedTrails.push(trail);
    }

    this.footLight = addMesh(
      scene,
      new THREE.CircleGeometry(0.22, 10),
      new THREE.MeshBasicMaterial({
        color: '#B0BEC5',
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
      0,
      0.035,
      0,
      false
    );
    this.footLight.rotation.x = -Math.PI / 2;

    this.playerLight = new THREE.PointLight('#FFF8E1', 0, 9, 1.35);
    this.playerLight.position.set(0, 1.15, 0.35);
    this.mesh.add(this.playerLight);

    this.headLight = new THREE.PointLight('#E1F5FE', 0, 16, 1.15);
    this.headLight.position.set(0, 1.6, 2.8);
    this.mesh.add(this.headLight);

    scene.add(this.mesh);
  }

  update(dt: number, roadHalfWidth: number, moving: boolean, speed = 12, night = 0): void {
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

    this.nightLevel = night;
    this.updateNightGear(moving);

    const fast = moving && speed > 13 && !this.isJumping;
    if (fast) this.trailPhase += dt * (speed * 0.8);
    for (let i = 0; i < this.speedTrails.length; i++) {
      const trail = this.speedTrails[i];
      if (!fast) {
        trail.visible = false;
        continue;
      }
      trail.visible = true;
      const t = i / this.speedTrails.length;
      trail.position.set(this.x + Math.sin(this.trailPhase + i) * 0.08, 0.08 + t * 0.04, this.z + 0.45 + i * 0.22);
      trail.rotation.z = this.x * 0.04;
      const m = trail.material as THREE.MeshBasicMaterial;
      m.opacity = (0.35 - t * 0.28) * Math.min(1, (speed - 12) / 8);
      trail.scale.set(0.8 + (1 - t) * 0.6, 1, 1);
    }

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

  private updateNightGear(moving: boolean): void {
    const fx = this.nightLevel;

    this.playerLight.intensity = fx * (IS_MOBILE ? 3.2 : 4.4);
    this.playerLight.color.set(fx > 0.5 ? '#E1F5FE' : '#FFF8E1');

    this.headLight.intensity = fx * (IS_MOBILE ? 2.4 : 3.6);
    this.headLight.color.set('#B3E5FC');

    const fl = this.footLight.material as THREE.MeshBasicMaterial;
    fl.opacity = fx * 0.22;
    this.footLight.position.set(this.x, 0.035, this.z);
    this.footLight.visible = fx > 0.04;

    const muzzle = this.mailGunMuzzle.material as THREE.MeshStandardMaterial;
    const base = (this.mailGunMuzzle.userData.baseEmissiveIntensity as number) ?? 0.65;
    muzzle.emissiveIntensity = base + fx * 0.55 + (moving ? 0.14 : 0);

    if (this.visorMesh?.material instanceof THREE.MeshStandardMaterial) {
      const vm = this.visorMesh.material;
      const vBase = (this.visorMesh.userData.baseEmissiveIntensity as number) ?? 0.55;
      vm.emissiveIntensity = vBase + fx * 0.45;
    }

    this.body.traverse((c) => {
      if (!(c instanceof THREE.Mesh) || !(c.material instanceof THREE.MeshStandardMaterial)) return;
      if (c === this.mailGunMuzzle || c === this.visorMesh) return;
      const baseE = c.userData.baseEmissiveIntensity as number | undefined;
      if (baseE !== undefined) {
        c.material.emissiveIntensity = baseE + fx * 0.35;
        return;
      }
      if (fx > 0.08 && !c.material.transparent) {
        c.material.emissive.set('#FFF3E0');
        c.material.emissiveIntensity = fx * 0.18;
      }
    });
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
    this.slideTimer = 0.82;
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
    this.rightArm.rotation.x = -0.85;
    const mm = this.mailGunMuzzle.material as THREE.MeshStandardMaterial;
    mm.emissiveIntensity = 1.4;
    setTimeout(() => {
      this.rightArm.rotation.x = 0;
      this.updateNightGear(true);
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
    scene.remove(this.footLight);
    for (const t of this.speedTrails) {
      scene.remove(t);
      t.geometry.dispose();
      (t.material as THREE.Material).dispose();
    }
    this.speedTrails = [];
    disposeObject3D(this.mesh);
    this.shadow.geometry.dispose();
    (this.shadow.material as THREE.Material).dispose();
    this.footLight.geometry.dispose();
    (this.footLight.material as THREE.Material).dispose();
  }
}
