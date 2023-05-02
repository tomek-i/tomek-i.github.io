import ReactMarkdown from 'react-markdown';
import frontmatter from 'remark-frontmatter';

import { Post as PostType } from '../../types';

interface PostProps {
  post: PostType;
}
export const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <>
      <span className="text-xl bg-red-400">
        {JSON.stringify(post.attributes)}
      </span>
      <ReactMarkdown children={post.content} remarkPlugins={[frontmatter]} />
    </>
  );
};
