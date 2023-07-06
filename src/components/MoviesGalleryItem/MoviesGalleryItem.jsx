import * as s from './MoviesGalleryItem.styled';
// import PropTypes from 'prop-types';

export const MoviesGalleryItem = ({ title, name }) => {
  return (
    <>
      <s.Title>{title}</s.Title>
      <s.Title>{name}</s.Title>
    </>
  );
};
