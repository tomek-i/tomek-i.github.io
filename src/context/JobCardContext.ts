import { createContext } from 'react';
import { Company, Job } from '../types';

export const JobCardContext = createContext<{
  job: Job;
  company: Company;
} | null>(null);
