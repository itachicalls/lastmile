import { SaveManager } from '../save/SaveManager';
import { Game, type HudData } from '../game/Game';
import { LEVELS } from '../data/levels';
import { DISTRICTS } from '../data/districts';
import { SHOP_ITEMS, itemCost } from '../data/shop';
import { nextLevelId } from '../data/levels';
import type { GameResult } from '../types';
import { menuBackdropHtml } from './menuBackdrop';

type Screen = 'menu' | 'levels' | 'shop' | 'briefing' | 'game' | 'results';

export class UIManager {
  private root: HTMLElement;
  private save: SaveManager;
  private game: Game | null = null;
  private screen: Screen = 'menu';

  constructor(root: HTMLElement, save: SaveManager) {
    this.root = root;
    this.save = save;
    this.showMenu();
  }

  private el(html: string): HTMLElement {
    const d = document.createElement('div');
    d.innerHTML = html.trim();
    return d.firstElementChild as HTMLElement;
  }

  private clear(): void {
    this.root.innerHTML = '';
  }

  private setCanvasVisible(visible: boolean): void {
    const canvas = document.getElementById('game-canvas') as HTMLCanvasElement | null;
    if (canvas) canvas.style.visibility = visible ? 'visible' : 'hidden';
  }

  private wrapScreen(inner: string, className = ''): HTMLElement {
    return this.el(`
      <div class="screen-wrap ${className}">
        ${menuBackdropHtml()}
        ${inner}
      </div>`);
  }

  showMenu(): void {
    this.screen = 'menu';
    this.game?.stop();
    this.setCanvasVisible(false);
    this.clear();
    const s = this.save.get();
    const screen = this.wrapScreen(`
      <div class="screen menu-screen screen-glass">
        <div class="logo-wrap">
          <div class="logo-icon">📦</div>
          <h1>Last Mile</h1>
          <p class="tagline">Courier Rush</p>
        </div>
        <div class="menu-stats">
          <div class="stat-pill"><span>🪙</span> ${s.coins}</div>
          <div class="stat-pill"><span>📦</span> ${s.totalDeliveries} deliveries</div>
        </div>
        <div class="menu-buttons">
          <button class="btn btn-primary btn-glow" id="btn-play">▶ Start Delivery</button>
          <button class="btn btn-secondary" id="btn-shop">🛒 Shop & Loadout</button>
        </div>
        <button class="btn btn-ghost btn-small" id="btn-reset">Reset Save</button>
      </div>
    `);
    this.root.appendChild(screen);
    screen.querySelector('#btn-play')!.addEventListener('click', () => this.showLevels());
    screen.querySelector('#btn-shop')!.addEventListener('click', () => this.showShop());
    screen.querySelector('#btn-reset')!.addEventListener('click', () => {
      if (confirm('Reset all progress?')) {
        this.save.reset();
        this.showMenu();
      }
    });
  }

  showLevels(): void {
    this.screen = 'levels';
    this.setCanvasVisible(false);
    this.clear();
    const s = this.save.get();
    let inner = `
      <div class="screen levels-screen screen-glass">
        <div class="screen-header">
          <h1>Select Route</h1>
          <div class="stat-pill"><span>🪙</span> ${s.coins}</div>
        </div>`;

    for (const district of DISTRICTS.slice(0, 2)) {
      const mood = district.id === 1 ? 'district-sunny' : 'district-downtown';
      inner += `<div class="district-header ${mood}">${district.name}</div><div class="level-grid">`;
      for (const lvl of LEVELS.filter((l) => l.district === district.id)) {
        const locked = !s.unlockedLevels.includes(lvl.id);
        const stars = s.levelStars[lvl.id] ?? 0;
        inner += `
          <div class="level-card ${locked ? 'locked' : ''} ${mood}" data-id="${lvl.id}">
            <div class="level-num">${lvl.id}</div>
            <strong>${lvl.name}</strong>
            <div class="stars">${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}</div>
          </div>`;
      }
      inner += '</div>';
    }

    inner += `<button class="btn btn-secondary" id="btn-back">← Back</button></div>`;
    const screen = this.wrapScreen(inner);
    this.root.appendChild(screen);

    screen.querySelectorAll('.level-card:not(.locked)').forEach((card) => {
      card.addEventListener('click', () => this.showBriefing((card as HTMLElement).dataset.id!));
    });
    screen.querySelector('#btn-back')!.addEventListener('click', () => this.showMenu());
  }

