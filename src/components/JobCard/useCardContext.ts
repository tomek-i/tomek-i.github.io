import { createContext, useContext } from 'react';

import { Company, Job } from '../../types';


//TODO: rename file name 

export const JobCardContext = createContext<{
  job: Job;
  company: Company;
} | null>(null);

export function useJobCardContext() {
  const context = useContext(JobCardContext);
  if (!context)
    throw new Error(
      'JobCard.* component must be rendered as child of JobCard component'
    );

  return context;
}

//////////

//TODO: move to own file
export const ShowContactFormModal = createContext<{
  showContactFormModal: boolean;
  setShowContactFormModal: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

export function useContactForm() {
  const context = useContext(ShowContactFormModal);
  if (!context)
    throw new Error('must be part of ShowContactFormModal Provider');

  return context;
}
