import { Link } from 'react-router-dom';
import * as s from './Additional.styled';

export const Additional = () => {
  return (
    <s.DivAdd>
      <s.Description>Additional information</s.Description>
      <s.List>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </s.List>
    </s.DivAdd>
  );
};
