import { SocialIcon } from 'react-social-icons';

import { useContactForm } from '../ContactForm/useContactForm';

interface SocialNavigationProps {}
export const SocialNavigation: React.FC<SocialNavigationProps> = () => {
  const { setShowContactFormModal } = useContactForm();

  return (
    <>
      <SocialIcon
        url="https://github.com/tomek-i"
        bgColor="transparent"
        fgColor="#fff"
        // style={{ height: 35, width: 35 }}
      />
      {/* <a rel="nofollow" href="https://github.com/tomek-i">
        <span className="cursor-pointer">
          <GithubIcon />
        </span>
      </a> */}
      <SocialIcon
        url="https://www.linkedin.com/in/tomek-iw"
        bgColor="#222"
        fgColor="#007FB1"
      />
      {/* <a rel="nofollow" href="https://www.linkedin.com/in/tomek-iw">
        <span className="cursor-pointer">
          <LikedInIcon />
        </span>
      </a> */}
      <SocialIcon
        url="https://stackoverflow.com/users/4421557/tomek"
        fgColor="#ED803D"
        bgColor="#222"
      />
      {/* <a rel="nofollow" href="https://stackoverflow.com/users/4421557/tomek">
      <span className="cursor-pointer">
      <StackoverflowIcon />
    
      </span>
      </a> */}

      <button
        onClick={() => {
          setShowContactFormModal(true);
        }}
      >
        <SocialIcon network="email" fgColor="#fff" bgColor="#222"></SocialIcon>
        {/* <MailIcon /> */}
      </button>
    </>
  );
};
