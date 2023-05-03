import { useJobCardContext } from './useCardContext';

interface JobCardResponsibilitiesProps {}
export const JobCardResponsibilities: React.FC<
  JobCardResponsibilitiesProps
> = () => {
  const { job } = useJobCardContext();
  return (
    <>
      {job.responsibilities && (
        <ul className="text-left list-disc">
          {job.responsibilities?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}{' '}
    </>
  );
};
