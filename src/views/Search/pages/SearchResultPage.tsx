import { css } from '@emotion/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { SearchSetIcon } from '@/assets/icon';
import MenuBar from '@/components/MenuBar';
import { COLORS, FONTS } from '@/styles/constants';

import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';

const SearchResultPage = () => {
  const { word } = useParams();
  const [searchWord, setSearchWord] = useState(word || '');

  const handleSearchWord = (word: string) => {
    setSearchWord(word);
  };

  return (
    <>
      <SearchBar searchWord={searchWord} handleSearchWord={handleSearchWord} />
      <button type="button" css={buttonCss}>
        <SearchSetIcon /> 기본 편의시설, 지체장애
      </button>
      <SearchResult />
      <MenuBar />
    </>
  );
};

export default SearchResultPage;

const buttonCss = css`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  width: 100%;
  height: 4.6rem;
  padding-left: 2.3rem;
  margin-top: 0.8rem;

  background-color: ${COLORS.gray1};

  color: ${COLORS.brand1};

  ${FONTS.Body3};
`;
