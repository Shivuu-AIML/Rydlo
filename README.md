# Rydlo

Rydlo is a peer-to-peer vehicle rental marketplace for people who want to rent bikes and cars on their own terms. The M0 foundation establishes the frontend, backend, database configuration, design system, and development workflow without implementing authentication, booking, payments, or other marketplace business logic.

## Stack

- **Client:** React, Vite, JavaScript, Tailwind CSS, React Router, Axios, Lucide React, Framer Motion
- **Server:** Node.js, Express, JavaScript, Helmet, CORS, Morgan
- **Database:** PostgreSQL with Prisma ORM

## Project structure

```text
client/   Vite React application
server/   Express API and Prisma schema
docs/     Project, architecture, and design system documentation
```

## Getting started

Requirements: Node.js 20+ and npm 10+.

```bash
npm run install:all
cp client/.env.example client/.env
cp server/.env.example server/.env
npm run dev
```

The client runs at `http://localhost:5173` and the API runs at `http://localhost:4000`. The client can be started independently with `npm run dev --prefix client`; the API can be started independently with `npm run dev --prefix server`.

## Verification commands

```bash
npm run build
npm run lint
curl http://localhost:4000/api/health
```

The health endpoint returns:

```json
{
  "success": true,
  "message": "Rydlo API is running"
}
```

## Environment variables

Copy the example files before local development:

- `client/.env.example`: `VITE_API_URL`
- `server/.env.example`: `PORT`, `CLIENT_URL`, `DATABASE_URL`, and `NODE_ENV`

No real credentials are required to run the client or the backend health endpoint. PostgreSQL is only required when Prisma database commands are used.

## Prisma

From `server/`, set `DATABASE_URL` to a PostgreSQL connection string and run:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

The initial schema is intentionally empty beyond Prisma's generator and datasource configuration. See `docs/ARCHITECTURE.md` for the current boundaries.

## Documentation

- [Project overview](docs/PROJECT_OVERVIEW.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Design system](docs/DESIGN_SYSTEM.md)
