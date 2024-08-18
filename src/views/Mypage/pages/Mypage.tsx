import { css } from '@emotion/react';
import { useState } from 'react';

import Favorite from '../components/Favorite';
import Main from '../components/Main';
import PersonalInfo from '../components/PersonalInfo';
import TravelerType from '../components/TravelerType';

export type currentTabType =
  | 'main'
  | 'personalInfo'
  | 'favoritePlace'
  | 'travelerType';

function Mypage() {
  const [currentTab, setCurrentTab] = useState<currentTabType>('main');

  const handleSetCurrentTab = (clicked: currentTabType) => {
    setCurrentTab(clicked);
  };
  return (
    <div css={mypageContainer}>
      {currentTab === 'main' && (
        <Main handleSetCurrentTab={handleSetCurrentTab} />
      )}
      {currentTab === 'personalInfo' && (
        <PersonalInfo handleSetCurrentTab={handleSetCurrentTab} />
      )}
      {currentTab === 'favoritePlace' && (
        <Favorite handleSetCurrentTab={handleSetCurrentTab} />
      )}
      {currentTab === 'travelerType' && (
        <TravelerType handleSetCurrentTab={handleSetCurrentTab} />
      )}
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
