import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-newsletter">
        <div className="newsletter-content">
          <h3>
            Register Now So You Don't Miss <br /> Our Programs
          </h3>
        </div>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your Email"
            className="newsletter-input"
          />
          <button type="submit" className="subscribe-btn">
            Subscribe Now
          </button>
        </form>
      </div>
      <div className="footer-links">
        <ul className="footer-nav">
          <a href="/">Home</a>
          <a href="/category">Category </a>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social">
          <a href="#" ><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2022 Monito. All rights reserved.</p>
        <div className="footer-logo"><img src={logo} alt="Monito Logo" /></div>
        <div className="footer-legal">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
