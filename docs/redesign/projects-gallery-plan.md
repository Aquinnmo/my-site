# Projects Top-Icon Liquid Glass Morph Plan

## Summary

Keep the current Projects layout with all project icons visible at the top of the Projects section. When a visitor selects an icon, that icon becomes the incoming liquid-glass object and morphs into the focused project card. The old focused card does not move toward the icon row; it pushes backward into the screen, blurs, and fades out.

## Phase 1: Keep The Current Layout

Status: implemented in the current working tree.

- Keep the existing top icon row in `src/components/ProjectsSection.tsx`.
- Keep all project icons visible at all times, including the active project icon.
- Keep the focused project card below the icon row.
- Keep the icon row at the top of the Projects section, not sticky to the viewport.
- Do not restore the old bottom selector row.

Success criteria:

- All icons are visible above the focused card.
- The active icon remains visible.
- The focused project content still renders below the icons.

## Phase 2: Restore The Useful Original Morph Code

Status: superseded by the smoother title fade-in change.

Do not restore the original title-morph pieces. They caused visible title jank because the title moved independently from the card content.

Keep the useful original morph idea limited to fixed glass overlay layers for the card surface.

Success criteria:

- The title remains in the normal morph card header.
- The title fades in with the rest of the incoming card content.
- No separate title layer or title measurement code exists.

## Phase 3: Rewrite The Morph State

Status: implemented.

Change the morph state so it matches the new behavior.

`ProjectMorphLayer` should only support:

- `incoming`
- `outgoing`

`ProjectMorphRequest` should store:

- `fromIndex`
- `toIndex`
- `selectedIconFromRect`
- `focusFromRect`

Remove any selector-row state and refs that only existed for bottom cards.

Success criteria:

- No code expects an outgoing project to travel to a selector card.
- No code depends on `.project-selector-row`, `.project-selector-card`, or `.project-selector-title`.
- The selected icon rect is the only source rect for the incoming animation.

## Phase 4: Change Click Handling

Status: implemented.

In `handleProjectSelect(index)`:

- Return if the clicked project is already active.
- Return if `isMorphing` is true.
- If reduced motion is enabled, call `setActiveProjectIndex(index)` and stop.
- Measure the clicked icon button using `iconRefs.current[index].getBoundingClientRect()`.
- Measure the current focus card using `focusCardRef.current.getBoundingClientRect()`.
- Store those values in `morphRequest`.
- Then call `setActiveProjectIndex(index)`.

Success criteria:

- The new active project is chosen after measurements are saved.
- Reduced-motion users get an instant swap.
- Rapid clicks cannot stack multiple broken animations.

## Phase 5: Build The New Overlay Layers

Status: implemented.

In the `useLayoutEffect` that runs after `activeProjectIndex` changes:

- Measure the new focus card rect.
- Measure the new focus title rect and style.
- Create one `incoming` morph layer:
  - project is the newly selected project
  - starts at `selectedIconFromRect`
  - ends at the new focus card rect
- Create one `outgoing` morph layer:
  - project is the old focused project
  - starts at `focusFromRect`
  - ends at `focusFromRect`
- Do not create a separate incoming title layer; the title should fade in with the rest of the incoming card content.

Do not create a layer that moves the old card into the icon row.

Success criteria:

- Selected icon expands into the focused card.
- Old focused card stays in place while retreating.
- New title fades in exactly where the focused card title belongs.

## Phase 6: Rewrite The CSS Animation

Status: implemented.

In `src/App.css`:

- Keep `.project-icon-row` and `.project-icon-card`.
- Remove unused bottom-selector CSS if present:
  - `.project-selector-row`
  - `.project-selector-card`
  - `.project-selector-title`
  - `.project-selector-card[data-project-selector-morphing='true']`

Incoming layer behavior:

- Starts icon-sized.
- Expands into the focus-card rect.
- Uses the existing frosted/liquid glass border, blur, shadow, and background.
- Keeps full project details hidden until the end of the animation.

Outgoing layer behavior:

- Does not move to the icon row.
- Uses the old focus card position.
- Animates to `opacity: 0`.
- Animates to `filter: blur(0.75rem)`.
- Animates to `scale(0.88)`.
- Sits behind the incoming layer.

Title behavior:

- Do not use `.project-morph-title-layer`.
- Fade `.project-morph-header` in with `.project-morph-detail`.
- Keep the title in the normal card grid so there is no independent title-position jank.

Success criteria:

- The incoming animation reads as liquid glass.
- The outgoing card visually pushes backward and disappears.
- The old card never travels upward to the icon row.

## Phase 7: Update Docs

Update `docs/redesign/projects-gallery-plan.md`:

- Replace bottom-selector language with top-icon-row language.
- State that all icons stay visible.
- State that selected icon morphs into the focused project.
- State that old focused project retreats and fades.

Update `docs/redesign/source-of-truth.md`:

- Active project icon remains visible.
- All icons stay at the top of the Projects section.
- Selected icon morphs into the focused card.
- Previous focused card pushes backward and fades out.
- Reduced motion swaps instantly.

Success criteria:

- Docs match the implemented animation.
- Future agents do not reintroduce the bottom selector row.

## Phase 8: Validate

Run:

```bash
npm run lint
```

Do not run `npm run build`.

Manual checks:

- Page loads with Pump Pal focused.
- All four icons are visible above the focused card.
- Clicking each icon changes the focused project.
- Selected icon morphs into the project card.
- Previous card fades backward.
- Previous card never moves toward the icon row.
- Active icon remains visible during the animation.
- Rapid clicks during animation do not break state.
- Reduced-motion mode swaps instantly.
- Mobile has no overlap, clipped text, or layout jump.

## Assumptions

- No new animation library is added.
- The icon row remains at the top of the Projects section, not sticky.
- The current project data and copy do not change.
- The focused card layout remains desktop two-column and mobile stacked.
