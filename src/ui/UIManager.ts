import { SaveManager } from '../save/SaveManager';
import { Game, type HudData } from '../game/Game';
import { LEVELS, districtsWithLevels } from '../data/levels';
import { DISTRICTS, getDistrict } from '../data/districts';
import { SHOP_ITEMS, SHOP_SECTIONS, itemCost } from '../data/shop';
import { nextLevelId } from '../data/levels';
import type { GameResult } from '../types';
import { CHARACTERS } from '../data/characters';
import type { MailmanId } from '../types';
import { menuBackdropHtml } from './menuBackdrop';
import { mountCharacterPreview } from './CharacterPreview';
import { IS_MOBILE } from '../game/platform';
import { setGameActive } from '../game/viewport';

const DISTRICT_MOOD: Record<number, string> = {
  1: 'district-sunny',
  2: 'district-downtown',
  3: 'district-desert',
  4: 'district-jungle',
};

type Screen = 'menu' | 'levels' | 'shop' | 'briefing' | 'game' | 'results';

export class UIManager {
  private root: HTMLElement;
  private save: SaveManager;
  private game: Game | null = null;
  private screen: Screen = 'menu';
  private hudCache: Partial<HudData> = {};
  private tapHintTimer: ReturnType<typeof setTimeout> | null = null;

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
    if (this.tapHintTimer) {
      clearTimeout(this.tapHintTimer);
      this.tapHintTimer = null;
    }
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
    setGameActive(false);
    this.game?.stop();
    this.setCanvasVisible(false);
    this.clear();
    const s = this.save.get();
    const selected = s.selectedCharacter ?? 'johnny';
    const characterCards = CHARACTERS.map(
      (c) => `
        <button type="button" class="character-card ${selected === c.id ? 'selected' : ''}" data-id="${c.id}" aria-pressed="${selected === c.id}">
          <div class="character-preview" data-preview="${c.id}" aria-hidden="true"></div>
          <span class="character-name">${c.name}</span>
          <span class="character-tag">${c.tagline}</span>
        </button>`
    ).join('');

    const screen = this.wrapScreen(`
      <div class="screen menu-screen">
        <div class="menu-hero-card">
          <div class="menu-hero-glow" aria-hidden="true"></div>
          <div class="logo-wrap">
            <div class="logo-emblem" aria-hidden="true">
              <span class="logo-emblem-ring"></span>
              <span class="logo-emblem-icon">📬</span>
            </div>
            <h1 class="game-title">
              <span class="title-mail">MAIL</span>
              <span class="title-run">RUN</span>
            </h1>
            <p class="game-tagline">Steer · Shoot · Deliver</p>
          </div>
          <div class="character-select">
            <p class="character-select-label">Pick your courier</p>
            <div class="character-cards">${characterCards}</div>
          </div>
          <div class="menu-stats">
            <div class="stat-pill stat-pill-glow"><span>🪙</span> ${s.coins}</div>
            <div class="stat-pill"><span>📦</span> ${s.totalDeliveries} drops</div>
          </div>
          <div class="menu-buttons">
            <button class="btn btn-primary btn-glow btn-hero" id="btn-play">▶ Start Run</button>
            <button class="btn btn-secondary btn-hero-secondary" id="btn-shop">🛒 Shop & Loadout</button>
          </div>
          <button class="btn btn-ghost btn-small" id="btn-reset">Reset Save</button>
        </div>
      </div>
    `);
    this.root.appendChild(screen);

    screen.querySelectorAll('.character-preview').forEach((el) => {
      const id = (el as HTMLElement).dataset.preview as MailmanId;
      mountCharacterPreview(el as HTMLElement, id);
    });

