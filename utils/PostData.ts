import fs from 'fs';
import matter from 'gray-matter';

export class PostData {
  postName: string;
  fullPath: string;
  category: string;
  data: any;

  constructor(postPath: string, postName: string) {
    const fileContents = fs.readFileSync(postPath, 'utf8');
    const { data } = matter(fileContents);

    if (!data.date) {
      throw new Error(`Missing date in ${postPath}`);
    }

    if (!data.categories) {
      throw new Error(`Missing categories in ${postPath}`);
    }

    this.postName = postName;
    this.category = data.categories;
    this.fullPath = postPath;
    this.data = data;
  }
}