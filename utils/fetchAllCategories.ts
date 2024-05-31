import { getAllPosts } from "./getAllPosts";
import { PostData } from "./PostData";

async function fetchAllCategories() {
  const posts: PostData[] = getAllPosts();
  let cateogiresSet: Set<string> = new Set();
  posts.forEach((post) => {
      cateogiresSet.add(post.category);
  });

  return Array.from(cateogiresSet);
}

export default fetchAllCategories;