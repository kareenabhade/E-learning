import * as React from 'react';
import { useState} from 'react';
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
import { UserData } from '../../../Context/UserContext';



export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser, setIsAuth } = UserData();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        setIsAuth(true);
        localStorage.setItem('token', data.token);
        toast.success(`${data.message} 👋 `, {
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
          navigate('/home');
        }, 3000);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Fetch error: ', error);
      setIsAuth(false);
      setLoading(false);
      toast.error('Login failed. Please try again.', {
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
    <>
      <Grid container component="main"
       sx={{   
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent:'center',
       }}>
        <Grid item xs={12} sm={8} md={5}  elevation={6} >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent:'center'
            }}
          >
            <Avatar  sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" fontFamily='Rajdhani' fontWeight={600} fontSize={30}>
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
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
            border: '3px solid', // Add a border to simulate the outlined effect
            borderColor: 'black',
            borderRadius:'5px'
          }
        }}
      >
        Sign in
      </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" sx={{fontFamily:'Rajdhani', fontSize:'15px', fontWeight:'600', color:'black' }} >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2" sx={{fontFamily:'Rajdhani', fontSize:'15px', fontWeight:'600', color:'black'}}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box sx={{ mt: 5 }} >
                <Typography variant="body2" color="text.secondary" align="center"  sx={{fontFamily:'Rajdhani', fontSize:'15px', fontWeight:'600'}} >
                  {'Copyright © '}
                  <Link color="inherit" href="https://mui.com/"  sx={{fontFamily:'Rajdhani', fontSize:'15px', fontWeight:'600'}} >
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
      
    </>
  );
}
