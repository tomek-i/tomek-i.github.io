import React, { createContext } from 'react';

import { Company, Job, Timeline } from '../types';

//TODO: refactor types
//TODO: add some documentation maybe ?

export const ShowContactFormModal = createContext<{
  showContactFormModal: boolean;
  setShowContactFormModal: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

export const JobCardContext = createContext<{
  job: Job;
  company: Company;
} | null>(null);

export const TimelineItemContext = createContext<{ timeline: Timeline } | null>(
  null
);
