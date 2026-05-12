# visvamrajesh.com

[![deployed to site](https://github.com/BarrelDev/personal-website-26/actions/workflows/deploy.yml/badge.svg)](https://github.com/BarrelDev/personal-website-26/actions/workflows/deploy.yml)

Personal portfolio site built with Astro, Tailwind CSS, and JetBrains Mono. Dark theme with Claude-console-inspired warm grays, scroll animations, page transitions, and Ctrl+K search.

## Quick Start

```sh
npm install
npm run dev        # localhost:4321
npm run build      # production build to ./dist/
npm run preview    # preview production build
```

## Project Structure

```
src/
├── consts.ts                    # All site-wide constants (see below)
├── content.config.ts            # Zod schemas for content collections
│
├── data/                        # JSON data files
│   ├── profile.json             # Name, bio, education, social links, typed roles
│   ├── skills.json              # Programming languages, technologies, categories
│   ├── about.json               # Quick facts, journey highlights
│   └── research-interests.json  # Research interest cards
│
├── content/                     # Markdown content collections
│   ├── projects/                # One .md per project (10 files)
│   ├── publications/            # One .md per paper
│   ├── experience/              # One .md per role
│   ├── blog/                    # Blog posts (.md/.mdx)
│   └── pages/
│       └── about.md             # About page bio paragraphs
│
├── components/
│   ├── BaseHead.astro           # <head> meta, fonts, OG tags
│   ├── Navigation.astro         # Sticky nav, dark mode toggle, search trigger
│   ├── Footer.astro             # Social links footer
│   ├── Hero.astro               # Homepage hero with typed.js animation
│   ├── ProjectCard.astro        # Project card with hover effects
│   ├── PublicationCard.astro    # Publication card with collapsible abstract
│   ├── ExperienceTimeline.astro # Vertical timeline for CV
│   ├── SearchModal.astro        # Ctrl+K search overlay
│   └── FormattedDate.astro      # Date formatting helper
│
├── layouts/
│   ├── BaseLayout.astro         # Master layout (nav, footer, transitions, scroll reveal)
│   └── BlogPost.astro           # Blog post layout
│
├── pages/
│   ├── index.astro              # Homepage
│   ├── projects.astro           # Filterable project grid
│   ├── research.astro           # Publications + research interests
│   ├── cv.astro                 # CV with sidebar nav + scroll spy
│   ├── about.astro              # Bio, stats, journey timeline
│   └── blog/
│       ├── index.astro          # Blog listing
│       └── [...slug].astro      # Individual blog post
│
├── styles/
│   └── global.css               # Tailwind directives, font, scrollbar, glass utilities
│
└── assets/
    ├── profile/                 # Profile photos
    ├── projects/                # Project screenshots
    └── logos/                   # VR logo
```

## How Content is Organized

All visible text on the site comes from one of these sources. Nothing is hardcoded in the templates.

### 1. Constants (`src/consts.ts`)

Site-wide strings that appear across multiple pages:

| Export | What it controls |
|--------|-----------------|
| `SITE_TITLE` | Browser tab title on homepage |
| `SITE_DESCRIPTION` | Homepage meta description |
| `SITE_AUTHOR` | Footer copyright name |
| `SOCIAL_LINKS` | GitHub, LinkedIn, email URLs (used in hero, footer, nav) |
| `NAV_LINKS` | Navigation bar items (label + href) |
| `PAGES` | Title and description for each subpage (projects, research, cv, about, blog) |
| `HOME_SECTIONS` | Headings, subheadings, and CTA text for homepage sections |
| `HERO` | Hero greeting ("Hi, I'm"), intro ("I'm a"), and button labels |

### 2. JSON Data (`src/data/`)

Structured data rendered as lists, cards, and grids:

| File | What it controls |
|------|-----------------|
| `profile.json` | Name, title, short bio, email, location, education array, social links, and `roles` array (the words that cycle in the hero typed animation) |
| `skills.json` | Programming languages, technologies, human languages, and category groupings (frontend/backend/robotics/ml) shown on the CV page |
| `about.json` | Quick facts stats (value + label), journey highlights (date + description), and the "Journey Highlights" heading |
| `research-interests.json` | Array of {title, description} rendered as cards on the research page |

### 3. Markdown Content (`src/content/`)

Long-form content managed as Astro content collections with Zod-validated frontmatter:

#### Projects (`src/content/projects/*.md`)
```yaml
---
title: "Project Name"
description: "One-line summary"
category: "robotics"       # robotics | ml | web | game | research | other
tags: ["Tag1", "Tag2"]
date: 2024-06-15
featured: true              # shows on homepage
github: "https://github.com/..."
demo: "https://..."         # optional
image: "../../assets/projects/screenshot.png"
tech: ["C++", "ROS 2"]
---
Body text (markdown) shown on detail views.
```

#### Publications (`src/content/publications/*.md`)
```yaml
---
title: "Paper Title"
authors: ["Author One", "Author Two"]
venue: "IEEE IPCCC 2024"
date: 2024-12-01
abstract: "Paper abstract text..."
pdf: "/docs/paper.pdf"      # path in public/docs/
doi: "10.1109/..."
citation: "BibTeX or IEEE citation string"
---
```

#### Experience (`src/content/experience/*.md`)
```yaml
---
title: "Job Title"
organization: "Company Name"
location: "City, State"
startDate: 2025-09-01
endDate: 2025-12-01         # omit for current roles
current: true               # shows "Current" badge + appears in homepage "What I'm Doing Now"
description: "One-line role summary"
highlights:
  - "Achievement one"
  - "Achievement two"
tech: ["Rust", "TypeScript"]
---
```

#### Blog (`src/content/blog/*.md`)
```yaml
---
title: "Post Title"
description: "Post summary"
pubDate: 2024-01-01
updatedDate: 2024-02-01     # optional
heroImage: "../../assets/blog-placeholder-1.jpg"  # optional
---
```

#### About Bio (`src/content/pages/about.md`)
Plain markdown paragraphs. Each paragraph separated by a blank line becomes a `<p>` on the about page. The first paragraph gets larger text.

### 4. Static Assets

| Location | Contents |
|----------|----------|
| `src/assets/profile/` | Profile photos (processed by Astro image optimization) |
| `src/assets/projects/` | Project screenshots (referenced from project frontmatter) |
| `src/assets/logos/` | VR logo for navigation |
| `public/docs/` | Downloadable files (resume PDF, research paper PDF) |
| `public/CNAME` | Custom domain for GitHub Pages |

## Common Tasks

### Add a new project
1. Add a screenshot to `src/assets/projects/`
2. Create `src/content/projects/my-project.md` with the frontmatter above
3. Set `featured: true` if it should appear on the homepage

### Add a new work experience
1. Create `src/content/experience/company-name.md`
2. Set `current: true` if it's ongoing (it will appear in the homepage "What I'm Doing Now" section)

### Add a new publication
1. Put the PDF in `public/docs/`
2. Create `src/content/publications/paper-slug.md`

### Add a new blog post
1. Create `src/content/blog/post-slug.md`

### Change the hero typing animation
Edit the `roles` array in `src/data/profile.json`

### Change section headings or CTAs
Edit `HOME_SECTIONS` or `HERO` in `src/consts.ts`

### Change page titles/descriptions
Edit the `PAGES` object in `src/consts.ts`

### Update the about page bio
Edit `src/content/pages/about.md`

### Update quick facts or journey timeline
Edit `src/data/about.json`

### Change research interests
Edit `src/data/research-interests.json`

### Update skills
Edit `src/data/skills.json`

### Update education
Edit the `education` array in `src/data/profile.json`

## Features

- **Dark mode** toggle (persists in localStorage, defaults to dark)
- **Ctrl+K / /** search across all content
- **View Transitions** for smooth SPA-style page navigation
- **Scroll reveal** animations on all pages (`data-reveal` attribute)
- **CV sidebar** scroll spy with section navigation
- **Project filtering** with staggered fade animations
- **Typed.js** hero animation driven by `profile.json` roles
- **Image optimization** via Astro's built-in sharp integration
- **RSS feed** at `/rss.xml`
- **Sitemap** auto-generated

## Deployment

Push to GitHub. The site deploys via GitHub Actions (`.github/workflows/deploy.yml`) to GitHub Pages. The `public/CNAME` file maps to visvamrajesh.com.

## Tech Stack

- [Astro](https://astro.build) 5 with TypeScript
- [Tailwind CSS](https://tailwindcss.com) for styling
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) terminal font
- [Typed.js](https://mattboldt.com/demos/typed-js/) for hero animation
- [GSAP](https://gsap.com) (available, used sparingly)
