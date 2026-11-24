#!/usr/bin/env node
/** Gate check: entry.txt must be exactly 1 char, A-Z, not whitespace. */
import { readFileSync } from 'fs';
import { resolve } from 'path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const entryPath = resolve(outputDir, 'entry.txt');

try {
  const content = readFileSync(entryPath, 'utf-8');
  const ok = content.length === 1 && /^[A-Z]$/.test(content);
  if (!ok) {
    console.error('FAIL: entry.txt must be exactly one uppercase A-Z character, got:', JSON.stringify(content));
    process.exit(1);
  }
  console.log('OK:', content);
  process.exit(0);
} catch (e) {
  console.error('FAIL: cannot read entry.txt:', e.message);
  process.exit(1);
}