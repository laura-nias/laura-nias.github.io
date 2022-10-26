import React from "react";
import "../style.css";
import { Link } from 'react-scroll';

const Greeting = () => {

  return (
    <div className="greeting-container" id="greeting">
      <div className="greeting-text-wrapper">
        <h1 className="greeting-title">Laura Booth-Nias</h1>
        <p className="greeting-sub">Front-End Developer</p>
        <div className="btn-wrapper">
        <Link to="contact" spy={true} smooth={true}><input className="greeting-btn" type="button" value="Contact Me"/></Link>
        <button className="greeting-btn" value="My CV"><a href="https://laura-nias.github.io/files/LauraBooth-NiasCV.pdf" target="_blank">My CV</a></button>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
