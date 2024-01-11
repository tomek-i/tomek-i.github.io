import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import frontmatter from 'remark-frontmatter';

import { config } from '../../configuration';
import { EnvironmentTypes } from '../../configuration/EnvironmentTypes';
import { Frontmatter, Post as PostType } from '../../types';

interface PostProps {
  post: PostType<Frontmatter>;
}

export const Post: React.FC<PostProps> = ({ post }) => {
  //TODO: incorporate and show some of the information stored in the attributes / meta
  return (
    <div className="container flex flex-col mx-auto cursor-default">
      <div className="text-center">
        {/* TODO: add company LOGO */}
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
      {/* TODO: add some pictures from workplace ? */}
      <ReactMarkdown children={post.content} remarkPlugins={[frontmatter]} />

      {config.environment === EnvironmentTypes.LOCAL && (
        <pre>
          <code>{JSON.stringify(post.frontmatter, null, 2)}</code>
        </pre>
      )}
    </div>
  );
};
