# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Jan Raasch's personal website built with Next.js 15 and TypeScript. The site is a professional portfolio showcasing full-stack development services with a focus on clean, modern design.

## Development Commands

```bash
# Package manager: pnpm (required)
pnpm install          # Install dependencies
pnpm dev             # Start development server
pnpm build           # Build for production (static export)
pnpm start           # Start production server
pnpm lint            # Run ESLint
```

## Architecture

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **Theme**: Dark/light mode with next-themes
- **Fonts**: Inter (sans) and Poppins (headings)
- **Deployment**: Static export to Netlify
- **Animation**: Framer Motion

### Key Structure

- `app/` - Next.js App Router pages (bio, hire-me, now, imprint)
- `components/` - Reusable UI components
  - `sections/` - Page-specific sections (hero, services, tech-stack, etc.)
  - `ui/` - shadcn/ui base components
- `lib/` - Utilities (tailwind merge, etc.)
- `public/images/` - Static assets including profile images and OG images

### Component Architecture

The site uses a section-based architecture where pages are composed of discrete sections (hero, intro, services, tech-stack, etc.). Each section is a separate component in `components/sections/`.

The global layout includes:
- Navbar with theme toggle
- Main content area
- Footer

### Production Build

- Uses static export (`output: 'export'`) for Netlify deployment
- Builds to `out/` directory
- All redirects handled via netlify.toml

### Styling Conventions

- Uses CSS custom properties for theming
- Tailwind with custom color palette defined in config
- Component styling follows shadcn/ui patterns
- Responsive design with mobile-first approach
