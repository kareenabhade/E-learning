import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Verify() {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle OTP verification logic here
    console.log('OTP:', otp);
    // Assuming verification is successful, navigate to the home page
    navigate('/home');
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
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
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Verify
            </Button>
            <Grid container>
              <Grid item xs>
                <Typography variant="body2" color="textSecondary">
                  Didn't receive the code? <Link href="/resend-otp">Resend OTP</Link>
                </Typography>
              </Grid>
            </Grid>
            <Box sx={{ mt: 5 }}>
              <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                  Your Website
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
