# Fulatronik by Camila — Version 9

A ready-to-publish static art website. All website files are in `dist`; no build step or package installation is required.

## Updated October 23, 2026

- Mind is Magnet added fourth in Graffiti Art Gallery, with workbook description and 36 × 36 size.
- Biometrix added fifth in My Style Gallery, with workbook description and 36 × 48 size.
- Both new paintings retain their copyright marks and use 640-pixel enlarged views, 360-pixel mobile copies, and 160-pixel thumbnails.
- Nothing is Random details corrected to 36 × 36; latest saved workbook descriptions retained for Nothing is Random and Rare Love.

## Version 9

- Added Nothing is Random and Rare Love at the beginning of Graffiti Art Gallery (seven artworks).
- Added Lost In Tropical Vibes third in My Style Gallery (ten artworks).
- Added workbook descriptions and matching thumbnails, enlarged views, and Details controls.
- The three new paintings use compressed viewing copies capped at 800 pixels, with mobile copies capped at 480 pixels. Reduced resolution limits print quality; it cannot prevent printing.
- Art Inquiries opens all five questions directly, skipping the empty Google Form introduction.
- Meet Camila now includes consistent Instagram INSIDE MY WORLD and YouTube MY VIDEOS links on the orange background.
- Updated gallery counts and search metadata.

## Retained website features

- All published raster images are viewing copies, capped at 1,200 pixels; private originals are excluded.
- Faster responsive images, artwork search metadata, social previews, and an image sitemap.
- A colorful Art Inquires popup with the embedded Google Form.
- Be Loved 2026 on the homepage and the neon orange retro welcome heading in My Style Gallery.


- Two scrollable 2D galleries with clickable artwork thumbnails and enlarged paintings.
- My Style Gallery: ten artworks, industrial cement background, and an embossed metallic Montserrat heading.
- Graffiti Art Gallery: seven artworks, brick background, and a green, blue, and orange graffiti heading.
- Artwork Details popups use the imported spreadsheet information and skip empty fields.
- Responsive artwork images, mailing-list and art-inquiry forms, and search metadata for https://fulatronik.art/.
- The former 3D gallery scripts and textures are excluded from this release.

Read GITHUB-UPLOAD-INSTRUCTIONS.md before uploading. The ZIP is a release snapshot, not a GitHub repository.

## Local preview

Install Node.js, open a terminal in this folder, and run `node preview.mjs`. Open http://localhost:4173/. Keep the terminal open while viewing the site.

The Excel workbook is not needed by visitors. Its current information is already included in the website. Future spreadsheet changes must be imported locally and the updated website files uploaded again.

## Version 8 certificate area

The hidden /certificate/ folder contains FULA-001.pdf, a Bull Shark proof-of-concept certificate. It remains marked Draft, with the unit, signature, and issue date unconfirmed. It has no navigation or sitemap link. The QR points to https://fulatronik.art/certificate/FULA-001.pdf and works after publication at that address.

Hidden means unlisted, not private: anyone with the address can access the PDF, and public GitHub repository files remain public. robots.txt discourages crawling of this folder; the local preview also sends a noindex header. GitHub Pages does not inherit the local preview server's response headers.

Version 8 includes lighter artwork previews, removal of an unused script, and improved opening of lazy-loaded gallery images.
