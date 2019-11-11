import React from "react";
import "./_style.css";
import { TimelineCard } from "../../common";

function DocumentationSection() {
  return (
    <div className="DocumentationSection">
      <h1>Persönliche Entwicklung</h1>
      <div className="timeline">
        <div className="timeline-line"></div>
        <TimelineCard
          position="left"
          text="Ich konnte in der Projektarbeit am meisten über Fotobearbeitung und vor allem Filmbearbeitung lernen.
          Filme schneiden und bearbeiten hat mich schon immer interessiert doch ich hatte nie die Möglichkeit es auszuprobieren.
          Dazu hatte ich jedoch in der Projektarbeit genug Zeit. Gemerkt habe ich, das es im Film nicht nur um das Bild, sondern auch viel 
          um den Ton geht. Ich musste alle Sounds die im Video zu hören sind einzeln einfügen, da wir manchmal im Hintergrund
          in den Videos geredet haben und ich das so nicht im Video haben wollte."
          author="Selim Orakçi"
          title="Ich konnte vieles über Videoschnitt lernen!"
        />
        <TimelineCard
          position="right"
          text="In diesem Modul habe ich sehr viel über Medien und vieles was dazu gehört gelernt. Für mich war hauptsächlich das Bearbeiten 
          der Bilder wie auch das ganze Copyright-Thema neu. Beim Bearbeiten der Bilder habe ich einfach ein wenig herumgespielt und es solange 
          angepasst, bis es mir gefallen hat. Videos habe ich selbst vorher auch schon geschnitten und kannte das deshalb schon. Auch Webseiten 
          habe ich vorher schon erstellt und konnte daher da leider auch nichts Neues dazu lernen."
          author="Tobias Blaser"
          title="Ich habe vieles über Medien gelernt!"
        />
        <TimelineCard
          position="left"
          text="Ich konnte in diesem Projekt mein Wissen in der Entwicklung mit React vertiefen. Zusätzlich konnte ich weitere Erkenntnisse 
          mit CSS sammeln. Es hat mir gefallen, dass es ein GiBB-Modul gibt, bei dem man nicht 100% der Zeit im Klassenzimmer verbringen muss.
          Es gelang mir nicht auf allen Seiten, eine Harmonie zwischen den Elementen herzustellen, jedoch konnte ich mich darin üben, ein
          durchgehendes Design über die ganze Seite zu implementieren."
          author="Kim Eggler"
          title="Ich konnte mein Wissen in Website-Entwicklung vertiefen!"
        />
      </div>
    </div>
  );
}

export default DocumentationSection;
