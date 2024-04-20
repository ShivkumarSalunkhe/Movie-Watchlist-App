import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "../src/store/store";
import MovieSearch from "./components/MovieSearch";
import Auth from "./components/Auth";
import "./App.css";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { ToastContextProvider } from "./components/ToastContext";

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
  const [isAuthenticated, isUserAuthenticated] = useState(
    localStorage.getItem("token")
  );
  return (
    <ToastContextProvider>
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={<Auth isUserAuthenticated={isUserAuthenticated} />}
            />

            <Route
              path="/moviesearch"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/moviesearch" element={<MovieSearch />} />
            </Route>
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
    </ToastContextProvider>
  );
}

export default App;
