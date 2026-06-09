# Adam Montgomery Portfolio

Single-page React/Vite portfolio redesigned for recruiter scanning with a frozen-lake blizzard visual system.

## Local Development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run build
```

## Vercel Deployment

This root app is prepared for Vercel using the deploy-relevant legacy configuration:

- `vercel.json` rewrites all routes to `/` for SPA fallback behavior.
- `@vercel/analytics` and `@vercel/speed-insights` are installed and rendered in `src/App.tsx`.
- `.vercel/` is ignored and should be linked locally with Vercel CLI instead of committed.

Recommended Vercel project settings:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

Optional CLI flow:

```bash
vercel link
vercel build
vercel deploy --prebuilt
```

For production:

```bash
vercel build --prod
vercel deploy --prebuilt --prod
```
