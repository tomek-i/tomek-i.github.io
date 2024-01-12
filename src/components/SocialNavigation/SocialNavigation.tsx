import { SocialIcon } from 'react-social-icons';

import { settings } from '../../settings';
import { useContactForm } from '../ContactForm/useContactForm';

interface SocialNavigationProps {}

export const SocialNavigation: React.FC<SocialNavigationProps> = () => {
  const { setShowContactFormModal } = useContactForm();
  const size = 30;

  return (
    <div className="p-1 space-x-4 bg-white rounded-full">
      {settings.profile.socials?.map((social) => (
        <SocialIcon
          url={social.url}
          key={social.url}
          style={{ height: size, width: size }}
          className="transition-opacity duration-300 ease-in-out opacity-75 hover:opacity-100"
        />
      ))}

      {settings.profile.contact?.email && (
        <button
          onClick={() => {
            setShowContactFormModal(true);
          }}
        >
          <SocialIcon
            network="email"
            style={{ height: size, width: size }}
            className="transition-opacity duration-300 ease-in-out opacity-75 hover:opacity-100"
          />
        </button>
      )}
    </div>
  );
};
