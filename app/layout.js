import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Next.js Blog Toolkit',
  description: 'A beginner-friendly guide to Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-slate-900 antialiased">
        <nav className="border-b border-white/60 bg-white/80 shadow-sm backdrop-blur">
          <div className="mx-auto flex max-w-4xl gap-6 px-8 py-4">
            <Link href="/" className="text-xl font-bold tracking-tight transition-colors hover:text-amber-600">
              My Blog
            </Link>
            <Link href="/posts" className="text-slate-600 transition-colors hover:text-amber-600">
              Posts
            </Link>
            <Link href="/about" className="text-slate-600 transition-colors hover:text-amber-600">
              About
            </Link>
          </div>
        </nav>
        <div className="mx-auto max-w-4xl">
          {children}
        </div>
      </body>
    </html>
  )
}
