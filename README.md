# ProTasker V1 (v1-files)

This folder is a self-contained Vite + React app representing the V1 experience. Push this folder to Netlify (or connect the repository and set the publish directory to `v1-files`) to deploy the V1 app.

Commands:

```powershell
npm install
npm run build
npx netlify deploy --dir=dist --prod
```
This folder contains the files needed to run the V1-only app.

Keep these in sync with the main project if you update the source.

Files included:
- index.html
- index.tsx
- App_v1.tsx (v1-only adjusted from App.tsx)
- sites/v1.tsx
- site-v1/ (static pages)
- components/VersionViewer.tsx
- components/Changelog.tsx
- types.ts

To run (from repo root):

```bash
npm install
npm run dev
```

Open http://localhost:5173 to view.
