import { ReactComponent as IconArrow } from '../icons/arrow-back.svg';
import * as s from './ButtonBack.styled';
// import PropTypes from 'prop-types';

export const ButtonBack = ({ onBack }) => {
  return (
    <s.ButtonBack type="button" onClick={onBack}>
      <IconArrow width="15" heigth="25" />
      Go back
    </s.ButtonBack>
  );
};

// Button.propTypes = {
//   onBack: PropTypes.func.isRequired,
// };
