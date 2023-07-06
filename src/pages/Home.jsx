import { useState, useEffect } from 'react';
// import { getMovieApi } from 'api/getMoviesApi';
import { Section } from 'components/Section/Section';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';

const Home = () => {
  useEffect(() => {}, []);

  const [data, setData] = useState([]);
  return (
    <>
      <Section title="Trending today">
        <MoviesGallery data={data} />
      </Section>
    </>
  );
};
export default Home;
