import axios from 'axios';

export const userLogin = async (email) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', { email });
    if (!response.data || !response.data.token) {
      throw new Error('Invalid response from server');
    }
    return response.data; // Return the response directly
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Failed to login');
  }
};