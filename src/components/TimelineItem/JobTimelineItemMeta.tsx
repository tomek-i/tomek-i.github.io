import { useTimelineContext } from './useTimelineItemContext';

interface JobTimelineItemMetaProps {}
export const JobTimelineItemMeta: React.FC<JobTimelineItemMetaProps> = () => {
  const { timeline } = useTimelineContext();
  return (
    <div className="job-card_meta">
      {timeline.job.dates.start}{' '}
      {timeline.job.dates.end ? `- ${timeline.job.dates.end}` : `current`}
    </div>
  );
};
