import React from 'react';
import Footer from '../footer/Footer';
import { MdDashboard } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { Box, Typography, Button } from '@mui/material';
import profileIcon from './Images/avatar.png';
import { UserData } from '../../Context/UserContext';
import {toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Account = ({ user }) => {
  const { setIsAuth, setUser } = UserData();
  const navigate = useNavigate();

  const handleClick = () => {
    // Implement the handle click logic
  }

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    setIsAuth(false);
    toast.success('Logged Out', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
    console.log('Logging out, navigating to login in 3 seconds...');

    setTimeout(() => {
      console.log('Navigating to login page...');
      navigate('/login'); 
    }, 3000); 
  }

  return (
    <>
      <Box bgcolor='#EEF5FF' sx={{ height: '91vh', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: '1' }}>
          <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
            <img height={200} width={200} src={profileIcon} style={{ opacity: '0.25' }} />
            <Box>
              <Typography fontFamily='Anton SC' fontSize={30} color='#686D76' sx={{ textShadow: '1px 1px grey' }} gutterBottom>
                My Profile
              </Typography>
              <Typography sx={{ fontFamily: 'Rajdhani', fontSize: '24px', fontWeight: '600' }}>
                Name : {user.name}<br />
                E-mail : {user.email}
              </Typography>
              <Button
                variant='contained'
                onClick={handleClick}
                sx={{
                  height: {md:'50px', xs:'30px'},
                  width: {md:'200px', xs:'100px'},
                  bgcolor: 'transparent',
                  border: '2px solid black',
                  color: 'black',
                  fontSize: {md:'15px', xs:'12px'},
                  fontWeight: '900',
                  m: 2,
                  ":hover": {
                    bgcolor: 'black',
                    color: 'white',
                    border: '3px solid',
                    borderColor: 'black',
                    borderRadius: '5px'
                  }
                }}
              >
                <MdDashboard size={20} style={{ margin: '5px' }} />
                Dashboard
              </Button>

              <Button
                variant='contained'
                onClick={handleLogout}
                sx={{
                  height: {md:'50px', xs:'30px'},
                  width: {md:'200px', xs:'100px'},
                  bgcolor: 'transparent',
                  border: '2px solid black',
                  color: '#FF7777',
                  fontSize: {md:'15px', xs:'12px'},
                  fontWeight: '900',
                  m: 2,
                  ":hover": {
                    bgcolor: 'black',
                    color: 'white',
                    border: '3px solid',
                    borderColor: 'black',
                    borderRadius: '5px'
                  }
                }}
              >
                <IoLogOut size={20} style={{ margin: '5px' }} />
                Logout
              </Button>
            </Box>
          </Box>
        </Box>

        <Box sx={{ flexShrink: 0 }}>
          <Footer />
        </Box>
      </Box>
    </>
  )
}

export default Account;
