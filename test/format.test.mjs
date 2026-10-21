import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { resolveAll } from '../scripts/palette.mjs';
import { keys, hexColors, assertContrast } from './helpers.mjs';
const fixture = JSON.parse(await readFile(new URL('./fixtures/upstream.json', import.meta.url)));
const read = path => readFile(new URL('../' + path, import.meta.url), 'utf8');
import * as TOML from 'smol-toml';

for (const f of resolveAll()) test(f.name + ': native Rio Colors table and sixteen ANSI slots', async () => {
  const t = TOML.parse(await read('themes/' + f.slug + '.toml'));
  keys(t, ['colors']); hexColors(t.colors);
  for (const key of Object.keys(t.colors)) assert.ok(fixture.colors.includes(key), 'Unknown Rio color: ' + key);
  for (const [index, name] of ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'].entries()) {
    assert.equal(t.colors[name], f.ansi.normal[index]); assert.equal(t.colors['light-' + name], f.ansi.bright[index]);
  }
  assert.equal(t.colors.background, f.r('bg')); assert.equal(t.colors.foreground, f.r('fg')); assert.equal(t.colors.cursor, f.r('cursor'));
  assertContrast(t.colors.foreground, t.colors.background);
  for (const prefix of ['selection', 'search-match', 'search-focused-match', 'hint']) assertContrast(t.colors[prefix + '-foreground'], t.colors[prefix + '-background']);
});
