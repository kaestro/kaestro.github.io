import { GetStaticProps } from 'next'
import path from 'path'
import React from 'react'
import { getAllPosts, getCategories, getLatestPostsByCategory, PostData } from '../utils'

import { useRouter } from 'next/router'

const HomePage: React.FC<{ postsJson: PostData[], latestPostsByCategory: { category: string, posts: PostData[] }[] }> = ({ postsJson, latestPostsByCategory }) => {
  const router = useRouter();
  const customOrder = ['신변잡기', '개발일지', '서평', '개발이야기', '게임이야기', '디자인패턴', 'Algorithm', 
    'WeeklyPosts', 'ETC'
  ]; // 사용자 정의 순서

  const sortedPosts = [...latestPostsByCategory].sort((a, b) => customOrder.indexOf(a.category) - customOrder.indexOf(b.category))
  const recommendedPosts = postsJson.filter(post => post.data && post.data.recommended);
  const postCountByCategory = postsJson.reduce((count, post) => {
    count[post.category] = (count[post.category] || 0) + 1;
    return count;
  }, {} as { [category: string]: number });

  const handlePostClick = async (category: string, postName: string) => {
    console.log(`Clicked on post ${category}, postDirectory ${postName}`)
    router.push(`/posts/${category}/${postName}`); // 새 URL로 이동
  };

  return (
    <div className="grid grid-cols-2 gap-4">

      <div className="p-4 border rounded-md">
        <h2 className="text-xl font-bold text-red-500 mb-4">추천 글</h2>
        {recommendedPosts.slice(0, 5).map((post) => (
          <div key={post.title}>
            <p onClick={() => handlePostClick(post.category, post.title)} className="text-blue-500 hover:underline cursor-pointer">{post.title}</p>
          </div>
        ))}
        <p className="mt-4 text-blue-500 hover:underline cursor-pointer">see all posts({recommendedPosts.length}) in 추천 글</p>
      </div>

      {sortedPosts.map(({ category, posts }) => (
        <div key={category} className="p-4 border rounded-md">
          <h2 className="text-xl font-bold mb-4">{category}</h2>
          {posts.map((post) => (
            <div key={post.title}>
              <p onClick={() => handlePostClick(post.category, post.title)} className="text-blue-500 hover:underline cursor-pointer">{post.title}</p>
            </div>
          ))}
          <p className="mt-4 text-blue-500 hover:underline cursor-pointer" onClick={() => router.push(`/category/${category}`)}>see all posts({postCountByCategory[category]}) in {category}</p>
        </div>
      ))}

    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), '_posts')
  const posts: PostData[] = getAllPosts(postsDirectory)

  const categoriesSet: Set<string> = getCategories(posts)
  const categories = Array.from(categoriesSet)

  const latestPostsByCategory = categories.map(category => ({
    category,
    posts: getLatestPostsByCategory(posts, category).map(post => post.toJSON()),
  }))

  const postsJson = posts.map(post => ({ ...post.toJSON() }))

  return {
    props: {
      postsJson,
      categories,
      latestPostsByCategory,
    },
  }
}

export default HomePage