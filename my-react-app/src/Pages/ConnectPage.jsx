// import React from 'react';
import React, { useEffect, useState } from "react";
import SideBar from '../Components/SideBar.jsx';
import ConnectCard from '../Components/ConnectCard.jsx';
import NavBar from '../Components/NavBar.jsx';
import "../style/ContentPage.css"

import profilePic1 from '../assets/profilePic1.jpg';
import profilePic2 from '../assets/profilePic2.jpg';
import profilePic3 from '../assets/profilePic3.jpg';
import profilePic4 from '../assets/profilePic4.jpg';

const ConnectPage = () => {
  const [users, setUsers] = useState([]);
  const url = {
    "prod":"https://ellehacks2025-powernappers.onrender.com/",
    "dev": "http://localhost:3000/"}

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(url["prod"] + "users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data["users"]);
        console.log(data["users"]);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchUsers();
  }, []);
  
  const userxs = [
    {
      firstName: 'Robert',
      lastName: 'Dorsey',
      age: 65,
      description: 'Loves gardening and spending time with family.',
      tags: ['Fishing', 'Cooking', 'Camping'],
      distance: '5 km away',
      imageUrl: profilePic2,
    },
    {
      firstName: 'Kaylee',
      lastName: 'Yuen',
      age: 70,
      description: 'Enjoys painting and reading books.',
      tags: ['Fishing', 'Cooking', 'Crochet'],
      distance: '8 km away',
      imageUrl: profilePic1,
    },
    {
      firstName: 'Alice',
      lastName: 'Johnson',
      age: 68,
      description: 'Passionate about cooking and volunteering.',
      tags: ['Fishing', 'Painting', 'Dance'],
      distance: '10 km away',
      imageUrl: profilePic3,
    },
    {
      firstName: 'Andrew',
      lastName: 'Rivera',
      age: 68,
      description: 'Passionate about cooking and volunteering.',
      tags: ['Cooking', 'Puzzels', 'Reading'],
      distance: '15 km away',
      imageUrl: profilePic4,
    },
    
  ];

  return (
    <div className='page-container'>
      <SideBar />
      <div className="content-panel">
        <NavBar/>
        <h1>Connect Page</h1>
        <p className="short-connect-description">
          Find and connect with people who <strong>share your interests</strong> and are <strong>nearby</strong>. These potential connections are sorted by the most amount of shared interests and distance, making it easy to find the best matches for <strong>socializing</strong>. You can also request services for <strong>caretakers</strong> and <strong>ride services</strong> to facilitate your meetups.
        </p>
        {users.map((user, index) => (
          <ConnectCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default ConnectPage;