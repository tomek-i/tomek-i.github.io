import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Post } from './components/Post';
import { usePosts } from './components/hooks/usePosts';
import { ShowContactFormModal } from './context';
import { Layout } from './layouts/default';
import { HomePage } from './pages/home';

function App() {
  const { posts } = usePosts();
  //TODO: add context for posts OR add a local cache with timestamp before re-fetching online

  //TODO: error boundary https://blog.bitsrc.io/react-error-handling-and-logging-best-practices-4444c57cd666
  const [showContactFormModal, setShowContactFormModal] = useState(false);
  return (
    <>
      <ShowContactFormModal.Provider
        value={{ showContactFormModal, setShowContactFormModal }}
      >
        {/* TODO: separate this out into routes, so it is easier to find within the app structure */}
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
              <Route
                path="career"
                element={<div> TODO: add career page </div>}
              />
              <Route
                path="projects"
                element={<div> TODO: add projects page </div>}
              />
              <Route
                path="contact"
                element={
                  <div>
                    TODO: add contact page which will the contact form and some
                    spill and other contact cards liek scial media etc.
                  </div>
                }
              />
              <Route path="*" element={<div> Ooops 404 </div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ShowContactFormModal.Provider>
    </>
  );
}

export default App;
