import React from "react";
import ReactPlayer from "react-player";
import { infinity_war } from "../../videos";
import { infinity_war_placeholder } from "../../images";
import "./_style.css";

function VideoSection() {
  return (
    <div className="VideoSection">
      <h2 className="site-title">VIDEO</h2>
      <section className="video-section">
        <h2 className="section-title">INFINITY WAR</h2>
        <ReactPlayer
          url={infinity_war}
          light={infinity_war_placeholder}
          playing
          controls
        />
        <div className="section-splitter" />
        <h2 className="section-title">NASA LIVESTREAM</h2>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=21X5lGlDOfg"
          loop
          controls
        />
      </section>
    </div>
  );
}

export default VideoSection;
