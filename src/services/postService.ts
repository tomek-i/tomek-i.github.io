import fm from 'front-matter';

import { Frontmatter, Post } from '../types';

/**
 * Imports all modules matching the given webpack context.
 * @param r - The webpack context.
 * @returns An array of imported modules.
 */
const importAll = (r: any) => r.keys().map(r);


//NOTE: the following code does not support folders which makes it hard to organise content eg. work vs projects.
//      Need to find some solutions to load projects and or abe to separate them somehow
/**
 * Array of imported markdown files.
 * @type {Array<unknown>}
 */
const markdownFiles = importAll(
  (require as any).context(process.env.REACT_APP_CONTENT_PATH, false, /\.md$/),
);


/**
 * Retrieves all posts asynchronously.
 * @returns A promise that resolves to an array of Post objects with Frontmatter.
 */
const getAllPosts = async () => {
  return Promise.all<Post<Frontmatter>[]>(
    markdownFiles.map(
      async (file: any) =>
        await fetch(file.default)
          .then((res) => res.text())
          .then((content) => {
            const frontmatter = fm(content).attributes as Frontmatter;
            return {
              content,
              frontmatter,
            } as Post<Frontmatter>;
          }),
    ),
  );
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
