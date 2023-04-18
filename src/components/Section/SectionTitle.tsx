interface SectionTitleProps {
  title: string;
}
export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return <h2 className="section-title">{title}</h2>;
};
