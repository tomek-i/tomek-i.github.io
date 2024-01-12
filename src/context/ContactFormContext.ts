import React, { createContext } from 'react';

export const ContactFormContext = createContext<{
  showContactFormModal: boolean;
  setShowContactFormModal: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);
