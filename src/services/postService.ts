import fm from 'front-matter';

import { Meta, Post } from '../types';

const importAll = (r: any) => r.keys().map(r);
//TODO: the following code does not support folders which makes it hard to organise content eg. work vs projects. Need to find some solutions to load projects and or abe to separate them somehow
const markdownFiles = importAll(
  (require as any).context(process.env.REACT_APP_CONTENT_PATH, false, /\.md$/)
);

const getAllPosts = async () => {
  return Promise.all<Post[]>(
    markdownFiles.map(
      async (file: any) =>
        await fetch(file.default)
          .then((res) => res.text())
          .then((content) => {
            const attributes = fm(content).attributes as Meta;
            return {
              content,
              attributes,
            };
          })
    )
  );
};

export const PostService = {
  getAllPosts,
};
