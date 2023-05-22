import { useContactForm } from '../ContactForm/useContactForm';
import { GithubIcon, LikedInIcon, MailIcon, StackoverflowIcon } from '../Icons';

interface SocialNavigationProps {}
export const SocialNavigation: React.FC<SocialNavigationProps> = () => {
  const { setShowContactFormModal } = useContactForm();

  return (
    <>
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
    </>
  );
};
