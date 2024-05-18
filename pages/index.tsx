import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import path from 'path'
import React from 'react'
import { getAllPosts, getCategories, getLatestPostsByCategory } from '../utils'

const HomePage: React.FC<{ posts: { id: string, title: string, content: string }[], latestPostsByCategory: any[] }> = ({ posts, latestPostsByCategory }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {latestPostsByCategory.map(({ category, posts }: { category: string, posts: { id: string, title: string }[] }) => (
        <div key={category} className="p-4 border rounded-md">
          <h2 className="text-xl font-bold">{category}</h2>
          <ul>
            {posts.map((post: { id: string, title: string })  => (
              <li key={post.id} className="my-2">
                <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), '_posts')
  const filePaths = getAllPosts(postsDirectory)

  const posts = filePaths.flatMap(filePath => {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    const filename = path.basename(filePath)

    return [{
      id: filename.replace(/\.mdx?$|\.markdown$/, ''),
      ...data,
      date: data.date instanceof Date ?data.date.toISOString() :data.date, // Date 객체를 ISO 문자열로 변환
    }]
  })

  const categories = getCategories(posts)

  const latestPostsByCategory = categories.map(category => ({
    category,
    posts: getLatestPostsByCategory(posts, category),
  }))

  return {
    props: {
      posts,
      categories,
      latestPostsByCategory,
    },
  }
}

export default HomePage