    screen.querySelectorAll('.character-card').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = (btn as HTMLElement).dataset.id as MailmanId;
        this.save.setCharacter(id);
        screen.querySelectorAll('.character-card').forEach((el) => {
          const card = el as HTMLElement;
          const on = card.dataset.id === id;
          card.classList.toggle('selected', on);
          card.setAttribute('aria-pressed', String(on));
        });
      });
    });

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
      <div class="screen levels-screen screen-glass scroll-touch">
        <div class="screen-header">
          <h1>Select Route</h1>
          <div class="stat-pill"><span>🪙</span> ${s.coins}</div>
        </div>`;

    for (const districtId of districtsWithLevels()) {
      const district = getDistrict(districtId);
      const mood = DISTRICT_MOOD[districtId] ?? 'district-sunny';
      inner += `<div class="district-header ${mood}">${district.name}</div><div class="level-grid">`;
      for (const lvl of LEVELS.filter((l) => l.district === districtId)) {
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
    const district = getDistrict(lvl.district);
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
    setGameActive(false);
    this.setCanvasVisible(false);
    this.clear();
    const s = this.save.get();

    let gridHtml = '';
    for (const section of SHOP_SECTIONS) {
      const items = SHOP_ITEMS.filter((i) => i.category === section.key);
      if (!items.length) continue;
      gridHtml += `<h2 class="shop-section-title">${section.label} <span class="shop-section-hint">${section.hint}</span></h2>`;
      gridHtml += '<div class="shop-grid">';

      for (const item of items) {
        const lvl = this.save.getPurchaseLevel(item.id);
        const maxed = lvl >= item.maxLevel;
        const cost = maxed ? 0 : itemCost(item, lvl);
        const canBuy = !maxed && s.coins >= cost;
        const isGear = item.category === 'gear';
        const isAbility = item.category === 'ability';
        const equipped =
          (isGear && s.equippedTurrets.includes(item.id as typeof s.equippedTurrets[0])) ||
          (isAbility && s.equippedAbility === item.id);
        const catIcon = isGear ? '🎯' : isAbility ? '⚡' : '💎';

        gridHtml += `
        <div class="shop-item ${equipped ? 'equipped' : ''}">
          <div class="shop-item-head">
            <span class="shop-cat">${catIcon}</span>
            <h3>${item.name} ${lvl > 0 ? `<small>Lv.${lvl}</small>` : ''}</h3>
          </div>
          <p>${item.description}</p>
          <div class="meta">
            <span class="price">${maxed ? '✓ MAX' : `🪙 ${cost}`}</span>
            <div class="shop-actions">
              ${isGear || isAbility ? `<button class="btn btn-small btn-secondary equip-btn" data-id="${item.id}">${equipped ? '✓ Equipped' : 'Equip'}</button>` : ''}
              <button class="btn btn-small btn-primary buy-btn" data-id="${item.id}" ${canBuy ? '' : 'disabled'}>${maxed ? 'Maxed' : 'Buy'}</button>
            </div>
          </div>
        </div>`;
      }
      gridHtml += '</div>';
    }

    const inner = `
      <div class="screen shop-screen screen-glass">
        <div class="shop-topbar">
          <button class="btn btn-secondary shop-back-btn" id="btn-back" type="button">← Back</button>
          <h1 class="shop-title">Shop</h1>
          <div class="stat-pill gold shop-coins"><span>🪙</span> ${s.coins}</div>
        </div>
        <p class="shop-hint">Buy upgrades · equip up to 2 gear + 1 ability</p>
        <div class="shop-scroll scroll-touch">${gridHtml}</div>
      </div>`;

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
        if (item.category === 'gear') {
          if (this.save.getPurchaseLevel(id) <= 0) {
            alert('Buy this gear first!');
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
    setGameActive(true);
    this.hudCache = {};
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
        ${IS_MOBILE ? `<button type="button" class="autofire-toggle ${this.save.get().mobileAutoFire ? 'on' : 'off'}" id="autofire-toggle" aria-pressed="${this.save.get().mobileAutoFire}">
          <span class="autofire-icon">🔫</span>
          <span id="autofire-label">${this.save.get().mobileAutoFire ? 'AUTO ON' : 'AUTO OFF'}</span>
        </button>` : ''}

        <div class="hud-panel hud-right hud-minimal">
          <div class="hud-stat-inline">🪙 <span id="hud-coins">0</span></div>
          <div class="progress-track">
            <div class="progress-fill" id="progress-fill"></div>
          </div>
          <div class="progress-label" id="hud-dist">0m</div>
        </div>

        <div class="fork-hint hidden" id="fork-hint"></div>
        <div class="screen-blur hidden" id="screen-blur"></div>

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
          <button class="action-btn special-btn" id="special-btn" title="Ground Quake (E) — 3 hits">
            <div class="special-meter"><div class="special-fill" id="special-fill"></div></div>
            <span class="action-icon">💥</span>
            <span id="special-label">QUAKE</span>
            <span class="special-count hidden" id="special-shakes"></span>
          </button>
          ${this.save.get().equippedAbility ? `<button class="action-btn ability-btn" id="ability-btn" title="Shop ability (Q)">
            <span class="action-icon">⚡</span>
            <span id="ability-label">Ability</span>
            <div class="ability-cd hidden" id="ability-cd"></div>
          </button>` : ''}
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
    const btn = document.getElementById('ability-btn') as HTMLButtonElement | null;
    const label = document.getElementById('ability-label');
    if (ability && btn && label) {
      const names: Record<string, string> = { 'smoke-bomb': 'Smoke', 'rally-horn': 'Rally', dash: 'Dash' };
      label.textContent = names[ability] ?? 'Ability';
      btn.disabled = false;
      btn.onclick = () => this.game?.useAbility();
      btn.addEventListener('pointerdown', (e) => e.stopPropagation());
    }

    const autofireBtn = document.getElementById('autofire-toggle');
    if (autofireBtn) {
      autofireBtn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const next = !this.save.get().mobileAutoFire;
        this.save.setMobileAutoFire(next);
        this.game?.setAutoFire(next);
        autofireBtn.classList.toggle('on', next);
        autofireBtn.classList.toggle('off', !next);
        autofireBtn.setAttribute('aria-pressed', String(next));
        const lbl = document.getElementById('autofire-label');
        if (lbl) lbl.textContent = next ? 'AUTO ON' : 'AUTO OFF';
      });
    }

    const hudEl = document.getElementById('hud')!;
    this.game.bindTouchControls(hudEl);

    document.getElementById('jump-btn')!.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.game?.jump();
    });

    document.getElementById('shoot-btn')!.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.game?.shoot();
    });

    document.getElementById('special-btn')!.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.game?.useSpecialQuake();
    });

    this.game.startLevel(levelId);

    this.tapHintTimer = setTimeout(() => {
      document.getElementById('tap-hint')?.classList.add('hidden');
      this.tapHintTimer = null;
    }, 3000);
  }

  private updateHud(d: HudData): void {
    const heartsEl = document.getElementById('hud-hearts');
    if (
      heartsEl &&
      (d.integrity !== this.hudCache.integrity || d.maxIntegrity !== this.hudCache.maxIntegrity)
    ) {
      heartsEl.textContent = '❤'.repeat(d.integrity) + '🖤'.repeat(Math.max(0, d.maxIntegrity - d.integrity));
    }

    if (d.coins !== this.hudCache.coins) {
      const el = document.getElementById('hud-coins');
      if (el) el.textContent = String(d.coins);
    }

    if (d.distance !== this.hudCache.distance) {
      const el = document.getElementById('hud-dist');
      if (el) el.textContent = `${Math.floor(d.distance)}m`;
    }

    if (d.distance !== this.hudCache.distance || d.totalDistance !== this.hudCache.totalDistance) {
      const prog = document.getElementById('progress-fill');
      if (prog) prog.style.width = `${Math.min(100, (d.distance / d.totalDistance) * 100)}%`;
    }

    if (d.packages !== this.hudCache.packages) {
      const ammo = document.getElementById('hud-ammo');
      if (ammo) ammo.textContent = d.packages > 0 ? `📦×${d.packages}` : '📧';
      const shootIcon = document.getElementById('shoot-icon');
      const shootLabel = document.getElementById('shoot-label');
      if (shootIcon) shootIcon.textContent = d.packages > 0 ? '📦' : '📧';
      if (shootLabel) shootLabel.textContent = d.packages > 0 ? 'PACK' : 'MAIL';
    }

    const puEl = document.getElementById('hud-powerup');
    if (puEl && d.powerUpLabel !== this.hudCache.powerUpLabel) {
      if (d.powerUpLabel) {
        puEl.textContent = d.powerUpLabel;
        puEl.classList.remove('hidden');
      } else {
        puEl.classList.add('hidden');
      }
    }

    if (d.invincible !== this.hudCache.invincible) {
      if (d.invincible) heartsEl?.classList.add('invincible-glow');
      else document.getElementById('hud-hearts')?.classList.remove('invincible-glow');
    }

    if (d.screenBlur !== this.hudCache.screenBlur) {
      document.getElementById('screen-blur')?.classList.toggle('hidden', !d.screenBlur);
    }

    const forkHint = document.getElementById('fork-hint');
    if (forkHint && d.forkHint !== this.hudCache.forkHint) {
      if (d.forkHint) {
        forkHint.textContent = d.forkHint;
        forkHint.classList.remove('hidden');
      } else {
        forkHint.classList.add('hidden');
      }
    }

    if (d.shootReady !== this.hudCache.shootReady) {
      document.getElementById('shoot-btn')?.classList.toggle('ready', d.shootReady);
      document.getElementById('shoot-cd')?.classList.toggle('hidden', d.shootReady);
    }

    if (
      d.specialCharge !== this.hudCache.specialCharge ||
      d.specialReady !== this.hudCache.specialReady ||
      d.specialShakes !== this.hudCache.specialShakes
    ) {
      const fill = document.getElementById('special-fill');
      if (fill) fill.style.height = `${Math.round(d.specialCharge * 100)}%`;
      const specialBtn = document.getElementById('special-btn');
      specialBtn?.classList.toggle('ready', d.specialReady);
      const shakeEl = document.getElementById('special-shakes');
      if (shakeEl) {
        if (d.specialShakes > 0) {
          shakeEl.textContent = String(d.specialShakes);
          shakeEl.classList.remove('hidden');
        } else {
          shakeEl.classList.add('hidden');
        }
      }
    }

    if (d.jumpReady !== this.hudCache.jumpReady) {
      document.getElementById('jump-btn')?.classList.toggle('ready', d.jumpReady);
    }

    const cdEl = document.getElementById('ability-cd');
    const btn = document.getElementById('ability-btn') as HTMLButtonElement | null;
    if (cdEl && btn && (d.abilityCd !== this.hudCache.abilityCd || d.abilityReady !== this.hudCache.abilityReady)) {
      if (d.abilityCd > 0) {
        cdEl.classList.remove('hidden');
        cdEl.textContent = Math.ceil(d.abilityCd).toString();
        btn.disabled = true;
      } else if (d.abilityReady) {
        cdEl.classList.add('hidden');
        btn.disabled = false;
      }
    }

    this.hudCache = { ...d };
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
