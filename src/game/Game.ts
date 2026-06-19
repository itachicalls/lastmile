import * as THREE from 'three';
import { World } from './World';
import { Player } from './Player';
import { Convoy } from './Convoy';
import {
  createRouteGate,
  createVaultGate,
  createDropoff,
  disposeEntity,
  animateGate,
  animateVaultGate,
  animateDropoff,
  type GateEntity,
  type VaultGateEntity,
  type DropoffEntity,
} from './Gates';
import { createCoinLine, updateCoins, tryCollectCoin, disposeCoins, type CoinEntity } from './Coins';
import {
  createObstacle,
  updateObstacles,
  disposeObstacles,
  obstacleClearHeight,
  type ObstacleEntity,
} from './Obstacles';
import {
  createPackagePickups,
  updatePackagePickups,
  tryCollectPackages,
  spawnMailShot,
  spawnGoldenMail,
  updateThrows,
  disposePickups,
  type PackagePickup,
  type ThrownPackage,
} from './Packages';
import {
  createRunner,
  updateRunners,
  pickRunnerTier,
  runnerTouchRadius,
  disposeRunners,
  disposeRunner,
  isHeadshot,
  type RunnerEntity,
} from './Runners';
import { sfx } from './SoundManager';
import { UfoSpotlightHazard } from './UfoSpotlight';
import {
  createPowerUp,
  updatePowerUps,
  tryCollectPowerUp,
  randomPowerUpKind,
  disposePowerUps,
  POWER_LABELS,
  type PowerUpEntity,
} from './PowerUps';
import {
  pickObstacleLanes,
  pickRandomLane,
  pickObstacleForLevel,
  obstacleSpacing,
  runnerSpacing,
  powerUpSpacing,
  packageSpacing,
} from './Spawner';
import { ParticleSystem, CameraShake } from './Effects';
import { RenderPipeline } from './RenderPipeline';
import { SpectacleDirector } from './SpectacleDirector';
import { getPixelRatio, IS_MOBILE, isNearZ, ENABLE_SHADOWS, ENABLE_ANTIALIAS, ENABLE_TONE_MAPPING, ENABLE_BLOOM } from './platform';
import { getViewportMetrics, onViewportChange, applyMobileViewportLock } from './viewport';
import { getCharacter } from '../data/characters';
import { getLevel } from '../data/levels';
import { getDistrict } from '../data/districts';
import type { SaveData, RunState, GameResult, LevelDef, DeathReason, TurretId } from '../types';
import { INITIAL_RUN } from '../types';

export type GameCallbacks = {
  onHudUpdate: (data: HudData) => void;
  onToast: (msg: string) => void;
  onCombat: (active: boolean) => void;
  onDamageFlash: () => void;
  onEnd: (result: GameResult) => void;
};

export type HudData = {
  integrity: number;
  maxIntegrity: number;
  coins: number;
  packages: number;
  distance: number;
  totalDistance: number;
  timeLeft: number;
  abilityCd: number;
  abilityReady: boolean;
  specialCharge: number;
  specialReady: boolean;
  specialShakes: number;
  shootReady: boolean;
  jumpReady: boolean;
  slideReady: boolean;
  forkHint?: string;
  vaultHint?: string;
  powerUpLabel?: string;
  comboLabel?: string;
  invincible: boolean;
  screenBlur?: boolean;
};

export class Game {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private pipeline: RenderPipeline | null = null;
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
  private vaultGates: VaultGateEntity[] = [];
  private runners: RunnerEntity[] = [];
  private coins: CoinEntity[] = [];
  private packagePickups: PackagePickup[] = [];
  private obstacles: ObstacleEntity[] = [];
  private powerUps: PowerUpEntity[] = [];
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
  private steerSpeed = 11;
  private obstacleCooldown = 0;
  private hurtIFrames = 0;
  private gameTime = 0;

  private smokeTimer = 0;
  private dashTimer = 0;
  private dashActive = false;
  private abilityCd = 0;
  private abilityMaxCd = 12;
  private shootCd = 0;
  private mailGunDamage = 3;
  private mailGunRate = 0.22;
  private startPackages = 0;
  private pickupRadius = 2.2;

  private specialCharge = 0;
  private specialShakesLeft = 0;
  private specialShakeTimer = 0;
  private readonly quakeRadius = 7.5;

  private invincibleTimer = 0;
  private slowMoTimer = 0;
  private fastShotTimer = 0;
  private turboTimer = 0;
  private blurTimer = 0;
  private timeScale = 1;
  private autoFireEnabled = false;
  private viewportCleanup: (() => void) | null = null;
  private lastVpW = 0;
  private lastVpH = 0;
  private lastVpScale = 1;
  private lastVpOffTop = 0;
  private lastVpOffLeft = 0;
  private forkHint = '';
  private vaultHint = '';
  private powerUpLabel = '';
  private deathReason: DeathReason = 'stolen';

  private nextObstacleZ = 35;
  private nextVaultZ = 52;
  private nextRunnerZ = 50;
  private nextPowerUpZ = 80;
  private nextPackageZ = 25;
  private nextCoinZ = 45;
  private spawnHorizon = 0;
  private comboCount = 0;
  private comboTimer = 0;
  private nextMiniEventZ = 200;
  private nextUfoHazardZ = 130;
  private ufoHazard: UfoSpotlightHazard | null = null;
  private blackoutTimer = 0;
  private bossSpawned = false;
  private shootSpread = false;
  private shootPierce = 0;
  private shootHoming = false;
  private homingSteerBoost = 1;
  private baseShootSpread = false;
  private baseShootPierce = 0;
  private baseShootHoming = false;
  private gearTrialTimer = 0;
  private gearTrialTurret: TurretId | null = null;
  private styleStreak = 0;
  private styleStreakTimer = 0;
  private magnetTimer = 0;
  private comboStingerPlayed = false;
  private styleToastTimer = 0;
  private spectacle = new SpectacleDirector();
  private shootPulse = 0;

  private cb: GameCallbacks;
  private raf = 0;
  private lastFrame = 0;
  private hudTimer = 0;
  private lastConvoyCount = -1;
  private baseCamera = new THREE.Vector3();
  private lookTarget = new THREE.Vector3();

