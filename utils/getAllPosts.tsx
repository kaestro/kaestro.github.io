import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export function getAllPosts(postsDirectory: string): any[] {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.flatMap(fileName => {
    const fullPath = path.join(postsDirectory, fileName);
    const stat = fs.statSync(fullPath);

    // If the item is a directory, recursively call getAllPosts
    if (stat.isDirectory()) {
      return getAllPosts(fullPath);
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // Extract the directory from the file path
    const directory = path.relative(path.dirname(postsDirectory), path.dirname(fullPath));

    return [{
      id: fileName.replace(/\.md$/, ''),
      directory: directory, // Add the directory to the returned object
      fullPath: fullPath // Add the full path to the returned object
    }];
  });
}