import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '0b46dbc328ca74a0ee97be896e4cf159';

export const getMovieReviews = movieId => {
  return axios(`movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
};
