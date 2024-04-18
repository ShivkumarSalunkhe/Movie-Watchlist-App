// Signup.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/reducers/userSlice";
import { InputAdornment, TextField, Typography } from "@mui/material";

function Signup() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSignup = () => {
    // Simulating signup logic, replace with actual signup functionality
    const user = { email: email };
    dispatch(login(user));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#d4eae0",
      }}
    >
      <div 
        className="form_center"
        style={{
          display: "grid",
          background: "white",
          padding: "2rem",
          boxShadow: "3px 5px 19px 6px #4d454536",
          borderRadius: "1rem"
        }}  
      >
        <Typography variant="h4" gutterBottom style={{ fontSize: "1.2rem" , paddingBottom: "1rem", fontWeight: "600"}}>
          Enter Your Information
        </Typography>
        <TextField
          mb={2}
          fullWidth
          id="outlined-controlled"
          style={{ marginBottom: "1rem", padding: "0.5rem", width: "300px" }}
          label="First Name"
          placeholder="First Name"
          variant="outlined"
        />
        <TextField
          mb={2}
          fullWidth
          id="outlined-controlled"
          style={{ marginBottom: "1rem", padding: "0.5rem", width: "300px" }}
          label="Last Name"
          placeholder="Last Name"
          variant="outlined"
        />
        <TextField
          mb={2}
          fullWidth
          id="outlined-controlled"
          style={{ marginBottom: "1rem", padding: "0.5rem", width: "300px" }}
          label="Email Address"
          placeholder="Email Address"
          variant="outlined"
        />
        <button
          onClick={handleSignup}
          style={{
            marginBottom: "1rem",
            width: "300px",
            background: "rgb(169 162 162 / 31%)!important",
            fontSize: "1rem",
            fontWeight: 600,
            padding: "0.5rem 2rem",
            borderRadius: "3rem",
            cursor: "pointer",
            border: "2px solid rgb(199 188 188 / 13%)",
            color: "#524444"
          }}
        >
          Signup
        </button>
      </div>
    </div>
  );
}

export default Signup;

// Signup.js
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../store/reducers/userSlice';

// function Signup() {
//   const [email, setEmail] = useState('');
//   const dispatch = useDispatch();

//   const handleSignup = () => {
//     // Simulating signup logic, replace with actual signup functionality
//     const user = { email: email };
//     dispatch(login(user));
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: "#d4eae0" }}>
//       <input type="text" placeholder="First Name" style={{ marginBottom: '1rem', padding: '0.5rem', width: '300px' }} />
//       <input type="text" placeholder="Last Name" style={{ marginBottom: '1rem', padding: '0.5rem', width: '300px' }} />
//       <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginBottom: '1rem', padding: '0.5rem', width: '300px' }} />
//       <button onClick={handleSignup} style={{ padding: '0.5rem 2rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
//     </div>
//   );
// }

// export default Signup;
