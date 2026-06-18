import * as THREE from 'three';
import { World } from './World';
import { Player } from './Player';
import { Convoy } from './Convoy';
import {
  createRouteGate,
  createBlocker,
  createDropoff,
  applyGateEffect,
  disposeEntity,
  animateGate,
  animateBlocker,
  animateDropoff,
  type GateEntity,
  type BlockerEntity,
  type DropoffEntity,
} from './Gates';
import {
  createEnemy,
  clashCombat,
  disposeEnemy,
  updateEnemyVisuals,
  updateHpBar,
  type EnemyEntity,
} from './Enemies';
import { createCoinLine, updateCoins, tryCollectCoin, disposeCoins, type CoinEntity } from './Coins';
import {
  createObstacle,
  updateObstacles,
  disposeObstacles,
  type ObstacleEntity,
} from './Obstacles';
import {
  createPackagePickups,
  updatePackagePickups,
  tryCollectPackages,
  spawnThrow,
  spawnMailShot,
  updateThrows,
  disposePickups,
  type PackagePickup,
  type ThrownPackage,
} from './Packages';
import { ParticleSystem, CameraShake } from './Effects';
import { getLevel } from '../data/levels';
import { getDistrict } from '../data/districts';
import type { SaveData, RunState, GameResult, LevelDef, EnemyType, DeathReason } from '../types';
import { INITIAL_RUN } from '../types';

export type GameCallbacks = {
  onHudUpdate: (data: HudData) => void;
  onToast: (msg: string) => void;
  onScanPrompt: (show: boolean) => void;
  onCombat: (active: boolean, enemyName?: string) => void;
  onDamageFlash: () => void;
  onEnd: (result: GameResult) => void;
};

export type HudData = {
  convoy: number;
  packages: number;
  maxPackages: number;
  integrity: number;
  maxIntegrity: number;
  coins: number;
  stamps: number;
  distance: number;
  totalDistance: number;
  timeLeft: number;
  abilityCd: number;
  abilityReady: boolean;
  throwReady: boolean;
  mailGunReady: boolean;
  blockerHint?: string;
  gatePrompt?: string;
  blockerProgress?: number;
  inCombat: boolean;
  enemyHp?: number;
  enemyMaxHp?: number;
  enemyName?: string;
};

export class Game {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private world: World;
  private particles: ParticleSystem;
  private shake: CameraShake;
  private player!: Player;
  private convoy!: Convoy;

  private level!: LevelDef;
  private run: RunState = { ...INITIAL_RUN };
  private save: SaveData;

  private routeGates: GateEntity[] = [];
  private blockers: BlockerEntity[] = [];
  private enemies: EnemyEntity[] = [];
  private coins: CoinEntity[] = [];
  private packagePickups: PackagePickup[] = [];
  private obstacles: ObstacleEntity[] = [];
  private throws: ThrownPackage[] = [];
  private dropoff!: DropoffEntity;

  private keys = new Set<string>();
  private touchSteerLeft = false;
  private touchSteerRight = false;
  private inputCleanup: (() => void) | null = null;
  private running = false;
  private dead = false;
  private elapsed = 0;
  private levelLength = 200;
  private roadHalfWidth = 4.2;
  private steerSpeed = 16;
  private obstacleCooldown = 0;
  private gameTime = 0;

  private activeBlocker: BlockerEntity | null = null;
  private activeEnemy: EnemyEntity | null = null;
  private smokeTimer = 0;
  private dashTimer = 0;
  private dashActive = false;
  private abilityCd = 0;
  private abilityMaxCd = 12;
  private throwCd = 0;
  private mailCd = 0;
  private mailGunDamage = 3;
  private mailGunRate = 0.28;
  private combatTurretDps = 0;
  private blockerDps = 0;
  private regenTimer = 0;
  private spawnQueue: EnemyType[] = [];
  private startConvoy = 5;
  private startPackages = 3;
  private coinRadius = 2;
  private packageRadius = 2.2;
  private turretDps = 0;
  private beaconRegen = 0;
  private blockerHint = '';
  private gateHintShown = new Set<number>();
  private gateLaneHold = new Map<number, { left: number; right: number }>();
  private gatePrompt = '';
  private bounceWarned = new Set<number>();
  private lastBlockerToastPct = -1;
  private deathReason: DeathReason = 'stolen';

  private cb: GameCallbacks;
  private lastSteer: -1 | 0 | 1 = 0;
  private raf = 0;
  private baseCamera = new THREE.Vector3();
  private lookTarget = new THREE.Vector3();

