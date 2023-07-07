import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/getMovieCast';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

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
        setDataCast(data);
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
        {dataCast.map(({ id, title, photo, tags }) => (
          <li key={id}>
            <img src={photo} alt={title} />
            <p>{title}</p>
            <p>Character: {tags}</p>
          </li>
        ))}
      </s.List>
    </>
  );
};
