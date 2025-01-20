import React from "react";
import "./PartnerLogos.css";
import plogo1 from "../../assets/images/plogo1.png"; // Replace with actual paths to your logo images
import plogo2 from "../../assets/images/plogo2.png";
import plogo3 from "../../assets/images/plogo3.png";
import plogo4 from "../../assets/images/plogo4.png";
import plogo5 from "../../assets/images/plogo5.png";
import plogo6 from "../../assets/images/plogo6.png";
import plogo7 from "../../assets/images/plogo7.png";
import { IoIosArrowForward } from "react-icons/io";


const PartnerLogos = () => {
  const logos = [
    { id: 1, image: plogo1, alt: "Partner 1" },
    { id: 2, image: plogo2, alt: "Partner 2" },
    { id: 3, image: plogo3, alt: "Partner 3" },
    { id: 4, image: plogo4, alt: "Partner 4" },
    { id: 5, image: plogo5, alt: "Partner 5" },
    { id: 6, image: plogo6, alt: "Partner 6" },
    { id: 7, image: plogo7, alt: "Partner 7" },
    // { id: 8, image: plogo8, alt: "Partner 8" },
    
  ];

  return (
    <div className="partner-logos-section">
      {/* <div className="partner"> */}
      <div className="partner-text">
        Proud to be part of&nbsp;<span class="highlight"> Pet Sellers</span>
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; 
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; 
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; 
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        <button className="view-seller-btn">View all our sellers &nbsp;<i><IoIosArrowForward /></i></button>
      {/* </div> */}
      </div>
      
      <div className="logos-grid">
        {logos.map((logo) => (
          <div key={logo.id} className="logo-card">
            <img src={logo.image} alt={logo.alt} className="logo-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerLogos;
