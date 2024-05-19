import fs from 'fs';
import { glob } from 'glob';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

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
            id,
            directory
          }
        };
      });
    } catch (error) {
      console.error(error);
    }
    return postParams;
}
export async function getPostData(directory: string, id: string) {
  // Construct the file path
  const fullPath = path.join(postsDirectory, id + '.md');

  console.log("HELLO FULLPATH")
  console.log(fullPath)

  if (!fs.existsSync(fullPath)) {
    throw new Error(`File not found: ${fullPath}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id, ensuring dates are strings
  return {
    id,
    contentHtml,
    directory,
    ...matterResult.data,
    date: matterResult.data.date ? matterResult.data.date.toISOString() : null
  };
}