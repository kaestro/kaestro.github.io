// pages/[category].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

interface CategoryPageProps {
  posts: any[]; // Replace with your post type
  category: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ posts, category }) => {
  return (
    <div>
      <h1>Posts in category: {category}</h1>
      {/* Render your posts here */}
      {/* posts.map(post => <Post key={post.id} post={post} />) */}
    </div>
  );
};

export default CategoryPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Replace with your logic to fetch posts
  const posts = await fetchPostsForCategory(params.category);

  return {
    props: {
      posts,
      category: params.category,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Replace with your logic to fetch all categories
  const categories = await fetchAllCategories();

  const paths = categories.map((category) => ({
    params: { category },
  }));

  return { paths, fallback: false };
};

function fetchPostsForCategory(category: string | string[] | undefined) {
    throw new Error('Function not implemented.');
}
