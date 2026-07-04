# Harikrishnan P — Portfolio

Personal portfolio of **Harikrishnan P**, AI Software Developer at Thirdwave Corporation, Japan.

**Live site:** https://harikrishnanportfolio.web.app

## Tech Stack

- **React 18** + **Vite 5** — fast SPA with hot module reload
- **Tailwind CSS 3** — utility-first styling with a custom cyan/dark design system
- **Framer Motion** — page transitions, tab pill animation, carousel slides
- **Firebase Hosting** — static hosting with SPA rewrites
- **Web3Forms** — serverless contact form

## Features

- Tab-based SPA (About / Resume / Portfolio / Credentials / Contact) with hash-based deep links (`/#resume`, `/#portfolio`, …) and working browser back button
- Typewriter role animation in the sidebar
- Auto-playing certificate carousel with keyboard navigation, swipe direction awareness, and next-slide preloading
- Filterable project grid (Web / Mobile) with animated layout
- Fully responsive — collapsible contact section on mobile
- Contact form with loading / success / error states

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
├── App.jsx                 # Shell: sidebar + navbar + page switching + hash routing
├── main.jsx                # Entry point
├── index.css               # Tailwind + global styles (grid background, scrollbars)
├── hooks/
│   └── useTypewriter.js    # Typewriter effect hook
└── components/
    ├── Sidebar.jsx         # Profile, contacts, socials, CV download
    ├── Navbar.jsx          # Animated tab navigation
    ├── About.jsx           # Bio, services, clients
    ├── Resume.jsx          # Education, experience, skills
    ├── Portfolio.jsx       # Filterable project grid
    ├── Credentials.jsx     # Achievements / certifications tabs
    ├── Carousel.jsx        # Reusable image carousel
    └── Contact.jsx         # Map + Web3Forms contact form
```
