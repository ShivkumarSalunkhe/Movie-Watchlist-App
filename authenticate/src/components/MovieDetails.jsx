import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { TiTick } from "react-icons/ti";

export default function MovieDetailsCard({
  movie,
  handleAddToWatchlist,
  showWatchList,
}) {
  return (
    <Card sx={{ width: "auto", height: "auto", marginTop: "2rem" }}>
      <CardActionArea style={{ position: "relative", m: 2, width: "10rem" }}>
        <CardMedia
          style={{ height: "16rem", objectFit: "cover" }}
          component="img"
          height="100"
          image={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://cdn.dribbble.com/users/9378043/screenshots/16832559/netflix__1_.png"
          }
          src={movie.Poster}
          alt={movie.Title}
        />
        <CardContent style={{ height: "4rem" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              fontSize: "1.2rem",
              fontWeight: 500,
              textAlign: "left",
              lineHeight: "1.1",
            }}
          >
            {movie.Title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ textAlign: "left" }}
          >
            ({movie.Year})
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.Plot}
          </Typography>
        </CardContent>
        {showWatchList ? (
          <Button
            style={{
              position: "absolute",
              top: 0,
              left: "-10%",
              border: "none",
              fontWeight: 200,
              fontSize: "1.82rem",
              height: "2.3rem",
              padding: "29px 0",
            }}
            variant="outlined"
            type="submit"
            onClick={() => handleAddToWatchlist(movie)}
          >
            <div
              className="blu"
              style={{ color: "#61ff00", fontSize: "2.3rem" }}
            >
              <TiTick />
            </div>
          </Button>
        ) : (
          <Button
            style={{
              position: "absolute",
              top: 0,
              left: "-10%",
              background: "#565555",
              clipPath: "polygon(76% 0, 76% 100%, 50% 75%, 24% 99%, 24% 0)",
              color: "#fff",
              fontWeight: 200,
              fontSize: "1.82rem",
              height: "2.3rem",
              padding: "29px 0",
            }}
            variant="outlined"
            type="submit"
            onClick={() => handleAddToWatchlist(movie)}
          >
            +
          </Button>
        )}
      </CardActionArea>
    </Card>
  );
}
