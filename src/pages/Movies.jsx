import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Section } from 'components/Section/Section';
import Searchbar from 'components/Searchbar/Searchbar';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { searchMovies } from 'api/searchMovies';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Movies = () => {
  const [dataMovies, setDataMovies] = useState([]);
  const [searchMoviesPerPage, setSearchMoviesPerPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchText = searchParams.get('searchText');

  useEffect(() => {
    if (!searchText) {
      return;
    }
    setIsLoading(true);

    searchMovies(searchText)
      .then(({ data: { results } }) => {
        setDataMovies([...results]);
        setSearchMoviesPerPage(results.length);

        if (!results.length) {
          Notify.failure(
            'Sorry, there are no movies matching your search query.'
          );
        }
      })
      .catch(err => {
        console.log('ERROR', err);
      })
      .finally(() => {
        setIsLoading(false);
        Loading.remove();
      });
  }, [searchText]);

  const handleSearch = searchText => {
    setSearchParams({ searchText: searchText });
  };

  return (
    <>
      <Section>
        {isLoading && Loading.arrows()}
        <Searchbar onSubmit={handleSearch} />
        {searchMoviesPerPage > 0 && <MoviesGallery data={dataMovies} />}
      </Section>
    </>
  );
};
export default Movies;
