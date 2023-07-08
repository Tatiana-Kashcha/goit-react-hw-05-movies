import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieId } from 'api/getMovieId';
import { Section } from 'components/Section/Section';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ButtonBack } from 'components/ButtonBack/ButtonBack';
import { RenderDetails } from 'components/RenderDetails/RenderDetails';
import { Additional } from 'components/Additional/Additional';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [dataMovieId, setDataMovieId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log(dataMovieId);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    setIsLoading(true);

    getMovieId(movieId)
      .then(data => {
        setDataMovieId(data.data);

        if (!data.data) {
          Notify.failure('Sorry, there are no details for this movie');
        }
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
        <ButtonBack />
        {dataMovieId && <RenderDetails data={dataMovieId} />}
        <Additional />
        <Cast />
        <Reviews />
      </Section>
    </>
  );
};
export default MovieDetails;
