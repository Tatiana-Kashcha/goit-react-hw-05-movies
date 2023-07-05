import { NavLink, Outlet } from 'react-router-dom';
import * as s from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <s.StyledLink to="/">Home</s.StyledLink>
          </li>
          <li>
            <s.StyledLink to="/movies">Movies</s.StyledLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
