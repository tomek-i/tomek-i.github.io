import { useJobCardContext } from "./useCardContext";

interface JobCardTitleProps {}
export const JobCardTitle: React.FC<JobCardTitleProps> = () => {
  const { job } = useJobCardContext();
  return <div className="text-left job-card_title">{job.company}</div>;
};
