import React from 'react';
import axios from 'axios';
import { Button } from '@mui/material';

const Navbar = () => {
  const handleLogout = async () => {
    try {
      await axios.post('/api/users/logout');
      localStorage.removeItem('token');
      window.location.href = '/login';
    } catch (err) {
      console.error('Logout failed');
    }
  };

  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Navbar;