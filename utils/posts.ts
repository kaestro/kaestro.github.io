import fs from 'fs';
import { glob } from 'glob';
import path from 'path';

const postsDirectory = path.join(process.cwd(), '_posts');

export async function getAllPostIds() {
    let postParams: { params: { id: string, directory: string } }[] = [];
    try {
      const fileNames = await glob.sync('**/*.md', { cwd: postsDirectory });
      postParams = fileNames.map(fileName => {
        // Keep the directory structure in the id
        const id = fileName.replace('.md', '');
        const directory = path.dirname(fileName).replace(/\\/g, '/');
        return {
          params: {
            id: id,
            directory: directory
          }
        };
      });
    } catch (error) {
      console.error(error);
    }
    return postParams;
}

export async function getAllPostIdsAndDirectories() {
  const traverseDirectory = (dir: string): { id: string, directory: string }[] => {
    const elements = fs.readdirSync(dir);
    return elements.flatMap(el => {
      const fullPath = path.join(dir, el);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        return traverseDirectory(fullPath);
      } else if (stat.isFile() && path.extname(el) === '.md') {
        const id = path.basename(el, '.md');
        const directory = path.relative(postsDirectory, path.dirname(fullPath));
        return [{ id, directory }];
      } else {
        return [];
      }
    });
  };

  return traverseDirectory(postsDirectory);
}