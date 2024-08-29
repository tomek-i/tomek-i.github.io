import fm from 'front-matter';

import { Frontmatter, Post } from '../types';

/**
 * Imports all modules matching the given webpack context.
 * @param r - The webpack context.
 * @returns An array of imported modules.
 */
const importAll = (r: any) => r.keys().map(r);

if (!process.env.REACT_APP_CONTENT_PATH) {
  throw new Error('REACT_APP_CONTENT_PATH environment variable is not defined');
}

//NOTE: the following code does not support folders which makes it hard to organise content eg. work vs projects.
//      Need to find some solutions to load projects and or abe to separate them somehow
/**
 * Array of imported markdown files.
 * @type {Array<unknown>}
 */
const markdownFiles = importAll(
  (require as any).context(process.env.REACT_APP_CONTENT_PATH, false, /\.md$/)
);

/**
 * Retrieves all posts asynchronously.
 * @returns A promise that resolves to an array of Post objects with Frontmatter.
 */
const getAllPosts = async () => {
  try {
    const posts = await Promise.all<Post<Frontmatter>[]>(
      markdownFiles.map(async (file: any) => {
        const response = await fetch(file.default);
        const content = await response.text();
        const frontmatter = fm(content).attributes as Frontmatter;
        return {
          content,
          frontmatter,
        } as Post<Frontmatter>;
      })
    );
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

/**
 * Service for posts.
 */
export const PostService = {
  /**
   * Retrieves all posts.
   * @returns {Array} An array of posts.
   */
  getAllPosts,
};
