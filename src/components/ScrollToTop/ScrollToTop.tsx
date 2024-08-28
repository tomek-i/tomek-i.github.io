import { useEffect } from 'react';
import { useLocation } from 'react-router';

export interface ScrollToTopProps extends React.PropsWithChildren {}

export const ScrollToTop: React.FC<ScrollToTopProps> = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Scroll to the element with the specified hash
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView();
      }
    } else {
      // Scroll to the top of the page
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};
