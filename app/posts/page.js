import Link from 'next/link'
import { posts } from '@/content/posts'

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