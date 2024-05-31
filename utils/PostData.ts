import fs from 'fs';
import matter from 'gray-matter';

export class PostData {
  postName: string;
  fullPath: string;
  category: string;
  title: string;
  data: any;
  content: string;
  layout: string;

  constructor(postPath: string, postName: string) {
    const fileContents = fs.readFileSync(postPath, 'utf8');
    const { data, content } = matter(fileContents);

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
    this.title = data.title;
    this.content = content;
    this.layout = data.layout;
  }

  getDate(): Date {
    return this.data.date;
  }

  getPostName(): string {
    return this.postName;
  }

  getFullPath(): string {
    return this.fullPath;
  }

  getCategory(): string {
    return this.category;
  }

  getData(): any {
    return this.data;
  }

  getTitle(): string {
    return this.data.title;
  }

  getContent(): string {
    return this.content;
  }

  getMetaData(key: string): any {
    return this.data[key];
  }

  getLayout(): string {
    return this.layout;
  }

  toJSON() {
    return {
      postName: this.getPostName(),
      fullPath: this.getFullPath(),
      category: this.getCategory(),
      title: this.getTitle(),
      content: this.getContent(),
      layout: this.getLayout(),
      data: {
        ...this.data,
        date: this.getDate().toISOString(),
      },
    };
  }
}