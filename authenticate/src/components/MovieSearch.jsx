// MovieSearch.js
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMovieToWatchlist, setMovies } from "../store/reducers/movieSlice";
import { searchMovies } from "../services/movieService";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function MovieSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  console.log(movies);
  const handleSearch = async () => {
    try {
      const data = await searchMovies(searchTerm); // Call searchMovies function
      dispatch(setMovies(data)); // Dispatch setMovies action with fetched data
    } catch (error) {
      console.error("Error searching movies:", error);
      // Handle error, show message to user, etc.
    }
  };
useEffect(()=>{
  handleSearch()
},[])
  const handleAddToWatchlist = (movie) => {
    dispatch(addMovieToWatchlist(movie));
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height:'100vh'
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <input
            type="text"
            placeholder="Search movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
          <button onClick={handleSearch}>Search</button>
       <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}



{/* <Box sx={{ flexGrow: 1 }}>
<Grid
  container
  spacing={{ xs: 2, md: 3 }}
  columns={{ xs: 4, sm: 8, md: 12 }}
>
  {movies.map((movie, index) => (
    <Grid item xs={2} sm={4} md={4} key={index}>
      {/* <Item>xs=2</Item> */}
      // {movie.Title}
    // </Grid>
  // ))}
// </Grid>
// </Box> */}