import { css } from '@emotion/react';

import { MypageBackIcon } from '@/assets/icon';
import { COLORS, FONTS } from '@/styles/constants';

import { currentTabType } from '../pages/Mypage';

interface HeaderProps {
  handleSetCurrentTab: (clicked: currentTabType) => void;
  page: string;
}

const HEADER_CONTENTS = [
  { page: 'personalInfo', content: '개인정보 조회 및 변경' },
  { page: 'favorite', content: '찜한 여행지 목록' },
  { page: 'travelerType', content: '' },
];

function Header(props: HeaderProps) {
  const { handleSetCurrentTab, page } = props;

  const content = HEADER_CONTENTS.find((item) => item.page === page)?.content;

  return (
    <header css={header}>
      <MypageBackIcon onClick={() => handleSetCurrentTab('main')} />
      <span>{content}</span>
    </header>
  );
}

export default Header;

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
