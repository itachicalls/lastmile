import { IS_MOBILE } from './platform';

type MusicTheme = {
  root: number;
  /** Semitone offsets from root (minor pentatonic-ish per district) */
  scale: number[];
  melody: number[];
  bass: number[];
  lead: OscillatorType;
  bpm: number;
};

const THEMES: MusicTheme[] = [
  {
    root: 262,
    scale: [0, 2, 4, 7, 9],
    melody: [0, 2, 4, 2, 0, 4, 7, 4, 2, 0, 4, 2, 0, 9, 7, 4],
    bass: [0, 0, 7, 7, 4, 4, 7, 0],
    lead: 'triangle',
    bpm: 128,
  },
  {
    root: 247,
    scale: [0, 2, 3, 7, 9],
    melody: [4, 2, 0, 2, 4, 7, 9, 7, 4, 2, 0, 2, 4, 7, 4, 2],
    bass: [0, 4, 0, 7, 4, 0, 7, 4],
    lead: 'square',
    bpm: 132,
  },
  {
    root: 220,
    scale: [0, 3, 5, 7, 10],
    melody: [0, 3, 5, 3, 0, 5, 10, 5, 3, 0, 5, 3, 0, 10, 7, 5],
    bass: [0, 0, 5, 5, 3, 3, 5, 0],
    lead: 'sawtooth',
    bpm: 126,
  },
  {
    root: 196,
    scale: [0, 3, 5, 8, 10],
    melody: [0, 5, 8, 5, 3, 0, 5, 10, 8, 5, 3, 0, 5, 8, 10, 8],
    bass: [0, 5, 3, 0, 5, 8, 5, 3],
    lead: 'sawtooth',
    bpm: 124,
  },
];

/** Procedural arcade SFX + sequenced chiptune-style music — no asset files. */
export class SoundManager {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;
  private musicGain: GainNode | null = null;
  private master = IS_MOBILE ? 0.38 : 0.44;
  private musicVol = IS_MOBILE ? 0.11 : 0.13;
  private districtId = 1;
  private night = 0;
  private combatLayer = 0;
  private unlocked = false;
  private musicPlaying = false;
  private musicTimer: ReturnType<typeof setTimeout> | null = null;
  private step = 0;
  private nextNoteTime = 0;
  private themeIdx = 0;

  private ensure(): AudioContext | null {
    if (!this.unlocked) {
      this.unlocked = true;
      try {
        this.ctx = new AudioContext();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.value = this.master;
        this.masterGain.connect(this.ctx.destination);

        this.sfxGain = this.ctx.createGain();
        this.sfxGain.gain.value = 1;
        this.sfxGain.connect(this.masterGain);

        this.musicGain = this.ctx.createGain();
        this.musicGain.gain.value = this.musicVol;
        this.musicGain.connect(this.masterGain);
      } catch {
        return null;
      }
    }
    if (this.ctx?.state === 'suspended') void this.ctx.resume();
    return this.ctx;
  }

  private freqFromScale(theme: MusicTheme, stepIdx: number, octave = 0): number {
    const semi = theme.scale[((stepIdx % theme.scale.length) + theme.scale.length) % theme.scale.length] ?? 0;
    return theme.root * Math.pow(2, (semi + octave * 12) / 12);
  }

