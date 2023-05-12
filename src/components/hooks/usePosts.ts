import fm from 'front-matter';
import { useEffect, useState } from 'react';

import { desc } from '../../utility';
import { Meta, Post as PostType } from './../../types';

class TagCount {
  constructor(public tag: string, public count: number) {}
}

function countTags(posts: PostType[]): TagCount[] {
  const tagCounts = new Map<string, number>();
  for (const obj of posts) {
    for (const tag of obj.attributes.tags) {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    }
  }
  return Array.from(tagCounts.entries()).map(
    ([tag, count]) => new TagCount(tag, count)
  );
}

// TODO: use injection to allow fethcing posts from local content folder or via API
// TODO: do the same for projects

export const usePosts = () => {
  const [posts, setPosts] = useState<PostType[]>();
  const [isLoading, setIsLoading] = useState(false);

  const importAll = (r: any) => r.keys().map(r);

  //TODO: the following code does not support folders which makes it hard to organise content eg. work vs projects. Need to find some solutions to load projects and or abe to separate them somehow
  const markdownFiles = importAll(
    (require as any).context(process.env.REACT_APP_CONTENT_PATH, false, /\.md$/)
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
      ).then((results) => results.sort(desc));

      setIsLoading(false);
      setPosts(results);
      console.log({ tags: countTags(results) });
    };
    loadContent();
    // NOTE: adding the dependecny here will kill the process, probably need to useRef ?
    // TODO: follow above note and add useRef based on this article: https://brandoncc.dev/blog/how-to-deal-with-circular-dependencies-in-react-hooks/
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { posts, isLoading };
};
