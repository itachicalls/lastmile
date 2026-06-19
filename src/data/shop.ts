import type { ShopItem } from '../types';

export const SHOP_ITEMS: ShopItem[] = [
  {
    id: 'pepper-drone',
    category: 'gear',
    name: 'Mail Blaster',
    description: 'Faster shoot cooldown — spam mail at charging aliens.',
    baseCost: 70,
    maxLevel: 3,
  },
  {
    id: 'box-cannon',
    category: 'gear',
    name: 'Parcel Launcher',
    description: 'Package & mail shots hit harder — drop stalkers faster.',
    baseCost: 110,
    maxLevel: 3,
  },
  {
    id: 'helper-beacon',
    category: 'gear',
    name: 'Target Lock',
    description: 'Auto-aim shots deal bonus damage to runner aliens.',
    baseCost: 90,
    maxLevel: 3,
  },
  {
    id: 'homing-stamp',
    category: 'gear',
    name: 'Tracking Stamps',
    description: 'Mail shots curve toward the nearest charging alien.',
    baseCost: 125,
    maxLevel: 3,
  },
  {
    id: 'spread-mail',
    category: 'gear',
    name: 'Spread Envelope',
    description: 'Fire a 3-way mail burst — blanket the lane.',
    baseCost: 95,
    maxLevel: 2,
  },
  {
    id: 'pierce-pack',
    category: 'gear',
    name: 'Piercing Post',
    description: 'Mail punches through multiple aliens in a line.',
    baseCost: 105,
    maxLevel: 3,
  },
  {
    id: 'smoke-bomb',
    category: 'ability',
    name: 'Smoke Screen',
    description: 'Aliens cannot tackle you for 4 seconds. 12s cooldown.',
    baseCost: 140,
    maxLevel: 2,
  },
  {
    id: 'rally-horn',
    category: 'ability',
    name: 'Shield Burst',
    description: 'Brief invincibility to shrug off a hit. 15s cooldown.',
    baseCost: 120,
    maxLevel: 2,
  },
  {
    id: 'dash',
    category: 'ability',
    name: 'Express Dash',
    description: 'Invulnerable burst — smash through one hazard. 10s cooldown.',
    baseCost: 130,
    maxLevel: 2,
  },
  {
    id: 'package-armor',
    category: 'upgrade',
    name: 'Extra Heart',
    description: '+1 max life — survive an extra obstacle or alien hit.',
    baseCost: 80,
    maxLevel: 3,
  },
  {
    id: 'jump-boots',
    category: 'upgrade',
    name: 'Jump Boots',
    description: 'Higher jumps — clear barricades and pods more easily.',
    baseCost: 60,
    maxLevel: 3,
  },
  {
    id: 'starter-pouches',
    category: 'upgrade',
    name: 'Starter Pouches',
    description: 'Begin each run with extra packages already collected.',
    baseCost: 55,
    maxLevel: 4,
  },
  {
    id: 'coin-magnet',
    category: 'upgrade',
    name: 'Coin Magnet',
    description: 'Wider pickup radius for coins and power-ups.',
    baseCost: 50,
    maxLevel: 3,
  },
];

export function itemCost(item: ShopItem, currentLevel: number): number {
  return Math.floor(item.baseCost * Math.pow(1.55, currentLevel));
}

export const SHOP_SECTIONS: { key: ShopItem['category']; label: string; hint: string }[] = [
  { key: 'gear', label: 'Gear', hint: 'Equip up to 2' },
  { key: 'ability', label: 'Abilities', hint: 'Equip 1' },
  { key: 'upgrade', label: 'Upgrades', hint: 'Passive — always on' },
];
