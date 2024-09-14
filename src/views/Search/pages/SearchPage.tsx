import PopularSearch from '../components/Search/PopularSearch';
import RecentSearch from '../components/Search/RecentSearch';
import SearchBarContainer from '../components/SearchBar/SearchBarContainer';

const SearchPage = () => {
  return (
    <>
      <SearchBarContainer>
        <RecentSearch />
        <PopularSearch />
      </SearchBarContainer>
    </>
  );
};

export default SearchPage;
