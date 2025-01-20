import React from "react";
import "./AdoptionBanner.css";
import adoptionBg from "../../assets/images/adoption-banner.png"; 
import { FaPaw } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";

const AdoptionBanner = () => {
  return (
    <div className="adoption-banner-section">
      <div className="adoption-banner-container">
        <div
          className="adoption-banner-bg"
          style={{ backgroundImage: `url(${adoptionBg})` }}
        >
          <div className="adoption-banner-content">
            <h2>Adoption <b><FaPaw /></b></h2>
            <h3>We Need Help. So Do They.</h3>
            <p>
              Adopt a pet and give it a home, <br></br> it will love you back unconditionally.
            </p>
            <div className="adoption-banner-buttons">
              <button className="btn-primary"><a href="/category">Explore Now</a></button>
              <button className="btn-outline">
                View Intro &nbsp;<i><FaRegCirclePlay /></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdoptionBanner;
