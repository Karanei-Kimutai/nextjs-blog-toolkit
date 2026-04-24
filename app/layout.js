import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Next.js Blog Toolkit',
  description: 'A beginner-friendly guide to Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-8 py-4">
            <h2 className="text-xl font-bold">My Blog</h2>
          </div>
        </nav>
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  )
}