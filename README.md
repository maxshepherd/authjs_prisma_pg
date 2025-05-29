# Next.js Authentication App

This is a [Next.js](https://nextjs.org) authentication application built with Auth.js (NextAuth), Prisma ORM, and PostgreSQL database.

## Tech Stack

- **Frontend**: Next.js 14+ with TypeScript
- **Authentication**: Auth.js (NextAuth v5 github provider example)
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: CSS

## Features

- User authentication (sign in/sign up)
- Session management
- Protected routes
- Database user storage
- OAuth provider integration (configurable)

## Prerequisites

- Node.js 18+
- PostgreSQL database
- Environment variables configured

## Environment Setup

Create a `.env.local` file in the root directory:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/your_database"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

## Database Setup

1. Install dependencies:

```bash
npm install
```

2. Run Prisma migrations:

```bash
npx prisma migrate dev
```

3. Generate Prisma client:

```bash
npx prisma generate
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Auth.js Documentation](https://authjs.dev) - authentication for the web.
- [Prisma Documentation](https://www.prisma.io/docs) - next-generation ORM for Node.js and TypeScript.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Make sure to configure your environment variables in your deployment platform.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
