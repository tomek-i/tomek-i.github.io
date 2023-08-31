import { Route, Routes as Router } from 'react-router-dom';

import { Post as PostComponent } from './components/Post';
import { Config } from './configuration';
import { Layout } from './layouts/default';
import { ErrorPage } from './pages/error';
import { HomePage } from './pages/home';
import { StatsPage } from './pages/stats';
import { Frontmatter, Post } from './types';

//TODO: create components instead
export const Routes = (posts?: Post<Frontmatter>[]) => {
  const isDev = (process.env.NODE_ENV ?? 'production') !== 'production';
  return (
    <Router>
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

        {isDev && (
          <>
            <Route path="career" element={<div> TODO: add career page </div>} />
            <Route
              path={Config().urls?.projectDetails}
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
            <Route path="stats" element={<StatsPage />} />
          </>
        )}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Router>
  );
};
