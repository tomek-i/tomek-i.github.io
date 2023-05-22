import { Route, Routes as Router } from 'react-router-dom';

import { Post as PostComponent } from './components/Post';
import { Layout } from './layouts/default';
import { HomePage } from './pages/home';
import { StatsPage } from './pages/stats';
import { Post } from './types';

//TODO: create components instead
export const Routes = (posts?: Post[]) => {
  return (
    <Router>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {posts && (
          <Route path="case-studies/">
            {posts.map((post) => (
              <Route
                key={post.attributes.company.name}
                path={post.attributes.company.name}
                element={<PostComponent post={post} />}
              />
            ))}
          </Route>
        )}
        <Route path="career" element={<div> TODO: add career page </div>} />
        <Route path="projects" element={<div> TODO: add projects page </div>} />
        <Route
          path="contact"
          element={
            <div>
              TODO: add contact page which will the contact form and some spill
              and other contact cards liek scial media etc.
            </div>
          }
        />
        <Route path="stats" element={<StatsPage />} />
        <Route
          path="*"
          element={
            <div>
              Ooops 404 <br /> TODO: add proper 404 page handler with some
              image, something fun.
            </div>
          }
        />
      </Route>
    </Router>
  );
};