  constructor(canvas: HTMLCanvasElement, save: SaveData, callbacks: GameCallbacks) {
    this.save = save;
    this.cb = callbacks;

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(55, 1, 0.1, 350);
    this.world = new World(this.scene);
    this.particles = new ParticleSystem(this.scene);
    this.shake = new CameraShake();

    this.bindKeyboard();
    window.addEventListener('resize', () => this.resize());
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', () => this.resize());
    }
    this.resize();
  }

  /** Tap-to-throw on HUD + hold left/right steer zones */
  bindTouchControls(hudEl: HTMLElement): void {
    this.inputCleanup?.();

    const cleanups: (() => void)[] = [];
    const bindSteer = (el: Element | null, left: boolean) => {
      if (!el) return;
      const set = (active: boolean) => {
        if (left) this.touchSteerLeft = active;
        else this.touchSteerRight = active;
      };
      const down = (e: Event) => {
        e.preventDefault();
        set(true);
      };
      const up = () => set(false);
      el.addEventListener('pointerdown', down);
      el.addEventListener('pointerup', up);
      el.addEventListener('pointerleave', up);
      el.addEventListener('pointercancel', up);
      cleanups.push(() => {
        el.removeEventListener('pointerdown', down);
        el.removeEventListener('pointerup', up);
        el.removeEventListener('pointerleave', up);
        el.removeEventListener('pointercancel', up);
      });
    };
    bindSteer(hudEl.querySelector('#steer-left'), true);
    bindSteer(hudEl.querySelector('#steer-right'), false);

    const onHudPointer = (e: PointerEvent) => {
      if (!this.running || this.dead) return;
      const t = e.target as HTMLElement;
      if (t.closest('#steer-left, #steer-right, #ability-btn, #scan-btn, #mail-btn, .hud-panel, .btn')) return;
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      this.throwPackage();
    };
    hudEl.addEventListener('pointerdown', onHudPointer);

    this.inputCleanup = () => {
      hudEl.removeEventListener('pointerdown', onHudPointer);
      cleanups.forEach((fn) => fn());
    };
  }

  startLevel(levelId: string): void {
    const level = getLevel(levelId);
    if (!level) return;

    this.cleanup();
    this.level = level;
    this.running = true;
    this.dead = false;
    this.elapsed = 0;
    this.gameTime = 0;
    this.spawnQueue = [];
    this.activeBlocker = null;
    this.activeEnemy = null;
    this.throws = [];
    this.smokeTimer = 0;
    this.dashTimer = 0;
    this.dashActive = false;
    this.abilityCd = 0;
    this.throwCd = 0;
    this.mailCd = 0;
    this.blockerHint = '';
    this.gateHintShown.clear();
    this.gateLaneHold.clear();
    this.gatePrompt = '';
    this.bounceWarned.clear();
    this.lastBlockerToastPct = -1;
    this.touchSteerLeft = false;
    this.touchSteerRight = false;

    this.applyUpgrades();
    this.run = {
      ...INITIAL_RUN,
      convoy: this.startConvoy,
      packages: this.startPackages,
      maxConvoy: 50 + (this.save.purchases['convoy-cap'] ?? 0) * 10,
      maxPackages: 25 + (this.save.purchases['convoy-cap'] ?? 0) * 3,
      integrity: 3 + (this.save.purchases['package-armor'] ?? 0),
      maxIntegrity: 3 + (this.save.purchases['package-armor'] ?? 0),
      baseSpeed: 11,
      speed: 11,
    };

    this.coinRadius = 2 + (this.save.purchases['coin-magnet'] ?? 0) * 0.6;
    this.packageRadius = 2.2 + (this.save.purchases['coin-magnet'] ?? 0) * 0.4;
    this.turretDps = 0;
    this.combatTurretDps = 0;
    this.blockerDps = 0;
    this.beaconRegen = 0;
    this.mailGunDamage = 3;
    this.mailGunRate = 0.28;
    if (this.save.equippedTurrets.includes('pepper-drone')) {
      const lv = this.save.purchases['pepper-drone'] ?? 0;
      this.combatTurretDps += 2 + lv * 2;
      this.mailGunRate = Math.max(0.14, 0.28 - lv * 0.04);
    }
    if (this.save.equippedTurrets.includes('box-cannon')) {
      const lv = this.save.purchases['box-cannon'] ?? 0;
      this.blockerDps += 2 + lv * 2;
      this.mailGunDamage += 1 + lv;
    }
    this.turretDps = this.combatTurretDps + this.blockerDps * 0.5;
    if (this.save.equippedTurrets.includes('helper-beacon')) {
      this.beaconRegen = 0.5 + (this.save.purchases['helper-beacon'] ?? 0) * 0.5;
    }

    const lastSeg = level.segments[level.segments.length - 1];
    this.levelLength = lastSeg.kind === 'dropoff' ? lastSeg.z + 20 : 200;

    const theme = getDistrict(level.district);
    this.world.build(theme, this.levelLength);

    this.player = new Player(this.scene);
    this.player.z = 0;
    this.player.targetX = 0;
    this.player.x = 0;
    this.convoy = new Convoy(this.scene);
    this.convoy.setCount(this.run.convoy);

    for (const seg of level.segments) {
      switch (seg.kind) {
        case 'gate':
          this.routeGates.push(createRouteGate(this.scene, seg.z, seg.left, seg.right));
          break;
        case 'blocker':
          this.blockers.push(
            createBlocker(this.scene, seg.z, seg.blocker, seg.label, seg.required ?? 10, seg.packageCost ?? 0)
          );
          break;
        case 'enemy':
          this.enemies.push(createEnemy(this.scene, seg.enemy, seg.count, seg.z));
          break;
        case 'coins':
          this.coins.push(...createCoinLine(this.scene, seg.z, seg.count, seg.spread ?? 3));
          break;
        case 'packages':
          this.packagePickups.push(...createPackagePickups(this.scene, seg.z, seg.count, seg.spread ?? 3.5));
          break;
        case 'obstacles':
          for (const item of seg.items) {
            this.obstacles.push(createObstacle(this.scene, item.type, item.x, seg.z));
          }
          break;
        case 'dropoff':
          this.dropoff = createDropoff(this.scene, seg.z);
          break;
      }
    }

    this.player.setPackageGlow(0.5, level.district);
    this.loop();
  }

  private applyUpgrades(): void {
    this.startConvoy = 5 + (this.save.purchases['start-convoy'] ?? 0) * 3;
    this.startPackages = 3 + (this.save.purchases['start-convoy'] ?? 0);
    const ability = this.save.equippedAbility;
    if (ability === 'smoke-bomb') this.abilityMaxCd = 12 - (this.save.purchases['smoke-bomb'] ?? 0) * 2;
    else if (ability === 'rally-horn') this.abilityMaxCd = 15 - (this.save.purchases['rally-horn'] ?? 0) * 3;
    else if (ability === 'dash') this.abilityMaxCd = 10 - (this.save.purchases['dash'] ?? 0) * 2;
    else this.abilityMaxCd = 12;
  }

  private bindKeyboard(): void {
    window.addEventListener('keydown', (e) => {
      this.keys.add(e.code);
      if (e.code === 'Space') {
        e.preventDefault();
        if (!e.repeat) this.onSpaceAction();
      }
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') {
        e.preventDefault();
        this.lastSteer = -1;
      }
      if (e.code === 'ArrowRight' || e.code === 'KeyD') {
        e.preventDefault();
        this.lastSteer = 1;
      }
    });
    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.code);
    });
  }

  /** SPACE = mail gun / scan / gate interact (never auto-fires) */
  onSpaceAction(): void {
    if (!this.running || this.dead) return;

    if (this.activeBlocker && !this.activeBlocker.cleared) {
      if (this.activeBlocker.blocker === 'scan') {
        this.tryScan();
        return;
      }
      if (Math.abs(this.player.z - this.activeBlocker.z) <= 10) {
        this.tryBlockerAction();
        return;
      }
    }

    const routeGate = this.getActiveRouteGate();
    if (routeGate && Math.abs(this.player.x) < 1.0) {
      this.resolveRouteGate(routeGate, 'center');
      return;
    }

    this.fireMailGun();
  }

  private isSteeringLeft(): boolean {
    return this.keys.has('KeyA') || this.keys.has('ArrowLeft') || this.touchSteerLeft;
  }

  private isSteeringRight(): boolean {
    return this.keys.has('KeyD') || this.keys.has('ArrowRight') || this.touchSteerRight;
  }

  private getActiveRouteGate(): GateEntity | null {
    for (const gate of this.routeGates) {
      if (gate.resolved) continue;
      if (this.player.z >= gate.z - 4 && this.player.z <= gate.z + 2) return gate;
    }
    return null;
  }

  throwPackage(): void {
    if (!this.running || this.dead || this.throwCd > 0) return;
    if (this.run.packages <= 0) {
      this.cb.onToast('No packages to throw!');
      return;
    }

    this.run.packages--;
    this.throwCd = 0.35;
    this.player.throwAnim();

    const target = this.activeEnemy && !this.activeEnemy.defeated
      ? this.activeEnemy.mesh.position
      : new THREE.Vector3(this.player.x, 0, this.player.z + 30);

    const t = spawnThrow(this.scene, this.player.x, this.player.z, target.x, target.z);
    this.throws.push(t);
  }

  /** Mail gun — SPACE or 📧 button; weaker than package throws */
  fireMailGun(): void {
    if (!this.running || this.dead || this.mailCd > 0) return;

    this.mailCd = this.mailGunRate;
    this.player.mailGunAnim();

    let targetX = this.player.x;
    let targetZ = this.player.z + 35;
    if (this.activeEnemy && !this.activeEnemy.defeated) {
      targetX = this.activeEnemy.mesh.position.x;
      targetZ = this.activeEnemy.mesh.position.z;
    } else if (this.activeBlocker && !this.activeBlocker.cleared) {
      targetX = 0;
      targetZ = this.activeBlocker.z;
    }

    const shot = spawnMailShot(this.scene, this.player.x, this.player.z, targetX, targetZ, this.mailGunDamage);
    this.throws.push(shot);
  }

  /** Player-initiated blocker progress — no passive auto-open */
  tryBlockerAction(): void {
    const b = this.activeBlocker;
    if (!b || b.cleared) return;
    if (Math.abs(this.player.z - b.z) > 10) return;

    if (b.packageCost > 0 && b.progress < 0.05) {
      if (this.run.packages < b.packageCost) {
        this.cb.onToast(`Need ${b.packageCost} packages to use this gate!`);
        return;
      }
      this.run.packages -= b.packageCost;
      b.progress = 0.05;
      this.cb.onToast(`Paid ${b.packageCost} packages`);
    }

    if (b.blocker === 'ram') {
      if (this.dashActive) {
        this.clearBlocker(b);
        this.shake.shake(0.8);
        this.cb.onToast('Dash smashed the lock!');
        return;
      }
      if (this.run.convoy < 2) {
        this.cb.onToast('Need convoy helpers! Hold SPACE to ram, or equip Rally Horn.');
        return;
      }
      const ramHit = (1 / Math.max(4, b.required)) * (0.95 + this.mailGunDamage * 0.04);
      b.progress = Math.min(1, b.progress + ramHit);
      if (Math.random() < 0.35) {
        this.run.convoy = Math.max(0, this.run.convoy - 1);
        this.convoy.setCount(this.run.convoy);
      }
      this.shake.shake(0.15);
      if (b.progress >= 1) {
        this.clearBlocker(b);
        this.particles.gateBurst(0, b.z, '#FF5252');
        this.cb.onToast('Lock broken!');
      } else {
        const pct = Math.floor(b.progress * 100);
        if (pct >= 25 && pct !== this.lastBlockerToastPct && pct % 25 === 0) {
          this.lastBlockerToastPct = pct;
          this.cb.onToast(`Ramming… ${pct}%`);
        }
      }
      return;
    }

    if (b.blocker === 'stamp') {
      if (this.run.stamps > 0) {
        b.progress += 0.5;
        if (b.progress >= 1) {
          this.run.stamps--;
          this.clearBlocker(b);
          this.particles.gateBurst(0, b.z, '#AB47BC');
          this.cb.onToast('Stamp approved!');
        } else {
          this.cb.onToast(`Stamping… ${Math.floor(b.progress * 100)}%`);
        }
      } else if (this.run.convoy >= 4) {
        b.progress += 0.18;
        if (b.progress >= 1) {
          this.run.convoy = Math.max(0, this.run.convoy - 3);
          this.convoy.setCount(this.run.convoy);
          this.clearBlocker(b);
          this.cb.onToast('Convoy vouched for you!');
        }
      } else {
        this.cb.onToast('Need a stamp or 4+ convoy helpers — press SPACE to retry');
      }
      return;
    }

    if (b.blocker === 'toll') {
      if (this.run.packages > 0) {
        this.run.packages--;
        b.progress += 0.34;
        if (b.progress >= 1) {
          this.clearBlocker(b);
          this.particles.gateBurst(0, b.z, '#FFB74D');
          this.cb.onToast('Toll paid — gate open!');
        } else {
          this.cb.onToast(`Paying toll… ${Math.floor(b.progress * 100)}%`);
        }
      } else {
        this.cb.onToast('Need packages to pay toll — collect 📦 on the road');
      }
    }
  }

  useAbility(): void {
    if (!this.running || this.dead || this.abilityCd > 0) return;
    const ability = this.save.equippedAbility;
    if (!ability) return;

    if (ability === 'smoke-bomb') {
      this.smokeTimer = 4;
      this.cb.onToast('Smoke bomb! Aliens confused!');
    } else if (ability === 'rally-horn') {
      const bonus = 12 + (this.save.purchases['rally-horn'] ?? 0) * 4;
      this.run.convoy = Math.min(this.run.maxConvoy, this.run.convoy + bonus);
      this.convoy.setCount(this.run.convoy);
      this.cb.onToast(`Rally horn! +${bonus} helpers!`);
    } else if (ability === 'dash') {
      this.dashActive = true;
      this.dashTimer = 0.6;
      this.player.dashOffset();
      this.cb.onToast('Express dash!');
    }
    this.abilityCd = this.abilityMaxCd;
  }

  tryScan(): void {
    if (!this.activeBlocker || this.activeBlocker.blocker !== 'scan') return;
    if (Math.abs(this.player.z - this.activeBlocker.z) > 12) return;
    this.activeBlocker.progress += 0.34;
    if (this.activeBlocker.progress >= 1) {
      this.clearBlocker(this.activeBlocker);
      this.particles.gateBurst(this.player.x, this.activeBlocker.z, '#00E676');
      this.cb.onToast('Scan complete! Gate open!');
    } else {
      this.cb.onToast(`Scanning… ${Math.ceil(this.activeBlocker.progress * 100)}%`);
    }
  }

  stop(): void {
    this.running = false;
    cancelAnimationFrame(this.raf);
  }

  private loop = (): void => {
    if (!this.running) return;
    this.raf = requestAnimationFrame(this.loop);
    const dt = Math.min(0.05, 1 / 60);
    this.update(dt);
    this.render();
  };

  private update(dt: number): void {
    if (this.dead) return;

    this.elapsed += dt;
    this.gameTime += dt;
    if (this.abilityCd > 0) this.abilityCd = Math.max(0, this.abilityCd - dt);
    if (this.throwCd > 0) this.throwCd = Math.max(0, this.throwCd - dt);
    if (this.mailCd > 0) this.mailCd = Math.max(0, this.mailCd - dt);
    if (this.smokeTimer > 0) this.smokeTimer -= dt;
    if (this.dashActive) {
      this.dashTimer -= dt;
      if (this.dashTimer <= 0) this.dashActive = false;
    }

    if (this.obstacleCooldown > 0) this.obstacleCooldown -= dt;

    const inCombat = this.activeEnemy !== null && !this.activeEnemy.defeated;
    const inBlocker = this.activeBlocker !== null && !this.activeBlocker.cleared;

    if (!inCombat && !inBlocker) {
      this.player.z += this.run.speed * dt;
    } else if (inBlocker && this.activeBlocker?.blocker === 'scan') {
      this.player.z += this.run.speed * 0.08 * dt;
    } else if (inCombat) {
      this.player.z += this.run.speed * 0.05 * dt;
    }

    if (inBlocker && this.activeBlocker && !this.activeBlocker.cleared) {
      const cap = this.activeBlocker.z - 1.2;
      if (this.player.z > cap) this.player.z = cap;
    }

    this.enforceRouteGateStops();
    this.run.distance = this.player.z;

    if (this.keys.has('ArrowLeft') || this.keys.has('KeyA') || this.touchSteerLeft) {
      this.lastSteer = -1;
      this.player.targetX += this.steerSpeed * dt;
    }
    if (this.keys.has('ArrowRight') || this.keys.has('KeyD') || this.touchSteerRight) {
      this.lastSteer = 1;
      this.player.targetX -= this.steerSpeed * dt;
    }
    this.player.targetX = THREE.MathUtils.clamp(this.player.targetX, -this.roadHalfWidth, this.roadHalfWidth);

    const moving = !inCombat && !inBlocker;
    this.player.update(dt, this.roadHalfWidth, moving);
    this.convoy.setCount(this.run.convoy);
    this.convoy.update(this.player.x, this.player.z, dt);

    updateCoins(this.coins, dt);
    updatePackagePickups(this.packagePickups, this.gameTime);
    this.throws = updateThrows(this.throws, dt, this.scene);
    this.particles.update(dt);
    this.world.update(this.gameTime);

    for (const g of this.routeGates) if (!g.resolved) animateGate(g, this.gameTime);
    for (const b of this.blockers) if (!b.cleared) animateBlocker(b, this.gameTime);
    if (this.dropoff) animateDropoff(this.dropoff, this.gameTime);

    for (const e of this.enemies) updateEnemyVisuals(e, this.gameTime, this.player.z);
    updateObstacles(this.obstacles, this.gameTime);

    const coinGain = tryCollectCoin(this.coins, this.player.x, this.player.z, this.coinRadius);
    if (coinGain) {
      this.run.coins += coinGain;
      this.particles.collectBurst(this.player.x, this.player.z);
    }

    const pkgGain = tryCollectPackages(this.packagePickups, this.player.x, this.player.z, this.packageRadius);
    if (pkgGain) {
      this.run.packages = Math.min(this.run.maxPackages, this.run.packages + pkgGain);
      this.particles.collectBurst(this.player.x, this.player.z);
      this.cb.onToast(`+${pkgGain} package${pkgGain > 1 ? 's' : ''}!`);
    }

    this.checkThrowHits();
    this.checkObstacles();

    if (this.dashActive && this.activeBlocker && !this.activeBlocker.cleared) {
      if (this.activeBlocker.blocker === 'ram' && Math.abs(this.player.z - this.activeBlocker.z) < 10) {
        this.clearBlocker(this.activeBlocker);
        this.shake.shake(0.8);
        this.cb.onToast('Dash smashed the lock!');
      }
    }

    this.updateRouteGateCommit(dt);
    this.checkRouteGates();
    this.checkBlockers(dt);
    this.checkEnemies(dt);
    this.processSpawnQueue();
    this.checkDropoff();
    this.checkLose();

    if (this.beaconRegen > 0 && !inCombat) {
      this.regenTimer += dt;
      if (this.regenTimer >= 2.5) {
        this.regenTimer = 0;
        if (this.run.convoy < this.run.maxConvoy) this.run.convoy++;
      }
    }

    const timeLeft = this.level.timeLimit - this.elapsed;
    if (timeLeft <= 0) {
      this.die('timeout');
      return;
    }

    const enemyNames: Record<string, string> = {
      pickpocket: 'Alien Grunts',
      rival: 'Alien Raiders',
      drone: 'UFO Scouts',
      boss: 'Alien Commander',
    };

    this.cb.onHudUpdate({
      convoy: this.run.convoy,
      packages: this.run.packages,
      maxPackages: this.run.maxPackages,
      integrity: this.run.integrity,
      maxIntegrity: this.run.maxIntegrity,
      coins: this.run.coins,
      stamps: this.run.stamps,
      distance: this.run.distance,
      totalDistance: this.levelLength,
      timeLeft,
      abilityCd: this.abilityCd,
      abilityReady: this.abilityCd <= 0 && !!this.save.equippedAbility,
      throwReady: this.throwCd <= 0 && this.run.packages > 0,
      mailGunReady: this.mailCd <= 0,
      blockerHint: this.blockerHint || undefined,
      gatePrompt: this.gatePrompt || undefined,
      blockerProgress:
        this.activeBlocker && !this.activeBlocker.cleared
          ? Math.floor(this.activeBlocker.progress * 100)
          : undefined,
      inCombat,
      enemyHp: this.activeEnemy?.hp,
      enemyMaxHp: this.activeEnemy?.maxHp,
      enemyName: this.activeEnemy ? enemyNames[this.activeEnemy.type] : undefined,
    });

    this.cb.onScanPrompt(!!(this.activeBlocker?.blocker === 'scan' && !this.activeBlocker.cleared));
    this.cb.onCombat(inCombat, this.activeEnemy?.type);

    this.baseCamera.set(this.player.x * 0.35, 10, this.player.z - 12);
    this.lookTarget.set(this.player.x * 0.25, 1.5, this.player.z + 18);
    this.shake.apply(this.camera, this.baseCamera, this.lookTarget);
  }

  private checkThrowHits(): void {
    for (const t of this.throws) {
      if (this.activeBlocker && !this.activeBlocker.cleared) {
        const b = this.activeBlocker;
        if (b.blocker === 'ram' && (b.packageCost <= 0 || b.progress >= 0.05)) {
          const dz = Math.abs(t.mesh.position.z - b.z);
          const dx = Math.abs(t.mesh.position.x);
          if (dz < 2.5 && dx < 4.5) {
            const hit = t.damage * 0.012 * (1 + this.blockerDps * 0.15) * (1 / Math.max(4, b.required));
            b.progress = Math.min(1, b.progress + hit);
            this.particles.hitBurst(t.mesh.position.x, t.mesh.position.z);
            t.life = 0;
            if (b.progress >= 1) {
              this.clearBlocker(b);
              this.particles.gateBurst(0, b.z, '#FF5252');
              this.cb.onToast('Lock broken!');
            }
            continue;
          }
        }
      }

      for (const enemy of this.enemies) {
        if (enemy.defeated) continue;
        const dx = t.mesh.position.x - enemy.mesh.position.x;
        const dz = t.mesh.position.z - enemy.mesh.position.z;
        if (dx * dx + dz * dz < 4) {
          enemy.hp -= t.damage;
          updateHpBar(enemy);
          this.particles.hitBurst(t.mesh.position.x, t.mesh.position.z);
          this.shake.shake(0.4);
          t.life = 0;
          if (enemy.hp <= 0) {
            enemy.defeated = true;
            enemy.mesh.visible = false;
            this.run.coins += enemy.type === 'boss' ? 50 : 20;
            if (this.activeEnemy === enemy) this.activeEnemy = null;
            this.cb.onToast(`${enemy.type === 'boss' ? 'Commander' : 'Alien'} hit! Defeated!`);
          } else {
            this.cb.onToast(`Direct hit! -${t.damage} HP`);
          }
        }
      }
    }
  }

  private checkObstacles(): void {
    if (this.obstacleCooldown > 0) return;

    for (const obs of this.obstacles) {
      if (obs.hit) continue;
      const dz = Math.abs(this.player.z - obs.z);
      if (dz > 1.4) continue;
      const dx = Math.abs(this.player.x - obs.x);
      if (dx > obs.radius + 0.35) continue;

      obs.hit = true;
      obs.mesh.visible = false;

      if (this.dashActive) {
        this.particles.hitBurst(obs.x, obs.z);
        this.cb.onToast('Dashed through obstacle!');
        continue;
      }

      this.obstacleCooldown = 0.8;
      this.run.integrity--;
      this.run.integrityLost = true;
      this.run.convoy = Math.max(0, this.run.convoy - 2);
      this.convoy.setCount(this.run.convoy);
      this.player.flashHurt();
      this.player.knockback(obs.x);
      this.shake.shake(0.7);
      this.cb.onDamageFlash();
      this.particles.hitBurst(this.player.x, this.player.z);

      const labels: Record<string, string> = {
        barricade: 'Hit a barricade!',
        pod: 'Alien pod exploded!',
        cones: 'Wiped out on cones!',
        debris: 'Crashed into debris!',
      };
      this.cb.onToast(labels[obs.kind] ?? 'Obstacle hit!');

      if (this.run.integrity <= 0) {
        this.die('stolen');
        return;
      }
    }
  }

  private enforceRouteGateStops(): void {
    for (const gate of this.routeGates) {
      if (gate.resolved) continue;
      if (this.player.z >= gate.z - 4 && this.player.z <= gate.z + 2) {
        if (!this.gateHintShown.has(gate.z)) {
          this.gateHintShown.add(gate.z);
          this.cb.onToast('Hold ← LEFT or RIGHT → · SPACE = safe center');
        }
        const holdLine = gate.z - 1.2;
        if (this.player.z > holdLine) this.player.z = holdLine;
      }
    }
  }

  private updateRouteGateCommit(dt: number): void {
    this.gatePrompt = '';
    for (const gate of this.routeGates) {
      if (gate.resolved) continue;
      if (this.player.z < gate.z - 4 || this.player.z > gate.z + 2) continue;

      const hold = this.gateLaneHold.get(gate.z) ?? { left: 0, right: 0 };
      const cx = this.player.x;
      const onLeft = cx > 1.0;
      const onRight = cx < -1.0;

      if (onLeft && this.isSteeringLeft()) {
        hold.left += dt;
        hold.right = 0;
        this.gatePrompt = `← LEFT: ${Math.min(100, Math.floor((hold.left / 0.5) * 100))}%`;
        if (hold.left >= 0.5) this.resolveRouteGate(gate, 'left');
      } else if (onRight && this.isSteeringRight()) {
        hold.right += dt;
        hold.left = 0;
        this.gatePrompt = `RIGHT →: ${Math.min(100, Math.floor((hold.right / 0.5) * 100))}%`;
        if (hold.right >= 0.5) this.resolveRouteGate(gate, 'right');
      } else {
        hold.left = Math.max(0, hold.left - dt * 2);
        hold.right = Math.max(0, hold.right - dt * 2);
        this.gatePrompt = 'Hold ← LEFT · SPACE = safe CENTER · Hold RIGHT →';
      }
      this.gateLaneHold.set(gate.z, hold);
    }
  }

  private resolveRouteGate(gate: GateEntity, choice: 'left' | 'right' | 'center'): void {
    if (gate.resolved) return;

    const finishGate = (msg: string, burstX: number, color: string) => {
      gate.resolved = true;
      gate.roadBarrier.visible = false;
      this.gateLaneHold.delete(gate.z);
      this.particles.gateBurst(burstX, gate.z, color);
      this.cb.onToast(msg);
      if (this.player.z < gate.z + 1.5) this.player.z = gate.z + 1.5;
    };

    if (choice === 'center') {
      this.run.convoy = Math.min(this.run.maxConvoy, this.run.convoy + 3);
      this.convoy.setCount(this.run.convoy);
      finishGate('Safe center route — +3 convoy', 0, '#FFD54F');
      return;
    }

    const choseLeft = choice === 'left';
    const option = choseLeft ? gate.left : gate.right;
    const cost = option.packageCost ?? 0;
    if (cost > 0 && this.run.packages < cost) {
      finishGate(`Need ${cost} packages! VIP damaged!`, this.player.x, '#FF5252');
      this.run.integrity--;
      this.run.integrityLost = true;
      this.player.flashHurt();
      this.shake.shake(0.6);
      this.cb.onDamageFlash();
      if (this.run.integrity <= 0) this.die('blocked');
      return;
    }

    if (cost > 0) this.run.packages -= cost;
    const msg = applyGateEffect(option.effect, this.run);
    this.convoy.setCount(this.run.convoy);
    finishGate(cost > 0 ? `Paid ${cost} 📦 · ${msg}` : msg, choseLeft ? 3 : -3, choseLeft ? '#66BB6A' : '#42A5F5');

    if (option.effect.spawnEnemies) this.spawnQueue.push(option.effect.spawnEnemies);

    const chosen = choseLeft ? gate.leftMesh : gate.rightMesh;
    chosen.traverse((c) => {
      if (c instanceof THREE.Mesh && c.material instanceof THREE.MeshStandardMaterial) {
        c.material.emissiveIntensity = 0.8;
      }
    });
  }

  private checkRouteGates(): void {
    /* Route gates resolved via updateRouteGateCommit + onSpaceAction */
  }

  private checkBlockers(_dt: number): void {
    this.blockerHint = '';
    let nearest: BlockerEntity | null = null;
    let nearestDist = Infinity;

    for (const b of this.blockers) {
      if (b.cleared) continue;

      if (this.player.z > b.z + 4 && b.progress < 0.95) {
        this.player.z = b.z - 1.2;
        if (!this.bounceWarned.has(b.z)) {
          this.bounceWarned.add(b.z);
          this.cb.onToast('Clear the gate first!');
        }
      }

      if (this.player.z >= b.z - 10 && this.player.z <= b.z + 3) {
        const dist = Math.abs(this.player.z - b.z);
        if (dist < nearestDist) {
          nearestDist = dist;
          nearest = b;
        }
      }
    }

    this.activeBlocker = nearest;

    if (!nearest) return;

    const pct = Math.floor(nearest.progress * 100);
    if (nearest.blocker === 'scan') {
      this.blockerHint = `SPACE / SCAN to read barcode · ${pct}%`;
    } else if (nearest.blocker === 'stamp') {
      this.blockerHint = `SPACE — stamp or convoy vouch · ${pct}%`;
    } else if (nearest.blocker === 'toll') {
      this.blockerHint = `SPACE pays toll with packages · ${pct}%`;
    } else if (nearest.blocker === 'ram') {
      this.blockerHint = `SPACE to ram · throw/mail helps · Dash smashes · ${pct}%`;
    }
  }

  private clearBlocker(b: BlockerEntity): void {
    b.cleared = true;
    b.mesh.visible = false;
    if (this.activeBlocker === b) this.activeBlocker = null;
  }

  private checkEnemies(dt: number): void {
    for (const enemy of this.enemies) {
      if (enemy.defeated) continue;

      if (this.player.z >= enemy.z - 35 && !enemy.active) {
        enemy.approach = 1;
      }

      if (this.player.z >= enemy.z - 12 && !enemy.active && !enemy.defeated) {
        enemy.active = true;
        this.activeEnemy = enemy;
        this.shake.shake(0.5);
        this.cb.onToast(`${enemy.type === 'boss' ? '⚠ ALIEN COMMANDER!' : '⚠ ALIEN INTERCEPT!'} Tap 📦 throw · SPACE mail gun`);
        this.cb.onCombat(true, enemy.type);
      }
    }

    if (this.activeEnemy && !this.activeEnemy.defeated && this.smokeTimer <= 0) {
      const { convoyLoss, done } = clashCombat(this.activeEnemy, this.run.convoy, dt, this.combatTurretDps);
      if (convoyLoss > 0) {
        this.run.convoy = Math.max(0, this.run.convoy - convoyLoss);
        this.convoy.setCount(this.run.convoy);
      }

      if (this.run.convoy <= 0 && !done) {
        this.run.integrity--;
        this.run.integrityLost = true;
        this.player.flashHurt();
        this.cb.onDamageFlash();
        this.shake.shake(0.8);
        this.particles.hitBurst(this.player.x, this.player.z + 5);
        this.cb.onToast('Convoy wiped! VIP exposed!');
        if (this.run.integrity <= 0) {
          this.die('overwhelmed');
          return;
        }
        this.run.convoy = Math.max(3, Math.floor(this.startConvoy * 0.5));
        this.convoy.setCount(this.run.convoy);
      }

      if (done) {
        this.run.coins += this.activeEnemy.type === 'boss' ? 60 : 25;
        this.particles.burst(this.activeEnemy.mesh.position.x, 2, this.activeEnemy.mesh.position.z, '#FFD54F', 20);
        this.cb.onToast(`${this.activeEnemy.type === 'boss' ? 'Commander' : 'Aliens'} defeated!`);
        this.activeEnemy = null;
        this.cb.onCombat(false);
      }
    }
  }

  private processSpawnQueue(): void {
    if (this.spawnQueue.length === 0) return;
    const type = this.spawnQueue.shift()!;
    const z = this.player.z + 30;
    this.enemies.push(createEnemy(this.scene, type, type === 'pickpocket' ? 12 : 14, z));
    this.cb.onToast('Alien ambush from the shortcut!');
  }

  private checkDropoff(): void {
    if (!this.dropoff || this.dropoff.reached) return;
    const blocking = this.enemies.some((e) => !e.defeated && e.z <= this.dropoff.z + 10 && e.z > this.player.z - 20);
    if (blocking || (this.activeEnemy && !this.activeEnemy.defeated)) return;
    if (this.player.z >= this.dropoff.z - 3) {
      this.dropoff.reached = true;
      this.particles.gateBurst(0, this.dropoff.z, '#FFD54F');
      this.endGame(true);
    }
  }

  private checkLose(): void {
    if (this.run.integrity <= 0) this.die('stolen');
    if (this.run.packages <= 0 && this.run.convoy <= 0 && this.activeEnemy) {
      this.die('overwhelmed');
    }
  }

  private die(reason: DeathReason): void {
    if (this.dead) return;
    this.dead = true;
    this.deathReason = reason;
    this.player.flashHurt();
    this.shake.shake(1.2);
    this.cb.onDamageFlash();
    this.particles.burst(this.player.x, 1.5, this.player.z, '#FF1744', 30, 6);

    setTimeout(() => this.endGame(false), 1200);
  }

  private endGame(won: boolean): void {
    if (!this.running) return;
    this.running = false;

    let stars = 0;
    if (won) {
      stars = 1;
      if (this.run.integrity >= this.run.maxIntegrity - 1) stars = 2;
      if (!this.run.integrityLost && this.run.bonusRoute) stars = 3;
      if (!this.run.integrityLost && this.run.packages >= 3) stars = Math.max(stars, 3);
    }

    const coinBonus = won ? 25 + stars * 20 : Math.floor(this.run.coins * 0.3);
    const totalCoins = this.run.coins + (won ? coinBonus : 0);

    const reasons: Record<DeathReason, string> = {
      stolen: 'The aliens stole your VIP package!',
      overwhelmed: 'Your convoy was overwhelmed!',
      timeout: 'Delivery window expired!',
      blocked: 'You could not pay the toll!',
    };

    this.cb.onEnd({
      won,
      stars,
      coinsEarned: totalCoins,
      levelId: this.level.id,
      time: this.elapsed,
      deathReason: won ? undefined : reasons[this.deathReason],
    });
  }

  private render(): void {
    this.renderer.render(this.scene, this.camera);
  }

  resize(): void {
    const vp = window.visualViewport;
    const w = vp?.width ?? window.innerWidth;
    const h = vp?.height ?? window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  private cleanup(): void {
    for (const g of this.routeGates) disposeEntity(g.mesh, this.scene);
    for (const b of this.blockers) disposeEntity(b.mesh, this.scene);
    for (const e of this.enemies) disposeEnemy(e, this.scene);
    disposeCoins(this.coins, this.scene);
    disposePickups(this.packagePickups, this.scene);
    disposeObstacles(this.obstacles, this.scene);
    this.throws = updateThrows(this.throws, 999, this.scene);
    if (this.dropoff) disposeEntity(this.dropoff.mesh, this.scene);
    this.particles.clear();
    this.routeGates = [];
    this.blockers = [];
    this.enemies = [];
    this.coins = [];
    this.packagePickups = [];
    this.obstacles = [];
    if (this.player) this.player.dispose(this.scene);
    if (this.convoy) this.convoy.dispose();
  }

  dispose(): void {
    this.inputCleanup?.();
    this.inputCleanup = null;
    this.stop();
    this.cleanup();
    this.renderer.dispose();
  }
}
