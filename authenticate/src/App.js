// App.js
import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "../src/store/store";
import MovieSearch from "./components/MovieSearch";
import WatchList from "./components/WatchList";
import Signup from "./components/SignUp";
import MovieDetails from "./components/MovieDetails";
import "./App.css";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/" />
  );
};

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(localStorage.getItem("token"));
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={<Signup isUserAuthenticated={isUserAuthenticated} />}
            />

            <Route
              path="/moviesearch"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/moviesearch" element={<MovieSearch />} />
            </Route>
            {/* <Signup /> */}
            {/* <Login/> */}
            {/* <MovieSearch /> */}
            {/* <WatchList /> */}
            {/* <MovieDetails movie={{ Title: 'Movie Title', Year: 'Year', Plot: 'Plot Summary', Poster: 'Poster URL' }} /> */}
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
