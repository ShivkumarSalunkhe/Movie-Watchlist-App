// Redux action using authService.js and movieService.js
import { loginUser, logoutUser } from '../services/authService';
import { searchMovies } from '../services/movieService';
import { login, logout } from '../reducers/userSlice';
import { setMovies } from '../reducers/movieSlice';

export const loginUserAction = (email) => async (dispatch) => {
  try {
    const user = await loginUser(email);
    dispatch(login(user));
  } catch (error) {
    console.error('Error logging in:', error);
    // Handle error, show message to user, etc.
  }
};

export const logoutUserAction = () => async (dispatch) => {
  try {
    await logoutUser();
    dispatch(logout());
  } catch (error) {
    console.error('Error logging out:', error);
    // Handle error, show message to user, etc.
  }
};