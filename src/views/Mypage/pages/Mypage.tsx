import { css } from '@emotion/react';
import { useState } from 'react';

import MenuBar from '@/components/MenuBar';

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

  const renderComponent = (state: currentTabType) => {
    switch (state) {
      case 'main':
        return <Main handleSetCurrentTab={handleSetCurrentTab} />;
      case 'personalInfo':
        return <PersonalInfo handleSetCurrentTab={handleSetCurrentTab} />;
      case 'favoritePlace':
        return <Favorite handleSetCurrentTab={handleSetCurrentTab} />;
      case 'travelerType':
        return <TravelerType handleSetCurrentTab={handleSetCurrentTab} />;
      default:
        return null;
    }
  };

  return (
    <div css={mypageContainer}>
      {renderComponent(currentTab)}

      {currentTab === 'main' && (
        <footer css={footer}>
          <MenuBar />
        </footer>
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

const footer = css`
  margin-left: -2rem;
`;
