import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '5db142e10223a3403f798ce96eef39b6',
  language: 'en-US',
};

export const getTrandingMovies = async () => {
  const response = await axios.get(`/trending/movie/day`);
  return response.data.results;
};

export const searchMovie = async query => {
  const response = await axios.get(`/search/movie?query=${query}`);
  return response.data.results;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}`);
  return response.data;
};

export const getMovieCast = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};
