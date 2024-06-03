import { PostData } from './PostData';
import { getAllPosts } from './getAllPosts';

export const getAdjacentPosts = async (currentTitle: string, currentCategory: string): Promise<{ prev: any | null, next: any | null }> => {
  const posts: PostData[] = await getAllPosts();
  const sameCategoryPosts = posts.filter(post => post.getCategory() === currentCategory);
  const currentIndex = sameCategoryPosts.findIndex(post => post.getTitle() === currentTitle);

  const prevPost = currentIndex > 0 ? { title: sameCategoryPosts[currentIndex - 1].getTitle(), category: sameCategoryPosts[currentIndex - 1].getCategory() } : null;
  const nextPost = currentIndex < sameCategoryPosts.length - 1 ? { title: sameCategoryPosts[currentIndex + 1].getTitle(), category: sameCategoryPosts[currentIndex + 1].getCategory() } : null;

  return { prev: prevPost, next: nextPost };
};