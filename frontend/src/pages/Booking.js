import React from 'react';
import { Box, Button, Card, CardContent, TextField, Typography, MenuItem } from '@mui/material';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';

const Booking = () => {
  const routes = [
    { value: 'ny-boston', label: 'New York to Boston' },
    { value: 'boston-ny', label: 'Boston to New York' },
    { value: 'ny-dc', label: 'New York to Washington DC' },
  ];

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
      <Card sx={{ minWidth: 300, maxWidth: 500, boxShadow: 6, borderRadius: 2 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ color: '#0288d1' }}>
            Book a Bus
          </Typography>
          <Box component="form" sx={{ mt: 2 }}>
            <TextField
              fullWidth
              select
              label="Select Route"
              margin="normal"
              variant="outlined"
              defaultValue=""
              InputProps={{
                startAdornment: <DirectionsBusIcon sx={{ color: '#0288d1', mr: 1 }} />,
              }}
            >
              {routes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              label="Travel Date"
              type="date"
              margin="normal"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              fullWidth
              label="Seat Number"
              margin="normal"
              variant="outlined"
              placeholder="e.g., 12A"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#0288d1', '&:hover': { backgroundColor: '#0277bd' } }}
              type="submit"
            >
              Book Now
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Booking;