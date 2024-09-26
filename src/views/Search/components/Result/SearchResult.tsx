import { css } from '@emotion/react';
import { MutableRefObject, useRef } from 'react';

import { BigInfoIcon } from '@/assets/icon';
import FilteredPlaceCard from '@/components/FilteredPlaceCard';
import { COLORS, FONTS } from '@/styles/constants';
import { BarrierFreeItem, SearchResItem } from '@/types/search';

import { filterState } from '../../types/category';

interface SearchResultProps {
  placeData: (SearchResItem & BarrierFreeItem)[];
  targetElement: MutableRefObject<HTMLDivElement | null>;
  loading: boolean;
  filterState: filterState;
  heartList: number[];
}

const SearchResult = (props: SearchResultProps) => {
  const { placeData, targetElement, loading, filterState, heartList } = props;
  const placeListRef = useRef<HTMLUListElement>(null);
  console.log(loading);

  const renderPlaceList = () => {
    // 검색 결과가 없거나, 필터링된 결과가 없을 때
    if (
      placeData.length === 0 ||
      placeListRef.current?.childElementCount === 1
    ) {
      return (
        <>
          <div css={noResultContainerCss}>
            <BigInfoIcon />
            <div css={noResultTitleCss}>검색 결과가 없어요</div>
            <p css={noResultInfoCss}>
              검색 필터를 바꾸거나
              <br />
              다른 여행지를 검색해보세요!
            </p>
          </div>
        </>
      );
    } else {
      return placeData.map(
        ({ contentid, title, addr1, addr2, firstimage, firstimage2 }) => {
          return (
            <FilteredPlaceCard
              key={contentid}
              filterState={filterState}
              placeInfo={placeData.find(
                ({ contentid: targetContentId }) =>
                  targetContentId === contentid,
              )}
              contentid={contentid}
              placeName={title}
              address={addr1 + addr2}
              imgSrc={firstimage || firstimage2 || ''}
              onClickHeart={() => {}}
              isHeart={heartList.includes(Number(contentid))}
            />
          );
        },
      );
    }
  };

  return (
    <>
      <ul css={containerCss(placeData.length)} ref={placeListRef}>
        {renderPlaceList()}
        <div ref={targetElement} css={lastTargetCss} />

        {/* 로딩 ui 필요 */}
        {/* {placeList.length >= 10 && (
          <>
            <div>
              <PlaceCard placeName={''} address={''} imgSrc={''} />
            </div>
            <div>
              <PlaceCard placeName={''} address={''} imgSrc={''} />
            </div>
            <div>
              <PlaceCard placeName={''} address={''} imgSrc={''} />
            </div>
            <div>
              <PlaceCard placeName={''} address={''} imgSrc={''} />
            </div>
          </>
        )} */}
      </ul>
    </>
  );
};

export default SearchResult;

const containerCss = (placeLength: number) => css`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;

  height: ${placeLength > 0 ? 'calc(100vh - 11rem)' : 'fit-content'};
  overflow-y: scroll;

  padding: 1.6rem 2rem 0;
`;

const lastTargetCss = css`
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
