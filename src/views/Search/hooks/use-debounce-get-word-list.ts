import { debounce } from 'lodash';
import { Dispatch, SetStateAction } from 'react';

import { getSearchKeyword } from '@/apis/public/search';
import { SearchResItem } from '@/types/search';

export const useDebounceGetWordList = (
  setRelatedWordList: Dispatch<SetStateAction<SearchResItem[]>>,
) =>
  debounce(async (searchWord: string) => {
    const wordList = await getSearchKeyword({
      pageNo: 1,
      numOfRows: 20,
      MobileOS: 'IOS',
      keyword: searchWord,
    });

    if (typeof wordList === 'object') {
      setRelatedWordList(wordList.item);
    } else setRelatedWordList([]);
  }, 600);
