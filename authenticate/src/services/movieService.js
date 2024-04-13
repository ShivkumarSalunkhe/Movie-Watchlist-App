const API_KEY = process.env.REACT_APP_API_KEY;
export const searchMovies = async (searchTerm) => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`
    );
    const data = await response.json();
    return data.Search || [];
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
};
