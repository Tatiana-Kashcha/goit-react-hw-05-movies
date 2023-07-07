import { useState, useEffect } from 'react';
// import { getMovieApi } from 'api/getMoviesApi';
import { Section } from 'components/Section/Section';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { fetchMovies } from 'api/fetchMovies';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchMovies(page)
      .then(({ data: { results } }) => {
        setMovies([...results]);
      })
      .catch(err => {
        console.log('ERROR', err);
      })
      .finally(() => {});
  }, [page]);

  return (
    <>
      <Section title="Trending today">
        <MoviesGallery data={movies} />
      </Section>
    </>
  );
};
export default Home;
