import { PostData } from '../utils';

export function getCategories(posts: PostData[]): Set<string> {
  const categorieSet: Set<string> = new Set();

  posts.forEach(post => {
    categorieSet.add(post.category);
  });

  return categorieSet
}