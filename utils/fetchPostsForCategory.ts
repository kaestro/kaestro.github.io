import { PostData } from "./PostData";
import { getAllPosts } from "./getAllPosts";

async function fetchPostsForCategory(category: string): Promise<PostData[]> {
  const posts: PostData[] = getAllPosts();
  const postsByCategory = posts.filter((post) => post.category === category);
  return postsByCategory;
}

export default fetchPostsForCategory;