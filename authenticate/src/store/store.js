import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import movieReducer from './reducers/movieSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
});

export default store;