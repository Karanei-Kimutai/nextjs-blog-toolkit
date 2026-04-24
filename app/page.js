import Link from 'next/link'
import { posts } from '@/content/posts'

export default function Home() {
  // Get the 2 most recent posts
  const recentPosts = posts.slice(0, 2)
  
  return (
    <main className="min-h-screen p-8">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-xl text-gray-600 mb-6">
          A beginner-friendly Next.js blog built from scratch
        </p>
        <Link 
          href="/posts" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block"
        >
          View All Posts
        </Link>
      </div>

      <section>
        <h2 className="text-3xl font-bold mb-6">Recent Posts</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {recentPosts.map((post) => (
            <article key={post.id} className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold mb-2">
                <Link href={`/posts/${post.slug}`} className="hover:text-blue-600">
                  {post.title}
                </Link>
              </h3>
              <p className="text-sm text-gray-500 mb-3">{post.date}</p>
              <p className="text-gray-700">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}