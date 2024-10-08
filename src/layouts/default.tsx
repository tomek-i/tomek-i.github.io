import { Outlet } from 'react-router-dom';

import { createPortal } from 'react-dom';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { useContactForm } from '../components/ContactForm/useContactForm';
import { Heading } from '../components/Header/Header';
import { Modal } from '../components/Modal/Modal';
import { ScrollToTopButton } from '../components/ScrollToTop';

export const Layout = () => {
  const { setShowContactFormModal, showContactFormModal } = useContactForm();

  return (
    <>
      <Heading />

      {createPortal(
        <Modal
          show={showContactFormModal}
          setShow={setShowContactFormModal}
          title="Contact"
        >
          <ContactForm onCancelClick={() => setShowContactFormModal(false)} />
        </Modal>,
        document.body
      )}
      <div className="h-full">
        <Outlet />
      </div>
      <ScrollToTopButton />
    </>
  );
};
