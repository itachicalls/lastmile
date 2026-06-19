import { IS_MOBILE } from './platform';

export type ViewportMetrics = {
  width: number;
  height: number;
  offsetTop: number;
  offsetLeft: number;
};

export function getViewportMetrics(): ViewportMetrics {
  const vv = window.visualViewport;
  if (vv) {
    return {
      width: Math.max(1, Math.round(vv.width)),
      height: Math.max(1, Math.round(vv.height)),
      offsetTop: vv.offsetTop,
      offsetLeft: vv.offsetLeft,
    };
  }
  return {
    width: Math.max(1, window.innerWidth),
    height: Math.max(1, window.innerHeight),
    offsetTop: 0,
    offsetLeft: 0,
  };
}

const listeners = new Set<() => void>();

export function onViewportChange(fn: () => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function notify(): void {
  if (IS_MOBILE) applyMobileViewportLock();
  listeners.forEach((fn) => fn());
}

/** Pin #app to the visible viewport so canvas + HUD never drift or letterbox. */
export function applyMobileViewportLock(): void {
  if (!IS_MOBILE) return;

  const app = document.getElementById('app');
  if (!app) return;

  const { width, height, offsetTop, offsetLeft } = getViewportMetrics();

  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.inset = '0';
  document.body.style.width = `${width}px`;
  document.body.style.height = `${height}px`;

  app.style.position = 'fixed';
  app.style.top = `${offsetTop}px`;
  app.style.left = `${offsetLeft}px`;
  app.style.width = `${width}px`;
  app.style.height = `${height}px`;
  app.style.padding = '0';
  app.style.overflow = 'hidden';
}

export function initViewportLock(): void {
  applyMobileViewportLock();

  window.addEventListener('resize', notify);
  window.addEventListener('orientationchange', () => {
    window.scrollTo(0, 0);
    setTimeout(notify, 50);
    setTimeout(notify, 250);
  });

  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', notify);
    window.visualViewport.addEventListener('scroll', () => {
      window.scrollTo(0, 0);
      notify();
    });
  }
}
