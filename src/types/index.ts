import { ReactNode } from "react";

export type Job = {
  image: string;
  company: string;
  website?: string;
  role?: string;
  description?: string;
  responsibilities?: string[];
};

export type Timeline = {
  startDate: string;
  endDate?: string;
  job: Job;
};
