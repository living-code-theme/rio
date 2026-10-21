<!-- living-code-readme:1 -->
# 🏞️ Living Code for Rio

**Calm slate. Living color.** Living Code for Rio: native terminal palettes with all sixteen ANSI slots, cursor, selections, split dividers and search colors.

[Installation](#installation) · [Flavors](#flavors) · [Configuration](#configuration) · [All ports](https://github.com/living-code-theme)

## Previews

Real application screenshots have not been captured yet.

## Installation

```sh
git clone https://github.com/living-code-theme/rio.git
cd rio
```

```sh
mkdir -p "$HOME/.config/rio/themes"
cp themes/*.toml "$HOME/.config/rio/themes/"
```

In your existing Rio `config.toml`, set the top-level theme name before any tables:

```toml
theme = "living-code-night"
```

Reload or restart Rio. If your Rio installation uses a custom configuration location, put the `themes/` folder alongside that config.

## Flavors

Expand a flavor for its full-size preview and activation instructions.

<details data-lc-flavor="night">
<summary><strong>Night</strong> · Dark · full palette</summary>

A real application capture is not available yet.

Set the top-level `theme = "living-code-night"` in Rio’s config, then reload or restart Rio.

</details>

<details data-lc-flavor="frost">
<summary><strong>Frost</strong> · Dark · softer chroma</summary>

A real application capture is not available yet.

Set the top-level `theme = "living-code-frost"` in Rio’s config, then reload or restart Rio.

</details>

<details data-lc-flavor="paper">
<summary><strong>Paper</strong> · Light · near-white slate</summary>

A real application capture is not available yet.

Set the top-level `theme = "living-code-paper"` in Rio’s config, then reload or restart Rio.

</details>

<details data-lc-flavor="signal">
<summary><strong>Signal</strong> · Dark · teal accent</summary>

A real application capture is not available yet.

Set the top-level `theme = "living-code-signal"` in Rio’s config, then reload or restart Rio.

</details>

## Configuration

Each theme contains a native `[colors]` table. Rio names bright ANSI colors `light-black` through `light-white`, not `bright-*`. Cursor, vi cursor, tabs, active/inactive split dividers, selections, search matches and hints are all supplied. Remove conflicting `[colors]` entries from your main config if they override the selected theme.

## Compatibility

Verified against Rio’s native `Theme` and `Colors` structures at the pinned upstream revision. No terminal font, renderer, keybinding or shell setting is changed. These are static TOML themes and need no build tool at runtime. All ANSI slots are tested for order and exact agreement with the pinned palette.

## Contributing

Found a problem? [Open an issue](https://github.com/living-code-theme/rio/issues/new/choose) with the app version, the flavor and a screenshot. Want Living Code somewhere else? [Request a port](https://github.com/living-code-theme/core/issues/new?template=port-request.yml).

Pull requests are welcome. Keep this README, `port.json` and `images/` in sync, and use real screenshots of the app, never mockups.

🦎 **One chameleon, many habitats.** Part of [Living Code](https://github.com/living-code-theme).

## License

[MIT](LICENSE) © Elliot Luque
