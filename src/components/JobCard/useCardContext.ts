import { createContext, useContext } from "react";
import { Job } from "../../types";

export const JobCardContext = createContext<{ job: Job } | null>(null);

export function useJobCardContext() {
  const context = useContext(JobCardContext);
  if (!context)
    throw new Error(
      "JobCard.* component must be rendered as child of JobCard component"
    );

  return context;
}
