import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticProps } from 'next'
import path from 'path'
import React from 'react'
import { getAllPosts, getCategories, getLatestPostsByCategory } from '../utils'

import { useRouter } from 'next/router'

const HomePage: React.FC<{ posts: { id: string, title: string, content: string, directory: string }[], latestPostsByCategory: any[] }> = ({ posts, latestPostsByCategory }) => {
  const router = useRouter();
  const categoryOrder = ["신변잡기", "개발일지", "서평", "개발이야기", "게임이야기", "Algorithm", "디자인패턴", "WeeklyPosts", "ETC"];
  const sortedCategories = [...latestPostsByCategory].sort((a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category));

  const handlePostClick = (postId: string) => {
    router.push(`/${postId}.html`); // 새 URL로 이동
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {sortedCategories.map(({ category, posts }: { category: string, posts: { id: string, title: string, directory: string }[] }) => (
        <div key={category} className="p-4 border rounded-md">
          <h2 className="text-xl font-bold">{category}</h2>
          <ul>
            {posts.map((post: { id: string, title: string, directory: string })  => (
              <li key={post.id} className="my-2">
                <a onClick={() => handlePostClick(post.id)} className="text-blue-500 hover:underline">{post.title}, {post.id}, {post.directory} </a>
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