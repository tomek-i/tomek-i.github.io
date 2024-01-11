import { useState } from 'react';
import { ShowContactFormModal } from '../../context';

export interface ProvidersProps extends React.PropsWithChildren {}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  //TODO: error boundary https://blog.bitsrc.io/react-error-handling-and-logging-best-practices-4444c57cd666
  const [showContactFormModal, setShowContactFormModal] = useState(false);

  return (
    <>
      <ShowContactFormModal.Provider
        value={{ showContactFormModal, setShowContactFormModal }}
      >
        {children}
      </ShowContactFormModal.Provider>
    </>
  );
};
