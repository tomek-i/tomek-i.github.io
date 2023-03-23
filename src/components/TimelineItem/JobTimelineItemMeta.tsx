interface JobTimelineItemMetaProps {
  text: string;
}
export const JobTimelineItemMeta: React.FC<JobTimelineItemMetaProps> = ({
  text,
}) => {
  return <div className="-card_meta">{text}</div>;
};
