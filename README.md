# Woordentrainer

Dutch vocabulary trainer, installable as an app (PWA). Works offline after the first load.

## Publish on GitHub Pages
1. Create a new repository on github.com (public, e.g. `woordentrainer`).
2. Upload ALL files from this folder to the repository root (Add file > Upload files).
3. Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)` > Save.
4. After about a minute the site is live at `https://<username>.github.io/woordentrainer/`.

## Install on your phone
Open the URL in Chrome > menu (three dots) > "Install app" (or "Add to Home screen").

## Updating later
Replace `index.html` in the repository, and change `VERSION` in `sw.js` (e.g. `woorden-v2`) so phones pick up the new version.

## Progress and backups
Progress and "Mijn woorden" are stored on the device (per browser and per URL). Use Mijn woorden > Exporteer / Importeer to move them between devices.
