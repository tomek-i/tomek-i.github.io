import { Helmet, HelmetProvider } from 'react-helmet-async';

import { AboutMe } from '../components/AboutMe/AboutMe';
import { usePosts } from '../components/hooks/usePosts';
import { Section } from '../components/Section/Section';
import { TimelineItem } from '../components/TimelineItem/TimelineItem';

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  const { posts, tags, isLoading } = usePosts();

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <script
            defer
            async
            src="./timeline.js"
            type="text/javascript"
          ></script>
        </Helmet>

        <AboutMe />

        <Section>
          <Section.Wrapper>
            <Section.Title title="Timeline" alignment="center" />
            <p className="text-center">
              Below you can find my career path in form of a timeline. Click on
              the Details button for more information about each job and
              position.
            </p>
          </Section.Wrapper>
        </Section>

        <Section isLoading={isLoading} className="overflow-hidden">
          <div className="timeline-format-container">
            <div className="js-timeline timeline">
              <div className="js-timeline_line timelime_line">
                <div className="js-timeline_line-progress timelime_line-progress"></div>
              </div>
              <div className="_list">
                {posts?.map((post, index) => (
                  <TimelineItem
                    timeline={post.frontmatter}
                    isAlternate={index % 2 !== 0}
                    key={post.frontmatter.company.name + 2 + index}
                  />
                ))}
              </div>
            </div>
          </div>
        </Section>

        {process.env.NODE_ENV === 'development' && (
          // TODO: Extract Tag Cloud to its own component
          <Section className="spikes" isLoading={isLoading}>
            <Section.Wrapper>
              {/* <Section.Title title="section 3" /> */}
              <div className="relative h-96 w-full">
                {tags?.map((tag, index) => {
                  // Calculate font size based on count
                  const fontSize = `${tag.count * 12}px`;
                  const transparency = (tag.count * 25) / 100;
                  const radius = 1 + tag.count * 5;
                  const angle = (index / tags.length) * 2 * Math.PI;
                  const offsetRange = 30; // Define the offset range
                  const randomOffsetX =
                    Math.random() * 2 * offsetRange - offsetRange; // Random offset between -offsetRange and +offsetRange
                  const randomOffsetY =
                    Math.random() * 2 * offsetRange - offsetRange; // Random offset between -offsetRange and +offsetRange
                  let x = 50 + radius * Math.cos(angle) + randomOffsetX;
                  let y = 50 + radius * Math.sin(angle) + randomOffsetY;

                  if (index === 0) y = x = 50;

                  return (
                    <span
                      key={tag.tag}
                      className="absolute rounded-full px-3 py-1 font-semibold text-gray-700"
                      style={{
                        fontSize,
                        top: `${y}%`,
                        left: `${x}%`,
                        color: `rgba(55, 65, 81, ${transparency})`,
                        transform: 'translate(-50%, -50%)',
                        zIndex: tags.length - index,
                      }}
                    >
                      {tag.tag}
                    </span>
                  );
                })}
              </div>
            </Section.Wrapper>
          </Section>
        )}

        <footer className="flex justify-center text-sm cursor-default">
          <span>
            Made with love ❤️ using{' '}
            <a
              href="https://github.com/tomek-i/tomek-i.github.io"
              target="_blank"
              rel="external nofollow noreferrer"
              className="font-bold underline underline-offset-4"
            >
              CareerHub
            </a>
          </span>
        </footer>
      </HelmetProvider>
    </>
  );
};
