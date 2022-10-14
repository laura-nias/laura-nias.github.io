import React from "react";
import "../style.css";
import { Link } from "react-scroll";

const Greeting = () => {
  return (
    <div className="greeting-container" id="greeting">
      <span className="hl" data-aos="fade-right" data-aos-duration="2000" />
      <span className="vl" data-aos="fade-up" data-aos-duration="2000" />
      <div className="logo" data-aos="zoom-in" data-aos-duration="2000">
        <h1>LN.</h1>
      </div>
      <div className="list">
        <ul>
          <li>
            <Link to="about" spy={true} smooth={true} duration={600}>
              <span
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                About
              </span>
            </Link>
          </li>
          <li>
            <Link to="experience" spy={true} smooth={true} duration={600}>
              <span
                data-aos="fade-right"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                Experience
              </span>
            </Link>
          </li>
          <li>
            <Link to="projects" spy={true} smooth={true} duration={600}>
              <span
                data-aos="fade-right"
                data-aos-delay="900"
                data-aos-duration="1000"
              >
                Projects
              </span>
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} duration={600}>
              <span
                data-aos="fade-right"
                data-aos-delay="1200"
                data-aos-duration="1000"
              >
                Contact
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="info-wrapper">
        <div className="info" data-aos="zoom-in" data-aos-duration="2000">
          <span>Hello, I’m Laura.</span>
          <p className="line-1">Frontend engineer, specialising in</p>
          <p className="line-2">UX through React.</p>
          <p>Based in the United Kingdom.</p>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
