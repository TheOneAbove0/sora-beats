# Sora Music Web App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and currently in active development as the Sora Music Web App—a full-featured music streaming and management service.

## Overview

The Sora Music Web App is designed to deliver a seamless music streaming experience. Key features include:

- **Playlist & Favorites Management:** Utilize state management solutions (like Zustand) to handle user playlists and favorites with ease.
- **Backend Simulation:** Integrated with [JSON Server] to simulate a backend for managing music data, artists, and user info.
- **Optimized Fonts & Styling:** Uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) for automatic font optimization and custom styling with SCSS modules.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

To run JSON Server:

```bash
cd server

json-server --watch db.json --port 3001
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

