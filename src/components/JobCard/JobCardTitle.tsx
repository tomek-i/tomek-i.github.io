import { useJobCardContext } from './useCardContext';

interface JobCardTitleProps {}
export const JobCardTitle: React.FC<JobCardTitleProps> = () => {
  const { company } = useJobCardContext();
  return (
    <div className="text-left uppercase job-card_title">{company.name}</div>
  );
};
