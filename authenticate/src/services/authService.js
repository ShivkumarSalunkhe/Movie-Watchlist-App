import axios from "axios";
const URL = process.env.REACT_APP_URL;

export const userLogin = async (email) => {
  try {
    const response = await axios.post(`${URL}/auth/login`, { email });
    if (!response.data || !response.data.token) {
      throw new Error("Invalid response from server");
    }
    return response.data; // Return the response directly
  } catch (error) {
    throw new Error(error.response?.data?.error || "Failed to login");
  }
};

export const userSignup = async (payload) => {
  try {
    const response = await axios.post(`${URL}/auth/register`, { ...payload });
    if (!response.data || !response.data.token) {
      throw new Error("Invalid response from server");
    }
    return response.data; // Return the response directly
  } catch (error) {
    throw new Error(error.response?.data?.error || "Failed to signup");
  }
};
