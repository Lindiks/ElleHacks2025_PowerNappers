import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/profile-creation.css';
import Tags from '../Components/Tags';
import UserTags from '../Components/Interests';
import { generateBio } from '../utils/genai'; // Adjust the import path as needed
// import Collapsible from '../Components/Collapsible';

const ProfilePage = () => {
  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [availability, setAvailability] = useState([]);
  const [interests, setInterests] = useState([]);
  const [bio, setBio] = useState('');
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

  const handleGenerateBio = async () => {
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Age:', age);
    console.log('Address:', address);
    console.log('City:', city);
    console.log('Availability:', availability);
    console.log('Interests:', interests);

    const prompt = `Write a short biography for an elderly person named ${firstName} ${lastName}, aged ${age}. They live in ${city}. They enjoy ${interests.join(', ')}. They are available for ${availability.join(', ')}.`;

    try {
      const generatedText = await generateBio(prompt);
      setBio(generatedText);
    } catch (error) {
      console.error('Error generating bio:', error);
    }
  };

  const handleCompleteProfile = () => {
    navigate('/connect');
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
        <input type="text" placeholder="First Name" className="input-field" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" placeholder="Last Name" className="input-field" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <input type="number" placeholder="Age" className="input-field" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div className="right-side-form">
        <h1>About Me</h1>
        <div className="input-group">
          <input type="text" placeholder="Address" className="input-field" value={address} onChange={(e) => setAddress(e.target.value)} />
          <input type="text" placeholder="City" className="input-field" value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
        <h2>My Availability</h2>
        <Tags setAvailability={setAvailability} />
        <h2>My Interests</h2>
        <UserTags interestArr={["Nature", "Cooking", "Gardening", "Crochet", "Art", "Photography", "Bird Watching", "Reading", "Chess", "Cards"]} setInterests={setInterests} />
        <div className="bio">
          <h2>Easy Biography</h2>
          <button onClick={handleGenerateBio} className="upload-button">Generate Biography</button>
        </div>
        <p>Based on your profile, have generative AI write a short biography based on your personal information and interests. Feel free to edit the text once it’s done generating! If not, feel free to write your own bio.</p>
        <textarea className="bio-textarea" placeholder="Write your biography here..." value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
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