import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticProps } from 'next'
import path from 'path'
import React from 'react'

function getCategories(posts: any[]) {
  const categories = new Set();

  posts.forEach(post => {
    const postCategories = Array.isArray(post.categories) ? post.categories : [post.categories];
    postCategories.forEach((category: string) => categories.add(category));
  });

  return Array.from(categories);
}

function getLatestPostsByCategory(posts: any[], category: string) {
  return posts
    .filter(post => {
      if (post.data && post.data.categories) {
        const postCategories = Array.isArray(post.data.categories) ? post.data.categories : [post.data.categories];
        return postCategories.includes(category);
      }
      return false;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);
}

// 디렉토리를 재귀적으로 탐색하여 모든 파일의 경로를 반환하는 함수
function getAllFiles(dirPath: string, arrayOfFiles: string[] = []) {
  const files = fs.readdirSync(dirPath)

  files.forEach(file => {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(dirPath, file))
    }
  })

  return arrayOfFiles
}

export const getStaticProps: GetStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), '_posts')
  const filePaths = getAllFiles(postsDirectory)

  const posts = filePaths.flatMap(filePath => {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    const filename = path.basename(filePath)

    return [{
      id: filename.replace(/\.mdx?$|\.markdown$/, ''),
      ...data,
      date: data.date instanceof Date ? data.date.toISOString() : data.date, // Date 객체를 ISO 문자열로 변환
      content,
    }]
  })

  const categories = getCategories(posts)
  console.log(categories)

  /*
  const latestPostsByCategory = categories.map(category => ({
    category,
    posts: getLatestPostsByCategory(posts, category),
  }))
  */

  return {
    props: {
      posts,
      // latestPostsByCategory,
    },
  }
}
const HomePage: React.FC<{ posts: { id: string, title: string, content: string }[], latestPostsByCategory: any[] }> = ({ posts, latestPostsByCategory }) => {
  return (
    /*
    <div>
      {latestPostsByCategory.map(({ category, posts }) => (
        <div key={category}>
          <h2>{category}</h2>
          <ul>
            {posts.map(post => (
              <li key={post.id}>
                <Link href={`/posts/${post.id}`}>
                  <a>{post.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    */
   <div></div>
  )
}

export default HomePage