import { SocialNavigation } from '../SocialNavigation';

interface HeadingProps {}
export const Heading: React.FC<HeadingProps> = () => {
  //TODO: it would be good if the below information is pulled from some configuration file

  return (
    <header className="mb-8 site-header">
      <h1 className="site-title">Thomas Iwainski</h1>
      <p className="-mt-6">Senior Software Engineer</p>

      <p className="flex justify-center mx-auto space-x-4 text-xs">
        <SocialNavigation />
      </p>
    </header>
  );
};
