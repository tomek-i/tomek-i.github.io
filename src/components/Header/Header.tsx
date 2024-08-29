import { useEffect, useRef } from 'react';
import { SocialNavigation } from '../SocialNavigation';

interface HeadingProps {}

// TODO: this has been also used in the AboutMe component, consider extracting it into a separate file like a configuration or settings file
const profile = {
  name: 'Thomas Iwainski',
  position: 'Senior Software Engineer',
};

export const Heading: React.FC<HeadingProps> = () => {
  const socialNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (socialNavRef.current) {
        if (window.scrollY > 100) {
          // Adjust this value as needed
          socialNavRef.current.classList.add('sticky');
        } else {
          socialNavRef.current.classList.remove('sticky');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className="mb-8 site-header">
        <h1 className="site-title">{profile.name}</h1>
        <p className="-mt-6 text-2xl">{profile.position}</p>
      </header>
      <nav
        className="flex justify-center mx-auto space-x-4 text-xs"
        ref={socialNavRef}
      >
        <SocialNavigation />
      </nav>
    </>
  );
};
