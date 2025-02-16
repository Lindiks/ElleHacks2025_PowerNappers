
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import * as React from 'react';

export default function Tags({ setAvailability }) {
  const [selectedAvailability, setSelectedAvailability] = React.useState([]);

  const handleAvailabilityChange = (event, newAvailability) => {
    setSelectedAvailability(newAvailability);
    setAvailability(newAvailability);
  };

  return (
    <div className="p-4 max-w-md mx-auto space-y-4">
      <ToggleButtonGroup
        value={selectedAvailability}
        onChange={handleAvailabilityChange}
        aria-label="Availability"
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
        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
          <ToggleButton
            key={day}
            value={day}
            aria-label={day}
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
            {day}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}