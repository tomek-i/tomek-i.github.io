import { Outlet } from 'react-router-dom';

import { ContactForm } from '../components/ContactForm/ContactForm';
import { useContactForm } from '../components/ContactForm/useContactForm';
import { Heading } from '../components/Header/Header';
import { Modal } from '../components/Modal/Modal';

export const Layout = () => {
  const { setShowContactFormModal, showContactFormModal } = useContactForm();

  // TODO: add some konami code feature :-)

  return (
    <>
      <nav>
        <Heading />
      </nav>

      <Modal
        show={showContactFormModal}
        setShow={setShowContactFormModal}
        title="Contact"
      >
        <ContactForm onCancelClick={() => setShowContactFormModal(false)} />
      </Modal>
      <Outlet />
    </>
  );
};
