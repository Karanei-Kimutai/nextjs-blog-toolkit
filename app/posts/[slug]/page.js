import { posts } from '@/content/posts'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'

//Function to generate dynamic metadata for each post page based on the slug parameter. It looks up the post data and returns appropriate title and description for SEO purposes. If the post is not found, it sets a default title indicating that the post was not found.
export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function PostPage({ params }) {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  
  if (!post) {
    notFound()
  }

  return (
    <article className="p-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-8">{post.date}</p>
      
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  )
}