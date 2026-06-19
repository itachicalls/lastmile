import * as THREE from 'three';

const texCache = new Map<string, THREE.CanvasTexture>();

function cached(key: string, draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void, size = 128): THREE.CanvasTexture {
  let tex = texCache.get(key);
  if (tex) return tex;
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  draw(c.getContext('2d')!, size, size);
  tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  texCache.set(key, tex);
  return tex;
}

export function getBrickTexture(hue: number): THREE.CanvasTexture {
  const key = `brick-${Math.floor(hue * 100)}`;
  return cached(
    key,
    (ctx, w, h) => {
      const base = new THREE.Color().setHSL(hue, 0.35, 0.42);
      ctx.fillStyle = base.getStyle();
      ctx.fillRect(0, 0, w, h);
      const brickW = w / 4;
      const brickH = h / 8;
      for (let row = 0; row < 8; row++) {
        const off = row % 2 === 0 ? 0 : brickW / 2;
        for (let col = -1; col < 5; col++) {
          const x = col * brickW + off;
          const y = row * brickH;
          const shade = (row + col) % 3;
          ctx.fillStyle = `rgba(${shade === 0 ? 0 : 20},${shade === 1 ? 0 : 15},${shade === 2 ? 0 : 10},0.12)`;
          ctx.fillRect(x + 1, y + 1, brickW - 2, brickH - 2);
          ctx.strokeStyle = 'rgba(0,0,0,0.22)';
          ctx.lineWidth = 1;
          ctx.strokeRect(x + 0.5, y + 0.5, brickW - 1, brickH - 1);
        }
      }
    },
    128
  );
}

export function getSidingTexture(hue: number): THREE.CanvasTexture {
  const key = `siding-${Math.floor(hue * 100)}`;
  return cached(
    key,
    (ctx, w, h) => {
      const base = new THREE.Color().setHSL(hue, 0.28, 0.72);
      ctx.fillStyle = base.getStyle();
      ctx.fillRect(0, 0, w, h);
      for (let y = 0; y < h; y += 6) {
        ctx.fillStyle = y % 12 === 0 ? 'rgba(255,255,255,0.14)' : 'rgba(0,0,0,0.06)';
        ctx.fillRect(0, y, w, 3);
      }
      for (let x = 0; x < w; x += 32) {
        ctx.strokeStyle = 'rgba(0,0,0,0.08)';
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
    },
    128
  );
}

export function getRoofShingleTexture(color = '#5D4037'): THREE.CanvasTexture {
  return cached(
    `roof-${color}`,
    (ctx, w, h) => {
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, w, h);
      for (let row = 0; row < 12; row++) {
        const off = row % 2 === 0 ? 0 : 10;
        for (let col = -1; col < 8; col++) {
          ctx.fillStyle = `rgba(0,0,0,${0.06 + (row % 3) * 0.03})`;
          ctx.beginPath();
          ctx.arc(col * 20 + off + 10, row * 10 + 8, 9, 0, Math.PI, true);
          ctx.fill();
        }
      }
    },
    128
  );
}

export function getBarkTexture(): THREE.CanvasTexture {
  return cached(
    'bark',
    (ctx, w, h) => {
      ctx.fillStyle = '#4E342E';
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < 24; i++) {
        ctx.strokeStyle = `rgba(0,0,0,${0.08 + (i % 4) * 0.04})`;
        ctx.lineWidth = 1 + (i % 3);
        ctx.beginPath();
        ctx.moveTo((i * 17) % w, 0);
        ctx.bezierCurveTo((i * 23) % w, h * 0.3, (i * 31) % w, h * 0.7, (i * 13) % w, h);
        ctx.stroke();
      }
    },
    64
  );
}

export function getLeafTexture(): THREE.CanvasTexture {
  return cached(
    'leaf',
    (ctx, w, h) => {
      ctx.fillStyle = '#388E3C';
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < 80; i++) {
        const x = (i * 37) % w;
        const y = (i * 53) % h;
        ctx.fillStyle = i % 3 === 0 ? 'rgba(129,199,132,0.45)' : 'rgba(27,94,32,0.25)';
        ctx.beginPath();
        ctx.ellipse(x, y, 3 + (i % 4), 2 + (i % 3), i * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
    },
    64
  );
}

export function getHexPadTexture(): THREE.CanvasTexture {
  return cached(
    'hexpad',
    (ctx, w, h) => {
      ctx.fillStyle = '#1a237e';
      ctx.fillRect(0, 0, w, h);
      const r = 14;
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          const cx = col * r * 1.75 + (row % 2 ? r * 0.875 : 0) + 16;
          const cy = row * r * 1.5 + 16;
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const a = (Math.PI / 3) * i - Math.PI / 6;
            const px = cx + Math.cos(a) * r;
            const py = cy + Math.sin(a) * r;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.fillStyle = (row + col) % 2 === 0 ? 'rgba(0,230,118,0.35)' : 'rgba(255,213,79,0.25)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(0,230,118,0.55)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    },
    256
  );
}

export function clearWorldTextures(): void {
  texCache.forEach((t) => t.dispose());
  texCache.clear();
}
