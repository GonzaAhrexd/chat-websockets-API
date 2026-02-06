For my Mysql (Prisma) template, visit [this instead](https://github.com/GonzaAhrexd/express-prisma-typescript-template)

# TypeScript - Express - MongoDB API Template

A minimal TypeScript + Express template for building REST APIs. This repository provides a small starter API (a simple "ping" resource) and common configurations for CORS, logging and MongoDB connection.

## Features

- Small, focused TypeScript Express app
- MongoDB integration via Mongoose (`MONGODB_URI` env)
- CORS configuration and request logging (morgan)
- Example `ping` endpoints (GET, POST, PUT, DELETE)

## Tech stack

- Node.js
- TypeScript
- Express
- MongoDB (Mongoose)
- nodemon (development)

## Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- A running MongoDB instance or MongoDB Atlas connection string

## Environment variables

Create a `.env` file in the project root with the following variables (examples):

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/mydatabase
corsOrigin=http://localhost:4200
```

Note: the code reads `process.env.corsOrigin` (case-sensitive) for the allowed origin.

## Install

Install dependencies:

```powershell
npm install
```

## Run (development)

Start the app in development mode:

```powershell
npm run dev
```

The `dev` script uses `nodemon` to watch source files. If `nodemon` does not execute TypeScript directly in your environment, run using `ts-node` or adjust the script, for example:

```powershell
npx nodemon --exec "npx ts-node" src/index.ts
```

## Build and Run (production)

Compile TypeScript and run the built code:

```powershell
npx tsc
node dist/index.js
```

## API Endpoints

Base path: `/api/ping`

- GET `/api/ping` — Get the most recent ping message
- POST `/api/ping` — Create a new ping. Payload: `{ "message": "..." }`
- PUT `/api/ping` — Edit the most recent ping. Payload: `{ "message": "..." }`
- DELETE `/api/ping` — Delete the most recent ping

Example curl (create):

```bash
curl -X POST http://localhost:3000/api/ping \
	-H "Content-Type: application/json" \
	-d '{"message":"Hello from DnD spells API"}'
```

## Project structure

- `src/index.ts` — App entry point
- `src/configs/db.ts` — MongoDB connection helper
- `src/configs/CorsOptions.ts` — CORS options
- `src/controllers/` — Route controllers (e.g., `ping.controller.ts`)
- `src/routes/` — Express routes (e.g., `ping.routes.ts`)
- `src/models/` — Mongoose models (e.g., `ping.ts`)

## Contributing

Feel free to open issues or submit pull requests. Keep changes focused and add tests for new behavior.
