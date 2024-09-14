import { ReactNode, useCallback, useRef, useState } from 'react';

import { SearchResItem } from '@/types/search';

import { useDebounceGetWordList } from '../../hooks/use-debounce-get-word-list';
import RelatedWordList from './RelatedWordList';
import SearchBar from './SearchBar';

interface SearchBarContainerProps {
  children: ReactNode;
  initialWord?: string;
}

const SearchBarContainer = (props: SearchBarContainerProps) => {
  const { children, initialWord } = props;

  const searchInputRef = useRef<HTMLInputElement>(null);

  const [relatedWordList, setRelatedWordList] = useState<SearchResItem[]>([]);
  const [loading, setLoading] = useState(false);

  const debounceGetWordList = useDebounceGetWordList(
    setRelatedWordList,
    setLoading,
  );

  const handleSearchInputValue = (value: string) => {
    if (!searchInputRef.current) return;
    searchInputRef.current.value = value;
  };

  const resetRelatedWordList = useCallback(() => {
    setRelatedWordList([]);
  }, []);

  return (
    <>
      <SearchBar
        initialWord={initialWord}
        searchInputRef={searchInputRef}
        debounceGetWordList={debounceGetWordList}
        resetRelatedWordList={resetRelatedWordList}
        handleSearchInputValue={handleSearchInputValue}
      />

      {initialWord !== searchInputRef.current?.value &&
        searchInputRef.current?.value && (
          <RelatedWordList
            relatedWordList={relatedWordList}
            loading={loading}
            handleSearchInputValue={handleSearchInputValue}
          />
        )}
      {!initialWord && relatedWordList.length === 0 && children}
      {initialWord && children}
    </>
  );
};

export default SearchBarContainer;
