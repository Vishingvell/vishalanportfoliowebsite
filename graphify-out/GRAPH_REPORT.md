# Graph Report - person website  (2026-07-20)

## Corpus Check
- 18 files · ~42,357 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 117 nodes · 138 edges · 14 communities (9 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_compilerOptions|compilerOptions]]
- [[_COMMUNITY_Vishalan Karunanithi — Portfolio|Vishalan Karunanithi — Portfolio]]
- [[_COMMUNITY_package.json|package.json]]
- [[_COMMUNITY_PortfolioSections.tsx|PortfolioSections.tsx]]
- [[_COMMUNITY_layout.tsx|layout.tsx]]
- [[_COMMUNITY_portfolio.ts|portfolio.ts]]
- [[_COMMUNITY_devDependencies|devDependencies]]
- [[_COMMUNITY_SiteHeader.tsx|SiteHeader.tsx]]
- [[_COMMUNITY_ExternalLink.tsx|ExternalLink.tsx]]
- [[_COMMUNITY_next.config.ts|next.config.ts]]
- [[_COMMUNITY_AGENTS|AGENTS.md]]
- [[_COMMUNITY_eslint.config.mjs|eslint.config.mjs]]
- [[_COMMUNITY_postcss.config.mjs|postcss.config.mjs]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `Vishalan Karunanithi — Portfolio` - 8 edges
3. `scripts` - 6 edges
4. `Profile` - 6 edges
5. `getSiteUrl()` - 6 edges
6. `Portfolio content still needed` - 5 edges
7. `Updating portfolio content` - 4 edges
8. `verifiedAchievements` - 3 edges
9. `robots()` - 2 edges
10. `sitemap()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `robots()` --calls--> `getSiteUrl()`  [EXTRACTED]
  app/robots.ts → src/lib/site-url.ts
- `sitemap()` --calls--> `getSiteUrl()`  [EXTRACTED]
  app/sitemap.ts → src/lib/site-url.ts

## Import Cycles
- None detected.

## Communities (14 total, 5 thin omitted)

### Community 0 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 1 - "Vishalan Karunanithi — Portfolio"
Cohesion: 0.11
Nodes (16): Experience, LinkedIn achievements, Portfolio content still needed, Profile and contact, Projects, Adding a LinkedIn achievement, Adding a profile image, Adding a project (+8 more)

### Community 2 - "package.json"
Cohesion: 0.12
Nodes (15): dependencies, next, react, react-dom, engines, node, name, private (+7 more)

### Community 3 - "PortfolioSections.tsx"
Cohesion: 0.21
Nodes (10): AboutSection(), AchievementsSection(), ContactSection(), ExperienceSection(), HeroSection(), ProjectsSection(), SiteFooter(), SkillsSection() (+2 more)

### Community 4 - "layout.tsx"
Cohesion: 0.31
Nodes (5): metadata, siteUrl, robots(), sitemap(), getSiteUrl()

### Community 5 - "portfolio.ts"
Cohesion: 0.20
Nodes (9): Achievement, achievements, Experience, experiences, interests, Project, projects, SkillGroup (+1 more)

### Community 6 - "devDependencies"
Cohesion: 0.22
Nodes (9): devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node, @types/react, @types/react-dom (+1 more)

### Community 7 - "SiteHeader.tsx"
Cohesion: 0.33
Nodes (4): navigation, SiteHeader(), Profile, verifiedAchievements

## Knowledge Gaps
- **65 isolated node(s):** `siteUrl`, `metadata`, `ExternalLinkProps`, `navigation`, `eslintConfig` (+60 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **What connects `siteUrl`, `metadata`, `ExternalLinkProps` to the rest of the system?**
  _65 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Vishalan Karunanithi — Portfolio` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._