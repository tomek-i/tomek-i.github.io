import { useEffect } from 'react';
import { useLocation } from 'react-router';

export interface ScrollToTopProps extends React.PropsWithChildren {}

/**
 * A component that scrolls to the element with the id of the `hash` property
 * of the current location, or to the top of the page if no hash is present.
 *
 * This component is intended to be used with the `basename` property of the
 * `Router` component from `react-router-dom` to handle client-side routing.
 *
 * @example
 * import { BrowserRouter } from 'react-router-dom';
 * import { ScrollToTop } from './ScrollToTop';
 *
 * const App = () => {
 *   return (
 *     <BrowserRouter basename="/my-app">
 *       <ScrollToTop />
 *       <Outlet />
 *     </BrowserRouter>
 *   );
 * };
 */
export const ScrollToTop: React.FC<ScrollToTopProps> = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView();
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};
