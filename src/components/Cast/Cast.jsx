import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/getMovieCast';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import * as s from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [dataCast, setDataCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(dataCast);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    setIsLoading(true);

    getMovieCast(movieId)
      .then(data => {
        setDataCast(data.data.cast);
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
      {isLoading && Loading.arrows()}
      <s.List>
        {dataCast.map(({ id, character, profile_path, name }) => (
          <li key={id}>
            <img src={profile_path} alt={name} />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </s.List>
    </>
  );
};
