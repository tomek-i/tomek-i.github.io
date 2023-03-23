import { useTimelineContext } from "./useTimelineItemContext";

interface JobTimelineItemMetaProps {}
export const JobTimelineItemMeta: React.FC<JobTimelineItemMetaProps> = () => {
  const { timeline } = useTimelineContext();
  return (
    <div className="job-card_meta">
      {timeline.startDate}{" "}
      {timeline.endDate ? `- ${timeline.endDate}` : `current`}
    </div>
  );
};
