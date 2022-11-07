import React from 'react';
import Footer from '../components/Footer';
import '../style.css';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Greeting from './Greeting';
import Projects from './Projects';
import NavBar from '../components/NavBar';

const Main = () => {
  return (
        <div className='main'>
          <NavBar />
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
