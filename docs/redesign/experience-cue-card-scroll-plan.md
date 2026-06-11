# Experience Cue-Card Scroll Plan

## Summary

Convert the portfolio Experience section into a pinned scroll sequence on both mobile and desktop: when the visitor reaches Experience, the viewport stays fixed while the three existing experience cards appear as a layered cue-card stack and advance one-by-one with scroll progress. After the final card is fully passed, normal page scrolling resumes into Projects and the rest of the site.

Keep the current frozen-lake visual language, card content, section order, no navbar, no divider bars, and no scrollbar chrome. Mobile should use the same cue-card behavior as desktop with viewport-appropriate sizing. Reduced-motion users keep the static stacked-card layout.

## Phase 1: Structure And Scroll Model

- Refactor `src/components/ExperienceSection.tsx` only enough to support the interaction:
  - keep the existing `experiences` data and card markup content.
  - add wrapper elements for a scroll track, sticky viewport, heading, and card stage.
  - add stable per-card index metadata via CSS variables or `data-*` attributes.
- Use CSS `position: sticky` for the pinned viewport instead of manually locking body scroll.
- Make the scroll track height deterministic, based on the number of cards, so each card gets one scroll segment.

Success criteria:

- Experience still appears after Hero and before Projects.
- The page scrolls naturally into and out of the Experience section.
- No body scroll locking, scroll hijacking, or wheel-event interception is introduced.
- Current content and semantic card structure remain intact.

## Phase 2: Cue-Card Interaction

- Add responsive CSS for the cue-card stack in `src/App.css`.
- Across mobile, tablet, and desktop widths, render Experience as:
  - a sticky viewport centered in the screen.
  - the `Experience` heading fixed within that viewport while the section is active.
  - cards layered in one stage, with the active card visually foremost.
  - the current card retreating straight back before the next card appears.
  - the next card coming straight up from the bottom during the transition.
  - non-active cards fading enough that the active card remains legible.
- Use a small React scroll-progress hook scoped to `ExperienceSection` to calculate active card progress from the section's bounding box.
- Avoid new libraries.

Success criteria:

- On mobile, tablet, and desktop, scrolling through Experience advances SPS Commerce, Foundry, then DataAnnotation in order.
- The viewport appears fixed while the card stack changes on all viewport sizes.
- Once the last card segment completes, Projects scrolls into view normally.
- The visual treatment still reads as the existing frosted experience cards, not a new design system.

## Phase 3: Responsive Sizing And Reduced-Motion Fallback

- At `max-width: 48rem`, keep the same pinned cue-card behavior but adjust card height, heading spacing, transform distances, and readable content sizing so the experience does not overflow or feel cramped.
- Under `prefers-reduced-motion: reduce`, disable the cue-card interaction and show the static stacked layout.
- Ensure the scroll-progress hook avoids unnecessary animation state when the effect is disabled.

Success criteria:

- Phones show the same cue-card sequence as desktop, with cards sized to the viewport and no clipped text.
- Reduced-motion users get static cards with no leaf-through transforms.
- No content overlaps on narrow screens.
- Keyboard/tab order remains the same as the document order.

## Phase 4: Polish, Docs, And Validation

- Update the relevant redesign docs:
  - `docs/redesign/source-of-truth.md` to record the responsive mobile-and-desktop Experience cue-card interaction.
  - `docs/redesign/visual-system.md` only if motion guidance needs a short note.
- Run validation:
  - `npm run lint`
  - `npm run build`
- Browser-check the portfolio page at:
  - desktop width: cue-card section pins, progresses, and releases correctly.
  - mobile width: cue-card section pins, progresses, and releases correctly.
  - reduced-motion emulation if available: static stacked cards.

Success criteria:

- Lint passes.
- Production build passes.
- Desktop interaction is smooth enough to read each card.
- Mobile interaction matches desktop behavior while fitting the smaller viewport.
- Reduced-motion fallback is confirmed.
- No visual regressions to Hero, Projects, Skills, footer, theme toggle, page switcher, or snowfall.

## Public Interfaces And Types

- No public route, URL, data schema, or content API changes.
- No new dependencies.
- Internal-only additions:
  - optional `useExperienceScrollProgress` helper inside `ExperienceSection.tsx` or a colocated component helper.
  - CSS classes for the scroll track, sticky viewport, card stage, and active/relative card states.

## Assumptions

- "Keep the visual the same" means preserve the current frosted card styling, typography, content, color tokens, and section heading treatment while changing only the layout/motion behavior.
- The cue-card effect applies only to the main portfolio Experience section, not the Foundry page.
- Mobile and desktop should share the same behavior; breakpoints may tune spacing, sizing, and transform distances but should not change the interaction model.
- Reduced-motion users should see the static stack.
