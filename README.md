# Fulatronik by Camila — Version 6

A ready-to-publish static art website. All website files are in `dist`; no build step or package installation is required.

## Version 6

- Two scrollable 2D galleries with clickable artwork thumbnails and enlarged paintings.
- My Style Gallery: eight artworks, industrial cement background, and an embossed metallic Montserrat heading.
- Graffiti Art Gallery: four artworks, brick background, and a green, blue, and orange graffiti heading.
- Artwork Details popups use the imported spreadsheet information and skip empty fields.
- Responsive artwork images, mailing-list and art-inquiry forms, and search metadata for https://fulatronik.art/.
- The former 3D gallery scripts and textures are excluded from this release.

Read GITHUB-UPLOAD-INSTRUCTIONS.md before uploading. The ZIP is a release snapshot, not a GitHub repository.

## Local preview

Install Node.js, open a terminal in this folder, and run `node preview.mjs`. Open http://localhost:4173/. Keep the terminal open while viewing the site.

The Excel workbook is not needed by visitors. Its current information is already included in the website. Future spreadsheet changes must be imported locally and the updated website files uploaded again.
