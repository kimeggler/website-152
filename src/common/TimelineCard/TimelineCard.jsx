import React, { useState, useEffect } from "react";
import { right_arrow, left_arrow } from "../../assets";
import "./_style.css";

function TimelineCard(props) {
  const [style, setStyle] = useState();

  useEffect(() => {
    setStyle({
      "align-self": props.position === "left" ? "flex-start" : "flex-end"
    });
  }, [props.position]);
  console.log(style);

  return (
    <div className="TimelineCard" style={style}>
      <div className="card-header">
        <h2 className="card-title">{props.title}</h2>
        <h4>{props.author}</h4>
      </div>
      <div className="personal-review">
        <p>{props.text}</p>
      </div>
      <img
        className={props.position === "left" ? "left-arrow" : "right-arrow"}
        alt="arrow"
        src={props.position === "left" ? left_arrow : right_arrow}
      />
    </div>
  );
}

export default TimelineCard;
