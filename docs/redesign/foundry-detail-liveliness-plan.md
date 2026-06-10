# Foundry Detail And Liveliness Plan

## Summary

Upgrade `/foundry` from a sparse service page into a more specific, believable business page while keeping the approved ember variant and portfolio-matching visual system.

The page should feel warmer, more tactile, and more grounded in Adam's real Foundry work, especially the custom SaaS and GTA accessible transit modernization proof already present in the portfolio content.

## Goals

- Make the page feel less barren and less generic.
- Add concrete detail without inventing unsupported client claims, metrics, testimonials, or company names.
- Keep the Foundry page visually tied to the portfolio page.
- Preserve the approved fire-colour direction: black/orange-red in dark mode and white/orange-red in light mode.
- Keep the approved switcher and route transition behavior intact unless a visual conflict appears.

## Phase 1: Content Model Pass

Status: implemented.

- Refactor `src/components/FoundryPage.tsx` data into richer arrays for:
  - service offerings.
  - proof or credibility items.
  - process steps.
  - case-study details.
  - contact actions.
- Use only currently documented facts unless new user-approved details are provided.
- Keep the primary contact target as `mailto:adammontcompany@gmail.com`.
- Preserve the existing page sections as the base, but make each section more specific and useful.
- Current implementation adds structured hero content, contact actions, proof items, richer service outcomes/examples, a documented case-study object, process artifacts, and founder content.

## Phase 2: Hero And Proof Strip

Status: implemented.

- Rebuild the Foundry hero so the first viewport has more substance.
- Keep the H1 exactly: `Montgomery Software Foundry Inc.`
- Replace the current one-line summary with sharper positioning around practical custom software for small business operations.
- Add two hero actions:
  - primary: `Get in touch`.
  - secondary: anchor link to the page's concrete work or process section.
- Add a compact proof strip below the hero copy with short items such as:
  - `Custom SaaS`.
  - `Legacy workflow modernization`.
  - `Client requirements to production software`.
- Style the proof strip as small ember-tinted chips or compact panels, not as a large nested card.
- Current implementation adds a hero eyebrow, stronger summary/detail copy, a primary email CTA, a secondary in-page `See current work` CTA, and a polished three-item proof strip.

## Phase 3: Concrete Work Section

Status: implemented.

- Add a case-study style section based on approved existing facts:
  - custom SaaS for a wheelchair accessible transit company in the GTA.
  - replacement of a paper and Excel-based workflow.
  - automated online workflow intended to prevent data loss.
  - customer specifications documented and built into the software.
- Present the section as `Problem`, `Approach`, and `Outcome`.
- Avoid fake metrics, named client details, screenshots, or testimonials unless supplied later.
- Make this the most concrete content on the page so the page feels less AI-generated.
- Current implementation adds a richer case-study header, summary, context chips, and numbered `Problem`, `Approach`, and `Outcome` flow items using only the approved transit modernization facts.

## Phase 4: Services And Outcomes Upgrade

Status: implemented.

- Expand the `What we build` service entries so each item has:
  - a clear service title.
  - a specific business problem it addresses.
  - a practical outcome.
- Keep the current service categories unless there is a strong reason to rename them:
  - legacy system modernization.
  - custom-built applications.
  - operational dashboards.
- Add optional small service examples such as portals, internal tools, data entry workflows, role-based systems, dashboards, and deployment-ready web apps.
- Keep the copy concise and scan-friendly.
- Current implementation adds a section summary and renders each service as a premium editorial row with labeled `Best for` and `Outcome` details.

## Phase 5: Process Timeline

Status: implemented.

- Convert the current repeated process cards into a livelier staged roadmap.
- Use a left-to-right timeline on desktop instead of card surfaces.
- Keep each roadmap item concise with only:
  - number.
  - title.
  - quick summary.
- Keep the process readable on mobile by stacking steps vertically.
- Respect `prefers-reduced-motion`; any timeline animation should become static when reduced motion is requested.
- Current implementation expands the process into five stages: `Discover`, `Shape`, `Build`, `Launch`, and `Support`, with a desktop horizontal roadmap and a mobile vertical roadmap. Process items intentionally do not use cards and contain only number, title, and quick summary.

## Phase 6: Founder And Final CTA

Status: implemented.

- Replace the plain founder paragraph with a stronger `Built by Adam` profile section.
- Connect Foundry to Adam's existing portfolio strengths:
  - full-stack development.
  - product design.
  - secure delivery.
  - client specification work.
  - practical business software.
- End the page with a warmer final CTA that invites a conversation without sounding like a generic SaaS sales page.
- Keep the final CTA target as `mailto:adammontcompany@gmail.com`.
- Current implementation adds a founder/lead-developer eyebrow, places Adam's profile photo to the left of concise founder copy, avoids a card wrapper, and keeps `Start a conversation` pointed at `mailto:adammontcompany@gmail.com`.

## Phase 7: Visual Polish

- Add more layout variation so the page is not only repeated three-card grids:
  - hero proof strip.
  - open case-study section.
  - editorial service list.
  - open differentiator row with light separators.
  - process timeline.
  - founder profile block.
- Add ember-specific micro-detail:
  - warm section glows.
  - brighter card edge highlights.
  - subtle hot-corner accents.
  - small inline icons for services and process steps.
- Keep the page within the approved visual system:
  - no separate forge illustration.
  - no generic SaaS landing-page treatment.
  - no nested cards.
  - no full nav bar.
  - no divider bars.
- Keep sparks rising and noticeable while preserving text readability in both light and dark modes.

## Phase 8: Docs And Validation

- Update `docs/redesign/foundry-page-plan.md` to reference this enhancement plan.
- Update `docs/redesign/source-of-truth.md` after implementation to record the richer Foundry page structure.
- Update `docs/redesign/visual-system.md` if new Foundry-specific surfaces, chips, timeline elements, or icon treatments become part of the durable visual system.
- Run validation after implementation:

```bash
npm run lint
npm run build
```

- Manually verify:
  - `/foundry` feels more detailed and less generic.
  - dark mode remains black and fire-coloured.
  - light mode remains white and fire-coloured.
  - text remains readable over sparks.
  - the top switcher does not overlap page content.
  - mobile layout does not feel cramped.
  - the route transition and switcher timing remain unchanged.

## Assumptions

- The page should become more detailed, but still concise and professional.
- The page should use real existing facts, not invented metrics, testimonials, or client names.
- The approved visual direction remains crackling embers translated from the portfolio's blizzard system.
- The top switcher behavior and route transition timing should remain unchanged unless a visual conflict appears.
