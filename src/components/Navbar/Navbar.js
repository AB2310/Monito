import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { FiSearch } from "react-icons/fi";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu toggle

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Track menu state

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Hamburger Menu (visible in mobile view) */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>

        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Monito Logo" />
        </div>
      </div>

      {/* Navigation Links (Hidden on mobile, shown when menu is open) */}
      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="/category">Category</a>
        <li>About</li>
        <li>Contact</li>
      </ul>

      {/* Search Icon (Visible on mobile) */}
      <div className="navbar-icons">
        <FiSearch size={22} className="search-icon" />
      </div>

      {/* Search Bar and Button (Visible on Desktop) */}
      <div className="navbar-actions">
        <div className="search-bar">
          <FiSearch className="search-icon-desktop" />
          <input type="text" placeholder="Search something here!" />
        </div>
        <button className="join-button">Join the community</button>
      </div>
    </nav>
  );
};

export default Navbar;
