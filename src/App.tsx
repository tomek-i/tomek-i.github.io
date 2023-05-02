import fm from 'front-matter';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Post } from './components/Post';
import { Layout } from './layouts/default';
import { HomePage } from './pages/home';
import { Post as PostType } from './types';

function App() {
  const [posts, setPosts] = useState<PostType[]>();
  const importAll = (r: any) => r.keys().map(r);
  const markdownFiles = importAll(
    (require as any).context('./markdown', false, /\.md$/)
  );

  useEffect(() => {
    const loadContent = async () => {
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
            {posts && (
              <Route path="case-studies/">
                {posts.map((post) => (
                  <Route
                    key={post.attributes.company.name}
                    path={post.attributes.company.name}
                    element={<Post post={post} />}
                  />
                ))}
              </Route>
            )}
            <Route path="*" element={<div> Ooops 404 </div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
