export interface OverlayProps extends React.PropsWithChildren {}

// TODO: add a blur effect to the overlay for the background
export const Overlay: React.FC<OverlayProps> = () => {
  return <div className="fixed inset-0 z-40 bg-black opacity-40"></div>;
};
