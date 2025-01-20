import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png"; // Update with your logo path
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="Monito Logo" />
        <div className="navbar-title">
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <a href="/">Home</a>
        <a href="/category">Category </a>
        <li>About</li>
        <li>Contact</li>
      </ul>

      {/* Search Bar and Button */}
      <div className="navbar-actions">
        <div className="search-bar">
          <i><FiSearch /></i> &nbsp;
          <input type="text" placeholder="Search something here!" />
        </div>
        <button className="join-button">Join the community</button>
      </div>
    </nav>
  );
};

export default Navbar;
