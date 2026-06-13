# Key Skills Bubble Chart Plan

## Summary

Replace the current `Key Skills` card grid with one bubble chart. Each skill becomes one circular bubble with one same-sized icon. The four current groups stay in the same corner positions:

- Top left: `Languages`
- Top right: `Tools`
- Bottom left: `Frameworks`
- Bottom right: `AI`

Hovering or keyboard-focusing a bubble will magnify it, add a glow using that skill icon’s color, and show a tooltip with the skill name.

## Implementation Changes

### Phase 1: Prepare Skill Data And Assets

Steps:
1. Update `src/components/SkillsSection.tsx`.
2. Replace the current `skillGroups` card data with `skillBubbles`.
3. Each skill object must include:
   - `name`
   - `group`
   - `icon`
   - `color`
   - `x`
   - `y`
4. Copy usable legacy icons into `src/assets/portfolio/skills/`.
5. Do not import anything directly from `legacy/`.
6. Use monogram fallback icons for missing assets.

Initial icon plan:
- Legacy assets: TypeScript, Python, Java, C, CSS, GitHub, Vercel, Render, Supabase, Firebase, MongoDB, Docker, React, Next.js, Expo, Node.js, Gemini, Claude.
- Existing/fallback icons: Kotlin, Redis, Kubernetes, Spring Boot, React Native, AI Feature Design, Workflows and Integrations, MCP Servers.

Success criteria:
- All current skills still appear once.
- Runtime code imports only from `src/assets/portfolio/skills/` or inline fallback icons.
- No visible section summary text is added.

### Phase 2: Build The Bubble Chart Markup

Steps:
1. Keep the section heading as `Key Skills`.
2. Replace `.skills-grid` and `.skill-card` markup with one chart container.
3. Add four quiet corner labels: `Languages`, `Tools`, `Frameworks`, `AI`.
4. Render each skill as a `<button>` so hover and keyboard focus both work.
5. Put the icon inside the button.
6. Put the skill name inside a tooltip element.
7. Use inline CSS variables for each bubble:
   - `--skill-x`
   - `--skill-y`
   - `--skill-color`

Success criteria:
- The section reads as one chart, not four cards.
- The current group structure is still obvious.
- Keyboard users can tab through every skill bubble.
- Screen readers get the skill name.

### Phase 3: Style The Chart

Steps:
1. Add new CSS in `src/App.css`.
2. Use a translucent frozen-lake panel for the chart background.
3. Make every bubble the same size.
4. Make every icon the same size.
5. Position bubbles with percentage-based `left` and `top`.
6. Keep related skills clustered in their assigned corner.
7. On hover/focus:
   - scale the bubble up
   - increase `z-index`
   - show the tooltip
   - apply `box-shadow` and `filter: drop-shadow(...)` using `--skill-color`
8. Add `prefers-reduced-motion` rules so scale/transition effects are removed for reduced-motion users.

Success criteria:
- No bubble overlaps badly at desktop width.
- Hover glow matches the skill’s configured color.
- Tooltip appears near the hovered/focused bubble.
- Magnification does not shift the whole section layout.

### Phase 4: Responsive Layout

Steps:
1. Desktop keeps the four-corner chart.
2. Tablet keeps the chart but tightens spacing.
3. Mobile changes to a compact wrapped bubble field while preserving group order:
   - Languages
   - Tools
   - Frameworks
   - AI
4. Tooltips must stay inside the viewport on mobile.
5. Bubbles must remain large enough to tap.

Success criteria:
- Desktop, tablet, and mobile all show every skill.
- No horizontal page scroll appears.
- Tooltip text does not get clipped.
- Touch targets are usable on mobile.

### Phase 5: Documentation And Verification

Steps:
1. Add a new plan file: `docs/redesign/skills-bubble-chart-plan.md`.
2. Update `docs/redesign/source-of-truth.md`.
3. Replace the old “compact skill labels instead of logo wall” note with the new bubble chart direction.
4. Run:
   - `npm run lint`
   - `npm run build`
5. Visually check the dev build in Chrome after implementation.

Success criteria:
- Docs describe the current bubble chart, not the old card grid.
- Lint passes.
- Build passes.
- Hover/focus effects work.
- The section still fits the frozen-lake visual system.

## Interfaces And Types

No public API changes.

Component-local type plan:

```ts
type SkillGroupId = 'languages' | 'tools' | 'frameworks' | 'ai'

type SkillBubble = {
  name: string
  group: SkillGroupId
  icon: SkillIconId
  color: string
  x: number
  y: number
}
```

## Assumptions

- All bubbles are the same size for this first version.
- All icons are the same size.
- Group labels stay visible but subtle.
- Missing logos use simple monograms or inline fallback icons.
- No new npm icon package is added.
