import { css } from '@emotion/react';

import { COLORS, FONTS } from '@/styles/constants';

import Header from '../components/Header';
import NearbyTravel from '../components/NearbyTravel';
import RecommendedTravel from '../components/RecommendedTravel';
import { whiteBg } from '../styles/main';

const MainPage = () => {
  const isLoggedIn = true;
  return (
    <>
      <Header />
      <main css={container}>
        <div css={whiteBg}>
          <h1 css={mainText}>
            {isLoggedIn && (
              <>
                서현님,
                <br />
              </>
            )}
            오늘 어디로 떠날까요?
          </h1>
          <NearbyTravel />
        </div>
        <RecommendedTravel />
      </main>
    </>
  );
};

export default MainPage;

const container = css`
  width: 100vw;
`;

const mainText = css`
  ${FONTS.H3};
  padding-top: 2rem;
  margin-left: 2rem;

  color: ${COLORS.gray9};
`;
