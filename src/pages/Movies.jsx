// import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import { getMovieApi } from 'api/getMoviesApi';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';

const Movies = () => {
  const [searchText, setSearchText] = useState('');
  const [dataMovie, setDataMovie] = useState([]);

  useEffect(() => {
    if (!searchText) {
      return;
    }

    getMovieApi(searchText)
      .then(response => {
        setDataMovie([...response.results]);
      })
      // .then(({ response: results }) => {
      //   setDataMovie([...results]);
      // })
      .catch(err => {
        console.log('ERROR', err);
      })
      .finally(() => {});
  }, [searchText]);

  const handleSearch = searchText => {
    setSearchText(searchText);
  };

  return (
    <>
      <Searchbar onSubmit={handleSearch} />
      <MoviesGallery data={dataMovie} />
    </>
  );
};
export default Movies;
