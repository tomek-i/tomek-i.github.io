import fm from 'front-matter';
import { useEffect, useState } from 'react';

import { desc, parseDateInAustralianFormat } from '../../utility';
import { Frontmatter, Post as PostType } from './../../types';

// TODO: use injection to allow fethcing posts from local content folder or via API
// TODO: do the same for projects

export const usePosts = () => {
  const [posts, setPosts] = useState<PostType<Frontmatter>[]>();
  const [isLoading, setIsLoading] = useState(false);

  //TODO: the below code exists already in postService.ts
  const importAll = (r: any) => r.keys().map(r);

  if (!process.env.REACT_APP_CONTENT_PATH)
    throw new Error('REACT_APP_CONTENT_PATH not set');

  //TODO: the following code does not support folders which makes it hard to organise content eg. work vs projects. Need to find some solutions to load projects and or abe to separate them somehow
  const markdownFiles = importAll(
    (require as any).context(
      process.env.REACT_APP_CONTENT_PATH,
      false,
      /\.md$/,
    ),
  );

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      let results = await Promise.all<PostType<Frontmatter>[]>(
        markdownFiles.map(async (file: any) => {
          return await fetch(file.default)
            .then((res) => res.text())
            .then((content) => {
              const frontmatter = fm(content).attributes as Frontmatter;
              //TODO: is there a better way, the frontmatter reads it as string and we need to change it back to dates??

              // Create an object with the desired format options

              if (typeof frontmatter.job.dates.start === 'string') {
                frontmatter.job.dates.start = parseDateInAustralianFormat(
                  frontmatter.job.dates.start,
                );
              }

              // Parse the end date if it's a string
              if (typeof frontmatter.job.dates.end === 'string') {
                frontmatter.job.dates.end = parseDateInAustralianFormat(
                  frontmatter.job.dates.end,
                );
              }
              return {
                content,
                frontmatter,
              } as PostType<Frontmatter>;
            });
        }),
      ).then((results) =>
        results.sort((a, b) => {
          return desc(
            a.frontmatter.job.dates.start,
            b.frontmatter.job.dates.start,
          );
        }),
      );

      setIsLoading(false);
      setPosts(results);
    };
    loadContent();
    // NOTE: adding the dependecny here will kill the process, probably need to useRef ?
    // TODO: follow above note and add useRef based on this article: https://brandoncc.dev/blog/how-to-deal-with-circular-dependencies-in-react-hooks/
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { posts, isLoading };
};
