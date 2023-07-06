import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';

const Movies = () => {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (!searchText) {
      return;
    }
  }, [searchText]);

  const handleSearch = searchText => {
    setSearchText(searchText);
  };

  return (
    <>
      <Searchbar onSubmit={handleSearch} />
      <Outlet />
    </>
  );
};
export default Movies;
