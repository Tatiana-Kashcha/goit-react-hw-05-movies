import { ReactComponent as IconArrow } from '../icons/arrow-back.svg';
import * as s from './ButtonBack.styled';
// import PropTypes from 'prop-types';

export const ButtonBack = ({ to }) => {
  return (
    <s.ButtonBack to={to}>
      <IconArrow width="15" heigth="25" />
      Go back
    </s.ButtonBack>
  );
};

// ButtonBack.propTypes = {
//   to: PropTypes.     .isRequired,
// };
