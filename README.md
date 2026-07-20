# Vishalan Karunanithi — Portfolio

A warm, minimal personal portfolio presenting Vishalan Karunanithi's verified experience, interests and selected work. The site is static-first and deliberately omits content that has not been confirmed.

## Technology stack

- Next.js App Router
- React Server Components by default
- TypeScript with strict checking
- Tailwind CSS
- npm and a committed lockfile

No database, CMS, authentication, analytics, paid API or environment variable is required.

## Local setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Project structure

```text
app/                      Page, metadata, robots and sitemap
components/               Reusable portfolio sections and links
src/content/portfolio.ts  Typed, verified portfolio content
public/                   Static public assets
CONTENT_NEEDED.md         Missing information that is not rendered
```

## Updating portfolio content

Keep personal claims in `src/content/portfolio.ts`. The exported TypeScript interfaces describe each supported content type. Do not add facts directly to React components and do not publish information that has not been verified.

Optional profile values such as `email` and `canonicalUrl` use empty strings until they are known. Components conditionally hide links when those values are empty. The verified LinkedIn and GitHub URLs are already configured.

### Adding a project

Add a `Project` object to `projects`. Include only verified facts and real URLs. Leave `technologies` empty until the technology list is confirmed. Mark `featured: true` only when the project is ready for the public page.

### Adding a LinkedIn achievement

Add an `Achievement` object to `achievements`. The public section displays the entry only when:

- `verified` is `true`
- `title` is not empty
- `url` begins with `http://` or `https://`

Keep `verified: false` while any field is unconfirmed. If no entries qualify, the navigation item and entire Achievements section stay hidden.

### Adding a profile image

Place an optimised image in `public/`, record its path and honest alt text in the profile content, then replace the CSS monogram in `HeroSection`. Do not add a stock or generated portrait as a substitute for a real photograph.

## Deployment with Vercel

This project uses native Next.js defaults and needs no custom `vercel.json`.

1. Push the repository to GitHub.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Confirm the personal Hobby scope and leave Framework Preset as **Next.js**.
4. Deploy without adding environment variables.
5. The Vercel-generated production domain is used automatically for canonical, sitemap and sharing metadata. You may later set `profile.canonicalUrl` when you add a custom domain.

Alternatively, with the Vercel CLI:

```bash
vercel link
vercel deploy --prod
```

## Information still needed

See [CONTENT_NEEDED.md](./CONTENT_NEEDED.md) for employment dates, LinkedIn information, achievement verification, additional projects, optional contact details and images. None of those items are described as complete on the public site.
