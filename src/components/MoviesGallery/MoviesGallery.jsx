import { MoviesGalleryItem } from '../MoviesGalleryItem/MoviesGalleryItem';
import * as s from './MoviesGallery.styled';
// import PropTypes from 'prop-types';

export const MoviesGallery = ({ data }) => {
  return (
    <s.List>
      {data.map(({ id, title, name }) => (
        <li key={id} onClick={() => {}}>
          <MoviesGalleryItem title={title} name={name} />
        </li>
      ))}
    </s.List>
  );
};
