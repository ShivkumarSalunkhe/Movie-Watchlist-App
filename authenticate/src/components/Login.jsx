import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/reducers/userSlice';
import { userLogin } from '../services/authService';
import { Box } from '@mui/material';

function Login() {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const userData = await userLogin(email);
      const token = userData.token; // Assuming the token is returned in the response
      localStorage.setItem('token', token);
      localStorage.setItem('email', email);

      console.log('Token stored:', token);
      // Dispatch the login action with user data if needed
      dispatch(login(userData));
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };


  return (
    <Box sx={{margin:'auto', display:'flex', justifyContent:"center", alignItems:'center', height:'100vh',}}>

    <Box sx={{border:"2px solid gray", height:'200px', width:'200px'}}>
      <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </Box>
    </Box>
  );
}

export default Login;
