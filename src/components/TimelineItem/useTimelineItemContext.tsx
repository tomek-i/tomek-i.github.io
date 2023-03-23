import { createContext, useContext } from "react";
import { Job } from "../JobCard/useCardContext";

export type Timeline = {
  startDate: string;
  endDate?: string;
  job: Job;
};
export const TimelineItemContext = createContext<{ timeline: Timeline } | null>(
  null
);
export function useTimelineContext() {
  const context = useContext(TimelineItemContext);
  if (!context)
    throw new Error(
      "Timeline.* component must be rendered as child of Timeline component"
    );

  return context;
}
