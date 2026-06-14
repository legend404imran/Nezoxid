# NEZO X ID — Premium Gaming Account Marketplace

A production-quality, single-stack (HTML/CSS/JS) marketplace website for buying Free Fire gaming accounts, with a futuristic 3D/glassmorphism aesthetic, dark/light theme system, animated backgrounds, and instant WhatsApp checkout.

## Project Structure

```
nezoxid/
├── index.html          # Homepage (hero, featured/latest/popular, catalog, stats, testimonials, FAQ preview, CTA)
├── about.html          # About Us (mission, vision, why us, stats, social)
├── contact.html        # Contact page (contact cards + form)
├── faq.html             # Full FAQ with live search & category filters
├── account.html        # Dynamic account detail page (?id=101)
├── privacy.html        # Privacy Policy
├── terms.html          # Terms & Conditions
├── 404.html             # Custom not-found page
├── robots.txt
├── sitemap.xml
├── assets/
│   └── logo.png        # NEZO X ID logo
├── css/
│   └── style.css       # Full design system: tokens, theme, components, animations
└── js/
    ├── data.js          # ACCOUNTS dataset + FAQ_DATA dataset
    └── main.js          # Theme toggle, nav, search/filters, FAQ, rendering, fx, toasts
```

## Key Features

- **Theme system** — dark/light toggle with animated icon swap, saved via `localStorage` and auto-applied on return visits.
- **Background fx** — canvas particle field + animated gradient orbs + subtle grid, respects `prefers-reduced-motion`.
- **Loading screen** — animated logo pulse + progress sweep, fades out on load.
- **Scroll progress bar**, **back-to-top**, **floating WhatsApp/Instagram buttons** with hover tooltips.
- **Dynamic account cards** rendered from `js/data.js` (`ACCOUNTS` array) across Featured, Latest, Popular, and the full Catalog sections.
- **Catalog** — live search (name/UID/skins/evo guns), rank filter, status filter chips, sorting, empty state.
- **Account detail page** (`account.html?id=107`) — gallery, full stat grid, skins/evo gun lists, Buy Now CTA.
- **Buy Now** buttons deep-link to WhatsApp (`wa.me/6282298431688`) with a pre-filled message referencing the account ID.
- **FAQ page** — instant search with highlighting, category chips, accordion, no-results state.
- **Toast notifications**, **skeleton loaders**, **scroll-reveal animations** on all sections.
- **SEO** — meta tags, Open Graph tags, JSON-LD structured data, `robots.txt`, `sitemap.xml`, custom `404.html`.

## Customization

- Update listings or pricing in `js/data.js` (`ACCOUNTS` array) — the homepage and catalog re-render automatically.
- Update FAQ content in `js/data.js` (`FAQ_DATA` array).
- WhatsApp number and Instagram link are defined as constants at the top of `js/main.js` (`WHATSAPP_NUMBER`, `INSTAGRAM_URL`) and reused throughout — update once to change everywhere dynamic.
- Color palette, spacing, and typography tokens live at the top of `css/style.css` under `:root` and `[data-theme="light"]`.

## Running Locally

This is a static site — no build step required. Open `index.html` in a browser, or serve the folder with any static file server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
