import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";

const timeline = [
    {
        data: "2016-09-01",
        statusTitle: "Started Bachelors degree",
        status: "I made the scary decision to leave home and move to Sheffield to start my Computer Science for Games degree.",
    },
    {
        data: "2018-06-18",
        statusTitle: "Placement year as a Web Developer at Twinkl Educational Publishing.",
        status: "This is where I was first exposed to React and was given the task of self-learning through the official documentation, internet articles and videos. It was a lot of trial and error, trying to figure out the most efficient and correct way to create React components to an industry standard, but as the team grew it got easier and we created a product that was well received by customers.",
    },
    {
        data: "2020-06-01",
        statusTitle: "Finished Bachelors with First Class Honours",
        status: "4 years flew by and it was all over. I had learned so much, from games to web development and even a little mobile development. I had a variety of languages under my belt: C++, C#, JavaScript, PHP... but front-end development had stolen my heart."
    },
    {
        data: "2020-09-01",
        statusTitle: "Started Masters degree",
        status: "There was one aspect of coding that interested me but that I had never tried, data analysis and machine learning. Cue my masters degree...",
    },
    {
        data: "2021-09-27",
        statusTitle: "Finished Masters degree with a Distinction",
        status: "A year of learning Python, R and SQL had passed. During that time I had decided to focus my dissertation on Python and Natural Language Processing, scraping tweets from Twitter and analysing sentiment. I enjoyed discovering this side of programming and felt I had enough exposure to determine what I wanted from my programming career... to be a Front-End Developer."
    }
]

export default class Timeline extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        curIdx: 0
      };
    }
  
    render() {
      const { curIdx } = this.state;
      const curStatus = timeline[curIdx];
  
      return (
        <div className="timeline-container">
          <div className="timeline-wrapper">
            <HorizontalTimeline
              styles={{
                background: "#ffffff",
                foreground: "#03989e",
                outline: "#03989e"
              }}
              index={this.state.curIdx}
              indexClick={(index) => {
                this.setState({ curIdx: index });
              }}
              values={timeline.map((x) => x.data)}
            />
          </div>
          <div className="timeline-status">
            <h4>{curStatus.statusTitle}</h4>
            <p>{curStatus.status}</p>
          </div>
        </div>
      );
    }
  }
  
