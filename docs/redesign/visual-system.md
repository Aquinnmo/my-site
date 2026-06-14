# Redesign Visual System

This document defines the Phase 4 visual system for the frozen-lake blizzard portfolio and the approved Foundry ember variant. It should be used before implementation work begins so future agents can retrieve exact color, typography, surface, and motion decisions.

## Visual Direction

- Theme: blizzard over a frozen lake.
- Foundry variant: crackling embers with the same layout, surface, and particle architecture as the portfolio.
- Light mode: daylight blizzard over pale lake ice, using the same layered styling and effect placement as night mode with light-blue glow, frost, and snow particles.
- Dark mode: night blizzard, black lake ice, deep blue shadows, and bright white snow particles.
- Foundry light mode: white with orangey-red fire accents, using the same effect placement as Foundry dark mode.
- Foundry dark mode: black with orangey-red fire accents and ember particles.
- The portfolio should feel natural, cold, and atmospheric, not like a technical dashboard.
- The Foundry variant should feel natural, warm, and atmospheric while preserving the same readable structure.
- The Foundry page should feel like the same site translated from blizzard to embers, not a separate fire-themed landing page.
- The recruiter use case remains primary: high contrast, scannable hierarchy, and low-friction reading.

## Light Theme Tokens

Use these as CSS custom property targets.

| Token | Value | Purpose |
| --- | --- | --- |
| `--color-bg` | `#fbfeff` | Whiteout counterpart to dark sky/black ice |
| `--color-bg-deep` | `#e5f8ff` | Near-white frozen lake depth |
| `--color-bg-wind` | `#c8ecfb` | Pronounced light-blue blizzard cloud layer |
| `--color-ice` | `#b9e5f7` | Pale but visible ice surfaces |
| `--color-ice-strong` | `#49bfe9` | Strong daylight frozen-lake blue |
| `--color-ice-edge` | `#86d2ec` | More visible ice edges and dividers |
| `--color-frost` | `#8bddfb` | Pronounced light-blue frost/radial highlight |
| `--color-panel` | `rgba(255, 255, 255, 0.76)` | Frosted whiteout panels |
| `--color-panel-strong` | `rgba(255, 255, 255, 0.92)` | High-readability whiteout panels |
| `--color-text` | `#10202d` | Primary text |
| `--color-text-muted` | `#526879` | Secondary text |
| `--color-link` | `#0b6e99` | Links and quiet actions |
| `--color-link-hover` | `#084c6b` | Link hover |
| `--color-focus` | `#0ea5d8` | Focus outline |
| `--color-snow` | `rgba(20, 132, 181, 0.72)` | More visible light-blue day-mode snow particles |
| `--color-shadow` | `rgba(42, 132, 174, 0.24)` | Stronger cold blue daylight shadow |

## Dark Theme Tokens

Use these as the base `:root` CSS custom property targets so the site defaults to dark before JavaScript runs.

| Token | Value | Purpose |
| --- | --- | --- |
| `--color-bg` | `#03070b` | Night sky and black ice base |
| `--color-bg-deep` | `#071421` | Deep frozen lake shadow |
| `--color-bg-wind` | `#0c1d2a` | Blizzard cloud layer |
| `--color-ice` | `#102f42` | Dark ice surfaces |
| `--color-ice-strong` | `#1f6b8d` | Strong cold blue highlight |
| `--color-ice-edge` | `#24485c` | Ice edges and dividers |
| `--color-frost` | `#d9f5ff` | Frost highlight |
| `--color-panel` | `rgba(5, 17, 27, 0.74)` | Night frosted panels |
| `--color-panel-strong` | `rgba(8, 23, 36, 0.9)` | High-readability night panels |
| `--color-text` | `#f3fbff` | Primary text |
| `--color-text-muted` | `#a8bdc9` | Secondary text |
| `--color-link` | `#87dbff` | Links and quiet actions |
| `--color-link-hover` | `#c5efff` | Link hover |
| `--color-focus` | `#7ddcff` | Focus outline |
| `--color-snow` | `rgba(242, 251, 255, 0.92)` | Snow particles |
| `--color-shadow` | `rgba(0, 0, 0, 0.55)` | Night shadow |

