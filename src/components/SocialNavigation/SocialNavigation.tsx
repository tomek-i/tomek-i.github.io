import { SocialIcon } from 'react-social-icons';

import { settings } from '../../settings';
import { useContactForm } from '../ContactForm/useContactForm';

interface SocialNavigationProps {}

export const SocialNavigation: React.FC<SocialNavigationProps> = () => {
  const { setShowContactFormModal } = useContactForm();

  return (
    <div className="p-4 space-x-4 bg-white rounded-full">
      {settings.profile.socials?.map((social) => (
        <SocialIcon url={social.url} key={social.url} />
      ))}

      {settings.profile.contact?.email && (
        <button
          onClick={() => {
            setShowContactFormModal(true);
          }}
        >
          <SocialIcon network="email" />
        </button>
      )}
    </div>
  );
};
