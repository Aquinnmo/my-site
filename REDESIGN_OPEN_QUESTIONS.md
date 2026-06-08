# Redesign Open Questions

This log exists because the user wants product and design decisions asked explicitly instead of assumed. Do not silently resolve these questions when they affect visible content, copy, or visual direction.

## How To Use This Log

- Add new questions when a decision is needed.
- Mark a question answered only after the user gives a clear decision.
- Copy exact user wording into the answer note when possible.
- If a decision affects implementation, update `REDESIGN_SOURCE_OF_TRUTH.md` and `REDESIGN_PLAN.md`.

## Answered Decisions

- One-page version only for now.
- The page should condense the legacy site rather than recreate every route.
- Theme should closely follow a blizzard on a frozen lake.
- Light mode should use lots of white and light blue.
- Dark mode should feel similar but much more black, like a night blizzard.
- Snowfall should appear over the whole site.
- Profile picture should look trapped under the ice on a lake.
- Experience and projects should both be weighted heavily.
- Experience appears before projects in section order.
- Projects should still feel prominent.
- The site should be recruiter-friendly and easily scannable.
- Snowfall is CSS-based for the current implementation.
- The current root app is the new Vite React template; `legacy/` remains the previous version.
- Hero name should be `Adam Montgomery`.
- Hero title treatment should keep the rotating title concept from legacy.
- Contact links should use the legacy contact links.
- Experience should include Montgomery Software Foundry Inc.
- Experience should include DataAnnotation.
- Experience should include Software Engineering Intern at SPS Commerce.
- Projects should keep all legacy projects for now.
- The user will manually clean up project selection later.
- All project cards should have equal visual strength.
- A grid pattern is acceptable for projects if it fits.
- Projects should include brief descriptions.
- Projects should include GitHub repo links where available.
- Projects should include public links where available.
- Projects should include a visual for key tech-stack components.
- Skills should include key languages, tools, and frameworks selected with judgment.
- Skills should be grouped into practical categories.
- Foundry should be excluded except for the experience section.
- Final v1 section order is hero, experience, projects, languages/skills/tools, contact plus resume download.
- No nav bar in v1.
- The page should use scrolling only.
- Do not use background ice cracks, lines, shard motifs, etched lines, or repeating linear ice textures.
- Do not use pill-style section kicker tags above headings.
- Phase 8 currently uses draft hero copy, the legacy profile photo, the legacy resume PDF, resume/projects CTA order, centered layout, quick links with legacy icons, and simplified under-ice photo treatment as implementation assumptions pending review.

## Content Questions

### Hero

- What exact short summary should appear in the hero?
- Is the current draft hero summary acceptable, or should it be replaced?
- Should the hero mention University of Guelph?
- Should the hero mention co-op status?
- Should the hero mention Montgomery Software Foundry?
- Should the hero mention DataAnnotation?
- Which CTA should be primary: resume, email, projects, GitHub, LinkedIn, or another action?
- Which CTA should be secondary?
- Should the resume PDF from `legacy/public/adam_montgomery_resume.pdf` be reused as-is?
- Should the legacy profile photo from `legacy/public/pfp.jpeg` remain the hero portrait?

### Experience

- What dates should be shown for the SPS Commerce Software Engineering Intern role?
- What responsibilities, stack, team, or product area should be shown for SPS Commerce?
- What impact bullets are accurate for SPS Commerce?
- Should the visible SPS placeholder remain until details are provided, or should the entry be hidden temporarily?
- Should dates be displayed exactly as legacy source values or rewritten into month/year labels?
- Should future-tense legacy descriptions be rewritten into current/past tense where needed?

### Projects

- Are any project claims, dates, deployment targets, or metrics stale and needing correction before use?
- Should `Links pending` remain visible for projects without documented public links, or should those link rows be hidden?
- Should project tech stacks stay as text tags or use imported tech icons later?
- Should Chip Champ remain excluded because it was commented out in legacy?

### Skills

- Should AI tools like Claude, Gemini, Copilot, Cursor, and Codex be shown?
- Should Java and school projects still be used as evidence?

### Foundry

- Should the Foundry email `adammontcompany@gmail.com` be used publicly on the page?
- Should the hero quick-link email continue to use `adammontcompany@gmail.com`, or should it be replaced with a personal email?
- Should Foundry copy use `we` language, `I` language, or both?

### Personal Signals

- Should Movember appear in v1?
- Should hockey appear in v1?
- Should music appear in v1?
- Should other sports or fantasy sports appear in v1?
- If personal content appears, should it be a single sentence, compact row, or separate section?
- Should interactive content like the hockey guessing game be omitted from v1?

## Visual Questions

### Theme

- Should the frozen lake feel more realistic, illustrated, editorial, minimal, or cinematic?
- How dense should the snowfall be?
- Should snow appear in front of content, behind content, or both?
- Should the lake surface be mostly flat white ice or glassy blue ice?
- Should the profile image treatment be CSS-only or should an edited/generated asset be approved?

### Typography

- Should the typography feel literary/natural, crisp/editorial, rugged/outdoors, or quietly professional?
- Should headings use a serif, humanist sans, or another style?
- Should body text avoid technical-looking geometric fonts?

### Layout

- Should there be a tiny floating theme toggle?
- Should sections use full-width bands or constrained blocks?
- Should the page have a strong visual hero or start very content-first?
- Should the profile image sit beside the hero text, behind it, or below it on mobile?

### Dark Mode

- Should dark mode default to system preference only, or also persist manual selection?
- Should dark mode be nearly black or deep blue-black?
- Should the dark mode snowfall be brighter, larger, or denser than light mode?

## Technical Questions

- Should the implementation stay in plain React + CSS or introduce a component library?
- Should the new one-page app avoid React Router entirely for now?
- Should external fonts be loaded from Google Fonts, bundled locally, or avoided?
- Should Vercel Analytics and Speed Insights be reintroduced from the legacy site?
- Should the current root favicon be replaced with a legacy asset or new frozen-lake mark?
- Should legacy assets be copied into root `public/` or imported from `legacy/public/` during development?

## Validation Questions

- Which browser sizes should be treated as required review targets?
- Should visual verification use the in-app browser after each phase?
- Should lint and build be run after every implementation phase or only at phase boundaries?
- Should legacy tests remain untouched, or should stale legacy tests be updated once the new site replaces the old one?
