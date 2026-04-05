# Caesim Website

This project is exported as a static Next.js site and deployed with GitHub Pages.

## Local development

1. Install dependencies with `npm install`
2. Start the dev server with `npm run dev`

## GitHub Pages deployment

This repository deploys from the `master` branch using the workflow at `.github/workflows/deploy-pages.yml`.

The repo is configured for project Pages mode, so the deployment workflow builds with:

```bash
PAGES_BASE_PATH=/caesim-website npm run build
```

That keeps exported routes and asset URLs aligned with the GitHub Pages subpath:

```text
https://trainvent.github.io/caesim-website/
```

For root-domain or custom-domain hosting, leave `PAGES_BASE_PATH` empty.

## Troubleshooting

If a Pages deployment looks like bare HTML with missing styles, check the deployed path configuration first. A mismatch between the hosting path and `PAGES_BASE_PATH` will break the generated CSS and JavaScript URLs.
