import { createContext, useContext } from "react";
import { Timeline } from "../../types";

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
