import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieId } from 'api/getMovieId';
import { Section } from 'components/Section/Section';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [dataMovieId, setDataMovieId] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  console.log(dataMovieId);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    setIsLoading(true);

    getMovieId(movieId)
      .then(data => {
        setDataMovieId(data);
      })
      .catch(err => {
        console.log('ERROR', err);
      })
      .finally(() => {
        setIsLoading(false);
        Loading.remove();
      });
  }, [movieId]);

  return (
    <>
      <Section>
        {isLoading && Loading.arrows()}
        <h2>Page MovieDetails</h2>
      </Section>
    </>
  );
};
export default MovieDetails;
