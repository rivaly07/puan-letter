import { readFile } from 'node:fs/promises';
import path from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const entryPath = path.join(outputDir, 'entry.txt');

try {
  const entry = await readFile(entryPath, 'utf8');
  if (!/^[A-Z]$/.test(entry)) {
    console.error(`Invalid entry in ${entryPath}: expected exactly one uppercase A-Z character.`);
    process.exitCode = 1;
  } else {
    console.log(`Valid entry: ${entry}`);
  }
} catch (error) {
  console.error(`Unable to read ${entryPath}: ${error.message}`);
  process.exitCode = 1;
}
