import { useState } from "react";
import { AboutMe } from "../components/AboutMe/AboutMe";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { Modal } from "../components/Modal/Modal";
import { Section } from "../components/Section/Section";
import { TimelineItem } from "../components/TimelineItem/TimelineItem";
import { jobs } from "../data/jobs";

interface HomePageProps {}
export const HomePage: React.FC<HomePageProps> = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      {/* //TODO: make compaund component */}
      <Modal show={showModal} setShow={setShowModal} title="Contact">
        <ContactForm onCancelClick={() => setShowModal(false)} />
      </Modal>

      <AboutMe />

      <Section>
        <Section.Wrapper>
          <Section.Title title="section 1" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum neque
            velit saepe hic blanditiis maxime ipsam assumenda consectetur,
            voluptatibus libero incidunt recusandae tenetur vel deserunt, non
            eveniet, fuga alias culpa!
          </p>
        </Section.Wrapper>
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

      <Section className="overflow-hidden">
        <div className="timeline-format-container">
          <div className="js-timeline timeline">
            <div className="js-timeline_line timelime_line">
              <div className="js-timeline_line-progress timelime_line-progress"></div>
            </div>
            <div className="_list">
              {jobs.map((job, index) => (
                <TimelineItem timeline={job} isAlternate={index % 2 !== 0} />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
