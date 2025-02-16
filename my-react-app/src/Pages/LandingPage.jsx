//LandingPage.jsx
import React from 'react';
import '../style/landing-page.css';
import { useNavigate } from 'react-router-dom';
import landingImg from '../assets/LandingImg.jpg'; 

const LandingPage = () => {
    const navigate = useNavigate();

    const handleConnectClick = () => {
      navigate('/profile-creation');
    };
  
  return (
    <div className="landing-page">
      <div className="left-side-landing">
        <h1>Socialize with <br></br> Silver Circle</h1>
        <p>
          Our application connects elders together, helping them socialize and avoid loneliness.
        </p>
        <button onClick={handleConnectClick} className="connect-button">Connect Now</button>
      </div>
      <div className="right-side-landing">
      </div>
    </div>
  );
};

export default LandingPage;