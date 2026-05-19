import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  thumbnail: string;
  coverImage: string;
  contentHtml: string;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    // Remove accidental .md if passed
    const realSlug = slug.replace(/\.md$/, "");

    // Create proper path
    const fullPath = path.join(postsDirectory, `${realSlug}.md`);

    // Prevent crash if file missing
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    // Read file
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Parse frontmatter
    const { data, content } = matter(fileContents);

    // Convert markdown to HTML
    const processedContent = await remark().use(html).process(content);

    const contentHtml = processedContent.toString();

    return {
      slug: realSlug,

      title: data.title || "",

      excerpt: data.excerpt || "",

      date: data.date || "",

      category: data.category || "",

      thumbnail: data.thumbnail || "",

      coverImage: data.coverImage || "",

      contentHtml,
    };
  } catch (error) {
    console.error("Error loading post:", error);

    return null;
  }
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ""),
  }));
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, "");

      return await getPostBySlug(slug);
    }),
  );

  // Remove nulls safely
  const validPosts = posts.filter((post): post is BlogPost => post !== null);

  // Sort newest first
  return validPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
