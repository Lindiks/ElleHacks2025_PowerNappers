const handleCompleteProfile = async () => {
    const profileData = {
      image: image, // Already stored as Base64 from handleImageUpload
      firstName,
      lastName,
      age,
      address,
      city,
      availability,
      interests,
      bio,
      additionalCare: {
        careTakerAssistance: false, // Update these values based on checkbox state
        limitedAccessibility: false
      }
    };

    const url = {
      "prod":"https://ellehacks2025-powernappers.onrender.com/",
      "dev": "http://localhost:3000/"}
  
    try {
      const response = await fetch(url['prod'], {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(profileData)
      });
  
      if (response.ok) {
        console.log('Profile saved successfully!');
        navigate('/connect'); // Redirect on success
      } else {
        console.error('Failed to save profile:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting profile:', error);
    }
  };
  