import React from "react";
import "./Banner.css";
import bannerBg from "../../assets/images/banner-bg.png"; 
import { FaRegCirclePlay } from "react-icons/fa6";

const BannerSection = () => {
  return (
    <div className="banner-section">
      <div className="banner-container">
        <div
          className="banner-bg"
          style={{ backgroundImage: `url(${bannerBg})` }}>
           <div className="banner-content">
             <h2>One More Friend</h2>
             <h3>Thousands More Fun!</h3>
             <p>
               Having a pet means you have more joy, a new friend, a happy person
               who will always be with you to have fun. We have 200+ different pets
               that can meet your needs!
             </p>
             <div className="banner-buttons">
               <button className="btn-outline">View Intro &nbsp;<i><FaRegCirclePlay /></i></button>
               <button className="btn-primary"><a href="/category">Explore Now</a></button>
             </div>
          </div>
      </div>
        
      </div>
    </div>
  );
};

export default BannerSection;
