import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import frontmatter from 'remark-frontmatter';

import { Post as PostType } from '../../types';

interface PostProps {
  post: PostType;
}

export const Post: React.FC<PostProps> = ({ post }) => {
  //TODO: incorporate and show some of the information stored in the attributes / meta
  return (
    <div className="container flex flex-col mx-auto">
      <div className="text-center">
        <h1>{post.attributes.company.name}</h1>
        <Link
          to={post.attributes.company.website}
          target="_blank"
          rel="nofollow"
        >
          <button className="m-0 text-xs">
            {post.attributes.company.website}
          </button>
        </Link>
      </div>
      <ReactMarkdown children={post.content} remarkPlugins={[frontmatter]} />
    </div>
  );
};
