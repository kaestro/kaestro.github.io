import fs from 'fs';
import path from 'path';
import { PostData } from './PostData';

function getPostData(postPath: string, postName: string): PostData {
  const postData = new PostData(postPath, postName);
  return postData;
}

function processFileEntry(entry: fs.Dirent, currentDirectory: string, PostsData: PostData[]) {
  const fullPath = path.join(currentDirectory, entry.name);
  const postName = path.basename(entry.name, '.md');
  const postData = getPostData(fullPath, postName);
  PostsData.push(postData);
}

function getPostsInCategory(postsDirectory: string, category: string): PostData[] {
  const { queue, postsData } = initializeGetPostsInCategory(postsDirectory, category);

  while (queue.length > 0) {
    const currentDirectory = queue.shift();

    if (!currentDirectory) {
      continue;
    }

    const entries = fs.readdirSync(currentDirectory, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        queue.push(path.join(currentDirectory, entry.name));
      } else if (entry.isFile() && path.extname(entry.name) === '.md') {
        processFileEntry(entry, currentDirectory, postsData);
      }
    }
  }

  return postsData;
}

export function getAllPosts(postsDirectory: string): any[] {
  const categories = fs.readdirSync(postsDirectory);

  return categories.flatMap(category => getPostsInCategory(postsDirectory, category));
}

function initializeGetPostsInCategory(postsDirectory: string, category: string) {
  const categoryDirectory = path.join(postsDirectory, category);
  const queue = [categoryDirectory];
  const postsData: PostData[] = [];

  return { queue, postsData };
}