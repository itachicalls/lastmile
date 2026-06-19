import { SaveManager } from './save/SaveManager';
import { UIManager } from './ui/UIManager';
import { IS_MOBILE } from './game/platform';
import { initViewportLock } from './game/viewport';

const save = new SaveManager();
const uiRoot = document.getElementById('ui-root')!;
new UIManager(uiRoot, save);

initViewportLock();

function blockZoom(e: Event): void {
  e.preventDefault();
}

document.addEventListener('touchmove', blockZoom, { passive: false });
document.addEventListener('gesturestart', blockZoom);
document.addEventListener('gesturechange', blockZoom);
document.addEventListener('gestureend', blockZoom);

document.addEventListener(
  'touchstart',
  (e) => {
    if (e.touches.length > 1) e.preventDefault();
  },
  { passive: false }
);

let lastTouchEnd = 0;
document.addEventListener(
  'touchend',
  (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 320) e.preventDefault();
    lastTouchEnd = now;
  },
  { passive: false }
);

document.addEventListener('contextmenu', (e) => {
  if ((e.target as HTMLElement).closest('#game-canvas, .hud')) e.preventDefault();
});
