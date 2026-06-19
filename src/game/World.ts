import * as THREE from 'three';
import type { DistrictTheme } from '../types';
import { addMesh, mat, disposeObject3D } from './ModelUtils';
import { IS_MOBILE, WORLD_AHEAD, WORLD_BEHIND, SKY_RES, SKY_UPDATE_SEC, freezeStatic, lerpColor } from './platform';
import { SkyEffects } from './SkyEffects';
import { getBrickTexture, getSidingTexture, getRoofShingleTexture, getBarkTexture, getLeafTexture } from './WorldTextures';

type AnimProp = {
  obj: THREE.Object3D;
  worldZ: number;
  kind: 'bob' | 'spin' | 'flicker' | 'cloud';
  speed: number;
  baseY: number;
  phase: number;
  light?: THREE.PointLight;
  bulb?: THREE.Mesh;
};

export class World {
  scene: THREE.Scene;
  private rootMeshes: THREE.Object3D[] = [];
  private animProps: AnimProp[] = [];
  private roadTexture!: THREE.CanvasTexture;
  private skyTexture: THREE.CanvasTexture | null = null;
  private skyCanvas: HTMLCanvasElement | null = null;
  private skyTheme!: DistrictTheme;
  private hemiLight!: THREE.HemisphereLight;
  private ambientLight!: THREE.AmbientLight;
  private sunLight!: THREE.DirectionalLight;
  private skyPhase = -1;
  private skyTick = 0;
  private playerZ = 0;
  private cullTimer = 0;
  private skyEffects: SkyEffects | null = null;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
  }

  build(theme: DistrictTheme, levelLength: number): void {
    this.clear();

    this.skyTheme = theme;
    this.setupLighting(theme, levelLength);
    this.buildSky(theme);
    this.scene.fog = new THREE.FogExp2(theme.fog, IS_MOBILE ? 0.016 : 0.011);

    // Grass field
    const grassTex = this.makeGrassTexture(theme);
    grassTex.wrapS = grassTex.wrapT = THREE.RepeatWrapping;
    grassTex.repeat.set(6, (levelLength + 140) / 10);
    const grass = addMesh(
      this.scene,
      new THREE.PlaneGeometry(50, levelLength + 140),
      new THREE.MeshStandardMaterial({ map: grassTex, color: theme.ground, roughness: 1 }),
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
        new THREE.MeshStandardMaterial({ map: walkTex, roughness: 0.95 }),
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

    // Textured road
    this.roadTexture = this.makeRoadTexture();
    this.roadTexture.wrapS = this.roadTexture.wrapT = THREE.RepeatWrapping;
    this.roadTexture.repeat.set(1, (levelLength + 140) / 8);
    const road = addMesh(
      this.scene,
      new THREE.PlaneGeometry(9.5, levelLength + 140),
      new THREE.MeshStandardMaterial({ map: this.roadTexture, roughness: 0.88, metalness: 0.05 }),
      0,
      0,
      levelLength / 2,
      false
    );
    road.rotation.x = -Math.PI / 2;
    road.position.y = 0.025;
    road.receiveShadow = !IS_MOBILE;
    road.userData.isTerrain = true;
    this.rootMeshes.push(road);

    // Curbs with emissive edge
    for (const x of [-3.4, 3.4]) {
      const curb = addMesh(this.scene, new THREE.BoxGeometry(0.35, 0.18, levelLength + 140), mat('#ECEFF1'), x, 0.09, levelLength / 2, false);
      addMesh(curb, new THREE.BoxGeometry(0.08, 0.2, levelLength + 140), mat('#FFD54F', { emissive: '#FFC107', emissiveIntensity: 0.2 }), x > 0 ? -0.16 : 0.16, 0, 0, false);
      curb.userData.isTerrain = true;
      this.rootMeshes.push(curb);
    }

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
    const propStep = IS_MOBILE ? 22 : 18;
    const propJitter = IS_MOBILE ? 5 : 7;
    const buildingSlots: { side: number; z: number }[] = [];
    for (let z = 0; z < levelLength + 50; z += propStep + Math.floor(rng() * propJitter)) {
      for (const side of [-1, 1]) {
        const roll = rng();
        const placeBuilding = roll > (IS_MOBILE ? 0.22 : 0.14);
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
        }
        if (rng() > (IS_MOBILE ? 0.78 : 0.62)) {
          const prop = rng() > 0.45 ? this.makeStreetLamp(theme) : this.makeMailbox();
          const pz = z + rng() * 3;
          prop.position.set(side * (6.2 + rng()), 0, pz);
          freezeStatic(prop);
          this.scene.add(prop);
          this.rootMeshes.push(prop);
          if (prop.userData.flicker) {
            this.animProps.push({
              obj: prop,
              worldZ: pz,
              kind: 'flicker',
              speed: 4 + rng() * 3,
              baseY: 0,
              phase: rng() * 6,
              light: prop.userData.flickerLight as THREE.PointLight | undefined,
              bulb: prop.userData.flickerBulb as THREE.Mesh | undefined,
            });
          }
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
    this.paintSky(0, theme);
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

    const dayTop = lerpColor(theme.sky, '#87CEEB', 0.25);
    const dayMid = lerpColor(theme.skyBottom, '#B3E5FC', 0.35);
    const dayHorizon = lerpColor('#FFF176', theme.fog, 0.45);
    const dayGlow = lerpColor('#FFFDE7', theme.ground, 0.15);

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

    if (night > 0.15 && night < 0.75) {
      const dusk = Math.sin(night * Math.PI) * 0.85;
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

    if (night < 0.72) {
      const sunAlpha = Math.max(0, 1 - night * 1.35);
      const sunX = w * 0.74;
      const sunY = h * 0.34;
      const sunGrad = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, 110);
      sunGrad.addColorStop(0, `rgba(255,255,230,${0.95 * sunAlpha})`);
      sunGrad.addColorStop(0.35, `rgba(255,236,140,${0.55 * sunAlpha})`);
      sunGrad.addColorStop(1, 'rgba(255,200,80,0)');
      ctx.fillStyle = sunGrad;
      ctx.fillRect(0, 0, w, h);
    }

    if (night > 0.28) {
      const moonAlpha = Math.min(1, (night - 0.28) * 1.35);
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

    if (night < 0.55) {
      const cloudAlpha = 0.55 * (1 - night * 1.2);
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

    if (night > 0.2) {
      const starAlpha = Math.min(1, (night - 0.2) * 1.3);
      const starCount = IS_MOBILE ? 55 : 90;
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

    if (this.scene.fog instanceof THREE.FogExp2) {
      this.scene.fog.color.set(lerpColor(theme.fog, '#050510', night));
    }
    if (this.hemiLight) {
      this.hemiLight.intensity = theme.ambient * 0.9 * (1 - night * 0.6);
      this.hemiLight.color.set(lerpColor(theme.sky, '#334', night * 0.5));
    }
    if (this.ambientLight) {
      this.ambientLight.intensity = theme.ambient * 0.35 * (1 - night * 0.65);
    }
    if (this.sunLight) {
      this.sunLight.intensity = theme.sun * (1 - night * 0.75);
    }
  }

  private updateSkyCycle(time: number, dt: number): void {
    this.skyTick += dt;
    const night = (Math.sin(time * 0.035) + 1) / 2;
    this.skyEffects?.setNight(night);
    if (this.skyTick < SKY_UPDATE_SEC) return;
    this.skyTick = 0;
    const threshold = IS_MOBILE ? 0.035 : 0.02;
    if (Math.abs(night - this.skyPhase) < threshold) return;
    this.skyPhase = night;
    this.paintSky(night, this.skyTheme);
  }

  private makeRoadTexture(): THREE.CanvasTexture {
    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 256;
    const ctx = c.getContext('2d')!;
    ctx.fillStyle = '#343f46';
    ctx.fillRect(0, 0, 256, 256);
    for (let y = 0; y < 256; y += 4) {
      ctx.fillStyle = y % 8 === 0 ? '#44555e' : '#343f46';
      ctx.fillRect(0, y, 256, 4);
    }
    ctx.strokeStyle = 'rgba(255,255,255,0.28)';
    ctx.lineWidth = 2;
    ctx.setLineDash([10, 14]);
    for (const lx of [51, 102, 128, 154, 205]) {
      ctx.beginPath();
      ctx.moveTo(lx, 0);
      ctx.lineTo(lx, 256);
      ctx.stroke();
    }
    ctx.setLineDash([]);
    ctx.strokeStyle = '#FFEB3B';
    ctx.lineWidth = 3;
    ctx.setLineDash([16, 12]);
    ctx.beginPath();
    ctx.moveTo(128, 0);
    ctx.lineTo(128, 256);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.fillRect(6, 0, 8, 256);
    ctx.fillRect(242, 0, 8, 256);
    ctx.fillStyle = 'rgba(255,213,79,0.35)';
    for (let i = 0; i < 12; i++) {
      ctx.fillRect(14 + (i % 2) * 4, (i * 21) % 240, 3, 10);
      ctx.fillRect(239 - (i % 2) * 4, (i * 27) % 240, 3, 10);
    }
    ctx.fillStyle = 'rgba(0,0,0,0.07)';
    for (let i = 0; i < 8; i++) {
      ctx.fillRect(20 + i * 28, (i * 37) % 220, 18, 10);
    }
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
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
    ctx.strokeStyle = 'rgba(255,255,255,0.35)';
    ctx.lineWidth = 1;
    for (let y = 0; y < 128; y += 16) {
      for (let x = 0; x < 128; x += 16) {
        ctx.strokeRect(x + 0.5, y + 0.5, 15, 15);
      }
    }
    ctx.fillStyle = 'rgba(0,0,0,0.06)';
    for (let i = 0; i < 10; i++) {
      ctx.fillRect((i * 23) % 120, (i * 31) % 120, 8, 6);
    }
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
    const cols = Math.max(2, Math.floor(w / (IS_MOBILE ? 1.85 : 1.35)));
    const rows = Math.max(2, Math.floor((h - 2) / (IS_MOBILE ? 1.85 : 1.55)));
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
    const style = theme.id >= 4 ? 'neon' : theme.id >= 3 ? 'industrial' : theme.id >= 2 ? 'downtown' : 'suburban';
    const h = style === 'downtown' ? 10 + rng() * 14 : style === 'suburban' ? 5 + rng() * 4 : 7 + rng() * 9;
    const w = style === 'downtown' ? 5 + rng() * 3 : 4.5 + rng() * 3.5;
    const d = 5 + rng() * 4;

    const wallHue = theme.buildingHue + rng() * 0.08;
    const wallColor = new THREE.Color().setHSL(wallHue, style === 'suburban' ? 0.42 : 0.32, style === 'neon' ? 0.22 : 0.38 + theme.id * 0.03);
    const trimColor = new THREE.Color().setHSL(wallHue, 0.25, style === 'suburban' ? 0.78 : 0.55);
    const wallTex = style === 'suburban' ? getSidingTexture(wallHue) : getBrickTexture(wallHue);
    wallTex.repeat.set(w / 2, h / 2);
    const wallMat = new THREE.MeshStandardMaterial({ map: wallTex, color: wallColor, roughness: 0.88 });
    const trimMat = mat(trimColor.getStyle(), { roughness: 0.75 });
    const roofTex = getRoofShingleTexture(style === 'suburban' ? '#BF360C' : '#455A64');
    roofTex.repeat.set(w / 2, 1.5);
    const roofMat = new THREE.MeshStandardMaterial({
      map: roofTex,
      color: style === 'neon' ? '#311B92' : style === 'suburban' ? '#BF360C' : '#455A64',
      roughness: 0.85,
      emissive: style === 'neon' ? '#7B1FA2' : '#000000',
      emissiveIntensity: style === 'neon' ? 0.25 : 0,
    });

    addMesh(g, new THREE.BoxGeometry(w, h, d), wallMat, 0, h / 2, 0);
    addMesh(g, new THREE.BoxGeometry(w + 0.16, 0.28, d + 0.16), mat('#37474F', { roughness: 0.92 }), 0, 0.14, 0);
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

  private makeStreetLamp(theme: DistrictTheme): THREE.Group {
    const g = new THREE.Group();
    g.userData.flicker = true;
    addMesh(g, new THREE.CylinderGeometry(0.07, 0.1, 3.6, 8), mat('#455A64', { metalness: 0.65, roughness: 0.35 }), 0, 1.8, 0);
    addMesh(g, new THREE.BoxGeometry(0.65, 0.08, 0.08), mat('#37474F', { metalness: 0.55 }), 0.28, 3.45, 0);
    const bulb = addMesh(
      g,
      new THREE.SphereGeometry(0.2, 10, 10),
      mat(theme.id >= 4 ? '#E1BEE7' : '#FFFDE7', {
        emissive: theme.id >= 4 ? '#EA80FC' : '#FFD54F',
        emissiveIntensity: 1.5,
      }),
      0.48,
      3.38,
      0
    );
    bulb.userData.isBulb = true;
    g.userData.flickerBulb = bulb;
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
    this.hemiLight = new THREE.HemisphereLight(theme.sky, theme.ground, theme.ambient * 0.9);
    this.hemiLight.name = 'hemi';
    this.scene.add(this.hemiLight);

    this.ambientLight = new THREE.AmbientLight(0xffffff, theme.ambient * 0.35);
    this.ambientLight.name = 'ambient';
    this.scene.add(this.ambientLight);

    this.sunLight = new THREE.DirectionalLight(0xfff0d4, theme.sun);
    this.sunLight.position.set(20, 45, -25);
    this.sunLight.castShadow = false;
    this.sunLight.name = 'sun';
    this.scene.add(this.sunLight);
    this.scene.add(this.sunLight.target);
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
    this.sunLight.target.position.set(playerX, 0, playerZ + 35);
    this.sunLight.target.updateMatrixWorld();
  }

  update(time: number, playerZ = this.playerZ, dt = 0.016): void {
    this.updateSkyCycle(time, dt);
    this.skyEffects?.update(time, dt, playerZ);
    if (this.roadTexture && !IS_MOBILE) {
      this.roadTexture.offset.y = -time * 0.15;
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
          const glow = 0.85 + Math.sin(time * p.speed + p.phase) * 0.35;
          if (p.bulb) {
            const m = p.bulb.material as THREE.MeshStandardMaterial;
            m.emissiveIntensity = glow;
          } else if (p.light) {
            p.light.intensity = 0.45 + Math.sin(time * p.speed + p.phase) * 0.25;
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
    if (this.roadTexture) this.roadTexture.dispose();
    if (this.skyTexture) {
      this.skyTexture.dispose();
      this.skyTexture = null;
    }
    this.skyCanvas = null;
    this.skyPhase = -1;
    for (const name of ['hemi', 'ambient', 'sun', 'neon']) {
      const obj = this.scene.getObjectByName(name);
      if (obj) this.scene.remove(obj);
    }
  }
}

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}
