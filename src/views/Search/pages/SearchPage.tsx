import MenuBar from '@/components/MenuBar';

import PopularSearch from '../components/PopularSearch';
import RecentSearch from '../components/RecentSearch';
import SearchBar from '../components/SearchBar';

const SearchPage = () => {
  return (
    <>
      <SearchBar />
      <RecentSearch />
      <PopularSearch />
      <MenuBar />
    </>
  );
};

export default SearchPage;
