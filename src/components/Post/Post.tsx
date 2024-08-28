import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import frontmatter from 'remark-frontmatter';

import { Frontmatter, Post as PostType } from '../../types';

interface PostProps {
  post: PostType<Frontmatter>;
}

export const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="container flex flex-col mx-auto cursor-default">
      <div className="text-center">
        <h1 className="uppercase ">{post.frontmatter.company.name}</h1>
        <Link
          to={post.frontmatter.company.website}
          target="_blank"
          rel="nofollow"
        >
          <button className="m-0 text-xs">
            {post.frontmatter.company.website
              ?.replace('https://', '')
              ?.replace('http://', '')}
          </button>
        </Link>
      </div>
      <ReactMarkdown children={post.content} remarkPlugins={[frontmatter]} />

      <pre>
        <code>{JSON.stringify(post.frontmatter, null, 2)}</code>
      </pre>
    </div>
  );
};
