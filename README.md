# Succoi — The Food Journey

A food journal website featuring recipes, food origins, and food culture stories. Built with semantic HTML5, BEM-structured CSS, and modular ES6 JavaScript.

## Technology Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties, BEM naming, `@import` cascade
- **Vanilla JavaScript (ES6 modules)** — no frameworks, no build step
- **Fonts** — Google Fonts (DM Sans + Playfair Display)
- **Hosting** — GitHub Pages (custom domain via `CNAME`)

No build system, bundler, or package manager is required. The site runs entirely from static files served as-is.

## Folder Structure

```
project-root/
├── index.html                 # Single page entry point
├── CNAME                      # GitHub Pages custom domain
├── README.md                  # This file
├── .gitignore
├── css/
│   ├── main.css               # Entry point — imports all other stylesheets
│   ├── base/
│   │   ├── reset.css          # Box-sizing, margins, defaults
│   │   ├── variables.css      # Design tokens (colors, fonts, spacing, timing)
│   │   ├── typography.css     # Shared text styles (.eyebrow, .text-link)
│   │   └── motion.css         # Keyframes, focus-visible, reduced-motion
│   ├── layout/
│   │   ├── container.css      # .container width + responsive
│   │   ├── section.css        # .section padding + heading layout
│   │   └── footer.css         # Footer layout + responsive
│   ├── components/
│   │   ├── skip-link.css      # Skip-to-content link
│   │   ├── navbar.css         # Sticky header bar
│   │   ├── nav-links.css      # Navigation list + mobile drawer
│   │   ├── filter-button.css  # Story filter buttons
│   │   ├── hero.css           # Hero section
│   │   ├── story-card.css     # Individual story cards
│   │   └── newsletter-form.css # Newsletter signup form
│   └── sections/
│       ├── intro-strip.css    # Tagline strip under hero
│       ├── stories.css        # Stories section grid + filter row
│       ├── manifesto.css      # Brand philosophy section
│       └── newsletter.css     # Newsletter CTA section
└── js/
    ├── main.js                # Entry point — initializes all modules
    ├── utils/
    │   └── dom.js             # Query helper functions ($, $$, on)
    └── modules/
        ├── navigation.js      # Mobile menu toggle, keyboard support
        ├── story-filter.js    # Category filtering of story cards
        ├── newsletter-form.js # Form validation + feedback message
        └── current-year.js    # Auto-updates footer copyright year
```

## CSS Architecture

### Import Order

Styles are loaded through `css/main.css`, which imports files in order:

1. **Base** — reset, variables, typography, motion
2. **Layout** — container, section, footer
3. **Components** — skip-link, navbar, nav-links, filter-button, hero, story-card, newsletter-form
4. **Sections** — intro-strip, stories, manifesto, newsletter

### BEM Naming Convention

All class names follow Block Element Modifier (BEM):

- **Block**: `.story-card` — standalone component
- **Element**: `.story-card__title` — child of a block (double underscore)
- **Modifier**: `.filter-btn--active` — state or variation (double hyphen)

Rules:
- Lowercase kebab-case only
- No IDs for styling
- No deeply nested selectors
- State classes use `--modifier` suffix (e.g., `--open`, `--active`, `--hidden`)
- JavaScript hooks use `data-js` attributes, not CSS classes

### Design Tokens

All colors, fonts, spacing, and timing values are centralized in `css/base/variables.css` as CSS custom properties. Modify these to retheme the site.

## JavaScript Module Organization

- **ES6 modules** loaded with `<script type="module">` — no bundler needed
- Each module exports a single `init*` function called from `js/main.js`
- DOM readiness is handled in `main.js` (waits for `DOMContentLoaded` if needed)
- `js/utils/dom.js` provides `$`, `$$`, and `on` helpers for safe element queries
- Modules check for element existence before binding events

### Adding a New Module

1. Create `js/modules/your-feature.js` with an `initYourFeature()` export
2. Import and call it in `js/main.js`
3. Use `data-js="your-feature"` attributes in HTML for selectors

## Adding New Pages

1. Create an `.html` file in the project root (or `pages/` for multi-page)
2. Include `<link rel="stylesheet" href="css/main.css" />` in `<head>`
3. Include `<script type="module" src="js/main.js"></script>` before `</body>`
4. Add a skip link: `<a href="#main" class="skip-link">Skip to main content</a>`

## Asset Management

- Images are currently loaded from Unsplash CDN URLs
- Fonts are loaded from Google Fonts CDN
- No local image assets — replace CDN URLs with local files in `assets/images/` if needed

## Accessibility

- Skip-to-content link for keyboard users
- Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `article`, `footer`)
- `aria-label` on navigation, form inputs, and interactive elements
- `aria-pressed` state on filter buttons
- `aria-live="polite"` on form status message
- `aria-labelledby` on sections with headings
- `aria-hidden="true"` on decorative arrow characters
- `:focus-visible` outline for keyboard navigation
- `prefers-reduced-motion` support disables animations
- Mobile menu closes on Escape key and restores focus to toggle button
- All interactive elements are keyboard accessible
- Form has visible label (screen-reader) and HTML5 validation

## Security Considerations

- No secrets, API keys, or credentials in client-side code
- No `innerHTML`, `eval()`, or unsafe DOM insertion
- Form validation is client-side only (UX) — connect a backend service for real submissions
- No third-party JavaScript dependencies
- External resources loaded from `fonts.googleapis.com` only
- Consider adding a Content Security Policy header at the hosting layer

## Development

This is a static site with no build step. To preview locally, open `index.html` in a browser or serve with any static file server.

## Testing

Manual verification performed:
- All sections render correctly (hero, stories, manifesto, newsletter, footer)
- Category filtering works (Everything, Recipes, Origins, Food culture)
- Mobile navigation opens, closes on link click, closes on Escape, closes on resize
- Newsletter form validates email and shows confirmation message
- Footer year auto-updates
- Responsive layouts at 800px and 600px breakpoints
- Keyboard navigation: skip link, menu toggle, filter buttons, form submit all operable via keyboard
- No console errors

No automated test suite is configured. A future improvement would be adding Playwright or Cypress for end-to-end testing.

## Known Issues and Future Improvements

- Newsletter form is not connected to a backend — integrate an email service or Supabase table
- Images use Unsplash CDN — consider optimizing with local WebP/AVIF assets
- No Content Security Policy header configured (set at hosting/CDN layer)
- No Open Graph or Twitter Card meta tags for social sharing
- No sitemap.xml or structured data (JSON-LD) for SEO
