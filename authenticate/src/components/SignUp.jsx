// Signup.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/reducers/userSlice";
import {
  InputAdornment,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { userLogin, userSignup } from "../services/authService";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 7px 7px 7px 5px gray;
`;
const Image = styled(`img`)({
  width: 100,
  margin: "auto",
  display: "flex",
  paddingTop: "50px",
});

const Wrapper = styled(Box)`
  padding: 10px 35px;
  display: flex;
  text-align: center;
  flex-direction: column;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  height: 40px;
  margin-bottom: 20px;
  box-shadow: 5px 5px 5px gray;
`;

const SignupButton = styled(Button)`
  text-transform: none;
  bordor-radius: 2px;
  height: 40px;
  background: #f2f2f2;
  box-shadow: 5px 5px 5px gray;
  margin-bottom: 20px;
`;
const Error = styled(Typography)`
  font-size: 10px;
  color: red;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;
const signupInitialValues = {
  name: "",
  username: "",
  password: "",
};
const loginInitialValues = {
  username: "",
  password: "",
};

function Signup({isUserAuthenticated}) {
  const [email, setEmail] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [account, toggleAccount] = useState("login");
const navigate = useNavigate()
  const dispatch = useDispatch();

  const [userPayload, setUserPayload] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserPayload((values) => ({ ...values, [name]: value }));
  };

  const handleSignUp = async () => {
    try {
      const res = await userSignup(userPayload);
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const userData = await userLogin(email);
      const token = userData.token;
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      isUserAuthenticated(localStorage.getItem("token"));
      navigate('/moviesearch')
      dispatch(login(userData));
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
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
          borderRadius: "1rem",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          style={{
            fontSize: "1.2rem",
            paddingBottom: "1rem",
            fontWeight: "600",
          }}
        >
          {account === "login" ? "Login" : "SignUp"}
        </Typography>

        {account === "login" ? (
          <>
            <TextField
              mb={2}
              fullWidth
              id="outlined-controlled"
              style={{
                marginBottom: "1rem",
                padding: "0.5rem",
                width: "300px",
              }}
              label="Email Address"
              placeholder="Email Address"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <LoginButton variant="contained" onClick={() => handleLogin()}>
              Login
            </LoginButton>
            <Typography>OR</Typography>
            <SignupButton onClick={() => toggleSignup()} variant="text">
              Create an account
            </SignupButton>
          </>
        ) : (
          <>
            <TextField
              mb={2}
              fullWidth
              id="outlined-controlled"
              style={{
                marginBottom: "1rem",
                padding: "0.5rem",
                width: "300px",
              }}
              label="First Name"
              placeholder="First Name"
              variant="outlined"
              name="firstName"
              value={userPayload.firstName || ""}
              onChange={handleChange}
            />
            <TextField
              mb={2}
              fullWidth
              id="outlined-controlled"
              style={{
                marginBottom: "1rem",
                padding: "0.5rem",
                width: "300px",
              }}
              label="Last Name"
              placeholder="Last Name"
              variant="outlined"
              name="lastName"
              value={userPayload.lastName || ""}
              onChange={handleChange}
            />
            <TextField
              mb={2}
              fullWidth
              id="outlined-controlled"
              style={{
                marginBottom: "1rem",
                padding: "0.5rem",
                width: "300px",
              }}
              label="Email Address"
              placeholder="Email Address"
              variant="outlined"
              name="email"
              value={userPayload.email || ""}
              onChange={handleChange}
            />

            <SignupButton onClick={() => handleSignUp()}>Signup</SignupButton>
            <Typography>OR</Typography>
            <LoginButton variant="contained" onClick={() => toggleSignup()}>
              Already have an account
            </LoginButton>
          </>
        )}
      </div>
    </div>
  );
}

export default Signup;
