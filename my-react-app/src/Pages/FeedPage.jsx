import React from 'react';
import SideBar from '../Components/SideBar.jsx';
import FeedCard from '../Components/FeedCard.jsx';
import "../style/ContentPage.css";

import besties from '../assets/waiting-with-besties.jpg';
import chess from '../assets/chess.jpg';
import camping from '../assets/camping.svg';
import kimberly from '../assets/kim-ann.jpg';
import daniel from '../assets/daniel.jpg';
import mark from '../assets/mark-draper.jpg';
// import profilePic4 from '../assets/profilePic4.jpg';


const users = [
  {
    profileImage: kimberly,
    name: 'Kimberly Ann',
    username: 'MarleyDavis',
    timeAgo: '3h ago',
    postImage: besties,
    date: 'Feb 15, 2025',
    heartCount: 120,
    description: 'Went to the Sunday Market with Marley and her husband this weekend. It was such a fun day!\n I would recommend it to anyone who loves fresh produce and handmade goods.'
  },
  {
    profileImage: daniel,
    name: 'Daniel Dickson',
    username: 'Jeffrey Capri',
    timeAgo: '5h ago',
    postImage: camping,
    date: 'Feb 15, 2025',
    heartCount: 85,
    description: 'Jeffrey is one heck of a fire starter. If you like a good beer and roasting potatoes on the fire, reach out and join us. Also if you are not picking up your trash after camping, you should start now'
  },
  {
    profileImage: mark,
    name: 'Mark Draper',
    username: 'Kenneth Yung',
    timeAgo: '1d ago',
    postImage: chess,
    date: 'Feb 14, 2025',
    heartCount: 200,
    description: 'Ken is a chess master, I hate how I lost to him. Looking for easier opponents, thanks.'
  }
];

const FeedPage = () => {
  return (
    <div className='page-container'>
      <SideBar />
      <div className="content-panel">
        <h1>FeedPage</h1>
        {users.map((user, index) => (
          <FeedCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default FeedPage;