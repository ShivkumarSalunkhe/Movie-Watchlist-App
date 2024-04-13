// // MovieDetails.js
// import React from 'react';

// function MovieDetails({ movie }) {
//   return (
//     <div>
//       <h2>{movie.Title}</h2>
//       <p>Year: {movie.Year}</p>
//       <p>Plot: {movie.Plot}</p>
//       <img src={movie.Poster} alt={movie.Title} />
//     </div>
//   );
// }

// export default MovieDetails;

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function MovieDetailsCard({ movie }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={movie.Poster}
          src={movie.Poster} 
          alt={movie.Title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {movie.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {movie.Year}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {movie.Plot}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {movie.Year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}