import {
  GithubIcon,
  LikedInIcon,
  MailIcon,
  StackoverflowIcon,
} from '../Icons/SVGs';
import { useContactForm } from '../JobCard/useCardContext';

interface HeadingProps {}
export const Heading: React.FC<HeadingProps> = () => {
  const { setShowContactFormModal, showContactFormModal } = useContactForm();

  //TODO: add from env file or config file instead
  return (
    <header className="mb-8 site-header">
      {/* TODO: make configurable through some settings file */}
      <h1 className="site-title">Thomas Iwainski</h1>
      <p className="-mt-6">Software Engineer</p>

{/* TODO: shoud be comming from a setting.json file or something like that */}
      <p className="flex justify-center mx-auto space-x-4 text-xs">
        <a rel="nofollow" href="https://github.com/tomek-i">
          <span className="cursor-pointer">
            <GithubIcon />
          </span>
        </a>
        <a rel="nofollow" href="https://www.linkedin.com/in/tomek-iw">
          <span className="cursor-pointer">
            <LikedInIcon />
          </span>
        </a>
        <a rel="nofollow" href="https://stackoverflow.com/users/4421557/tomek">
          <span className="cursor-pointer">
            <StackoverflowIcon />
          </span>
        </a>

        <button
          onClick={() => {
            console.log({ showContactFormModal });
            setShowContactFormModal(true);
          }}
        >
          <MailIcon />
        </button>
      </p>
    </header>
  );
};
