# Movie Browsing App

This project follows the full “Getting Started with Next.js” tutorial on my personal website. It includes everything built along the way, from the very first page to the complete Movie Browsing application.

It is designed as an educational project to introducee beginners to Next.js with practical, real-world examples.

## Read Article

[Nextjs Tutorial for Beginners](https://dicksonboateng.com/blog/nextjs-tutorial-beginners)

## What This Project Covers

This repository demonstrates the essential concepts of the Next.js App Router:

### Core Foundations

- Project setup with create-next-app
- Understanding the app/ directory
- Pages (page.tsx) and segments
- Shared layouts (layout.tsx)
- Navigation with the <Link> component
- Using Server and Client Components correctly
- Data Fetching

  - Fetching data in Server Components
  - Using revalidate for incremental updates
  - Using cache: "no-store" for always-fresh data
  - Loading and error handling with:
    - `loading.tsx`
    - `error.tsx`

- Styling
  - Tailwind CSS setup and usage
  - Styling layouts, pages, and UI components
- Using the <Image /> component for optimized images

## Movie Browsing App Features

The second half of the tutorial builds a practical Movie App using the TMDB API.
It includes:

### Movie Listing

- Fetches popular movies from TMDB
- Shows optimized poster images using <Image />
- Displays titles and descriptions in a responsive grid

### Movie Search

- Real-time filtering using a Client Component
- Instant updates as the user types
- “No movies found” indicator
- Secure server-side fetching

### Movie Details Page

- Dynamic route: /movies/[id]
- Fetching detailed information for each movie
- Loading and error states

### Navigation & Pages

- A homepage
- An About page
- A navigation bar linking to:
  - Home
  - About
  - Movies

## Project Structure

```lua
app/
 ├─ layout.tsx
 ├─ page.tsx
 ├─ about/
 ├─ movies/
 │    ├─ page.tsx
 │    ├─ [id]/
 │    │    ├─ page.tsx
 │    │    ├─ loading.tsx
 │    │    └─ error.tsx
 │    ├─ loading.tsx
 │    └─ error.tsx
 └─ components/
      └─ MoviesSearch.tsx

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

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
