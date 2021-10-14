/* eslint-disable linebreak-style */
import axios from "axios";


export function updateMovieSearch(movie) {
  return {
    type: "UPDATE_MOVIE_SEARCH",
    payload: { movie }
  };
}
 
export function fetchMovies(value) {
  return {
    type: "FETCH_MOVIES",
    payload: axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${value}`)
  };
}
