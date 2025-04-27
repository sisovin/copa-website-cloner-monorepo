# copa-website-cloner

## Description

This project is a monorepo containing a website cloner application with a backend built using Nest.js and a frontend built using Next.js. The backend handles the website cloning process using Puppeteer and stores job information in a SQLite database. The frontend provides a user interface for submitting URLs to be cloned and checking the status of cloning jobs.

## Backend

### Framework

Nest.js

### Main modules

- `website-cloner`: Handles the website cloning process
- `database`: Manages the SQLite database and entities
- `services`: Contains utility services like Puppeteer and storage

### Key files

- `src/modules/website-cloner/website-cloner.module.ts`
- `src/modules/website-cloner/website-cloner.service.ts`
- `src/modules/website-cloner/website-cloner.controller.ts`
- `src/database/entities/website-job.entity.ts`
- `src/services/puppeteer.service.ts`
- `src/services/storage.service.ts`

## Frontend

### Framework

Next.js

### Main components

- `UrlForm`: Form for submitting URLs to be cloned
- `StatusIndicator`: Displays the status of cloning jobs
- `DownloadButton`: Allows users to download the cloned website

### Key files

- `components/website-cloner/UrlForm.tsx`
- `components/website-cloner/StatusIndicator.tsx`
- `components/website-cloner/DownloadButton.tsx`
- `hooks/useWebsiteCloner.ts`
- `hooks/usePolling.ts`

## Docker

### Nginx configuration

- `docker/nginx/default.conf`

### PostgreSQL initialization

- `docker/postgres/init.sql`

## Environment variables

### Shared

- `.env`

### Backend

- `apps/backend/.env`

### Frontend

- `apps/frontend/.env.local`

## Additional files

- `.gitignore`
- `docker-compose.yml`
- `package.json` (Root - optional for scripts)
- `README.md`
