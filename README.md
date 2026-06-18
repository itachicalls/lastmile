# Last Mile — Courier Rush

3D courier gate-runner: collect packages, choose routes, fight aliens, deliver the VIP!

## Play

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Controls

| Input | Action |
|-------|--------|
| **A / D** or touch edges | Steer lanes |
| **Tap / click** | Throw package (**8 dmg**, costs 1 📦) |
| **SPACE** or **📧 MAIL** | Mail gun (**3 dmg**, free, cooldown) |
| **Hold ← or → at route gates** | Commit to left/right path (0.5s) |
| **SPACE at route gate (center)** | Safe center route (+3 convoy) |
| **SPACE at locked gate** | Ram with convoy / pay toll / stamp |
| **SCAN button** or **SPACE** | Scan barcode gates |
| **⚡ button** | Shop ability (Smoke / Rally / Dash) |

## Design pillars

1. **Nothing opens itself** — gates need a deliberate input (hold lane, SPACE, or throw)
2. **Two weapons** — packages are precious heavy hits; mail gun is spammable support
3. **Convoy = your army** — helpers clash with aliens and ram locked gates when you press SPACE
4. **Readable HUD** — package badge, gate prompts, blocker hints always tell you what to do

## Core loop

1. Collect **packages** on the road
2. **Route gates** — hold left/right or SPACE for safe center
3. **Blockers** — scan, stamp, toll, ram (each has a clear SPACE interaction)
4. **Combat** — convoy auto-clashes; you throw packages and fire mail gun
5. **Shop** — Pepper Drone (faster mail), Box Cannon (stronger mail + gate damage), Helper Beacon (convoy regen)
6. **Deliver** at the drop-off zone

## Stack

Vite · TypeScript · Three.js
