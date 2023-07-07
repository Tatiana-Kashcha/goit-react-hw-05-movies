import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieId } from 'api/getMovieId';
import { Section } from 'components/Section/Section';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { RenderDetails } from 'components/RenderDetails/RenderDetails';
import { Cast } from 'components/Cast/Cast';

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
        <RenderDetails data={dataMovieId} />
        <Cast />
      </Section>
    </>
  );
};
export default MovieDetails;
