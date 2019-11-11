import React from "react";
import ReactCompareImage from "react-compare-image";
import ashtray_selim from "../../images/selim/ashtray_unedited.jpg";
import tippex_selim from "../../images/selim/tippex_unedited.jpg";
import chair_selim from "../../images/selim/chair_unedited.jpg";
import ashtray_edited_selim from "../../images/selim/ashtray_edited.jpg";
import tippex_edited_selim from "../../images/selim/tippex_edited.jpg";
import chair_edited_selim from "../../images/selim/chair_edited.jpg";
import stone_tobias from "../../images/tobias/stone_unedited.jpg";
import tippex_tobias from "../../images/tobias/tippex_unedited.jpg";
import tower_tobias from "../../images/tobias/tower_unedited.jpg";
import tower_edited_tobias from "../../images/tobias/tower_edited.jpg";
import stone_edited_tobias from "../../images/tobias/stone_edited.jpg";
import tippex_edited_tobias from "../../images/tobias/tippex_edited.jpg";
import ashtray_kim from "../../images/kim/ashtray_unedited.jpg";
import bottle_kim from "../../images/kim/bottle_unedited.jpg";
import lock_kim from "../../images/kim/lock_unedited.jpg";
import ashtray_edited_kim from "../../images/kim/ashtray_edited.jpg";
import bottle_edited_kim from "../../images/kim/bottle_edited.jpg";
import lock_edited_kim from "../../images/kim/lock_edited.jpg";
import "./_style.css";

