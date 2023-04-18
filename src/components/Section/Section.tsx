import { SectionTitle } from "./SectionTitle";

interface SectionProps extends React.PropsWithChildren {
  className?: string;
}
export function Section({ className, children }: SectionProps) {
  return <section className={className}>{children}</section>;
}

Section.Wrapper = ({ children }: React.PropsWithChildren) => (
  <div className="wrapper">{children}</div>
);
Section.Title = SectionTitle;
