import * as s from './RenderDetails.styled';
import noImageIcon from '../icons/noImageIcon.jpg';
// import PropTypes from 'prop-types';

export const RenderDetails = ({
  data: { title, overview, poster_path, release_date, genres, vote_average },
}) => {
  return (
    <>
      <s.DivDet>
        <s.Thumb>
          {poster_path ? (
            <img
              loading="lazy"
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
            />
          ) : (
            <img src={noImageIcon} alt={title} />
          )}
        </s.Thumb>
      </s.DivDet>
    </>
  );
};
