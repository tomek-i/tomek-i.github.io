import { SocialIcon } from 'react-social-icons';

import { useContactForm } from '../ContactForm/useContactForm';

interface SocialNavigationProps {}

const socials = [
  {
    type: 'github',
    url: 'https://github.com/tomek-i',
  },
  {
    type: 'linkedin',
    url: 'https://www.linkedin.com/in/tomek-iw',
  },
  {
    type: 'stackoverflow',
    url: 'https://stackoverflow.com/users/4421557/tomek',
  },
];

export const SocialNavigation: React.FC<SocialNavigationProps> = () => {
  const { setShowContactFormModal } = useContactForm();

  const ICON_SIZE = 30;

  return (
    <div className="p-1 space-x-4 bg-white rounded-full mb-4">
      {socials.map((social) => (
        <SocialIcon
          url={social.url}
          target="_blank"
          rel="external nofollow noreferrer"
          key={social.url}
          style={{ height: ICON_SIZE, width: ICON_SIZE }}
          className="transition-opacity duration-300 ease-in-out opacity-75 hover:opacity-100"
        />
      ))}

      <button
        onClick={() => {
          setShowContactFormModal(true);
        }}
      >
        <SocialIcon
          network="email"
          style={{ height: ICON_SIZE, width: ICON_SIZE }}
          className="transition-opacity duration-300 ease-in-out opacity-75 hover:opacity-100"
        />
      </button>
    </div>
  );
};
