import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieId } from 'api/getMovieId';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [dataMovieId, setDataMovieId] = useState({});

  useEffect(() => {
    if (!movieId) {
      return;
    }
    // setIsLoading(true);

    getMovieId(movieId)
      .then(({ data: { results } }) => {
        setDataMovieId({ results });
      })
      .catch(err => {
        console.log('ERROR', err);
      })
      .finally(() => {
        // setIsLoading(false);
        // Loading.remove();
      });
  }, [movieId]);

  return (
    <>
      <h2>Page MovieDetails</h2>
      <Outlet />
    </>
  );
};
export default MovieDetails;
