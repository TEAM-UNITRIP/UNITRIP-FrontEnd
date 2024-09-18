import { css } from '@emotion/react';
import { useState } from 'react';

import useGetUserData from '@/api/supabase/useGetUserData';
import MenuBar from '@/components/MenuBar';
import { COLORS, FONTS } from '@/styles/constants';
import { UserDataProps } from '@/types/type';

import Header from '../components/Header';
import NearbyTravel from '../components/NearbyTravel';
import RecommendedTravel from '../components/RecommendedTravel';

const MainPage = () => {
  const [userData, setUserData] = useState<UserDataProps>();

  const isLoggedIn = sessionStorage.getItem('kakao_id');

  if (isLoggedIn) {
    const response = useGetUserData(Number(isLoggedIn));
    setUserData(response);
  }

  return (
    <>
      <Header />
      <main css={container}>
        <h1 css={mainText}>
          {isLoggedIn && userData && (
            <>
              {userData.name}님,
              <br />
            </>
          )}
          오늘 어디로 떠날까요?
        </h1>
        <NearbyTravel region={userData?.region} />

        <div css={graySpacing} />
        <RecommendedTravel />
      </main>
      <MenuBar />
    </>
  );
};

export default MainPage;

const container = css`
  width: 100vw;
`;

const mainText = css`
  padding-top: 2rem;
  margin-left: 2rem;

  color: ${COLORS.gray9};
  ${FONTS.H3};
`;

const graySpacing = css`
  width: 100vw;
  height: 1.2rem;

  background-color: ${COLORS.gray0};
`;
