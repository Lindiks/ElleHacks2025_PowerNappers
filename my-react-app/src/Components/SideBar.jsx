import React from 'react';
import '../style/sidebar.css';
import { Link } from "react-router-dom";
import picture from '../assets/picture.png';

const SideBar = () => {
    return(
        <div className="sidebar">
        <div className="logo">
        <div className="logo-icon">
            <img src={picture} alt="Silver Circle Logo" />
        </div>
          <h2 className="sidebar_h2">Silver Circle</h2>
        </div>
  
        {/* Navigation Links */}
        <nav className="nav-links">
        <Link to="/profile-creation" className="nav-item ">Edit Profile</Link>
        <Link to="/connect" className="nav-item ">Socialize</Link>
        <Link to="/" className="nav-item message-center ">Message Center</Link>
        <Link to="/" className="nav-item">My Friends</Link>
      </nav>
      </div>
    )
}

export default SideBar;
