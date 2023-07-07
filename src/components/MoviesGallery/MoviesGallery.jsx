import { MoviesGalleryItem } from '../MoviesGalleryItem/MoviesGalleryItem';
import * as s from './MoviesGallery.styled';
// import PropTypes from 'prop-types';

export const MoviesGallery = ({ data }) => {
  return (
    <s.List>
      {data.map(({ id, title }) => (
        <li key={id} onClick={() => {}}>
          <MoviesGalleryItem title={title} />
        </li>
      ))}
    </s.List>
  );
};
