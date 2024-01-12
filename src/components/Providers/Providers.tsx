import { useState } from 'react';
import { Config } from '../../configuration';
import { ConfigContext } from '../../context';
import { ContactFormContext } from '../../context/ContactFormContext';

export interface ProvidersProps extends React.PropsWithChildren {}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  //TODO: error boundary https://blog.bitsrc.io/react-error-handling-and-logging-best-practices-4444c57cd666
  const [showContactFormModal, setShowContactFormModal] = useState(false);

  return (
    <>
      <ConfigContext.Provider value={{ Configuration: Config() }}>
        <ContactFormContext.Provider
          value={{ showContactFormModal, setShowContactFormModal }}
        >
          {children}
        </ContactFormContext.Provider>
      </ConfigContext.Provider>
    </>
  );
};
