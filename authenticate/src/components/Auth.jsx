// Signup.js
import React, { useContext, useState } from "react";
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
import ToastContext from "./ToastContext";

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

function Auth({ isUserAuthenticated }) {
  const [email, setEmail] = useState("");
  const [account, toggleAccount] = useState("login");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { toast } = useContext(ToastContext);

  const [userPayload, setUserPayload] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserPayload((values) => ({ ...values, [name]: value }));
  };

  const handleSignUp = async () => {
    try {
      await userSignup(userPayload);
      await toast.success("Sign up successful!");
      toggleSignup();
    } catch (error) {
      await toast.error("SignUp failed please enter valid data");
    }
  };

  const handleLogin = async () => {
    try {
      const userData = await userLogin(email);
      await toast.success("Login successful!");
      const token = userData.token;
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      localStorage.setItem("name", userData?.user?.firstName);
      isUserAuthenticated(localStorage.getItem("token"));
      navigate("/moviesearch");
      dispatch(login(userData));
    } catch (error) {
      await toast.error("Login failed please enter valid email");
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
                marginBottom: "2rem",
                width: "300px",
              }}
              label="Email Address"
              placeholder="Email Address"
              variant="standard"
              value={email}
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <LoginButton variant="contained" onClick={() => handleLogin()}>
              Login
            </LoginButton>
            <Typography  style={{
                marginBottom: "1rem",
              }}>OR</Typography>
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
                marginBottom: "2rem",
                width: "300px",
              }}
              label="First Name"
              placeholder="First Name"
              variant="standard"
              name="firstName"
              value={userPayload.firstName || ""}
              onChange={handleChange}
            />
            <TextField
              mb={2}
              fullWidth
              id="outlined-controlled"
              style={{
                marginBottom: "2rem",
                width: "300px",
              }}
              label="Last Name"
              placeholder="Last Name"
              variant="standard"
              name="lastName"
              value={userPayload.lastName || ""}
              onChange={handleChange}
            />
            <TextField
              mb={2}
              fullWidth
              id="outlined-controlled"
              style={{
                marginBottom: "2rem",
                width: "300px",
              }}
              label="Email Address"
              placeholder="Email Address"
              variant="standard"
              name="email"
              type="email"
              value={userPayload.email || ""}
              onChange={handleChange}
            />

            <SignupButton onClick={() => handleSignUp()}>Signup</SignupButton>
            <Typography style={{
                marginBottom: "1rem",
              }}>OR</Typography>
            <LoginButton variant="contained" onClick={() => toggleSignup()}>
              Already have an account
            </LoginButton>
          </>
        )}
      </div>
    </div>
  );
}

export default Auth;
