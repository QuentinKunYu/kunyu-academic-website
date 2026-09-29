# Kun-Yu Lee — Academic Website

Personal academic website built with Next.js (App Router), TypeScript, and Tailwind CSS v4.
Fully static (`output: "export"`); deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000 — shows "To verify" notes and draft entries
npm run build      # static export to out/ — placeholders and drafts are stripped
npm start          # serve out/ locally at http://localhost:3218
npm run todo       # list every outstanding placeholder
```

## Updating content

All content lives in `data/` — components never need editing for routine updates.

| File | Contents |
| --- | --- |
| `data/site.ts` | Name, affiliation, intro, email, CV path, profile links (Scholar, ORCID, GitHub, LinkedIn) |
| `data/publications.ts` | Publications (title, authors, venue, status, links, BibTeX) |
| `data/projects.ts` | Research projects (each gets a page at `/research/<slug>`) |
| `data/news.ts` | News items (newest first) |
| `data/education.ts` | Education (shown under the introduction) |

**CV:** `public/cv/Kun-Yu_Lee_CV.pdf` — overwrite this file to update the CV.
**Headshot:** `public/images/`; set `site.headshot` (src, width, height) in `data/site.ts`. Use a new file name when replacing it.
**Figures:** `public/figures/`; referenced from `data/publications.ts` (thumbnail) and `data/projects.ts` (figures).

### Placeholder conventions

Nothing unverified is published:

- `verify: [...]` on any entry: notes rendered in development only.
- `draft: true`: the entire entry is hidden in production.
- Profile links set to `null` (Scholar, ORCID): hidden in production.
- Optional fields left `undefined` (e.g., `contribution`, `codeUrl`) are not rendered.

To preview a production build *with* placeholders visible: `NEXT_PUBLIC_SHOW_PLACEHOLDERS=1 npm run build`.

### Adding a publication

```ts
{
  id: "lee2027example",
  title: "…",
  authors: ["…", "Kun-Yu Lee", "…"],   // "Kun-Yu Lee" is bolded automatically
  year: 2027,
  venue: "arXiv preprint",             // or the real venue once accepted
  status: "preprint",                  // "preprint" | "under review" | "accepted" | "published"
  arxivUrl: "…", paperUrl: "…", codeUrl: "…",
  bibtex: `@misc{…}`,
  relatedProjects: ["project-slug"],
}
```

Year groups ("2026", "2025", "Earlier") are generated automatically; empty groups are not shown.

## SEO

- Title, description, keywords, canonical URL, OpenGraph and Twitter metadata: `app/layout.tsx`
- Per-project metadata: `app/research/[slug]/page.tsx`
- schema.org `Person` + `ScholarlyArticle` JSON-LD: `lib/jsonld.ts`
- `sitemap.xml` / `robots.txt`: `app/sitemap.ts`, `app/robots.ts`
- Favicon / Apple icon / social preview: `app/icon.svg`, `app/apple-icon.tsx`, `app/opengraph-image.tsx`

The canonical domain is set in `data/site.ts` (`site.url`).

## Deploying (GitHub Pages)

`.github/workflows/deploy.yml` builds the static export and publishes `out/` to GitHub Pages on every push to `main`.

One-time setup in the GitHub repository:
1. *Settings → Pages → Build and deployment → Source*: **GitHub Actions**.
2. *Settings → Pages → Custom domain*: `quentinkunyu.com` (DNS already points to GitHub Pages).
3. Tick *Enforce HTTPS* once the certificate is issued.

After launch, submit `https://quentinkunyu.com/sitemap.xml` in Google Search Console, and add the site URL to your Google Scholar and ORCID profiles.
