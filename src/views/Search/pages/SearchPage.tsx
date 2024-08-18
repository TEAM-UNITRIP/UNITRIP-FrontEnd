import { useState } from 'react';

import MenuBar from '@/components/MenuBar';

import PopularSearch from '../components/PopularSearch';
import RecentSearch from '../components/RecentSearch';
import RelatedWordList from '../components/RelatedWordList';
import SearchBar from '../components/SearchBar';

const SearchPage = () => {
  const [searchWord, setSearchWord] = useState('');

  const handleSearchWord = (word: string) => {
    setSearchWord(word);
  };

  return (
    <>
      <SearchBar searchWord={searchWord} handleSearchWord={handleSearchWord} />
      {searchWord ? (
        <RelatedWordList searchWord={searchWord} />
      ) : (
        <>
          <RecentSearch />
          <PopularSearch />
        </>
      )}
      <MenuBar />
    </>
  );
};

export default SearchPage;
