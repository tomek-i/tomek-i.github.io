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

// Declare the __WebpackModuleApi namespace if it's not available
declare namespace __WebpackModuleApi {
  interface RequireContext {
    (id: string): any;
    keys(): string[];
    resolve(id: string): string;
    id: string;
  }
}
// Declare the NodeRequire interface with the context method
interface NodeRequire {
  context: (
    path: string,
    deep?: boolean,
    filter?: RegExp
  ) => __WebpackModuleApi.RequireContext;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const usePosts = () => {
  const [posts, setPosts] = useState<PostType<Frontmatter>[]>();
  const [tags, setTags] = useState<TagCount[]>();
  const [isLoading, setIsLoading] = useState(false);

  if (!process.env.REACT_APP_CONTENT_PATH)
    throw new Error('REACT_APP_CONTENT_PATH not set');

  type ImportAllFunction = (r: __WebpackModuleApi.RequireContext) => Module[];

  const importAll: ImportAllFunction = (r) => r.keys().map(r);

  const markdownFiles = importAll(
    (require as unknown as NodeRequire).context(
      process.env.REACT_APP_CONTENT_PATH,
      false,
      /\.md$/
    )
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

      // Create an array of promises
      const promises = markdownFiles.map(fetchMarkdownFile);

      // Wait for all promises to resolve
      let results = await Promise.all(promises);

      await delay(3000);
      const unsortedTags = countTags(results);

      setTags(unsortedTags?.sort((a, b) => b.count - a.count));

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
