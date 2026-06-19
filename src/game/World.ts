import * as THREE from 'three';
import type { DistrictTheme } from '../types';
import { addMesh, mat, disposeObject3D } from './ModelUtils';
import { IS_MOBILE, WORLD_AHEAD, WORLD_BEHIND, SKY_RES, SKY_UPDATE_SEC, freezeStatic, lerpColor, skyNightLevel, nightEffectStrength, lightingNightBlend, gameplayNightVisibility } from './platform';
import { SkyEffects } from './SkyEffects';
import type { SpectacleKind } from './SpectacleDirector';
import { getBrickTexture, getSidingTexture, getRoofShingleTexture, getBarkTexture, getLeafTexture } from './WorldTextures';


function skyNightFromTime(time: number): number {
  return skyNightLevel(time);
}

type AnimProp = {
  obj: THREE.Object3D;
  worldZ: number;
  kind: 'bob' | 'spin' | 'flicker' | 'cloud';
  speed: number;
  baseY: number;
  phase: number;
  bulb?: THREE.Mesh;
  lightPool?: THREE.Mesh;
};

export type RoadFxInput = {
  turbo: boolean;
  speed: number;
  baseSpeed: number;
  playerX: number;
  shootPulse?: number;
  combatIntensity?: number;
};

type BoostPad = {
  group: THREE.Group;
  z: number;
  flash: number;
};

