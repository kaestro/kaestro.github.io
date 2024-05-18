export function getCategories(posts: any[]): Array<string> {
  const categorieSet: Set<string> = new Set();

  posts.forEach(post => {
    const postCategories = Array.isArray(post.categories) ? post.categories : [post.categories];
    postCategories.forEach((category: unknown) => categorieSet.add(category as string));
  });

  const allCategories = Array.from(categorieSet);
  return allCategories;
}