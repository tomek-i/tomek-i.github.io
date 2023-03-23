import { useJobCardContext } from "./useCardContext";

interface JobCardDescriptionProps {}
export const JobCardDescription: React.FC<JobCardDescriptionProps> = () => {
  const { job } = useJobCardContext();
  return (
    <>
      {job.description && (
        <p className="text-left job-card_description">{job.description}</p>
      )}
    </>
  );
};
