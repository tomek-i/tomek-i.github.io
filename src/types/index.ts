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

export type Meta = {
  company: Company;
  job: Job;

  tags: string[];
};

export type Job = {
  summary: string;
  image: string;
  dates: {
    start: string;
    end: string;
  };
  role: string;
  responsibilities: string[];
};

export type Timeline = {
  company: Company;
  job: Job;
  tags: string[];
};

export interface Post {
  content: string;
  attributes: Meta;
}
