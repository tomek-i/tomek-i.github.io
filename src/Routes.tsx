import { Route, Routes as Router } from 'react-router-dom';

import { Post as PostComponent } from './components/Post';
import { Config } from './configuration';
import { Layout } from './layouts/default';
import { ErrorPage } from './pages/error';
import { HomePage } from './pages/home';
import { Frontmatter, Post } from './types';

export const Routes = (posts?: Post<Frontmatter>[]) => {
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
        <Route
          path="contact"
          element={
            <div>
              TODO: add contact page which will the contact form and some spill
              and other contact cards liek scial media etc.
            </div>
          }
        />

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Router>
  );
};
