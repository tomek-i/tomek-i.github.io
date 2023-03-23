interface JobTimelineItemPointProps {
  text: string;
}
export const JobTimelineItemPoint: React.FC<JobTimelineItemPointProps> = ({
  text,
}) => {
  return <div className="-card_point">{text}</div>;
};
