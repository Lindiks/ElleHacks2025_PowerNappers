import React from 'react';
import '../style/connect-card.css';
import '../Components/NavBar.jsx'

const ConnectCard = ({ user }) => {
  const getTagStyle = (tag) => {
    const specialTags = ["Fishing", "Cooking", "Camping"];
    return specialTags.includes(tag) ? "special-tag" : "regular-tag";
  };

  return (
    <div className="connect-card">
      <div className="left-side-connect-card">
        <div className="image-frame">
          <img src={user.imageUrl} alt="User" />
        </div>
      </div>
      <div className="info-container">
        <h1>{user.firstName} {user.lastName}, {user.age}</h1>
        <p>{user.description}</p>
        <div className="tags">
          {user.tags.map((tag, index) => (
            <span key={index} className={`tag ${getTagStyle(tag)}`}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="right-side-connect-card">
        <span className="chevron-icon">&#8250;</span> {/* Unicode character for right-pointing chevron */}
        <span className="distance">{user.distance}</span>
      </div>
    </div>
  );
};

export default ConnectCard;