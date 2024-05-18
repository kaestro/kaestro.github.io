export function getLatestPostsByCategory(posts: any[], category: string) {
    return posts
        .filter(post => {
            if (post.categories) {
                const postCategories = Array.isArray(post.categories) ? post.categories : [post.categories];
                return postCategories.includes(category);
            }
            return false;
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 5);
}