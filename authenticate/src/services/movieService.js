import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export const searchMovies = async (searchTerm) => {
  try {
    const response = await axios.get(`http://www.omdbapi.com/`, {
      params: {
        apikey: API_KEY,
        s: searchTerm
      }
    });
    return response.data.Search || [];
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
};
