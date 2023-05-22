import { Helmet } from 'react-helmet';

import { AboutMe } from '../components/AboutMe/AboutMe';
import { Section } from '../components/Section/Section';
import { TimelineItem } from '../components/TimelineItem/TimelineItem';
import { usePosts } from '../components/hooks/usePosts';

// import { jobs } from '../data/jobs';

interface HomePageProps {}
export const HomePage: React.FC<HomePageProps> = () => {
  const { posts } = usePosts();
  //TODO: see App.tsx, we need the posts there too and should refactor
  return (
    <>
      {/* //TODO: helmet is outdated https://stackoverflow.com/questions/66045965/warning-using-unsafe-componentwillmount-in-strict-mode-is-not-recommended-upgr */}
      <Helmet>
        <script defer async src="./timeline.js" type="text/javascript"></script>
      </Helmet>

      {/* //TODO: make compaund component */}

      <AboutMe />

      <Section>
        <Section.Wrapper>
          <Section.Title title="Timeline" alignment="center" />
          <p className="text-center">
            Below you can find my career path in form of a timeline. Click on
            the Details button for more information about each job and position.
          </p>
        </Section.Wrapper>
      </Section>

      {/* TODO: separate this out as it can be a separate page called career where this component will be reused */}
      <Section className="overflow-hidden">
        <div className="timeline-format-container">
          <div className="js-timeline timeline">
            <div className="js-timeline_line timelime_line">
              <div className="js-timeline_line-progress timelime_line-progress"></div>
            </div>
            <div className="_list">
              {posts?.map((post, index) => (
                <TimelineItem
                  timeline={post.attributes}
                  isAlternate={index % 2 !== 0}
                  key={post.attributes.company.name + 2 + index}
                />
              ))}
              {/* {jobs.map((job, index) => (
                <TimelineItem
                  timeline={job}
                  isAlternate={index % 2 !== 0}
                  key={job.company.name + index}
                />
              ))} */}
            </div>
          </div>
        </div>
      </Section>

      <Section className="spikes">
        <Section.Wrapper>
          <Section.Title title="section 3" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum neque
            velit saepe hic blanditiis maxime ipsam assumenda consectetur,
            voluptatibus libero incidunt recusandae tenetur vel deserunt, non
            eveniet, fuga alias culpa!
          </p>
        </Section.Wrapper>
      </Section>
    </>
  );
};
