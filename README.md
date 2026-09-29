# Fulatronik by Camila — Version 2.0

Second website release. Static HTML, CSS, and JavaScript; no build or dependency installation is required for hosting. Start with GITHUB-UPLOAD-INSTRUCTIONS.md.

## What is included

- Short artwork-led homepage with four visual previews.
- Separate The Work, The Art Hall, Meet Camila, and Let’s Connect pages.
- Three collections containing nine original paintings, plus the master painting.
- Two walk-through CSS 3D galleries with one-click entry, keyboard/touch movement, turning, exhibit shortcuts, and click-to-enlarge pictures.
- Graffiti Art Hall: Peace and Love 2026, Live in the moment 2026, and Love Birds 2026.
- My Style Hall: Bull Shark - 2026 and four labeled temporary reference pictures.
- Camila’s portrait and statement on an orange background with blue and turquoise painted accents.
- Mailing list, art inquiry, and events placeholder dialogs.
- GitHub Pages workflow publishing dist. All local links use relative paths.

## Local preview

With Node.js installed, run `node preview.mjs` from this folder and open http://localhost:4173. Keep the terminal open. Ctrl+C stops the server. If the port is occupied, use the existing preview or stop that server first.

## Editing guide

- dist/index.html: home page previews and hero.
- dist/work.html: master painting and collection links.
- dist/art-hall.html: links to both 3D rooms.
- dist/meet-camila.html: portrait and artist statement.
- dist/connect.html: contact cards and placeholder dialogs.
- dist/graffiti-artwild.html, ocean-currents.html, the-unseen-vybra.html: collection paintings and titles.
- dist/style-hall.js: artwork records and navigation shared by BOTH halls; the graffiti branch contains three paintings, the other branch contains the five My Style exhibits.
- dist/style-hall.html and graffiti-hall.html: room interfaces.
- dist/style-hall.css and graffiti-hall.css: room appearance.
- dist/styles.css: main website appearance; later rules override earlier ones.
- dist/assets/: artwork, portrait, and background assets.
- dist/app.js: menus, contact actions, and redirects for old home-section bookmarks.
- dist/site-config.js: mailingListUrl and inquiryUrl. Empty values show placeholders. Use an HTTPS signup URL or an HTTPS/mailto inquiry destination when ready.

## Current limitations

My Style Hall still has four placeholders. Mailing-list, inquiry, and event services are not connected; no information is collected by the placeholder dialogs. There is no checkout or backend. Optional Google Fonts fall back to system fonts when unavailable.

Artwork and portrait rights remain with their owner. No redistribution license is granted. Preparing this package does not publish the website. Version 1.0 archives remain separate historical snapshots.