export class World {
  scene: THREE.Scene;
  private rootMeshes: THREE.Object3D[] = [];
  private animProps: AnimProp[] = [];
  private roadTexture!: THREE.CanvasTexture;
  private roadEmissiveTex: THREE.CanvasTexture | null = null;
  private roadGlowTex: THREE.CanvasTexture | null = null;
  private roadMesh: THREE.Mesh | null = null;
  private roadGlowMesh: THREE.Mesh | null = null;
  private roadStreakTex: THREE.CanvasTexture | null = null;
  private roadStreakMesh: THREE.Mesh | null = null;
  private roadRainTex: THREE.CanvasTexture | null = null;
  private roadRainMesh: THREE.Mesh | null = null;
  private boostPads: BoostPad[] = [];
  private roadAccent = { primary: '#FFE082', secondary: '#FFF8E1', edge: '#FFFFFF' };
  private roadFx: RoadFxInput = { turbo: false, speed: 16, baseSpeed: 16, playerX: 0 };
  private wetFactor = 0;
  private districtId = 1;
  private lightPoolTexture: THREE.CanvasTexture | null = null;
  private skyTexture: THREE.CanvasTexture | null = null;
  private skyCanvas: HTMLCanvasElement | null = null;
  private skyTheme!: DistrictTheme;
  private hemiLight!: THREE.HemisphereLight;
  private ambientLight!: THREE.AmbientLight;
  private sunLight!: THREE.DirectionalLight;
  private fillLight!: THREE.DirectionalLight;
  private rimLight!: THREE.DirectionalLight;
  private accentLight: THREE.PointLight | null = null;
  private roadNightLight: THREE.PointLight | null = null;
  private roadFillLight: THREE.PointLight | null = null;
  private gameplayRimLight: THREE.DirectionalLight | null = null;
  private skyPhase = -1;
  private skyTick = 0;
  private skyNight = 0;
  private skyNightFx = 0;
  private blackoutBoost = 0;
  private playerZ = 0;
  private cullTimer = 0;
  private skyEffects: SkyEffects | null = null;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
  }

  build(theme: DistrictTheme, levelLength: number): void {
    this.clear();

    this.skyTheme = theme;
    this.districtId = theme.id;
    this.setupLighting(theme, levelLength);
    this.buildSky(theme);
    const fogDensity = (IS_MOBILE ? 0.007 : 0.009) * (200 / theme.fogFar);
    this.scene.fog = new THREE.FogExp2(theme.fog, fogDensity);

    // Grass field
    const grassTex = this.makeGrassTexture(theme);
    grassTex.wrapS = grassTex.wrapT = THREE.RepeatWrapping;
    grassTex.repeat.set(6, (levelLength + 140) / 10);
    const grassColor = new THREE.Color(theme.ground).multiplyScalar(IS_MOBILE ? 0.62 : 0.68);
    const grass = addMesh(
      this.scene,
      new THREE.PlaneGeometry(50, levelLength + 140),
      new THREE.MeshStandardMaterial({ map: grassTex, color: grassColor, roughness: 1 }),
      0,
      0,
      levelLength / 2,
      false
    );
    grass.rotation.x = -Math.PI / 2;
    grass.position.y = -0.02;
    grass.receiveShadow = !IS_MOBILE;
    grass.userData.isTerrain = true;
    this.rootMeshes.push(grass);

    // Sidewalks
    const walkTex = this.makeSidewalkTexture();
    walkTex.wrapS = walkTex.wrapT = THREE.RepeatWrapping;
    walkTex.repeat.set(2, (levelLength + 140) / 6);
    for (const x of [-5.2, 5.2]) {
      const walk = addMesh(
        this.scene,
        new THREE.PlaneGeometry(3.5, levelLength + 140),
        new THREE.MeshStandardMaterial({ map: walkTex, color: '#8a959e', roughness: 0.96 }),
        x,
        0,
        levelLength / 2,
        false
      );
      walk.rotation.x = -Math.PI / 2;
      walk.position.y = 0.015;
      walk.receiveShadow = !IS_MOBILE;
      walk.userData.isTerrain = true;
      this.rootMeshes.push(walk);
    }

    // Textured road with night-reflective lane markings + bloom glow overlay
    this.roadAccent = this.roadAccentForTheme(theme);
    const roadMaps = this.makeRoadTextures(theme);
    this.roadTexture = roadMaps.color;
    this.roadEmissiveTex = roadMaps.emissive;
    this.roadGlowTex = roadMaps.glow;
    const roadRepeatY = (levelLength + 140) / 8;
    for (const tex of [this.roadTexture, this.roadEmissiveTex, this.roadGlowTex]) {
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(1, roadRepeatY);
    }
    const road = addMesh(
      this.scene,
      new THREE.PlaneGeometry(9.5, levelLength + 140),
      new THREE.MeshStandardMaterial({
        map: this.roadTexture,
        emissiveMap: this.roadEmissiveTex,
        emissive: this.roadAccent.primary,
        emissiveIntensity: IS_MOBILE ? 0.18 : 0.14,
        color: IS_MOBILE ? '#e8edf2' : '#dfe6ec',
        roughness: 0.68,
        metalness: 0.14,
        envMapIntensity: 0.45,
      }),
      0,
      0,
      levelLength / 2,
      false
    );
    road.rotation.x = -Math.PI / 2;
    road.position.y = 0.025;
    road.receiveShadow = !IS_MOBILE;
    road.userData.isTerrain = true;
    this.roadMesh = road;
    this.rootMeshes.push(road);

    const roadGlow = addMesh(
      this.scene,
      new THREE.PlaneGeometry(9.5, levelLength + 140),
      new THREE.MeshBasicMaterial({
        map: this.roadGlowTex,
        color: this.roadAccent.primary,
        transparent: true,
        opacity: IS_MOBILE ? 0.26 : 0.32,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
      0,
      0.032,
      levelLength / 2,
      false
    );
    roadGlow.rotation.x = -Math.PI / 2;
    roadGlow.userData.isTerrain = true;
    this.roadGlowMesh = roadGlow;
    this.rootMeshes.push(roadGlow);

    const streakTex = this.getRoadStreakTexture();
    const roadStreak = addMesh(
      this.scene,
      new THREE.PlaneGeometry(9.5, levelLength + 140),
      new THREE.MeshBasicMaterial({
        map: streakTex,
        color: this.roadAccent.secondary,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
      0,
      0.033,
      levelLength / 2,
      false
    );
    roadStreak.rotation.x = -Math.PI / 2;
    roadStreak.userData.isTerrain = true;
    this.roadStreakTex = streakTex;
    this.roadStreakMesh = roadStreak;
    this.rootMeshes.push(roadStreak);

    const rainTex = this.getRoadRainTexture();
    const roadRain = addMesh(
      this.scene,
      new THREE.PlaneGeometry(9.8, levelLength + 140),
      new THREE.MeshBasicMaterial({
        map: rainTex,
        color: '#B3E5FC',
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
      0,
      0.034,
      levelLength / 2,
      false
    );
    roadRain.rotation.x = -Math.PI / 2;
    roadRain.userData.isTerrain = true;
    this.roadRainTex = rainTex;
    this.roadRainMesh = roadRain;
    this.rootMeshes.push(roadRain);

    this.placeBoostPads(theme, levelLength);

    const curbTex = this.makeCurbTexture();
    curbTex.wrapS = curbTex.wrapT = THREE.RepeatWrapping;
    curbTex.repeat.set(1, (levelLength + 140) / 4);
    for (const x of [-3.4, 3.4]) {
      const curb = addMesh(
        this.scene,
        new THREE.BoxGeometry(0.35, 0.18, levelLength + 140),
        new THREE.MeshStandardMaterial({ map: curbTex, color: '#ECEFF1', roughness: 0.82, metalness: 0.12, emissive: '#FFFFFF', emissiveIntensity: 0.04 }),
        x,
        0.09,
        levelLength / 2,
        false
      );
      addMesh(
        curb,
        new THREE.BoxGeometry(0.06, 0.04, levelLength + 140),
        mat('#B0BEC5', { roughness: 0.85 }),
        x > 0 ? -0.14 : 0.14,
        0.1,
        0,
        false
      );
      addMesh(
        curb,
        new THREE.BoxGeometry(0.05, 0.19, levelLength + 140),
        mat('#FFD54F', { emissive: '#FFC107', emissiveIntensity: 0.22 }),
        x > 0 ? -0.17 : 0.17,
        0,
        0,
        false
      );
      curb.userData.isTerrain = true;
      this.rootMeshes.push(curb);
    }

    this.placeStreetLights(theme, levelLength);

    // Sidewalk tile accents (desktop only — skip mesh churn on mobile)
    if (!IS_MOBILE) {
      for (let z = 30; z < levelLength; z += 28) {
        for (const x of [-5.2, 5.2]) {
          const tile = addMesh(
            this.scene,
            new THREE.PlaneGeometry(3.2, 1.2),
            mat('#90A4AE', { roughness: 0.9 }),
            x,
            0.018,
            z,
            false
          );
          tile.rotation.x = -Math.PI / 2;
          tile.userData.isTerrain = true;
          this.rootMeshes.push(tile);
        }
      }
    }

    const rng = seededRandom(theme.id * 1337 + levelLength);

    if (this.skyEffects) this.skyEffects.dispose();
    this.skyEffects = new SkyEffects(this.scene);
    this.skyEffects.build(levelLength, rng);

    // Clouds
    const cloudCount = IS_MOBILE ? 3 : 5;
    for (let i = 0; i < cloudCount; i++) {
      const cloud = this.makeCloud(rng);
      const cz = rng() * (levelLength + 60);
      cloud.position.set((rng() - 0.5) * 40, 18 + rng() * 14, cz);
      this.scene.add(cloud);
      this.rootMeshes.push(cloud);
      this.animProps.push({ obj: cloud, worldZ: cz, kind: 'cloud', speed: 0.15 + rng() * 0.2, baseY: cloud.position.y, phase: rng() * 10 });
    }

    // Buildings, props, alien crash sites
    const propStep = IS_MOBILE ? 22 : 26;
    const propJitter = IS_MOBILE ? 5 : 9;
    const buildingSlots: { side: number; z: number }[] = [];
    for (let z = 0; z < levelLength + 50; z += propStep + Math.floor(rng() * propJitter)) {
      for (const side of [-1, 1]) {
        const roll = rng();
        const placeBuilding = roll > (IS_MOBILE ? 0.22 : 0.2);
        if (placeBuilding) {
          const building = this.makeBuilding(theme, rng, side);
          const bz = z + rng() * 5;
          building.position.set(side * (8 + rng() * 5), 0, bz);
          freezeStatic(building);
          this.scene.add(building);
          this.rootMeshes.push(building);
          buildingSlots.push({ side, z: bz });
        } else if (theme.id <= 2 && rng() > 0.32) {
          const tree = this.makeTree(rng);
          tree.position.set(side * (13 + rng() * 3.5), 0, z + rng() * 4);
          freezeStatic(tree);
          this.scene.add(tree);
          this.rootMeshes.push(tree);
        } else if (theme.id === 3 && rng() > 0.38) {
          const cactus = this.makeCactus(rng);
          cactus.position.set(side * (12 + rng() * 4), 0, z + rng() * 4);
          freezeStatic(cactus);
          this.scene.add(cactus);
          this.rootMeshes.push(cactus);
        } else if (theme.id === 4 && rng() > 0.28) {
          const palm = this.makePalmTree(rng);
          palm.position.set(side * (12 + rng() * 4), 0, z + rng() * 4);
          freezeStatic(palm);
          this.scene.add(palm);
          this.rootMeshes.push(palm);
        }
        if (rng() > (IS_MOBILE ? 0.82 : 0.68)) {
          const prop = this.makeMailbox();
          const pz = z + rng() * 3;
          prop.position.set(side * (6.4 + rng() * 0.8), 0, pz);
          freezeStatic(prop);
          this.scene.add(prop);
          this.rootMeshes.push(prop);
        }
        if (!IS_MOBILE && rng() > 0.88) {
          const crash = this.makeAlienCrash();
          crash.position.set(side * (7 + rng() * 2), 0, z);
          freezeStatic(crash);
          this.scene.add(crash);
          this.rootMeshes.push(crash);
          this.animProps.push({ obj: crash.children[1] as THREE.Mesh, worldZ: z, kind: 'bob', speed: 2, baseY: 0.12, phase: rng() * 5 });
        }
      }
    }

    // Extra tree belt — fills suburban gaps without overlapping houses
    if (theme.id <= 2) {
      const treeStep = IS_MOBILE ? 14 : 11;
      for (let z = 24; z < levelLength + 40; z += treeStep + Math.floor(rng() * 5)) {
        for (const side of [-1, 1]) {
          const nearHouse = buildingSlots.some((b) => b.side === side && Math.abs(b.z - z) < 8);
          if (nearHouse || rng() > 0.58) continue;
          const tree = this.makeTree(rng);
          tree.position.set(side * (12.5 + rng() * 4), 0, z + rng() * 3);
          freezeStatic(tree);
          this.scene.add(tree);
          this.rootMeshes.push(tree);
        }
      }
    } else if (theme.id === 3) {
      for (let z = 20; z < levelLength + 40; z += 16 + Math.floor(rng() * 8)) {
        for (const side of [-1, 1]) {
          if (rng() > 0.45) continue;
          const cactus = this.makeCactus(rng);
          cactus.position.set(side * (11 + rng() * 5), 0, z + rng() * 3);
          freezeStatic(cactus);
          this.scene.add(cactus);
          this.rootMeshes.push(cactus);
        }
        if (rng() > 0.7) {
          const rock = this.makeDesertRock(rng);
          rock.position.set((rng() > 0.5 ? 1 : -1) * (10 + rng() * 6), 0, z);
          freezeStatic(rock);
          this.scene.add(rock);
          this.rootMeshes.push(rock);
        }
      }
    } else if (theme.id === 4) {
      const treeStep = IS_MOBILE ? 12 : 9;
      for (let z = 20; z < levelLength + 40; z += treeStep + Math.floor(rng() * 4)) {
        for (const side of [-1, 1]) {
          const nearHouse = buildingSlots.some((b) => b.side === side && Math.abs(b.z - z) < 7);
          if (nearHouse || rng() > 0.35) continue;
          const palm = this.makePalmTree(rng);
          palm.position.set(side * (11.5 + rng() * 4.5), 0, z + rng() * 3);
          freezeStatic(palm);
          this.scene.add(palm);
          this.rootMeshes.push(palm);
        }
      }
    }

    // Start / finish arches
    this.addMilestoneArch(8, '#66BB6A', 'START');
    this.addMilestoneArch(levelLength - 5, '#FFD54F', 'ZONE');
  }

  private buildSky(theme: DistrictTheme): void {
    this.skyCanvas = document.createElement('canvas');
    this.skyCanvas.width = SKY_RES;
    this.skyCanvas.height = SKY_RES;
    this.skyTexture = new THREE.CanvasTexture(this.skyCanvas);
    this.skyTexture.colorSpace = THREE.SRGBColorSpace;
    this.scene.background = this.skyTexture;
    const night = skyNightFromTime(0);
    this.skyNight = night;
    this.skyNightFx = nightEffectStrength(night);
    this.paintSky(night, theme);
    this.applySkyLighting(night);
    this.skyEffects?.setNight(night);
  }

  private drawSkyCloud(ctx: CanvasRenderingContext2D, x: number, y: number, scale: number, alpha: number): void {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = '#ffffff';
    const r = 28 * scale;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.arc(x + r * 0.9, y - r * 0.15, r * 0.82, 0, Math.PI * 2);
    ctx.arc(x + r * 1.75, y + r * 0.05, r * 0.7, 0, Math.PI * 2);
    ctx.arc(x - r * 0.75, y + r * 0.08, r * 0.65, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  private drawAurora(ctx: CanvasRenderingContext2D, w: number, h: number, alpha: number): void {
    if (alpha <= 0) return;
    ctx.save();
    ctx.globalAlpha = alpha;
    for (let band = 0; band < 3; band++) {
      ctx.beginPath();
      for (let x = 0; x <= w; x += 8) {
        const y = h * (0.18 + band * 0.08) + Math.sin(x * 0.02 + band * 2) * 22 + Math.cos(x * 0.008) * 14;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.lineTo(w, h * 0.55);
      ctx.lineTo(0, h * 0.55);
      ctx.closePath();
      const g = ctx.createLinearGradient(0, 0, w, h * 0.5);
      g.addColorStop(0, band === 0 ? 'rgba(0,230,118,0)' : band === 1 ? 'rgba(0,229,255,0)' : 'rgba(224,64,251,0)');
      g.addColorStop(0.5, band === 0 ? 'rgba(0,230,118,0.35)' : band === 1 ? 'rgba(0,229,255,0.28)' : 'rgba(224,64,251,0.22)');
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fill();
    }
    ctx.restore();
  }

  private paintSky(night: number, theme: DistrictTheme): void {
    if (!this.skyCanvas) return;
    const ctx = this.skyCanvas.getContext('2d')!;
    const w = this.skyCanvas.width;
    const h = this.skyCanvas.height;

    const dayTop = lerpColor(theme.sky, '#64B5F6', 0.4);
    const dayMid = lerpColor(theme.skyBottom, '#BBDEFB', 0.45);
    const dayHorizon = lerpColor('#FFECB3', theme.fog, 0.25);
    const dayGlow = lerpColor('#E3F2FD', theme.ground, 0.2);

    const top = lerpColor(dayTop, '#0a0520', night);
    const mid = lerpColor(dayMid, '#1a1040', night);
    const horizon = lerpColor(dayHorizon, '#120820', night);
    const glow = lerpColor(dayGlow, '#050510', night);

    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, top);
    grad.addColorStop(0.28, mid);
    grad.addColorStop(0.55, horizon);
    grad.addColorStop(0.78, glow);
    grad.addColorStop(1, lerpColor(theme.fog, '#0a0a12', night));
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    if (night > 0.22 && night < 0.72) {
      const dusk = Math.sin(((night - 0.22) / 0.5) * Math.PI) * 0.85;
      const duskGrad = ctx.createLinearGradient(0, h * 0.45, 0, h);
      duskGrad.addColorStop(0, 'rgba(255,120,60,0)');
      duskGrad.addColorStop(0.45, `rgba(255,140,80,${0.35 * dusk})`);
      duskGrad.addColorStop(0.75, `rgba(255,87,34,${0.25 * dusk})`);
      duskGrad.addColorStop(1, 'rgba(80,20,60,0)');
      ctx.fillStyle = duskGrad;
      ctx.fillRect(0, 0, w, h);
    }

    if (night > 0.55) {
      this.drawAurora(ctx, w, h, Math.min(1, (night - 0.55) * 1.8));
      const milky = ctx.createLinearGradient(w * 0.2, 0, w * 0.8, h);
      milky.addColorStop(0, 'rgba(255,255,255,0)');
      milky.addColorStop(0.45, `rgba(200,210,255,${0.08 * night})`);
      milky.addColorStop(0.55, `rgba(255,255,255,${0.12 * night})`);
      milky.addColorStop(0.65, `rgba(200,210,255,${0.08 * night})`);
      milky.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = milky;
      ctx.fillRect(0, 0, w, h);
    }

    if (night < 0.75) {
      const sunAlpha = Math.max(0, 1 - Math.max(0, night - 0.15) * 1.25);
      const sunX = w * (0.62 + night * 0.12);
      const sunY = h * (0.28 + night * 0.12);
      const sunGrad = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, 140);
      sunGrad.addColorStop(0, `rgba(255,255,240,${0.98 * sunAlpha})`);
      sunGrad.addColorStop(0.2, `rgba(255,240,160,${0.7 * sunAlpha})`);
      sunGrad.addColorStop(0.45, `rgba(255,200,100,${0.35 * sunAlpha})`);
      sunGrad.addColorStop(1, 'rgba(255,200,80,0)');
      ctx.fillStyle = sunGrad;
      ctx.fillRect(0, 0, w, h);
    }

    if (night > 0.48) {
      const moonAlpha = Math.min(1, (night - 0.48) * 1.6);
      const moonX = w * 0.78;
      const moonY = h * 0.22;
      ctx.fillStyle = `rgba(240,240,255,${0.9 * moonAlpha})`;
      ctx.beginPath();
      ctx.arc(moonX, moonY, 26, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = `rgba(10,5,32,${0.85 * moonAlpha})`;
      ctx.beginPath();
      ctx.arc(moonX + 10, moonY - 6, 22, 0, Math.PI * 2);
      ctx.fill();
    }

    if (night < 0.45) {
      const cloudAlpha = 0.6 * (1 - night * 1.35);
      const clouds: [number, number, number][] = [
        [0.12, 0.28, 1.1],
        [0.42, 0.22, 0.95],
        [0.68, 0.31, 1.25],
        [0.86, 0.24, 0.85],
        [0.28, 0.38, 0.75],
        [0.55, 0.42, 0.9],
      ];
      for (const [nx, ny, sc] of clouds) {
        this.drawSkyCloud(ctx, nx * w, ny * h, sc, cloudAlpha);
      }
    }

    if (night > 0.42) {
      const starAlpha = Math.min(1, (night - 0.42) * 1.45);
      const starCount = IS_MOBILE ? 50 : 65;
      for (let i = 0; i < starCount; i++) {
        const sx = ((i * 97) % 1000) / 1000;
        const sy = ((i * 53) % 720) / 1000;
        const twinkle = 0.45 + ((i * 17) % 10) / 18;
        ctx.fillStyle = `rgba(255,255,255,${starAlpha * twinkle})`;
        const r = i % 7 === 0 ? 2.2 : i % 4 === 0 ? 1.5 : 0.9;
        ctx.beginPath();
        ctx.arc(sx * w, sy * h * 0.62, r, 0, Math.PI * 2);
        ctx.fill();
        if (i % 11 === 0 && starAlpha > 0.5) {
          ctx.strokeStyle = `rgba(180,220,255,${starAlpha * 0.35})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(sx * w - 4, sy * h * 0.62);
          ctx.lineTo(sx * w + 4, sy * h * 0.62);
          ctx.moveTo(sx * w, sy * h * 0.62 - 4);
          ctx.lineTo(sx * w, sy * h * 0.62 + 4);
          ctx.stroke();
        }
      }
    }

    this.skyEffects?.setNight(night);

    if (this.skyTexture) this.skyTexture.needsUpdate = true;
  }

  /** Smooth lighting every frame — independent of canvas repaint rate. */
  private applySkyLighting(night: number): void {
    const theme = this.skyTheme;
    const fx = nightEffectStrength(night);
    let lightNight = lightingNightBlend(night);
    if (IS_MOBILE) lightNight *= 0.72;
    const mobileLift = IS_MOBILE ? 1.32 : 1.12;
    const fogColor = lerpColor(theme.fog, theme.id >= 6 ? '#120828' : '#050510', lightNight);
    if (this.scene.fog instanceof THREE.FogExp2) {
      this.scene.fog.color.set(fogColor);
    }

    const daySky = new THREE.Color(theme.sky);
    const nightSky = new THREE.Color(theme.id >= 6 ? '#1a0a40' : '#223355');
    const hemiSky = daySky.clone().lerp(nightSky, lightNight);
    const dayGround = new THREE.Color(theme.ground);
    const nightGround = new THREE.Color('#0a0a14');
    const hemiGround = dayGround.clone().lerp(nightGround, lightNight * 0.85);

    if (this.hemiLight) {
      this.hemiLight.color.copy(hemiSky);
      this.hemiLight.groundColor.copy(hemiGround);
      this.hemiLight.intensity = theme.ambient * 0.92 * (1 - lightNight * 0.38) * mobileLift;
    }
    if (this.ambientLight) {
      const amb = new THREE.Color('#ffffff').lerp(new THREE.Color('#8899cc'), lightNight * 0.55);
      this.ambientLight.color.copy(amb);
      const vis = gameplayNightVisibility(night);
      this.ambientLight.intensity =
        (theme.ambient * 0.42 * (1 - lightNight * 0.35) + vis * 0.24) * mobileLift + (IS_MOBILE ? 0.18 : 0.12);
    }
    if (this.sunLight) {
      const sunDay = new THREE.Color(theme.id >= 3 ? '#FFF4E0' : '#FFFBF5');
      const sunNight = new THREE.Color('#6688bb');
      this.sunLight.color.copy(sunDay.lerp(sunNight, lightNight));
      this.sunLight.intensity = theme.sun * 1.05 * (1 - lightNight * 0.48) * mobileLift;
    }
    if (this.fillLight) {
      const fillDay = new THREE.Color(theme.skyBottom || theme.sky);
      const fillNight = new THREE.Color(theme.id >= 4 ? '#004D40' : '#1a237e');
      this.fillLight.color.copy(fillDay.lerp(fillNight, lightNight * 0.75));
      this.fillLight.intensity = theme.ambient * 0.32 * (0.55 + lightNight * 0.45) * mobileLift;
    }
    if (this.rimLight) {
      this.rimLight.intensity = 0.22 + (1 - lightNight) * 0.32;
      this.rimLight.color.set(lerpColor('#FFF8E8', '#80DEEA', fx * 0.85));
    }
    if (this.gameplayRimLight) {
      this.gameplayRimLight.intensity = 0.28 + (1 - lightNight) * 0.38;
    }
    if (this.accentLight) {
      this.accentLight.intensity = (theme.id >= 6 ? 0.55 : 0.25) * (0.25 + fx * 0.95);
    }
    if (this.roadNightLight) {
      this.roadNightLight.intensity = fx * (IS_MOBILE ? 0.45 : 0.58);
      this.roadNightLight.color.set(lerpColor('#FFE082', '#FFF3E0', 1 - fx * 0.25));
    }
    if (this.roadFillLight) {
      const dayFill = IS_MOBILE ? 0.62 : 0.52;
      this.roadFillLight.intensity = dayFill * (1 - lightNight * 0.18) + fx * 0.12;
      this.roadFillLight.color.set(lerpColor('#FFFBF5', '#E8F4FF', lightNight * 0.35));
    }
    if (this.roadMesh) {
      const rm = this.roadMesh.material as THREE.MeshStandardMaterial;
      const dayPop = (IS_MOBILE ? 0.12 : 0.08) + (1 - lightNight) * (IS_MOBILE ? 0.14 : 0.1);
      rm.emissiveIntensity = dayPop + fx * (IS_MOBILE ? 0.32 : 0.55);
      rm.emissive.set(this.roadAccent.primary).lerp(new THREE.Color(this.roadAccent.secondary), fx * 0.35);
      rm.roughness = 0.82 - lightNight * 0.1 - fx * 0.08;
      rm.metalness = 0.06 + fx * 0.14;
      const roadDay = IS_MOBILE ? '#e8edf2' : '#dfe6ec';
      const roadNight = IS_MOBILE ? '#c8d2dc' : '#b0bcc8';
      rm.color.set(roadDay).lerp(new THREE.Color(roadNight), lightNight * (IS_MOBILE ? 0.15 : 0.22));
    }
    if (this.roadGlowMesh) {
      const gm = this.roadGlowMesh.material as THREE.MeshBasicMaterial;
      const base = IS_MOBILE ? 0.16 : 0.24;
      gm.opacity = fx > 0.04 ? base + fx * (IS_MOBILE ? 0.42 : 0.58) : 0;
      gm.color.set(this.roadAccent.primary).lerp(new THREE.Color(this.roadAccent.secondary), fx * 0.25);
      this.roadGlowMesh.visible = fx > 0.04;
    }
  }

  private roadAccentForTheme(theme: DistrictTheme): { primary: string; secondary: string; edge: string } {
    if (theme.id >= 6) return { primary: '#EA80FC', secondary: '#80DEEA', edge: '#E1BEE7' };
    if (theme.id >= 5) return { primary: '#FF7043', secondary: '#FFD54F', edge: '#FFCC80' };
    if (theme.id >= 4) return { primary: '#69F0AE', secondary: '#80DEEA', edge: '#B2FF59' };
    if (theme.id >= 3) return { primary: '#FFB74D', secondary: '#FFE082', edge: '#FFF8E1' };
    if (theme.id >= 2) return { primary: '#FFD54F', secondary: '#FFAB40', edge: '#FFFFFF' };
    return { primary: '#FFE082', secondary: '#FFF59D', edge: '#FFFFFF' };
  }

  private rainWetForDistrict(theme: DistrictTheme, night: number): number {
    if (theme.id === 5) return Math.min(1, 0.6 + night * 0.4);
    if (theme.id === 4) return Math.min(1, 0.38 + night * 0.55);
    if (theme.id === 3) return Math.min(1, 0.06 + night * 0.12);
    if (theme.id >= 6) return Math.min(1, 0.22 + night * 0.5);
    return Math.min(1, night * 0.58);
  }

  private drawDistrictRoadSurface(
    ctx: CanvasRenderingContext2D,
    em: CanvasRenderingContext2D,
    glow: CanvasRenderingContext2D,
    theme: DistrictTheme,
    size: number,
    accent: { primary: string; secondary: string; edge: string }
  ): void {
    const id = theme.id;
    const centerX = size / 2;

    const fillAsphalt = (c0: string, c1: string, c2: string) => {
      const g = ctx.createLinearGradient(0, 0, size, 0);
      g.addColorStop(0, c0);
      g.addColorStop(0.5, c1);
      g.addColorStop(1, c2);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, size, size);
    };

    if (id === 2) {
      ctx.fillStyle = '#5D4037';
      ctx.fillRect(0, 0, size * 0.2, size);
      ctx.fillRect(size * 0.8, 0, size * 0.2, size);
      for (let y = 0; y < size; y += 10) {
        for (let bx = 0; bx < 2; bx++) {
          const ox = bx === 0 ? 0 : size * 0.8;
          for (let x = 0; x < size * 0.2; x += 10) {
            ctx.fillStyle = (x + y + bx) % 20 === 0 ? '#6D4C41' : '#A1887F';
            ctx.fillRect(ox + x, y, 10, 10);
          }
        }
      }
      const mid = ctx.createLinearGradient(size * 0.2, 0, size * 0.8, 0);
      mid.addColorStop(0, '#4a5560');
      mid.addColorStop(0.5, '#6a7884');
      mid.addColorStop(1, '#4a5560');
      ctx.fillStyle = mid;
      ctx.fillRect(size * 0.2, 0, size * 0.6, size);
    } else if (id === 3) {
      fillAsphalt('#C4A574', '#4a4035', '#C4A574');
      ctx.fillStyle = 'rgba(212,165,116,0.55)';
      ctx.fillRect(0, 0, size * 0.16, size);
      ctx.fillRect(size * 0.84, 0, size * 0.16, size);
      for (let i = 0; i < 12; i++) {
        const sx = (i % 2 === 0 ? 0 : size * 0.84) + (i % 3) * 8;
        const sy = (i * 37) % (size - 30);
        ctx.fillStyle = 'rgba(255,224,178,0.35)';
        ctx.beginPath();
        ctx.ellipse(sx + 12, sy, 18, 8, 0.2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.strokeStyle = 'rgba(62,47,35,0.35)';
      for (let i = 0; i < 8; i++) {
        const cx = size * 0.3 + (i * 29) % (size * 0.4);
        const cy = (i * 53) % size;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + 12, cy + 8);
        ctx.stroke();
      }
    } else if (id === 4) {
      fillAsphalt('#1a2820', '#243830', '#1a2820');
      ctx.fillStyle = 'rgba(46,125,50,0.35)';
      ctx.fillRect(0, 0, size * 0.14, size);
      ctx.fillRect(size * 0.86, 0, size * 0.14, size);
      for (let i = 0; i < 40; i++) {
        ctx.fillStyle = `rgba(${80 + (i % 3) * 30},${120 + (i % 4) * 20},70,0.2)`;
        ctx.fillRect((i * 19) % size, (i * 31) % size, 3, 2);
      }
      const wet = ctx.createLinearGradient(centerX - size * 0.1, 0, centerX + size * 0.1, 0);
      wet.addColorStop(0, 'rgba(0,0,0,0)');
      wet.addColorStop(0.5, 'rgba(80,160,140,0.14)');
      wet.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = wet;
      ctx.fillRect(0, 0, size, size);
    } else if (id === 5) {
      fillAsphalt('#2a3036', '#3d454c', '#2a3036');
      for (let i = 0; i < 6; i++) {
        const gx = size * 0.25 + (i * 41) % (size * 0.5);
        const gy = (i * 67) % (size - 40);
        ctx.fillStyle = '#546E7A';
        ctx.fillRect(gx, gy, 28, 22);
        ctx.strokeStyle = 'rgba(255,255,255,0.12)';
        for (let d = 0; d < 4; d++) {
          ctx.beginPath();
          ctx.moveTo(gx + d * 7, gy);
          ctx.lineTo(gx + d * 7 + 14, gy + 22);
          ctx.stroke();
        }
      }
      ctx.fillStyle = 'rgba(20,20,25,0.2)';
      for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.ellipse((i * 43) % size, (i * 61) % size, 10, 6, 0, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (id >= 6) {
      fillAsphalt('#14101f', '#1e1830', '#14101f');
      ctx.strokeStyle = accent.primary;
      ctx.globalAlpha = 0.2;
      ctx.lineWidth = 1;
      for (let x = 0; x < size; x += 16) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, size);
        ctx.stroke();
      }
      for (let y = 0; y < size; y += 16) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(size, y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      glow.fillStyle = accent.primary;
      glow.globalAlpha = 0.08;
      for (let x = 0; x < size; x += 16) {
        glow.fillRect(x, 0, 1, size);
        glow.fillRect(0, x, size, 1);
      }
      glow.globalAlpha = 1;
      if (id >= 7) {
        ctx.strokeStyle = 'rgba(229,57,53,0.25)';
        for (let i = 0; i < 6; i++) {
          const cx = size * 0.35 + (i * 37) % (size * 0.3);
          const cy = (i * 71) % size;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(cx + 20, cy + 6);
          ctx.stroke();
        }
      }
    } else {
      fillAsphalt('#3a4550', '#5c6a78', '#3a4550');
      if (id === 1) {
        ctx.fillStyle = 'rgba(180,200,160,0.06)';
        ctx.fillRect(0, 0, size * 0.12, size);
        ctx.fillRect(size * 0.88, 0, size * 0.12, size);
      }
    }

    const wetCenter = glow.createLinearGradient(centerX - size * 0.1, 0, centerX + size * 0.1, 0);
    wetCenter.addColorStop(0, 'rgba(0,0,0,0)');
    wetCenter.addColorStop(0.5, 'rgba(120,180,220,0.1)');
    wetCenter.addColorStop(1, 'rgba(0,0,0,0)');
    glow.fillStyle = wetCenter;
    glow.fillRect(centerX - size * 0.12, 0, size * 0.24, size);
  }

  private getRoadStreakTexture(): THREE.CanvasTexture {
    if (this.roadStreakTex) return this.roadStreakTex;
    const c = document.createElement('canvas');
    c.width = 128;
    c.height = 128;
    const ctx = c.getContext('2d')!;
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, 128, 128);
    // Vertical edge wisps only — keeps the center play lane clear for hazards
    for (const side of [0, 1]) {
      for (let i = 0; i < 14; i++) {
        const x = side === 0 ? 6 + (i % 4) * 5 : 122 - (i % 4) * 5;
        const y = (i * 23) % 110;
        const h = 18 + (i % 4) * 10;
        const g = ctx.createLinearGradient(x, y, x, y + h);
        g.addColorStop(0, 'rgba(255,255,255,0)');
        g.addColorStop(0.4, `rgba(255,255,255,${0.06 + (i % 3) * 0.02})`);
        g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = g;
        ctx.fillRect(x - 1, y, 2, h);
      }
    }
    this.roadStreakTex = new THREE.CanvasTexture(c);
    this.roadStreakTex.colorSpace = THREE.SRGBColorSpace;
    this.roadStreakTex.wrapS = this.roadStreakTex.wrapT = THREE.RepeatWrapping;
    return this.roadStreakTex;
  }

  private getRoadRainTexture(): THREE.CanvasTexture {
    if (this.roadRainTex) return this.roadRainTex;
    const c = document.createElement('canvas');
    c.width = 128;
    c.height = 128;
    const ctx = c.getContext('2d')!;
    ctx.strokeStyle = 'rgba(180,220,255,0.22)';
    ctx.lineWidth = 1.2;
    for (let i = 0; i < 48; i++) {
      const x = (i * 23) % 128;
      const y = (i * 41) % 128;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - 6, y + 14);
      ctx.stroke();
    }
    ctx.fillStyle = 'rgba(150,200,255,0.06)';
    for (let i = 0; i < 20; i++) {
      ctx.fillRect((i * 31) % 120, (i * 47) % 120, 2, 8);
    }
    this.roadRainTex = new THREE.CanvasTexture(c);
    this.roadRainTex.colorSpace = THREE.SRGBColorSpace;
    this.roadRainTex.wrapS = this.roadRainTex.wrapT = THREE.RepeatWrapping;
    return this.roadRainTex;
  }

  private placeBoostPads(theme: DistrictTheme, levelLength: number): void {
    const accent = this.roadAccentForTheme(theme);
    const step = IS_MOBILE ? 58 : 46;
    for (let z = 52; z < levelLength - 24; z += step) {
      const group = new THREE.Group();
      group.position.set(0, 0, z);

      const ring = addMesh(
        group,
        new THREE.RingGeometry(0.75, 1.05, IS_MOBILE ? 20 : 28),
        new THREE.MeshBasicMaterial({
          color: accent.primary,
          transparent: true,
          opacity: 0.22,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          side: THREE.DoubleSide,
        }),
        0,
        0.034,
        0,
        false
      );
      ring.rotation.x = -Math.PI / 2;

      const core = addMesh(
        group,
        new THREE.CircleGeometry(0.72, IS_MOBILE ? 16 : 24),
        new THREE.MeshBasicMaterial({
          color: accent.secondary,
          transparent: true,
          opacity: 0.1,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
        0,
        0.035,
        0,
        false
      );
      core.rotation.x = -Math.PI / 2;

      for (let i = 0; i < 3; i++) {
        const arrow = addMesh(
          group,
          new THREE.PlaneGeometry(0.35, 0.22),
          new THREE.MeshBasicMaterial({
            color: accent.primary,
            transparent: true,
            opacity: 0.35,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            side: THREE.DoubleSide,
          }),
          0,
          0.036,
          -0.25 + i * 0.25,
          false
        );
        arrow.rotation.x = -Math.PI / 2;
        arrow.userData.isPadArrow = true;
      }

      freezeStatic(group);
      this.scene.add(group);
      this.rootMeshes.push(group);
      this.boostPads.push({ group, z, flash: 0 });
    }
  }

  getSkyNight(): number {
    return Math.min(1, this.skyNight + this.blackoutBoost);
  }

  /** Deep-night only — road neon, enemy glow, bloom boost. */
  getNightFx(): number {
    return Math.min(1, this.skyNightFx + this.blackoutBoost * 0.85);
  }

  /** Readability for hazards & aliens when sky is dark. */
  getGameplayNight(): number {
    return gameplayNightVisibility(Math.min(1, this.skyNight + this.blackoutBoost * 0.45));
  }

  setBlackout(boost: number): void {
    this.blackoutBoost = Math.max(0, Math.min(0.75, boost));
  }

  private updateSkyCycle(time: number, dt: number): void {
    const night = skyNightFromTime(time);
    this.skyNight = night;
    this.skyNightFx = nightEffectStrength(night);

    this.skyEffects?.setNight(night);
    this.applySkyLighting(night);

    this.skyTick += dt;
    if (this.skyTick < SKY_UPDATE_SEC) return;
    this.skyTick = 0;
    this.paintSky(night, this.skyTheme);
  }

  private makeRoadTextures(theme: DistrictTheme): {
    color: THREE.CanvasTexture;
    emissive: THREE.CanvasTexture;
    glow: THREE.CanvasTexture;
  } {
    const size = 256;
    const colorCanvas = document.createElement('canvas');
    colorCanvas.width = size;
    colorCanvas.height = size;
    const ctx = colorCanvas.getContext('2d')!;

    const emCanvas = document.createElement('canvas');
    emCanvas.width = size;
    emCanvas.height = size;
    const em = emCanvas.getContext('2d')!;
    em.fillStyle = '#000000';
    em.fillRect(0, 0, size, size);

    const glowCanvas = document.createElement('canvas');
    glowCanvas.width = size;
    glowCanvas.height = size;
    const glow = glowCanvas.getContext('2d')!;
    glow.fillStyle = '#000000';
    glow.fillRect(0, 0, size, size);

    const accent = this.roadAccentForTheme(theme);

    this.drawDistrictRoadSurface(ctx, em, glow, theme, size, accent);

    for (let i = 0; i < size * 2; i++) {
      const x = (i * 47) % size;
      const y = (i * 83) % size;
      const n = ((x * 17 + y * 31) % 100) / 100;
      ctx.fillStyle = n > 0.55 ? 'rgba(255,255,255,0.015)' : 'rgba(0,0,0,0.025)';
      ctx.fillRect(x, y, 1, 1);
    }

    ctx.fillStyle = 'rgba(0,0,0,0.11)';
    for (let i = 0; i < 18; i++) {
      const ox = (i * 37) % (size - 40);
      const oy = (i * 59) % (size - 30);
      ctx.beginPath();
      ctx.ellipse(ox + 20, oy + 15, 14 + (i % 5), 8 + (i % 4), i * 0.4, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.fillStyle = 'rgba(90,110,130,0.06)';
    for (let i = 0; i < 8; i++) {
      ctx.fillRect((i * 61) % (size - 50), (i * 73) % (size - 90), 36, 70 + (i % 3) * 20);
    }

    const edgeX = [Math.floor(size * 0.04), Math.floor(size * 0.92)];
    const laneXs = [size * 0.2, size * 0.4, size * 0.6, size * 0.8];

    const drawGlowLine = (
      target: CanvasRenderingContext2D,
      x: number,
      color: string,
      width: number,
      alpha: number,
      dashed?: number[]
    ) => {
      if (dashed) target.setLineDash(dashed);
      for (const w of [width * 2.2, width * 1.4, width]) {
        target.strokeStyle = color;
        target.globalAlpha = alpha * (w === width ? 1 : w === width * 1.4 ? 0.45 : 0.2);
        target.lineWidth = w;
        target.lineCap = 'round';
        target.beginPath();
        target.moveTo(x, 0);
        target.lineTo(x, size);
        target.stroke();
      }
      target.globalAlpha = 1;
      if (dashed) target.setLineDash([]);
    };

    ctx.strokeStyle = 'rgba(255,255,255,0.92)';
    ctx.lineWidth = Math.max(3, size / 64);
    ctx.beginPath();
    ctx.moveTo(edgeX[0], 0);
    ctx.lineTo(edgeX[0], size);
    ctx.stroke();
    drawGlowLine(em, edgeX[0], accent.edge, Math.max(3, size / 64), 0.95);
    drawGlowLine(glow, edgeX[0], '#ffffff', Math.max(5, size / 42), 0.35);
    ctx.beginPath();
    ctx.moveTo(edgeX[1], 0);
    ctx.lineTo(edgeX[1], size);
    ctx.stroke();
    drawGlowLine(em, edgeX[1], accent.edge, Math.max(3, size / 64), 0.95);
    drawGlowLine(glow, edgeX[1], '#ffffff', Math.max(5, size / 42), 0.35);

    ctx.strokeStyle = 'rgba(255,255,255,0.38)';
    ctx.lineWidth = Math.max(2, size / 88);
    ctx.setLineDash([size * 0.035, size * 0.038]);
    for (const lx of laneXs) {
      ctx.beginPath();
      ctx.moveTo(lx, 0);
      ctx.lineTo(lx, size);
      ctx.stroke();
      drawGlowLine(em, lx, 'rgba(255,255,255,0.55)', Math.max(2, size / 88), 0.55, [size * 0.035, size * 0.038]);
      drawGlowLine(glow, lx, accent.edge, Math.max(3, size / 72), 0.22, [size * 0.035, size * 0.038]);
    }
    ctx.setLineDash([]);

    for (let band = 0; band < 4; band++) {
      const by = band * (size / 4) + size / 16;
      for (const edge of edgeX) {
        const inward = edge < size / 2 ? 1 : -1;
        const baseX = edge + inward * Math.max(8, size / 28);
        ctx.fillStyle = 'rgba(255,255,255,0.72)';
        for (let s = 0; s < 4; s++) {
          const sy = by + s * (size * 0.055);
          const w = size * 0.022;
          const h = size * 0.055;
          const x = inward > 0 ? baseX : baseX - w;
          ctx.fillRect(x, sy, w, h);
          em.fillStyle = 'rgba(255,255,255,0.5)';
          em.fillRect(x - 1, sy - 1, w + 2, h + 2);
          glow.fillStyle = 'rgba(255,255,255,0.22)';
          glow.fillRect(x - 2, sy - 2, w + 4, h + 4);
        }
      }
    }

    ctx.fillStyle = 'rgba(255,213,79,0.42)';
    for (let i = 0; i < 16; i++) {
      ctx.fillRect(edgeX[0] + 4, (i * size) / 16 + 4, size * 0.012, size * 0.04);
      ctx.fillRect(edgeX[1] - 8, (i * size) / 16 + 10, size * 0.012, size * 0.04);
      em.fillStyle = 'rgba(255,193,7,0.65)';
      em.fillRect(edgeX[0] + 3, (i * size) / 16 + 3, size * 0.014, size * 0.044);
      em.fillRect(edgeX[1] - 9, (i * size) / 16 + 9, size * 0.014, size * 0.044);
    }

    for (let i = 0; i < 5; i++) {
      const mx = size * 0.25 + (i * size) / 5;
      const my = (i * 97) % (size - 40);
      ctx.fillStyle = '#1a2026';
      ctx.beginPath();
      ctx.arc(mx, my + 20, size * 0.035, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(100,120,140,0.35)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    const colorTex = new THREE.CanvasTexture(colorCanvas);
    colorTex.colorSpace = THREE.SRGBColorSpace;
    const emissiveTex = new THREE.CanvasTexture(emCanvas);
    emissiveTex.colorSpace = THREE.SRGBColorSpace;
    const glowTex = new THREE.CanvasTexture(glowCanvas);
    glowTex.colorSpace = THREE.SRGBColorSpace;
    return { color: colorTex, emissive: emissiveTex, glow: glowTex };
  }

  private makeCurbTexture(): THREE.CanvasTexture {
    const c = document.createElement('canvas');
    c.width = 64;
    c.height = 64;
    const ctx = c.getContext('2d')!;
    ctx.fillStyle = '#B0BEC5';
    ctx.fillRect(0, 0, 64, 64);
    ctx.fillStyle = 'rgba(255,255,255,0.12)';
    ctx.fillRect(0, 0, 64, 3);
    ctx.fillStyle = 'rgba(0,0,0,0.08)';
    for (let i = 0; i < 8; i++) {
      ctx.fillRect(0, i * 8 + 4, 64, 2);
    }
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    for (let i = 0; i < 12; i++) {
      ctx.fillRect((i * 11) % 58, (i * 17) % 58, 6, 4);
    }
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  private getLightPoolTexture(): THREE.CanvasTexture {
    if (this.lightPoolTexture) return this.lightPoolTexture;
    const c = document.createElement('canvas');
    c.width = 128;
    c.height = 128;
    const ctx = c.getContext('2d')!;
    const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, 'rgba(255, 224, 178, 0.9)');
    grad.addColorStop(0.25, 'rgba(255, 204, 128, 0.45)');
    grad.addColorStop(0.55, 'rgba(255, 183, 77, 0.12)');
    grad.addColorStop(1, 'rgba(255, 183, 77, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 128);
    this.lightPoolTexture = new THREE.CanvasTexture(c);
    this.lightPoolTexture.colorSpace = THREE.SRGBColorSpace;
    return this.lightPoolTexture;
  }

  private placeStreetLights(theme: DistrictTheme, levelLength: number): void {
    const step = IS_MOBILE ? 32 : 38;
    let side = 1;
    for (let z = 22; z < levelLength - 12; z += step) {
      const lamp = this.makeStreetLamp(theme);
      lamp.position.set(side * 4.18, 0, z);
      lamp.rotation.y = side > 0 ? 0 : Math.PI;
      freezeStatic(lamp);
      this.scene.add(lamp);
      this.rootMeshes.push(lamp);
      this.animProps.push({
        obj: lamp,
        worldZ: z,
        kind: 'flicker',
        speed: 2.2 + ((z * 17) % 80) / 40,
        baseY: 0,
        phase: z * 0.13,
        bulb: lamp.userData.flickerBulb as THREE.Mesh | undefined,
        lightPool: lamp.userData.lightPool as THREE.Mesh | undefined,
      });
      side *= -1;
    }
  }

  private makeGrassTexture(theme: DistrictTheme): THREE.CanvasTexture {
    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 256;
    const ctx = c.getContext('2d')!;
    ctx.fillStyle = theme.ground;
    ctx.fillRect(0, 0, 256, 256);
    for (let y = 0; y < 256; y += 2) {
      for (let x = 0; x < 256; x += 2) {
        const n = ((x * 13 + y * 7) % 100) / 100;
        ctx.fillStyle = n > 0.5 ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)';
        ctx.fillRect(x, y, 2, 2);
      }
    }
    for (let i = 0; i < 48; i++) {
      ctx.fillStyle = `rgba(0,0,0,${0.03 + (i % 4) * 0.015})`;
      ctx.beginPath();
      ctx.ellipse((i * 19) % 256, (i * 41) % 256, 6 + (i % 5), 4 + (i % 3), i * 0.3, 0, Math.PI * 2);
      ctx.fill();
    }
    for (let i = 0; i < 200; i++) {
      const x = (i * 37) % 256;
      const y = (i * 53) % 256;
      ctx.strokeStyle = i % 2 === 0 ? 'rgba(46,125,50,0.15)' : 'rgba(129,199,132,0.12)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + (i % 3) - 1, y - 3 - (i % 4));
      ctx.stroke();
    }
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  private makeSidewalkTexture(): THREE.CanvasTexture {
    const c = document.createElement('canvas');
    c.width = 128;
    c.height = 128;
    const ctx = c.getContext('2d')!;
    ctx.fillStyle = '#B0BEC5';
    ctx.fillRect(0, 0, 128, 128);
    ctx.strokeStyle = 'rgba(255,255,255,0.28)';
    ctx.lineWidth = 1;
    for (let y = 0; y < 128; y += 16) {
      for (let x = 0; x < 128; x += 16) {
        ctx.strokeRect(x + 0.5, y + 0.5, 15, 15);
        if ((x + y) % 32 === 0) {
          ctx.fillStyle = 'rgba(255,255,255,0.06)';
          ctx.fillRect(x + 2, y + 2, 12, 12);
        }
      }
    }
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    for (let i = 0; i < 14; i++) {
      ctx.fillRect((i * 19) % 118, (i * 27) % 118, 7, 5);
    }
    ctx.fillStyle = 'rgba(255,255,255,0.04)';
    ctx.fillRect(0, 0, 128, 2);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  private makeCloud(rng: () => number): THREE.Group {
    const g = new THREE.Group();
    const cloudMat = mat('#FFFFFF', { transparent: true, opacity: 0.92, roughness: 1 });
    const puffCount = IS_MOBILE ? 4 : 6;
    for (let i = 0; i < puffCount; i++) {
      const puff = addMesh(
        g,
        new THREE.SphereGeometry(1.1 + rng() * 1.4, 10, 8),
        cloudMat,
        (i - puffCount / 2) * 1.05,
        0.15 + rng() * 0.55,
        (rng() - 0.5) * 0.9,
        false
      );
      puff.scale.set(1, 0.5 + rng() * 0.15, 1);
    }
    addMesh(g, new THREE.SphereGeometry(1.8, 8, 8), mat('#FFFFFF', { transparent: true, opacity: 0.35 }), 0, -0.2, 0, false).scale.set(2.2, 0.3, 1.4);
    return g;
  }

  private addWindow(
    parent: THREE.Group,
    x: number,
    y: number,
    z: number,
    w: number,
    h: number,
    lit: boolean,
    theme: DistrictTheme
  ): void {
    const frame = mat('#ECEFF1', { roughness: 0.7 });
    const glass = mat(lit ? (theme.id >= 4 ? '#E1BEE7' : '#FFF9C4') : '#546E7A', {
      emissive: lit ? (theme.id >= 4 ? '#CE93D8' : '#FFD54F') : '#263238',
      emissiveIntensity: lit ? (theme.id >= 4 ? 0.95 : 0.45) : 0.05,
      metalness: 0.2,
      roughness: 0.25,
    });
    addMesh(parent, new THREE.BoxGeometry(w + 0.08, h + 0.08, 0.05), frame, x, y, z);
    addMesh(parent, new THREE.BoxGeometry(w, h, 0.04), glass, x, y, z + 0.02);
    addMesh(parent, new THREE.BoxGeometry(w + 0.14, 0.06, 0.08), mat('#455A64', { roughness: 0.8 }), x, y - h / 2 - 0.04, z + 0.03);
    if (lit && h > 0.35) {
      addMesh(parent, new THREE.BoxGeometry(0.03, h * 0.85, 0.02), frame, x, y, z + 0.04);
      addMesh(parent, new THREE.BoxGeometry(w * 0.85, 0.03, 0.02), frame, x, y, z + 0.04);
    }
  }

  private addFacadeWindows(
    parent: THREE.Group,
    roadSide: number,
    w: number,
    h: number,
    d: number,
    theme: DistrictTheme,
    rng: () => number
  ): void {
    const faceX = roadSide > 0 ? -w / 2 - 0.03 : w / 2 + 0.03;
    const cols = Math.max(2, Math.floor(w / 1.85));
    const rows = Math.max(2, Math.floor((h - 2) / 1.75));
    const winW = Math.min(0.62, (w - 0.6) / cols - 0.12);
    const winH = Math.min(0.82, (h - 2.2) / rows - 0.12);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const y = 1.35 + row * (winH + 0.18);
        const z = -d / 2 + 0.55 + col * (winW + 0.18) + winW / 2;
        if (row === 0 && col === Math.floor(cols / 2) && theme.id <= 2) continue;
        const lit = rng() > (theme.id >= 3 ? 0.35 : 0.22);
        this.addWindow(parent, faceX, y, z, winW, winH, lit, theme);
      }
    }
  }

  private makeBuilding(theme: DistrictTheme, rng: () => number, roadSide: number): THREE.Group {
    const g = new THREE.Group();
    const style =
      theme.id === 3
        ? 'desert'
        : theme.id === 4
          ? 'jungle'
          : theme.id >= 6
            ? 'neon'
            : theme.id >= 5
              ? 'industrial'
              : theme.id >= 2
                ? 'downtown'
                : 'suburban';
    const h =
      style === 'desert'
        ? 4 + rng() * 3
        : style === 'jungle'
          ? 5 + rng() * 5
          : style === 'downtown'
            ? 10 + rng() * 14
            : style === 'suburban'
              ? 5 + rng() * 4
              : 7 + rng() * 9;
    const w = style === 'downtown' ? 5 + rng() * 3 : style === 'desert' ? 4 + rng() * 2.5 : 4.5 + rng() * 3.5;
    const d = 5 + rng() * 4;

    const wallHue = theme.buildingHue + rng() * 0.08;
    const wallColor = new THREE.Color().setHSL(wallHue, style === 'suburban' ? 0.42 : 0.32, style === 'neon' ? 0.22 : 0.38 + theme.id * 0.03);
    const trimColor = new THREE.Color().setHSL(wallHue, 0.25, style === 'suburban' ? 0.78 : 0.55);
    const wallTex =
      style === 'desert' || style === 'jungle'
        ? getSidingTexture(wallHue)
        : style === 'suburban'
          ? getSidingTexture(wallHue)
          : getBrickTexture(wallHue);
    wallTex.repeat.set(w / 2, h / 2);
    const wallMat = new THREE.MeshStandardMaterial({
      map: wallTex,
      color: style === 'desert' ? '#D7CCC8' : style === 'jungle' ? '#8D6E63' : wallColor,
      roughness: style === 'desert' ? 0.95 : 0.88,
    });
    const trimMat = mat(
      style === 'desert' ? '#BF360C' : style === 'jungle' ? '#33691E' : trimColor.getStyle(),
      { roughness: 0.75 }
    );
    const roofTex = getRoofShingleTexture(
      style === 'suburban' ? '#BF360C' : style === 'desert' ? '#A1887F' : style === 'jungle' ? '#558B2F' : '#455A64'
    );
    roofTex.repeat.set(w / 2, 1.5);
    const roofMat = new THREE.MeshStandardMaterial({
      map: roofTex,
      color:
        style === 'neon' ? '#311B92' : style === 'suburban' ? '#BF360C' : style === 'desert' ? '#A1887F' : style === 'jungle' ? '#558B2F' : '#455A64',
      roughness: 0.85,
      emissive: style === 'neon' ? '#7B1FA2' : '#000000',
      emissiveIntensity: style === 'neon' ? 0.25 : 0,
    });

    addMesh(g, new THREE.BoxGeometry(w, h, d), wallMat, 0, h / 2, 0);
    addMesh(
      g,
      new THREE.BoxGeometry(w + 0.16, 0.28, d + 0.16),
      mat(style === 'desert' ? '#BCAAA4' : style === 'jungle' ? '#3E2723' : '#37474F', { roughness: 0.92 }),
      0,
      0.14,
      0
    );
    addMesh(g, new THREE.BoxGeometry(w + 0.2, 0.1, d + 0.2), trimMat, 0, 0.32, 0);

    if (style === 'suburban') {
      const roofL = addMesh(g, new THREE.BoxGeometry(w / 2 + 0.1, 0.18, d + 0.35), roofMat, -w / 4, h + 0.1, 0);
      roofL.rotation.z = 0.42;
      const roofR = addMesh(g, new THREE.BoxGeometry(w / 2 + 0.1, 0.18, d + 0.35), roofMat, w / 4, h + 0.1, 0);
      roofR.rotation.z = -0.42;
      addMesh(g, new THREE.BoxGeometry(0.45, 1.1, 0.45), mat('#78909C', { roughness: 0.8 }), w * 0.28, h + 0.85, d * 0.15);
      addMesh(g, new THREE.BoxGeometry(1.5, 0.1, 0.85), trimMat, roadSide > 0 ? -w / 2 - 0.55 : w / 2 + 0.55, 0.35, 0.2);
      for (let step = 0; step < 3; step++) {
        addMesh(
          g,
          new THREE.BoxGeometry(0.85, 0.12, 0.55),
          mat('#78909C', { roughness: 0.85 }),
          roadSide > 0 ? -w / 2 - 0.65 : w / 2 + 0.65,
          0.06 + step * 0.12,
          0.15 - step * 0.05
        );
      }
    } else if (style === 'desert') {
      addMesh(g, new THREE.BoxGeometry(w + 0.15, 0.12, d + 0.15), roofMat, 0, h + 0.06, 0);
      addMesh(g, new THREE.BoxGeometry(w * 0.35, 0.55, 0.35), mat('#FFCC80', { roughness: 0.9 }), 0, h + 0.35, 0);
      if (rng() > 0.5) {
        addMesh(g, new THREE.CylinderGeometry(0.08, 0.12, 0.6, 6), mat('#8D6E63'), w * 0.35, h + 0.65, d * 0.2);
      }
    } else if (style === 'jungle') {
      addMesh(g, new THREE.BoxGeometry(w + 0.25, 0.35, d + 0.25), mat('#5D4037', { roughness: 0.9 }), 0, h + 0.5, 0);
      addMesh(g, new THREE.BoxGeometry(w + 0.4, 0.22, d + 0.4), roofMat, 0, h + 0.85, 0);
      for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2;
        addMesh(
          g,
          new THREE.CylinderGeometry(0.06, 0.08, 1.2, 6),
          mat('#6D4C41', { roughness: 0.95 }),
          Math.cos(a) * (w * 0.35),
          0.6,
          Math.sin(a) * (d * 0.35)
        );
      }
      addMesh(
        g,
        new THREE.BoxGeometry(0.12, h * 0.7, 0.08),
        mat('#2E7D32', { emissive: '#1B5E20', emissiveIntensity: 0.15 }),
        roadSide > 0 ? -w / 2 - 0.12 : w / 2 + 0.12,
        h * 0.45,
        0
      );
    } else if (style === 'downtown') {
      addMesh(g, new THREE.BoxGeometry(w + 0.2, 0.35, d + 0.2), mat('#37474F'), 0, h + 0.18, 0);
      addMesh(g, new THREE.BoxGeometry(1.2, 0.55, 1.0), mat('#546E7A', { metalness: 0.35 }), w * 0.25, h + 0.55, 0);
      for (let band = 1; band < 4; band++) {
        addMesh(g, new THREE.BoxGeometry(w + 0.06, 0.08, d + 0.06), trimMat, 0, band * (h / 4), 0);
      }
    } else if (style === 'industrial') {
      addMesh(g, new THREE.BoxGeometry(w + 0.15, 0.28, d + 0.15), mat('#263238'), 0, h + 0.14, 0);
      for (let i = 0; i < 5; i++) {
        addMesh(g, new THREE.BoxGeometry(w + 0.02, 0.04, 0.08), mat('#37474F'), 0, 1.2 + i * 1.4, d / 2 + 0.05);
      }
    } else {
      addMesh(g, new THREE.BoxGeometry(w + 0.1, 0.2, d + 0.1), roofMat, 0, h + 0.1, 0);
      addMesh(g, new THREE.BoxGeometry(w * 0.7, 0.12, 0.08), mat('#E040FB', { emissive: '#E040FB', emissiveIntensity: 1.1 }), 0, h * 0.55, d / 2 + 0.06);
    }

    const doorX = roadSide > 0 ? -w / 2 - 0.05 : w / 2 + 0.05;
    addMesh(g, new THREE.BoxGeometry(0.1, 1.75, 1.05), mat('#3E2723'), doorX, 0.88, 0.1);
    addMesh(g, new THREE.BoxGeometry(0.08, 1.65, 0.95), mat('#5D4037', { roughness: 0.9 }), doorX + (roadSide > 0 ? -0.03 : 0.03), 0.88, 0.12);
    addMesh(g, new THREE.SphereGeometry(0.06, 8, 8), mat('#FFD54F', { emissive: '#FFC107', emissiveIntensity: 0.5 }), doorX + (roadSide > 0 ? -0.02 : 0.02), 0.95, 0.62);

    this.addFacadeWindows(g, roadSide, w, h, d, theme, rng);

    if (!IS_MOBILE) {
      const sideCols = Math.max(1, Math.floor(d / 1.8));
      for (let col = 0; col < sideCols; col++) {
        const z = -d / 2 + 0.8 + col * (d / sideCols);
        const sideX = roadSide > 0 ? w / 2 + 0.03 : -w / 2 - 0.03;
        for (const row of [1.8, 3.2, 4.8]) {
          if (row > h - 0.8) continue;
          this.addWindow(g, sideX, row, z, 0.5, 0.68, rng() > 0.4, theme);
        }
      }
    }

    if (style === 'suburban' && rng() > 0.4) {
      const hx = roadSide > 0 ? -w / 2 - 1.1 : w / 2 + 1.1;
      addMesh(g, new THREE.BoxGeometry(1.6, 0.9, 0.12), mat('#A5D6A7', { roughness: 0.9 }), hx, 0.45, d * 0.2);
      addMesh(g, new THREE.BoxGeometry(1.6, 0.9, 0.12), mat('#A5D6A7', { roughness: 0.9 }), hx, 0.45, -d * 0.2);
    }

    if (theme.id <= 2 && rng() > 0.55) {
      const fx = roadSide > 0 ? -w / 2 - 0.8 : w / 2 + 0.8;
      addMesh(g, new THREE.BoxGeometry(0.08, 0.65, 1.8), mat('#8D6E63'), fx, 0.33, 0);
      addMesh(g, new THREE.BoxGeometry(0.06, 0.55, 1.6), mat('#A5D6A7', { roughness: 0.95 }), fx + (roadSide > 0 ? -0.12 : 0.12), 0.55, 0);
    }

    g.rotation.y = 0;
    return g;
  }

  private makeTree(rng: () => number): THREE.Group {
    const g = new THREE.Group();
    const trunkH = 1.4 + rng() * 0.5;
    const barkTex = getBarkTexture();
    barkTex.repeat.set(1, trunkH / 2);
    const barkMat = new THREE.MeshStandardMaterial({ map: barkTex, color: '#5D4037', roughness: 0.95 });
    addMesh(g, new THREE.CylinderGeometry(0.16, 0.28, trunkH, 8), barkMat, 0, trunkH / 2, 0);
    addMesh(g, new THREE.SphereGeometry(0.16, 8, 8), mat('#4E342E'), 0, trunkH + 0.15, 0);
    for (let r = 0; r < 3; r++) {
      const a = (r / 3) * Math.PI * 2;
      addMesh(g, new THREE.BoxGeometry(0.12, 0.08, 0.35), mat('#4E342E'), Math.cos(a) * 0.2, 0.08, Math.sin(a) * 0.2);
    }
    const leafTex = getLeafTexture();
    const greens = ['#43A047', '#66BB6A', '#2E7D32', '#81C784'];
    for (let i = 0; i < 4; i++) {
      const layer = addMesh(
        g,
        new THREE.ConeGeometry(1.4 - i * 0.2, 2.0 - i * 0.22, 8),
        new THREE.MeshStandardMaterial({
          map: leafTex,
          color: greens[i % greens.length],
          emissive: '#1B5E20',
          emissiveIntensity: 0.08,
          roughness: 0.95,
        }),
        (rng() - 0.5) * 0.15,
        trunkH + 0.85 + i * 1.1,
        (rng() - 0.5) * 0.15
      );
      layer.scale.set(1.08 - i * 0.07, 1, 1.08 - i * 0.07);
    }
    if (!IS_MOBILE) {
      for (let b = 0; b < 2; b++) {
        addMesh(
          g,
          new THREE.SphereGeometry(0.55 + b * 0.15, 8, 8),
          new THREE.MeshStandardMaterial({ map: leafTex, color: '#388E3C', transparent: true, opacity: 0.35, roughness: 1 }),
          (b - 0.5) * 0.4,
          0.35,
          (rng() - 0.5) * 0.5
        );
      }
      addMesh(g, new THREE.SphereGeometry(0.07, 6, 6), mat('#FF5252', { emissive: '#D50000', emissiveIntensity: 0.3 }), 0.35, trunkH + 1.1, 0.25);
    }
    return g;
  }

  private makeCactus(rng: () => number): THREE.Group {
    const g = new THREE.Group();
    const green = mat('#558B2F', { roughness: 0.92 });
    const darkGreen = mat('#33691E', { roughness: 0.95 });
    const h = 1.6 + rng() * 1.4;
    addMesh(g, new THREE.CylinderGeometry(0.22, 0.28, h, 8), green, 0, h / 2, 0);
    const armH = h * (0.45 + rng() * 0.2);
    const armY = h * (0.45 + rng() * 0.15);
    const side = rng() > 0.5 ? 1 : -1;
    addMesh(g, new THREE.CylinderGeometry(0.14, 0.18, armH * 0.55, 6), green, side * 0.28, armY, 0);
    addMesh(g, new THREE.CylinderGeometry(0.12, 0.14, armH, 6), green, side * 0.42, armY + armH * 0.35, 0);
    if (rng() > 0.4) {
      const side2 = -side;
      addMesh(g, new THREE.CylinderGeometry(0.12, 0.16, armH * 0.5, 6), darkGreen, side2 * 0.24, h * 0.35, 0);
      addMesh(g, new THREE.CylinderGeometry(0.1, 0.12, armH * 0.75, 6), darkGreen, side2 * 0.36, h * 0.35 + armH * 0.3, 0);
    }
    return g;
  }

  private makePalmTree(rng: () => number): THREE.Group {
    const g = new THREE.Group();
    const trunkH = 2.8 + rng() * 1.8;
    const barkMat = mat('#6D4C41', { roughness: 0.95 });
    addMesh(g, new THREE.CylinderGeometry(0.18, 0.32, trunkH, 8), barkMat, 0, trunkH / 2, 0);
    for (let ring = 0; ring < 4; ring++) {
      const y = 0.4 + ring * (trunkH / 4);
      addMesh(g, new THREE.TorusGeometry(0.22, 0.04, 6, 10), mat('#5D4037'), 0, y, 0);
    }
    const leafMat = new THREE.MeshStandardMaterial({
      color: '#2E7D32',
      emissive: '#1B5E20',
      emissiveIntensity: 0.12,
      roughness: 0.9,
      side: THREE.DoubleSide,
    });
    const frondCount = IS_MOBILE ? 5 : 7;
    for (let i = 0; i < frondCount; i++) {
      const a = (i / frondCount) * Math.PI * 2 + rng() * 0.2;
      const frond = addMesh(g, new THREE.BoxGeometry(0.08, 0.04, 2.2 + rng() * 0.6), leafMat, 0, trunkH + 0.15, 0);
      frond.rotation.y = a;
      frond.rotation.x = -0.55 - rng() * 0.15;
      frond.position.x = Math.cos(a) * 0.15;
      frond.position.z = Math.sin(a) * 0.15;
    }
    if (!IS_MOBILE && rng() > 0.6) {
      addMesh(g, new THREE.SphereGeometry(0.12, 6, 6), mat('#FF7043', { emissive: '#E64A19', emissiveIntensity: 0.25 }), 0.2, trunkH * 0.6, 0.15);
    }
    return g;
  }

  private makeDesertRock(rng: () => number): THREE.Group {
    const g = new THREE.Group();
    const rockMat = mat('#A1887F', { roughness: 0.98 });
    const w = 0.8 + rng() * 1.2;
    const h = 0.5 + rng() * 0.9;
    const rock = addMesh(g, new THREE.BoxGeometry(w, h, w * (0.7 + rng() * 0.4)), rockMat, 0, h / 2, 0);
    rock.rotation.y = rng() * Math.PI;
    rock.rotation.z = (rng() - 0.5) * 0.25;
    if (!IS_MOBILE && rng() > 0.5) {
      const w2 = w * 0.55;
      const h2 = h * 0.45;
      addMesh(g, new THREE.BoxGeometry(w2, h2, w2), mat('#8D6E63', { roughness: 0.98 }), w * 0.35, h2 / 2, w * 0.2);
    }
    return g;
  }

  private makeStreetLamp(_theme: DistrictTheme): THREE.Group {
    const g = new THREE.Group();
    g.userData.flicker = true;

    const lampColor = '#FFCC80';
    const poleMat = mat('#546E7A', { metalness: 0.72, roughness: 0.38 });
    const housingMat = mat('#455A64', { metalness: 0.65, roughness: 0.42 });

    addMesh(g, new THREE.CylinderGeometry(0.16, 0.18, 0.07, 10), poleMat, 0, 0.035, 0);
    addMesh(g, new THREE.CylinderGeometry(0.06, 0.09, 0.1, 8), poleMat, 0, 0.12, 0);
    addMesh(g, new THREE.CylinderGeometry(0.05, 0.075, 4.15, 10), poleMat, 0, 2.14, 0);

    const armPivot = new THREE.Group();
    armPivot.position.set(0, 4.18, 0);
    g.add(armPivot);
    addMesh(armPivot, new THREE.BoxGeometry(0.95, 0.065, 0.065), poleMat, -0.47, 0, 0);
    addMesh(armPivot, new THREE.BoxGeometry(0.06, 0.32, 0.06), poleMat, -0.92, -0.12, 0);

    const headX = -0.92;
    addMesh(armPivot, new THREE.CylinderGeometry(0.2, 0.17, 0.1, 10), housingMat, headX, -0.28, 0);
    addMesh(
      armPivot,
      new THREE.CylinderGeometry(0.17, 0.2, 0.06, 10, 1, true),
      mat('#FFF8E1', {
        emissive: lampColor,
        emissiveIntensity: 0.85,
        transparent: true,
        opacity: 0.92,
        roughness: 0.2,
        metalness: 0.05,
      }),
      headX,
      -0.36,
      0
    );
    const bulb = addMesh(
      armPivot,
      new THREE.SphereGeometry(0.07, 8, 8),
      mat('#FFFDE7', { emissive: '#FFE0B2', emissiveIntensity: 1.1 }),
      headX,
      -0.38,
      0
    );
    bulb.userData.isBulb = true;
    g.userData.flickerBulb = bulb;

    const poolW = IS_MOBILE ? 3.2 : 4.2;
    const pool = addMesh(
      g,
      new THREE.PlaneGeometry(poolW, poolW * 1.55),
      new THREE.MeshBasicMaterial({
        map: this.getLightPoolTexture(),
        transparent: true,
        opacity: 0.42,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        color: lampColor,
      }),
      -2.4,
      0.028,
      0,
      false
    );
    pool.rotation.x = -Math.PI / 2;
    g.userData.lightPool = pool;

    return g;
  }

  private makeMailbox(): THREE.Group {
    const g = new THREE.Group();
    addMesh(g, new THREE.CylinderGeometry(0.05, 0.06, 0.7, 8), mat('#78909C', { metalness: 0.7 }), 0, 0.35, 0);
    addMesh(g, new THREE.BoxGeometry(0.55, 0.75, 0.42), mat('#1565C0', { roughness: 0.55 }), 0, 0.82, 0);
    addMesh(g, new THREE.BoxGeometry(0.58, 0.1, 0.44), mat('#0D47A1'), 0, 1.22, 0);
    addMesh(g, new THREE.BoxGeometry(0.12, 0.18, 0.06), mat('#FFD54F', { emissive: '#FFC107', emissiveIntensity: 0.45 }), 0.2, 1.05, 0.24);
    const flag = addMesh(g, new THREE.BoxGeometry(0.22, 0.14, 0.03), mat('#E53935', { emissive: '#FF1744', emissiveIntensity: 0.35 }), 0.28, 1.18, 0.18);
    flag.rotation.z = -0.55;
    return g;
  }

  private makeAlienCrash(): THREE.Group {
    const g = new THREE.Group();
    addMesh(g, new THREE.CylinderGeometry(0.9, 1.1, 0.15, 12), mat('#607D8B', { metalness: 0.7, emissive: '#00E676', emissiveIntensity: 0.3 }), 0, 0.08, 0);
    addMesh(g, new THREE.SphereGeometry(0.55, 10, 8, 0, Math.PI * 2, 0, Math.PI / 2), mat('#80DEEA', { transparent: true, opacity: 0.6 }), 0, 0.15, 0);
    const goo = addMesh(g, new THREE.CircleGeometry(1.1, 16), mat('#76FF03', { emissive: '#33691E', emissiveIntensity: 0.5, transparent: true, opacity: 0.65 }), 0, 0.02, 0, false);
    goo.rotation.x = -Math.PI / 2;
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2;
      addMesh(g, new THREE.BoxGeometry(0.25, 0.08, 0.25), mat('#CFD8DC', { metalness: 0.5 }), Math.cos(a) * 0.9, 0.04, Math.sin(a) * 0.9);
    }
    return g;
  }

  private addMilestoneArch(z: number, color: string, label: string): void {
    const g = new THREE.Group();
    g.position.set(0, 0, z);
    for (const x of [-4.5, 4.5]) {
      addMesh(g, new THREE.CylinderGeometry(0.2, 0.22, 5, 10), mat('#ECEFF1'), x, 2.5, 0);
    }
    addMesh(g, new THREE.BoxGeometry(10, 0.35, 0.35), mat(color, { emissive: color, emissiveIntensity: 0.35 }), 0, 4.8, 0);
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 256, 64);
    ctx.fillStyle = '#000';
    ctx.font = 'bold 28px Segoe UI';
    ctx.textAlign = 'center';
    ctx.fillText(label, 128, 42);
    const tex = new THREE.CanvasTexture(canvas);
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(3.5, 0.9), new THREE.MeshBasicMaterial({ map: tex }));
    sign.position.set(0, 5.5, 0);
    g.add(sign);
    this.scene.add(g);
    this.rootMeshes.push(g);
  }

  private setupLighting(theme: DistrictTheme, _levelLength: number): void {
    this.hemiLight = new THREE.HemisphereLight(theme.sky, theme.ground, theme.ambient * 1.05);
    this.hemiLight.name = 'hemi';
    this.scene.add(this.hemiLight);

    this.ambientLight = new THREE.AmbientLight(0xffffff, theme.ambient * 0.48);
    this.ambientLight.name = 'ambient';
    this.scene.add(this.ambientLight);

    this.sunLight = new THREE.DirectionalLight(0xfff8f0, theme.sun * 1.12);
    this.sunLight.position.set(20, 45, -25);
    this.sunLight.castShadow = false;
    this.sunLight.name = 'sun';
    this.scene.add(this.sunLight);
    this.scene.add(this.sunLight.target);

    this.fillLight = new THREE.DirectionalLight(theme.skyBottom || theme.sky, theme.ambient * 0.22);
    this.fillLight.position.set(-18, 22, 12);
    this.fillLight.name = 'fill';
    this.scene.add(this.fillLight);

    this.rimLight = new THREE.DirectionalLight('#FFF8E8', 0.38);
    this.rimLight.position.set(0, 14, -28);
    this.rimLight.name = 'rim';
    this.scene.add(this.rimLight);

    if (theme.id >= 5) {
      this.accentLight = new THREE.PointLight(theme.id >= 6 ? '#7C4DFF' : '#FF7043', 0.35, 70, 1.6);
      this.accentLight.position.set(0, 10, 30);
      this.accentLight.name = 'accent';
      this.scene.add(this.accentLight);
    }

    this.roadNightLight = new THREE.PointLight('#FFE082', 0, IS_MOBILE ? 24 : 30, 2);
    this.roadNightLight.name = 'roadNight';
    this.scene.add(this.roadNightLight);

    this.roadFillLight = new THREE.PointLight('#FFFBF5', IS_MOBILE ? 0.58 : 0.48, IS_MOBILE ? 36 : 44, 1.4);
    this.roadFillLight.name = 'roadFill';
    this.scene.add(this.roadFillLight);

    this.gameplayRimLight = new THREE.DirectionalLight('#E8F4FF', 0.42);
    this.gameplayRimLight.name = 'gameplayRim';
    this.scene.add(this.gameplayRimLight);
    this.scene.add(this.gameplayRimLight.target);
  }

  setPlayerZ(z: number, dt: number): void {
    this.playerZ = z;
    this.cullTimer += dt;
    if (this.cullTimer < (IS_MOBILE ? 0.12 : 0.08)) return;
    this.cullTimer = 0;

    const minZ = z - WORLD_BEHIND;
    const maxZ = z + WORLD_AHEAD;
    for (const m of this.rootMeshes) {
      if (m.userData.isTerrain) continue;
      const mz = m.position.z;
      m.visible = mz >= minZ && mz <= maxZ;
    }
  }

  /** Move sun with player for consistent lighting */
  followSun(playerX: number, playerZ: number): void {
    if (!this.sunLight) return;
    this.sunLight.position.set(playerX + 18, 42, playerZ - 22);
    this.sunLight.target.position.set(playerX * 0.3, 0, playerZ + 35);
    this.sunLight.target.updateMatrixWorld();
    if (this.fillLight) {
      this.fillLight.position.set(playerX - 16, 24, playerZ + 8);
    }
    if (this.rimLight) {
      this.rimLight.position.set(playerX * 0.5, 16, playerZ - 26);
    }
    if (this.accentLight) {
      this.accentLight.position.set(playerX, 11, playerZ + 28);
    }
    if (this.roadNightLight) {
      this.roadNightLight.position.set(playerX, 5.5, playerZ + 3);
    }
    if (this.roadFillLight) {
      this.roadFillLight.position.set(playerX * 0.12, IS_MOBILE ? 8 : 9, playerZ + 14);
    }
    if (this.gameplayRimLight) {
      this.gameplayRimLight.position.set(playerX, 7, playerZ - 16);
      this.gameplayRimLight.target.position.set(playerX * 0.2, 0.8, playerZ + 24);
      this.gameplayRimLight.target.updateMatrixWorld();
    }
  }

  playSpectacle(kind: SpectacleKind, playerZ: number): void {
    this.skyEffects?.playSpectacle(kind, playerZ);
  }

  update(time: number, playerZ = this.playerZ, dt = 0.016, fx?: RoadFxInput): void {
    if (fx) this.roadFx = fx;
    this.playerZ = playerZ;
    this.wetFactor = this.rainWetForDistrict(this.skyTheme, this.skyNight);

    this.updateSkyCycle(time, dt);
    this.skyEffects?.update(time, dt, playerZ);

    const scroll = time * 0.12;
    const speedRatio = this.roadFx.baseSpeed > 0 ? this.roadFx.speed / this.roadFx.baseSpeed : 1;
    const turbo = this.roadFx.turbo;
    const streakScroll = scroll * (turbo ? 2.4 + speedRatio * 0.35 : 1);

    if (this.roadTexture) this.roadTexture.offset.y = -scroll;
    if (this.roadEmissiveTex) this.roadEmissiveTex.offset.y = -scroll;
    if (this.roadGlowTex) this.roadGlowTex.offset.y = -scroll;
    if (this.roadStreakTex) this.roadStreakTex.offset.y = -streakScroll;
    if (this.roadRainTex) this.roadRainTex.offset.y = -time * 0.85;

    const night = this.skyNight;
    const nightFx = this.skyNightFx;
    let lightNight = lightingNightBlend(night);
    if (IS_MOBILE) lightNight *= 0.72;
    const wetMul = 1 + this.wetFactor * (this.wetFactor > 0.45 ? 1 : 0.65);

    if (this.roadMesh) {
      const rm = this.roadMesh.material as THREE.MeshStandardMaterial;
      const dayPop = (IS_MOBILE ? 0.12 : 0.1) + (1 - lightNight) * (IS_MOBILE ? 0.14 : 0.12);
      const base = dayPop + nightFx * (IS_MOBILE ? 0.32 : 0.55);
      const pulse = 1 + Math.sin(time * 2.4) * 0.04 * nightFx;
      rm.emissiveIntensity = base * pulse * (turbo ? 1.12 : 1);
      rm.roughness = 0.82 - lightNight * 0.1 - this.wetFactor * 0.12;
      rm.metalness = 0.06 + nightFx * 0.14 + this.wetFactor * 0.14;
      const roadDay = IS_MOBILE ? '#e8edf2' : '#dfe6ec';
      const roadNight = IS_MOBILE ? '#c8d2dc' : '#b0bcc8';
      rm.color.set(roadDay).lerp(new THREE.Color(roadNight), lightNight * (IS_MOBILE ? 0.15 : 0.22));
    }
    if (this.roadGlowMesh) {
      const gm = this.roadGlowMesh.material as THREE.MeshBasicMaterial;
      const dayLane = (IS_MOBILE ? 0.14 : 0.18) * (1 - lightNight * 0.35);
      const nightGlow = (IS_MOBILE ? 0.16 : 0.24) + nightFx * (IS_MOBILE ? 0.42 : 0.58);
      const combat = this.roadFx.combatIntensity ?? 0;
      const shoot = this.roadFx.shootPulse ?? 0;
      const pulse = 1 + Math.sin(time * 3.1 + 0.5) * 0.06 * Math.max(nightFx, 0.25);
      gm.opacity = Math.max(dayLane, nightFx > 0.04 ? nightGlow * pulse * wetMul * (turbo ? 1.15 : 1) * (1 + combat * 0.35 + shoot * 0.5) : 0);
      this.roadGlowMesh.visible = gm.opacity > 0.02;
      if (turbo) gm.color.set(this.roadAccent.secondary);
      else if (shoot > 0.2) gm.color.set(this.roadAccent.primary).lerp(new THREE.Color('#00E5FF'), shoot);
      else if (combat > 0.3) gm.color.set(this.roadAccent.secondary);
    }
    if (this.roadStreakMesh) {
      const sm = this.roadStreakMesh.material as THREE.MeshBasicMaterial;
      const target = turbo ? 0.12 + (speedRatio - 1) * 0.08 : 0;
      sm.opacity += (target - sm.opacity) * Math.min(1, dt * 10);
      sm.visible = sm.opacity > 0.01;
      if (turbo) sm.color.set(this.roadAccent.secondary);
    }
    if (this.roadRainMesh) {
      const rm = this.roadRainMesh.material as THREE.MeshBasicMaterial;
      rm.opacity = this.wetFactor * (IS_MOBILE ? 0.16 : 0.24);
      rm.visible = this.wetFactor > 0.18;
    }

    const padRange = IS_MOBILE ? 42 : 58;
    for (const pad of this.boostPads) {
      const near = Math.abs(pad.z - playerZ) < padRange;
      pad.group.visible = near;
      if (!near) continue;

      if (Math.abs(playerZ - pad.z) < 1.4 && Math.abs(this.roadFx.playerX) < 1.6) {
        pad.flash = 1;
      }
      pad.flash = Math.max(0, pad.flash - dt * 2.8);

      pad.group.traverse((c) => {
        if (!(c instanceof THREE.Mesh)) return;
        const m = c.material as THREE.MeshBasicMaterial;
        const idle = c.userData.isPadArrow ? 0.28 : 0.2;
        const peak = c.userData.isPadArrow ? 0.95 : 0.75;
        m.opacity = idle + pad.flash * (peak - idle);
      });
      if (pad.flash > 0.85) {
        pad.group.scale.setScalar(1 + pad.flash * 0.06);
      } else {
        pad.group.scale.setScalar(1);
      }
    }
    if (!IS_MOBILE && this.rootMeshes[0]?.userData.isTerrain) {
      const grass = this.rootMeshes[0] as THREE.Mesh;
      const gMat = grass.material as THREE.MeshStandardMaterial;
      if (gMat.map) gMat.map.offset.y = -playerZ * 0.02;
    }
    const animRange = IS_MOBILE ? 38 : 55;
    for (const p of this.animProps) {
      if (Math.abs(p.worldZ - playerZ) > animRange) continue;
      switch (p.kind) {
        case 'bob':
          p.obj.position.y = p.baseY + Math.sin(time * p.speed + p.phase) * 0.06;
          break;
        case 'spin':
          p.obj.rotation.y = time * p.speed;
          break;
        case 'cloud':
          p.obj.position.x += Math.sin(time * 0.1 + p.phase) * 0.008;
          p.obj.position.y = p.baseY + Math.sin(time * p.speed + p.phase) * 0.4;
          break;
        case 'flicker': {
          const glow = 0.72 + Math.sin(time * p.speed + p.phase) * 0.08 + Math.sin(time * p.speed * 3.1 + p.phase) * 0.04;
          if (p.bulb) {
            const m = p.bulb.material as THREE.MeshStandardMaterial;
            m.emissiveIntensity = glow * (0.35 + this.skyNight * 0.95);
          }
          if (p.lightPool) {
            const pm = p.lightPool.material as THREE.MeshBasicMaterial;
            pm.opacity = this.skyNight * (0.42 + Math.sin(time * p.speed * 0.6 + p.phase) * 0.04);
            p.lightPool.visible = this.skyNight > 0.1;
          }
          break;
        }
      }
    }
  }

  private clear(): void {
    this.skyEffects?.dispose();
    this.skyEffects = null;
    for (const m of this.rootMeshes) {
      this.scene.remove(m);
      disposeObject3D(m);
    }
    this.rootMeshes = [];
    this.animProps = [];
    this.boostPads = [];
    if (this.roadTexture) this.roadTexture.dispose();
    if (this.roadEmissiveTex) {
      this.roadEmissiveTex.dispose();
      this.roadEmissiveTex = null;
    }
    if (this.roadGlowTex) {
      this.roadGlowTex.dispose();
      this.roadGlowTex = null;
    }
    if (this.roadStreakTex) {
      this.roadStreakTex.dispose();
      this.roadStreakTex = null;
    }
    if (this.roadRainTex) {
      this.roadRainTex.dispose();
      this.roadRainTex = null;
    }
    if (this.lightPoolTexture) {
      this.lightPoolTexture.dispose();
      this.lightPoolTexture = null;
    }
    this.roadMesh = null;
    this.roadGlowMesh = null;
    this.roadStreakMesh = null;
    this.roadRainMesh = null;
    if (this.skyTexture) {
      this.skyTexture.dispose();
      this.skyTexture = null;
    }
    this.skyCanvas = null;
    this.skyPhase = -1;
    for (const name of ['hemi', 'ambient', 'sun', 'fill', 'rim', 'accent', 'roadNight', 'neon']) {
      const obj = this.scene.getObjectByName(name);
      if (obj) this.scene.remove(obj);
    }
    this.accentLight = null;
    this.roadNightLight = null;
    this.roadFillLight = null;
    this.gameplayRimLight = null;
  }
}

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}
