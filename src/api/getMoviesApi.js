import axios from 'axios';

const BASE_URL = 'api.themoviedb.org/3';
const API_KEY = '0b46dbc328ca74a0ee97be896e4cf159';

export const getMovieApi = async searchText => {
  return axios(BASE_URL, search, movie, {
    params: {
      api_key: API_KEY,
      query: searchText,
      include_adult: false,
      language: en - US,
      page: 1,
    },
  });
};
