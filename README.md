# NORD & BEAN

A responsive four-page portfolio concept for a fictional independent Oslo coffee shop. Built in the existing project using React, Vite, JavaScript, React Router, Lucide icons, and plain CSS.

## Run locally

```sh
npm install
npm run dev
```

Open http://127.0.0.1:5173. Create a production build with `npm run build`, or inspect it with `npm run preview`.

## Editing

- `src/pages/`: Home, Menu, About, and Contact.
- `src/components/`: shared header, footer, product cards, and Intersection Observer reveal.
- `src/data/menu.js`: all 15 products, descriptions, categories, prices, and image paths.
- `src/data/business.js`: fictional contact details and opening hours.
- `src/styles/global.css`: responsive design tokens, typography, layouts, and reduced-motion support.
- `public/images/CREDITS.md`: photo source pages and license information.
- `public/fonts/`: self-hosted DM Sans and Playfair Display with their OFL licenses.

Menu filters work locally. The contact form validates required fields and email format, clears valid submissions, and displays a demo confirmation. It has no backend, email delivery, analytics, or personal-data storage. All business details are fictional; the street address is a placeholder. Stock photography illustrates the concept and does not depict this fictional business.

## Verification

`npm test` runs Playwright checks against a running dev server on port 5173. Tests use the locally installed Microsoft Edge at `C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe`; adjust that executable path for another computer. Coverage includes all routes at five screen widths, image decoding, overflow, filters, mobile navigation and Escape behavior, form validation, absence of POST submissions, and reduced motion.

Static production hosting must rewrite unknown non-asset paths to `index.html` so React Router routes work on direct visits.
