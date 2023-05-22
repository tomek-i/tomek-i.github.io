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
export type Meta = {
  company: Company;
  job: Job;
  tags: string[];
};
export type Timeline = {
  company: Company;
  job: Job;
  tags: string[];
};

export interface Post {
  content: string;
  //TODO: rename `attributes` to meta and use Post<T> to pecify the type of the meta information
  attributes: Meta;
}

//TODO: refactor this out to a separate file specific to code::stats
export type Experience = number;
export interface CodeStatsDates {
  [date: string]: Experience;
}

//TODO: the new_xps and xps can be refactored out
export interface CodeStatsLanguageExperience {
  [language: string]: {
    new_xps: number;
    xps: number;
  };
}
export interface CodeStatsMachines {
  [date: string]: {
    new_xps: number;
    xps: number;
  };
}

export interface CodeStatsResponse {
  dates: Map<string, number>; //OR :CodeStatsDates
  languages: CodeStatsLanguageExperience;
  machines: CodeStatsMachines;
  new_xp: number;
  total_xp: number;
  user: string;
}
