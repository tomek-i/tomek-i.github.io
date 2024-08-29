import { formatDate } from '../../utility';
import { useTimelineContext } from './useTimelineItemContext';

interface JobTimelineItemMetaProps {}

export const JobTimelineItemMeta: React.FC<JobTimelineItemMetaProps> = () => {
  const { timeline } = useTimelineContext();
  return (
    <div className="job-card_meta">
      {formatDate(timeline.job.dates.start)}{' '}
      {timeline.job.dates.end
        ? `- ${formatDate(timeline.job.dates.end)}`
        : `present`}
    </div>
  );
};