  showBriefing(levelId: string): void {
    const lvl = LEVELS.find((l) => l.id === levelId)!;
    const district = DISTRICTS[lvl.district - 1];
    this.screen = 'briefing';
    this.setCanvasVisible(false);
    this.clear();
    const screen = this.wrapScreen(`
      <div class="screen briefing-screen screen-glass">
        <div class="briefing-badge">${district.name}</div>
        <h1>${lvl.name}</h1>
        <div class="briefing-box">${lvl.briefing}</div>
        <div class="controls-grid">
          <div class="control-item"><kbd>A</kbd><kbd>D</kbd> Steer lanes</div>
          <div class="control-item"><span class="tap-icon">👆</span> Click / tap = shoot (📧 mail · 📦 if stocked)</div>
          <div class="control-item"><kbd>SPACE</kbd> Jump · Green/Red/Yellow aliens run at you</div>
          <div class="control-item">Power-ups: Slow-Mo · Fast Shot · Shield</div>
          <div class="control-item">⚡ Ability · Convoy auto-fights aliens</div>
        </div>
        <button class="btn btn-primary btn-glow" id="btn-start">🚀 Start Delivery</button>
        <button class="btn btn-secondary" id="btn-back">← Back</button>
      </div>
    `);
    this.root.appendChild(screen);
    screen.querySelector('#btn-start')!.addEventListener('click', () => this.startGame(levelId));
    screen.querySelector('#btn-back')!.addEventListener('click', () => this.showLevels());
  }

