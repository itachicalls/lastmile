import type { LevelDef } from '../types';

function level(
  id: string,
  district: number,
  name: string,
  briefing: string,
  dropoffZ: number,
  gates: { z: number; safe: 'left' | 'right' }[],
  difficulty: number,
  timeLimit: number
): LevelDef {
  return {
    id,
    district,
    name,
    briefing,
    difficulty,
    timeLimit,
    segments: [
      ...gates.map((g) => ({ kind: 'gate' as const, z: g.z, safe: g.safe })),
      { kind: 'dropoff', z: dropoffZ },
    ],
  };
}

export const LEVELS: LevelDef[] = [
  level('1-1', 1, 'First Delivery', 'Jump obstacles · pick GREEN fork · click to shoot · collect 📦 for heavy shots', 750, [
    { z: 160, safe: 'left' },
    { z: 360, safe: 'right' },
    { z: 580, safe: 'left' },
  ], 2, 180),
  level('1-2', 1, 'Dog Park Detour', 'Aliens run AT you — dodge or shoot them! Colors = difficulty.', 850, [
    { z: 200, safe: 'right' },
    { z: 450, safe: 'left' },
    { z: 700, safe: 'right' },
  ], 3, 200),
  level('1-3', 1, 'Block Party Run', 'Grab power-ups: Slow-Mo, Fast Shot, Shield.', 900, [
    { z: 220, safe: 'left' },
    { z: 480, safe: 'right' },
    { z: 720, safe: 'left' },
  ], 4, 220),
  level('1-4', 1, 'Suburban Sprint', 'Center lane gets blocked too — stay alert!', 950, [
    { z: 180, safe: 'right' },
    { z: 420, safe: 'left' },
    { z: 650, safe: 'right' },
    { z: 850, safe: 'left' },
  ], 5, 240),
  level('1-5', 1, 'Boss: HOA Alien', 'Red stalkers are fast — shoot first!', 1050, [
    { z: 250, safe: 'left' },
    { z: 520, safe: 'right' },
    { z: 780, safe: 'left' },
    { z: 980, safe: 'right' },
  ], 6, 280),
  level('2-1', 2, 'Morning Commute', 'Downtown speed run — faster pace!', 920, [
    { z: 200, safe: 'right' },
    { z: 480, safe: 'left' },
    { z: 750, safe: 'right' },
  ], 5, 240),
  level('2-2', 2, 'Food Truck Alley', 'Dense hazards — power-ups save lives.', 950, [
    { z: 220, safe: 'left' },
    { z: 500, safe: 'right' },
    { z: 780, safe: 'left' },
  ], 6, 260),
  level('2-3', 2, 'Alien Territory', 'Yellow raiders need 2 hits. Red stalkers need 3.', 1000, [
    { z: 240, safe: 'right' },
    { z: 520, safe: 'left' },
    { z: 820, safe: 'right' },
  ], 7, 280),
  level('2-4', 2, 'Rush Hour', 'Everything at once. Shield up!', 1050, [
    { z: 200, safe: 'left' },
    { z: 450, safe: 'right' },
    { z: 700, safe: 'left' },
    { z: 920, safe: 'right' },
  ], 8, 300),
  level('2-5', 2, 'Boss: Alien Commander', 'Final marathon — survive the stalkers.', 1150, [
    { z: 250, safe: 'left' },
    { z: 550, safe: 'right' },
    { z: 850, safe: 'left' },
    { z: 1050, safe: 'right' },
  ], 9, 320),
];

export function getLevel(id: string): LevelDef | undefined {
  return LEVELS.find((l) => l.id === id);
}

export function nextLevelId(currentId: string): string | null {
  const idx = LEVELS.findIndex((l) => l.id === currentId);
  if (idx < 0 || idx >= LEVELS.length - 1) return null;
  return LEVELS[idx + 1].id;
}

export function prevDistrictLevels(district: number): LevelDef[] {
  return LEVELS.filter((l) => l.district === district);
}
