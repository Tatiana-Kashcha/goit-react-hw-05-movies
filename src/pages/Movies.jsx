// import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import { searchMovies } from 'api/searchMovies';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';

const Movies = () => {
  const [searchText, setSearchText] = useState('');
  const [dataMovies, setDataMovies] = useState([]);

  useEffect(() => {
    if (!searchText) {
      return;
    }

    searchMovies(searchText)
      .then(({ data: { results } }) => {
        setDataMovies([...results]);
      })
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
      <MoviesGallery data={dataMovies} />
    </>
  );
};
export default Movies;
