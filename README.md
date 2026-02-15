# Breakfast Station #319 — Restaurant Website

A modern, responsive restaurant website for **Breakfast Station #319**, a charming breakfast spot housed in a converted railroad station in Somersworth, NH. Built with a focus on performance, accessibility, SEO, and polished visual design.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)
![Express](https://img.shields.io/badge/Express-4-000000?logo=express&logoColor=white)

---

## Features

- **Responsive Design** — Fully optimized for desktop, tablet, and mobile viewports
- **Dark Mode** — System-aware theme toggle with localStorage persistence
- **Animated UI** — Smooth scroll-triggered animations powered by Framer Motion
- **Full Menu System** — Tabbed, category-based menu pulled from a PostgreSQL database
- **SEO Optimized** — Per-page meta tags, Open Graph, Twitter Cards, canonical URLs, and JSON-LD structured data (Restaurant + LocalBusiness schema)
- **Accessible** — Semantic HTML, ARIA labels on background images, descriptive alt text on all images
- **Real Data** — Menu items, categories, and guest testimonials seeded from real restaurant information

## Tech Stack

| Layer       | Technology                                                        |
|-------------|-------------------------------------------------------------------|
| Frontend    | React 18, TypeScript, Vite                                        |
| Styling     | Tailwind CSS, Shadcn UI, Framer Motion                            |
| Routing     | Wouter (client), Express (server)                                 |
| Data        | TanStack React Query                                              |
| Backend     | Express.js, TypeScript                                            |
| Database    | PostgreSQL with Drizzle ORM                                       |
| SEO         | react-helmet-async, JSON-LD structured data                       |

## Pages

| Page    | Path       | Description                                                                 |
|---------|------------|-----------------------------------------------------------------------------|
| Home    | `/`        | Hero section, info bar, featured dishes, about preview, testimonials, CTA   |
| Menu    | `/menu`    | Tabbed category menu with images, prices, and dietary note                  |
| About   | `/about`   | Restaurant story, interior photos, feature highlights, cross-links          |
| Contact | `/contact` | Google Maps embed, hours, parking info, social links, call-to-action        |

## Project Structure

```
client/
  src/
    components/       Reusable UI (Navigation, Footer, SEO, StructuredData)
    pages/            Page components (Home, Menu, About, Contact)
    lib/              Utilities (queryClient, theme provider)
    hooks/            Custom hooks
  public/
    images/           Generated food and venue photography
server/
  routes.ts           API route handlers
  storage.ts          Data access layer (IStorage interface)
  seed.ts             Database seed script with real menu data
  db.ts               Drizzle database connection
shared/
  schema.ts           Drizzle schema (menuCategories, menuItems, testimonials)
```

## API Endpoints

| Method | Endpoint                  | Description              |
|--------|---------------------------|--------------------------|
| GET    | `/api/menu-categories`    | All menu categories      |
| GET    | `/api/menu-items`         | All menu items           |
| GET    | `/api/menu-items/featured`| Featured items only      |
| GET    | `/api/testimonials`       | Guest reviews            |

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL database

### Installation

```bash
npm install
```

### Environment Variables

| Variable        | Description                        |
|-----------------|------------------------------------|
| `DATABASE_URL`  | PostgreSQL connection string       |
| `SESSION_SECRET` | Session secret for Express        |

### Development

```bash
npm run dev
```

This starts both the Express backend and Vite dev server on port 5000.

### Database Setup

The database schema is managed with Drizzle ORM. Push the schema and seed data:

```bash
npm run db:push
```

The server automatically seeds the database with menu categories, items, and testimonials on first run.

## Design Decisions

- **Railroad Theme** — Warm amber/orange primary color palette inspired by the restaurant's historic train station setting
- **Typography** — Playfair Display (serif) for headings to convey heritage; Open Sans (sans-serif) for body text for readability
- **Navigation** — Transparent-to-solid header effect on the homepage for an immersive hero experience
- **Data Architecture** — All content served from PostgreSQL via REST API rather than hardcoded, making the site easy to update and extend
- **Component Library** — Shadcn UI components for consistent, accessible UI primitives with full dark mode support

## License

This project is for portfolio and demonstration purposes.
