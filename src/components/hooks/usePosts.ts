import fm from 'front-matter';
import { useEffect, useState } from 'react';

import { Post as PostType } from './../../types';

export const usePosts = () => {
  const [posts, setPosts] = useState<PostType[]>();
  const [isLoading, setIsLoading] = useState(false);

  const importAll = (r: any) => r.keys().map(r);
  const markdownFiles = importAll(
    (require as any).context('./../../markdown', false, /\.md$/)
  );
  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      const results = await Promise.all<PostType[]>(
        markdownFiles.map(async (file: any) => {
          return await fetch(file.default)
            .then((res) => res.text())
            .then((content) => {
              const attributes = fm(content).attributes;
              return {
                content,
                attributes,
              };
            });
        })
      );
      setIsLoading(false);
      setPosts(results);
    };
    loadContent();
  }, []); //NOTE: adding the dependecny here will kill the process

  return { posts, isLoading };
};
