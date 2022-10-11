import React from "react";
import { animateScroll as scroll } from 'react-scroll';
import { FaLinkedin, FaGithub, FaCodepen } from 'react-icons/fa';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <div className="footer" id="footer">
            <div className="footer-wrap">
            <div className='footer-logo' onClick={toggleHome} to="/">
                <h1>LN.</h1>
            </div>
            <div className="footer-text">
                <p>Made by Laura Nias</p>
            </div>
            <div className="social-wrapper">
            <a href="https://linkedin.com/in/laurabooth-nias">
                <FaLinkedin/>
            </a>
            <a href="https://github.com/laura-nias">
                <FaGithub />
            </a>
            <a href="https://codepen.io/LauRawwr">
                <FaCodepen />
            </a>
            </div>
            </div>
        </div>
    );
}

export default Footer;