import React from "react";
import "./HeroSection.css";
import heroImage from "../../assets/images/dog-person.png";
import { FaRegCirclePlay } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        {/* Hero Text */}
        <div className="hero-text">
          <h1> One More Friend </h1>
           <h2> Thousands More Fun! </h2>
          <p>
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className="hero-buttons">
            <button className="hbtn-outline">View Intro &nbsp;<i><FaRegCirclePlay /></i></button>
            <button className="hbtn-primary"><a href="/category">Explore Now</a></button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image">
          <img src={heroImage} alt="Dog and Person" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
