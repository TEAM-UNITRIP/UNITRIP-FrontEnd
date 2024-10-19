import { css } from '@emotion/react';
import { memo, MutableRefObject, useRef, useState } from 'react';

import { getBarrierFreeInfo, getSearchKeyword } from '@/apis/public/search';
import { BigInfoIcon } from '@/assets/icon';
import { DefaultImage } from '@/assets/image';
import Loading from '@/components/Loading';
import PageLoading from '@/components/PageLoading';
import PlaceCard from '@/components/PlaceCard';
import { MAP_FACILITIES_API_KEY } from '@/constants/facilities';
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll';
import { COLORS, FONTS } from '@/styles/constants';
import { SearchItem } from '@/types/search';

import {
  getFilterList,
  INITIAL_FILTER_INDEX_INFO,
} from '../../constants/category';
import { FilterFacilities, filterState } from '../../types/category';

interface SearchResultProps {
  searchWord: string;
  filterState: filterState;
  heartList: number[];
}

const SearchResult = memo((props: SearchResultProps) => {
  const { searchWord, filterState, heartList } = props;

  const [loading, setLoading] = useState(false);

  const [placeList, setPlaceList] = useState<Record<string, SearchItem>>({});

  const [filterIndexInfo, setFilterIndexInfo] = useState<
    Record<FilterFacilities, string[]>
  >(INITIAL_FILTER_INDEX_INFO);

  // 무한스크롤
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };

  const handleObserver = async (
    observer: IntersectionObserver,
    target: MutableRefObject<HTMLElement | null>,
    page: MutableRefObject<number>,
  ) => {
    setLoading(true);
    const pageNo = page.current;

    try {
      const items = await getSearchKeyword({
        pageNo,
        numOfRows: 50,
        MobileOS: 'ETC',
        keyword: searchWord || '',
        contentTypeId: 12,
      });

      if (items === '') {
        if (pageNo === 0) setPlaceList({});
        target.current && observer.unobserve(target.current);
      } else {
        const newPlaceList = items.item.reduce(
          (acc, item) => {
            acc[item.contentid] = item;
            return acc;
          },
          {} as Record<string, SearchItem>,
        );

        const promises = items.item.map(({ contentid }) =>
          getBarrierFreeInfo({
            MobileOS: 'ETC',
            contentId: Number(contentid),
          }),
        );
        const promiseResult = await Promise.allSettled(promises);

        const updatedFilterIndexInfo = { ...filterIndexInfo };

        promiseResult.forEach((result) => {
          if (result.status === 'fulfilled' && result.value !== '') {
            const item = result.value.item[0];
            const contentid = item.contentid;

            Object.entries(item).forEach(([facility, value]) => {
              if (facility !== 'contentid' && value !== '') {
                updatedFilterIndexInfo[facility as FilterFacilities].push(
                  contentid,
                );
              }
            });
          }
        });
        setFilterIndexInfo(updatedFilterIndexInfo);

        setPlaceList((prev) => ({ ...prev, ...newPlaceList }));
        page.current++;
      }
    } finally {
      setLoading(false);
    }
  };

  const targetElement = useInfiniteScroll({
    options,
    handleObserver,
    deps: [searchWord],
  });

  const placeListRef = useRef<HTMLUListElement>(null);

  const filterList = getFilterList(filterState);

  const renderPlaceList =
    filterList.length > 0
      ? Array.from(
          filterList.reduce((acc, filter, idx) => {
            if (idx === 0) return acc;
            const curSet = new Set(
              filterIndexInfo[MAP_FACILITIES_API_KEY[filter]],
            );
            return acc.intersection(curSet);
          }, new Set(filterIndexInfo[MAP_FACILITIES_API_KEY[filterList[0]]])),
        )
      : Object.keys(placeList);

  return (
    <>
      {/* 최초 로딩 */}
      {loading && Object.keys(placeList).length === 0 && <PageLoading />}

      <ul css={containerCss(Object.keys(placeList).length)} ref={placeListRef}>
        {!loading && renderPlaceList.length === 0 ? (
          <NoResultView />
        ) : (
          renderPlaceList.map((contentid) => {
            const { title, addr1, addr2, firstimage, firstimage2 } =
              placeList[contentid];
            return (
              <li key={contentid}>
                <PlaceCard
                  contentid={contentid}
                  placeName={title}
                  address={addr1 + addr2}
                  imgSrc={firstimage || firstimage2 || DefaultImage}
                  isHeart={heartList.includes(Number(contentid))}
                  buttonDisabled
                />
              </li>
            );
          })
        )}
        <div ref={targetElement} css={lastTargetCss(loading)} />

        {/* 무한스크롤 로딩 */}
        {loading && Object.keys(placeList).length > 0 && <Loading />}
      </ul>
    </>
  );
});

const NoResultView = () => (
  <div css={noResultContainerCss}>
    <BigInfoIcon />
    <div css={noResultTitleCss}>검색 결과가 없어요</div>
    <p css={noResultInfoCss}>
      검색 필터를 바꾸거나
      <br />
      다른 여행지를 검색해보세요!
    </p>
  </div>
);

SearchResult.displayName = 'SearchResult';

export default SearchResult;

const containerCss = (placeLength: number) => css`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;

  height: ${placeLength > 0 ? 'calc(100vh - 11rem)' : 'fit-content'};
  padding: 1.6rem 2rem 0;
  padding-bottom: 7rem;
  overflow-y: scroll;
`;

const lastTargetCss = (loading: boolean) => css`
  position: ${loading ? 'fixed' : 'static'};
  bottom: ${loading ? '-10px' : ''};

  width: 100%;
  height: 1px;
`;

const noResultContainerCss = css`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 6rem 0 1.2rem;
`;

const noResultTitleCss = css`
  margin: 2rem 0 0.8rem;

  color: ${COLORS.gray9};
  text-align: center;

  ${FONTS.Body2};
`;

const noResultInfoCss = css`
  color: ${COLORS.brand1};
  text-align: center;
  ${FONTS.Small1};
`;
