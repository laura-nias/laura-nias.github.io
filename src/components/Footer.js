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
            <div className='footer-text' onClick={toggleHome} to="/">
                <h1>Laura Booth-Nias</h1>
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
            <div className="footer-credits">
                <a href="https://www.freepik.com/free-vector/elegant-floral-background-with-hand-drawing-leaves-watercolor_21940843.htm#query=watercolor%20branch&position=9&from_view=keyword">Image by mariadetarosarinda on Freepik</a>
                <a href="https://www.freepik.com/free-vector/set-watercolor-flower-leaf-floral-painted-with-watercolor-greeting-invitation-card-decoration_10616781.htm#&position=3&from_view=author">Image by mokoland on Freepik</a>
            </div>
            </div>
        </div>
    );
}

export default Footer;