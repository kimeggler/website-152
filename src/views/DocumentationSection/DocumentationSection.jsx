import React from "react";
import "./_style.css";
import { download } from "../../assets";
import { document_script, selim_orakci_copyright, selim_orakci_datatypes, selim_orakci_plugins_and_scripts, tobias_blaser_copyright, tobias_blaser_dataatypes, tobias_blaser_plugins_and_scripts, kim_eggler_copyright, kim_eggler_datatypes, kim_eggler_plugins_and_scripts } from '../../documents';

function DocumentationSection() {
  return (
    <div className="DocumentationSection">
      <h1>Dokumente</h1>
      <h4>Allgemein</h4>
      <div className="download-area">
        <div className="download-card">
          <h5>Drehbuch</h5>
          <a className="download-link" href={document_script} download><img className="download-icon" src={download} alt="download file" /></a>
        </div>
      </div>
      <h4>Selim Orakçi</h4>
      <div className="download-area">
        <div className="download-card">
          <h5>Plugins</h5>
          <a className="download-link" href={selim_orakci_plugins_and_scripts} download><img className="download-icon" src={download} alt="download file" /></a>
        </div>
        <div className="download-card">
          <h5>Copyright</h5>
          <a className="download-link" href={selim_orakci_copyright} download><img className="download-icon" src={download} alt="download file" /></a>
        </div>
        <div className="download-card">
          <h5>Dateiformate</h5>
          <a className="download-link" href={selim_orakci_datatypes} download><img className="download-icon" src={download} alt="download file" /></a>
        </div>
      </div>
      <h4>Tobias Blaser</h4>
      <div className="download-area">
        <div className="download-card">
          <h5>Plugins</h5>
          <a className="download-link" href={tobias_blaser_plugins_and_scripts} download><img className="download-icon" src={download} alt="download file" /></a>
        </div>
        <div className="download-card">
          <h5>Copyright</h5>
          <a className="download-link" href={tobias_blaser_copyright} download><img className="download-icon" src={download} alt="download file" /></a>
        </div>
        <div className="download-card">
          <h5>Dateiformate</h5>
          <a className="download-link" href={tobias_blaser_dataatypes} download><img className="download-icon" src={download} alt="download file" /></a>
        </div>
      </div>
      <h4>Kim Eggler</h4>
      <div className="download-area">
        <div className="download-card">
          <h5>Plugins</h5>
          <a className="download-link" href={kim_eggler_plugins_and_scripts} download><img className="download-icon" src={download} alt="download file" /></a>
        </div>
        <div className="download-card">
          <h5>Copyright</h5>
          <a className="download-link" href={kim_eggler_copyright} download><img className="download-icon" src={download} alt="download file" /></a>
        </div>
        <div className="download-card">
          <h5>Dateiformate</h5>
          <a className="download-link" href={kim_eggler_datatypes} download><img className="download-icon" src={download} alt="download file" /></a>
        </div>
      </div>
    </div>
  );
}

export default DocumentationSection;
