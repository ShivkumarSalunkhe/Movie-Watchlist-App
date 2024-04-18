// Watchlist.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeMovieFromWatchlist } from "../store/reducers/movieSlice";
import {
  Box,
  Button,
  Divider,
  Icon,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import ControlBar from "./AppBar";

function WatchList(setShowWatchList) {
  const watchlist = useSelector((state) => state.movies.watchlist);
  const dispatch = useDispatch();

  const handleRemoveFromWatchlist = (movie) => {
    dispatch(removeMovieFromWatchlist(movie));
  };

  return (
    <>
      <Box margin={3} className="watchListSidebar"> 
          <Button onClick={() => setShowWatchList(true)}>
            Open My Watchlist
          </Button>
          <Typography gutterBottom variant="h5" component="div" color="#d50000" mb={2} 
            style={{ fontSize: "2.5rem", fontWeight: 700, color: "#ff0000cc", fontFamily: "sans-serif" }}
          >
            Watchlists
          </Typography>

          <TextField
          style={{marginBottom: "1.5rem"}}
          mb={2}
          fullWidth
            id="outlined-controlled"
            placeholder="Search"
            // label="Controlled"
            value={""}
            onChange={(event) => {
              // setName(event.target.value);
              console.log(event);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" style={{padding: ".3rem"}}>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Box
            display="flex"
            alignItems="center"
            bgcolor="red"
            p={2}
            borderRadius={2}
          >
            <HomeIcon sx={{ fontSize: 25, color: "white" }} />
            <Typography variant="body1" sx={{ marginLeft: 1, color: "#fff"}}>
              Home
            </Typography>
          </Box>

          <Typography 
              variant="body1" 
              sx={{
                  marginLeft: 1, 
                  marginBottom: 2,
                  fontSize: "1.2rem",
                  textAlign: "justify",
                  padding: "1rem 0 1rem 1rem",
                  borderTop: "2px solid #aca0a08f",
                  margin: "1rem 0 0",
                  fontFamily: "sans-serif"
              }}
          >
              My Lists
          </Typography>


      </Box>
      <ControlBar />
    </>
  );
}

export default WatchList;
