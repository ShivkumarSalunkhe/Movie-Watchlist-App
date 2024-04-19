import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMovieWatchlist, setMovies } from "../store/reducers/movieSlice";
import { searchMovies } from "../services/movieService";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MovieDetailsCard from "./MovieDetails";
import WatchList from "./WatchList";
import { InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  addMovieToWatchlist,
  getMovieToWatchlist,
} from "../services/watchListService";
export default function MovieSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const movies = useSelector((state) => state.movies.movies);
  const watchlist = useSelector((state) => state.movies.watchlist);
  const [showWatchList, setShowWatchList] = useState(false);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token"); 
  const email = localStorage.getItem("email"); 

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const data = await searchMovies(searchTerm); 
        dispatch(setMovies(data));
      } catch (error) {
        console.error("Error searching movies:", error);
      }
    };
    handleSearch();
  }, [searchTerm]);
  const handleAddToWatchlist = async (movie) => {
    try {
      const res = await addMovieToWatchlist(email, movie, token);
    } catch (error) {
      console.error("Error adding movies:", error);
    }
  };
  useEffect(() => {
    getMovieToWatchlist(email, token, dispatch);
  }, [email, token, dispatch, showWatchList]);

  const handleOpenWatchList = () => {
    setShowWatchList(!showWatchList);
  };
  return (
    <Grid container>
      <Grid
        xs={3}
        style={{ position: "relative", borderRight: "2px solid #7b676742" }}
      >
        <WatchList
          showWatchList={showWatchList}
          handleOpenWatchList={handleOpenWatchList}
        />
      </Grid>
      <Grid
        container
        xs={9}
        direction="row"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Box
          height="40vh"
          style={{ display: "content", width: "-webkit-fill-available" }}
        >
          {showWatchList ? (
            <Box
              p={2}
              ml={7}
              mr={7}
              mb={4}
              mt={4}
              style={{ textAlign: "justify" }}
            >
              <Typography
                variant="h5"
                component="div"
                style={{
                  fontSize: "2rem",
                  fontFamily: "sans-serif",
                  paddingBottom: "1.5rem",
                }}
              >
                Movies By Tom Cruise
              </Typography>
              <Typography
                style={{ lineHeight: 2, fontWeight: "600", fontSize: "1.4rem" }}
              >
                About this watch list
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae,
                libero.
              </Typography>
            </Box>
          ) : (
            <Box
              border="1.5px solid #b57474"
              borderRadius={1}
              p={2}
              ml={7}
              mr={7}
              mb={4}
              mt={4}
              style={{ textAlign: "justify" }}
            >
              <Typography
                variant="h5"
                component="div"
                style={{
                  fontSize: "2rem",
                  fontFamily: "sans-serif",
                  paddingBottom: "1.5rem",
                }}
              >
                Welcome to{" "}
                <span style={{ color: "#ff0000ba" }}>Watchlists</span>
              </Typography>
              <Typography style={{ lineHeight: 2 }}>
                Browse movies, add them to watchlists, and share them with
                friends.
                <br />
                Simply click the <span>+</span> icon to add a movie, the poster
                to view more details, and the checkmark to mark the movie as
                watched.
              </Typography>
            </Box>
          )}
          {!showWatchList && (
            <Box p={1} ml={6} mr={6} mb={3}>
              <TextField
                mb={2}
                fullWidth
                id="outlined-controlled"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          )}
        </Box>
        {showWatchList
          ? watchlist?.map((movie, index) => (
              <Box height="auto" style={{ margin: "1.2rem" }}>
                <MovieDetailsCard
                  key={movie.imdbID} 
                  index={index}
                  movie={movie}
                  handleAddToWatchlist={handleAddToWatchlist} 
                  showWatchList={showWatchList}
                />
              </Box>
            ))
          : movies.map((movie, index) => (
              <Box height="auto" style={{ margin: "1.2rem" }}>
                <MovieDetailsCard
                  key={movie.imdbID} 
                  index={index}
                  movie={movie}
                  handleAddToWatchlist={handleAddToWatchlist} 
                  showWatchList={showWatchList}
                />
              </Box>
            ))}

        {!showWatchList && movies.length === 0 && (
          <Box
            style={{
              textAlign: "center",
              justifyContent: "center",
              fontSize: "2rem",
              fontFamily: "fantasy",
              color: "#955757",
              height: "50vh",
              position: "relative",
              top: "20%",
            }}
          >
            Search Your Favorite Movies
          </Box>
        )}
          {showWatchList && watchlist?.length === 0 && (
          <Box
            style={{
              textAlign: "center",
              justifyContent: "center",
              fontSize: "2rem",
              fontFamily: "fantasy",
              color: "#955757",
              height: "50vh",
              position: "relative",
              top: "20%",
            }}
          >
            Make WatchList Of Your Favorite Movies
          </Box>
        )}
      </Grid>
    </Grid>
  );
}
