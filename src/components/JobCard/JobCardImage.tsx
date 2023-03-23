import { useJobCardContext } from "./useCardContext";

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
    <div className="-card_img-box">
      <img
        src={job?.image}
        className="-card_img"
        width={width}
        height={height}
        alt={alt}
      />
    </div>
  );
};
