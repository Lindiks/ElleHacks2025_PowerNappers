import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import * as React from 'react';

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function UserTags() {
  const [availability, setAvailability] = React.useState([]);

  const handleAvailability = (event, newAvailability) => {
    if (newAvailability !== null) {
      setAvailability(newAvailability);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-semibold">Set Your Availability</h2>
      
      <ToggleButtonGroup
        value={availability}
        onChange={handleAvailability}
        aria-label="days of the week"
        exclusive={false} 
        
        sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '10px',
          borderRadius: '12px', // Ensures group doesn’t override button corners
          '& .MuiToggleButtonGroup-grouped': {
            margin: '0 !important', // Ensures no unwanted margin
            borderRadius: '12px !important', // Forces all buttons to have rounded corners
            border: '2px solid #5F726F !important', // Ensures full borders are visible
          },
          '& .MuiToggleButtonGroup-grouped:not(:first-of-type)': {
            borderLeft: '2px solid #5F726F !important', // Restores left border on grouped buttons
          }
          
        }}
      >
        {daysOfWeek.map((day) => (
          <ToggleButton
            key={day}
            value={day}
            aria-label={day}
            disableRipple

            sx={{
              padding: '5px 10px',
              border: '2px solid #5F726F',
              borderRadius: '12px !important', // Ensures each button remains rounded
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
            {day}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}
