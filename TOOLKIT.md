# Next.js Blog Toolkit: A Beginner's Guide

## Table of Contents

1. [Introduction](#introduction)
2. [What Is Next.js?](#what-is-nextjs)
3. [Prerequisites](#prerequisites)
4. [Project Setup](#project-setup)
5. [Core Concepts](#core-concepts)
6. [Step-by-Step Tutorial](#step-by-step-tutorial)
7. [Prompt Effectiveness Table](#prompt-effectiveness-table)
8. [Common Errors and Solutions](#common-errors-and-solutions)
9. [Deployment Guide](#deployment-guide)
10. [Reference Resources](#reference-resources)
11. [Next Steps](#next-steps)
12. [Conclusion](#conclusion)

---

## Introduction

This toolkit was created to help beginners learn Next.js by building a real blog application. It documents the learning process, including the prompts used with AI assistance, the errors encountered, and the solutions that worked.

### What You'll Build

- A fully functional blog with multiple pages
- Dynamic routing for blog posts
- Markdown support for content
- A custom 404 page
- Loading states
- SEO-friendly metadata
- A production-ready application

**Estimated time:** 2 to 3 hours

---

## What Is Next.js?

Next.js is a React framework that makes building web applications easier. It provides:

- **File-based routing:** Folders and files automatically become routes.
- **Server Components:** Better performance by default.
- **Built-in optimization:** Automatic code splitting and image optimization.
- **Developer experience:** Hot reloading and helpful error messages.

### Why Next.js for Beginners?

- Less configuration than plain React
- Clear conventions to follow
- Excellent documentation
- Large community support

---

## Prerequisites

Before starting, you should have:

### Required Knowledge

- **JavaScript basics:** Variables, functions, arrays, and objects
- **React fundamentals:** Components, JSX, props, and basic hooks such as `useState`
- **HTML/CSS:** Basic understanding

### Required Software

- **Node.js:** Version 18.17 or higher
  - Check: `node --version`
  - Download: [nodejs.org](https://nodejs.org)
- **Code editor:** VS Code recommended
- **Terminal/command line:** Basic familiarity

### Nice to Have

- Git for version control
- A GitHub account for hosting code

---

## Project Setup

### Step 1: Check Your Environment

```bash
node --version
npm --version
```

You should see Node.js version 18.17 or higher and npm version 9 or higher.

### Step 2: Create the Next.js Project

```bash
npx create-next-app@latest nextjs-blog-toolkit
```

### Installer Options

- TypeScript? -> **No** (simpler for learning)
- ESLint? -> **Yes** (catches errors)
- Tailwind CSS? -> **Yes** (easy styling)
- `src/` directory? -> **No** (cleaner structure)
- App Router? -> **Yes** (modern Next.js)
- Customize import alias? -> **No** (the default is fine)

### Step 3: Start the Development Server

```bash
cd nextjs-blog-toolkit
npm run dev
```

Open `http://localhost:3000` to see your app.

---

## Core Concepts

### 1. File-Based Routing

In Next.js, your file structure creates your routes:

```text
app/
├── page.js              -> / (home page)
├── about/
│   └── page.js          -> /about
└── posts/
    ├── page.js          -> /posts
    └── [slug]/
        └── page.js      -> /posts/any-slug-here
```

#### Key Points

- `page.js` creates a route.
- Folders create URL paths.
- `[slug]` means a dynamic route segment that matches different values.

### 2. Layouts

Layouts wrap multiple pages with shared UI such as a navbar and footer.

```jsx
// app/layout.js - wraps all pages
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav>...</nav>
        {children} {/* Your page content goes here */}
        <footer>...</footer>
      </body>
    </html>
  )
}
```

### 3. Server vs. Client Components

**Server Components (default):**

- Run on the server
- Can fetch data directly
- Create a smaller JavaScript bundle
- Cannot use browser APIs or hooks like `useState`

**Client Components:**

- Add `"use client"` at the top of the file
- Can use hooks such as `useState` and `useEffect`
- Run in the browser
- Are needed for interactivity

```jsx
"use client"

export default function InteractiveButton() {
  const [count, setCount] = useState(0)

  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

### 4. The `Link` Component

Use `<Link>` instead of `<a>` for navigation:

```jsx
import Link from "next/link"

<Link href="/about">About</Link> // Fast client-side navigation
<a href="/about">About</a> // Full page reload
```

---

## Step-by-Step Tutorial

### Phase 1: Basic Structure

#### Step 1: Modify the Home Page

**File:** `app/page.js`

```jsx
export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">My Next.js Blog</h1>
      <p className="text-gray-600">Welcome to my beginner-friendly blog!</p>
    </main>
  )
}
```

##### What You Learned

- How to edit the home page
- Tailwind CSS utility classes
- Hot reloading, so changes appear instantly

#### Step 2: Add a Navigation Layout

**File:** `app/layout.js`

```jsx
import Link from "next/link"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="border-b bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-8 py-4 flex gap-6">
            <Link href="/" className="font-bold hover:text-blue-600">
              My Blog
            </Link>
            <Link href="/posts" className="hover:text-blue-600">
              Posts
            </Link>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
          </div>
        </nav>
        <div className="max-w-4xl mx-auto">{children}</div>
      </body>
    </html>
  )
}
```

##### What You Learned

- The root layout wraps all pages
- Navigation appears everywhere
- The `Link` component enables fast navigation

### Phase 2: Creating Routes

#### Step 3: Create the Posts Page

**Create:** `app/posts/page.js`

```jsx
export default function PostsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">All Blog Posts</h1>
    </div>
  )
}
```

##### What You Learned

- Creating a new route by making a folder and `page.js`
- `app/posts/page.js` maps to the `/posts` route
- File-based routing in action

#### Step 4: Add Blog Post Data

**Create:** `content/posts.js`

```javascript
export const posts = [
  {
    id: 1,
    slug: "getting-started-nextjs",
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js",
    date: "2024-01-15",
    content: `Next.js is a powerful React framework...

## Why Next.js?

- File-based routing
- Server and client components
- Built-in optimization`,
  },
  // ... more posts
]
```

##### What You Learned

- How to organize data in a separate file
- How to use markdown syntax in content
- How arrays of objects hold structured data

#### Step 5: Display the Posts List

**Update:** `app/posts/page.js`

```jsx
import Link from "next/link"
import { posts } from "@/content/posts"

export default function PostsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">All Blog Posts</h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.id} className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/posts/${post.slug}`} className="hover:text-blue-600">
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500 mb-3">{post.date}</p>
            <p className="text-gray-700">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
```

##### What You Learned

- Importing data with the `@/` alias
- Using `.map()` to loop through posts
- Creating links to dynamic routes
- Adding the `key` prop for React lists

### Phase 3: Dynamic Routes

#### Step 6: Create Dynamic Post Pages

**Create:** `app/posts/[slug]/page.js`

```jsx
import { posts } from "@/content/posts"
import { notFound } from "next/navigation"

export default async function PostPage({ params }) {
  // Await params (required in Next.js 15+)
  const { slug } = await params

  // Find the matching post
  const post = posts.find((p) => p.slug === slug)

  // Show 404 if the post does not exist
  if (!post) {
    notFound()
  }

  return (
    <article className="p-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-8">{post.date}</p>
      <div className="prose">{post.content}</div>
    </article>
  )
}
```

##### What You Learned

- `[slug]` creates a dynamic route segment
- The `params` object contains URL values
- `await params` is required in Next.js 15+
- `notFound()` shows the 404 page
- Server components can be `async`

#### Step 7: Add Markdown Rendering

**Install:** `react-markdown`

```bash
npm install react-markdown
```

**Update:** `app/posts/[slug]/page.js`

```jsx
import ReactMarkdown from "react-markdown"

// ... same code as before, but update the return:

return (
  <article className="p-8 max-w-3xl">
    <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
    <p className="text-gray-500 mb-8">{post.date}</p>
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  </article>
)
```

##### What You Learned

- Installing npm packages
- Using third-party React components
- Rendering markdown with proper formatting

### Phase 4: Polish and Features

#### Step 8: Create the About Page

**Create:** `app/about/page.js`

```jsx
export default function AboutPage() {
  return (
    <div className="p-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">About This Blog</h1>
      <div className="prose">
        <p>This blog was built to learn Next.js fundamentals...</p>
      </div>
    </div>
  )
}
```

#### Step 9: Add a Custom 404 Page

**Create:** `app/not-found.js`

```jsx
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-4">Page Not Found</h2>
        <Link href="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
```

##### What You Learned

- The special `not-found.js` file handles 404s
- Next.js supports automatic error page customization

#### Step 10: Add Loading States

**Create:** `app/posts/loading.js`

```jsx
export default function Loading() {
  return (
    <div className="p-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-8"></div>
        <div className="space-y-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-white p-6 rounded-lg border">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
```

##### What You Learned

- The special `loading.js` file shows while the page loads
- Skeleton screens improve perceived performance
- Tailwind's `animate-pulse` utility works well for loading states

#### Step 11: Add SEO Metadata

**Update:** `app/posts/[slug]/page.js`

Add this function before the `PostPage` component:

```jsx
export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return { title: "Post Not Found" }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}
```

##### What You Learned

- `generateMetadata` sets the page title and description
- Better SEO and browser tab titles
- Dynamic metadata per page

#### Step 12: Optimize Build Performance

**Update:** `app/posts/[slug]/page.js`

Add this function near the top of the file:

```jsx
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
```

##### What You Learned

- Pre-generating post pages at build time
- Improving load performance for users
- Using static site generation (SSG)

### Phase 5: Production Ready

#### Step 13: Build for Production

```bash
npm run build
```

This compiles your app, optimizes the code, and prepares it for deployment.

##### What You Learned

- `npm run build` creates a production build
- Next.js shows build analytics
- Route information and file sizes are included

---

## Prompt Effectiveness Table

| Prompt | Effective? | Notes |
| --- | --- | --- |
| "How do I create a Next.js project?" | Yes, partially | The command worked, but the installer prompts varied slightly from the prediction. Always read the actual prompts. |
| "How do I modify the Next.js home page?" | Yes | Hot reload worked as expected. Changes appeared instantly. |
| "How do I create a new route/page in Next.js?" | Yes | Folder structure creates routes automatically. It becomes intuitive quickly. |
| "How do I display a list of items from data in Next.js?" | Yes | The import worked, `.map()` rendered correctly, and the `@/` alias was useful. |
| "I'm getting a Turbopack error in Next.js" | Yes | Clearing the `.next` cache and restarting fixed the crash. |
| "Dynamic route showing 404 in Next.js" | Yes | In Next.js 15+, `params` is a Promise and must be awaited. |
| "How do I show recent posts on the home page in Next.js?" | Yes | The same data source can be imported in multiple pages, and `.slice()` helps grab subsets. |
| "How do I render markdown content in Next.js?" | Yes | The `react-markdown` library worked immediately, and the `prose` class gave the content readable typography. |
| "How do I create a custom 404 page in Next.js?" | Yes | `not-found.js` in the `app` directory creates a custom 404 page. |
| "How do I add a footer to my Next.js layout?" | Yes | Adding the footer inside the root layout made it appear on all pages. |
| "How do I build my Next.js app for production?" | Yes | `npm run build` successfully compiled the app. |

### Key Learnings from Prompts

- **Be specific:** "Dynamic route 404" is better than "it's not working."
- **Include error messages:** Copy and paste exact errors for better help.
- **Verify assumptions:** Tools update frequently, and installer prompts can differ.
- **Context matters:** Mentioning the Next.js version helps get more accurate answers.

---

## Common Errors and Solutions

### Error 1: Turbopack Panic or Crash

**Symptoms**

`FATAL: An unexpected Turbopack error occurred`

**Solution**

```bash
rm -rf .next
npm run dev
```

**Why it happens**

Cache corruption or import path issues.

### Error 2: Dynamic Route Returns 404

**Symptoms**

- The route structure looks correct: `app/posts/[slug]/page.js`
- All posts still return 404

**Solution**

In Next.js 15+, `params` is a Promise. Change this:

```jsx
// Old way (does not work in Next.js 15+)
export default function PostPage({ params }) {
  const post = posts.find((p) => p.slug === params.slug)
```

To this:

```jsx
// New way (Next.js 15+)
export default async function PostPage({ params }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
```

**Key changes**

- Add `async` to the function
- `await params` before using it

### Error 3: Module Not Found with `@/` Import

**Symptoms**

`Module not found: Can't resolve '@/content/posts'`

**Solution**

Check that `jsconfig.json` exists with:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

This should be created automatically by `create-next-app`.

### Error 4: Styles Not Loading

**Symptoms**

- Tailwind classes do not work
- The page has no styling

**Solution**

1. Check that `app/globals.css` imports Tailwind:

```css
@import "tailwindcss";
```

2. Check that `tailwind.config.mjs` includes your files:

```js
content: ["./app/**/*.{js,ts,jsx,tsx}"]
```

3. Restart the dev server with `Ctrl+C`, then run `npm run dev`.

### Error 5: Hot Reload Not Working

**Solution**

1. Restart the dev server.
2. Check for syntax errors in your code.
3. Clear the browser cache.
4. Delete the `.next` folder and restart.

---

## Deployment Guide

### Deploy to Vercel

Vercel is the easiest way to deploy Next.js apps because it is built by the Next.js team.

#### Step 1: Create a GitHub Repository

```bash
git init
git add .
git commit -m "Initial commit"
```

Create a new repository on GitHub, then run:

```bash
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

#### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com).
2. Sign up with GitHub.
3. Click "New Project."
4. Import your repository.
5. Click "Deploy."

Vercel automatically:

- Detects Next.js
- Runs the build
- Deploys your app
- Gives you a URL

#### Step 3: Automatic Deployments

Every push to GitHub automatically redeploys your site.

### Alternative: Deploy to Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Install the Next.js plugin

---

## Reference Resources

### Official Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

### Learning Resources

- [Next.js Learn Course](https://nextjs.org/learn)
- [React Markdown Docs](https://github.com/remarkjs/react-markdown)

### Tools

- [Node.js Download](https://nodejs.org)
- [VS Code](https://code.visualstudio.com)
- [Vercel](https://vercel.com)

### Community

- [Next.js Discord](https://discord.gg/nextjs)
- [Next.js GitHub](https://github.com/vercel/next.js)

---

## Next Steps

### Extend Your Blog

1. Add search to filter posts by title or content.
2. Add categories or tags to organize posts by topic.
3. Add comments with a service such as Disqus.
4. Add analytics with Vercel Analytics.
5. Connect a CMS such as Contentful or Sanity.
6. Add images with the Next.js `Image` component.
7. Add dark mode with a theme toggle.
8. Add an RSS feed so readers can subscribe.

### Keep Learning

- Build a portfolio site
- Try API routes for backend functionality
- Learn TypeScript
- Explore Next.js authentication
- Try database integration with PostgreSQL or MongoDB

---

## Conclusion

You built a complete Next.js blog and learned:

- File-based routing
- Server and client components
- Dynamic routes
- Layouts and navigation
- Data fetching and display
- Markdown rendering
- SEO optimization
- Production builds
- Deployment

**Most importantly:** You learned how to learn. The prompt effectiveness table shows how to use AI tools more effectively while building projects.

### Questions or Issues?

- Check the Common Errors and Solutions section
- Search the Next.js docs
- Ask in the Next.js Discord
- Review your prompt effectiveness table to see what worked
