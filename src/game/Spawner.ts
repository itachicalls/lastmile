import type { ObstacleKind } from '../types';

/** Five full lanes including center — Temple Run style */
export const LANES = [-3.2, -1.6, 0, 1.6, 3.2] as const;

const OBSTACLE_TYPES: ObstacleKind[] = ['cones', 'pod', 'debris', 'barricade'];

export function pickRandomLane(): number {
  return LANES[Math.floor(Math.random() * LANES.length)];
}

/** Pick 1-2 lanes; bias toward blocking center sometimes */
export function pickObstacleLanes(): number[] {
  const count = Math.random() < 0.35 ? 2 : 1;
  const pool = [...LANES];
  const picked: number[] = [];
  for (let i = 0; i < count; i++) {
    const idx = Math.floor(Math.random() * pool.length);
    picked.push(pool.splice(idx, 1)[0]);
  }
  if (Math.random() < 0.4 && !picked.includes(0)) {
    picked[0] = 0;
  }
  return picked;
}

export function pickRandomObstacle(): ObstacleKind {
  return OBSTACLE_TYPES[Math.floor(Math.random() * OBSTACLE_TYPES.length)];
}

export function obstacleSpacing(difficulty: number): number {
  return Math.max(10, 18 - difficulty * 1.2);
}

export function runnerSpacing(difficulty: number): number {
  return Math.max(18, 32 - difficulty * 2);
}

export function powerUpSpacing(): number {
  return 55 + Math.random() * 35;
}

export function packageSpacing(): number {
  return 28 + Math.random() * 22;
}
