// Signup.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/reducers/userSlice';

function Signup() {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSignup = () => {
    // Simulating signup logic, replace with actual signup functionality
    const user = { email: email };
    dispatch(login(user));
  };

  return (
    <div>
      <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;
