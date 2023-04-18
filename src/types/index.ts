export type Project = {
  name: string;
  description: string;
};

export type Job = {
  image: string;
  company: string;
  website?: string;
  role?: string;
  description?: string;
  responsibilities?: string[];
  caseStudy: string;
};

export type Timeline = {
  startDate: string;
  endDate?: string;
  job: Job;
};
