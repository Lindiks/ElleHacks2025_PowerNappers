import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import * as React from 'react';

const interestArr = ["Nature", "Cooking", "Gardening", "Fishing", "Crochet"]

export default function UserTags() {
  
  const [availability, setAvailability] = React.useState([]);

  const handleAvailability = (event, newAvailability) => {
    if (newAvailability !== null) {
      setAvailability(newAvailability);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto space-y-4">
      <ToggleButtonGroup
        value={availability}
        onChange={handleAvailability}
        aria-label="Interest"
        exclusive={false} 
        sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '10px',
          borderRadius: '20px', // Ensures group doesn’t override button corners
          '& .MuiToggleButtonGroup-grouped': {
            margin: '0 !important', // Ensures no unwanted margin
            borderRadius: '20px !important', // Forces all buttons to have rounded corners
            border: '2px solid #5F726F !important', // Ensures full borders are visible
          },
          '& .MuiToggleButtonGroup-grouped:not(:first-of-type)': {
            borderLeft: '2px solid #5F726F !important', // Restores left border on grouped buttons
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
              borderRadius: '20px !important', // Ensures each button remains rounded
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
