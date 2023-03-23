import { Timeline } from "../../types";
import { JobCard } from "../JobCard/JobCard";
import { JobTimelineItemMeta } from "./JobTimelineItemMeta";
import { JobTimelineItemPoint } from "./JobTimelineItemPoint";
import { TimelineItemContext } from "./useTimelineItemContext";

interface TimelineItemProps {
  isAlternate: boolean;
  timeline: Timeline;
}
export function TimelineItem({ timeline, isAlternate }: TimelineItemProps) {
  return (
    <TimelineItemContext.Provider value={{ timeline }}>
      <div className="js-timeline_item timelime_item">
        <div className="job-card_box">
          {isAlternate ? (
            <>
              <div className="job-card_meta-box">
                <TimelineItem.Meta />
              </div>
              <div className="js-timeline-job-card_point-box job-card_point-box">
                <TimelineItem.Point />
              </div>
            </>
          ) : (
            <>
              <div className="js-timeline-job-card_point-box job-card_point-box">
                <TimelineItem.Point />
              </div>
              <div className="job-card_meta-box">
                <TimelineItem.Meta />
              </div>
            </>
          )}
        </div>
        <JobCard
          job={timeline.job}
          image={<JobCard.Image />}
          info={
            <JobCard.Info>
              <JobCard.Title />
              <JobCard.Description />
              <JobCard.Responsibilities />
            </JobCard.Info>
          }
        />
      </div>
    </TimelineItemContext.Provider>
  );
}

TimelineItem.Meta = JobTimelineItemMeta;
TimelineItem.Point = JobTimelineItemPoint;
