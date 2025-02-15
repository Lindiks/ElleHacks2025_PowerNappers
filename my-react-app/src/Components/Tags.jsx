import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const activities = ["Nature", "Cooking", "Gardens", "Fishing", "Baking"];

export default function UserTags() {
  const [availability, setAvailability] = React.useState([]);
  const [interests, setInterests] = React.useState([]);

  const handleAvailability = (event, newAvailability) => {
    setAvailability(newAvailability);
  };

  const handleInterest = (event, newInterests) => {
    setInterests(newInterests);
  };

  return (
    <div className="p-4 max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-semibold">Set Your Availability</h2>
      <ToggleButtonGroup
        value={availability}
        onChange={handleAvailability}
        aria-label="days of the week"
      >
        {daysOfWeek.map((day) => (
          <ToggleButton
            key={day}
            value={day}
            aria-label={day}
            sx={{
              borderRadius: '16px', // Make buttons round
              padding: '8px 16px',
              '&.Mui-selected': {
                backgroundColor: '#1976d2', // Highlighted color
                color: 'white', // Text color when highlighted
              },
              '&.MuiToggleButton-root': {
                borderColor: '#1976d2', // Border color
              },
              '&:hover': {
                backgroundColor: '#e3f2fd', // Light hover effect
              },
            }}
          >
            {day}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      <h2 className="text-xl font-semibold">Choose Your Interests</h2>
      <ToggleButtonGroup
        value={interests}
        onChange={handleInterest}
        aria-label="interests"
      >
        {activities.map((activity) => (
          <ToggleButton
            key={activity}
            value={activity}
            aria-label={activity}
            sx={{
              borderRadius: '16px', // Make buttons round
              padding: '8px 16px',
              '&.Mui-selected': {
                backgroundColor: '#388e3c', // Highlighted color for interests
                color: 'white', // Text color when highlighted
              },
              '&.MuiToggleButton-root': {
                borderColor: '#388e3c', // Border color for interests
              },
              '&:hover': {
                backgroundColor: '#c8e6c9', // Light hover effect for interests
              },
            }}
          >
            {activity}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}
