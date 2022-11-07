import React from "react";
import { FaHtml5, FaCss3Alt, FaPython, FaReact, FaJs } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import headerLines from "../images/header-lines.svg";

const About = () => {
    return (
      <div className="about-container" id="about">
        <h1 className="about-title">About Me</h1>
        <div className="about-text">
          <div>
            <img className="header-lines" src={headerLines}/>
            <p className="about-sub-text">Hi, I'm Laura</p>
          </div>
          <p >
            I'm a passionate Front-End Developer with a Computer Science degree, aspiring to someday be Full
            Stack. I have experience in making both web and mobile applications,
            mainly with JavaScript and Reactjs, but picking up new languages and frameworks isn't a problem, and something I had to do during my degree.
          </p>
          <div className="about-icons">
            <FaReact />
            <FaJs />
            <FaHtml5 />
            <FaCss3Alt />
            <FaPython />
            <SiMysql />
          </div>
          <p>
            Outside of coding I love playing board games, collecting books and
            exploring new places. Recently, I have started learning how to draw with Procreate, so hopefully one day my designs will appear in my applications!
          </p>
        </div>
      </div>
    );
}

export default About;