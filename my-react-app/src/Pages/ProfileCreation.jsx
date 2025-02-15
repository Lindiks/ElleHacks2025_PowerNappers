import React, { useState } from 'react';
import '../style/profile-creation.css';

const ProfilePage = () => {
  const [image, setImage] = useState(null);

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
        {/* Generate tags when done */}
        <h2>My Interests</h2>
        {/* Generate tags when done - searh n create potentially  */}
        <div className="bio">
            <h2>Easy Bio</h2>
            <button onClick={handleGenerateBio} className="upload-button">Generate Biography</button>
        </div>

        <p>Based on your profile, have generative AI write a short biography based on your personal information and interests. Feel free to edit the text once it’s done generating! If not, feel free to write your own bio.</p>
        
        <textarea className="bio-textarea" placeholder="Write your biography here..."></textarea>
      </div>
    </div>
  );
};

export default ProfilePage;