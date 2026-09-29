# GitHub upload and publishing — Version 2.0

## 1. Extract the package

Right-click fulatronik-art-v2.0-github.zip and choose Extract All. Upload the extracted contents, not the ZIP itself. The repository root should look like:

    .github/workflows/pages.yml
    .gitignore
    README.md
    GITHUB-UPLOAD-INSTRUCTIONS.md
    VERSION.txt
    preview.mjs
    dist/index.html
    dist/styles.css
    dist/app.js
    dist/assets/...

Do not nest everything inside an extra folder in the repository. Include the .github folder; it contains the publishing workflow.

## 2. Upload to GitHub (new repository)

1. Sign in to GitHub and create a new repository, for example fulatronik-art. For GitHub Free, choose a public repository if you want GitHub Pages hosting. Use main as the default branch.
2. Open the repository. Choose Add file > Upload files (or the uploading an existing file link in an empty repository).
3. Drag the extracted dist and .github folders, plus the root files listed above, into the upload area. Preserve their folder structure.
4. Enter a commit message such as Website version 2.0 and commit the files to main. If your repository requires a pull request, merge it into main.
5. Confirm that .github/workflows/pages.yml and dist/index.html are present at those exact paths. If your browser omits .github, use Add file > Create new file, enter .github/workflows/pages.yml as its name, and paste the contents of the provided workflow file.

This package is below GitHub's 100-file browser upload limit and each file is below 25 MiB. GitHub Desktop is also an option: clone your repository, copy the extracted contents into that checkout, commit, and push.

## Updating an existing version 1 repository

Use the SAME repository to keep your website address. Upload the extracted version 2 contents at its root, preserving the dist and .github folders. Replace same-named files and include all new files. Commit with the message Website version 2.0. Do not upload the ZIP itself or place version 2 inside a nested folder. GitHub Desktop is an alternative: clone the existing repository, copy these contents into the checkout, commit the changes, and push. Keep any existing CNAME/custom-domain configuration. If Pages already uses GitHub Actions, leave that setting unchanged; the commit to main triggers publishing.

## 3. Publish with GitHub Pages

1. Open repository Settings > Pages.
2. Under Build and deployment, set Source to GitHub Actions.
3. The package already includes a workflow; do not add another template.
4. Open Actions > Publish Fulatronik Art > Run workflow, select main, and run it. If the initial upload run failed before Pages was enabled, rerun it now.
5. Wait for the deployment to finish successfully. Settings > Pages will show the published URL, typically https://YOUR-USERNAME.github.io/fulatronik-art/.

Future commits to main automatically republish dist. The local localhost URL is only for your own computer. A custom domain can be configured later in Pages settings.

## 4. Check the published site

- Open Home, The Work, The Art Hall, Meet Camila, and Get in touch. Check all three collection pages and their return links.
- Enter each hall in one click. Walk with W/S, step sideways with A/D, turn with arrow keys or drag, try the touch buttons and exhibit shortcuts, and click paintings to enlarge them. Check all three Graffiti paintings and the five My Style exhibits.
- Check Camila's portrait and artist statement.
- Open all three contact cards: mailing list, inquiry, and events currently show placeholders.
- Check the layout on a phone and verify Instagram links.

## Troubleshooting

- 404: confirm Source is GitHub Actions, deployment succeeded, and the workflow uploads dist. Do not select branch-root publishing for this package.
- Missing pictures: preserve asset filenames and capitalization. Paths must remain relative to each HTML page.
- Workflow missing: verify .github/workflows/pages.yml was uploaded to the repository root.
- Different branch name: change branches: [main] in the workflow to match, or use main.
- Old content: wait for the latest successful deployment and refresh your browser.

## Official references

GitHub file upload instructions:
https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository

GitHub Pages publishing settings:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

