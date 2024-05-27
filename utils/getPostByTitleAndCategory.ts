import { PostData, getAllPosts } from '.';

export async function getPostByTitleAndCategory(title: string, category: string): Promise<PostData | null> {
  const posts: PostData[] = await getAllPosts();

  for (let post of posts) {
    if (post.getTitle() === title && post.getCategory() === category) {
      return post;
    }
  }

  return null;
}