import { useContactForm } from '../ContactForm/useContactForm';
import { Section } from '../Section';

interface AboutMeProps {}
export const AboutMe: React.FC<AboutMeProps> = () => {
  const { setShowContactFormModal } = useContactForm();

  //TODO: get content from markdown file instead
  //TODO: allow some modifiation of look / feel through frontmatter eg. diagonal css class

  //TODO: replace fully with <Section> and wrapper / title  as seen in home.tsx
  return (
    <Section className="about-me diagonal">
      <div className="wrapper">
        <h2 className="section-title">About</h2>
        <p>
          Hi, I'm <strong>Thomas Iwainski</strong>, a software developer based
          in Australia. Originally from Poland, I moved to Germany at a young
          age and pursued my passion for computers with a three-year course at
          Rheinische Akademie Köln in Germany.
        </p>
        <p>
          Since then, I have acquired over{' '}
          <strong>{new Date().getFullYear() - 2009}</strong> years of experience
          in the software development industry. My expertise lies in{' '}
          <strong>C# .NET, TypeScript, React, Node.js, MSSQL</strong>.
          Throughout my career I have worked with different techstacks,{' '}
          <strong>
            Python, Django, Express, Strapi, Angular, PHP, Laravel, Wordpress,
            Terraform.
          </strong>
        </p>
        <p>
          In 2009, I made Australia my home and became a citizen soon after.
          When I'm not coding, you can find me{' '}
          <strong>still coding 😅, at the beach or traveling</strong>.
        </p>
        <p>
          If you're interested in working with me, please don't hesitate to{' '}
          <button onClick={() => setShowContactFormModal(true)}>
            <span className="underline underline-offset-4">reach out</span>
          </button>
          .
        </p>
      </div>
    </Section>
  );
};
