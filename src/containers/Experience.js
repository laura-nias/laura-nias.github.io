import React from "react";
import experienceImg from "../images/g724.png"; 
import Timeline from "../components/Timeline";

const Experience = () => {

    return (
    <div className="experience-container" id="experience">
        <img className="experience-image" src={experienceImg}/>
        <h1 className="experience-title">Experience</h1>
        <div className="experience-text">
            <p>My degrees at university were primarily code based, with my bachelors being in Computer Science and my masters in Big Data Analytics.
                During my bachelors I did a year placement as a Web Developer, which is where I first learned React.
            </p>
            <Timeline />
        </div>
        
    </div>
    );
}

export default Experience;