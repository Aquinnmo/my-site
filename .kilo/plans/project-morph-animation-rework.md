# Project Morph Animation Rework

> **Status: FOR TESTING ONLY.** Implementation committed as `ea9e708` and further modified in working tree. This is an experimental rework of the projects section morph animation. Do not treat as final. Revert or iterate based on visual review.

Remove unnecessary shift-layer animation from unchanged bottom-row cards, fix font/weight consistency between focus and selector title states, and move the project name to a centered position above the visual and content columns.

---

## Problem 1: Unchanged bottom-row cards fade and shift during morph

**Symptoms:**

- Every inactive selector card gets opacity: 0 during the entire morph (`App.css` line 1670: `.project-selector-row[data-project-selector-row-morphing='true'] .project-selector-card`).
- The `useLayoutEffect` creates `shift` layers (with `shiftTitleLayers`) for every card that isn't the selected one, animating positions that don't need to move.

**Goal:** Only the incoming (selected) and outgoing (previous focus) cards participate in the morph. All other selector cards remain fully visible and static.

### TSX changes (`src/components/ProjectsSection.tsx`)

1. Remove shift-layer generation. In `useLayoutEffect`, delete the `shiftLayers` and `shiftTitleLayers` arrays — only create `incoming` and `outgoing` layers + their title layers.

2. Track the previous active index so individual selector cards can be selectively hidden. Add:

   ```tsx
   const previousActiveIndexRef = useRef(0)
   ```

   In `handleProjectSelect`, before `setActiveProjectIndex(index)`:

   ```tsx
   previousActiveIndexRef.current = activeProjectIndex
   ```

3. Replace the row-level morphing attribute with a per-card attribute on each `<button className="project-selector-card">`:

   ```tsx
   data-project-selector-morphing={
     isMorphing && (index === activeProjectIndex || index === previousActiveIndexRef.current)
       ? 'true'
       : undefined
   }
   ```

4. Remove `data-project-selector-row-morphing` from the row `<div>.project-selector-row`.

### CSS changes (`src/App.css`)

1. Delete the rule:

   ```css
   .project-selector-row[data-project-selector-row-morphing='true'] .project-selector-card {
     opacity: 0;
     transition-duration: 0ms;
   }
   ```

2. Add:

   ```css
   .project-selector-card[data-project-selector-morphing='true'] {
     opacity: 0;
     transition-duration: 0ms;
   }
   ```

---

## Problem 2: Inconsistent fonts, weights, and styling on project names

**Current state:**

| Element | Font-family | Font-weight | letter-spacing |
|---|---|---|---|
| `.project-card h3` (focus) | `--font-heading` (Georgia serif) | inherited (`bold` ≈ 700) | `-0.035em` |
| `.project-selector-title` (row) | `--font-body` (sans-serif) | 850 | none |
| `.project-morph-title-layer` (morph) | inherited (body) | 900 | none |

**Goal:** All three use the same font-family, weight, and letter-spacing — only font-size differs.

### CSS changes

```css
.project-card-header h3,
.project-selector-title,
.project-morph-title-layer {
  font-family: var(--font-heading);
  font-weight: 850;
  letter-spacing: -0.035em;
}
```

Merge individually rather than as a group rule to avoid unintentional override; keep each selector's existing `font-size`.

---

## Problem 3: Project name should be centered above the visual and content

**Current DOM (`.project-focus-card`):**

```
.project-focus-card (two-column grid: visual | content)
  .project-focus-visual
  .project-focus-content
    .project-card-header
      h3
    p.project-summary
    ul.project-proof-list
    ul.project-stack
    div.project-links
```

**Goal:** The name sits alone, centered, on its own row above the visual+content columns:

```
.project-focus-card (three-row grid: name / visual+content / metadata)
  .project-card-header
    h3 (centered, full-width)
  .project-focus-visual
  .project-focus-content
    p.project-summary
    ul.project-proof-list
    ul.project-stack
    div.project-links
```

### TSX changes

Move the `<div className="project-card-header">` (with `<h3>` inside) to be the first child of `<article className="project-card project-focus-card">`, above `.project-focus-visual` and `.project-focus-content`.

### CSS changes

```css
.project-focus-card {
  grid-template-columns: minmax(14rem, 0.82fr) minmax(0, 1.18fr);
  grid-template-rows: auto 1fr;
  gap: clamp(1rem, 2.5vw, 1.5rem);
  align-items: stretch;
  min-height: clamp(30rem, 58vw, 38rem);
}

.project-card-header {
  /* full-width, centered row */
  grid-column: 1 / -1;
  text-align: center;
  width: 100%;
}
```

Remove `gap: 0.3rem` from `.project-card-header` (it no longer contains extra metadata).

Update the mobile breakpoint (line ~2468):

```css
.project-focus-card {
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  min-height: 0;
}
```

---

## Files to modify

| File | Changes |
|---|---|
| `src/components/ProjectsSection.tsx` | Remove shift layers, add `previousActiveIndexRef`, per-card morphing attribute, move h3 above visual+content |
| `src/App.css` | Per-card opacity rule, font consistency, focus-card grid rework, responsive update |

## Files NOT modified

- `src/components/foundry/FoundryProcessSection.tsx` — unrelated
- `src/foundry/foundryContent.ts` — unrelated
- `docs/redesign/` — source-of-truth will be updated after implementation per existing policy
