import fm from 'front-matter';
import { useEffect, useState } from 'react';

import {
  countTags,
  desc,
  parseDateInAustralianFormat,
  TagCount,
} from '../../utility';
import { Frontmatter, Post as PostType } from './../../types';

type Module = {
  default: string;
};

export const usePosts = () => {
  const [posts, setPosts] = useState<PostType<Frontmatter>[]>();
  const [tags, setTags] = useState<TagCount[]>();
  const [isLoading, setIsLoading] = useState(false);

  const importAll = (r: any) => r.keys().map(r);

  if (!process.env.REACT_APP_CONTENT_PATH)
    throw new Error('REACT_APP_CONTENT_PATH not set');

  const markdownFiles = importAll(
    (require as any).context(process.env.REACT_APP_CONTENT_PATH, false, /\.md$/)
  );

  const fetchMarkdownFile = async (
    file: Module
  ): Promise<PostType<Frontmatter>> => {
    const response = await fetch(file.default);
    const content = await response.text();
    const frontmatter = fm(content).attributes as Frontmatter;

    if (typeof frontmatter.job.dates.start === 'string') {
      frontmatter.job.dates.start = parseDateInAustralianFormat(
        frontmatter.job.dates.start
      );
    }

    if (typeof frontmatter.job.dates.end === 'string') {
      frontmatter.job.dates.end = parseDateInAustralianFormat(
        frontmatter.job.dates.end
      );
    }

    return {
      content,
      frontmatter,
    } as PostType<Frontmatter>;
  };

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);

      let results = await Promise.all<PostType<Frontmatter>[]>(
        markdownFiles.map(fetchMarkdownFile)
      );

      setTags(countTags(results));
      results.sort((a, b) => {
        return desc(
          a.frontmatter.job.dates.start,
          b.frontmatter.job.dates.start
        );
      });

      setIsLoading(false);
      setPosts(results);
    };

    loadContent();
    // NOTE: adding the dependency here will kill the process, probably need to useRef ?
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { posts, tags, isLoading };
};
