import axios from "axios";
import { setMovieWatchlist } from "../store/reducers/movieSlice";
const URL = process.env.REACT_APP_URL;

export const addMovieToWatchlist = async (email, movie, token) => {
  try {
    const response = await axios.post(
      `${URL}/watchlist/add`,
      {
        email,
        movie,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Add your JWT token here
        },
      }
    );
    if (!response.data) {
      throw new Error("Failed to add movie to watchlist");
    }
    return response.data; // Return the response directly
  } catch (error) {
    throw new Error(
      error.response.data.error || "Failed to add movie to watchlist"
    );
  }
};


export const getMovieToWatchlist = async (email, token, dispatch) => {
    try {
        const response = await axios.get(
            `${URL}/watchlist?email=${email}`, // Send email as a query parameter
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // Add your JWT token here
              },
            }
          );
          dispatch(setMovieWatchlist(response?.data));
    } catch (error) {
      throw new Error(
        error.response.data.error || "Failed to fetch movie watchlist"
      );
    }
  };

  export const deleteMovieFromWatchlist = async (email, movieId, token) => {
    try {
      const response = await axios.delete(
        `${URL}/watchlist/delete`,
        {
          data: {
            email,
            movieId,
          },
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // Add your JWT token here
          },
        }
      );
      if (!response.data) {
        throw new Error('Failed to delete movie from watchlist');
      }
      return response.data; // Return the response directly
    } catch (error) {
      throw new Error(
        error.response?.data?.error || 'Failed to delete movie from watchlist'
      );
    }
  };
  