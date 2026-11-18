// News image entry for 18 November 2026 (Node 22, standard library only).
// The image is entry.png beside this file; the program copies it to
// /output/entry.png (or $MAKEFUN_OUTPUT_DIR/entry.png outside the grader).
//
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Resolve the output directory: the grader sets MAKEFUN_OUTPUT_DIR, and the
// fallback '/output' matches the competition's sealed run environment. The
// directory may not exist yet, so create it before copying the image in.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

// The entry image lives beside this file in the repo; copy it to the output
// directory under the exact name the gate expects.
const src = new URL('./entry.png', import.meta.url);
const dst = join(outDir, 'entry.png');
copyFileSync(src, dst);
console.log(`news-image: wrote ${dst}`);
