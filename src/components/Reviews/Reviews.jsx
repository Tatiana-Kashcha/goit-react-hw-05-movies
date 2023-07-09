import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api/getMovieReviews';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import * as s from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [dataReviews, setDataReviews] = useState([]);
  const [reviewsPerPage, setReviewsPerPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    setIsLoading(true);

    getMovieReviews(movieId)
      .then(({ data: { results } }) => {
        setDataReviews([...results]);
        setReviewsPerPage(results.length);
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
      {reviewsPerPage > 0 && (
        <s.List>
          {dataReviews.map(({ id, author, content }) => (
            <li key={id}>
              <s.Author>Author: {author}</s.Author>
              <p>{content}</p>
            </li>
          ))}
        </s.List>
      )}
      {reviewsPerPage === 0 && (
        <s.NoReviews>We don`t have any reviews for this movie.</s.NoReviews>
      )}
    </>
  );
};
