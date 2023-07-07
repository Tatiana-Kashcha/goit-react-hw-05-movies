import { useState, useEffect } from 'react';
import { Section } from 'components/Section/Section';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { getMoviesTrending } from 'api/getMoviesTrending';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Home = () => {
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [MoviesPerPage, setMoviesPerPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  console.log(moviesTrending);

  useEffect(() => {
    setIsLoading(true);

    getMoviesTrending(1)
      .then(({ data: { results } }) => {
        setMoviesTrending([...results]);
        setMoviesPerPage(results.length);

        if (!results.length) {
          Notify.failure(
            'Sorry, there are no popular movies for today. Please try again.'
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
  }, []);

  return (
    <>
      <Section title="Trending today">
        {isLoading && Loading.arrows()}
        {MoviesPerPage > 0 && <MoviesGallery data={moviesTrending} />}
      </Section>
    </>
  );
};
export default Home;
