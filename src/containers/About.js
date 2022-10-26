import React from "react";
import { FaHtml5, FaCss3Alt, FaPython, FaSwift, FaReact, FaJs } from 'react-icons/fa';
import { SiKotlin, SiMysql } from 'react-icons/si';
import aboutImg from "../images/g49909.png";

const About = () => {
    return (
      <div className="about-container" id="about">
        <h1 className="about-title">About Me</h1>
        <img className="about-image" src={aboutImg} />
        <div className="about-text">
          <p className="about-yellow-text">Hi, I'm Laura.</p>
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
            <SiKotlin />
            <FaSwift />
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