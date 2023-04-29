import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

/**
 * Returns the directory of all the posts.
 */
const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      ...(matterResult.data as Metadata),
      id,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date.getTime() < b.date.getTime()) {
      return 1;
    } else {
      return -1;
    }
  });
}

/**
 * Reads all filenames in the `posts` directory and returns
 * a list of all post ids with `.md` stripped.
 *
 * @returns {{ params: {id: string} }[]}
 */
export function getAllPostIds(): { params: { id: string } }[] {
  const fileNames = fs.readdirSync(postsDirectory);

  /**
   * Formats the string array returned from
   * fileNames into the correct format required
   * by getStaticPaths.
   *
   * @param {string} fileName - The name of the file.
   * @returns {{ params: {id: string} }}
   * @example
   * ```
   * [
   *    {
   *        params: {
   *            id: "blog-1";
   *        }
   *    }
   * ]
   * ```
   */
  const format = (fileName: string): { params: { id: string } } => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  };

  return fileNames.map(format);
}

/**
 * Returns the post data including all metadata and content.
 *
 * @param {string} id - The slug of the post.
 * @returns {Promise<Post>}
 */
export async function getPostData(id: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const content = processedContent.toString();

  return {
    content,
    ...(matterResult.data as Metadata),
  };
}
