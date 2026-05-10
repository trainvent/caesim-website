# Caesim Website

This project is exported as a static Next.js site and deployed with GitHub Pages.

## Local development

1. Install dependencies with `npm install`
2. Start the dev server with `npm run dev`

## GitHub Pages deployment

This repository deploys from the `master` branch using the workflow at `.github/workflows/deploy-pages.yml`.

The repo is configured for the custom domain:

```text
https://caesim.com
```

The deployment workflow builds with an empty `PAGES_BASE_PATH`, so exported routes and asset URLs stay rooted at `/`.

`public/CNAME` is included so the exported site keeps the custom domain configuration when deployed to GitHub Pages.

## Troubleshooting

If a Pages deployment looks like bare HTML with missing styles, check the deployed path configuration first. A custom domain must build with root asset URLs like `/_next/...`, not `/caesim-website/_next/...`.

## Sources
Program Readme: https://github.com/trainvent/caesim/blob/main/README.md
