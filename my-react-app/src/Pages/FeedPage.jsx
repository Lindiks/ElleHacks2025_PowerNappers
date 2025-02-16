import React from 'react';
import SideBar from '../Components/SideBar.jsx';

import "../style/ContentPage.css"

const FeedPage = () => {
  return (
     <div className='page-container'>
     <SideBar/>
     <div className="content-panel">

     <h1>FeedPage</h1>
     </div>
   </div>
  );
};

export default FeedPage;