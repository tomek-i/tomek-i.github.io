import fm from 'front-matter';
import { useEffect, useState } from 'react';

import { desc } from '../../utility';
import { Meta, Post as PostType } from './../../types';

class TagCount {
  constructor(public tag: string, public count: number) {}
}

function parseDateInAustralianFormat(dateString: string): Date {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };
  const formattedDateString = new Intl.DateTimeFormat('en-AU', options).format(
    new Date(dateString)
  );
  return new Date(Date.parse(formattedDateString));
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

  if (!process.env.REACT_APP_CONTENT_PATH)
    throw new Error('REACT_APP_CONTENT_PATH not set');
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

              //TODO: is there a better way, the frontmatter reads it as string and we need to change it back to dates??

              // Create an object with the desired format options
              const options: Intl.DateTimeFormatOptions = {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
              };

              if (typeof attributes.job.dates.start === 'string') {
                attributes.job.dates.start = parseDateInAustralianFormat(
                  attributes.job.dates.start
                );
              }

              // Parse the end date if it's a string
              if (typeof attributes.job.dates.end === 'string') {
                attributes.job.dates.end = parseDateInAustralianFormat(
                  attributes.job.dates.end
                );
              }
              return {
                content,
                attributes,
              };
            });
        })
      ).then((results) =>
        results.sort((a, b) => {
          return desc(a.attributes.job.dates.start, b.attributes.job.dates.end);
        })
      );

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
