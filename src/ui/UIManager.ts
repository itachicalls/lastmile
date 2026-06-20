import { SaveManager } from '../save/SaveManager';
import { Game, type HudData } from '../game/Game';
import { LEVELS, districtsWithLevels } from '../data/levels';
import { DISTRICTS, getDistrict } from '../data/districts';
import { SHOP_ITEMS, SHOP_SECTIONS, itemCost } from '../data/shop';
import { nextLevelId } from '../data/levels';
import type { GameResult, LevelDef } from '../types';
import { CHARACTERS } from '../data/characters';
import type { MailmanId } from '../types';
import { menuBackdropHtml } from './menuBackdrop';
import { mountCharacterPreview } from './CharacterPreview';
import { IS_MOBILE } from '../game/platform';
import { setGameActive } from '../game/viewport';
import { hazardPoolLabels } from '../data/hazards';
import { TokenGate } from '../wallet/TokenGate';
import { GAME_TOKEN_MINT, MIN_HOLDING_USD, PUMP_FUN_URL, shortMint, TOKEN_GATE_ENABLED } from '../wallet/config';

const DISTRICT_MOOD: Record<number, string> = {
  1: 'district-sunny',
  2: 'district-downtown',
  3: 'district-desert',
  4: 'district-jungle',
  5: 'district-industrial',
  6: 'district-neon',
  7: 'district-blackzone',
};

const DISTRICT_META: Record<number, { icon: string; tagline: string }> = {
  1: { icon: '🏡', tagline: 'Suburban first contacts — aliens in the hedges' },
  2: { icon: '🏙️', tagline: 'Downtown chaos — deliver through the warzone' },
  3: { icon: '🏜️', tagline: 'Desert heat — sand, scorpions, and saucers' },
  4: { icon: '🌴', tagline: 'Jungle overrun — vines, spores, and stalkers' },
  5: { icon: '🏭', tagline: 'Industrial rain — acid leaks and blackouts' },
  6: { icon: '🌃', tagline: 'Neon night — synthwave slaughter highway' },
  7: { icon: '☠️', tagline: 'The Black Zone — no mercy, no overtime' },
};

function levelDropoffZ(lvl: LevelDef): number {
  for (let i = lvl.segments.length - 1; i >= 0; i--) {
    const seg = lvl.segments[i];
    if (seg.kind === 'dropoff') return seg.z;
  }
  return 750;
}

function hazardChips(levelId: string): string {
  return hazardPoolLabels(levelId)
    .split(' · ')
    .map((h) => `<span class="hazard-chip">${h}</span>`)
    .join('');
}

type Screen = 'menu' | 'levels' | 'shop' | 'briefing' | 'game' | 'results';

export class UIManager {
  private root: HTMLElement;
  private save: SaveManager;
  private tokenGate: TokenGate;
  private gateUnsub: (() => void) | null = null;
  private menuScreen: HTMLElement | null = null;
  private game: Game | null = null;
  private screen: Screen = 'menu';
  private hudCache: Partial<HudData> = {};
  private tapHintTimer: ReturnType<typeof setTimeout> | null = null;
  private activeLevelId = '';

