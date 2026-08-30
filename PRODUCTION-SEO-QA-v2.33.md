# Production & SEO QA — v2.33

## Added
- Site-wide metadata title template and description.
- Open Graph and Twitter social metadata.
- Dynamic project-page metadata using each real project title, description, and cover.
- Canonical URLs for main routes and project pages.
- `robots.txt` and `sitemap.xml` metadata routes.
- Web app manifest and GJ site icon.
- Generated 1200×630 social preview image.
- Person structured data (JSON-LD) with GitHub, LinkedIn, Kaggle, and ORCID.
- Custom 404 page.
- `.env.example` for the final production URL.
- `npm run typecheck` script.

## Required before public deployment
1. Set `NEXT_PUBLIC_SITE_URL` to the final production origin (for example `https://your-domain.com`).
2. Run `npm install`.
3. Run `npm run typecheck`.
4. Run `npm run build`.
5. Test `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`, `/opengraph-image`, and one project social preview after deployment.
6. Confirm all resume PDFs and certificate documents open from the deployed origin.
7. Keep Google Scholar hidden until a real profile is available.

## Notes
- The development fallback is `http://localhost:3000`; it is intentionally replaced automatically when `NEXT_PUBLIC_SITE_URL` is configured.
- No private StrokeLens technical details were added to metadata or structured data.
