import { debounce } from 'lodash';
import { Dispatch, SetStateAction } from 'react';

import { getSearchKeyword } from '@/apis/public/search';
import { SearchResItem } from '@/types/search';

export const useDebounceGetWordList = (
  setRelatedWordList: Dispatch<SetStateAction<SearchResItem[]>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
) =>
  debounce(async (searchWord: string) => {
    setLoading(true);

    try {
      const wordList = await getSearchKeyword({
        pageNo: 1,
        numOfRows: 20,
        MobileOS: 'IOS',
        keyword: searchWord,
      });

      if (typeof wordList === 'object') {
        setRelatedWordList(wordList.item);
      } else setRelatedWordList([]);
    } finally {
      setLoading(false);
    }
  }, 500);
