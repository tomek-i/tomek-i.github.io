import { useJobCardContext } from "./useCardContext";

interface JobCardDescriptionProps {}
export const JobCardDescription: React.FC<JobCardDescriptionProps> = () => {
  const { job } = useJobCardContext();
  return <p className="-card_desc">{job.description}</p>;
};
