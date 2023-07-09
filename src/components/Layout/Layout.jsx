import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import * as s from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <s.Header>
        <s.Container>
          <s.List>
            <li>
              <s.StyledLink to="/">Home</s.StyledLink>
            </li>
            <li>
              <s.StyledLink to="/movies">Movies</s.StyledLink>
            </li>
          </s.List>
        </s.Container>
      </s.Header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
