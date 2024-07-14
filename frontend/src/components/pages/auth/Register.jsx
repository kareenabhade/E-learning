import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      setLoading(true);
      const response = await fetch('/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('activationToken', data.activationToken);
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
          navigate('/verify');
        }, 3000);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Fetch error: ', error);
      toast.error('Registration failed. Please try again.', {
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
    <Grid container component="main"  sx={{   
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent:'center',
       }}>
      <Grid item xs={12} sm={8} md={5}  square sx={{display:'flex', alignItems:'center', justifyContent:"center"}} >
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        Sign up
      </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2"  sx={{fontFamily:'Rajdhani', fontSize:'15px', fontWeight:'600', color:'black' }}  >
                  {"Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
            <Box sx={{ mt: 5 }}>
              <Typography variant="body2" color="text.secondary" align="center"  sx={{fontFamily:'Rajdhani', fontSize:'15px', fontWeight:'600', color:'black' }}  >
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/"  sx={{fontFamily:'Rajdhani', fontSize:'15px', fontWeight:'600', color:'black' }}  >
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
