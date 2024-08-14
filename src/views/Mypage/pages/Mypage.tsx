import { css } from '@emotion/react';

import { ArrowRightIcon } from '@/assets/icon';
import { ProfileImg } from '@/assets/image';
import { COLORS, FONTS } from '@/styles/constants';

const MYPAGE_TAB_ITEM = [
  '개인정보 변경',
  '찜한 여행지 목록',
  '여행자 유형 설정',
];

function Mypage() {
  return (
    <div css={mypageContainer}>
      <header css={header}>마이페이지</header>
      <section css={profileSection}>
        <img src={ProfileImg} alt="프로필이미지_사진" css={profileImage} />
        <span css={InfoTexst('name')}>서아람</span>
        <span css={InfoTexst('Id')}>ID @Seo8know</span>
      </section>
      <ul>
        {MYPAGE_TAB_ITEM.map((item) => (
          <li css={tabItem('tab')} key={item}>
            <p>{item}</p>
            <ArrowRightIcon />
          </li>
        ))}
      </ul>
      <button type="button" css={tabItem('logout')}>
        로그아웃
      </button>
    </div>
  );
}

export default Mypage;

const mypageContainer = css`
  display: flex;
  flex-direction: column;

  width: 100dvw;
  height: 100dvh;
  padding: 0 2rem;

  background-color: white;
`;

const header = css`
  width: 100%;
  padding: 1rem;

  color: ${COLORS.brand1};

  ${FONTS.H4};
`;

const profileSection = css`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 0.8rem 0 2.5rem;
`;

const profileImage = css`
  width: 8.8rem;
  height: auto;
`;

const InfoTexst = (variant: string) => css`
  padding: ${variant === 'name' && '1.4rem 0 0.6rem'};

  color: ${COLORS.gray6};

  ${variant === 'name' ? FONTS.H3 : FONTS.Body5};
`;

const tabItem = (variant: string) => css`
  display: flex;
  justify-content: ${variant === 'logout' ? 'center' : 'space-between'};
  align-items: center;

  width: 100%;
  padding: 1.85rem 0;
  border-bottom: 1px solid ${COLORS.gray0};

  color: ${COLORS.brand1};

  cursor: pointer;

  ${FONTS.Body2};
`;
