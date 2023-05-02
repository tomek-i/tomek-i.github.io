import fm from 'front-matter';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import frontmatter from 'remark-frontmatter';

import { Layout } from './layouts/default';
import { HomePage } from './pages/home';
import { Meta } from './types';

interface Post {
  content: string;
  attributes: Meta;
}

function App() {
  const [posts, setPosts] = useState<Post[]>();
  const importAll = (r: any) => r.keys().map(r);
  const markdownFiles = importAll(
    (require as any).context('./markdown', false, /\.md$/)
  );

  useEffect(() => {
    const loadContent = async () => {
      const results = await Promise.all<Post[]>(
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
      setPosts(results);
    };
    loadContent();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="case-studies/">
              {posts?.map((post) => (
                <Route
                  key={post.attributes.company.name}
                  path={post.attributes.company.name}
                  element={
                    <ReactMarkdown
                      children={post.content}
                      remarkPlugins={[frontmatter]}
                    />
                  }
                />
              ))}
              {/* <Route path="4mation" element={<FourmationPage />} />
              <Route path="warburn-estate" element={<WarburnEstatePage />} />
              <Route path="veritech" element={<VeritechPage />} />
              <Route path="gap-year" element={<GapYearPage />} />
              <Route path="business-acts" element={<BusinessActsPage />} />
              <Route path="bundeswehr" element={<BundeswehrPage />} /> */}
            </Route>
            <Route path="*" element={<div> Ooops 404 </div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
