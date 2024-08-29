import { useEffect, useState } from 'react';

export const useScrollVisibility = (threshold: number) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrolledPercentage =
        (scrollTop / (documentHeight - windowHeight)) * 100;

      setIsVisible(scrolledPercentage > threshold);
    };

    const debouncedHandleScroll = debounce(handleScroll, 100);
    window.addEventListener('scroll', debouncedHandleScroll);
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, [threshold]);

  return isVisible;
};

function debounce(handleScroll: () => void, delay: number) {
  let timeoutId: number | undefined;

  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(() => {
      handleScroll();
    }, delay);
  };
}
