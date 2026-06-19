import { DEFAULT_SAVE, type SaveData, type MailmanId } from '../types';

const KEY = 'last-mile-save';

export class SaveManager {
  private data: SaveData;

  constructor() {
    this.data = this.load();
  }

  private load(): SaveData {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) return { ...DEFAULT_SAVE, ...JSON.parse(raw) };
    } catch {
      /* ignore */
    }
    return { ...DEFAULT_SAVE };
  }

  save(): void {
    localStorage.setItem(KEY, JSON.stringify(this.data));
  }

  get(): SaveData {
    return this.data;
  }

  addCoins(amount: number): void {
    this.data.coins += amount;
    this.save();
  }

  spendCoins(amount: number): boolean {
    if (this.data.coins < amount) return false;
    this.data.coins -= amount;
    this.save();
    return true;
  }

  unlockLevel(id: string): void {
    if (!this.data.unlockedLevels.includes(id)) {
      this.data.unlockedLevels.push(id);
      this.save();
    }
  }

  setStars(levelId: string, stars: number): void {
    const prev = this.data.levelStars[levelId] ?? 0;
    if (stars > prev) {
      this.data.levelStars[levelId] = stars;
      this.save();
    }
  }

  getPurchaseLevel(id: string): number {
    return this.data.purchases[id] ?? 0;
  }

  setPurchaseLevel(id: string, level: number): void {
    this.data.purchases[id] = level;
    this.save();
  }

  equipTurret(id: string): void {
    const t = this.data.equippedTurrets;
    if (t.includes(id as SaveData['equippedTurrets'][0])) {
      this.data.equippedTurrets = t.filter((x) => x !== id);
    } else if (t.length < 2) {
      this.data.equippedTurrets.push(id as SaveData['equippedTurrets'][0]);
    }
    this.save();
  }

  equipAbility(id: string | null): void {
    this.data.equippedAbility = id as SaveData['equippedAbility'];
    this.save();
  }

  setCharacter(id: MailmanId): void {
    this.data.selectedCharacter = id;
    this.save();
  }

  setMobileAutoFire(enabled: boolean): void {
    this.data.mobileAutoFire = enabled;
    this.save();
  }

  recordWin(): void {
    this.data.totalDeliveries += 1;
    this.save();
  }

  reset(): void {
    this.data = { ...DEFAULT_SAVE };
    this.save();
  }
}
