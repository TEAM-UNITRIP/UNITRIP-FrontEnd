import { css } from '@emotion/react';
import { MutableRefObject, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { getSearchKeyword } from '@/apis/public/search';
import { SearchSetIcon } from '@/assets/icon';
import MenuBar from '@/components/MenuBar';
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll';
import { COLORS, FONTS } from '@/styles/constants';
import { SearchResItem } from '@/types/search';
import { isGuideShown } from '@/utils/storageHideGuide';

import Guide from '../components/Result/Guide';
import SearchResult from '../components/Result/SearchResult';
import SearchBarContainer from '../components/SearchBar/SearchBarContainer';

const SearchResultPage = () => {
  const { word: initialWord } = useParams();
  const { pathname } = useLocation();

  const [placeList, setPlaceList] = useState<SearchResItem[]>([]);
  const [showGuide, setShowGuide] = useState(() => isGuideShown());

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPlaceList([]);
  }, [pathname]);

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
        numOfRows: 10,
        MobileOS: 'ETC',
        keyword: pathname.split('/')[2],
        contentTypeId: 12,
      });

      if (items === '') {
        if (pageNo === 0) setPlaceList([]);
        target.current && observer.unobserve(target.current);
      } else {
        setPlaceList((prev) => [...prev, ...items.item]);
        page.current++;
      }
    } finally {
      setLoading(false);
    }
  };

  const targetElement = useInfiniteScroll({
    options,
    handleObserver,
    deps: [pathname],
  });

  // 검색 가이드
  const handleSetShowGuide = (value: boolean) => {
    setShowGuide(value);
  };

  return (
    <div css={containerCss}>
      <SearchBarContainer initialWord={initialWord}>
        <button type="button" css={buttonCss}>
          <SearchSetIcon /> 기본 편의시설, 지체장애
        </button>
        <SearchResult
          placeList={placeList}
          targetElement={targetElement}
          loading={loading}
        />
      </SearchBarContainer>

      {showGuide && <Guide handleSetShowGuide={handleSetShowGuide} />}
      <MenuBar />
    </div>
  );
};

export default SearchResultPage;

const containerCss = css`
  position: relative;
`;

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
