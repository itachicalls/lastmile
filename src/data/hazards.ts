import type { ObstacleKind } from '../types';

export type HazardMeta = {
  clearHeight: number;
  radius: number;
  label: string;
};

/** Four unique hazards per level — spawner picks randomly from each pool. */
export const LEVEL_HAZARD_POOLS: Record<string, ObstacleKind[]> = {
  '1-1': ['newsbox-row', 'dog-fence', 'mailbox-row', 'package-spill'],
  '1-2': ['dog-fence', 'party-tent', 'lawn-sprinkler', 'bin-alley'],
  '1-3': ['party-tent', 'bin-alley', 'package-spill', 'hoa-gate'],
  '1-4': ['bin-alley', 'hoa-gate', 'newsbox-row', 'lawn-sprinkler'],
  '1-5': ['hoa-gate', 'newsbox-row', 'dog-fence', 'mailbox-row'],
  '2-1': ['news-stand', 'food-cart', 'traffic-barricade', 'burst-hydrant'],
  '2-2': ['food-cart', 'alien-beacon', 'bus-shelter', 'fallen-sign'],
  '2-3': ['alien-beacon', 'fallen-sign', 'checkpoint', 'traffic-barricade'],
  '2-4': ['fallen-sign', 'checkpoint', 'news-stand', 'burst-hydrant'],
  '2-5': ['checkpoint', 'news-stand', 'food-cart', 'bus-shelter'],
  '3-1': ['cactus-wall', 'mirage-rock', 'tumbleweed', 'sand-drift'],
  '3-2': ['mirage-rock', 'rockslide', 'bone-arch', 'cactus-wall'],
  '3-3': ['rockslide', 'sand-drift', 'sun-bleached-wreck', 'skull-rock'],
  '3-4': ['sand-drift', 'skull-rock', 'tumbleweed', 'rockslide'],
  '3-5': ['skull-rock', 'cactus-wall', 'mirage-rock', 'bone-arch'],
  '4-1': ['fallen-log', 'temple-rubble', 'vine-snare', 'thorn-bramble'],
  '4-2': ['temple-rubble', 'thorn-bramble', 'quicksand-pit', 'fallen-log'],
  '4-3': ['thorn-bramble', 'flood-wreck', 'idol-shrine', 'temple-rubble'],
  '4-4': ['flood-wreck', 'totem-gate', 'vine-snare', 'quicksand-pit'],
  '4-5': ['totem-gate', 'fallen-log', 'flood-wreck', 'idol-shrine'],
};

export const HAZARD_META: Record<ObstacleKind, HazardMeta> = {
  'newsbox-row': { clearHeight: 0.55, radius: 0.9, label: 'News Boxes' },
  'dog-fence': { clearHeight: 0.62, radius: 1.0, label: 'Dog Fence' },
  'party-tent': { clearHeight: 0.58, radius: 1.05, label: 'Party Tent' },
  'bin-alley': { clearHeight: 0.72, radius: 1.0, label: 'Bin Alley' },
  'hoa-gate': { clearHeight: 0.88, radius: 1.15, label: 'HOA Gate' },
  'mailbox-row': { clearHeight: 0.52, radius: 0.88, label: 'Mailboxes' },
  'lawn-sprinkler': { clearHeight: 0.48, radius: 0.85, label: 'Sprinklers' },
  'package-spill': { clearHeight: 0.5, radius: 0.92, label: 'Spilled Packages' },
  'news-stand': { clearHeight: 0.68, radius: 0.95, label: 'News Stand' },
  'food-cart': { clearHeight: 0.75, radius: 1.0, label: 'Food Cart' },
  'alien-beacon': { clearHeight: 0.55, radius: 0.92, label: 'Alien Beacon' },
  'fallen-sign': { clearHeight: 0.48, radius: 0.88, label: 'Fallen Sign' },
  checkpoint: { clearHeight: 0.85, radius: 1.12, label: 'Checkpoint' },
  'traffic-barricade': { clearHeight: 0.65, radius: 1.0, label: 'Barricades' },
  'burst-hydrant': { clearHeight: 0.55, radius: 0.9, label: 'Burst Hydrant' },
  'bus-shelter': { clearHeight: 0.82, radius: 1.05, label: 'Bus Shelter' },
  'cactus-wall': { clearHeight: 0.65, radius: 1.05, label: 'Cactus Wall' },
  'mirage-rock': { clearHeight: 0.52, radius: 0.95, label: 'Mirage Rocks' },
  rockslide: { clearHeight: 0.58, radius: 1.08, label: 'Rockslide' },
  'sand-drift': { clearHeight: 0.45, radius: 0.9, label: 'Sand Drift' },
  'skull-rock': { clearHeight: 0.62, radius: 1.05, label: 'Skull Rock' },
  tumbleweed: { clearHeight: 0.42, radius: 0.88, label: 'Tumbleweed' },
  'bone-arch': { clearHeight: 0.72, radius: 1.0, label: 'Bone Arch' },
  'sun-bleached-wreck': { clearHeight: 0.55, radius: 0.98, label: 'Sun-Bleached Wreck' },
  'fallen-log': { clearHeight: 0.55, radius: 1.0, label: 'Fallen Log' },
  'temple-rubble': { clearHeight: 0.6, radius: 1.02, label: 'Temple Rubble' },
  'thorn-bramble': { clearHeight: 0.68, radius: 0.95, label: 'Thorn Bramble' },
  'flood-wreck': { clearHeight: 0.5, radius: 0.98, label: 'Flood Wreck' },
  'totem-gate': { clearHeight: 0.9, radius: 1.15, label: 'Totem Gate' },
  'vine-snare': { clearHeight: 0.62, radius: 0.95, label: 'Vine Snare' },
  'quicksand-pit': { clearHeight: 0.38, radius: 0.95, label: 'Quicksand' },
  'idol-shrine': { clearHeight: 0.78, radius: 1.02, label: 'Idol Shrine' },
};

const DEFAULT_POOL: ObstacleKind[] = ['newsbox-row', 'dog-fence', 'mailbox-row', 'package-spill'];

export function hazardsForLevel(levelId: string): ObstacleKind[] {
  return LEVEL_HAZARD_POOLS[levelId] ?? DEFAULT_POOL;
}

export function pickRandomHazardForLevel(levelId: string): ObstacleKind {
  const pool = hazardsForLevel(levelId);
  return pool[Math.floor(Math.random() * pool.length)];
}

export function hazardLabel(kind: ObstacleKind): string {
  return HAZARD_META[kind].label;
}

export function hazardPoolLabels(levelId: string): string {
  return hazardsForLevel(levelId).map((k) => HAZARD_META[k].label).join(' · ');
}
