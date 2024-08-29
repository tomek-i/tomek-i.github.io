import { SectionTitle } from './SectionTitle';

interface SectionProps extends React.PropsWithChildren {
  className?: string;
  isLoading?: boolean;
}
export function Section({
  className,
  isLoading = false,
  children,
}: SectionProps) {
  const ToRender = isLoading ? (
    <div className="w-full flex justify-center items-center">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  ) : (
    children
  );

  return <section className={className}>{ToRender}</section>;
}

Section.Wrapper = ({ children }: React.PropsWithChildren) => (
  <div className="wrapper">{children}</div>
);
Section.Title = SectionTitle;
