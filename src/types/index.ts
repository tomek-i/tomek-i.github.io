export type Project = {
  name: string;
  description: string;
};

export type Company = {
  name: string;
  description: string;
  website: string;
  location: {
    long: number;
    lat: number;
  };
  address: {
    country: string;
    street: string;
    postcode: string;
    city: string;
    state: string;
  };
};

export type Job = {
  summary: string;
  image: string;
  skills: string[];
  dates: {
    start: Date;
    end: Date;
  };
  role: string;
  responsibilities: string[];
};

export type Frontmatter = {
  company: Company;
  job: Job;
  tags: string[];
};

export type Timeline = {
  company: Company;
  job: Job;
  tags: string[];
};

export interface Post<T> {
  content: string;
  frontmatter: T;
}
