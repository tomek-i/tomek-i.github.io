import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './Routes';
import { usePosts } from './components/hooks/usePosts';
import { ShowContactFormModal } from './context';

function App() {
  const { posts } = usePosts();
  //TODO: add context for posts OR add a local cache with timestamp before re-fetching online

  //TODO: error boundary https://blog.bitsrc.io/react-error-handling-and-logging-best-practices-4444c57cd666
  const [showContactFormModal, setShowContactFormModal] = useState(false);
  return (
    <>
      <Toaster />
      <ShowContactFormModal.Provider
        value={{ showContactFormModal, setShowContactFormModal }}
      >
        {/* TODO: separate this out into routes, so it is easier to find within the app structure */}
        <BrowserRouter>{Routes(posts)}</BrowserRouter>
      </ShowContactFormModal.Provider>
    </>
  );
}

export default App;
