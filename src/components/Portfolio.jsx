import React from "react";

const Portfolio = () => {
  const data = [
    {
      heading: "Threads",
      subHeading: "Illustration",
    },
    {
      heading: "Explore",
      subHeading: "Graphic Design",
    },
    {
      heading: "Finish",
      subHeading: "Identity",
    },
    {
      heading: "Lines",
      subHeading: "Branding",
    },
    {
      heading: "Southwest",
      subHeading: "Website Design",
    },
    {
      heading: "Window",
      subHeading: "Photography",
    },
  ];
  return (
    <>
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Portfolio</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className="row">
            {data.length
              ? data.map((data, index) => {
                  return (
                    <div key={index} className="col-lg-4 col-sm-6 mb-4">
                      <div className="portfolio-item">
                        <a
                          className="portfolio-link"
                          data-bs-toggle="modal"
                          href="#portfolioModal1"
                        >
                          <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                              <i className="fas fa-plus fa-3x" />
                            </div>
                          </div>
                          <img
                            className="img-fluid"
                            src="assets/img/portfolio/1.jpg"
                            alt="..."
                          />
                        </a>
                        <div className="portfolio-caption">
                          <div className="portfolio-caption-heading">
                            {data.heading}
                          </div>
                          <div className="portfolio-caption-subheading text-muted">
                            {data.subHeading}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
