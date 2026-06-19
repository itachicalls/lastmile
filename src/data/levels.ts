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
  level('1-1', 1, 'First Delivery', 'Jump/slide electric bars · dodge props · shoot aliens · collect 📦', 750, [
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
  level('1-5', 1, 'Boss: HOA Alien', 'Longer route — extra aliens and hazards. Deliver!', 1050, [
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
  level('2-5', 2, 'Boss: Alien Commander', 'Tough finale — shoot, dodge, deliver!', 1150, [
    { z: 250, safe: 'left' },
    { z: 550, safe: 'right' },
    { z: 850, safe: 'left' },
    { z: 1050, safe: 'right' },
  ], 9, 320),
  level('3-1', 3, 'Scorpion Route', 'Blazing sand — watch for heat mirages and raiders in the haze.', 980, [
    { z: 210, safe: 'left' },
    { z: 500, safe: 'right' },
    { z: 780, safe: 'left' },
  ], 7, 280),
  level('3-2', 3, 'Mirage Mile', 'Desert gates come fast. Stock packages at oases.', 1020, [
    { z: 230, safe: 'right' },
    { z: 520, safe: 'left' },
    { z: 820, safe: 'right' },
  ], 8, 300),
  level('3-3', 3, 'Canyon Dash', 'Narrow canyon run — aliens love the shade.', 1080, [
    { z: 200, safe: 'left' },
    { z: 480, safe: 'right' },
    { z: 760, safe: 'left' },
    { z: 980, safe: 'right' },
  ], 8, 310),
  level('3-4', 3, 'Sandstorm Alley', 'Low visibility — listen for stalker footsteps.', 1120, [
    { z: 240, safe: 'right' },
    { z: 540, safe: 'left' },
    { z: 860, safe: 'right' },
  ], 9, 320),
  level('3-5', 3, 'Boss: Dune Warlord', 'Hardest desert run — reach the depot!', 1200, [
    { z: 260, safe: 'left' },
    { z: 560, safe: 'right' },
    { z: 880, safe: 'left' },
    { z: 1080, safe: 'right' },
  ], 10, 340),
  level('4-1', 4, 'Canopy Run', 'Welcome to the jungle — vines, ruins, and ambush aliens.', 1000, [
    { z: 220, safe: 'right' },
    { z: 510, safe: 'left' },
    { z: 800, safe: 'right' },
  ], 9, 300),
  level('4-2', 4, 'Temple Steps', 'Ancient gates guard the old mail route.', 1040, [
    { z: 240, safe: 'left' },
    { z: 530, safe: 'right' },
    { z: 840, safe: 'left' },
  ], 10, 320),
  level('4-3', 4, 'Vine Gauntlet', 'Thick cover — stalkers burst from the trees.', 1100, [
    { z: 210, safe: 'right' },
    { z: 500, safe: 'left' },
    { z: 790, safe: 'right' },
    { z: 1000, safe: 'left' },
  ], 10, 330),
  level('4-4', 4, 'Monsoon Rush', 'Wet roads, wild power-ups, heavy traffic.', 1140, [
    { z: 250, safe: 'left' },
    { z: 550, safe: 'right' },
    { z: 870, safe: 'left' },
  ], 11, 350),
  level('4-5', 4, 'Boss: Jungle Overlord', 'Jungle gauntlet — deliver at the depot!', 1250, [
    { z: 270, safe: 'right' },
    { z: 580, safe: 'left' },
    { z: 900, safe: 'right' },
    { z: 1120, safe: 'left' },
  ], 12, 360),
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

export function districtsWithLevels(): number[] {
  return [...new Set(LEVELS.map((l) => l.district))].sort((a, b) => a - b);
}
