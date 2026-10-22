"""Capture Rio itself, not a host-terminal approximation of Rio's theme."""
import time

GRAPHICAL = True


def prepare(c):
    c.copy(f'themes/{c.slug}.toml', f'.config/rio/themes/{c.slug}.toml')
    c.write('.config/rio/config.toml', f'''theme = "{c.slug}"
padding-x = 48
padding-y = [40, 40]
[window]
width = 2560
height = 1600
decorations = "Disabled"
[fonts]
family = "DejaVu Sans Mono"
size = 32
[renderer]
backend = "Vulkan"
use-cpu = true
''')
    script = c.write('terminal-demo.sh', '''printf '\\033[2J\\033[H'
printf 'Glyph field  /  Rio terminal palette\\n\\n'
printf '\\033[36m%s\\033[0m\\n' '$ git status --short'
printf '\\033[32m M src/FieldRenderer.ts\\033[0m\\n'
printf '\\033[33m?? src/pointer.ts\\033[0m\\n\\n'
printf '\\033[36m%s\\033[0m\\n' '$ head -25 src/FieldRenderer.ts'
head -25 src/FieldRenderer.ts
printf '\\n'
for color in 30 31 32 33 34 35 36 37 90 91 92 93 94 95 96 97; do
  printf '\\033[%sm  Aa  \\033[0m' "$color"
done
printf '\\n\\n$ '
exec sleep 120
''')
    c.env['WINIT_UNIX_BACKEND'] = 'x11'
    return ['rio', '--title-placeholder', 'Living Code capture', '--working-dir', c.work, '-e', 'bash', script]


def drive(c):
    # Wait for the real X11 Rio window, then normalize its native window dimensions.
    for _ in range(100):
        try:
            windows = c.run(['xdotool', 'search', '--onlyvisible', '--class', 'rio']).split()
            if windows:
                c.run(['xdotool', 'windowsize', windows[-1], '2560', '1600'])
                time.sleep(2)
                return
        except Exception:
            pass
        time.sleep(0.1)
    raise RuntimeError('Rio did not create its native X11 window')
