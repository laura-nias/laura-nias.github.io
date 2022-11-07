import React from "react";

export const Card = (props) => {
  return (
    <div className={`${props.name}-container`}>
      <div className="card-body">
        <div className="front">
          <div className="card-title">{props.title}</div>
          <div className="card-text">{props.text}</div>
        </div>
        <div className="back">
        <button className="view-btn" type="button" value="View">
          <a href={props.url}>View</a>
          </button>
        </div>
      </div>
    </div>
  );
};
