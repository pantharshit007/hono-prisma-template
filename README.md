<h1 align="center">Hono Prisma Template</h1>

A template for building APIs using Hono.js with Prisma ORM, designed for deployment on Cloudflare Workers.

## Features

- 🚀 [Hono.js](https://hono.dev/) - Fast, Lightweight, Web-standards
- 🛠 [Prisma ORM](https://www.prisma.io/) with PostgreSQL
- ⚡ [Prisma Accelerate](https://www.prisma.io/data-platform/accelerate) Support
- 🔒 Environment Variable Validation with Zod
- 📦 TypeScript Support

## Prerequisites

- Node.js 18+
- PostgreSQL Database
- Cloudflare Account (for deployment)

## Getting Started

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Create a `.dev.vars` file based on the `.dev.vars.example` file:

```bash
cp .dev.vars.example .dev.vars
```

3. Run the database migration and seeding:

```bash
npm run db:prisma
npm run db:migrate
npm run db:seed
```

4. Start the development server:

```bash
npm run dev
```

5. Deploy the application to Cloudflare Workers:

```bash
npm run db:no-engine
npm run deploy
```

6. Visit the deployed application in your browser:

```bash
https://<your-subdomain>.workers.dev
```

## Database

The application uses PostgreSQL as the database. You can configure the database connection in the `.dev.vars` file.

- DATABASE_URL: The database URL for the production environment which is an accelerated database from [Prisma Accelerate](https://www.prisma.io/docs/accelerate/getting-started).
- DATABASE_URL_UNPOOLED: This is the database URL for the development environment which is a non-accelerated database.

## Environment Variables

The application uses environment variables to configure the database connection. You can configure the database connection in the `.dev.vars` file.

## Deployment

To deploy the application to Cloudflare Workers, you need to have a Cloudflare account and install the [Wrangler CLI](https://github.com/cloudflare/wrangler).

1. Install the Wrangler CLI:

```bash
npm install -g wrangler
```

2. Authenticate the Wrangler CLI:

```bash
wrangler login
```

3. generate prisma client -no-engine

```bash
npm run db:no-engine
```

4. Deploy the application to Cloudflare Workers:

```bash
npm run deploy
```

5. Visit the deployed application in your browser:

```bash
https://<your-subdomain>.workers.dev
```

### धन्यवाद्
