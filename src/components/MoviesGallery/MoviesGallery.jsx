import { Link, useLocation } from 'react-router-dom';
import { MoviesGalleryItem } from '../MoviesGalleryItem/MoviesGalleryItem';
import * as s from './MoviesGallery.styled';
import PropTypes from 'prop-types';

export const MoviesGallery = ({ data }) => {
  const location = useLocation();
  console.log(location);

  return (
    <s.List>
      {data.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <MoviesGalleryItem title={title} />
          </Link>
        </li>
      ))}
    </s.List>
  );
};

MoviesGallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
};
