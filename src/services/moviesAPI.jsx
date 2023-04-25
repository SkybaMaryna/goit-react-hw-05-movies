import axios from 'axios';
const API_KEY = 'd492b6582f5fe5294bae17dd5d072295';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchTrendMovies() {
  const response = await axios(
    `trending/movie/day?api_key=${API_KEY}&language=en-US`
  );
  return response.data.results;
}

export async function fetchSearchMovies(query) {
  const response = await axios(
    `search/movie?api_key=${API_KEY}&query=${query}&language=en-US`
  );
  return response.data.results;
}

export async function fetchMoviesById(id) {
  const response = await axios(`movie/${id}?api_key=${API_KEY}&language=en-US`);
  return response.data;
}

export async function fetchMoviesCast(id) {
  const response = await axios(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
}

export async function fetchMoviesReview(id) {
  const response = await axios(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
}
