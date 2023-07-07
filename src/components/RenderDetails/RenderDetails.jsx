import { Link } from 'react-router-dom';
import * as s from './RenderDetails.styled';

export const RenderDetails = data => {
  return (
    <>
      <div>
        <p>Additional information</p>
        <s.List>
          <li>
            <Link>Cast</Link>
          </li>
          <li>
            <Link>Reviews</Link>
          </li>
        </s.List>
      </div>
    </>
  );
};
