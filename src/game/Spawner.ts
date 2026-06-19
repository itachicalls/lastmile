import type { ObstacleKind } from '../types';
import { pickRandomHazardForLevel } from '../data/hazards';

/** Five full lanes including center — Temple Run style */
export const LANES = [-3.2, -1.6, 0, 1.6, 3.2] as const;

export function pickRandomLane(): number {
  return LANES[Math.floor(Math.random() * LANES.length)];
}

/** Pick 1-2 lanes; bias toward blocking center sometimes */
export function pickObstacleLanes(): number[] {
  const count = Math.random() < 0.35 ? 2 : 1;
  const picked: number[] = [];
  const used = new Set<number>();
  while (picked.length < count) {
    const lane = LANES[Math.floor(Math.random() * LANES.length)];
    if (used.has(lane)) continue;
    used.add(lane);
    picked.push(lane);
  }
  if (Math.random() < 0.4 && !picked.includes(0)) {
    picked[0] = 0;
  }
  return picked;
}

/** Random hazard from the level's pool of four unique types. */
export function pickObstacleForLevel(levelId: string): ObstacleKind {
  return pickRandomHazardForLevel(levelId);
}

export function obstacleSpacing(difficulty: number): number {
  return Math.max(10, 18 - difficulty * 1.2);
}

export function runnerSpacing(difficulty: number): number {
  return Math.max(18, 32 - difficulty * 2);
}

export function powerUpSpacing(): number {
  return 32 + Math.random() * 22;
}

export function packageSpacing(): number {
  return 28 + Math.random() * 22;
}
