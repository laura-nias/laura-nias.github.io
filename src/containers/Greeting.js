import React from 'react';
import '../style.css';
import {Fade} from "react-reveal";
import Pulse from 'react-reveal/Pulse';
import Slide from 'react-reveal/Slide';
import Forest from '../images/forest-fog.jpg';

const Greeting = () => {
  return (
      <div className="greeting-container" id='greeting'>
         <Fade left duration={2000}>
            <span className='hl'/>
          </Fade>
          <Fade bottom duration={2000}>
            <span className='vl'/>
          </Fade>
          <Pulse duration={2000}>
            <div className='logo'>
                <h1>LN.</h1>
            </div>
          </Pulse>
          <div className='list'>
          <Slide left cascade>
            <ul>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            </Slide>
          </div>
          <div className='pic'>
            {/* <img src={Forest}></img> */}
            <div className='info'>
              <span>Hello, I’m Laura.</span>
              <p className='line-1'>Frontend engineer, specialising in</p>
              <p className='line-2'>UX through React.</p>
              <p>Based in the United Kingdom.</p>
            </div>
          </div>
        </div>
  );
}

export default Greeting;
