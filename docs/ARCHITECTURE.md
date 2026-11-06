# Architecture

## Repository

Rydlo is a single repository with two independently managed JavaScript applications:

- `client/` contains the Vite React SPA.
- `server/` contains the Express API and Prisma configuration.
- `docs/` contains product and implementation documentation.

The root `package.json` provides orchestration scripts through npm and `concurrently`.

## Client

The client uses React Router for route composition. `SiteLayout` owns the shared navigation and footer; pages own route-level content; `components/ui` contains small reusable primitives. Tailwind tokens in `tailwind.config.js` and global CSS establish the design system.

The current search form and vehicle cards are visual-only demo surfaces. Axios is included for the API integration layer that will be added with real features.

## Server

`src/server.js` is the process entry point and `src/app.js` composes middleware and routes. Environment parsing is centralized in `src/config/env.js`. Helmet, CORS, JSON parsing, request logging, a 404 handler, and a centralized error handler are wired at the application boundary.

`GET /api/health` is the first API module. It does not require a database connection, so the server can start without PostgreSQL credentials.

## Database

Prisma is configured for PostgreSQL in `server/prisma/schema.prisma`. The schema is intentionally empty in M0. Future modules should own their models and routes rather than creating a large upfront schema.
