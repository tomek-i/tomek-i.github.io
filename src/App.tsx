import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './layouts/default';
import { WarburnEstatePage } from './pages/CaseStudies/warburn-estate';
import { HomePage } from './pages/home';
import { FourmationPage } from './pages/CaseStudies/4mation';
import { BusinessActsPage } from './pages/CaseStudies/business-acts';
import { VeritechPage } from './pages/CaseStudies/veritech';
import { GapYearPage } from './pages/CaseStudies/gap-year';
import { BundeswehrPage } from './pages/CaseStudies/bundeswehr';
import { useEffect, useState } from 'react';
import fm from 'front-matter';
import { Meta } from './types';
import ReactMarkdown from 'react-markdown';
import frontmatter from 'remark-frontmatter';

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
