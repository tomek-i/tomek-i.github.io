interface SectionTitleProps {
  title: string;
  alignment?: 'left' | 'center';
}
export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  alignment,
}) => {
  return (
    <h2
      className={`section-title ${alignment === 'center' ? 'text-center' : ''}`}
    >
      {title}
    </h2>
  );
};
