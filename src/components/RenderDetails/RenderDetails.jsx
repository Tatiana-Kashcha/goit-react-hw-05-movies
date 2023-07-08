import { Link } from 'react-router-dom';
import * as s from './RenderDetails.styled';
import { ReactComponent as IconArrow } from '../icons/arrow-back.svg';

export const RenderDetails = data => {
  return (
    <>
      <s.ButtonBack type="button">
        <IconArrow width="15" heigth="25" />
        Go back
      </s.ButtonBack>
      <s.DivDet>БУДЕ ІНФА ПРО ФІЛЬМ</s.DivDet>
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
