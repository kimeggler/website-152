import React, { useState } from 'react';
import './_style.css';

function Home() {
  const [visiblePhoto, toggleVisibilityPhoto] = useState(
    false
  );
  const [visibleVideo, toggleVisibilityVideo] = useState(
    false
  );
  const [visibleDocumentation, toggleVisibilityDocumentation] = useState(
    false
  );

  let renderPhoto = {
    visibility: visiblePhoto ? 'visible' : 'hidden'
  }
  let renderVideo = {
    visibility: visibleVideo ? 'visible' : 'hidden'
  }
  let renderDocumentation = {
    visibility: visibleDocumentation ? 'visible' : 'hidden'
  }

  return (
    <div className="Home">
      <div className="background-filter"></div>
      <h2 className="site-title">NAVIGATION</h2>

      <div className="home-navigation">
        <a href="/photo" className="nav-link-tag" onMouseEnter={() => toggleVisibilityPhoto(!visiblePhoto)} onMouseLeave={() => toggleVisibilityPhoto(!visiblePhoto)}>
          <div className="link-background-element" style={renderPhoto}></div>
          <h1 className="navigation-link">PHOTOS</h1>
        </a>
        <a href="/video" className="nav-link-tag" onMouseEnter={() => toggleVisibilityVideo(!visibleVideo)} onMouseLeave={() => toggleVisibilityVideo(!visibleVideo)}>
          <div className="link-background-element" style={renderVideo}></div>
          <h1 className="navigation-link">VIDEOS</h1>
        </a>
        <a href="/documentation" className="nav-link-tag" onMouseEnter={() => toggleVisibilityDocumentation(!visibleDocumentation)} onMouseLeave={() => toggleVisibilityDocumentation(!visibleDocumentation)}>
          <div className="link-background-element" style={renderDocumentation}></div>
          <h1 className="navigation-link">DOCUMENTATION</h1>
        </a>
      </div>
    </div>
  );
}

export default Home;
