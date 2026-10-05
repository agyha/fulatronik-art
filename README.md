# Fulatronik by Camila — Version 5.0

Fifth website release. Static HTML, CSS, and JavaScript; no build or dependency installation is required for hosting. Start with GITHUB-UPLOAD-INSTRUCTIONS.md.

## What is included

- Short artwork-led homepage with four visual previews.
- Separate The Work, The Art Gallery, Meet Camila, and Let’s Connect pages.
- Three collections containing nine original paintings, plus the master painting.
- Two walk-through CSS 3D galleries with one-click entry, keyboard/touch movement, turning, exhibit shortcuts, and click-to-enlarge pictures.
- Graffiti Art Gallery: Peace and Love 2026, Free your mind its a vibe 2026, and Love Birds 2026.
- My Style Gallery: eight original paintings — Bull Shark - 2026, Echos of the Koi 2026, Shadows of the ocean 2026, DNA of the Ocean 2026, Abyssal Reef 2026, Heart in the chaos 2020, Kinetic current - 2026, and The blue enigma - 2026. Centered titles and smaller painting dimensions accompany each exhibit.
- Spacious My Style room with brushed silver metallic walls and partitions, a blue-sky skylight, white-and-silver patterned marble floor, and fitted black-and-white floater frames. Previous/Next artwork navigation, labeled movement controls, and neon exhibit lighting beneath the restored blue skylight.
- Camila’s portrait and statement on an orange background with blue and turquoise painted accents.
- Mailing-list Google Form in Let’s Connect and art-inquiry Google Form below the gallery entrances. Events remains an available-soon popup.
- Color Split 2026 on the Art Gallery page and The current between us 2026 in Collection 02.
- Larger, deeper Graffiti room with light-blue walls, paint splashes, white-and-silver patterned marble, wide silver floating frames, and compact navigation.
- Lightweight gallery views on small screens, lazy-loaded compressed previews, and optional 3D entry. Collection 01 uses responsive compressed images.
- Smaller mobile previews for all eleven gallery paintings, single-column mobile layouts, larger touch controls, and movement animation that stops when idle.
- GitHub Pages workflow publishing dist. All local links use relative paths.

## Local preview

With Node.js installed, run `node preview.mjs` from this folder and open http://localhost:4173. Keep the terminal open. Ctrl+C stops the server. If the port is occupied, use the existing preview or stop that server first.

## Editing guide

- dist/index.html: home page previews and hero.
- dist/work.html: master painting and collection links.
- dist/art-gallery.html: links to both 3D rooms.
- dist/meet-camila.html: portrait and artist statement.
- dist/connect.html: mailing-list form and events placeholder.
- dist/graffiti-artwild.html, ocean-currents.html, the-unseen-vybra.html: collection paintings and titles.
- dist/style-hall.js: artwork records and navigation shared by BOTH galleries; the graffiti branch contains three paintings, the other branch contains the eight My Style exhibits.
- dist/style-gallery.html and graffiti-gallery.html: room interfaces.
- dist/style-hall.css and graffiti-hall.css: shared and Graffiti room appearance.
- dist/contemporary-gallery.css: My Style room finishes, frames, skylight, and controls.
- dist/styles.css: main website appearance; later rules override earlier ones.
- dist/assets/: artwork, portrait, and background assets.
- dist/app.js: menus, contact actions, and redirects for old home-section bookmarks.
- dist/site-config.js: mailingListUrl and inquiryUrl. Keep mailingListUrl blank to use the embedded form in connect.html; a nonempty URL opens a separate destination. The gallery inquiry form is configured directly in art-gallery.html.

## Current limitations

Mailing-list and inquiry submissions are handled by the embedded Google Forms and their owner’s settings. Form loading was verified; end-to-end submission and notifications have not been tested. Events remains a placeholder. Mobile improvements were checked locally; compatibility with every mobile app is not confirmed. There is no checkout or backend. Optional Google Fonts fall back to system fonts when unavailable.

Artwork and portrait rights remain with their owner. No redistribution license is granted. Preparing this package does not publish the website. Version 1.0, 2.0, 3.0, and 4.0 archives remain separate historical snapshots.