  private toneAt(
    freq: number,
    start: number,
    dur: number,
    type: OscillatorType,
    vol: number,
    dest: GainNode,
    slide = 0,
    filterFreq?: number
  ): void {
    const ctx = this.ctx;
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, start);
    if (slide) osc.frequency.linearRampToValueAtTime(Math.max(20, freq + slide), start + dur);
    g.gain.setValueAtTime(0.0001, start);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0001, vol), start + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    if (filterFreq) {
      const f = ctx.createBiquadFilter();
      f.type = 'lowpass';
      f.frequency.value = filterFreq;
      osc.connect(f);
      f.connect(g);
    } else {
      osc.connect(g);
    }
    g.connect(dest);
    osc.start(start);
    osc.stop(start + dur + 0.03);
  }

  private noiseAt(start: number, dur: number, vol: number, dest: GainNode, hp = 0): void {
    const ctx = this.ctx;
    if (!ctx) return;
    const n = Math.max(1, Math.floor(ctx.sampleRate * dur));
    const buffer = ctx.createBuffer(1, n, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < n; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / n);
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    const g = ctx.createGain();
    g.gain.setValueAtTime(vol, start);
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    if (hp > 0) {
      const f = ctx.createBiquadFilter();
      f.type = 'highpass';
      f.frequency.value = hp;
      src.connect(f);
      f.connect(g);
    } else {
      src.connect(g);
    }
    g.connect(dest);
    src.start(start);
    src.stop(start + dur + 0.02);
  }

  private tone(
    freq: number,
    dur: number,
    type: OscillatorType = 'square',
    vol = 0.12,
    slide = 0,
    filterFreq?: number
  ): void {
    const ctx = this.ensure();
    if (!ctx || !this.sfxGain) return;
    this.toneAt(freq, ctx.currentTime, dur, type, vol, this.sfxGain, slide, filterFreq);
  }

  private noise(dur: number, vol = 0.06, hp = 0): void {
    const ctx = this.ensure();
    if (!ctx || !this.sfxGain) return;
    this.noiseAt(ctx.currentTime, dur, vol, this.sfxGain, hp);
  }

  setDistrict(id: number): void {
    this.districtId = id;
    this.themeIdx = Math.min(Math.max(0, id - 1), THEMES.length - 1);
    this.refreshMusic();
  }

  setNight(n: number): void {
    if (Math.abs(n - this.night) < 0.1) return;
    this.night = n;
  }

  setCombatIntensity(n: number): void {
    this.combatLayer = Math.max(0, Math.min(1, n));
    if (this.musicGain) {
      this.musicGain.gain.value = this.musicVol * (0.85 + this.combatLayer * 0.35);
    }
  }

  private refreshMusic(): void {
    this.stopMusic();
    const ctx = this.ensure();
    if (!ctx) return;
    this.musicPlaying = true;
    this.step = 0;
    this.nextNoteTime = ctx.currentTime + 0.08;
    this.scheduleMusic();
  }

  private scheduleMusic(): void {
    if (!this.musicPlaying) return;
    const ctx = this.ctx;
    const music = this.musicGain;
    if (!ctx || !music) return;

    const theme = THEMES[this.themeIdx] ?? THEMES[0];
    const sp16 = 60 / theme.bpm / 4;
    const lookAhead = 0.18;
    const nightDark = this.night * 0.55;
    const filterCut = 2400 - nightDark * 900 + this.combatLayer * 400;

    while (this.nextNoteTime < ctx.currentTime + lookAhead) {
      const s = this.step;
      const t = this.nextNoteTime;
      const beat16 = s % 16;

      if (beat16 % 4 === 0) {
        this.toneAt(55 + (beat16 === 0 ? 8 : 0), t, 0.09, 'sine', 0.22, music, -18);
        this.noiseAt(t, 0.03, 0.06, music, 120);
      }
      if (beat16 === 4 || beat16 === 12) {
        this.noiseAt(t, 0.07, 0.09, music, 800);
        this.toneAt(180, t, 0.05, 'triangle', 0.05, music, -40);
      }
      if (this.combatLayer > 0.15 && s % 2 === 1) {
        this.noiseAt(t, 0.025, 0.035 * (0.5 + this.combatLayer), music, 6000);
      }

      const bassIdx = Math.floor(s / 2) % theme.bass.length;
      const bassSemi = theme.bass[bassIdx] ?? 0;
      const bassFreq = theme.root * Math.pow(2, (bassSemi - 12) / 12);
      if (s % 2 === 0) {
        this.toneAt(bassFreq, t, sp16 * 1.8, 'triangle', 0.1, music);
      }

      const melIdx = s % theme.melody.length;
      const melSemi = theme.melody[melIdx] ?? 0;
      const melOct = melSemi >= 7 ? 1 : 0;
      const melFreq = this.freqFromScale(theme, melSemi, melOct);
      const melVol = 0.045 + (1 - nightDark) * 0.02 + this.combatLayer * 0.012;
      if (s % 1 === 0 && melIdx % 2 === 0) {
        this.toneAt(melFreq, t, sp16 * 0.9, theme.lead, melVol, music, 0, filterCut);
      }

      if (s % 8 === 0) {
        const padFreq = this.freqFromScale(theme, theme.melody[melIdx] ?? 0, 1);
        this.toneAt(padFreq, t, sp16 * 6, 'sine', 0.018, music, 0, 900);
      }

      this.nextNoteTime += sp16;
      this.step++;
    }

    this.musicTimer = window.setTimeout(() => this.scheduleMusic(), 28);
  }

  stopMusic(): void {
    this.musicPlaying = false;
    if (this.musicTimer !== null) {
      clearTimeout(this.musicTimer);
      this.musicTimer = null;
    }
  }

  /* ── SFX ── */

  shootMail(): void {
    this.tone(920, 0.05, 'square', 0.07, -280, 3200);
    this.tone(640, 0.07, 'sine', 0.05, -120, 2400);
    this.noise(0.035, 0.04, 900);
  }

  shootPackage(): void {
    this.tone(280, 0.12, 'triangle', 0.09, 120);
    this.noise(0.06, 0.05, 200);
  }

  alienHit(): void {
    this.tone(160 + Math.random() * 30, 0.07, 'sawtooth', 0.08, -80, 1800);
    this.noise(0.04, 0.05);
  }

  alienKill(): void {
    this.tone(520, 0.06, 'square', 0.09);
    this.tone(780, 0.09, 'triangle', 0.07, 180);
    this.noise(0.05, 0.04, 400);
  }

  headshot(): void {
    this.tone(1200, 0.04, 'square', 0.1);
    this.tone(880, 0.07, 'triangle', 0.08, -350);
    this.tone(660, 0.1, 'sine', 0.06, -200, 4000);
  }

  combo(n: number): void {
    this.tone(440 + n * 35, 0.06, 'triangle', 0.08);
  }

  comboStinger(): void {
    const ctx = this.ensure();
    if (!ctx || !this.sfxGain) return;
    const now = ctx.currentTime;
    const notes = [523, 659, 784, 988];
    notes.forEach((f, i) => {
      this.toneAt(f, now + i * 0.07, 0.1 + i * 0.02, 'triangle', 0.09 - i * 0.01, this.sfxGain!, i === 3 ? 100 : 0, 5000);
    });
  }

  jump(): void {
    this.tone(280, 0.1, 'sine', 0.06, 220, 1800);
    this.noise(0.05, 0.035, 300);
  }

  slide(): void {
    this.noise(0.12, 0.07, 250);
    this.tone(120, 0.1, 'sawtooth', 0.04, -30, 600);
  }

  coin(count = 1): void {
    const pitch = 880 + Math.min(count, 5) * 40;
    this.tone(pitch, 0.05, 'sine', 0.07);
    this.tone(pitch * 1.5, 0.04, 'triangle', 0.04);
  }

  pickup(): void {
    this.tone(660, 0.06, 'triangle', 0.07);
    this.tone(880, 0.08, 'sine', 0.06, 60);
  }

  powerUp(): void {
    [523, 659, 784, 988].forEach((f, i) => {
      window.setTimeout(() => this.tone(f, 0.08, 'triangle', 0.07), i * 55);
    });
  }

  hurt(): void {
    this.tone(90, 0.18, 'sawtooth', 0.1, -25);
    this.tone(140, 0.12, 'square', 0.07, -40);
    this.noise(0.08, 0.08);
  }

  gatePass(): void {
    this.tone(660, 0.1, 'triangle', 0.07);
    this.tone(880, 0.12, 'sine', 0.06);
  }

  vaultBuzz(): void {
    this.tone(140, 0.14, 'sawtooth', 0.07, 30);
    this.tone(210, 0.1, 'square', 0.05, -20);
  }

  delivery(): void {
    const ctx = this.ensure();
    if (!ctx || !this.sfxGain) return;
    const now = ctx.currentTime;
    [523, 659, 784, 1047].forEach((f, i) => {
      this.toneAt(f, now + i * 0.12, 0.2, 'triangle', 0.1, this.sfxGain!, i === 3 ? 80 : 0, 6000);
    });
    this.noiseAt(now + 0.45, 0.15, 0.05, this.sfxGain, 500);
  }

  gameOver(): void {
    const ctx = this.ensure();
    if (!ctx || !this.sfxGain) return;
    const now = ctx.currentTime;
    [392, 330, 262, 196].forEach((f, i) => {
      this.toneAt(f, now + i * 0.14, 0.22, 'sawtooth', 0.09, this.sfxGain!, -30, 1200);
    });
    this.stopMusic();
  }

  alienChatter(): void {
    if (Math.random() > 0.35) return;
    this.tone(80 + Math.random() * 60, 0.04 + Math.random() * 0.05, 'sawtooth', 0.04, Math.random() * 40 - 20);
  }

  telegraphWarn(): void {
    this.tone(220, 0.1, 'sawtooth', 0.05, 35);
    this.tone(180, 0.08, 'triangle', 0.04);
  }

  honk(): void {
    this.tone(196, 0.18, 'square', 0.09);
    this.tone(247, 0.14, 'square', 0.07);
  }

  ufoBeam(): void {
    this.tone(110, 0.28, 'sawtooth', 0.07, 45);
    this.noise(0.2, 0.06, 200);
    this.tone(880, 0.1, 'sine', 0.05, -200, 3000);
  }

  nearMiss(): void {
    this.tone(620, 0.05, 'sine', 0.06, 140);
    this.noise(0.03, 0.03, 2000);
  }

  eliteSpawn(): void {
    this.tone(880, 0.1, 'triangle', 0.08);
    this.tone(1100, 0.14, 'triangle', 0.07, 80);
    this.noise(0.06, 0.04, 500);
  }

  quake(): void {
    this.noise(0.3, 0.14);
    this.tone(55, 0.35, 'sawtooth', 0.11, -25);
    this.tone(82, 0.25, 'sine', 0.07, -15);
  }

  turbo(): void {
    this.tone(220, 0.2, 'sawtooth', 0.07, 180);
    this.noise(0.12, 0.05, 400);
  }

  spectacle(kind: string): void {
    this.noise(0.14, 0.05 + this.combatLayer * 0.04);
    if (kind === 'orbital-flash') {
      this.tone(55, 0.35, 'sawtooth', 0.09, -18);
      this.tone(110, 0.2, 'sine', 0.05, 40);
    } else if (kind === 'dogfight') {
      this.tone(220, 0.08, 'square', 0.06);
      this.tone(180, 0.1, 'square', 0.05, -30);
    } else {
      this.tone(130 + Math.random() * 50, 0.12, 'sawtooth', 0.05, Math.random() * 30);
    }
  }

  dispose(): void {
    this.stopMusic();
    void this.ctx?.close();
    this.ctx = null;
    this.masterGain = null;
    this.sfxGain = null;
    this.musicGain = null;
  }
}

export const sfx = new SoundManager();
