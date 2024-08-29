import { Helmet, HelmetProvider } from 'react-helmet-async';

import { AboutMe } from '../components/AboutMe/AboutMe';
import { Section } from '../components/Section/Section';
import { TimelineItem } from '../components/TimelineItem/TimelineItem';
import { usePosts } from '../components/hooks/usePosts';

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  const { posts, tags } = usePosts();

  // TODO: create sorting utility function so it could be used like asc(tags) or tags.sort(asc)
  const sortedTags = tags?.sort((a, b) => b.count - a.count);

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

        <Section className="overflow-hidden">
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
          <Section className="spikes">
            <Section.Wrapper>
              {/* <Section.Title title="section 3" /> */}
              <TagCloud tags={tags ?? []} />
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
