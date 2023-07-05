import { Outlet } from 'react-router-dom';
const Movies = () => {
  return (
    <>
      <h2>Page Movies</h2>
      <Outlet />
    </>
  );
};
export default Movies;
