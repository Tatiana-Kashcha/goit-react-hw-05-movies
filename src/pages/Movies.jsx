// import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Section } from 'components/Section/Section';
import Searchbar from 'components/Searchbar/Searchbar';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { searchMovies } from 'api/searchMovies';

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
      <Section>
        <Searchbar onSubmit={handleSearch} />
        <MoviesGallery data={dataMovies} />
      </Section>
    </>
  );
};
export default Movies;
