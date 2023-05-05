import React, { createContext } from 'react';

export const ShowContactFormModal = createContext<{
  showContactFormModal: boolean;
  setShowContactFormModal: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

