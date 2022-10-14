import React from 'react';
import './style.css';
import Main from './containers/Main';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  AOS.init()

  return (
      <div className="App">
        <Main/>
      </div>
  );
}
