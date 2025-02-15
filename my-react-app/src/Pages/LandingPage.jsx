import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <nav>
        <Link to="/connect">Connct Page</Link>
      </nav>
    </div>

    
  );
};

export default LandingPage;