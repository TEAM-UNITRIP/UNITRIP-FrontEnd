import { ReactNode, useCallback, useRef, useState } from 'react';

import { SearchResItem } from '@/types/search';

import { useDebounceGetWordList } from '../../hooks/use-debounce-get-word-list';
import RelatedWordList from './RelatedWordList';
import SearchBar from './SearchBar';

interface SearchBarContainerProps {
  children: ReactNode;
}

const SearchBarContainer = (props: SearchBarContainerProps) => {
  const { children } = props;

  const searchInputRef = useRef<HTMLInputElement>(null);

  const [relatedWordList, setRelatedWordList] = useState<SearchResItem[]>([]);
  const [loading, setLoading] = useState(false);

  const debounceGetWordList = useDebounceGetWordList(
    setRelatedWordList,
    setLoading,
  );

  const resetRelatedWordList = useCallback(() => {
    setRelatedWordList([]);
  }, []);

  return (
    <>
      <SearchBar
        searchInputRef={searchInputRef}
        debounceGetWordList={debounceGetWordList}
        resetRelatedWordList={resetRelatedWordList}
      />
      <RelatedWordList relatedWordList={relatedWordList} />

      {loading && <div>로딩중 . . .</div>}
      {!relatedWordList.length && children}
    </>
  );
};

export default SearchBarContainer;