  constructor(root: HTMLElement, save: SaveManager, tokenGate: TokenGate) {
    this.root = root;
    this.save = save;
    this.tokenGate = tokenGate;
    this.gateUnsub = tokenGate.subscribe(() => {
      if (this.screen === 'menu' && this.menuScreen) this.syncWalletGateUI(this.menuScreen);
    });
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
          ${TOKEN_GATE_ENABLED ? `
          <div class="wallet-gate" id="wallet-gate">
            <div class="wallet-gate-accent" aria-hidden="true"></div>
            <div class="wallet-gate-head">
              <div class="wallet-gate-brand">
                <span class="wallet-gate-icon" aria-hidden="true">◎</span>
                <span class="wallet-gate-badge">Holder Gate</span>
              </div>
              <code class="wallet-gate-mint" title="${GAME_TOKEN_MINT}">${shortMint()}</code>
            </div>
            <p class="wallet-gate-desc">Connect <strong>Phantom</strong>, sign, and hold <strong>$${MIN_HOLDING_USD}+</strong> of the token.</p>
            <div class="wallet-gate-body">
              <div class="wallet-status-chip" id="wallet-status-chip">
                <span class="wallet-status-dot" id="wallet-status-dot" aria-hidden="true"></span>
                <span id="wallet-status-label">Ready to connect</span>
              </div>
              <div class="wallet-gate-status" id="wallet-gate-status">
                <div class="wallet-message">Tap Connect Phantom — approve connection, then approve the signature.</div>
              </div>
              <div class="wallet-gate-actions">
                <button type="button" class="wallet-btn wallet-btn-connect" id="btn-wallet-connect">Connect Phantom</button>
                <div class="wallet-connected-pill hidden" id="wallet-connected-pill" aria-live="polite">
                  <span class="wallet-connected-check" aria-hidden="true">✓</span>
                  Wallet Connected
                </div>
                <div class="wallet-action-row hidden" id="wallet-action-row">
                  <button type="button" class="wallet-btn wallet-btn-ghost" id="btn-wallet-recheck">Recheck</button>
                  <button type="button" class="wallet-btn wallet-btn-ghost wallet-btn-disconnect" id="btn-wallet-disconnect">Disconnect</button>
                </div>
              </div>
            </div>
            <a class="wallet-buy-link" href="${PUMP_FUN_URL}" target="_blank" rel="noopener noreferrer">Buy on Pump.fun ↗</a>
          </div>` : ''}
          <div class="menu-buttons">
            <button class="btn btn-primary btn-glow btn-hero" id="btn-play" ${TOKEN_GATE_ENABLED ? 'disabled' : ''}>▶ Start Run</button>
            <button class="btn btn-secondary btn-hero-secondary" id="btn-shop">🛒 Shop & Loadout</button>
          </div>
          <button class="btn btn-ghost btn-small" id="btn-reset">Reset Save</button>
        </div>
      </div>
    `);
    this.root.appendChild(screen);
    this.menuScreen = screen;
    if (TOKEN_GATE_ENABLED) this.bindWalletGate(screen);

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

    screen.querySelector('#btn-play')!.addEventListener('click', () => {
      void this.requireTokenAccess(() => this.showLevels());
    });
    screen.querySelector('#btn-shop')!.addEventListener('click', () => this.showShop());
    screen.querySelector('#btn-reset')!.addEventListener('click', () => {
      if (confirm('Reset all progress?')) {
        this.save.reset();
        this.showMenu();
      }
    });
  }

  private bindWalletGate(screen: HTMLElement): void {
    screen.querySelector('#btn-wallet-connect')!.addEventListener('click', () => {
      void this.tokenGate.connect();
    });
    screen.querySelector('#btn-wallet-recheck')!.addEventListener('click', () => {
      void this.tokenGate.verify();
    });
    screen.querySelector('#btn-wallet-disconnect')!.addEventListener('click', () => {
      void this.tokenGate.disconnect();
    });
    this.syncWalletGateUI(screen);
  }

  private syncWalletGateUI(screen: HTMLElement): void {
    const snap = this.tokenGate.getSnapshot();
    const statusEl = screen.querySelector('#wallet-gate-status') as HTMLElement | null;
    const statusChip = screen.querySelector('#wallet-status-chip') as HTMLElement | null;
    const statusLabel = screen.querySelector('#wallet-status-label') as HTMLElement | null;
    const playBtn = screen.querySelector('#btn-play') as HTMLButtonElement | null;
    const connectBtn = screen.querySelector('#btn-wallet-connect') as HTMLButtonElement | null;
    const connectedPill = screen.querySelector('#wallet-connected-pill') as HTMLElement | null;
    const actionRow = screen.querySelector('#wallet-action-row') as HTMLElement | null;
    const recheckBtn = screen.querySelector('#btn-wallet-recheck') as HTMLButtonElement | null;
    const disconnectBtn = screen.querySelector('#btn-wallet-disconnect') as HTMLButtonElement | null;
    const gateEl = screen.querySelector('#wallet-gate') as HTMLElement | null;

    if (
      !statusEl ||
      !statusChip ||
      !statusLabel ||
      !playBtn ||
      !connectBtn ||
      !connectedPill ||
      !actionRow ||
      !recheckBtn ||
      !disconnectBtn ||
      !gateEl
    ) {
      return;
    }

    gateEl.classList.remove('granted', 'denied', 'checking', 'signing', 'error', 'connected');
    statusChip.classList.remove('granted', 'denied', 'checking', 'signing', 'error', 'disconnected');

    if (snap.status === 'granted') {
      gateEl.classList.add('granted');
      statusChip.classList.add('granted');
      statusLabel.textContent = 'Access granted';
    } else if (snap.status === 'denied') {
      gateEl.classList.add('denied');
      statusChip.classList.add('denied');
      statusLabel.textContent = 'Insufficient balance';
    } else if (snap.status === 'connecting') {
      gateEl.classList.add('checking');
      statusChip.classList.add('checking');
      statusLabel.textContent = 'Connect in Phantom';
    } else if (snap.status === 'signing') {
      gateEl.classList.add('signing');
      statusChip.classList.add('signing');
      statusLabel.textContent = 'Sign in Phantom';
    } else if (snap.status === 'checking') {
      gateEl.classList.add('checking');
      statusChip.classList.add('checking');
      statusLabel.textContent = 'Checking balance';
    } else if (snap.status === 'error') {
      gateEl.classList.add('error');
      statusChip.classList.add('error');
      statusLabel.textContent = 'Something went wrong';
    } else {
      statusChip.classList.add('disconnected');
      statusLabel.textContent = 'Not verified yet';
    }

    const linked = ['checking', 'granted', 'denied', 'error'].includes(snap.status) && snap.walletAddress != null;
    if (linked) gateEl.classList.add('connected');

    if (snap.walletAddress && linked) {
      const holding =
        snap.holdingUsd != null && snap.tokenSymbol
          ? `<div class="wallet-holding-value">~$${snap.holdingUsd.toFixed(2)} <span>of $${snap.tokenSymbol}</span></div>`
          : '';
      statusEl.innerHTML = `
        <div class="wallet-address-row">
          <span class="wallet-address-label">Wallet</span>
          <span class="wallet-address">${snap.walletAddress.slice(0, 4)}…${snap.walletAddress.slice(-4)}</span>
        </div>
        ${holding}
        <div class="wallet-message">${typeof snap.message === 'string' ? snap.message : 'Verification failed. Tap Recheck.'}</div>`;
    } else if (
      snap.walletAddress &&
      (snap.status === 'connecting' || snap.status === 'signing' || snap.status === 'checking')
    ) {
      statusEl.innerHTML = `<div class="wallet-message">${snap.message}</div>`;
    } else {
      statusEl.innerHTML = `<div class="wallet-message">${typeof snap.message === 'string' ? snap.message : 'Connect your wallet to verify holdings.'}</div>`;
    }

    const granted = this.tokenGate.hasAccess();
    playBtn.disabled = !granted;
    playBtn.title = granted ? '' : `Hold at least $${MIN_HOLDING_USD} of the game token to play`;

    const busy = snap.status === 'connecting' || snap.status === 'signing' || snap.status === 'checking';
    connectBtn.classList.toggle('hidden', linked);
    connectedPill.classList.toggle('hidden', !linked);
    actionRow.classList.toggle('hidden', !linked);

    if (!linked) {
      connectBtn.textContent =
        snap.status === 'connecting' || snap.status === 'signing'
          ? 'Approve in Phantom…'
          : 'Connect Phantom';
    }

    connectBtn.disabled = busy;
    recheckBtn.disabled = busy;
    disconnectBtn.disabled = busy;
  }

  private async requireTokenAccess(onGranted: () => void): Promise<void> {
    if (this.tokenGate.hasAccess()) {
      onGranted();
      return;
    }
    const ok = await this.tokenGate.verify();
    if (ok) {
      onGranted();
      return;
    }
    const msg = this.tokenGate.getSnapshot().message;
    this.toast(msg.includes('Phantom') ? msg : `Connect Phantom first. ${msg}`);
  }

  showLevels(): void {
    this.menuScreen = null;
    this.screen = 'levels';
    this.setCanvasVisible(false);
    this.clear();
    const s = this.save.get();
    let inner = `
      <div class="screen route-screen scroll-touch">
        <header class="route-header">
          <button type="button" class="btn btn-secondary route-back" id="btn-back">← Back</button>
          <div class="route-title-block">
            <span class="route-eyebrow">MAIL RUN · INVASION ROUTES</span>
            <h1>Select Route</h1>
          </div>
          <div class="stat-pill route-coins"><span>🪙</span> ${s.coins.toLocaleString()}</div>
        </header>
        <div class="route-scroll">`;

    for (const districtId of districtsWithLevels()) {
      const district = getDistrict(districtId);
      const mood = DISTRICT_MOOD[districtId] ?? 'district-sunny';
      const meta = DISTRICT_META[districtId] ?? { icon: '📍', tagline: district.name };
      const districtLevels = LEVELS.filter((l) => l.district === districtId);
      const cleared = districtLevels.filter((l) => (s.levelStars[l.id] ?? 0) > 0).length;

      inner += `
        <section class="route-district ${mood}">
          <div class="route-district-head">
            <span class="route-district-icon" aria-hidden="true">${meta.icon}</span>
            <div class="route-district-copy">
              <h2>${district.name}</h2>
              <p>${meta.tagline}</p>
            </div>
            <span class="route-district-progress">${cleared}/${districtLevels.length}</span>
          </div>
          <div class="route-level-grid">`;

      for (const lvl of districtLevels) {
        const locked = !s.unlockedLevels.includes(lvl.id);
        const stars = s.levelStars[lvl.id] ?? 0;
        const isBoss = lvl.name.toLowerCase().includes('boss');
        inner += `
            <button type="button" class="route-level-card ${locked ? 'locked' : ''} ${stars >= 3 ? 'perfect' : ''} ${isBoss ? 'boss' : ''}" data-id="${lvl.id}" ${locked ? 'disabled' : ''}>
              <span class="rlc-id">${lvl.id}</span>
              <span class="rlc-name">${lvl.name}</span>
              <span class="rlc-stars" aria-label="${stars} of 3 stars">${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}</span>
              ${isBoss ? '<span class="rlc-boss-tag">BOSS</span>' : ''}
            </button>`;
      }
      inner += '</div></section>';
    }

    inner += '</div></div>';
    const screen = this.wrapScreen(inner);
    this.root.appendChild(screen);

    screen.querySelectorAll('.route-level-card:not(.locked)').forEach((card) => {
      card.addEventListener('click', () => this.showBriefing((card as HTMLElement).dataset.id!));
    });
    screen.querySelector('#btn-back')!.addEventListener('click', () => this.showMenu());
  }

  showBriefing(levelId: string): void {
    const lvl = LEVELS.find((l) => l.id === levelId)!;
    const district = getDistrict(lvl.district);
    const mood = DISTRICT_MOOD[lvl.district] ?? 'district-sunny';
    const meta = DISTRICT_META[lvl.district] ?? { icon: '📍', tagline: district.name };
    const dropoff = levelDropoffZ(lvl);
    const isBoss = lvl.name.toLowerCase().includes('boss');
    this.screen = 'briefing';
    this.setCanvasVisible(false);
    this.clear();
    const screen = this.wrapScreen(`
      <div class="screen mission-screen ${mood}">
        <div class="mission-card">
          <div class="mission-top">
            <span class="mission-district">${meta.icon} ${district.name}</span>
            <span class="mission-id">${lvl.id}${isBoss ? ' · BOSS' : ''}</span>
          </div>
          <h1 class="mission-title">${lvl.name}</h1>
          <div class="mission-stats">
            <span class="mission-stat"><strong>${dropoff}m</strong> route</span>
            <span class="mission-stat"><strong>${lvl.timeLimit}s</strong> limit</span>
            <span class="mission-stat"><strong>📦</strong> collect & deliver</span>
          </div>
          <p class="mission-brief">${lvl.briefing}</p>
          <div class="mission-hazards">
            <span class="mission-hazards-label">Route hazards</span>
            <div class="hazard-chips">${hazardChips(levelId)}</div>
          </div>
          <div class="mission-controls">
            <div class="mission-control"><kbd>A</kbd><kbd>D</kbd><span>Steer lanes</span></div>
            <div class="mission-control"><span class="ctrl-icon">👆</span><span>Click / tap = mail blaster (unlimited)</span></div>
            <div class="mission-control"><kbd>SPACE</kbd><span>Jump</span><kbd>S</kbd><span>Slide</span></div>
            <div class="mission-control"><span class="ctrl-icon">📦</span><span>Grab packages for delivery score — shooting never spends them</span></div>
            <div class="mission-control"><span class="ctrl-icon">⚡</span><span>Ability · Convoy fights aliens · Day/night cycle mid-run</span></div>
          </div>
          <div class="mission-actions">
            <button type="button" class="btn btn-primary btn-glow mission-start" id="btn-start">🚀 Start Delivery</button>
            <button type="button" class="btn btn-secondary" id="btn-back">← Routes</button>
          </div>
        </div>
      </div>
    `);
    this.root.appendChild(screen);
    screen.querySelector('#btn-start')!.addEventListener('click', () => {
      void this.requireTokenAccess(() => this.startGame(levelId));
    });
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
    if (!this.tokenGate.hasAccess()) {
      this.toast(this.tokenGate.getSnapshot().message);
      this.showMenu();
      return;
    }

    this.activeLevelId = levelId;
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
        <div class="hud-ammo" id="hud-ammo">📦 0</div>
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

        <div class="tap-hint" id="tap-hint">${IS_MOBILE ? 'Jump · Mail · Slide — tap screen also shoots' : 'Jump · Slide · Shoot · Swerve at forks!'}</div>

        <div class="combat-banner hidden" id="combat-banner">
          <div class="combat-title" id="combat-title">⚠ INTERCEPT!</div>
          <div class="combat-bar-wrap">
            <div class="combat-bar-fill" id="combat-bar"></div>
          </div>
          <div class="combat-hint">LMB mail · RMB throw 📦 · Convoy fights for you</div>
        </div>

        <div class="scan-prompt hidden" id="scan-prompt"></div>

        <div class="damage-flash hidden" id="damage-flash"></div>

        <div class="hud-bottom ${IS_MOBILE ? 'hud-bottom-mobile' : ''}">
          <button class="action-btn jump-btn" id="jump-btn" title="Jump${IS_MOBILE ? '' : ' (SPACE)'}">
            <span class="action-icon">⬆</span>
            <span>JUMP</span>
          </button>
          <button class="action-btn shoot-btn" id="shoot-btn" title="Shoot">
            <span class="action-icon" id="shoot-icon">📧</span>
            <span id="shoot-label">${IS_MOBILE ? 'MAIL' : 'SHOOT'}</span>
            <div class="ability-cd hidden" id="shoot-cd"></div>
          </button>
          <button class="action-btn slide-btn" id="slide-btn" title="Slide${IS_MOBILE ? '' : ' (S)'}">
            <span class="action-icon">⬇</span>
            <span>SLIDE</span>
          </button>
          ${IS_MOBILE ? '' : `<button class="action-btn special-btn" id="special-btn" title="Ground Quake (E) — 3 hits">
            <div class="special-meter"><div class="special-fill" id="special-fill"></div></div>
            <span class="action-icon">💥</span>
            <span id="special-label">QUAKE</span>
            <span class="special-count hidden" id="special-shakes"></span>
          </button>
          ${this.save.get().equippedAbility ? `<button class="action-btn ability-btn" id="ability-btn" title="Shop ability (Q)">
            <span class="action-icon">⚡</span>
            <span id="ability-label">Ability</span>
            <div class="ability-cd hidden" id="ability-cd"></div>
          </button>` : ''}`}
        </div>

        ${IS_MOBILE ? `<div class="hud-actions-right">
          <button type="button" class="action-btn hud-back-btn" id="hud-back-btn" title="Back to levels">
            <span class="action-icon">←</span>
            <span>BACK</span>
          </button>
          <button class="action-btn special-btn" id="special-btn" title="Ground Quake">
            <div class="special-meter"><div class="special-fill" id="special-fill"></div></div>
            <span class="action-icon">💥</span>
            <span id="special-label">QUAKE</span>
            <span class="special-count hidden" id="special-shakes"></span>
          </button>
          ${this.save.get().equippedAbility ? `<button class="action-btn ability-btn" id="ability-btn" title="Ability">
            <span class="action-icon">⚡</span>
            <span id="ability-label">Ability</span>
            <div class="ability-cd hidden" id="ability-cd"></div>
          </button>` : ''}
        </div>` : ''}
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

    document.getElementById('slide-btn')!.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.game?.slide();
    });

    const shootBtn = document.getElementById('shoot-btn');
    shootBtn?.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.game?.shoot();
    });

    document.getElementById('hud-back-btn')?.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.game?.dispose();
      this.game = null;
      setGameActive(false);
      void this.requireTokenAccess(() => this.showLevels());
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
      if (ammo) ammo.textContent = `📦 ${d.packages}`;
      const shootIcon = document.getElementById('shoot-icon');
      const shootLabel = document.getElementById('shoot-label');
      if (shootIcon) shootIcon.textContent = '📧';
      if (shootLabel) shootLabel.textContent = IS_MOBILE ? 'MAIL' : 'SHOOT';
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

    const forkHint = document.getElementById('fork-hint');
    const hintText = d.vaultHint || d.forkHint;
    if (forkHint && hintText !== (this.hudCache.vaultHint || this.hudCache.forkHint)) {
      if (hintText) {
        forkHint.textContent = hintText;
        forkHint.classList.remove('hidden');
        forkHint.classList.toggle('vault-hint', !!d.vaultHint);
      } else {
        forkHint.classList.add('hidden');
        forkHint.classList.remove('vault-hint');
      }
    }

    if (d.jumpReady !== this.hudCache.jumpReady) {
      document.getElementById('jump-btn')?.classList.toggle('ready', d.jumpReady);
    }
    if (d.slideReady !== this.hudCache.slideReady) {
      document.getElementById('slide-btn')?.classList.toggle('ready', d.slideReady);
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
      screen.querySelector('#btn-next')!.addEventListener('click', () => {
        void this.requireTokenAccess(() => this.showBriefing(next!));
      });
    }
    screen.querySelector('#btn-retry')!.addEventListener('click', () => {
      void this.requireTokenAccess(() => this.showBriefing(result.levelId));
    });
    screen.querySelector('#btn-shop')!.addEventListener('click', () => this.showShop());
    screen.querySelector('#btn-menu')!.addEventListener('click', () => this.showMenu());
  }
}
