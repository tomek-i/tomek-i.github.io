export interface OverlayProps extends React.PropsWithChildren {}

export const Overlay: React.FC<OverlayProps> = () => {
  return <div className="fixed inset-0 z-40 bg-black opacity-40"></div>;
};
