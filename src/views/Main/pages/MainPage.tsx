import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

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
  const response = isLoggedIn && useGetUserData(Number(isLoggedIn));

  useEffect(() => {
    const fetchData = () => {
      if (response) {
        setUserData(response);
      }
    };

    fetchData();
  }, [response]);

  return (
    <>
      <Header />
      <main css={container}>
        <h1 css={mainText}>
          {userData && (
            <>
              {userData.name}님,
              <br />
            </>
          )}
          오늘 어디로 떠날까요?
        </h1>
        <NearbyTravel
          isLoggedIn={Boolean(isLoggedIn)}
          region={userData?.region}
        />

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
