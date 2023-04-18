import { createContext, useContext } from "react";
import { JobCardContext } from "./JobCard/useCardContext";

export const ContactContext = createContext(null);

export function useJobCardContext() {
  const context = useContext(JobCardContext);
  if (!context)
    throw new Error(
      "JobCard.* component must be rendered as child of JobCard component"
    );

  return context;
}
