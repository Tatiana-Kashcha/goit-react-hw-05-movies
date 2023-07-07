import { useState, useEffect } from 'react';
import { Section } from 'components/Section/Section';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { getMoviesTrending } from 'api/getMoviesTrending';

const Home = () => {
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [MoviesPerPage, setMoviesPerPage] = useState(0);

  useEffect(() => {
    getMoviesTrending(1)
      .then(({ data: { results } }) => {
        setMoviesTrending([...results]);
        setMoviesPerPage(results.length);
      })
      .catch(err => {
        console.log('ERROR', err);
      })
      .finally(() => {});
  }, []);

  return (
    <>
      <Section title="Trending today">
        {MoviesPerPage > 0 && <MoviesGallery data={moviesTrending} />}
      </Section>
    </>
  );
};
export default Home;
