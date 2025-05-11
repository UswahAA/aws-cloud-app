import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Dashboard = () => {
  // Placeholder data for bookings
  const bookings = [
    { id: 1, route: 'New York to Boston', date: '2025-06-01', seat: '12A' },
    { id: 2, route: 'Boston to New York', date: '2025-06-05', seat: '15B' },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#0288d1' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bus Booking Dashboard
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#0288d1' }}>
          Welcome, User!
        </Typography>
        <Typography variant="h6" gutterBottom>
          Your Recent Bookings
        </Typography>
        <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Route</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Seat</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>{booking.route}</TableCell>
                  <TableCell>{booking.date}</TableCell>
                  <TableCell>{booking.seat}</TableCell>
                  <TableCell>
                    <Button color="primary">View</Button>
                    <Button color="error">Cancel</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default Dashboard;