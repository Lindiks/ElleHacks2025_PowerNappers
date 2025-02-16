// filepath: /c:/Users/veron/Dropbox/My PC (VeronicasPC)/Documents/GitHub/ElleHacks2025_PowerNappers/my-react-app/src/Components/Interests.jsx
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import * as React from 'react';

export default function UserTags({ interestArr, setInterests }) {
  const [selectedInterests, setSelectedInterests] = React.useState([]);

  const handleInterestChange = (event, newInterests) => {
    setSelectedInterests(newInterests);
    setInterests(newInterests);
  };

  return (
    <div className="p-4 max-w-md mx-auto space-y-4">
      <ToggleButtonGroup
        value={selectedInterests}
        onChange={handleInterestChange}
        aria-label="Interest"
        exclusive={false} 
        sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '10px',
          borderRadius: '20px',
          '& .MuiToggleButtonGroup-grouped': {
            margin: '0 !important',
            borderRadius: '20px !important',
            border: '2px solid #5F726F !important',
          },
          '& .MuiToggleButtonGroup-grouped:not(:first-of-type)': {
            borderLeft: '2px solid #5F726F !important',
          }
        }}
      >
        {interestArr.map((interest) => (
          <ToggleButton
            key={interest}
            value={interest}
            aria-label={interest}
            disableRipple
            sx={{
              padding: '5px 10px',
              border: '2px solid #5F726F',
              borderRadius: '20px !important',
              backgroundColor: 'transparent',
              '&.Mui-selected': {
                backgroundColor: '#5F726F', 
                color: 'white',
              },
              '&:hover': {
                backgroundColor: '#5F726F',
                color: 'white',
              },
            }}
          >
            {interest}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}