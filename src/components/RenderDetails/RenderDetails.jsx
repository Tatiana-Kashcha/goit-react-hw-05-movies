import { Link } from 'react-router-dom';
import * as s from './RenderDetails.styled';
import { ReactComponent as IconArrow } from '../icons/arrow-back.svg';
import noImageIcon from '../icons/noImageIcon.jpg';

export const RenderDetails = ({
  data: { title, overview, poster_path, release_date, genres, vote_average },
}) => {
  return (
    <>
      <s.ButtonBack type="button">
        <IconArrow width="15" heigth="25" />
        Go back
      </s.ButtonBack>
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
      <s.DivAdd>
        <s.Description>Additional information</s.Description>
        <s.List>
          <li>
            <Link>Cast</Link>
          </li>
          <li>
            <Link>Reviews</Link>
          </li>
        </s.List>
      </s.DivAdd>
    </>
  );
};
