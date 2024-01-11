import { Toaster } from 'react-hot-toast';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Providers } from './components/Providers';
import { ScrollToTop } from './components/ScrollToTop';
import { usePosts } from './components/hooks/usePosts';
import { Layout } from './layouts/default';
import { ErrorPage } from './pages/error';
import { HomePage } from './pages/home';

import { Post as PostComponent } from './components/Post';
import { Config } from './configuration';

function App() {
  //TODO: add context for posts OR add a local cache with timestamp before re-fetching online
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
                <Route path={Config().urls?.workDetails}>
                  {posts.map((post) => (
                    <Route
                      key={post.frontmatter.company.name}
                      path={post.frontmatter.company.name}
                      element={<PostComponent post={post} />}
                    />
                  ))}
                </Route>
              )}
              <Route
                path="contact"
                element={
                  <div>
                    TODO: add contact page which will the contact form and some
                    spill and other contact cards liek scial media etc.
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
