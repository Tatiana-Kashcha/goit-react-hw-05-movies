import { MoviesGalleryItem } from '../MoviesGalleryItem/MoviesGalleryItem';
import * as s from './MoviesGallery.styled';
import PropTypes from 'prop-types';

export const MoviesGallery = ({ data, details }) => {
  return (
    <s.List>
      {data.map(({ id, title }) => (
        <li
          key={id}
          onClick={() => {
            details(id);
          }}
        >
          <MoviesGalleryItem title={title} />
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
    }).isRequired
  ).isRequired,
  details: PropTypes.func.isRequired,
};