## Single-Colour SVG Logo Contrast

Single-colour SVG logos that are black or white must invert to contrast the active theme so they remain visible on both day and night backgrounds.

- Black SVGs: invert in dark mode so they render white at night and black by day.
- White SVGs: invert in light mode so they render black by day and white at night.
- Coloured brand logos should keep their native brand colours and are not inverted.

## Foundry Theme Variant

The Foundry page should reuse the portfolio visual system structure with page-scoped ember tokens or equivalent CSS variables. It should not fork the site into a new design language.

### Foundry Dark Mode Targets

Use black and orangey-red fire colors as the dominant Foundry dark-mode impression.

| Role | Target | Purpose |
| --- | --- | --- |
| Background base | near-black / black | Replaces frozen-lake night base |
| Deep background | orange-red black | Adds ember depth without brightening the page |
| Accent | saturated orange-red | Primary Foundry links, highlights, and active states |
| Accent hover | warm flame orange | Hover and emphasis states |
| Panel | translucent black-red | Same readable panel logic as portfolio cards |
| Panel strong | deeper translucent black-red | Higher contrast surfaces |
| Particle | orange-red | Rising sparks in both color modes |
| Shadow | black with red tint | Keeps depth consistent with ember theme |

### Foundry Light Mode Targets

Use white and orangey-red fire colors as the dominant Foundry light-mode impression.

| Role | Target | Purpose |
| --- | --- | --- |
| Background base | white / near-white | Replaces whiteout lake base |
| Deep background | very pale warm orange-red | Adds ember warmth while keeping readability |
| Accent | orange-red | Primary Foundry links, highlights, and active states |
| Accent hover | deep burnt orange | Hover and emphasis states |
| Panel | translucent white | Same readable panel logic as portfolio cards |
| Panel strong | stronger translucent white | Higher contrast surfaces |
| Particle | orange-red | Rising sparks in both color modes |
| Shadow | soft red tint | Daylight counterpart to ember depth |

### Foundry Particle Rules

- Reuse the existing snowfall layer technique for particle density, layering, and pointer-event behavior.
- Render particles orange-red in both dark and light modes.
- Use a brighter hot-core spark color in addition to the base orange-red particle color.
- Keep Foundry spark opacity high enough to be clearly visible in both black/red dark mode and white/orange-red light mode.
- Invert the y-axis movement so particles rise upward like sparks instead of falling downward like snow.
- Preserve varied particle sizes, opacities, and speeds across at least two layers.
- Keep `prefers-reduced-motion` behavior: disable the rising animation and leave a static ember-speck texture.
- Particles must not obscure text or intercept clicks.

### Foundry Variable Naming

- Foundry route-specific variables should use ember names, such as `--color-ember-bg`, `--color-ember-accent`, `--color-ember-spark`, and `--color-ember-spark-hot`.
- Map ember variables back into the shared token names used by the portfolio components, such as `--color-bg`, `--color-link`, and `--color-snow`.
- Avoid assigning fire colors directly to ice-named shared variables without the ember alias layer.

## Typography Rules

- Typography should feel natural and human, not geometric or code-centric.
- Heading direction: expressive serif with an icy editorial feel.
- Body direction: rounded humanist sans for warm readability.
- Recommended heading font: `Fraunces`.
- Recommended body font: `Nunito Sans`.
- Fallback heading stack: Georgia, serif.
- Fallback body stack: `ui-sans-serif`, system sans-serif.
- Avoid monospace except for literal code or repository names.
- Do not use viewport-scaled font sizes.
- Use clear fixed or clamped sizes with readable line heights.
- Suggested base body size: `1rem` on mobile, `1.0625rem` on desktop.
- Suggested body line height: `1.65`.
- Suggested hero heading line height: `0.98` to `1.05`.
- Suggested section heading line height: `1.08` to `1.15`.
- Avoid heavy all-caps styling.
- Small labels can use modest letter spacing, but should not feel like terminal UI.

