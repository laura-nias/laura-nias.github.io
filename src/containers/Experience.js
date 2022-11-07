import React from "react";
import underline from "../images/header-underline.svg";
import yearBorder from "../images/year-border.svg";

const Experience = () => {
  const expInfo = [
    {
      year: "2016",
      statusTitle: "Started Bachelors Degree",
      status:
        "I made the scary decision to leave home and move to Sheffield to start my Computer Science for Games degree.",
    },
    {
      year: "2018",
      statusTitle: "Year as a Web Developer at Twinkl Educational Publishing",
      status:
        "This is where I was first exposed to React and was given the task of self-learning through the official documentation, internet articles and videos. It was a lot of trial and error, trying to figure out the most efficient and correct way to create React components to an industry standard, but as the team grew it got easier and we created a product that was well received by customers.",
    },
    {
      year: "2020",
      statusTitle: "Finished Bachelors with First Class Honours",
      status:
        "4 years flew by and it was all over. I had learned so much, from games to web development and even a little mobile development. I had a variety of languages under my belt: C++, C#, JavaScript, PHP... But there was one aspect of coding that interested me that I had never tried, data analysis and machine learning. Cue my masters degree...",
    },
    {
      year: "2021",
      statusTitle: "Finished Masters degree with a Distinction",
      status:
        "A year of learning Python, R and SQL had passed. During that time I had decided to focus my dissertation on Python and Natural Language Processing, scraping tweets from Twitter and analysing sentiment. I enjoyed discovering this side of programming and felt I had enough exposure to determine what I wanted from my programming career... to be a Front-End Developer.",
    },
  ];

  return (
    <div className="experience-container" id="experience">
      <h1 className="experience-title">Experience</h1>
      <img className="experience-title-underline" src={underline} />
      <div className="experience-text">
        <p>
          My degrees at university were primarily code based, with my bachelors
          being in Computer Science and my masters in Big Data Analytics. During
          my bachelors I did a year placement as a Web Developer, which is where
          I first learned React.
        </p>
      </div>
      {expInfo.map((item) => {
        return (
          <>
            <div className="experience-year-container">
              <img className="experience-year-border" src={yearBorder} />
              <p className="experience-year-text">{item.year}</p>
            </div>
            <div>
              <p className="experience-desc-title">{item.statusTitle}</p>
              <p className="experience-desc">{item.status}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Experience;
