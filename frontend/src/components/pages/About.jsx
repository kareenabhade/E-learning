import React from 'react';
import { Box, Typography, Container, Grid, Avatar } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import ComputerIcon from '@mui/icons-material/Computer';
import Footer from '../footer/Footer'; // Assuming you have a Footer component

const About = () => {
  return (
    <>
      <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
        <Container>
          <Typography variant="h2" align="center" gutterBottom fontFamily={'Anton SC'} color='#686D76' sx={{textShadow:'1px 1px black'}} >
            About Us
          </Typography>
          <Typography variant="h5" align="center" color="#373A40" paragraph fontFamily='Rajdhani' fontWeight={600} >
            We are dedicated to providing the best e-learning experience to our students.
          </Typography>
        </Container>
      </Box>

      <Container sx={{ py: 8}}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Box textAlign="center" sx={{display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center'}} >
              <Avatar sx={{ bgcolor: '#2196f3', width: 80, height: 80, mb: 2 }}>
                <SchoolIcon fontSize="large" />
              </Avatar>
              <Typography variant="h6" fontFamily='Rajdhani' fontWeight={700}  gutterBottom  >Our Mission</Typography>
              <Typography variant="body1" color="textSecondary" fontFamily='Rajdhani' fontWeight={600} fontSize={18} >
                Our mission is to democratize education, making it accessible and affordable for everyone, everywhere.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box textAlign="center"  sx={{display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center'}}  >
              <Avatar sx={{ bgcolor: '#4caf50', width: 80, height: 80, mb: 2 }}>
                <PeopleIcon fontSize="large" />
              </Avatar>
              <Typography variant="h6" fontFamily='Rajdhani' fontWeight={700}  gutterBottom >Our Community</Typography>
              <Typography variant="body1" color="textSecondary" fontFamily='Rajdhani' fontWeight={600} fontSize={18}>
                Join a vibrant community of learners and educators, sharing knowledge and growing together.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box textAlign="center"  sx={{display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center'}}  >
              <Avatar sx={{ bgcolor: '#ff5722', width: 80, height: 80, mb: 2 }}>
                <ComputerIcon fontSize="large" />
              </Avatar>
              <Typography variant="h6"fontFamily='Rajdhani' fontWeight={700}  gutterBottom  >Our Technology</Typography>
              <Typography variant="body1" color="textSecondary" fontFamily='Rajdhani' fontWeight={600} fontSize={18} >
                We leverage cutting-edge technology to deliver a seamless and engaging learning experience.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ bgcolor: '#e0e0e0', py: 8}}>
        <Container>
          <Typography variant="h4" align="center" fontFamily="Anton SC" color='textSecondary' sx={{textShadow:'1px 1px white'}} gutterBottom>
            Meet Our Team
          </Typography>
          <Typography variant="body1" align="center" color="textSecondary" paragraph fontFamily='Rajdhani' fontWeight={600} fontSize={20} gutterBottom>
            Our team consists of passionate educators, developers, and designers committed to making learning enjoyable and effective.
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {/* Example team members */}
            <Grid item xs={12} sm={6} md={3}>
              <Box textAlign="center"  sx={{display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center',}}  >
                <Avatar
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                  sx={{ width: 120, height: 120, mb: 2 }}
                />
                <Typography variant="h6"  fontFamily='Rajdhani' fontWeight={700} >John Doe</Typography>
                <Typography variant="body1" color="textSecondary">
                  CEO & Founder
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box textAlign="center"  sx={{display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center'}}  >
                <Avatar
                  src="https://t3.ftcdn.net/jpg/04/87/68/50/360_F_487685080_XamNWZID1g7cvOkHYHsPc2X84ScKuZGU.jpg"
                  sx={{ width: 120, height: 120, mb: 2 }}
                />
                <Typography variant="h6" fontFamily='Rajdhani' fontWeight={700} >Jane Smith</Typography>
                <Typography variant="body1" color="textSecondary">
                  Head of Education
                </Typography>
              </Box>
            </Grid>
            {/* Add more team members as needed */}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: '#cfd8dc', py: 8 }}>
        <Container>
          <Typography variant="h4" align="center" fontFamily='Rajdhani' fontWeight={700} gutterBottom>
            Our Story
          </Typography>
          <Typography variant="body1" align="center" color="textSecondary" fontFamily='Rajdhani' fontWeight={600} fontSize={20} paragraph>
            Founded in 2022, our e-learning platform was created with the goal of making quality education accessible to everyone. 
            We believe that education is a powerful tool that can transform lives and communities.
          </Typography>
        </Container>
      </Box>

      <Footer /> 
    </>
  );
}

export default About;
