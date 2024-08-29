import { Toaster } from 'react-hot-toast';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Post as PostComponent } from './components/Post';
import { Providers } from './components/Providers';
import { ScrollToTop } from './components/ScrollToTop';
import { usePosts } from './components/hooks/usePosts';
import { Layout } from './layouts/default';
import { ErrorPage } from './pages/error';
import { HomePage } from './pages/home';

function App() {
  const { posts, isLoading } = usePosts();

  if (isLoading) return <></>;

  return (
    <>
      <Toaster />
      <Providers>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              {posts && (
                <Route path={'career'}>
                  {posts.map((post) => (
                    <Route
                      key={post.frontmatter.company.name}
                      // TODO: we should create a util functio nthat slugifies the company name
                      path={post.frontmatter.company.name.toLowerCase()}
                      element={<PostComponent post={post} />}
                    />
                  ))}
                </Route>
              )}
              <Route
                path="contact"
                element={
                  <div>
                    add contact page which will the contact form and some spill
                    and other contact cards liek scial media etc.
                  </div>
                }
              />

              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </Router>
      </Providers>
    </>
  );
}

export default App;
