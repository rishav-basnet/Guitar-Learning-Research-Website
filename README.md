# Guitar Skill Acquisition Study — site

Presentation site for the [Guitar Learning Research](https://github.com/rishav-basnet/Guitar-Learning-Research) project (React + Vite).

**Live site:** [rishav-guitar-research.vercel.app](https://rishav-guitar-research.vercel.app/)

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

Other scripts:

- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built `dist/` locally

## Deployment (Vercel)

The repo is connected to Vercel via GitHub. **Pushes to `main` trigger a new production deploy** using:

- **Build command:** `npm run build`
- **Output directory:** `dist`

No backend or env vars are required for this static app. Vercel’s Vite preset picks the above up automatically; the repo keeps `build.outDir` set to `dist` in `vite.config.js` so local and CI builds stay aligned.
