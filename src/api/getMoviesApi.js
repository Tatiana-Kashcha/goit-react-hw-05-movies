export const getMovieApi = async searchText => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjQ2ZGJjMzI4Y2E3NGEwZWU5N2JlODk2ZTRjZjE1OSIsInN1YiI6IjY0YTE1MTE3OGMwYTQ4MDExZTFkMDQyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LVb60EY4O3rWA4I6sO5Hfhzws20tK4WkgFJEM5vEqN4',
    },
  };

  fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`,
    options
  )
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
};
