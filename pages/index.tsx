import Link from 'next/link'
import React from 'react'
import getStaticProps from './getStaticProps'

const HomePage: React.FC<{ posts: { id: string, title: string, content: string }[], latestPostsByCategory: any[] }> = ({ posts, latestPostsByCategory }) => {
  return (
    <div>
      {latestPostsByCategory.map(({ category, posts }: { category: string, posts: { id: string, title: string }[] }) => (
        <div key={category}>
          <h2>{category}</h2>
          <ul>
            {posts.map((post: { id: string, title: string })  => (
              <li key={post.id}>
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export { getStaticProps }
export default HomePage