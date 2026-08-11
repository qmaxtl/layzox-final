# Layzox — Managed B2B Services Procurement Platform

A managed B2B services procurement platform. One requirement. We handle the rest. Businesses submit a single requirement; Layzox coordinates sourcing, quotations and delivery through one accountable process.

A premium, enterprise-grade, production-ready website.

## Tech Stack

- **Vite 8** + **React 19** + **TypeScript** — fast, typed, production build
- **Tailwind CSS v4** — CSS-first design system with custom tokens
- **Framer Motion 12** — scroll reveals, staggered entrances, layout animations, counters, tilt & magnetic effects
- **React Router 7** — multi-page architecture with route-level code splitting
- **lucide-react** — consistent iconography
- **@fontsource** — self-hosted Inter, Space Grotesk & IBM Plex Mono (no external font CDN)

## Getting Started

```bash
npm install
npm run dev       # start dev server on :5173
npm run build     # production build to dist/
npm run preview   # preview the production build
npm run typecheck # type check
```

## Design System

- **Palette:** primary `#0F172A`, secondary `#2563EB`, accent `#06B6D4`, surface `#FFFFFF`, soft surface `#F8FAFC`, text `#111827`
- **Type:** Space Grotesk (display), Inter (body), IBM Plex Mono (labels/eyebrows)
- **Tokens:** `ink-*`, `brand-*`, `accent-*` scales defined in `src/index.css` via Tailwind v4 `@theme`
- **Features:** dark mode, glassmorphism, gradients, soft shadows, grid backgrounds, aurora blobs, marquees, smooth scroll

## Project Structure

```
src/
├── components/
│   ├── home/          # Home-page section components (Hero, ServicesSection, …)
│   ├── layout/        # Header, Footer, ThemeToggle, ScrollToTop
│   ├── pages/         # Page-specific components (LegalPage)
│   └── ui/            # Reusable primitives (Button, Badge, Accordion, Reveal, …)
├── hooks/             # useTheme
├── lib/
│   ├── data/          # All content, structured for easy extension
│   └── site.ts        # Site config & navigation
└── pages/             # Route pages
```

## Adding a New Service

Services are data-driven. Add an entry to `src/lib/data/services.ts` — the card, catalog page, marquee, form dropdowns and sitemap feed update automatically:

```ts
{
  slug: "my-service",
  name: "My Service",
  category: "Facility & Maintenance", // must match a category name
  icon: MyIcon,                       // any lucide icon
  description: "…",
  points: ["Point one", "Point two", "Point three"],
},
```

New categories go into `serviceCategories`. New industries, FAQs, blog posts and platform features are added the same way in their respective files under `src/lib/data/`.

## Key Product Rules (Implemented)

- Customers **cannot** browse vendors, compare quotations, contact or choose vendors
- Layzox coordinates vendor assignment, quotations, scheduling, execution, payments, GST invoices and support
- Layzox is the point of contact between businesses and service providers
- Verification requirements vary by service category

## SEO & Performance

- Per-route meta titles/descriptions, Open Graph & Twitter cards, JSON-LD structured data
- `robots.txt` + `sitemap.xml`
- Route-level lazy loading, self-hosted fonts, semantic HTML, `prefers-reduced-motion` support
