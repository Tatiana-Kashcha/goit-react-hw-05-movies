import * as s from './RenderDetails.styled';
import noImageIcon from '../icons/noImageIcon.jpg';
// import PropTypes from 'prop-types';

export const RenderDetails = ({
  data: { title, overview, poster_path, genres, vote_average },
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
          {title && <s.Title>{title}</s.Title>}
          <s.Score>User Score: {score}%</s.Score>
          {overview && <s.Overview>Overview</s.Overview>}
          <s.Descr>{overview}</s.Descr>
          {genres.length > 0 && <s.Ganres>Ganres</s.Ganres>}
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
