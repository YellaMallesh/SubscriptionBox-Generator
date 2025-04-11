import React from 'react';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a href="/">Your Subscription Box</a> {/* Replace with your brand name/logo */}
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#home">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#categories">Categories</a> {/* Adjust the link as needed */}
          </li>
          <li className="navbar-item">
            <a href="#build-your-box">Build Your Box</a> {/* Adjust the link as needed */}
          </li>
          <li className="navbar-item">
            <a href="#about">About Us</a> {/* Adjust the link as needed */}
          </li>
          {/* Add more navigation items as needed */}
        </ul>
        {/* You could add user authentication links here (e.g., Login, Sign Up) */}
      </div>
    </nav>
  );
}

export default Navbar;