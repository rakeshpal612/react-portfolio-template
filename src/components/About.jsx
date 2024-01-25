import React from "react";

const About = () => {
  return (
    <>
      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Experience</h2>
            <h3 className="section-subheading text-muted">
              As a Front End Developer, I've 2.6+ years of experience. The
              Company that i've preivously through now are mention below:-
            </h3>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="assets/img/about/1.jpg"
                  alt="..."
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>02/2020 - 08/2020</h4>
                  <h4 className="subheading">UI/UX Internship</h4>
                </div>
                <div className="timeline-body">
                  <ul className="text-muted" style={{ listStyleType: "none" }}>
                    <li>
                      Worked on a web application that utilized HTML, CSS,
                      Javascript and Bootstrap.
                    </li>
                    <li>
                      Gained hands-on experience in front-end web development by
                      asdsisting in the creation and maintenance of web
                      applications.
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="assets/img/about/2.jpg"
                  alt="..."
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>02/2021 - 04/2022</h4>
                  <h4 className="subheading">Junior Software Developer</h4>
                </div>
                <div className="timeline-body">
                  <ul className="text-muted" style={{ listStyleType: "none" }}>
                    <li>
                      Worked with a team to develop the front-end architecture
                      and implemented the application UI using front end
                      technologies like HTML, CSS, Javascript and Bootstrap and
                      collaborated with senior developer to fix bugs and enhance
                      the user interface.
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="assets/img/about/3.jpg"
                  alt="..."
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>09/2022 - 12/2023</h4>
                  <h4 className="subheading">Front End Developer</h4>
                </div>
                <div className="timeline-body">
                  <ul className="text-muted" style={{ listStyleType: "none" }}>
                    <li>
                      Developed and implemented a new front-end architecture
                      using React.js, resulting in a 25% increase in page load
                      speed. Created interactive and appealing web pages for the
                      web applications.
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="assets/img/about/4.jpg"
                  alt="..."
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>01/2024 - present</h4>
                  <h4 className="subheading">Software Develper - Frontend</h4>
                </div>
                <div className="timeline-body">
                  <ul className="text-muted" style={{ listStyleType: "none" }}>
                    <li>
                      Created a kitchen order ticket application with reactjs
                      and used hooks and redux to store and manage data.
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  <br />
                  Download
                  <br />
                  CV
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default About;
