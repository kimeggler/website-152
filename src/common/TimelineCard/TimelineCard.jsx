import React, { useState, useEffect } from 'react';
import { right_arrow, left_arrow } from '../../assets'
import './_style.css';

function TimelineCard(props) {
  const [style, setStyle] = useState();

  useEffect(() => {
    setStyle({ "align-self": props.position === "left" ? "flex-start" : "flex-end" });
  }, [props.position])
  console.log(style);

  return (
    <div className="TimelineCard" style={style}>
      <div className="card-header">
        <h1>Fancy Header</h1>
        <h4>12.09.2019</h4>
      </div>
      <div className="personal-review">
        <p>fancy text that describes what we have been doing this week</p>
      </div>
      <img className={props.position === "left" ? "left-arrow" : "right-arrow"} alt="arrow" src={props.position === "left" ? left_arrow : right_arrow} />
    </div>
  );
}

export default TimelineCard;
