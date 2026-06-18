export type GateEffect = {
  convoy?: number;
  convoyMul?: number;
  coins?: number;
  stamps?: number;
  integrity?: number;
  speedMul?: number;
  packages?: number;
  spawnEnemies?: EnemyType;
};

export type EnemyType = 'pickpocket' | 'rival' | 'drone' | 'boss';

export type BlockerKind = 'scan' | 'stamp' | 'ram' | 'toll';

export type ObstacleKind = 'barricade' | 'pod' | 'cones' | 'debris';

export type SegmentType =
  | { kind: 'gate'; z: number; safe: 'left' | 'right' }
  | { kind: 'blocker'; z: number; blocker: BlockerKind; required?: number; label: string; packageCost?: number }
  | { kind: 'enemy'; z: number; enemy: EnemyType; count: number }
  | { kind: 'runner'; z: number; tier?: 'grunt' | 'raider' | 'stalker' }
  | { kind: 'coins'; z: number; count: number; spread?: number }
  | { kind: 'packages'; z: number; count: number; spread?: number }
  | { kind: 'obstacles'; z: number; items: { x: number; type: ObstacleKind }[] }
  | { kind: 'dropoff'; z: number };

export type GateOption = {
  label: string;
  effect: GateEffect;
  packageCost?: number;
};

export type DistrictTheme = {
  id: number;
  name: string;
  sky: string;
  skyBottom: string;
  fog: string;
  ground: string;
  ambient: number;
  sun: number;
  fogNear: number;
  fogFar: number;
  buildingHue: number;
};

export type LevelDef = {
  id: string;
  district: number;
  name: string;
  briefing: string;
  segments: SegmentType[];
  timeLimit: number;
  difficulty: number;
};

export type TurretId = 'pepper-drone' | 'box-cannon' | 'helper-beacon';
export type AbilityId = 'smoke-bomb' | 'rally-horn' | 'dash';
export type UpgradeId = 'convoy-cap' | 'start-convoy' | 'package-armor' | 'coin-magnet';

export type ShopItem = {
  id: TurretId | AbilityId | UpgradeId;
  category: 'turret' | 'ability' | 'upgrade';
  name: string;
  description: string;
  baseCost: number;
  maxLevel: number;
};

export type SaveData = {
  coins: number;
  unlockedLevels: string[];
  levelStars: Record<string, number>;
  purchases: Record<string, number>;
  equippedTurrets: TurretId[];
  equippedAbility: AbilityId | null;
  totalDeliveries: number;
};

export type RunState = {
  convoy: number;
  maxConvoy: number;
  integrity: number;
  maxIntegrity: number;
  packages: number;
  maxPackages: number;
  stamps: number;
  coins: number;
  speed: number;
  baseSpeed: number;
  distance: number;
  integrityLost: boolean;
  bonusRoute: boolean;
};

export type GameResult = {
  won: boolean;
  stars: number;
  coinsEarned: number;
  levelId: string;
  time: number;
  deathReason?: string;
};

export const DEFAULT_SAVE: SaveData = {
  coins: 0,
  unlockedLevels: ['1-1'],
  levelStars: {},
  purchases: {},
  equippedTurrets: [],
  equippedAbility: null,
  totalDeliveries: 0,
};

export const INITIAL_RUN: RunState = {
  convoy: 5,
  maxConvoy: 50,
  integrity: 3,
  maxIntegrity: 3,
  packages: 3,
  maxPackages: 25,
  stamps: 0,
  coins: 0,
  speed: 11,
  baseSpeed: 11,
  distance: 0,
  integrityLost: false,
  bonusRoute: false,
};

export type DeathReason = 'stolen' | 'overwhelmed' | 'timeout' | 'blocked' | 'wrong_turn';
