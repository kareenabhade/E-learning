import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Verify() {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const activationToken = localStorage.getItem("activationToken");

    if (!activationToken) {
      toast.error('Activation token not found.');
      setLoading(false);
      return;
    }

    const requestBody = { otp: Number(otp), activationToken };

    try {
      const response = await fetch('/api/user/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log('Response Data:', data);

      if (response.ok) {
        toast.success(`${data.message} `, {
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

        setTimeout(() => {
          setLoading(false);
          navigate('/login');
          localStorage.clear();
        }, 3000);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Fetch error: ', error);
      toast.error('Verification failed. Please try again.', {
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
      setLoading(false);
    }
  };

  return (
    <Grid container component="main" sx={{   
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent:'center',
       }}>
      <Grid item xs={12} sm={8} md={5} square sx={{display:'flex', alignItems:'center', justifyContent:"center"}} >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent:'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" fontFamily='Rajdhani' fontWeight={600} fontSize={30} >
            Verify OTP
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="otp"
              label="OTP"
              name="otp"
              autoComplete="one-time-code"
              autoFocus
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              type="number" 
            />
            <Button 
              variant='contained' 
              onClick={handleSubmit}
              disabled={loading}
              sx={{ 
                height: '40px', 
                width: '100%', 
                bgcolor:'transparent',
                border:'3px solid black',
                color:'black',
                fontSize:'15px',
                fontWeight:'700',
                mt:2, mb:2,
                ":hover": {
                  bgcolor:'black',
                  color:'white',
                  border: '3px solid',
                  borderColor: 'black',
                  borderRadius:'5px'
                }
              }}
            >
              Verify
            </Button>
            <Grid container>
              <Grid item xs>
                <Typography variant="body2" color="textSecondary" sx={{fontFamily:'Rajdhani', fontSize:'15px', fontWeight:'600', color:'black' }} >
                  Didn't receive the code? <Link href="/resend-otp" sx={{fontFamily:'Rajdhani', fontSize:'15px', fontWeight:'600', color:'black' }} >
                  Resend OTP</Link>
                </Typography>
              </Grid>
            </Grid>
            <Box sx={{ mt: 5 }}>
              <Typography variant="body2" color="text.secondary" align="center" sx={{fontFamily:'Rajdhani', fontSize:'15px', fontWeight:'600', color:'black' }} >
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/" sx={{fontFamily:'Rajdhani', fontSize:'15px', fontWeight:'600', color:'black' }} >
                  E-learning
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
