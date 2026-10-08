# Version 6 — GitHub upload instructions

## Update the existing website (recommended)

1. Extract fulatronik-art-v6.0-github.zip to a new folder.
2. In GitHub Desktop, open or clone your existing website repository and select its main branch. Save any uncommitted work first.
3. Back up the existing repository's dist folder outside the repository. Preserve any existing CNAME file and your custom-domain settings.
4. Replace the repository's dist folder with the extracted dist folder. Copy the extracted .github folder and the accompanying files into the repository root. Restore the existing CNAME file if you had one. Do not copy the enclosing extraction folder, the ZIP itself, or previous release ZIPs.
5. Review the changes in GitHub Desktop, including removed files. Commit with a message such as “Release Fulatronik version 6” and push to main.
6. On GitHub, open Settings → Pages. Under Build and deployment, select GitHub Actions as the source.
7. Open Actions and check that “Publish Fulatronik Art” finishes successfully. It publishes the dist folder automatically after a push to main.
8. Preserve or configure the custom domain fulatronik.art in Pages settings. This package does not change DNS settings. Its search addresses already use https://fulatronik.art/.
9. Open the live website after deployment, refresh it, and check both galleries on a phone and computer. Check thumbnails, enlarged paintings, Details popups, and the two Google Forms without submitting test responses unintentionally.

Replacing dist rather than merely merging folders removes the old 3D files. Archived 3D components and local development screenshots are intentionally excluded.

## Upload through the GitHub website

Extract the ZIP first, then use Add file → Upload files to upload its contents while retaining the folder structure. Ensure .github/workflows/pages.yml is included. Browser uploads do not remove old files: remove obsolete files separately or use the replacement method above. If the upload is rejected because of file or batch limits, use GitHub Desktop.

## New repository

Create a repository, clone it with GitHub Desktop, copy the extracted contents into its root, commit, and push to main. Enable Pages with GitHub Actions as above. If using a different public address, the canonical URLs, sharing URLs, robots.txt, and sitemap.xml must be updated before publishing.

## Package layout

- dist/ — published website and artwork assets
- .github/workflows/pages.yml — Pages deployment workflow
- preview.mjs — optional local preview
- README.md, VERSION.txt, SEARCH-AND-MARKETING.md — release information
- GITHUB-UPLOAD-INSTRUCTIONS.md — this guide

No spreadsheet, credentials, node_modules, screenshots, or previous release ZIPs are included. External Google Forms and Google Fonts require an internet connection; fonts have local fallbacks.

GitHub workflow reference: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
