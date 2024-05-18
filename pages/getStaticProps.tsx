import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticProps } from 'next'
import path from 'path'
import { getAllPosts, getCategories, getLatestPostsByCategory } from '../utils'

const getStaticProps: GetStaticProps = async () => {
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

export default getStaticProps