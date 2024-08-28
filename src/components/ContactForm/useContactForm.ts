import { useContext } from 'react';

import { ContactFormContext } from '../../context/ContactFormContext';

export function useContactForm() {
  const context = useContext(ContactFormContext);
  if (!context)
    throw new Error('must be part of ShowContactFormModal Provider');

  return context;
}
