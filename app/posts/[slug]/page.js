import { posts } from '@/content/posts'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'

//Function to pre-generate all post pages
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}


//Function to generate metadata for SEO
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

// The post page component
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