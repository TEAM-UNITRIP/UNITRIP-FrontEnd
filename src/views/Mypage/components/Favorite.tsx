import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

import { MypageBackIcon, MypageHeartIcon } from '@/assets/icon';
import { COLORS, FONTS } from '@/styles/constants';

import { currentTabType } from '../pages/Mypage';
import FavoritePlaceList from './FavoritePlaceList';

const favoriteList = [];

interface FavoriteProps {
  handleSetCurrentTab: (clicked: currentTabType) => void;
}

function Favorite(props: FavoriteProps) {
  const { handleSetCurrentTab } = props;

  return (
    <>
      <header css={header}>
        <MypageBackIcon onClick={() => handleSetCurrentTab('main')} />
        <span>찜한 여행지 목록</span>
      </header>
      {favoriteList.length === 0 ? (
        <div css={emptyContainer}>
          <MypageHeartIcon />
          <p css={emptyText}>
            아직 찜한 여행지가 없어요
            <br />
            유니트립 여행지를 더 둘러볼까요?
          </p>
          <Link to="/" css={homeBtn}>
            홈으로 이동하기
          </Link>
        </div>
      ) : (
        <FavoritePlaceList />
      )}
    </>
  );
}

export default Favorite;

const header = css`
  display: flex;
  gap: 1rem;
  align-items: center;

  width: 100%;
  height: 5rem;
  padding: 1.2rem 0;

  color: ${COLORS.brand1};

  ${FONTS.H4};
`;

const emptyContainer = css`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding-top: 15rem;
`;

const emptyText = css`
  padding: 1.6rem 0 2.8rem;

  color: ${COLORS.gray9};
  text-align: center;

  ${FONTS.Body4};
`;

const homeBtn = css`
  padding: 0.8rem 1.6rem 1rem;
  border-radius: 1rem;

  background-color: ${COLORS.brand1};

  color: ${COLORS.white};

  ${FONTS.Body3};
`;
