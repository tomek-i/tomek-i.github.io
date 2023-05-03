import fm from 'front-matter';
import { useEffect, useState } from 'react';

import { Meta, Post as PostType } from './../../types';

export const usePosts = () => {
  const [posts, setPosts] = useState<PostType[]>();
  const [isLoading, setIsLoading] = useState(false);

  const importAll = (r: any) => r.keys().map(r);

  //TODO: this folder will change as there is a todo to move the markdown files
  const markdownFiles = importAll(
    (require as any).context('./../../markdown', false, /\.md$/)
  );
  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      let results = await Promise.all<PostType[]>(
        markdownFiles.map(async (file: any) => {
          return await fetch(file.default)
            .then((res) => res.text())
            .then((content) => {
              const attributes = fm(content).attributes as Meta;
              return {
                content,
                attributes,
              };
            });
        })
      ).then((results) =>
        results.sort(
          (a, b) =>
            Number(new Date(b.attributes.job.dates.start)) -
            Number(new Date(a.attributes.job.dates.start))
        )
      );

      setIsLoading(false);
      setPosts(results);
    };
    loadContent();
    // NOTE: adding the dependecny here will kill the process
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { posts, isLoading };
};
