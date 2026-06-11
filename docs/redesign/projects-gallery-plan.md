# Projects Gallery Redesign Plan

## Summary

Redesign the Projects section from an equal-weight grid into a focused gallery: one large frosted focus card, with all other projects shown as name-only selector cards in a bottom row that matches the focus card width. Default focus is `Pump Pal`. Mobile uses the same gallery model, with the focus card stacked vertically. Project content stays unchanged.

## Key Changes

- Replace the static project grid in `ProjectsSection.tsx` with stateful gallery selection:
  - `activeProjectIndex` starts at `0` (`Pump Pal`).
  - The focus card renders the active project.
  - The bottom row renders every inactive project as a button/card with only the project name.
  - Selecting a bottom-row card swaps it into focus and moves the previous active project into the bottom row.
- Preserve current focus-card content and visual language:
  - Right side contains the existing title, summary, proof bullets, stack tags, and links.
  - Left side contains a project visual placeholder for now: a frosted icon panel with a unique default icon per project.
  - The focus card keeps the current `.project-card` frosted surface, border, blur, shadow, typography, and link/tag styling.
- Implement the bottom row as a full-width gallery tray:
  - Tray width equals the focus card width.
  - If inactive name cards fit, they expand evenly to fill the tray.
  - If inactive name cards overflow, they use a standardized fixed width and scroll horizontally.
  - Name cards contain only project names, no descriptions, tags, proof bullets, or links.
  - Tray scrolling is horizontal only and should not introduce visible global scrollbar chrome.
- Implement the liquid-glass morph with CSS FLIP, no new dependencies:
  - On selection, measure the selected tray card and current focus card before changing state.
  - Render two temporary glassy transition layers: selected project morphs from tray position to focus position, previous focus morphs from focus position to its new tray position.
  - Use transform, scale, opacity, blur, border-color, and background interpolation to create the liquid-glass feel.
  - During animation, hide the real selected tray/focus surfaces visually but keep layout stable.
  - After animation completes, remove transition layers and reveal the settled gallery.
  - `prefers-reduced-motion: reduce` skips the morph and swaps instantly.

## Phase 1: Structure

- Refactor Projects into a gallery layout without changing project data or copy.
- Add focus card, visual placeholder area, content area, and bottom selector row.
- Keep semantic heading and section order unchanged.

Success criteria:

- Projects still appears after Experience and before Skills.
- Pump Pal is focused by default.
- Inactive projects appear only as name cards in the bottom row.
- Existing project content remains available in the focus card.

Status: implemented in `src/components/ProjectsSection.tsx` and `src/App.css`.

## Phase 2: Layout And Responsiveness

- Style the focus card as a two-column card on desktop/tablet: visual left, content right.
- Stack the visual above content on mobile.
- Make the bottom row exactly match the focus card width.
- Implement expand-to-fill and horizontal-overflow behavior for selector cards.

Success criteria:

- Desktop focus card reads as a larger version of the current frosted project card.
- Mobile keeps the same gallery behavior without clipped text or overlap.
- Bottom selector cards fill available width when possible and scroll horizontally when needed.

## Phase 3: Morph Animation

- Add FLIP measurement and temporary transition layers.
- Animate selected project from tray to focus and previous focus from focus to tray.
- Add reduced-motion fallback.

Success criteria:

- Selecting a project produces a smooth liquid-glass swap.
- Layout does not jump during or after the animation.
- Keyboard users can tab through selector buttons and activate them.
- Reduced-motion users get an instant, stable swap.

## Phase 4: Docs And Validation

- Update `docs/redesign/source-of-truth.md` with the new Projects gallery behavior.
- Keep this file synchronized if implementation details change.
- Run `npm run lint` and `npm run build`.
- Browser-check desktop and mobile if automation is available.

Success criteria:

- Lint passes.
- Production build passes.
- Docs match the implemented behavior.
- No regressions to Experience, Skills, footer, theme toggle, page switcher, or snowfall.

## Tests And Scenarios

- Default load shows Pump Pal in focus.
- Clicking each inactive project swaps it into focus.
- Repeated rapid clicks do not leave stale overlay layers or broken state.
- Bottom row remains focus-card width at desktop, tablet, and mobile sizes.
- Selector row scrolls horizontally if future project count exceeds available width.
- All links in the focused card still open correctly.
- `prefers-reduced-motion: reduce` disables morph animation.
- Keyboard tab and Enter/Space selection work for bottom-row project buttons.

## Assumptions

- Current rendered project list remains the source of truth; no new projects are added in this redesign.
- Default project icons are local inline SVG/CSS icons, not real screenshots yet.
- No new animation library is added.
- The active project is not duplicated in the bottom row while focused.
- Selection state does not persist across page reloads.
