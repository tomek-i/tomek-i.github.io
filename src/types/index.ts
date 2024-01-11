export type Project = {
  name: string;
  description: string;
};

export type Company = {
  name: string;
  description: string;
  website: string;
  loctation: {
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
  dates: {
    start: Date;
    end: Date;
  };
  role: string;
  responsibilities: string[];
};

//TODO: refactor as Meta and Timeline now are the same, see which one is more appropiate
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
