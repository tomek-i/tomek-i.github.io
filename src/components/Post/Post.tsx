import ReactMarkdown from 'react-markdown';
import frontmatter from 'remark-frontmatter';

import { Post as PostType } from '../../types';

interface PostProps {
  post: PostType;
}
export const Post: React.FC<PostProps> = ({ post }) => {
  //TODO: incorporate some of the information stored in the attributes / meta
  return (
    <>
      <ReactMarkdown children={post.content} remarkPlugins={[frontmatter]} />
    </>
  );
};
