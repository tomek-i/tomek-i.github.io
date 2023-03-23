import React from "react";
import { TimelineItem } from "./components/TimelineItem/TimelineItem";
import { jobs } from "./data/jobs";

function App() {
  return (
    <>
      <header className="site-header mb-8">
        <h1 className="site-title">Thomas Iwainski</h1>
        <p className="-mt-6">Software Engineer</p>
      </header>

      <section className="about-me diagonal">
        <div className="wrapper">
          <h2 className="section-title">About</h2>
          <p>
            Hi, I'm <strong>Thomas Iwainski</strong>, a software developer based
            in Australia. Originally from Poland, I moved to Germany at a young
            age and pursued my passion for computers with a three-year course at
            Rheinische Akademie Köln in Germany.
          </p>
          <p>
            Since then, I have acquired over{" "}
            <strong>{new Date().getFullYear() - 2009}</strong> years of
            experience in the software development industry. My expertise lies
            in <strong>C# .NET, TypeScript, React, Node.js, MSSQL</strong>.
            Throughout my career I have worked with different techstacks,{" "}
            <strong>
              Python, Django, Express, Strapi, Angular, PHP, Laravel, Wordpress,
              Terraform.
            </strong>
          </p>
          <p>
            In 2009, I made Australia my home and became a citizen soon after.
            When I'm not coding, you can find me{" "}
            <strong>still coding 😅, at the beach or traveling</strong>.
          </p>
          <p>
            If you're interested in working with me, please don't hesitate to{" "}
            <a href="#contact">reach out</a>.
          </p>
        </div>
      </section>

      <section className="">
        <div className="wrapper">
          <h2 className="section-title">section 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum neque
            velit saepe hic blanditiis maxime ipsam assumenda consectetur,
            voluptatibus libero incidunt recusandae tenetur vel deserunt, non
            eveniet, fuga alias culpa!
          </p>
        </div>
      </section>

      <section className="spikes">
        <div className="wrapper">
          <h2 className="section-title">section 3</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            odio harum dolor at perferendis libero illo debitis nihil laboriosam
            minus, eaque quaerat dolorum. Deserunt quos necessitatibus nulla,
            enim tempore dolor.
          </p>
        </div>
      </section>
      <section className="ag-section">
        <div className="ag-format-container">
          <div className="js-timeline ">
            <div className="js-timeline_line _line">
              <div className="js-timeline_line-progress _line-progress"></div>
            </div>
            <div className="_list">
              <p>
                Timeline from here:
                <a href="https://codepen.io/alvarotrigo/pen/yLzBJaN">
                  https://codepen.io/alvarotrigo/pen/yLzBJaN
                </a>
              </p>
              {jobs.map((job, index) => (
                <TimelineItem timeline={job} isAlternate={index % 2 !== 0} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
