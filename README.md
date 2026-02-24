# Governed Enterprises

**Building Generational Wealth Through Torah-Aligned Enterprise**

A single-page holding-company site for Governed Enterprises — spanning education, finance, health, agriculture, legal services, AI, and digital infrastructure. Built on Torah principles for generational inheritance.

---

## Tech Stack

| Layer        | Technology                                   |
| ------------ | -------------------------------------------- |
| Framework    | Next.js 14 (App Router)                      |
| Language     | TypeScript                                   |
| Styling      | Tailwind CSS 4 with `ge-*` design tokens     |
| Animation    | Framer Motion                                |
| Icons        | Lucide React                                 |
| Fonts        | Inter (body) · JetBrains Mono (mono)         |
| Deployment   | Vercel-ready (static export compatible)      |

## Project Structure

```
governed-enterprises/
├── app/
│   ├── layout.tsx          # Root layout, metadata, JSON-LD, fonts
│   ├── page.tsx            # Home page assembly
│   ├── globals.css         # Tailwind base, scrollbar, keyframes
│   └── favicon.svg         # SVG favicon (gold GE monogram)
├── components/
│   ├── TopBar.tsx          # Fixed 36px header with crossfade ticker
│   ├── HookSection.tsx     # Full-viewport hero with shield emblem
│   ├── OriginStory.tsx     # Founder narrative with scroll animations
│   ├── CommandCenter.tsx   # Division grid with category filters
│   ├── DivisionCard.tsx    # Expandable division cards with status
│   ├── Footer.tsx          # Site footer (server component)
│   ├── ScrollProgress.tsx  # Gold progress bar (native scroll)
│   └── SoundToggle.tsx     # Ambient audio toggle with fade
├── lib/
│   └── constants.ts        # All site content, divisions, palette
├── public/
│   ├── manifest.json       # PWA manifest
│   └── robots.txt          # SEO crawl rules
├── tailwind.config.ts      # Extended theme with ge-* tokens
└── .env.example            # Environment variable template
```

## Divisions

| Division                        | Status          | Category            |
| ------------------------------- | --------------- | ------------------- |
| The Governed Academy            | LIVE            | Culture             |
| GE Press                        | In Development  | Culture             |
| GE Studios                      | In Development  | Culture             |
| GE Financial                    | In Development  | Commerce            |
| GE AgriWorks                    | In Development  | Commerce            |
| GE Health                       | In Development  | Commerce            |
| GE Legal                        | In Development  | Justice & Ops       |
| GE Digital                      | In Development  | Justice & Ops       |
| GE AI Labs                      | In Development  | Justice & Ops       |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values as needed:

```bash
cp .env.example .env.local
```

See `.env.example` for available configuration options.

## Design System

- **Background**: `#0f0f0f` (near-black)
- **Primary text**: `#e0e0e0` (warm white)
- **Accent / Gold**: `#c9a84c`
- **Accent hover**: `#d4b95c`
- **Surface cards**: `#1a1a1a`
- **Borders**: `#2a2a2a`

All colors are available as `ge-*` Tailwind utilities (e.g., `bg-ge-background`, `text-ge-gold`).

## Accessibility

- Semantic HTML (`header`, `main`, `footer`, ARIA roles)
- `aria-live="polite"` on ticker for screen readers
- `prefers-reduced-motion: reduce` disables all animations
- Keyboard-navigable interactive elements
- Sufficient color contrast ratios

## Performance

- Fonts loaded via `next/font/google` (zero layout shift)
- `CommandCenter` lazy-loaded with `next/dynamic`
- Scroll listener uses `requestAnimationFrame` + `passive: true`
- Animations use only `transform` and `opacity` (GPU-composited)
- `will-change` hints on animated elements

## SEO

- Full Open Graph and Twitter Card metadata
- JSON-LD Organization structured data
- `robots.txt` with sitemap reference
- PWA manifest for mobile install

---

**Founded by Terry Taylor · Eau Claire, Wisconsin · 2024**
