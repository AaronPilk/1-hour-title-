# One Hour Title — Website

A modern, Apple-inspired rebuild of [1hourtitle.com](https://www.1hourtitle.com/) for **One Hour Title, LLC** — residential & commercial title insurance across North & South Carolina.

## Design
- **Aesthetic:** Apple-style — generous whitespace, large type, glassmorphism, floating dynamic cards with hover-lift + tilt, scroll-reveal animations, cinematic ken-burns image heroes.
- **Imagery:** Bespoke, on-brand luxury photography (golden-hour Carolina homes, elegant interiors, keys, a closing desk, an aerial neighborhood, and a gold-silk texture) in `assets/img/`, all web-optimized JPGs.
- **Floating dynamic materials:** drifting photo cluster on the hero, parallax framed images with floating glass stat cards, a gold-texture stat panel, and an infinite scrolling home gallery.
- **Palette:** Ink black `#0b0b0c` + brand gold `#e6cf4b` (pulled from the original logo) on Apple-neutral whites (`#f5f5f7`).
- **Brand assets preserved:** original One Hour Title logo (dark + white variants), WFG National Title logo, brand gold accent.

## Structure
```
index.html        # Home
services.html     # Services
homeowners.html   # Homeowners
contact.html      # Contact (order form → mailto)
css/styles.css    # Design system
js/main.js        # Nav, scroll reveal, count-up, tilt, form
assets/           # Logos (original + white variant) & WFG mark
```

## Tech
Zero dependencies — hand-built static HTML/CSS/JS. Fast, accessible (reduced-motion aware), fully responsive.

## Run locally
Open `index.html` in a browser, or serve the folder:
```bash
python3 -m http.server 8080
```

## Deploy
Static — host anywhere (Vercel, Netlify, GitHub Pages, Cloudflare Pages). No build step.

## Notes
- Contact form uses a `mailto:` handoff to `orders@1hourtitle.com`. Wire it to a form backend (Formspree, Basin, or a serverless function) for inbox delivery.
- Phone: 704-467-3031 · Email: orders@1hourtitle.com · PO Box 851, Oakboro, NC 28129
