export interface CodeStatsProps extends React.PropsWithChildren {}

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

export interface CodeStatsLanguageLevel {
  name: string;
  level: number;
}
export interface CodeStatsResponse {
  dates: Map<string, number>; //OR :CodeStatsDates
  languages: CodeStatsLanguageExperience;
  machines: CodeStatsMachines;
  new_xp: number;
  total_xp: number;
  user: string;
}

export const CodeStats: React.FC<CodeStatsProps> = ({}) => {
  return <div>CodeStats</div>;
};
