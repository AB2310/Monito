import React from "react";
import "./AllDogsBanner.css";
import alldogbanner from "../../assets/images/all-dog-banner.png"; // Adjust path as needed
import { FaRegCirclePlay } from "react-icons/fa6";

const ADBannerSection = () => {
    return (
         <div className="adbanner-section">
              <div className="adbanner-container">
                <div
                  className="adbanner-bg"
                  style={{ backgroundImage: `url(${alldogbanner})` }}>
                   <div className="adbanner-content">
                     <h2>One More Friend</h2>
                     <h3>Thousands More Fun!</h3>
                     <p>
                       Having a pet means you have more joy, a new friend, a happy person
                       who will always be with you to have fun. We have 200+ different pets
                       that can meet your needs!
                     </p>
                     <div className="adbanner-buttons">
                       <button className="adbtn-outline">View Intro &nbsp;<i><FaRegCirclePlay /></i></button>
                       <button className="adbtn-primary">Explore Now</button>
                     </div>
                  </div>
              </div>
                
              </div>
            </div>
          );
        };

export default ADBannerSection;