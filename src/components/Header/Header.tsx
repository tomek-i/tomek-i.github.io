import { SocialNavigation } from '../SocialNavigation';

interface HeadingProps {}

// TODO: this has been also used in the AboutMe component, consider extracting it into a separate file like a configuration or settings file
const profile = {
  name: 'Thomas Iwainski',
  position: 'Senior Software Engineer',
};

export const Heading: React.FC<HeadingProps> = () => {
  return (
    <header className="mb-8 site-header">
      <h1 className="site-title">{profile.name}</h1>
      <p className="-mt-6 text-2xl">{profile.position}</p>

      <div className="flex justify-center mx-auto space-x-4 text-xs">
        <SocialNavigation />
      </div>
    </header>
  );
};
