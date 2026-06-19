/** Lightweight procedural SFX — no asset files required. */
export class SoundManager {
  private ctx: AudioContext | null = null;
  private master = 0.42;
  private musicGain: GainNode | null = null;
  private musicOscs: OscillatorNode[] = [];
  private districtId = 1;
  private night = 0;
  private muted = true;

  private ensure(): AudioContext | null {
    if (this.muted) {
      this.muted = false;
      try {
        this.ctx = new AudioContext();
        this.musicGain = this.ctx.createGain();
        this.musicGain.gain.value = 0.08;
        this.musicGain.connect(this.ctx.destination);
      } catch {
        return null;
      }
    }
    if (this.ctx?.state === 'suspended') void this.ctx.resume();
    return this.ctx;
  }

  setDistrict(id: number): void {
    this.districtId = id;
    this.refreshMusic();
  }

  setNight(n: number): void {
    if (Math.abs(n - this.night) < 0.08) return;
    this.night = n;
    this.refreshMusic();
  }

  private refreshMusic(): void {
    const ctx = this.ensure();
    if (!ctx || !this.musicGain) return;
    for (const o of this.musicOscs) {
      try {
        o.stop();
      } catch {
        /* already stopped */
      }
    }
    this.musicOscs = [];

    const base =
      this.districtId >= 6 ? 196 : this.districtId >= 4 ? 220 : this.districtId >= 2 ? 247 : 262;
    const nightMul = 0.65 + this.night * 0.35;
    const freqs = [base * nightMul, base * 1.25 * nightMul, base * 1.5 * nightMul];

    for (const f of freqs) {
      const osc = ctx.createOscillator();
      osc.type = this.districtId >= 6 ? 'sawtooth' : 'triangle';
      osc.frequency.value = f;
      const g = ctx.createGain();
      g.gain.value = 0.012 / freqs.length;
      osc.connect(g);
      g.connect(this.musicGain);
      osc.start();
      this.musicOscs.push(osc);
    }
  }

  private tone(
    freq: number,
    dur: number,
    type: OscillatorType = 'square',
    vol = 0.12,
    slide = 0
  ): void {
    const ctx = this.ensure();
    if (!ctx) return;
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    if (slide) osc.frequency.linearRampToValueAtTime(freq + slide, t + dur);
    g.gain.setValueAtTime(vol * this.master, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start(t);
    osc.stop(t + dur + 0.02);
  }

  private noise(dur: number, vol = 0.06): void {
    const ctx = this.ensure();
    if (!ctx) return;
    const bufferSize = ctx.sampleRate * dur;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    const g = ctx.createGain();
    g.gain.value = vol * this.master;
    src.connect(g);
    g.connect(ctx.destination);
    src.start();
  }

  private combatLayer = 0;

  setCombatIntensity(n: number): void {
    this.combatLayer = Math.max(0, Math.min(1, n));
    if (this.musicGain) {
      this.musicGain.gain.value = 0.06 + this.combatLayer * 0.05;
    }
  }

  spectacle(kind: string): void {
    this.noise(0.15, 0.06 + this.combatLayer * 0.04);
    if (kind === 'orbital-flash') {
      this.tone(55, 0.35, 'sawtooth', 0.1, -15);
    } else if (kind === 'dogfight') {
      this.tone(220, 0.08, 'square', 0.06);
      this.tone(180, 0.1, 'square', 0.05);
    } else {
      this.tone(140 + Math.random() * 40, 0.12, 'sawtooth', 0.05);
    }
  }

  shootMail(): void {
    this.tone(880, 0.06, 'square', 0.08, -120);
    this.noise(0.04, 0.03);
  }

  shootPackage(): void {
    this.tone(320, 0.1, 'triangle', 0.1, 80);
  }

  alienHit(): void {
    this.tone(180 + Math.random() * 40, 0.08, 'sawtooth', 0.09, -60);
  }

  alienKill(): void {
    this.tone(520, 0.05, 'square', 0.1);
    this.tone(780, 0.08, 'triangle', 0.07, 200);
  }

  headshot(): void {
    this.tone(1200, 0.04, 'square', 0.11);
    this.tone(960, 0.06, 'triangle', 0.08, -300);
  }

  combo(n: number): void {
    this.tone(440 + n * 40, 0.07, 'triangle', 0.09);
  }

  comboStinger(): void {
    this.tone(523, 0.08, 'triangle', 0.1);
    this.tone(659, 0.08, 'triangle', 0.09);
    this.tone(784, 0.12, 'triangle', 0.11);
    this.tone(988, 0.16, 'triangle', 0.1, 120);
  }

  jump(): void {
    this.tone(420, 0.07, 'sine', 0.06, 180);
  }

  gatePass(): void {
    this.tone(660, 0.12, 'triangle', 0.08);
  }

  vaultBuzz(): void {
    this.tone(140, 0.15, 'sawtooth', 0.07);
  }

  delivery(): void {
    this.tone(523, 0.15, 'triangle', 0.1);
    this.tone(659, 0.15, 'triangle', 0.09);
    this.tone(784, 0.25, 'triangle', 0.11);
  }

  alienChatter(): void {
    if (Math.random() > 0.35) return;
    this.tone(90 + Math.random() * 50, 0.05 + Math.random() * 0.04, 'sawtooth', 0.04);
  }

  telegraphWarn(): void {
    this.tone(220, 0.12, 'sawtooth', 0.05, 40);
  }

  honk(): void {
    this.tone(180, 0.2, 'square', 0.1);
    this.tone(220, 0.15, 'square', 0.08);
  }

  ufoBeam(): void {
    this.tone(110, 0.25, 'sawtooth', 0.07, 30);
    this.noise(0.18, 0.05);
    this.tone(880, 0.08, 'sine', 0.05);
  }

  nearMiss(): void {
    this.tone(600, 0.05, 'sine', 0.06, 100);
  }

  eliteSpawn(): void {
    this.tone(880, 0.1, 'triangle', 0.08);
    this.tone(1100, 0.12, 'triangle', 0.07);
  }

  quake(): void {
    this.noise(0.25, 0.12);
    this.tone(60, 0.3, 'sawtooth', 0.1, -20);
  }

  turbo(): void {
    this.tone(300, 0.15, 'sawtooth', 0.07, 150);
  }

  stopMusic(): void {
    for (const o of this.musicOscs) {
      try {
        o.stop();
      } catch {
        /* noop */
      }
    }
    this.musicOscs = [];
  }

  dispose(): void {
    this.stopMusic();
    void this.ctx?.close();
    this.ctx = null;
  }
}

export const sfx = new SoundManager();
