// Watchlist.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeMovieFromWatchlist } from "../store/reducers/movieSlice";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Icon,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import ControlBar from "./AppBar";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";

function WatchList({ handleOpenWatchList, showWatchList, handleRemoveFromWatchlist }) {
  const watchlist = useSelector((state) => state.movies.watchlist);


 
  return (
    <>
      <Box margin={3} className="watchListSidebar">
        <Button onClick={handleOpenWatchList} variant="contained" size="large" color="success" fullWidth>
          {showWatchList ? "Go To Home Page" : "Open My Watchlist"}
        </Button>

        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="#d50000"
          mb={2}
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#ff0000cc",
            fontFamily: "sans-serif",
            marginTop: "20px",
          }}
        >
          Watchlists
        </Typography>

        <TextField
          style={{ marginBottom: "1.5rem" }}
          mb={2}
          fullWidth
          id="outlined-controlled"
          placeholder="Search"
          // label="Controlled"
          value={""}
          onChange={(event) => {
            // setName(event.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" style={{ padding: ".3rem" }}>
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
          <Typography variant="body1" sx={{ marginLeft: 1, color: "#fff" }}>
            {showWatchList ? "My Watchlist" : "Home"}
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
            fontFamily: "sans-serif",
          }}
        >
          My Lists
        </Typography>
          <>
            <Box mb={14}>
              <List>
                {watchlist?.map((movie) => (
                  <ListItem
                    key={movie._id}
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete" onClick={()=>handleRemoveFromWatchlist(movie._id)}>
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                    <Avatar alt={movie.Title} src={movie.Poster}/>
                    </ListItemAvatar>
                    <ListItemText primary={movie.Title} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </>
      </Box>
      <ControlBar />
    </>
  );
}

export default WatchList;
