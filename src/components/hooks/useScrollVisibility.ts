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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isVisible;
};
