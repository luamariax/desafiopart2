import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Alert } from '@mui/material';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('/api/users', { email, name, password, role });
      window.location.href = '/login';
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <TextField label="Role" value={role} onChange={(e) => setRole(e.target.value)} />
      <Button onClick={handleRegister}>Register</Button>
      {error && <Alert severity="error">{error}</Alert>}
    </div>
  );
};

export default Register;