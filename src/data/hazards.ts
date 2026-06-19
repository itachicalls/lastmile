import type { ObstacleKind } from '../types';

export type HazardMeta = {
  clearHeight: number;
  radius: number;
  label: string;
};

/** Each level gets exactly one signature hazard type. */
export const LEVEL_HAZARD: Record<string, ObstacleKind> = {
  '1-1': 'newsbox-row',
  '1-2': 'dog-fence',
  '1-3': 'party-tent',
  '1-4': 'bin-alley',
  '1-5': 'hoa-gate',
  '2-1': 'news-stand',
  '2-2': 'food-cart',
  '2-3': 'alien-beacon',
  '2-4': 'fallen-sign',
  '2-5': 'checkpoint',
  '3-1': 'cactus-wall',
  '3-2': 'mirage-rock',
  '3-3': 'rockslide',
  '3-4': 'sand-drift',
  '3-5': 'skull-rock',
  '4-1': 'fallen-log',
  '4-2': 'temple-rubble',
  '4-3': 'thorn-bramble',
  '4-4': 'flood-wreck',
  '4-5': 'totem-gate',
};

export const HAZARD_META: Record<ObstacleKind, HazardMeta> = {
  'newsbox-row': { clearHeight: 0.55, radius: 0.9, label: 'News Boxes' },
  'dog-fence': { clearHeight: 0.62, radius: 1.0, label: 'Dog Fence' },
  'party-tent': { clearHeight: 0.58, radius: 1.05, label: 'Party Tent' },
  'bin-alley': { clearHeight: 0.72, radius: 1.0, label: 'Bin Alley' },
  'hoa-gate': { clearHeight: 0.88, radius: 1.15, label: 'HOA Gate' },
  'news-stand': { clearHeight: 0.68, radius: 0.95, label: 'News Stand' },
  'food-cart': { clearHeight: 0.75, radius: 1.0, label: 'Food Cart' },
  'alien-beacon': { clearHeight: 0.55, radius: 0.92, label: 'Alien Beacon' },
  'fallen-sign': { clearHeight: 0.48, radius: 0.88, label: 'Fallen Sign' },
  checkpoint: { clearHeight: 0.85, radius: 1.12, label: 'Checkpoint' },
  'cactus-wall': { clearHeight: 0.65, radius: 1.05, label: 'Cactus Wall' },
  'mirage-rock': { clearHeight: 0.52, radius: 0.95, label: 'Mirage Rocks' },
  rockslide: { clearHeight: 0.58, radius: 1.08, label: 'Rockslide' },
  'sand-drift': { clearHeight: 0.45, radius: 0.9, label: 'Sand Drift' },
  'skull-rock': { clearHeight: 0.62, radius: 1.05, label: 'Skull Rock' },
  'fallen-log': { clearHeight: 0.55, radius: 1.0, label: 'Fallen Log' },
  'temple-rubble': { clearHeight: 0.6, radius: 1.02, label: 'Temple Rubble' },
  'thorn-bramble': { clearHeight: 0.68, radius: 0.95, label: 'Thorn Bramble' },
  'flood-wreck': { clearHeight: 0.5, radius: 0.98, label: 'Flood Wreck' },
  'totem-gate': { clearHeight: 0.9, radius: 1.15, label: 'Totem Gate' },
};

export function hazardForLevel(levelId: string): ObstacleKind {
  return LEVEL_HAZARD[levelId] ?? 'newsbox-row';
}

export function hazardLabel(kind: ObstacleKind): string {
  return HAZARD_META[kind].label;
}
