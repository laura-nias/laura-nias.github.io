import React, { Component } from "react";
import "../style.css";
import { Link } from "react-scroll";
import cornerBorder from "../images/corner-borders.svg";
import cornerBorderBig from "../images/path1789.svg";
import sunburst from "../images/sunburst.svg";

class Greeting extends Component {

  state = {
    innerWidth: window.innerWidth
  }

  resize = () => {
    this.setState({innerWidth: window.innerWidth})
  }

  componentDidMount = () => {
    window.addEventListener("resize", this.resize.bind(this))
    this.resize()
  }

  render() {
  return (
    <div className="greeting-container" id="greeting">

      {window.innerWidth <= 1024 ? 
      <img className="greeting-border" src={cornerBorder}/> : 
      <img className="greeting-border" src={cornerBorderBig}/>}

      <div className="greeting-text-wrapper">
      <img className="greeting-sunburst" src={sunburst}/>
        <h1 className="greeting-title">LAURA BOOTH-NIAS</h1>
        <hr className="greeting-divider-1" />
        <hr className="greeting-divider-2" />
        <p className="greeting-sub">FRONT-END DEVELOPER</p>
        <div className="btn-wrapper">
            <button className="greeting-btn" value="Contact Me">
              <a
                href="#contact"
              >
              Contact Me
              </a>
              <div className="vertical"></div>
              <div className="horizontal"></div>
            </button>
          <button className="greeting-btn" value="My CV">
            <a
              href="https://laura-nias.github.io/files/LauraBooth-NiasCV.pdf"
              target="_blank"
            >
              My CV
            </a>
            <div className="horizontal"></div>
            <div className="vertical"></div>
          </button>
        </div>
      </div>
      {window.innerWidth <= 1024 ? 
      <img className="greeting-border-bottom" src={cornerBorder}/> : 
      <img className="greeting-border-bottom" src={cornerBorderBig}/>}
    </div>
  );
};
}

export default Greeting;
