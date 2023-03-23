import JobCard from "../JobCard/JobCard";
import { JobTimelineItemMeta } from "./JobTimelineItemMeta";
import { JobTimelineItemPoint } from "./JobTimelineItemPoint";
import { Timeline } from "./useTimelineItemContext";

interface TimelineItemProps {
  isAlternate: boolean;
  timeline: Timeline;
}
export const TimelineItem: React.FC<TimelineItemProps> = ({
  timeline,
  isAlternate,
}) => {
  return (
    <div className="js-timeline_item _item">
      <div className="-card_box">
        {isAlternate ? (
          <>
            <div className="-card_meta-box">
              <JobTimelineItemMeta
                text={`${timeline.startDate} - ${timeline.endDate}`}
              />
            </div>
            <div className="js-timeline-card_point-box -card_point-box">
              <JobTimelineItemPoint text="" />
            </div>
          </>
        ) : (
          <>
            <div className="js-timeline-card_point-box -card_point-box">
              <JobTimelineItemPoint text="" />
            </div>
            <div className="-card_meta-box">
              <JobTimelineItemMeta
                text={`${timeline.startDate} - ${timeline.endDate}`}
              />
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
          </JobCard.Info>
        }
      />
    </div>
  );
};
