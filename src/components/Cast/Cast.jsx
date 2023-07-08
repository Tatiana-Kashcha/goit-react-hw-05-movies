import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/getMovieCast';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import * as s from './Cast.styled';
import noImageIcon from '../icons/noImageIcon.jpg';

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
            <s.Thumb>
              {profile_path ? (
                <img
                  loading="lazy"
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  alt={name}
                />
              ) : (
                <img src={noImageIcon} alt={name} />
              )}
            </s.Thumb>
            <s.Name>{name}</s.Name>
            <p>Character: {character}</p>
          </li>
        ))}
      </s.List>
    </>
  );
};
