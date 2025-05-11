import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const Register = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(45deg, #0288d1, #4fc3f7)',
      }}
    >
      <Card sx={{ minWidth: 300, maxWidth: 400, boxShadow: 6, borderRadius: 2 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ color: '#0288d1' }}>
            Bus Booking Register
          </Typography>
          <Box component="form" sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Username"
              margin="normal"
              variant="outlined"
              InputProps={{
                startAdornment: <PersonIcon sx={{ color: '#0288d1', mr: 1 }} />,
              }}
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              margin="normal"
              variant="outlined"
              InputProps={{
                startAdornment: <EmailIcon sx={{ color: '#0288d1', mr: 1 }} />,
              }}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
              InputProps={{
                startAdornment: <LockIcon sx={{ color: '#0288d1', mr: 1 }} />,
              }}
            />
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              margin="normal"
              variant="outlined"
              InputProps={{
                startAdornment: <LockIcon sx={{ color: '#0288d1', mr: 1 }} />,
              }}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#0288d1', '&:hover': { backgroundColor: '#0277bd' } }}
              type="submit"
            >
              Register
            </Button>
            <Typography align="center" sx={{ color: '#555' }}>
              Already registered? <Link to="/login" style={{ color: '#0288d1' }}>Login</Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;