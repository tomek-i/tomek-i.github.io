export interface Error404Props extends React.PropsWithChildren {}

export const Error404: React.FC<Error404Props> = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-9xl">404</h1>
        <h2>Oops! It seems you've stumbled upon uncharted code territory.</h2>
        <p>
          The code you're looking for may have taken a detour or embarked on an
          exciting new project. As a software developer, I thrive on challenges
          and problem-solving, and I assure you that I'll get to the bottom of
          this unexpected situation.
        </p>
        <p>
          While I investigate this digital labyrinth, why not take a moment to
          explore my portfolio and learn more about my software development
          journey? From stunning web applications to elegant algorithms, you'll
          find a treasure trove of my coding expertise.
        </p>
        <p>
          Remember, just like debugging code, life is full of twists and turns.
          Embrace the unexpected and keep pushing forward. I'm here to guide you
          through my digital realm, showcasing my skills and accomplishments as
          a software developer.
        </p>
        <p>
          Thank you for your understanding, and please accept my apologies for
          any inconvenience caused. Stay curious, keep exploring, and together,
          let's craft innovative solutions with lines of code.
        </p>
        <p>
          Happy coding!
          <br />
          Tom
          <br />
          Software Developer Extraordinaire
        </p>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="mb-8 text-4xl font-bold text-gray-800">
          Oops! It seems you've stumbled upon uncharted code territory.
        </h1>
        <p className="mb-4 text-lg text-gray-700">
          The code you're looking for may have taken a detour or embarked on an
          exciting new project. As a software developer, I thrive on challenges
          and problem-solving, and I assure you that I'll get to the bottom of
          this unexpected situation.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          While I investigate this digital labyrinth, why not take a moment to
          explore my portfolio and learn more about my software development
          journey? From stunning web applications to elegant algorithms, you'll
          find a treasure trove of my coding expertise.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          Remember, just like debugging code, life is full of twists and turns.
          Embrace the unexpected and keep pushing forward. I'm here to guide you
          through my digital realm, showcasing my skills and accomplishments as
          a software developer.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          Thank you for your understanding, and please accept my apologies for
          any inconvenience caused. Stay curious, keep exploring, and together,
          let's craft innovative solutions with lines of code.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          Happy coding!
          <br />
          [Your Name]
          <br />
          Software Developer Extraordinaire
        </p>
      </div>
    </>
  );
};