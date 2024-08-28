import { useState } from 'react';
import { ContactFormContext } from '../../context/ContactFormContext';

export interface ProvidersProps extends React.PropsWithChildren {}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const [showContactFormModal, setShowContactFormModal] = useState(false);

  return (
    <>
      <ContactFormContext.Provider
        value={{ showContactFormModal, setShowContactFormModal }}
      >
        {children}
      </ContactFormContext.Provider>
    </>
  );
};
