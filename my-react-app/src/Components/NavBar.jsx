import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-style">

      
        <NavLink to="/connect" className="nv-item">
          Connect
        </NavLink>
        <NavLink to="/feed" className="nv-item">
          Feed
        </NavLink>
        </div>
      </div>
    // </div>
  );
};

export default Navbar;
