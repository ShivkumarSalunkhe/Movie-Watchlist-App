// movieSlice.js
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  movies:[],
  watchlist: [],
};
export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    // addMovieToWatchlist: (state, action) => {
    //   state.watchlist.push(action.payload);
    // },
    // removeMovieFromWatchlist: (state, action) => {
    //   state.watchlist = state.watchlist.filter(movie => movie.id !== action.payload.id);
    // },
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setMovieWatchlist: (state, action) => {
      state.watchlist = action.payload;
    },
  },
});
export const { addMovieToWatchlist, removeMovieFromWatchlist, setMovies, setMovieWatchlist } = movieSlice.actions;
export default movieSlice.reducer;