# Skillz Base — Firebase-free Web Backend

This project now includes an Express backend. It does **not** use Firebase.

## Local run

1. Install Node.js 20+.
2. Run `npm install`.
3. Copy `.env.example` to `.env` and change `ADMIN_PASSWORD` and `TOKEN_SECRET`.
4. Terminal 1: `npm run server`
5. Terminal 2: `npm run dev`
6. Open `http://localhost:3000`.

Backend health: `http://localhost:8787/api/health`

## Important

The backend currently persists data to `server/data/db.json`. This is suitable for local testing and a small single-server demo. For a production multi-server deployment, replace the JSON store with PostgreSQL/MySQL and add HTTPS, rate limiting, audit logs, and server-side validation for every game action.

The existing AdminPanel UI is still present. `src/services/backendApi.ts` provides the API client that should be wired into `AppContext` so admin actions and user data stop using localStorage.

## No Firebase

No Firebase SDK or Firebase web configuration is required by this backend.
