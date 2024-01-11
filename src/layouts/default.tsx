import { Outlet } from 'react-router-dom';

import { createPortal } from 'react-dom';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { useContactForm } from '../components/ContactForm/useContactForm';
import { Heading } from '../components/Header/Header';
import { Modal } from '../components/Modal/Modal';
import { ThemeModeToggle } from '../components/ThemeModeToggle';

export const Layout = () => {
  const { setShowContactFormModal, showContactFormModal } = useContactForm();

  // TODO: add some konami code feature :-)
  // TODO: render modal at portal of bottom of page

  return (
    <>
      <ThemeModeToggle />
      <nav>
        <Heading />
      </nav>

      {createPortal(
        <Modal
          show={showContactFormModal}
          setShow={setShowContactFormModal}
          title="Contact"
        >
          <ContactForm onCancelClick={() => setShowContactFormModal(false)} />
        </Modal>,
        document.body,
      )}
      <Outlet />
    </>
  );
};
