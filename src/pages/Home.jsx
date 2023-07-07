import { useState, useEffect } from 'react';
import { Section } from 'components/Section/Section';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { getMoviesTrending } from 'api/getMoviesTrending';

const Home = () => {
  const [moviesTrending, setMoviesTrending] = useState([]);

  useEffect(() => {
    getMoviesTrending(1)
      .then(({ data: { results } }) => {
        setMoviesTrending([...results]);
      })
      .catch(err => {
        console.log('ERROR', err);
      })
      .finally(() => {});
  }, []);

  return (
    <>
      <Section title="Trending today">
        <MoviesGallery data={moviesTrending} />
      </Section>
    </>
  );
};
export default Home;
