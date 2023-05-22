interface JobTimelineItemPointProps extends React.PropsWithChildren {}
export const JobTimelineItemPoint: React.FC<JobTimelineItemPointProps> = ({
  children,
}) => {
  return <div className="job-card_point">{children}</div>;
};
