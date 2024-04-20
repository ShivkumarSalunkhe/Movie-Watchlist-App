import axios from "axios";
const URL = process.env.REACT_APP_URL;

export const userLogin = async (email) => {
  try {
    const response = await axios.post(`${URL}/auth/login`, { email });
    return response.data; // Return the response directly
  } catch (error) {
    throw new Error(error.response?.data?.error || "Failed to login");
  }
};

export const userSignup = async (payload) => {
  try {
    const response = await axios.post(`${URL}/auth/register`, { ...payload });
    return response.data; // Return the response directly
  } catch (error) {
    throw new Error(error.response?.data?.error || "Failed to signup");
  }
};
