# Mail Run

Hyper-casual 3D delivery runner — steer lanes, shoot mail and packages, dodge aliens, and reach the drop-off zone.

## Play

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Controls

| Input | Action |
|-------|--------|
| **A / D** or touch steer edges | Change lanes |
| **SPACE** or **⬆ JUMP** | Jump over obstacles |
| **Left click** or **📧 MAIL** | Mail gun (free, fast) |
| **Right click** or **📦 THROW** | Throw package (8 dmg, costs 1 📦) |
| **Fork in road** | Stay in lane — left / center / right picks bonus automatically |
| **⚡ button** | Shop ability (Smoke / Rally / Dash) |

Mobile: steer pads on edges · tap left half = mail · tap right half = throw · JUMP button

## Core loop

1. **Run** — constant forward momentum, never stop
2. **Dodge** — steer lanes + jump barricades, pods, cones, debris
3. **Collect** — packages and coins on the road
4. **Forks** — swerve left, center (+3 convoy), or right for bonuses (no menus!)
5. **Fight** — convoy auto-clashes; you mail-gun and throw packages at aliens
6. **Deliver** — reach the drop-off zone

## Stack

Vite · TypeScript · Three.js
