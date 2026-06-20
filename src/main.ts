import { SaveManager } from './save/SaveManager';
import { UIManager } from './ui/UIManager';
import { IS_MOBILE } from './game/platform';
import { initViewportLock } from './game/viewport';
import { TokenGate } from './wallet/TokenGate';

const save = new SaveManager();
const tokenGate = new TokenGate();
const uiRoot = document.getElementById('ui-root')!;
new UIManager(uiRoot, save, tokenGate);

initViewportLock();

window.addEventListener('pageshow', () => {
  tokenGate.onPageVisible();
});
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') tokenGate.onPageVisible();
});

function blockZoom(e: Event): void {
  const t = e.target as HTMLElement;
  if (t.closest('.shop-scroll, .levels-screen, .scroll-touch, .menu-scroll')) return;
  e.preventDefault();
}

document.addEventListener('touchmove', blockZoom, { passive: false });
document.addEventListener('gesturestart', blockZoom);
document.addEventListener('gesturechange', blockZoom);
document.addEventListener('gestureend', blockZoom);

document.addEventListener(
  'touchstart',
  (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
      return;
    }
    if (document.body.classList.contains('game-active')) {
      const t = e.target as HTMLElement;
      if (!t.closest('button, .touch-steer')) e.preventDefault();
    }
  },
  { passive: false, capture: true }
);

let lastTouchEnd = 0;
document.addEventListener(
  'touchend',
  (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 320) e.preventDefault();
    lastTouchEnd = now;
    if (IS_MOBILE) window.scrollTo(0, 0);
  },
  { passive: false }
);

document.addEventListener('contextmenu', (e) => {
  if ((e.target as HTMLElement).closest('#game-canvas, .hud')) e.preventDefault();
});
