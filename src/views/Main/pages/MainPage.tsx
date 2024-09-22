import { css } from '@emotion/react';
import { useState } from 'react';

import { getPlaceBasedArea } from '@/apis/public/main';
import MenuBar from '@/components/MenuBar';
import { useAsyncEffect } from '@/hooks/use-async-effect';
import { COLORS, FONTS } from '@/styles/constants';
import { PlaceBasedAreaItem } from '@/types/main';

import Header from '../components/Header';
import NearbyTravel from '../components/NearbyTravel';
import RecommendedTravel from '../components/RecommendedTravel';

const MainPage = () => {
  const isLoggedIn = true;
  const [placeList, setPlaceList] = useState<PlaceBasedAreaItem[]>([]);

  useAsyncEffect(async () => {
    const placeList = await getPlaceBasedArea({ MobileOS: 'ETC' });
    setPlaceList(placeList === '' ? [] : placeList.item);
  }, []);

  return (
    <>
      <Header />
      <main css={container}>
        <h1 css={mainText}>
          {isLoggedIn && (
            <>
              서현님,
              <br />
            </>
          )}
          오늘 어디로 떠날까요?
        </h1>
        <NearbyTravel placeList={placeList} />

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
