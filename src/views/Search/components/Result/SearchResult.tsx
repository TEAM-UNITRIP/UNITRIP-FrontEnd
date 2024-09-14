import { css } from '@emotion/react';
import { MutableRefObject } from 'react';

import PlaceCard from '@/components/PlaceCard';
import { SearchResItem } from '@/types/search';

interface SearchResultProps {
  placeList: SearchResItem[];
  targetElement: MutableRefObject<HTMLDivElement | null>;
  loading: boolean;
}

const SearchResult = (props: SearchResultProps) => {
  const { placeList, targetElement, loading } = props;

  const renderPlaceList = () => {
    if (placeList.length === 0) {
      return <span>검색 결과가 없습니다.</span>;
    } else {
      return placeList.map(
        ({ contentid, title, addr1, addr2, firstimage, firstimage2 }) => {
          return (
            <li key={contentid}>
              <PlaceCard
                placeName={title}
                address={addr1 + addr2}
                imgSrc={firstimage || firstimage2 || ''}
              />
            </li>
          );
        },
      );
    }
  };

  return (
    <ul css={containerCss}>
      {renderPlaceList()}
      <div ref={targetElement} css={lastTargetCss} />
      {loading && (
        <>
          <li>
            <PlaceCard placeName={''} address={''} imgSrc={''} />
          </li>
          <li>
            <PlaceCard placeName={''} address={''} imgSrc={''} />
          </li>
          <li>
            <PlaceCard placeName={''} address={''} imgSrc={''} />
          </li>
          <li>
            <PlaceCard placeName={''} address={''} imgSrc={''} />
          </li>
        </>
      )}
    </ul>
  );
};

export default SearchResult;

const containerCss = css`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;

  height: calc(100vh - 11rem);
  overflow-y: scroll;

  padding: 1.6rem 2rem 0;
`;

const lastTargetCss = css`
  width: 100%;
  height: 1px;
`;
