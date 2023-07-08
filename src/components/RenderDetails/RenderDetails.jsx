import * as s from './RenderDetails.styled';
import noImageIcon from '../icons/noImageIcon.jpg';
// import PropTypes from 'prop-types';

export const RenderDetails = ({
  data: { title, overview, poster_path, release_date, genres, vote_average },
}) => {
  const score = Math.round(vote_average * 10);

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
        <div>
          <h2>{title}</h2>
          <p>User Score: {score}%</p>
          <p>Overview</p>
          <p>{overview}</p>
          <p>Ganres</p>
          <s.List>
            {genres.map(({ id, name }) => (
              <li key={id}>
                <p>{name}</p>
              </li>
            ))}
          </s.List>
        </div>
      </s.DivDet>
    </>
  );
};
