import { useContext } from 'react';

import { ShowContactFormModal } from '../../context';

export function useContactForm() {
  const context = useContext(ShowContactFormModal);
  if (!context)
    throw new Error('must be part of ShowContactFormModal Provider');

  return context;
}
