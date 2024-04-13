// Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/reducers/userSlice';

function Login() {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Simulating login logic, replace with actual login functionality
    const user = { email: email };
    dispatch(login(user));
  };

  return (
    <div>
      <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;

