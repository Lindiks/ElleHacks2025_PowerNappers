import React, { useState } from 'react';
import { Collapse, Button, Box, Autocomplete, TextField } from '@mui/material';
import Interests from './Interests.jsx'


export default function CollapsibleSection() {
  const interestArr = ["Nature", "Cooking", "Gardening", "Fishing", "Crochet"]

  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ mt: 4, border: 'none' }}>
      <Button 
        onClick={() => setOpen(!open)} 
        variant="contained" 
        sx={{ mb: 2, border: 'none', background: 'none', color: '#5F726F'}}
      >
    +    Add another Interest
      </Button>
      <Collapse in={open}>
        <Box 
          sx={{ 
            width: '100%'
          }}
        >

    <Autocomplete
      disablePortal
      options={interestArr}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Start typing " />}
    />

        </Box>
      </Collapse>
    </Box>
  );
}
