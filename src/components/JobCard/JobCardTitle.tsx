import { useJobCardContext } from './useCardContext';

interface JobCardTitleProps {}
export const JobCardTitle: React.FC<JobCardTitleProps> = () => {
  const { company } = useJobCardContext();

  // TODO: Instead of just displaying the company name, display a link to the company's website
  return (
    <div className="text-left uppercase job-card_title">{company.name}</div>
  );
};
