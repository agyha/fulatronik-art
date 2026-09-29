# Fulatronik by Camila — Version 1.0

First website release, prepared September 29, 2026. Static HTML, CSS and JavaScript; no installation or build step required for hosting.

Start with GITHUB-UPLOAD-INSTRUCTIONS.md for uploading and publishing.

## Included

- Artwork-led homepage, three collection pages, Camila portrait and artist statement.
- Graffiti Art Hall: Peace and Love 2026.
- My Style Hall: Bull Shark - 2026 plus four temporary picture placeholders.
- CSS 3D wall navigation, gallery alternative, and artwork detail dialogs.
- Mailing-list, art-inquiry, and Events and Exhibitions placeholder dialogs.
- GitHub Pages workflow publishing the dist folder.

## Preview locally

With Node.js installed, open a terminal in this folder and run:

    node preview.mjs

Visit http://localhost:4173. Keep the terminal running; Ctrl+C stops it. If that port is already occupied, use the existing preview or stop its process first. Alternatively, open dist/index.html directly in your browser.

## Editing guide

- dist/index.html: homepage, artist text, contact cards and placeholder dialogs.
- dist/graffiti-artwild.html: Infinito, Let Life Flow, My Destiny.
- dist/ocean-currents.html: DNA of the Ocean, Ocean Pulse, When We Meet.
- dist/the-unseen-vybra.html: Circles, Where Dreams fly, WOW.
- dist/app.js: openHall configures the hall paintings and remaining placeholders.
- dist/artworks.js: reference artwork inventory used by the remaining hall placeholders.
- dist/styles.css: appearance and responsive layouts; later rules override earlier rules.
- dist/assets/: artwork and portrait files. Keep matching image paths when renaming files.
- dist/site-config.js: supply mailingListUrl (https signup page) and inquiryUrl (https or mailto) when ready. Empty values show placeholders.

The events card currently opens an Available soon dialog. No forms collect or send data. There is no checkout, backend, or mailing-list service. The 3D hall uses selectable CSS wall views, not free-roaming VR. Google Fonts is optional and system fonts provide a fallback.

Artwork and portrait rights remain with their owner. This package grants no redistribution license. No GitHub repository or public website has been created by preparing this archive.
