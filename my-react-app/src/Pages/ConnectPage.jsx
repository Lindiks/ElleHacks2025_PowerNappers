import React from 'react';

import SideBar from '../Components/SideBar.jsx';
import "../style/ContentPage.css"

const ConnectPage = () => {
  return (
    <div className='page-container'>
      <SideBar/>
      <div className="content-panel">

      <h1>Connect Page</h1>
      <p>This is the Connect Page.</p>
      {/* <Tags></Tags> */}
      </div>
    </div>
  );
};

export default ConnectPage;