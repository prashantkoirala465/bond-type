# Bond Type

A two-line name in a pixel typeface on flat bright red that unfolds into a molecule — the letters drift apart into nodes while stair-stepped runs of square pixels grow as bonds in the space between them — re-scatters through a few more poses, then folds back into plain typeset text and holds.

## Why

The obvious way to animate a bond between two letters is to draw a line and fade it in. That reads as a diagram pasted on top of the type. This one draws the bond out of the same material as the letters — filled squares on the font's own pixel grid — and gives it no state of its own: every letter moves on one shared clock, and each frame the bonds are recomputed from wherever the letters currently are. Their angle, length, birth, and death all fall out of that one interpolation.

That's also why a bond can't spring into existence. It's counted in whole grid cells rather than switched on past a free-space threshold, so it's born as exactly one square and grows by whole squares as the letters part — drawn, not switched on.

## How it works

- **The pixel cell is measured, not declared.** A capital gets rasterized to an offscreen canvas at the card's own font size, and the GCD of the ink runs across a few scanlines recovers the face's actual grid unit. That survives a font swap or a different card size; a hardcoded constant wouldn't.
- **Bonds only connect letters within a word.** A proximity rule that lets any two nearby letters bond was the first thing tried, and it's wrong — the moment one word's letters wire into the other's, it stops reading as two names and becomes a lattice.
- **Six scatter poses, each with a contour.** Every line in every pose is built from one shape — an arc, a vee, a rake, a wave, a two-step — rather than independent per-letter noise, and the two lines never take the same contour in the same pose. One line's contour centers above its own baseline, the other's below, so the lines separate *as* they scatter instead of drifting into each other.
- **No spring on the way home.** A weak damped overshoot was tried and is wrong for a bitmap face — any overshoot lands a letter on a neighbouring cell and steps back, so what should read as a settle reads as arriving twice. The return eases in from below and stops.
- **Reduced motion draws the plain typeset name, held still** — a frozen molecule mid-scatter is an accident of timing, not a composition.

## Stack

- **Framework:** Next.js (App Router), TypeScript, Tailwind CSS v4
- **Rendering:** a single `<canvas>` and the 2D context — no WebGL, no CSS animation, no animation library
- **Font:** [Silkscreen](https://fonts.google.com/specimen/Silkscreen) for the wordmark itself — a true bitmap-grid pixel face, confirmed by measuring its own cell size rather than assumed

The animation (`src/components/bond-type/`) doesn't import React or Next — `engine.ts` is a plain class over a canvas element, `params.ts` holds the tuning constants and the six scatter poses, and `bond-type-card.tsx` is the thin wrapper that mounts it, watches for visibility and reduced-motion, and swaps in the loaded font.

## Running it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Status

Single showcase piece cycling the name through a random sequence of scatter poses each loop. Build log lives in commit history.
