// Watchlist.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeMovieFromWatchlist } from '../store/reducers/movieSlice';

function WatchList() {
  const watchlist = useSelector(state => state.movies.watchlist);
  const dispatch = useDispatch();

  const handleRemoveFromWatchlist = (movie) => {
    dispatch(removeMovieFromWatchlist(movie));
  };

  return (
    <div>
      <h2>My Watchlist</h2>
      <ul>
        {watchlist.map(movie => (
          <li key={movie.imdbID}>
            {movie.Title} ({movie.Year}) <button onClick={() => handleRemoveFromWatchlist(movie)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WatchList;
