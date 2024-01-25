import React from "react";
import Portfolio from "./Portfolio";
import About from "./About";
import Teams from "./Teams";
import Client from "./Client";
import Contact from "./Contact";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <div>
        {/* Services*/}
        <Services />

        {/* Portfolio Grid*/}
        <Portfolio />

        {/* About*/}
        <About />
        {/* Team*/}
        <Teams />
        {/* Clients*/}
        <Client />
        {/* Contact*/}
        <Contact />
      </div>
    </>
  );
};

export default Home;
