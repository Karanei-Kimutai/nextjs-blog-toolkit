export default function AboutPage() {
  return (
    <div className="p-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">About This Blog</h1>
      
      <div className="prose prose-lg">
        <p className="text-gray-700 mb-4">
          This blog was built as part of a beginner-friendly Next.js toolkit project. 
          The goal was to learn Next.js fundamentals while documenting the entire process.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">What I Learned</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>File-based routing with the App Router</li>
          <li>Creating dynamic routes with [slug] pattern</li>
          <li>Using layouts for consistent navigation</li>
          <li>Data fetching and displaying content</li>
          <li>Styling with Tailwind CSS</li>
          <li>Rendering markdown content</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Tech Stack</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Next.js 15 (App Router)</li>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>React Markdown</li>
        </ul>
      </div>
    </div>
  )
}