function PhotoSection() {
  return (
    <div className="PhotoSection">
      <h2 className="site-title">PHOTOS</h2>
      <section className="selim image-section">
        <h2 className="section-title">PHOTOS FROM SELIM</h2>
        <div className="image-box">
          <h3>"Ashtray"</h3>
          <ReactCompareImage
            leftImage={ashtray_selim}
            rightImage={ashtray_edited_selim}
          />
          <div className="image-description">
            <div className="description-group">
              <h4 className="description-title">Exposure</h4>
              <h4 className="description-value">1/80 s</h4>
            </div>
            <div className="description-group">
              <h4 className="description-title">ISO</h4>
              <h4 className="description-value">100</h4>
            </div>
            <div className="description-group">
              <h4 className="description-title">Aperture</h4>
              <h4 className="description-value">F2.8</h4>
            </div>
          </div>
        </div>
        <div className="image-box">
          <h3>"Tipp-Ex"</h3>
          <ReactCompareImage
            leftImage={tippex_selim}
            rightImage={tippex_edited_selim}
          />
          <div className="image-description">
            <div className="description-group">
              <h4 className="description-title">Exposure</h4>
              <h4 className="description-value">1/125 s</h4>
            </div>
            <div className="description-group">
              <h4 className="description-title">ISO</h4>
              <h4 className="description-value">100</h4>
            </div>
            <div className="description-group">
              <h4 className="description-title">Aperture</h4>
              <h4 className="description-value">F2.8</h4>
            </div>
          </div>
        </div>
        <div className="image-box">
          <h3>"Chair"</h3>
          <ReactCompareImage
            leftImage={chair_selim}
            rightImage={chair_edited_selim}
          />
          <div className="image-description">
            <div className="description-group">
              <h4 className="description-title">Exposure</h4>
              <h4 className="description-value">1/200 s</h4>
            </div>
            <div className="description-group">
              <h4 className="description-title">ISO</h4>
              <h4 className="description-value">100</h4>
            </div>
            <div className="description-group">
              <h4 className="description-title">Aperture</h4>
              <h4 className="description-value">F2.8</h4>
            </div>
          </div>
        </div>
        <div className="section-splitter" />
      </section>
      <section className="tobias image-section">
        <h2 className="section-title">PHOTOS FROM TOBIAS</h2>
        <div className="image-box">
          <h3>"Stone"</h3>
          <ReactCompareImage
            leftImage={stone_tobias}
            rightImage={stone_edited_tobias}
          />
          <div className="image-description">
            <div className="description-group">
              <h4 className="description-title">Exposure</h4>
              <h4 className="description-value">1/160 s</h4>
            </div>
            <div className="description-group">
              <h4 className="description-title">ISO</h4>
              <h4 className="description-value">100</h4>
            </div>
            <div className="description-group">
              <h4 className="description-title">Aperture</h4>
              <h4 className="description-value">F2.8</h4>
            </div>
          </div>
        </div>
        <div className="image-box">
          <h3>"Tipp-Ex"</h3>
          <ReactCompareImage
            leftImage={tippex_tobias}
            rightImage={tippex_edited_tobias}
          />
          <div className="image-description">
            <div className="description-group">
              <h4 className="description-title">Exposure</h4>
              <h4 className="description-value">1/100 s</h4>
            </div>
            <div className="description-group">
              <h4 className="description-title">ISO</h4>
              <h4 className="description-value">100</h4>
            </div>
            <div className="description-group">
              <h4 className="description-title">Aperture</h4>
              <h4 className="description-value">F2.8</h4>
            </div>
          </div>
        </div>
        <div className="image-box">
          <h3>"Tower"</h3>
          <ReactCompareImage
            leftImage={tower_tobias}
            rightImage={tower_edited_tobias}
          />
          <div className="image-description">
            <div className="description-group">
              <h4 className="description-title">Exposure</h4>
              <h4 className="description-value">1/30 s</h4>
            </div>
            <div className="description-group">
              <h4 className="description-title">ISO</h4>
              <h4 className="description-value">100</h4>
            </div>
            <div className="description-group">
              <h4 className="description-title">Aperture</h4>
              <h4 className="description-value">F2.8</h4>
            </div>
          </div>
        </div>
        <div className="section-splitter" />
      </section>
      <section className="kim image-section">
        <h2 className="section-title">PHOTOS FROM KIM</h2>
        <div className="image-box">
          <h3>"Ashtray"</h3>
          <ReactCompareImage
            leftImage={ashtray_kim}
            rightImage={ashtray_edited_kim}
          />
          <div className="image-description">
            <div className="description-group">
              <h4 className="description-title">Exposure</h4>
              <h4 className="description-value">1/160 s</h4>
            </div>
            <div className="description-group">
              <h4 className="description-title">ISO</h4>
              <h4 className="description-value">100</h4>
            </div>
            <div className="description-group">
              <h4 className="description-title">Aperture</h4>
              <h4 className="description-value">F2.8</h4>
            </div>
          </div>
        </div>
        <div className="image-box">
          <h3>"Bottle"</h3>
          <ReactCompareImage
            leftImage={bottle_kim}
            rightImage={bottle_edited_kim}
          />
          <div className="image-description">
            <div className="description-group">
              <h4 className="description-title">Exposure</h4>
              <h4 className="description-value">1/100 s</h4>
            </div>
            <div className="description-group">
              <h4 className="description-title">ISO</h4>
              <h4 className="description-value">100</h4>
            </div>
            <div className="description-group">
              <h4 className="description-title">Aperture</h4>
              <h4 className="description-value">F2.8</h4>
            </div>
          </div>
        </div>
        <div className="image-box">
          <h3>"Lock"</h3>
          <ReactCompareImage
            leftImage={lock_kim}
            rightImage={lock_edited_kim}
          />
          <div className="image-description">
            <div className="description-group">
              <h4 className="description-title">Exposure</h4>
              <h4 className="description-value">1/100 s</h4>
            </div>
            <div className="description-group">
              <h4 className="description-title">ISO</h4>
              <h4 className="description-value">100</h4>
            </div>
            <div className="description-group">
              <h4 className="description-title">Aperture</h4>
              <h4 className="description-value">F3.2</h4>
            </div>
          </div>
        </div>
        <div className="section-splitter" />
      </section>
    </div>
  );
}

export default PhotoSection;
