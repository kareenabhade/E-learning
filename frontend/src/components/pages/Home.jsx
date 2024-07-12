import { Box, Button, Typography } from '@mui/material'
import {useNavigate} from 'react-router-dom'
import React from 'react'
import Testimonials from './Others/Testimonials';
import Footer from '../footer/Footer';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
      navigate('/courses');
  }
  return (
    <>
    <Box sx={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'70vh',
      flexDirection:'column',
      backgroundColor:'#F0F0F0'
    }}>

      <Typography fontFamily={"Anton SC"}  color={"#686D76"} 
                  sx={{m:{md:2, xs:4},
                    textShadow: "1px 1px black",
                    fontSize:{ md:50, xs:40},
                    fontWeight:{md:400, xs:200}
                  }} >
           The more you learn, the more you earn.
      </Typography>
      <Typography sx={{m:2, fontSize:{ md:30, xs:20}, fontWeight:'600', textShadow: "2px 2px white"}}  >Welcome to our E-learning platform</Typography>
      <Button 
        variant='contained' 
        onClick={handleClick}
        sx={{ 
          height: '50px', 
          width: '200px', 
          bgcolor:'transparent',
          border:'3px solid black',
          color:'black',
          fontSize:'15px',
          fontWeight:'900',
          m: 2, 
          ":hover": {
            bgcolor:'black',
            color:'white',
            border: '3px solid', // Add a border to simulate the outlined effect
            borderColor: 'black',
            borderRadius:'5px'
          }
        }}
      >
        Get Started 
      </Button>

    </Box>
    <Box sx={{display:'flex',
              justifyContent:'center',
              alignItems:'center',
              m:4
            
    }} >
    <Typography sx={{fontFamily:'Roboto', fontWeight:'500', fontSize:"30px", color:'#61677A', m:1}} >What our students say</Typography>
    </Box>
    <Testimonials />
     <Box sx={{
              bgcolor:'#C7C8CC',
              p:4,
              mt:5,            
    }} >
          <Footer />
    </Box>
    </>
  )
}

export default Home