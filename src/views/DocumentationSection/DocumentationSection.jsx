import React from 'react';
import './_style.css';
import { TimelineCard } from '../../common';

function DocumentationSection() {

  return (
    <div className="DocumentationSection">
      <h1>Persönliche Entwicklung</h1>
      <div className="timeline">
        <div className="timeline-line"></div>
        <TimelineCard position="left" />
        <TimelineCard position="right" />
      </div>

    </div>
  );
}

export default DocumentationSection;
