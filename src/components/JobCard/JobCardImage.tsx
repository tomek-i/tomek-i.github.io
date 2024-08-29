import { useJobCardContext } from './useCardContext';

interface JobCardImageProps {
  width?: string;
  height?: string;
  alt?: string;
}
export const JobCardImage: React.FC<JobCardImageProps> = ({
  width,
  height,
  alt,
}) => {
  const { job } = useJobCardContext();

  return (
    <div className="job-card_img-box">
      <img
        src={`assets/${job?.image}`}
        className="job-card_img"
        width={width}
        height={height}
        alt={alt}
      />
    </div>
  );
};
