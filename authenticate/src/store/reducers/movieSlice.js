import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  movies:[],
  watchlist: [],
};
export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
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