## Surface Rules

- Page background should be layered, not flat:
  - base whiteout or night color
  - radial glow
  - soft depth glow
  - blurred haze
  - particle overlay
- Day and night modes should share the same background composition; day mode should not become a separate white-only styling system.
- Day mode should use the same effect placement as night mode.
- Day-mode dark bases should become white or near-white; night-mode whites should become light blue.
- Portfolio day-mode glow radials and snow should read as pronounced light blue, while portfolio night-mode glow radials and snow can read white-blue.
- Foundry glow radials and particles should read as orangey-red fire colors in both color modes.
- Panels should look like frosted ice laid over the lake, not generic glass cards.
- Cards are allowed for repeated experience and project items only.
- Avoid wrapping every section in a card.
- Avoid nested cards.
- Card border radius target: `0.5rem`.
- Button border radius can be pill-shaped if it improves tap clarity.
- Borders should be thin, cold, and low contrast.
- Shadows should be soft and blue-toned in light mode.
- Shadows should be deeper and less colorful in dark mode.
- Do not use crack lines, shard motifs, etched ice lines, or repeating linear ice textures.
- Frozen-lake texture should be implied through color, frost, blur, snow, and depth instead of lines.
- Do not use pill-style section kicker tags above section headings.
- Profile image treatment should combine:
  - visible original photo color with a cool ice cast
  - translucent blue-white ice overlay that does not wash out the photo
  - frost edge highlight
  - soft refraction or blur layer
  - snow/frost texture above the image
- Profile image should be square with rounded edges.
- Profile image treatment must keep the face recognizable.

## Motion Rules

- Atmospheric particles should be site-wide for the active page.
- Portfolio snowfall is CSS-based for the current implementation.
- Foundry sparks should reuse the same CSS particle-layer approach.
- Particles should appear as a foreground atmospheric layer over the page, but pointer events must be disabled.
- Particle density should be light to medium.
- Particle speed should vary across at least two layers.
- Particles should not obscure text.
- Use `prefers-reduced-motion` to disable falling or rising animation and leave a static frost/snow or ember-speck texture.
- Page-load animation should be subtle:
  - hero content can fade in and rise slightly
  - section groups can reveal with a small stagger
  - no large sliding, spinning, or novelty motion
- Hover motion should be minimal:
  - slight lift or border brightening for project cards
  - link underline or color shift
- Theme toggle animation should be simple and not draw attention away from the content.
- The page switcher should use one current-page palette at a time: portfolio ice colors while the portfolio is rendered and Foundry ember colors while the Foundry page is rendered.
- Switcher options should not carry permanent destination colors.
- Page-to-page transitions should fade content into the light/dark base color, swap the rendered route at full veil opacity, then fade the new route in from the top scroll position.
- Theme toggle should use a sun icon for switching to day mode and a moon icon for switching to night mode.
- Dark mode is the default initial theme; the toggle manually switches to day mode.
- Action links should use specific, action-matching icons where available.
- Website and preview links should use an external-arrow icon.
- Icons should clarify actions without becoming a decorative logo wall.

## Accessibility Rules

- Text must be readable directly on every surface.
- Never rely on theme texture behind body text without a panel or contrast layer.
- Focus outlines must be visible in both light and dark modes.
- Snowfall must not intercept clicks or keyboard focus.
- Respect `prefers-reduced-motion`.
- Maintain semantic heading order.
- Ensure project links clearly distinguish live links from repository links.

## Open Visual Decisions

These remain open unless the user explicitly approves them later.

- Exact external font loading method.
- Whether the profile image treatment should remain CSS-only or use edited/generated artwork.
- Whether the dark mode theme toggle should persist to local storage.
- Exact mobile profile image size and placement.
