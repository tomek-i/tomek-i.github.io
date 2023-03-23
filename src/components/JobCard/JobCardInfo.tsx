interface JobCardInfoProps extends React.PropsWithChildren {}
export const JobCardInfo: React.FC<JobCardInfoProps> = ({ children }) => {
  return <div className="-card_info">{children}</div>;
};
