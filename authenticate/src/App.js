// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/store/store';
import MovieSearch from './components/MovieSearch';
import WatchList from './components/WatchList';
import Signup from './components/SignUp';
import MovieDetails from './components/MovieDetails';
import './App.css';
import LogIn from './components/Login';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <header className="App-headerr">
          <h1>Movie Watchlist App</h1>
        </header> */}
        {/* <Signup /> */}
        {/* <LogIn/> */}
        <MovieSearch />
        {/* <WatchList /> */}
        {/* <MovieDetails movie={{ Title: 'Movie Title', Year: 'Year', Plot: 'Plot Summary', Poster: 'Poster URL' }} /> */}
      </div>
    </Provider>
  );
}

export default App;
