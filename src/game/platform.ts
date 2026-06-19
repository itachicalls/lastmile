import * as THREE from 'three';

/** Coarse pointer or common mobile UA — used for renderer + spawn budgets */
export const IS_MOBILE =
  (typeof window !== 'undefined' &&
    window.matchMedia('(pointer: coarse)').matches) ||
  /Android|iPhone|iPad|iPod|Mobile/i.test(typeof navigator !== 'undefined' ? navigator.userAgent : '');

export const ENABLE_SHADOWS = false;
export const ENABLE_ANTIALIAS = false;
export const ENABLE_TONE_MAPPING = true;
export const ENABLE_BLOOM = true;
export const BLOOM_RES_SCALE = IS_MOBILE ? 0.4 : 0.32;

export const NEAR_RANGE = IS_MOBILE ? 48 : 58;
export const WORLD_AHEAD = IS_MOBILE ? 72 : 80;
export const WORLD_BEHIND = IS_MOBILE ? 28 : 32;
export const SKY_RES = IS_MOBILE ? 256 : 320;
export const SKY_UPDATE_SEC = IS_MOBILE ? 0.35 : 0.45;

export function getPixelRatio(): number {
  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1;
  return IS_MOBILE ? Math.min(dpr, 1.25) : Math.min(dpr, 1.1);
}

export function isNearZ(z: number, playerZ: number, range = NEAR_RANGE): boolean {
  return Math.abs(z - playerZ) <= range;
}

export function freezeStatic(obj: THREE.Object3D): void {
  obj.traverse((c) => {
    c.matrixAutoUpdate = false;
    c.updateMatrix();
  });
}

export function lerpColor(a: string, b: string, t: number): string {
  const ca = new THREE.Color(a);
  const cb = new THREE.Color(b);
  return ca.lerp(cb, t).getStyle();
}

/** Full day cycle — morning → afternoon → night → pre-dawn (seconds). */
export const SKY_CYCLE_SEC = 120;

/** 0 = morning/midday, 1 = deep night — asymmetric so day dominates early. */
export function skyNightLevel(time: number): number {
  const t = (time % SKY_CYCLE_SEC) / SKY_CYCLE_SEC;
  if (t < 0.4) return 0;
  if (t < 0.58) return ((t - 0.4) / 0.18) * 0.28;
  if (t < 0.78) return 0.28 + ((t - 0.58) / 0.2) * 0.52;
  if (t < 0.92) return 0.8 + ((t - 0.78) / 0.14) * 0.2;
  return 1 - (t - 0.92) / 0.08;
}

/** Neon / glow / bloom effects — zero during day, ramps only in deep night. */
export function nightEffectStrength(night: number): number {
  if (night <= 0.55) return 0;
  return Math.min(1, (night - 0.55) / 0.3);
}

/** Hazards & enemies — subtle fill light when sky is actually dark. */
export function gameplayNightVisibility(night: number): number {
  if (night <= 0.5) return 0;
  return Math.min(1, (night - 0.5) / 0.38);
}

/** Lighting darkening — stays bright through morning & midday. */
export function lightingNightBlend(night: number): number {
  if (night <= 0.28) return night * 0.12;
  if (night <= 0.55) return 0.034 + (night - 0.28) * 0.55;
  const fx = nightEffectStrength(night);
  return 0.18 + (night - 0.55) * 1.05 + fx * 0.35;
}
