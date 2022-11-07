import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Divide as Hamburger } from 'hamburger-react'

import menuBorder from "../images/menu-border.svg";

const NavBar = (props) => {
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen);
    }

    return(
        <div className='hamburger-menu' onClick={toggleMenu}>
            <p className="menu">Menu</p>
            <img className="menu-border" src={menuBorder} style={{transform: isOpen ? 'scaleY(-1) translate(-50%, 0)' : ''}}/>
        {isOpen ? <div class="navbar" id="myNavbar">
        <Link to="greeting" spy={true} smooth={false} onClick={toggleMenu}>Home</Link>
        <Link to="about" spy={true} smooth={false} offset={-90} onClick={toggleMenu}>About</Link>
        <Link to="experience" spy={true} smooth={false} offset={-90} onClick={toggleMenu}>Experience</Link>
        <Link to="projects" spy={true} smooth={false} offset={-90} onClick={toggleMenu}>Projects</Link>
        <Link to="contact" spy={true} smooth={false} offset={-90} onClick={toggleMenu}>Contact Me</Link>
        </div>
        : null}
        </div>

    )
}

export default NavBar;