  showShop(): void {
    this.screen = 'shop';
    this.setCanvasVisible(false);
    this.clear();
    const s = this.save.get();
    let inner = `
      <div class="screen shop-screen screen-glass">
        <div class="screen-header">
          <h1>Courier Shop</h1>
          <div class="stat-pill gold"><span>🪙</span> ${s.coins}</div>
        </div>
        <p class="shop-hint">Equip 2 turrets + 1 ability before runs</p>
        <div class="shop-grid">`;

    for (const item of SHOP_ITEMS) {
      const lvl = this.save.getPurchaseLevel(item.id);
      const maxed = lvl >= item.maxLevel;
      const cost = maxed ? 0 : itemCost(item, lvl);
      const canBuy = !maxed && s.coins >= cost;
      const isTurret = item.category === 'turret';
      const isAbility = item.category === 'ability';
      const equipped =
        (isTurret && s.equippedTurrets.includes(item.id as typeof s.equippedTurrets[0])) ||
        (isAbility && s.equippedAbility === item.id);
      const catIcon = item.category === 'turret' ? '🔫' : item.category === 'ability' ? '⚡' : '⬆';

      inner += `
        <div class="shop-item ${equipped ? 'equipped' : ''}">
          <div class="shop-item-head">
            <span class="shop-cat">${catIcon}</span>
            <h3>${item.name} ${lvl > 0 ? `<small>Lv.${lvl}</small>` : ''}</h3>
          </div>
          <p>${item.description}</p>
          <div class="meta">
            <span class="price">${maxed ? '✓ MAX' : `🪙 ${cost}`}</span>
            <div class="shop-actions">
              ${isTurret || isAbility ? `<button class="btn btn-small btn-secondary equip-btn" data-id="${item.id}">${equipped ? '✓ Equipped' : 'Equip'}</button>` : ''}
              <button class="btn btn-small btn-primary buy-btn" data-id="${item.id}" ${canBuy ? '' : 'disabled'}>${maxed ? 'Maxed' : 'Buy'}</button>
            </div>
          </div>
        </div>`;
    }

    inner += `</div><button class="btn btn-secondary" id="btn-back">← Back</button></div>`;
    const screen = this.wrapScreen(inner);
    this.root.appendChild(screen);

    screen.querySelectorAll('.buy-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = (btn as HTMLElement).dataset.id!;
        const item = SHOP_ITEMS.find((i) => i.id === id)!;
        const cur = this.save.getPurchaseLevel(id);
        if (cur >= item.maxLevel) return;
        const cost = itemCost(item, cur);
        if (this.save.spendCoins(cost)) {
          this.save.setPurchaseLevel(id, cur + 1);
          this.showShop();
        }
      });
    });

    screen.querySelectorAll('.equip-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = (btn as HTMLElement).dataset.id!;
        const item = SHOP_ITEMS.find((i) => i.id === id)!;
        if (item.category === 'turret') {
          if (this.save.getPurchaseLevel(id) <= 0) {
            alert('Buy this turret first!');
            return;
          }
          this.save.equipTurret(id);
        } else if (item.category === 'ability') {
          if (this.save.getPurchaseLevel(id) <= 0) {
            alert('Buy this ability first!');
            return;
          }
          const s2 = this.save.get();
          this.save.equipAbility(s2.equippedAbility === id ? null : id);
        }
        this.showShop();
      });
    });

    screen.querySelector('#btn-back')!.addEventListener('click', () => this.showMenu());
  }

  private startGame(levelId: string): void {
    this.screen = 'game';
    this.setCanvasVisible(true);
    this.clear();

    const hud = this.el(`
      <div class="hud" id="hud">
        <div class="touch-steer touch-steer-left" id="steer-left" aria-label="Steer left">
          <span class="steer-arrow">◀</span>
        </div>
        <div class="touch-steer touch-steer-right" id="steer-right" aria-label="Steer right">
          <span class="steer-arrow">▶</span>
        </div>

        <div class="hud-hearts" id="hud-hearts"></div>
        <div class="hud-ammo" id="hud-ammo">📧</div>
        <div class="hud-powerup hidden" id="hud-powerup"></div>

        <div class="hud-panel hud-right hud-minimal">
          <div class="hud-stat-inline">🪙 <span id="hud-coins">0</span></div>
          <div class="progress-track">
            <div class="progress-fill" id="progress-fill"></div>
          </div>
          <div class="progress-label" id="hud-dist">0m</div>
        </div>

        <div class="fork-hint hidden" id="fork-hint"></div>

        <div class="tap-hint" id="tap-hint">Jump · Shoot · Swerve at forks!</div>

        <div class="combat-banner hidden" id="combat-banner">
          <div class="combat-title" id="combat-title">⚠ INTERCEPT!</div>
          <div class="combat-bar-wrap">
            <div class="combat-bar-fill" id="combat-bar"></div>
          </div>
          <div class="combat-hint">LMB mail · RMB throw 📦 · Convoy fights for you</div>
        </div>

        <div class="scan-prompt hidden" id="scan-prompt"></div>

        <div class="damage-flash hidden" id="damage-flash"></div>

        <div class="hud-bottom">
          <button class="action-btn jump-btn" id="jump-btn" title="Jump (SPACE)">
            <span class="action-icon">⬆</span>
            <span>JUMP</span>
          </button>
          <button class="action-btn shoot-btn" id="shoot-btn" title="Shoot (click)">
            <span class="action-icon" id="shoot-icon">📧</span>
            <span id="shoot-label">SHOOT</span>
            <div class="ability-cd hidden" id="shoot-cd"></div>
          </button>
          <button class="action-btn ability-btn" id="ability-btn" disabled title="Equipped ability">
            <span class="action-icon">⚡</span>
            <span id="ability-label">Ability</span>
            <div class="ability-cd hidden" id="ability-cd"></div>
          </button>
        </div>
      </div>
    `);
    this.root.appendChild(hud);

    const canvas = document.getElementById('game-canvas') as HTMLCanvasElement;
    this.game?.dispose();
    this.game = new Game(canvas, this.save.get(), {
      onHudUpdate: (d) => this.updateHud(d),
      onToast: (msg) => this.toast(msg),
      onCombat: (active) => {
        document.getElementById('combat-banner')?.classList.toggle('hidden', !active);
      },
      onDamageFlash: () => {
        const f = document.getElementById('damage-flash');
        if (f) {
          f.classList.remove('hidden');
          setTimeout(() => f.classList.add('hidden'), 400);
        }
      },
      onEnd: (result) => this.onGameEnd(result),
    });

    const ability = this.save.get().equippedAbility;
    const btn = document.getElementById('ability-btn') as HTMLButtonElement;
    const label = document.getElementById('ability-label');
    if (ability && label) {
      const names: Record<string, string> = { 'smoke-bomb': 'Smoke', 'rally-horn': 'Rally', dash: 'Dash' };
      label.textContent = names[ability] ?? 'Ability';
      btn.disabled = false;
      btn.onclick = () => this.game?.useAbility();
    } else if (label) {
      label.textContent = 'None';
    }

    const hudEl = document.getElementById('hud')!;
    this.game.bindTouchControls(hudEl);

    document.getElementById('jump-btn')!.addEventListener('click', (e) => {
      e.stopPropagation();
      this.game?.jump();
    });

    document.getElementById('shoot-btn')!.addEventListener('click', (e) => {
      e.stopPropagation();
      this.game?.shoot();
    });

    btn.addEventListener('pointerdown', (e) => e.stopPropagation());

    this.game.startLevel(levelId);
  }

  private updateHud(d: HudData): void {
    const heartsEl = document.getElementById('hud-hearts');
    if (heartsEl) {
      heartsEl.textContent = '❤'.repeat(d.integrity) + '🖤'.repeat(Math.max(0, d.maxIntegrity - d.integrity));
    }

    const set = (id: string, v: string) => {
      const el = document.getElementById(id);
      if (el) el.textContent = v;
    };
    set('hud-coins', String(d.coins));
    set('hud-dist', `${Math.floor(d.distance)}m`);

    const prog = document.getElementById('progress-fill');
    if (prog) prog.style.width = `${Math.min(100, (d.distance / d.totalDistance) * 100)}%`;

    const ammo = document.getElementById('hud-ammo');
    if (ammo) ammo.textContent = d.packages > 0 ? `📦×${d.packages}` : '📧';

    const shootIcon = document.getElementById('shoot-icon');
    const shootLabel = document.getElementById('shoot-label');
    if (shootIcon) shootIcon.textContent = d.packages > 0 ? '📦' : '📧';
    if (shootLabel) shootLabel.textContent = d.packages > 0 ? 'PACK' : 'MAIL';

    const puEl = document.getElementById('hud-powerup');
    if (puEl) {
      if (d.powerUpLabel) {
        puEl.textContent = d.powerUpLabel;
        puEl.classList.remove('hidden');
      } else {
        puEl.classList.add('hidden');
      }
    }

    if (d.invincible) {
      const heartsEl = document.getElementById('hud-hearts');
      heartsEl?.classList.add('invincible-glow');
    } else {
      document.getElementById('hud-hearts')?.classList.remove('invincible-glow');
    }

    const forkHint = document.getElementById('fork-hint');
    if (forkHint) {
      if (d.forkHint) {
        forkHint.textContent = d.forkHint;
        forkHint.classList.remove('hidden');
      } else {
        forkHint.classList.add('hidden');
      }
    }

    const shootBtn = document.getElementById('shoot-btn');
    const shootCd = document.getElementById('shoot-cd');
    if (shootBtn) shootBtn.classList.toggle('ready', d.shootReady);
    if (shootCd) shootCd.classList.toggle('hidden', d.shootReady);

    const jumpBtn = document.getElementById('jump-btn');
    if (jumpBtn) jumpBtn.classList.toggle('ready', d.jumpReady);

    const tapHint = document.getElementById('tap-hint');
    if (tapHint) tapHint.classList.toggle('hidden', false);

    const cdEl = document.getElementById('ability-cd');
    const btn = document.getElementById('ability-btn') as HTMLButtonElement;
    if (cdEl && btn) {
      if (d.abilityCd > 0) {
        cdEl.classList.remove('hidden');
        cdEl.textContent = Math.ceil(d.abilityCd).toString();
        btn.disabled = true;
      } else if (d.abilityReady) {
        cdEl.classList.add('hidden');
        btn.disabled = false;
      }
    }
  }

  private toast(msg: string): void {
    const t = this.el(`<div class="message-toast">${msg}</div>`);
    this.root.appendChild(t);
    setTimeout(() => t.remove(), 2200);
  }

  private onGameEnd(result: GameResult): void {
    if (result.won) {
      this.save.addCoins(result.coinsEarned);
      this.save.setStars(result.levelId, result.stars);
      this.save.recordWin();
      const next = nextLevelId(result.levelId);
      if (next) this.save.unlockLevel(next);
    } else {
      this.save.addCoins(Math.floor(result.coinsEarned * 0.3));
    }
    this.showResults(result);
  }

  private showResults(result: GameResult): void {
    this.screen = 'results';
    this.game?.stop();
    this.setCanvasVisible(false);
    this.clear();

    const next = nextLevelId(result.levelId);
    const s = this.save.get();
    const canNext = result.won && next && s.unlockedLevels.includes(next);

    const screen = this.wrapScreen(`
      <div class="screen results-screen screen-glass ${result.won ? 'won' : 'lost'}">
        <div class="results-icon">${result.won ? '📦' : '💀'}</div>
        <div class="results-title">${result.won ? 'Delivered!' : 'Mission Failed'}</div>
        ${result.deathReason ? `<p class="death-reason">${result.deathReason}</p>` : ''}
        <div class="stars-display">${'★'.repeat(result.stars)}${'☆'.repeat(3 - result.stars)}</div>
        <div class="results-reward">+${result.coinsEarned} 🪙 · ${result.time.toFixed(1)}s</div>
        <div class="results-buttons">
          ${canNext ? `<button class="btn btn-primary btn-glow" id="btn-next">Next Level →</button>` : ''}
          <button class="btn btn-primary" id="btn-retry">↺ Retry</button>
          <button class="btn btn-secondary" id="btn-shop">🛒 Shop</button>
          <button class="btn btn-secondary" id="btn-menu">Menu</button>
        </div>
      </div>
    `);
    this.root.appendChild(screen);

    if (canNext) {
      screen.querySelector('#btn-next')!.addEventListener('click', () => this.showBriefing(next!));
    }
    screen.querySelector('#btn-retry')!.addEventListener('click', () => this.showBriefing(result.levelId));
    screen.querySelector('#btn-shop')!.addEventListener('click', () => this.showShop());
    screen.querySelector('#btn-menu')!.addEventListener('click', () => this.showMenu());
  }
}
