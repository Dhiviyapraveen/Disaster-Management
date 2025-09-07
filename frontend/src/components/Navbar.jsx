import React from "react";
import "./Navbar.css"; // We'll style it separately

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">🌍 DisasterGuard</h1>
        <ul className="nav-links">
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#alerts">Live Alerts</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
