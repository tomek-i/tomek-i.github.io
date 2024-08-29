import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContactForm } from '../ContactForm/useContactForm';
import { Section } from '../Section';

interface AboutMeProps {}

const profile = {
  name: 'Thomas Iwainski',
  position: 'Senior Software Engineer',
};

export const AboutMe: React.FC<AboutMeProps> = () => {
  const { setShowContactFormModal } = useContactForm();

  return (
    <Section className="about-me diagonal mb-4 text-lg">
      <Section.Wrapper>
        <p>
          Hi, I'm <strong>{profile.name}</strong>, a software developer based in
          Australia. Originally from Poland, I moved to Germany at a young age
          and pursued my passion for computers with a three-year course at{' '}
          <a
            className="underline underline-offset-4 cursor-pointer"
            href="https://www.rak.de/"
            target="_blank"
            rel="noreferrer"
          >
            Rheinische Akademie
          </a>{' '}
          Köln in Germany.
        </p>
        <p>
          Since then, I have acquired over{' '}
          <strong>{new Date().getFullYear() - 2009}</strong> years of experience
          in the software development industry. My expertise lies in{' '}
          <strong>C# .NET, TypeScript, React, Node.js, MSSQL</strong>.
          Throughout my career I have worked with different techstacks and
          frameworks,{' '}
          <strong>
            Python, Django, Express, Strapi, Angular, PHP, Laravel, Wordpress,
            Terraform.
          </strong>
        </p>
        <p>
          In 2009, I made Australia my home and became a citizen soon after.
          When I'm not coding, you can find me{' '}
          <strong>still coding 😅, at the beach 🏖️ or traveling</strong>.
        </p>
        <p>
          If you're interested in working with me, please don't hesitate to{' '}
          <button onClick={() => setShowContactFormModal(true)}>
            <span className="underline underline-offset-4">reach out</span>{' '}
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
          .
        </p>
      </Section.Wrapper>
    </Section>
  );
};
