import React from "react";
import { Card } from "../components/Card";
import underline from "../images/header-underline.svg";
import projectBorder from "../images/project-border.svg";

const Projects = () => {

    const test = [
        {
            title: "Python Recommendation System 2",
            text: "Python module assignment 2 - Spotify recommendation system using OOP",
            url: "https://github.com/laura-nias/Python-Recommendation-System-2",
        },
        {
            title: "Dissertation 2021",
            text: "Contains the full code for the deliverable to accompany my postgraduate dissertation.",
            url: "https://github.com/laura-nias/dissertation-2021"
        },
        {
            title: "Codecademy Passing Thoughts",
            text: "Project completed from Codecademy using React and Hooks",
            url: "https://github.com/laura-nias/codecademy-passing-thoughts",
        }
    ];

    return (
        <div className="projects-container" id="projects">
            <h1 className="projects-title">Projects</h1>
            <img className="projects-title-underline" src={underline} />
            <div className="projects-display-container">
                {test.map((item) => {
                    return (
                        <div className="projects-display">
                            <img src={projectBorder}/>
                            <Card name="projects-card" img={item.img} title={item.title} text={item.text} url={item.url}/>
                        </div>
                    )
                })}
                </div>
            <p className="projects-text">See more projects on <a href="https://github.com/laura-nias">my Github</a></p> 
        </div>
    );
}

export default Projects;