  constructor(canvas: HTMLCanvasElement, save: SaveData, callbacks: GameCallbacks) {
    this.canvas = canvas;
    this.save = save;
    this.cb = callbacks;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: ENABLE_ANTIALIAS,
      powerPreference: IS_MOBILE ? 'low-power' : 'high-performance',
      stencil: false,
      depth: true,
      alpha: false,
      precision: IS_MOBILE ? 'mediump' : 'highp',
    });
    this.renderer.setPixelRatio(getPixelRatio());
    this.renderer.shadowMap.enabled = ENABLE_SHADOWS;
    this.renderer.shadowMap.type = THREE.BasicShadowMap;
    if (ENABLE_TONE_MAPPING) {
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = IS_MOBILE ? 0.92 : 1.02;
    } else {
      this.renderer.toneMapping = THREE.NoToneMapping;
    }
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.sortObjects = false;
    this.renderer.info.autoReset = true;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(55, 1, 0.1, IS_MOBILE ? 150 : 180);
    if (ENABLE_BLOOM) {
      this.pipeline = new RenderPipeline(this.renderer, this.scene, this.camera);
    }
    this.world = new World(this.scene);
    this.particles = new ParticleSystem(this.scene);
    this.shake = new CameraShake();

    this.bindKeyboard();
    this.bindPointer();
    window.addEventListener('resize', () => this.resize());
    this.viewportCleanup = onViewportChange(() => this.resize());
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', () => this.resize());
    }
    this.resize();
  }

  setAutoFire(enabled: boolean): void {
    this.autoFireEnabled = enabled;
  }

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

    const onTap = (e: PointerEvent) => {
      if (!this.running || this.dead) return;
      const t = e.target as HTMLElement;
      if (t.closest('#steer-left, #steer-right, #ability-btn, #special-btn, #jump-btn, #slide-btn, #shoot-btn, #hud-back-btn, #autofire-toggle, .hud-panel, .hud-actions-right, .btn')) return;
      this.shoot();
    };
    hudEl.addEventListener('pointerdown', onTap);

    this.inputCleanup = () => {
      hudEl.removeEventListener('pointerdown', onTap);
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
    this.lastFrame = performance.now();
    this.hudTimer = 0;
    this.lastConvoyCount = -1;
    this.forkHint = '';
    this.vaultHint = '';
    this.powerUpLabel = '';
    this.throws = [];
    this.smokeTimer = 0;
    this.dashTimer = 0;
    this.dashActive = false;
    this.abilityCd = 0;
    this.shootCd = 0;
    this.hurtIFrames = 0;
    this.invincibleTimer = 0;
    this.slowMoTimer = 0;
    this.fastShotTimer = 0;
    this.turboTimer = 0;
    this.blurTimer = 0;
    this.timeScale = 1;
    this.specialCharge = 0;
    this.specialShakesLeft = 0;
    this.specialShakeTimer = 0;
    this.touchSteerLeft = false;
    this.touchSteerRight = false;
    this.autoFireEnabled = IS_MOBILE && this.save.mobileAutoFire;
    this.lastVpW = 0;
    this.lastVpH = 0;
    this.lastVpScale = 1;
    this.lastVpOffTop = 0;
    this.lastVpOffLeft = 0;

    this.applyUpgrades();
    const diff = level.difficulty;
    const speed = (IS_MOBILE ? 18 : 16.4) + diff * (IS_MOBILE ? 0.4 : 0.32);

    this.run = {
      ...INITIAL_RUN,
      convoy: 5,
      packages: this.startPackages,
      maxConvoy: 50,
      maxPackages: 20,
      integrity: 3 + (this.save.purchases['package-armor'] ?? 0),
      maxIntegrity: 3 + (this.save.purchases['package-armor'] ?? 0),
      baseSpeed: speed,
      speed,
    };

    this.mailGunRate = 0.22;
    if (this.save.equippedTurrets.includes('pepper-drone')) {
      this.mailGunRate = Math.max(0.12, 0.22 - (this.save.purchases['pepper-drone'] ?? 0) * 0.03);
    }
    if (this.save.equippedTurrets.includes('box-cannon')) {
      this.mailGunDamage += 1 + (this.save.purchases['box-cannon'] ?? 0);
    }
    if (this.save.equippedTurrets.includes('helper-beacon')) {
      const lv = this.save.purchases['helper-beacon'] ?? 0;
      this.mailGunDamage += lv * 2;
    }
    this.shootSpread = this.save.equippedTurrets.includes('spread-mail');
    this.shootPierce = this.save.equippedTurrets.includes('pierce-pack')
      ? 1 + (this.save.purchases['pierce-pack'] ?? 0)
      : 0;
    this.shootHoming = this.save.equippedTurrets.includes('homing-stamp');
    this.baseShootSpread = this.shootSpread;
    this.baseShootPierce = this.shootPierce;
    this.baseShootHoming = this.shootHoming;
    this.applyGearSynergies();
    this.gearTrialTimer = 0;
    this.gearTrialTurret = null;
    this.styleStreak = 0;
    this.styleStreakTimer = 0;
    this.magnetTimer = 0;
    this.comboStingerPlayed = false;
    this.homingSteerBoost = 1;

    this.comboCount = 0;
    this.comboTimer = 0;
    this.nextMiniEventZ = 200;
    this.nextUfoHazardZ = 120 + Math.random() * 35;
    if (this.ufoHazard) {
      this.ufoHazard.dispose();
      this.ufoHazard = null;
    }
    this.blackoutTimer = 0;
    this.bossSpawned = false;
    this.world.setBlackout(0);
    this.pickupRadius = 2.2 + (this.save.purchases['coin-magnet'] ?? 0) * 0.4;
    this.spectacle.reset();
    this.shootPulse = 0;

    const lastSeg = level.segments[level.segments.length - 1];
    this.levelLength = lastSeg.kind === 'dropoff' ? lastSeg.z + 20 : 800;
    this.spawnHorizon = this.levelLength - 30;

    this.nextObstacleZ = 38;
    this.nextVaultZ = 78 + Math.floor(Math.random() * 24);
    this.nextRunnerZ = 38 + Math.random() * 12;
    this.nextPowerUpZ = 28 + Math.random() * 12;
    this.nextPackageZ = 20;
    this.nextCoinZ = 35;

    const theme = getDistrict(level.district);
    this.world.build(theme, this.levelLength);
    sfx.setDistrict(level.district);

    this.player = new Player(this.scene, getCharacter(this.save.selectedCharacter ?? 'johnny'));
    this.player.setJumpPower(12 + (this.save.purchases['jump-boots'] ?? 0) * 1.4);
    this.player.z = 0;
    this.player.targetX = 0;
    this.player.x = 0;
    this.convoy = new Convoy(this.scene);
    this.convoy.setCount(IS_MOBILE ? 0 : 2);

    for (const seg of level.segments) {
      if (seg.kind === 'gate') {
        this.routeGates.push(createRouteGate(this.scene, seg.z, seg.safe));
      } else if (seg.kind === 'vault') {
        this.vaultGates.push(createVaultGate(this.scene, seg.z, seg.clearance));
      } else if (seg.kind === 'dropoff') {
        this.dropoff = createDropoff(this.scene, seg.z);
      }
    }

    this.player.setPackageGlow(0.5, level.district);
    if (IS_MOBILE) {
      applyMobileViewportLock();
      this.resize();
      requestAnimationFrame(() => this.resize());
    }
    this.loop();
  }

  private applyUpgrades(): void {
    this.startPackages = (this.save.purchases['starter-pouches'] ?? 0) * 2;
    const ability = this.save.equippedAbility;
    if (ability === 'smoke-bomb') this.abilityMaxCd = 12 - (this.save.purchases['smoke-bomb'] ?? 0) * 2;
    else if (ability === 'rally-horn') this.abilityMaxCd = 15 - (this.save.purchases['rally-horn'] ?? 0) * 3;
    else if (ability === 'dash') this.abilityMaxCd = 10 - (this.save.purchases['dash'] ?? 0) * 2;
    else this.abilityMaxCd = 12;
  }

  private bindKeyboard(): void {
    window.addEventListener('keydown', (e) => {
      this.keys.add(e.code);
      if (e.code === 'KeyE') {
        e.preventDefault();
        if (!e.repeat) this.useSpecialQuake();
      }
      if (e.code === 'KeyQ') {
        e.preventDefault();
        if (!e.repeat) this.useAbility();
      }
      if (e.code === 'Space') {
        e.preventDefault();
        if (!e.repeat) this.jump();
      }
      if (e.code === 'KeyS' || e.code === 'ArrowDown') {
        e.preventDefault();
        if (!e.repeat) this.slide();
      }
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') e.preventDefault();
      if (e.code === 'ArrowRight' || e.code === 'KeyD') e.preventDefault();
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
  }

  private bindPointer(): void {
    this.canvas.addEventListener('pointerdown', (e) => {
      if (!this.running || this.dead) return;
      if (e.button === 0) {
        e.preventDefault();
        this.shoot();
      }
    });
    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    if (IS_MOBILE) {
      this.canvas.addEventListener(
        'touchstart',
        (e) => {
          if (e.touches.length === 1) e.preventDefault();
        },
        { passive: false }
      );
    }
  }

  jump(): void {
    if (!this.running || this.dead) return;
    if (this.player.jump()) {
      this.shake.shake(0.08);
      sfx.jump();
    }
  }

  slide(): void {
    if (!this.running || this.dead) return;
    if (this.player.slide()) this.shake.shake(0.05);
  }

  /** Mail blaster — unlimited; packages are collected for delivery score only. */
  shoot(): void {
    if (!this.running || this.dead || this.shootCd > 0) return;

    const rate = this.mailGunRate;
    this.shootCd = this.fastShotTimer > 0 ? rate * 0.45 : rate;

    let targetX = this.player.x;
    let targetZ = this.player.z + 40;
    const nearest = this.nearestRunner();
    if (nearest) {
      targetX = nearest.x;
      targetZ = nearest.z;
    }

    this.player.mailGunAnim();
    sfx.shootMail();
    this.shootPulse = 0.5;
    this.shake.shake(0.035);
    this.spectacle.bumpCombat(0.07);
    this.particles.muzzleFlash(this.player.x + 0.35, 1.05, this.player.z + 0.55);

    const mailOpts = {
      pierceLeft: this.shootPierce,
      homing: this.shootHoming,
    };
    if (this.shootSpread) {
      for (const spreadIndex of [-1, 0, 1]) {
        this.throws.push(
          spawnMailShot(
            this.scene,
            this.player.x,
            this.player.z,
            targetX,
            targetZ,
            this.mailGunDamage,
            { ...mailOpts, spreadIndex }
          )
        );
      }
    } else {
      this.throws.push(
        spawnMailShot(
          this.scene,
          this.player.x,
          this.player.z,
          targetX,
          targetZ,
          this.mailGunDamage,
          mailOpts
        )
      );
    }
  }

  fireMailGun(): void {
    this.shoot();
  }

  throwPackage(): void {
    this.shoot();
  }

  private nearestRunner(): RunnerEntity | null {
    let best: RunnerEntity | null = null;
    let bestDz = Infinity;
    for (const r of this.runners) {
      if (!r.alive) continue;
      const dz = r.z - this.player.z;
      if (dz > 0 && dz < 55 && dz < bestDz) {
        bestDz = dz;
        best = r;
      }
    }
    return best;
  }

  useSpecialQuake(): void {
    if (!this.running || this.dead || this.specialShakesLeft > 0) return;
    if (this.specialCharge < 1) return;
    this.specialCharge = 0;
    this.specialShakesLeft = 3;
    this.specialShakeTimer = 0;
    this.convoy.reactQuake();
    sfx.quake();
    this.cb.onToast('💥 GROUND QUAKE ×3!');
    this.emitHud(this.level.timeLimit - this.elapsed);
  }

  useAbility(): void {
    if (!this.running || this.dead || this.abilityCd > 0) return;
    const ability = this.save.equippedAbility;
    if (!ability) return;

    if (ability === 'smoke-bomb') {
      this.smokeTimer = 4;
      this.cb.onToast('Smoke!');
    } else if (ability === 'rally-horn') {
      this.invincibleTimer = Math.max(this.invincibleTimer, 2);
      this.cb.onToast('Brief shield!');
    } else if (ability === 'dash') {
      this.dashActive = true;
      this.dashTimer = 0.6;
      this.player.dashOffset();
      this.cb.onToast('Dash!');
    }
    this.abilityCd = this.abilityMaxCd;
  }

  stop(): void {
    this.running = false;
    cancelAnimationFrame(this.raf);
  }

  private loop = (): void => {
    if (!this.running) return;
    this.raf = requestAnimationFrame(this.loop);
    const now = performance.now();
    const dt = Math.min(0.05, Math.max(0.001, (now - this.lastFrame) / 1000));
    this.lastFrame = now;
    this.update(dt);
    this.render();
  };

  private update(dt: number): void {
    if (this.dead) return;
    this.syncViewport();

    if (this.slowMoTimer > 0) {
      this.slowMoTimer -= dt;
      this.timeScale = 0.42;
      if (this.slowMoTimer <= 0) this.timeScale = 1;
    } else {
      this.timeScale = 1;
    }
    if (this.invincibleTimer > 0) this.invincibleTimer -= dt;
    if (this.hurtIFrames > 0) this.hurtIFrames -= dt;
    if (this.fastShotTimer > 0) this.fastShotTimer -= dt;
    if (this.turboTimer > 0) {
      this.turboTimer -= dt;
      if (this.turboTimer <= 0) this.run.speed = this.run.baseSpeed;
    }
    if (this.blurTimer > 0) {
      this.blurTimer -= dt;
      if (this.blurTimer <= 0) this.player.setGhostMode(false);
    }
    this.powerUpLabel =
      this.invincibleTimer > 0
        ? '🛡 SHIELD'
        : this.hurtIFrames > 0
          ? '💥 HIT!'
          : this.turboTimer > 0
            ? '🔥 OVERDRIVE'
            : this.blurTimer > 0
              ? '👻 GHOSTED'
              : this.fastShotTimer > 0
          ? '⚡ FAST'
          : this.slowMoTimer > 0
            ? '🐢 SLOW-MO'
            : '';

    const scaledDt = dt * this.timeScale;
    this.elapsed += dt;
    this.gameTime += dt;
    if (this.abilityCd > 0) this.abilityCd = Math.max(0, this.abilityCd - dt);
    if (this.shootCd > 0) this.shootCd = Math.max(0, this.shootCd - dt);
    if (IS_MOBILE && this.autoFireEnabled && this.shootCd <= 0) this.shoot();
    if (this.smokeTimer > 0) this.smokeTimer -= dt;
    if (this.dashActive) {
      this.dashTimer -= dt;
      if (this.dashTimer <= 0) this.dashActive = false;
    }
    if (this.obstacleCooldown > 0) this.obstacleCooldown -= dt;
    if (this.comboTimer > 0) {
      this.comboTimer -= dt;
      if (this.comboTimer <= 0) this.comboCount = 0;
    }
    if (this.blackoutTimer > 0) {
      this.blackoutTimer -= dt;
      if (this.blackoutTimer <= 0) this.world.setBlackout(0);
    }
    if (this.styleStreakTimer > 0) {
      this.styleStreakTimer -= dt;
      if (this.styleStreakTimer <= 0) this.styleStreak = 0;
    }
    if (this.magnetTimer > 0) this.magnetTimer -= dt;
    if (this.gearTrialTimer > 0) {
      this.gearTrialTimer -= dt;
      if (this.gearTrialTimer <= 0) this.endGearTrial();
    }
    sfx.setNight(this.world.getSkyNight());
    this.player.z += this.run.speed * scaledDt;
    this.run.distance = this.player.z;
    this.specialCharge = Math.min(1, this.specialCharge + this.run.speed * scaledDt * 0.0005);
    this.updateSpecialQuake(dt);

    if (this.keys.has('ArrowLeft') || this.keys.has('KeyA') || this.touchSteerLeft) {
      this.player.targetX += this.steerSpeed * dt;
    }
    if (this.keys.has('ArrowRight') || this.keys.has('KeyD') || this.touchSteerRight) {
      this.player.targetX -= this.steerSpeed * dt;
    }
    this.player.targetX = THREE.MathUtils.clamp(this.player.targetX, -this.roadHalfWidth, this.roadHalfWidth);

    this.player.update(dt, this.roadHalfWidth, true, this.run.speed, this.world.getGameplayNight());
    if (this.run.convoy !== this.lastConvoyCount) {
      this.convoy.setCount(IS_MOBILE ? 0 : Math.min(2, this.run.convoy));
      this.lastConvoyCount = this.run.convoy;
    }
    this.convoy.update(this.player.x, this.player.z, this.gameTime);

    this.proceduralSpawn();
    this.updateMiniEvents();
    this.updateSpectacle(dt);
    this.updateUfoHazard(dt);
    this.maybeSpawnBoss();
    this.cullBehind();

    const pz = this.player.z;
    this.world.setPlayerZ(pz, dt);
    this.sunTick += dt;
    if (this.sunTick >= (IS_MOBILE ? 0.1 : 0.05)) {
      this.sunTick = 0;
      this.world.followSun(this.player.x, pz);
    }

    updateCoins(this.coins, dt, this.gameTime, pz);
    updatePackagePickups(this.packagePickups, this.gameTime, pz);
    updatePowerUps(this.powerUps, this.gameTime, pz);
    updateRunners(this.runners, scaledDt, this.gameTime, 1, pz, (r) => {
      sfx.telegraphWarn();
      if (Math.random() < 0.4) sfx.alienChatter();
    }, this.world.getGameplayNight());
    this.throws = updateThrows(
      this.throws,
      dt,
      this.scene,
      this.gameTime,
      this.runners,
      this.homingSteerBoost
    );
    this.particles.update(dt);
    this.shootPulse = Math.max(0, this.shootPulse - dt * 2.8);
    this.world.update(this.gameTime, pz, dt, {
      turbo: this.turboTimer > 0,
      speed: this.run.speed,
      baseSpeed: this.run.baseSpeed,
      playerX: this.player.x,
      shootPulse: this.shootPulse,
      combatIntensity: this.spectacle.getCombatIntensity(),
    });

    for (const g of this.routeGates) {
      if (!g.resolved && isNearZ(g.z, pz, IS_MOBILE ? 42 : 55)) animateGate(g, this.gameTime);
    }
    for (const v of this.vaultGates) {
      if (!v.resolved && isNearZ(v.z, pz, IS_MOBILE ? 42 : 55)) animateVaultGate(v, this.gameTime);
    }
    if (this.dropoff && isNearZ(this.dropoff.z, pz, IS_MOBILE ? 42 : 55)) animateDropoff(this.dropoff, this.gameTime);
    updateObstacles(this.obstacles, this.gameTime, pz, this.world.getGameplayNight());

    const collectRadius = this.pickupRadius + (this.magnetTimer > 0 ? 2.8 : 0);
    const coinGain = tryCollectCoin(this.coins, this.player.x, this.player.z, collectRadius);
    if (coinGain) {
      this.run.coins += coinGain;
      this.particles.collectBurst(this.player.x, this.player.z);
    }

    const pkgCollect = tryCollectPackages(
      this.packagePickups,
      this.player.x,
      this.player.z,
      collectRadius
    );
    if (pkgCollect.packages) {
      this.run.packages = Math.min(this.run.maxPackages, this.run.packages + pkgCollect.packages);
      this.particles.collectBurst(this.player.x, this.player.z);
      this.spectacle.bumpCombat(0.04);
    }
    if (pkgCollect.golden) {
      this.run.coins += 18 * pkgCollect.golden;
      this.fastShotTimer = Math.max(this.fastShotTimer, 4);
      this.particles.collectBurst(this.player.x, this.player.z);
      this.cb.onToast('✨ Golden Mail — fast shots!');
      sfx.combo(4);
    }

    const pu = tryCollectPowerUp(this.powerUps, this.player.x, this.player.z, collectRadius);
    if (pu) {
      this.applyPowerUp(pu);
      this.particles.collectBurst(this.player.x, this.player.z);
    }

    this.checkThrowHits();
    this.checkObstacles();
    this.checkNearMisses();
    this.checkRunners();
    this.checkRouteGates();
    this.checkVaultGates();
    this.checkDropoff();
    this.checkLose();

    const timeLeft = this.level.timeLimit - this.elapsed;
    if (timeLeft <= 0) {
      this.die('timeout');
      return;
    }

    this.hudTimer += dt;
    const hudInterval = IS_MOBILE ? 0.12 : 0.08;
    if (this.hudTimer >= hudInterval) {
      this.hudTimer = 0;
      this.emitHud(timeLeft);
    }

    this.cb.onCombat(false);

    this.baseCamera.set(this.player.x * 0.35, 10 + this.player.jumpY * 0.15, this.player.z - 12);
    this.lookTarget.set(this.player.x * 0.25, 1.5 + this.player.jumpY * 0.2, this.player.z + 18);
    this.shake.apply(this.camera, this.baseCamera, this.lookTarget);
  }

  private applyPowerUp(kind: import('./PowerUps').PowerUpKind): void {
    this.cb.onToast(POWER_LABELS[kind]);
    if (kind === 'slowmo') this.slowMoTimer = 3.5;
    else if (kind === 'fastshot') this.fastShotTimer = 5;
    else if (kind === 'invincible') this.invincibleTimer = 4;
    else if (kind === 'health') {
      if (this.run.integrity < this.run.maxIntegrity) {
        this.run.integrity++;
      } else {
        this.run.coins += 15;
        this.cb.onToast('Full health — +15 coins!');
      }
    } else if (kind === 'turbo') {
      this.turboTimer = 4;
      this.run.speed = this.run.baseSpeed * 1.55;
      this.shake.shake(0.35);
      this.convoy.reactTurbo();
      sfx.turbo();
      sfx.honk();
    } else if (kind === 'blur') {
      this.blurTimer = 3.5;
      this.player.setGhostMode(true);
    }
    this.emitHud(this.level.timeLimit - this.elapsed);
  }

  private emitHud(timeLeft: number): void {
    this.cb.onHudUpdate({
      integrity: this.run.integrity,
      maxIntegrity: this.run.maxIntegrity,
      coins: this.run.coins,
      packages: this.run.packages,
      distance: this.run.distance,
      totalDistance: this.levelLength,
      timeLeft,
      abilityCd: this.abilityCd,
      abilityReady: this.abilityCd <= 0 && !!this.save.equippedAbility,
      specialCharge: this.specialCharge,
      specialReady: this.specialCharge >= 1 && this.specialShakesLeft <= 0,
      specialShakes: this.specialShakesLeft,
      shootReady: this.shootCd <= 0,
      jumpReady: !this.player.isJumping && !this.player.isSliding,
      slideReady: !this.player.isJumping && !this.player.isSliding,
      forkHint: this.forkHint || undefined,
      vaultHint: this.vaultHint || undefined,
      powerUpLabel:
        this.comboCount >= 2
          ? `⚡ ${this.comboCount}x COMBO`
          : this.magnetTimer > 0
            ? '🧲 STYLE MAGNET'
            : this.gearTrialTimer > 0 && this.gearTrialTurret
              ? `🎁 ${Game.gearTrialName(this.gearTrialTurret)}`
              : this.powerUpLabel || undefined,
      invincible: this.invincibleTimer > 0,
      screenBlur: this.blurTimer > 0,
    });
  }

  private sunTick = 0;

  private proceduralSpawn(): void {
    const diff = this.level.difficulty;
    const spawnAhead = IS_MOBILE ? 72 : 92;
    const ahead = this.player.z + spawnAhead;
    const maxPerFrame = 1;

    const maxObstacles = IS_MOBILE ? 9 : 12;
    const maxRunners = IS_MOBILE ? 9 : 12;
    const maxPowerUps = IS_MOBILE ? 6 : 10;

    let obsN = 0;
    while (this.nextObstacleZ < ahead && this.nextObstacleZ < this.spawnHorizon && obsN < maxPerFrame) {
      if (this.obstacles.length >= maxObstacles) break;
      const lanes = pickObstacleLanes();
      const laneLimit = IS_MOBILE ? 1 : lanes.length;
      for (let i = 0; i < laneLimit; i++) {
        this.obstacles.push(createObstacle(this.scene, pickObstacleForLevel(this.level.id), lanes[i], this.nextObstacleZ));
      }
      this.nextObstacleZ += obstacleSpacing(diff) + Math.random() * 10;
      obsN++;
    }

    const maxVaults = IS_MOBILE ? 3 : 5;
    if (this.nextVaultZ < ahead && this.nextVaultZ < this.spawnHorizon && this.vaultGates.filter((v) => !v.resolved).length < maxVaults) {
      const clearance = this.vaultGates.length % 2 === 0 ? 'jump' : 'slide';
      this.vaultGates.push(createVaultGate(this.scene, this.nextVaultZ, clearance));
      this.nextVaultZ += 58 + Math.random() * 32 + diff * 0.35;
    }

    let runN = 0;
    while (this.nextRunnerZ < ahead && this.nextRunnerZ < this.spawnHorizon && runN < maxPerFrame) {
      if (this.runners.length >= maxRunners) break;
      const tier = pickRunnerTier(diff);
      const lane = pickRandomLane();
      const elite = Math.random() < (IS_MOBILE ? 0.05 : 0.08);
      this.runners.push(createRunner(this.scene, tier, lane, this.nextRunnerZ, { elite }));
      if (elite) sfx.eliteSpawn();
      if (
        !IS_MOBILE &&
        diff >= 3 &&
        Math.random() < 0.28 &&
        this.runners.length < maxRunners
      ) {
        let lane2 = pickRandomLane();
        for (let t = 0; t < 4 && lane2 === lane; t++) lane2 = pickRandomLane();
        if (lane2 !== lane) {
          this.runners.push(createRunner(this.scene, pickRunnerTier(diff), lane2, this.nextRunnerZ + 0.5));
        }
      }
      this.nextRunnerZ += runnerSpacing(diff) + Math.random() * 8;
      runN++;
    }

    if (this.nextPowerUpZ < ahead && this.nextPowerUpZ < this.spawnHorizon && this.powerUps.length < maxPowerUps) {
      this.powerUps.push(createPowerUp(this.scene, randomPowerUpKind(), pickRandomLane(), this.nextPowerUpZ));
      this.nextPowerUpZ += powerUpSpacing();
    }

    let pkgN = 0;
    while (this.nextPackageZ < ahead && this.nextPackageZ < this.spawnHorizon && pkgN < maxPerFrame) {
      this.packagePickups.push(...createPackagePickups(this.scene, this.nextPackageZ, 1, 0));
      this.nextPackageZ += packageSpacing();
      pkgN++;
    }

    let coinN = 0;
    while (this.nextCoinZ < ahead && this.nextCoinZ < this.spawnHorizon && coinN < maxPerFrame) {
      const coinCount = IS_MOBILE ? 2 + Math.floor(Math.random() * 2) : 3 + Math.floor(Math.random() * 3);
      this.coins.push(...createCoinLine(this.scene, this.nextCoinZ, coinCount, 3.5));
      this.nextCoinZ += IS_MOBILE ? 28 + Math.random() * 20 : 22 + Math.random() * 18;
      coinN++;
    }
  }

  private addSpecialCharge(amount: number): void {
    this.specialCharge = Math.min(1, this.specialCharge + amount);
  }

  private updateSpecialQuake(dt: number): void {
    if (this.specialShakesLeft <= 0) return;
    this.specialShakeTimer -= dt;
    if (this.specialShakeTimer > 0) return;
    this.executeQuakePulse();
    this.specialShakesLeft--;
    this.specialShakeTimer = this.specialShakesLeft > 0 ? 0.38 : 0;
  }

  private executeQuakePulse(): void {
    this.shake.shake(1.5);
    const px = this.player.x;
    const pz = this.player.z;
    const r2 = this.quakeRadius * this.quakeRadius;

    for (const obs of this.obstacles) {
      if (obs.hit) continue;
      const dx = obs.x - px;
      const dz = obs.z - pz;
      if (dx * dx + dz * dz <= r2) {
        obs.hit = true;
        obs.mesh.visible = false;
        this.particles.hitBurst(obs.x, obs.z);
      }
    }

    const killed: RunnerEntity[] = [];
    for (const r of this.runners) {
      if (!r.alive) continue;
      const dx = r.x - px;
      const dz = r.z - pz;
      if (dx * dx + dz * dz <= r2) {
        this.run.coins += r.tier === 'stalker' ? 15 : r.tier === 'raider' ? 10 : 5;
        killed.push(r);
        this.particles.hitBurst(r.x, r.z);
      }
    }
    for (const r of killed) {
      disposeRunner(r, this.scene);
      this.runners = this.runners.filter((x) => x !== r);
    }

    this.particles.gateBurst(px, pz, '#FF9800');
  }

  private cullBehind(): void {
    const minZ = this.player.z - 25;

    const obsCull = this.obstacles.filter((o) => o.z < minZ);
    if (obsCull.length) {
      disposeObstacles(obsCull, this.scene);
      this.obstacles = this.obstacles.filter((o) => o.z >= minZ);
    }

    const runnerCull = this.runners.filter((r) => r.z < minZ);
    if (runnerCull.length) {
      disposeRunners(runnerCull, this.scene);
      this.runners = this.runners.filter((r) => r.z >= minZ);
    }

    const coinCull = this.coins.filter((c) => c.collected || c.z < minZ);
    if (coinCull.length) {
      disposeCoins(coinCull, this.scene);
      this.coins = this.coins.filter((c) => !c.collected && c.z >= minZ);
    }

    const pkgCull = this.packagePickups.filter((p) => p.collected || p.z < minZ);
    if (pkgCull.length) {
      disposePickups(pkgCull, this.scene);
      this.packagePickups = this.packagePickups.filter((p) => !p.collected && p.z >= minZ);
    }

    const puCull = this.powerUps.filter((p) => p.collected || p.z < minZ);
    if (puCull.length) {
      disposePowerUps(puCull, this.scene);
      this.powerUps = this.powerUps.filter((p) => !p.collected && p.z >= minZ);
    }
  }

  private applyGearSynergies(): void {
    const turrets = this.save.equippedTurrets;
    if (turrets.includes('spread-mail') && turrets.includes('pierce-pack')) {
      this.shootPierce += 1;
      this.mailGunDamage = Math.floor(this.mailGunDamage * 1.12);
      this.cb.onToast('⚡ Lane Sweeper — spread pierces!');
    }
    if (turrets.includes('homing-stamp') && turrets.includes('pepper-drone')) {
      this.mailGunRate *= 0.88;
      this.homingSteerBoost = 1.45;
      this.cb.onToast('🎯 Stamp Lock — homing fast fire!');
    }
  }

  private static gearTrialName(id: TurretId): string {
    if (id === 'spread-mail') return 'Spread Envelope';
    if (id === 'pierce-pack') return 'Piercing Post';
    return 'Tracking Stamps';
  }

  private startGearTrial(): void {
    const pool: TurretId[] = ['spread-mail', 'pierce-pack', 'homing-stamp'];
    const missing = pool.filter((t) => !this.save.equippedTurrets.includes(t));
    if (!missing.length) return;
    const trial = missing[Math.floor(Math.random() * missing.length)];
    this.gearTrialTurret = trial;
    this.gearTrialTimer = 45;
    if (trial === 'spread-mail') this.shootSpread = true;
    if (trial === 'pierce-pack') this.shootPierce = Math.max(this.shootPierce, 2);
    if (trial === 'homing-stamp') this.shootHoming = true;
    this.cb.onToast(`🎁 Trial: ${Game.gearTrialName(trial)}!`);
  }

  private endGearTrial(): void {
    this.shootSpread = this.baseShootSpread;
    this.shootPierce = this.baseShootPierce;
    this.shootHoming = this.baseShootHoming;
    const turrets = this.save.equippedTurrets;
    if (turrets.includes('spread-mail') && turrets.includes('pierce-pack')) {
      this.shootPierce += 1;
    }
    this.homingSteerBoost =
      turrets.includes('homing-stamp') && turrets.includes('pepper-drone') ? 1.45 : 1;
    this.gearTrialTurret = null;
  }

  private onRunnerKill(r: RunnerEntity, headshot: boolean): void {
    this.comboTimer = 3.2;
    this.comboCount++;
    const comboMul = 1 + (this.comboCount - 1) * 0.12;
    let coins = (r.tier === 'stalker' ? 15 : r.tier === 'raider' ? 10 : 5) * comboMul;
    if (r.elite) coins += 25;
    if (r.isBoss) coins += 50;
    if (headshot) coins *= 1.5;
    this.run.coins += Math.floor(coins);
    this.addSpecialCharge(0.14 + this.comboCount * 0.035);
    this.spectacle.bumpCombat(r.isBoss ? 0.25 : r.elite ? 0.15 : 0.1);
    sfx.alienKill();
    if (headshot) sfx.headshot();
    if (this.comboCount >= 2) sfx.combo(this.comboCount);
    if (this.comboCount >= 5 && !this.comboStingerPlayed) {
      this.comboStingerPlayed = true;
      sfx.comboStinger();
    }
    if (this.comboCount <= 1) this.comboStingerPlayed = false;
    this.particles.hitBurst(r.x, r.z);
    if (r.elite && !r.isBoss) {
      this.coins.push(...createCoinLine(this.scene, r.z, IS_MOBILE ? 5 : 8, 4));
      this.packagePickups.push(spawnGoldenMail(this.scene, r.x, r.z));
    }
    if (r.isBoss) {
      this.startGearTrial();
      this.powerUps.push(createPowerUp(this.scene, randomPowerUpKind(), 0, r.z));
      this.cb.onToast('💥 Boss down — deliver the mail!');
    }
  }

  private updateSpectacle(dt: number): void {
    const ev = this.spectacle.update(dt, {
      playerZ: this.player.z,
      comboCount: this.comboCount,
      runnerCount: this.runners.filter((r) => r.alive).length,
      night: this.world.getSkyNight(),
    });
    if (ev) {
      this.cb.onToast(ev.message);
      this.world.playSpectacle(ev.kind, this.player.z);
      this.shake.shake(ev.pulse * 0.14);
      sfx.spectacle(ev.kind);
      if (ev.kind === 'energy-surge') {
        this.world.setBlackout(0.35);
        this.blackoutTimer = Math.max(this.blackoutTimer, 2.5);
      }
    }
    sfx.setCombatIntensity(this.spectacle.getCombatIntensity());
  }

  private updateUfoHazard(dt: number): void {
    const night = this.world.getSkyNight();
    if (night <= 0.4) {
      if (this.ufoHazard?.active) this.ufoHazard.end();
      return;
    }
    if (!this.ufoHazard) this.ufoHazard = new UfoSpotlightHazard(this.scene);

    if (!this.ufoHazard.active && this.player.z >= this.nextUfoHazardZ) {
      this.nextUfoHazardZ += 155 + Math.random() * 70;
      this.ufoHazard.start(this.player.x, this.player.z);
      this.cb.onToast('🛸 UFO overhead — dodge the beam!');
      sfx.ufoBeam();
    }
    if (!this.ufoHazard.active) return;

    this.ufoHazard.update(dt, this.gameTime, this.player.z);

    const dodging =
      this.player.jumpY > 0.4 ||
      this.player.isSliding ||
      this.dashActive ||
      this.invincibleTimer > 0;

    if (this.ufoHazard.tickExposure(dt, this.player.x, this.player.z, dodging)) {
      if (!this.isProtected()) {
        this.takeHit('obstacle');
        this.cb.onToast('👽 Caught in the beam!');
        this.ufoHazard.end();
      }
    }
  }

  private updateMiniEvents(): void {
    if (this.player.z < this.nextMiniEventZ) return;
    this.nextMiniEventZ += 200 + Math.random() * 50;
    const d = this.level.district;
    const roll = Math.random();

    const ufo = (): void => {
      this.cb.onToast('🛸 UFO convoy — coin shower!');
      this.coins.push(...createCoinLine(this.scene, this.player.z + 45, IS_MOBILE ? 6 : 10, 5));
    };
    const escort = (): void => {
      this.cb.onToast('📬 Escort convoy rolling!');
      this.convoy.reactTurbo();
      sfx.honk();
    };
    const blackout = (): void => {
      this.cb.onToast('🌑 Blackout zone — eyes up!');
      this.world.setBlackout(0.58);
      this.blackoutTimer = 9;
    };

    if (d === 3) {
      if (roll < 0.55) ufo();
      else if (roll < 0.82) escort();
      else blackout();
    } else if (d === 5 || d === 7) {
      if (roll < 0.48) blackout();
      else if (roll < 0.74) escort();
      else ufo();
    } else if (d >= 6) {
      if (roll < 0.38) blackout();
      else if (roll < 0.68) ufo();
      else escort();
    } else if (roll < 0.34) {
      ufo();
    } else if (roll < 0.67) {
      escort();
    } else {
      blackout();
    }
  }

  private maybeSpawnBoss(): void {
    if (this.bossSpawned || !this.dropoff) return;
    if (!this.level.name.includes('Boss')) return;
    if (this.player.z < this.dropoff.z - 95) return;
    this.bossSpawned = true;
    this.runners.push(createRunner(this.scene, 'stalker', 0, this.dropoff.z - 8, { boss: true }));
    sfx.eliteSpawn();
    this.cb.onToast('👾 BOSS ALIEN guards the drop-off!');
  }

  private checkNearMisses(): void {
    for (const obs of this.obstacles) {
      if (obs.hit) continue;
      const dz = this.player.z - obs.z;
      if (dz < 0.8 || dz > 2.2) continue;
      const dx = Math.abs(this.player.x - obs.x);
      const edgeLo = obs.radius - 0.05;
      const edgeHi = obs.radius + 0.45;
      if (dx >= edgeLo && dx <= edgeHi) {
        if (this.player.isJumping || this.player.isSliding || this.dashActive) {
          if (!obs.mesh.userData.styleAwarded) {
            obs.mesh.userData.styleAwarded = true;
            this.run.coins += 5;
            sfx.nearMiss();
            this.convoy.reactTurbo();
            this.styleStreak++;
            this.styleStreakTimer = 4;
            if (this.styleStreak >= 3) {
              this.styleStreak = 0;
              this.magnetTimer = 5;
              this.cb.onToast('🔗 STYLE MAGNET!');
              sfx.honk();
            } else if (this.styleStreak === 2) {
              this.cb.onToast('✨ Style ×2 — one more!');
            } else {
              this.cb.onToast('✨ STYLE +5');
            }
          }
        }
      }
    }
  }

  private checkThrowHits(): void {
    for (const t of this.throws) {
      if (t.life <= 0) continue;
      const tz = t.mesh.position.z;
      const py = t.mesh.position.y;
      for (const r of this.runners) {
        if (!r.alive) continue;
        if (Math.abs(r.z - tz) > 2.5) continue;
        const dx = t.mesh.position.x - r.x;
        const dz = t.mesh.position.z - r.z;
        if (dx * dx + dz * dz >= 1.85) continue;

        const headshot = isHeadshot(py, r);
        const dmg = headshot ? t.damage * 2 : t.damage;
        r.hp -= dmg;
        sfx.alienHit();
        this.particles.alienHit(t.mesh.position.x, t.mesh.position.y, t.mesh.position.z, headshot);
        this.spectacle.bumpCombat(headshot ? 0.12 : 0.06);
        if (t.pierceLeft > 0) {
          t.pierceLeft--;
        } else {
          t.life = 0;
        }
        if (r.hp <= 0) {
          this.onRunnerKill(r, headshot);
          disposeRunner(r, this.scene);
          this.runners = this.runners.filter((x) => x !== r);
        }
      }
    }
  }

  private isProtected(): boolean {
    return this.invincibleTimer > 0 || this.hurtIFrames > 0;
  }

  /** Lose one life — only die at 0 hearts (forks still instant death) */
  private takeHit(source: 'obstacle' | 'runner'): void {
    if (this.isProtected()) return;

    this.run.integrity--;
    this.run.integrityLost = true;
    this.hurtIFrames = 1.5;
    this.obstacleCooldown = 0.6;
    this.player.flashHurt();
    this.shake.shake(0.75);
    this.cb.onDamageFlash();
    this.particles.hitBurst(this.player.x, this.player.z);

    if (source === 'runner') {
      this.player.knockback(this.player.x >= 0 ? 2 : -2);
    }

    if (this.run.integrity <= 0) {
      this.die(source === 'runner' ? 'overwhelmed' : 'stolen');
    } else {
      this.emitHud(this.level.timeLimit - this.elapsed);
    }
  }

  private checkObstacles(): void {
    if (this.isProtected()) return;

    for (const obs of this.obstacles) {
      if (obs.hit) continue;
      const dz = Math.abs(this.player.z - obs.z);
      if (dz > 1.4) continue;
      const dx = Math.abs(this.player.x - obs.x);
      if (dx > obs.radius + 0.3) continue;
      if (this.player.jumpY > obstacleClearHeight(obs.kind) + 0.08) continue;
      if (this.dashActive) {
        obs.hit = true;
        obs.mesh.visible = false;
        this.particles.hitBurst(obs.x, obs.z);
        continue;
      }

      obs.hit = true;
      obs.mesh.visible = false;
      this.takeHit('obstacle');
      return;
    }
  }

  private checkRunners(): void {
    if (this.isProtected() || this.smokeTimer > 0) return;

    for (const r of this.runners) {
      if (!r.alive) continue;
      const dx = Math.abs(this.player.x - r.x);
      const dz = Math.abs(this.player.z - r.z);
      const rad = runnerTouchRadius(r.tier);
      if (dx < rad && dz < 1.3 && this.player.jumpY < 0.55) {
        disposeRunner(r, this.scene);
        this.runners = this.runners.filter((x) => x !== r);
        this.takeHit('runner');
        return;
      }
    }
  }

  private checkRouteGates(): void {
    this.forkHint = '';

    for (const gate of this.routeGates) {
      if (gate.resolved) continue;

      const dist = gate.z - this.player.z;
      if (dist > 0 && dist < 32) {
        this.forkHint = '⚠ FORK!';
      }

      if (this.player.z >= gate.z - 3 && this.player.z <= gate.z + 2) {
        if (Math.abs(this.player.x) < 1.2) {
          this.die('wrong_turn');
          return;
        }
      }

      if (this.player.z < gate.z + 0.4) continue;

      const onLeft = this.player.x > 0.75;
      const onRight = this.player.x < -0.75;
      if (!onLeft && !onRight) {
        this.die('wrong_turn');
        return;
      }

      const choice = onLeft ? 'left' : 'right';
      gate.resolved = true;
      gate.centerWall.visible = false;

      if (choice !== gate.safeSide) {
        this.die('wrong_turn');
        return;
      }

      this.run.coins += 8;
      this.particles.gateBurst(choice === 'left' ? 3 : -3, gate.z, '#00E676');
      sfx.gatePass();
    }
  }

  /** Vault gates cost one heart on a miss — never instant death unless you're on your last heart. */
  private takeVaultMiss(): void {
    if (this.isProtected()) return;
    this.run.integrity--;
    this.run.integrityLost = true;
    this.hurtIFrames = 1.8;
    this.obstacleCooldown = 0.8;
    this.player.flashHurt();
    this.shake.shake(0.65);
    this.cb.onDamageFlash();
    this.particles.hitBurst(this.player.x, this.player.z);
    if (this.run.integrity <= 0) {
      this.die('stolen');
    } else {
      this.emitHud(this.level.timeLimit - this.elapsed);
    }
  }

  private checkVaultGates(): void {
    const gateDepth = 2.4;
    const gateStart = -1.5;

    for (const v of this.vaultGates) {
      if (v.resolved) continue;

      if (Math.abs(this.player.x) > 3.6) continue;

      const inZone = this.player.z >= v.z + gateStart && this.player.z <= v.z + gateDepth;
      if (!inZone) continue;

      const jumping = this.player.jumpY > 0.1 || this.player.isJumping;
      const sliding = this.player.isSliding;
      const cleared = v.clearance === 'jump' ? jumping : sliding;
      const wrongAction = (v.clearance === 'jump' && sliding) || (v.clearance === 'slide' && jumping);
      const atBarrier = this.player.z >= v.z - 0.15;

      if (!v.penalized && atBarrier && (wrongAction || !cleared)) {
        v.penalized = true;
        sfx.vaultBuzz();
        this.takeVaultMiss();
      }

      if (this.player.z > v.z + gateDepth - 0.35) {
        v.resolved = true;
        if (cleared && !v.penalized) {
          this.run.coins += 4;
          sfx.vaultBuzz();
        }
      }
    }
  }

  private checkDropoff(): void {
    if (!this.dropoff || this.dropoff.reached) return;
    if (this.runners.some((r) => r.alive && r.isBoss)) return;
    if (this.player.z >= this.dropoff.z - 3) {
      this.dropoff.reached = true;
      this.particles.gateBurst(0, this.dropoff.z, '#FFD54F');
      sfx.delivery();
      this.endGame(true);
    }
  }

  private checkLose(): void {
    if (this.run.integrity <= 0 && !this.dead) this.die('stolen');
  }

  private die(reason: DeathReason): void {
    if (this.dead) return;
    this.dead = true;
    this.deathReason = reason;
    this.player.flashHurt();
    this.shake.shake(1.2);
    this.cb.onDamageFlash();
    this.particles.burst(this.player.x, 1.5, this.player.z, '#FF1744', IS_MOBILE ? 18 : 30, 6);
    setTimeout(() => this.endGame(false), 1200);
  }

  private endGame(won: boolean): void {
    if (!this.running) return;
    this.running = false;

    let stars = 0;
    if (won) {
      stars = 1;
      if (!this.run.integrityLost && this.run.packages >= 6) stars = 2;
      if (!this.run.integrityLost && this.run.packages >= 12 && this.run.coins >= 40) stars = 3;
    }

    const packageBonus = won ? this.run.packages * 3 : 0;
    const coinBonus = won ? 25 + stars * 20 : Math.floor(this.run.coins * 0.3);
    const totalCoins = this.run.coins + (won ? coinBonus + packageBonus : 0);

    const reasons: Record<DeathReason, string> = {
      stolen: 'Crashed into a hazard!',
      overwhelmed: 'An alien tackled you!',
      timeout: 'Delivery window expired!',
      blocked: 'Blocked!',
      wrong_turn: 'Wrong turn — dead end!',
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
    if (ENABLE_TONE_MAPPING) {
      const nightFx = this.world.getNightFx();
      const vis = this.world.getGameplayNight();
      const base = IS_MOBILE ? 0.96 : 1.06;
      this.renderer.toneMappingExposure = base * (1 - nightFx * 0.08) + vis * 0.1;
    }
    if (this.pipeline) {
      const nightFx = this.world.getNightFx();
      const combat = this.spectacle.getCombatIntensity();
      const pulse = this.spectacle.getPostPulse() + this.shootPulse * 0.35;
      const bloom =
        (IS_MOBILE ? 0.22 : 0.24) +
        nightFx * (IS_MOBILE ? 0.2 : 0.28) +
        combat * (IS_MOBILE ? 0.08 : 0.12);
      this.pipeline.setBloomStrength(bloom);
      this.pipeline.setGradePulse(pulse);
      this.pipeline.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }

  private syncViewport(): void {
    if (!IS_MOBILE || !this.running) return;
    const m = getViewportMetrics();
    if (
      m.width === this.lastVpW &&
      m.height === this.lastVpH &&
      m.scale === this.lastVpScale &&
      m.offsetTop === this.lastVpOffTop &&
      m.offsetLeft === this.lastVpOffLeft
    ) {
      return;
    }
    this.lastVpW = m.width;
    this.lastVpH = m.height;
    this.lastVpScale = m.scale;
    this.lastVpOffTop = m.offsetTop;
    this.lastVpOffLeft = m.offsetLeft;
    applyMobileViewportLock();
    this.renderer.setPixelRatio(getPixelRatio());
    this.renderer.setSize(m.width, m.height, false);
    this.camera.aspect = m.width / m.height;
    this.camera.updateProjectionMatrix();
  }

  resize(): void {
    let w: number;
    let h: number;
    if (IS_MOBILE) {
      const m = applyMobileViewportLock();
      w = m.width;
      h = m.height;
      this.lastVpW = w;
      this.lastVpH = h;
      this.lastVpScale = m.scale;
      this.canvas.style.width = `${w}px`;
      this.canvas.style.height = `${h}px`;
    } else {
      w = this.canvas.clientWidth || window.innerWidth;
      h = this.canvas.clientHeight || window.innerHeight;
    }
    if (w < 1 || h < 1) return;
    this.renderer.setPixelRatio(getPixelRatio());
    this.renderer.setSize(w, h, false);
    this.pipeline?.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.far = IS_MOBILE ? 150 : 180;
    this.camera.updateProjectionMatrix();
  }

  private cleanup(): void {
    for (const g of this.routeGates) disposeEntity(g.mesh, this.scene);
    for (const v of this.vaultGates) disposeEntity(v.mesh, this.scene);
    disposeRunners(this.runners, this.scene);
    disposeCoins(this.coins, this.scene);
    disposePickups(this.packagePickups, this.scene);
    disposePowerUps(this.powerUps, this.scene);
    disposeObstacles(this.obstacles, this.scene);
    this.throws = updateThrows(this.throws, 999, this.scene);
    if (this.dropoff) disposeEntity(this.dropoff.mesh, this.scene);
    this.particles.clear();
    this.routeGates = [];
    this.vaultGates = [];
    this.runners = [];
    this.coins = [];
    this.packagePickups = [];
    this.powerUps = [];
    this.obstacles = [];
    if (this.player) this.player.dispose(this.scene);
    if (this.convoy) this.convoy.dispose();
    if (this.ufoHazard) {
      this.ufoHazard.dispose();
      this.ufoHazard = null;
    }
  }

  dispose(): void {
    this.inputCleanup?.();
    this.inputCleanup = null;
    this.viewportCleanup?.();
    this.viewportCleanup = null;
    this.stop();
    this.cleanup();
    this.pipeline?.dispose();
    this.pipeline = null;
    this.renderer.dispose();
  }
}
