import { Card, Typography, Avatar, Grid, Box } from '@mui/material';
import React from 'react';

const TestimonialCard = ({name, img, description, bg}) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2, p: 2, border: '1px solid #ccc', borderRadius: '10px', bgcolor:`#${bg}` }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Avatar 
          src={img}
          sx={{ height: '100px', width: '100px', m: 2, borderRadius: '50%' }} 
        />
        <Typography variant="h6" component="div" sx={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: "20px", color: 'black', mb: 1 }}>
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" sx={{ fontFamily: 'Arial', textAlign: 'center', px: 2, m: 2 }}>
          {description}         
        </Typography>
        <Typography variant="h6" component="div" sx={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: "15px", color: '#373A40' }}>
          Student
        </Typography>
      </Box>
    </Card>
  );
};

export default TestimonialCard;
