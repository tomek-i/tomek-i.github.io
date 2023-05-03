import { Outlet } from 'react-router-dom';

import { ContactForm } from '../components/ContactForm/ContactForm';
import { Heading } from '../components/Header/Header';
import { useContactForm } from '../components/JobCard/useCardContext';
import { Modal } from '../components/Modal/Modal';

export const Layout = () => {
  const { setShowContactFormModal, showContactFormModal } = useContactForm();

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
