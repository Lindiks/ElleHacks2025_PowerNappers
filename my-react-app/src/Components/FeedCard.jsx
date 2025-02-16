import React from 'react';
import '../style/feed-card.css';

const FeedCard = ({ user }) => {
  return (
    <div className="feed-card">
      <div className="feed-card-header">
        <div className="profile-info">
          <img src={user.profileImage} alt="Profile" className="profile-image" />
          <div className="profile-text">
            <span className="profile-name">{user.name} with</span>
            <span className="profile-username">@{user.username}</span>
          </div>
        </div>
        <span className="time-ago">{user.timeAgo}</span>
      </div>
      <img src={user.postImage} alt="Post" className="post-image" />
      <div className="feed-card-footer">
        <div className="footer-left">
          <span className="post-date">{user.date}</span>
        </div>
        <div className="footer-right">
          <span className="heart-count">{user.heartCount}</span>
          <span className="heart-icon">❤️</span>
        </div>
      </div>
      <p className="post-description">{user.description}</p>
    </div>
  );
};

export default FeedCard;