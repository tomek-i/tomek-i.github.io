import { Link } from 'react-router-dom';

import { useContactForm } from '../ContactForm/useContactForm';
import {
  GithubIcon,
  LikedInIcon,
  MailIcon,
  StackoverflowIcon,
} from '../Icons/SVGs';

interface HeadingProps {}
export const Heading: React.FC<HeadingProps> = () => {
  const { setShowContactFormModal } = useContactForm();

  //TODO: it would be good if the below information is pulled from some configuration file

  return (
    <header className="mb-8 site-header">
      <h1 className="site-title">Thomas Iwainski</h1>
      <p className="-mt-6">Senior Software Engineer</p>

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
            setShowContactFormModal(true);
          }}
        >
          <MailIcon />
        </button>
        <Link to={`stats`}>
          <button onClick={() => ''}>stats</button>
        </Link>
      </p>
    </header>
  );
};
