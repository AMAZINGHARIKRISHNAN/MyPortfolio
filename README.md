# Harikrishnan P — Portfolio

Personal portfolio of **Harikrishnan P**, AI Software Developer at Thirdwave Corporation, Japan.

**Live site:** https://harikrishnanportfolio.web.app

## Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** — near-black / electric-lime terminal-inspired design system
- **Framer Motion** — scroll reveals, streaming terminal, palette transitions
- **Firebase Hosting** — static hosting with SPA rewrites
- **Web3Forms** — serverless contact form

## Features

- **Live hero terminal** that streams `whoami` output character-by-character like an LLM
- **Command palette (Ctrl+K)** — keyboard-first navigation: jump to sections, copy email, download CV, open socials
- Single-page scroll with shell-command section headers (`cat ./about.md`, `ls ./projects`, …)
- Filterable project grid styled as terminal windows
- Experience log with live "current" indicator, education records
- Auto-playing credentials carousel with keyboard navigation and next-slide preloading
- Live Tokyo (JST) clock in the contact section
- Contact form with loading / success / error states
- Film grain, scanlines, and blinking block cursors for texture

## Development

```bash
npm install
npm run dev       # start dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Deployment

```bash
npm run build
firebase deploy --only hosting
```

## Project Structure

```
src/
├── App.jsx                    # Assembles nav, palette, sections, footer
├── main.jsx                   # Entry point
├── data.js                    # All content: projects, experience, skills, links
├── index.css                  # Palette, grain, scanlines, cursor, scrollbars
├── hooks/
│   └── useTypewriter.js       # Looping typewriter for hero roles
└── components/
    ├── Nav.jsx                # Fixed top bar
    ├── CommandPalette.jsx     # Ctrl+K action palette
    ├── Hero.jsx               # Big type + streaming terminal
    ├── Section.jsx            # Shared section shell with $ command header
    ├── About.jsx              # Bio, modules, clients
    ├── Projects.jsx           # Filterable terminal-window project cards
    ├── Experience.jsx         # Work log + education
    ├── Skills.jsx             # Grouped skill chips
    ├── Credentials.jsx        # Achievements / certifications tabs
    ├── Carousel.jsx           # Reusable image carousel
    ├── Contact.jsx            # Info rows, JST clock, Web3Forms form
    └── Footer.jsx
```
