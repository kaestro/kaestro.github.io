import { GetStaticProps } from 'next'
import path from 'path'
import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
import { getAllPosts, getCategories, getLatestPostsByCategory, PostData } from '../utils'

import CategoryList from '@/components/CategoryList'
import HomeButton from '@/components/homeButton'
import { ScrollBottomButton, ScrollTopButton } from '@/components/scrollButtons'
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
    router.push(`/${category}/${postName}`); // 새 URL로 이동
  };

  const Layout = DefaultLayout;

  return (
    <Layout title="Kaestro's BlackSmith" subtitle='프로그래밍을 단련하고, 기록하는 공간'>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">

        <div className="p-4 border rounded-md">
          <h2 className="font-bold text-mb-4" style={{ color: 'black' }}>추천 글</h2>
          {recommendedPosts.slice(0, 5).map((post) => (
            <div key={post.title}>
              <p onClick={() => handlePostClick(post.category, post.title)} className="text-blue-500 hover:underline cursor-pointer">{post.title}</p>
            </div>
          ))}
          <p className="mt-4 text-blue-500 hover:underline cursor-pointer font-bold" onClick={() => router.push(`/recommended`)}>see all posts({recommendedPosts.length}) in 추천 글</p>
        </div>

        {sortedPosts.map(({ category, posts }) => (
          <div key={category} className="p-4 border rounded-md">
            <h2 className="font-bold mb-4">{category}</h2>
            {posts.map((post) => (
              <div key={post.title}>
                <p onClick={() => handlePostClick(post.category, post.title)} className="text-blue-500 hover:underline cursor-pointer">{post.title}</p>
              </div>
            ))}
            <p className="mt-4 text-blue-500 hover:underline cursor-pointer font-bold" onClick={() => router.push(`/${category}`)}>see all posts({postCountByCategory[category]}) in {category}</p>
          </div>
        ))}

      </div>
      <div><CategoryList categories={ customOrder } /></div>
      <div><HomeButton /></div>
      <div><ScrollBottomButton /></div>
      <div><ScrollTopButton /></div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), '_posts')
  const posts: PostData[] = getAllPosts()

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