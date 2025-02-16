import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/profile-creation.css';
import Tags from '../Components/Tags'
import Interests from '../Components/Interests'

const ProfilePage = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleGenerateBio = () => {
    console.log('Generate Bio');
  };
  const handleCompleteProfile = () => {
    navigate('/connect');
  };
//   const apiUrl = process.env.REACT_APP_API_URL;

// fetch(`${apiUrl}/users`)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error('Error:', error));




  return (
    <div className="profile-page">
      <div className="left-side">
        <div className="image-frame">
          {image ? <img src={image} alt="Profile" /> : <div className="placeholder">Upload Image</div>}
        </div>
        <label className="upload-button">
          Upload Image
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </label>
        <h2>Personal Information</h2>
        <input type="text" placeholder="First Name" className="input-field" />
        <input type="text" placeholder="Last Name" className="input-field" />
        <input type="number" placeholder="Age" className="input-field" />
      </div>
      <div className="right-side-form">
        <h1>About Me</h1>
        <div className="input-group">
          <input type="text" placeholder="Address" className="input-field" />
          <input type="text" placeholder="City" className="input-field" />
        </div>
        <h2>My Availability</h2>
        <Tags/>
        <h2>My Interests</h2>
        <Interests/>
        <div className="bio">
            <h2>Easy Bio</h2>
            <button onClick={handleGenerateBio} className="upload-button">Generate Biography</button>
        </div>

        <p>Based on your profile, have generative AI write a short biography based on your personal information and interests. Feel free to edit the text once it’s done generating! If not, feel free to write your own bio.</p>
        
        <textarea className="bio-textarea" placeholder="Write your biography here..."></textarea>

        <div className="checkbox-group">
          <h2>Additional Care</h2>
          <label>
            <input type="checkbox" className="checkbox" />
            Care Taker Assistance
          </label>
          <label>
            <input type="checkbox" className="checkbox" />
            Limited Accessibility
          </label>
        </div>
        
        <button onClick={handleCompleteProfile} className="connect-button">Complete</button>
      </div>
    </div>
  );
};

export default ProfilePage;