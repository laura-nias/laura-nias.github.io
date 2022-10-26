import React from "react";
import { Card } from "../components/Card";
import GithubCards from "../components/GithubCards";
import projectsImg from "../images/g42574.png";

const Projects = () => {
    return (
        <div className="projects-container" id="projects">
            <h1 className="projects-title">Projects</h1>
            <img className="projects-image" src={projectsImg}/>
            <GithubCards />
            <p className="projects-text">See more projects on <a href="https://github.com/laura-nias">my Github</a></p> 
        </div>
    );
}

export default Projects;