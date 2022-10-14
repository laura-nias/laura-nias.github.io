import React from "react";
import { FaHtml5, FaCss3Alt, FaPython, FaSwift, FaReact, FaJs } from 'react-icons/fa';
import { SiKotlin, SiMysql } from 'react-icons/si';

const About = () => {
    return (
      <div className="about-container" id="about">
        <span
          className="about-vl"
          data-aos="fade-left"
          data-aos-duration="2000"
        />
        <p
          className="about-header"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          Who am I?
        </p>
        <p
          className="about-subhead"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="1500"
        >
          I'm Laura Nias.
        </p>
        <div
          className="about-text-wrapper"
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="2000"
        >
          <p>
            A passionate Frontend Developer aspiring to someday be Full Stack. I
            have experience in making both web and mobile applications, mainly
            with JavaScript and Reactjs, but have also dabbled with some other
            cool languages and frameworks.
          </p>
          <FaReact />
          <FaJs />
          <FaHtml5 />
          <FaCss3Alt />
          <FaPython />
          <SiKotlin />
          <FaSwift />
          <SiMysql />
          <p>
            Outside of coding I love playing board games, collecting books and
            exploring new places.
          </p>
        </div>
      </div>
    );
}

export default About;