import React from 'react';
import Footer from '../components/Footer';
import '../style.css';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Greeting from './Greeting';
import Projects from './Projects';

const Main = () => {
  return (
        <div className='main'>
            <Greeting />
            <About />
            <Experience />
            <Projects/>
            <Contact />
            <Footer />
        </div>
  );
}

export default Main;
