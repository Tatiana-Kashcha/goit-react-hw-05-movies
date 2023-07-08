import { Link } from 'react-router-dom';
import * as s from './Additional.styled';
// import PropTypes from 'prop-types';

export const Additional = () => {
  return (
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
  );
};
