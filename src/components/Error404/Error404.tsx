export interface Error404Props extends React.PropsWithChildren {}

export const Error404: React.FC<Error404Props> = ({}) => {
  return (
    <div>
      <p>This is not the page you were looking for ...</p>
      <p>turn back where you came from ...</p>
      <p>
        Choices:
        <ul>
          <li>Turn Back</li>
          <li>Ignore</li>
        </ul>
      </p>
    </div>
  );
};
