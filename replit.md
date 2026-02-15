# Breakfast Station #319 - Restaurant Website

## Overview
A modern, responsive restaurant website for Breakfast Station #319 — a local breakfast restaurant themed after Train Station #319, located at 6 Main St, Somersworth, NH 03878.

## Architecture
- **Frontend**: React + TypeScript with Vite, TailwindCSS, Shadcn UI components, Framer Motion animations
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Routing**: Wouter (frontend), Express (backend)
- **State Management**: TanStack React Query
- **SEO**: react-helmet-async for per-page metadata

## Project Structure
- `client/src/pages/` - Page components (Home, Menu, About, Contact, NotFound)
- `client/src/components/` - Shared components (Navigation, Footer, SEO)
- `client/src/lib/` - Utilities (queryClient, theme provider)
- `client/public/images/` - Generated food/restaurant images
- `server/` - Express backend with routes, storage, db, and seed data
- `shared/schema.ts` - Drizzle schema definitions (menuCategories, menuItems, testimonials)

## Design
- Warm amber/orange primary color (railroad theme)
- Playfair Display for headings, Open Sans for body text
- Dark mode support with theme toggle
- Transparent-to-solid navigation on scroll (home page)

## Key APIs
- `GET /api/menu-categories` - All menu categories
- `GET /api/menu-items` - All menu items
- `GET /api/menu-items/featured` - Featured items only
- `GET /api/testimonials` - Guest reviews

## Restaurant Info
- Phone: (603) 841-5567
- Hours: Mon-Fri 7am-2pm, Sat-Sun 7am-3pm
- Address: 6 Main St, Somersworth, NH 03878
