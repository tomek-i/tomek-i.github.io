import { useScrollVisibility } from '../hooks/useScrollVisibility';

const SCROLL_THRESHOLD = 20; // Percentage

export const ScrollToTopButton: React.FC = () => {
  const isVisible = useScrollVisibility(SCROLL_THRESHOLD);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
<button
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-5 right-5 p-2.5 text-lg cursor-pointer z-50 bg-blue-500 text-white rounded transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <span aria-hidden="true">Top</span>
  );
};
