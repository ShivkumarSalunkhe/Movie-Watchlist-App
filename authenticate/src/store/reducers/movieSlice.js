// movieSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [
    {
        "Title": "Death Race",
        "Year": "2008",
        "imdbID": "tt0452608",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZTA4ODc4YTQtM2YyZS00YTgzLTgyMTAtMTg4Y2Q1YWFmZDYzXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg"
    },
    {
        "Title": "Rat Race",
        "Year": "2001",
        "imdbID": "tt0250687",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNWEzM2NjMjctM2U3Yi00MGZhLWJlYTYtMWEyYjVjZDEzZjM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        "Title": "Race to Witch Mountain",
        "Year": "2009",
        "imdbID": "tt1075417",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzQ5MTM5NTU2NV5BMl5BanBnXkFtZTcwMDAzMjAyMg@@._V1_SX300.jpg"
    },
    {
        "Title": "Race 3",
        "Year": "2018",
        "imdbID": "tt7431594",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzQ4ZTc5ZTItYWRhNi00YTJjLWI4NGMtNjA0ODQ1ZDQxNzkyXkEyXkFqcGdeQXVyNjc4NjAxMzM@._V1_SX300.jpg"
    },
    {
        "Title": "Race",
        "Year": "2016",
        "imdbID": "tt3499096",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ3MDM1MDU2NF5BMl5BanBnXkFtZTgwMzM3OTIzNzE@._V1_SX300.jpg"
    },
    {
        "Title": "Death Race 2",
        "Year": "2010",
        "imdbID": "tt1500491",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTk0OTUxNTYxNF5BMl5BanBnXkFtZTcwMzA1MDIyNQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Death Race 2000",
        "Year": "1975",
        "imdbID": "tt0072856",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTRhMjM1YWItMzI4Zi00MDVkLTk0YjgtNWRjZThjM2I3MDE0XkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg"
    },
    {
        "Title": "RuPaul's Drag Race",
        "Year": "2009–",
        "imdbID": "tt1353056",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTU0NjFiZjgtNDNhNi00YWY1LWJkYmEtNjM5NDZiNTRmMTM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        "Title": "The Great Race",
        "Year": "1965",
        "imdbID": "tt0059243",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjg5MDU1ZjUtZjQ2ZS00MTg2LTljMzEtMjVjNDgzNjI5MmQ5XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Death Race: Inferno",
        "Year": "2013",
        "imdbID": "tt1988591",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNmE3YmI2MTYtMzAwNi00ODQ5LWFhNDQtOWE0MjU3MGFiZWEyXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg"
    }
],
  watchlist: [],
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovieToWatchlist: (state, action) => {
      state.watchlist.push(action.payload);
    },
    removeMovieFromWatchlist: (state, action) => {
      state.watchlist = state.watchlist.filter(movie => movie.id !== action.payload.id);
    },
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { addMovieToWatchlist, removeMovieFromWatchlist, setMovies } = movieSlice.actions;

export default movieSlice.reducer;
