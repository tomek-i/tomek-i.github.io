import fm from 'front-matter';
import { useEffect, useState } from 'react';

import { desc, parseDateInAustralianFormat } from '../../utility';
import { Frontmatter, Post as PostType } from './../../types';

export const usePosts = () => {
  const [posts, setPosts] = useState<PostType<Frontmatter>[]>();
  const [isLoading, setIsLoading] = useState(false);

  const importAll = (r: any) => r.keys().map(r);

  if (!process.env.REACT_APP_CONTENT_PATH)
    throw new Error('REACT_APP_CONTENT_PATH not set');

  const markdownFiles = importAll(
    (require as any).context(process.env.REACT_APP_CONTENT_PATH, false, /\.md$/)
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

              // Create an object with the desired format options

              if (typeof frontmatter.job.dates.start === 'string') {
                frontmatter.job.dates.start = parseDateInAustralianFormat(
                  frontmatter.job.dates.start
                );
              }

              // Parse the end date if it's a string
              if (typeof frontmatter.job.dates.end === 'string') {
                frontmatter.job.dates.end = parseDateInAustralianFormat(
                  frontmatter.job.dates.end
                );
              }
              return {
                content,
                frontmatter,
              } as PostType<Frontmatter>;
            });
        })
      ).then((results) =>
        results.sort((a, b) => {
          return desc(
            a.frontmatter.job.dates.start,
            b.frontmatter.job.dates.start
          );
        })
      );

      setIsLoading(false);
      setPosts(results);
    };
    loadContent();
    // NOTE: adding the dependecny here will kill the process, probably need to useRef ?
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { posts, isLoading };
};
