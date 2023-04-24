import ReactMarkdown from 'react-markdown';
import markdown_content from '../../markdown/4mation.md';
import { useEffect, useState } from 'react';
import frontmatter from 'remark-frontmatter';
import fm from 'front-matter';
import { Meta } from '../../types';

interface FourmationProps {}
export const FourmationPage: React.FC<FourmationProps> = () => {
  const [markdown, setMarkdown] = useState('');
  const [meta, setMeta] = useState<Meta>();

  useEffect(() => {
    fetch(markdown_content)
      .then((res) => res.text())
      .then((text) => {
        setMeta(fm(text).attributes as any);
        setMarkdown(text);
      });
  }, []);

  console.log({ meta });
  return (
    <>
      case study: 4m
      <ReactMarkdown children={markdown} remarkPlugins={[frontmatter]} />
    </>
  );
};
