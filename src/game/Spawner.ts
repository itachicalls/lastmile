import type { ObstacleKind } from '../types';
import { pickRandomHazardForLevel } from '../data/hazards';

import { IS_MOBILE } from './platform';

/** Five full lanes including center — Temple Run style */
export const LANES = [-3.2, -1.6, 0, 1.6, 3.2] as const;

export function pickRandomLane(): number {
  return LANES[Math.floor(Math.random() * LANES.length)];
}

/** Pick 1 lane; occasionally 2, but keep center from feeling overcrowded */
export function pickObstacleLanes(): number[] {
  const count = Math.random() < (IS_MOBILE ? 0.08 : 0.16) ? 2 : 1;
  const picked: number[] = [];
  const used = new Set<number>();
  while (picked.length < count) {
    const lane = LANES[Math.floor(Math.random() * LANES.length)];
    if (used.has(lane)) continue;
    used.add(lane);
    picked.push(lane);
  }
  if (Math.random() < 0.22 && !picked.includes(0)) {
    picked[0] = 0;
  }
  return picked;
}

/** Random hazard from the level's pool of four unique types. */
export function pickObstacleForLevel(levelId: string): ObstacleKind {
  return pickRandomHazardForLevel(levelId);
}

export function obstacleSpacing(difficulty: number): number {
  const base = Math.max(16, 28 - difficulty * 1.1);
  return IS_MOBILE ? base + 7 : base;
}

export function runnerSpacing(difficulty: number): number {
  return Math.max(11, 22 - difficulty * 1.35);
}

export function powerUpSpacing(): number {
  return 32 + Math.random() * 22;
}

export function packageSpacing(): number {
  return 22 + Math.random() * 18;
}
