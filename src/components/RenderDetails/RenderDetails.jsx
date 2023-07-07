import { Link } from 'react-router-dom';
import * as s from './RenderDetails.styled';

export const RenderDetails = data => {
  return (
    <>
      <s.Div>
        <s.Description>Additional information</s.Description>
        <s.List>
          <li>
            <Link>Cast</Link>
          </li>
          <li>
            <Link>Reviews</Link>
          </li>
        </s.List>
      </s.Div>
    </>
  );
};
