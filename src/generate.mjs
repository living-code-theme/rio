// Rio's [colors] table, including all sixteen ANSI slots and native navigation/search surfaces.
import { ANSI_ORDER } from '../scripts/palette.mjs';
const roles = { background: 'bg', foreground: 'fg', cursor: 'cursor', 'vi-cursor': 'warning', tabs: 'bgDeep', 'tabs-active': 'accent',
  'selection-background': 'selection', 'selection-foreground': 'fg', split: 'border', 'split-active': 'borderActive',
  'search-match-background': 'selection', 'search-match-foreground': 'fg',
  'search-focused-match-background': 'match', 'search-focused-match-foreground': 'bg', 'hint-background': 'match', 'hint-foreground': 'bg' };
export function generate(flavors) {
  return flavors.map(f => {
    const colors = { ...Object.fromEntries(Object.entries(roles).map(([key, role]) => [key, f.r(role)])),
      ...Object.fromEntries(ANSI_ORDER.flatMap((name, i) => [[name, f.ansi.normal[i]], [`light-${name}`, f.ansi.bright[i]]])) };
    return { path: `themes/${f.slug}.toml`, content: '[colors]\n' + Object.entries(colors).map(([key, color]) => `${key} = "${color}"`).join('\n') + '\n' };
  });
}
