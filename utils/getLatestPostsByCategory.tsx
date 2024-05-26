import { PostData } from "../utils";

export function getLatestPostsByCategory(posts: PostData[], category: string) {
    const latestPosts = posts
        .filter(post => post.category === category)
        .sort((a, b) => new Date(b.getDate()).getTime() - new Date(a.getDate()).getTime())
        .slice(0, 5);
    
    return latestPosts;
}