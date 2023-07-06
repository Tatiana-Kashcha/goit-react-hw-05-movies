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

    const getMovie = async () => {
      try {
        const dataMovieGallery = await getMovieApi(searchText);
        console.log(dataMovieGallery);
        setDataMovie([...dataMovieGallery]);
      } catch (error) {
        console.log('ERROR', error);
      } finally {
      }
    };
    getMovie();
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
