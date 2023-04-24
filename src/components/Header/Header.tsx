import {
  GithubIcon,
  LikedInIcon,
  MailIcon,
  StackoverflowIcon,
} from '../Icons/SVGs';

interface HeadingProps {}
export const Heading: React.FC<HeadingProps> = () => {
  //TODO: add from env file or config file instead
  return (
    <header className="mb-8 site-header">
      <h1 className="site-title">Thomas Iwainski</h1>
      <p className="-mt-6">Software Engineer</p>

      <p className="flex justify-center mx-auto space-x-4 text-xs">
        <a rel="nofollow" href="https://github.com/tomek-i">
          <span className="cursor-pointer">
            <GithubIcon />
          </span>
        </a>
        <a rel="nofollow" href="https://www.linkedin.com/in/tomek-iw">
          <span className="cursor-pointer">
            <LikedInIcon />
          </span>
        </a>
        <a rel="nofollow" href="https://stackoverflow.com/users/4421557/tomek">
          <span className="cursor-pointer">
            <StackoverflowIcon />
          </span>
        </a>

        <button
          onClick={() => {
            window.location.href = 'mailto:mail@example.org';
          }}
        >
          <MailIcon />
        </button>
      </p>
    </header>
  );
};
