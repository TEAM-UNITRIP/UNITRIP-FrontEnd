import { css } from '@emotion/react';
import { useState } from 'react';

import BottomButton from '@/components/BottomButton';
import MenuBar from '@/components/MenuBar';
import SelectTravelerType from '@/components/SelectTravelerType';

import Favorite from '../components/Favorite';
import Main from '../components/Main';
import PersonalInfo from '../components/PersonalInfo';

export type currentTabType =
  | 'main'
  | 'personalInfo'
  | 'favoritePlace'
  | 'travelerType';

const Mypage = () => {
  const [currentTab, setCurrentTab] = useState<currentTabType>('main');

  const handleSetCurrentTab = (clicked: currentTabType) => {
    setCurrentTab(clicked);
  };

  const handleData = () => {};

  const renderComponent = (state: currentTabType) => {
    switch (state) {
      case 'main':
        return <Main handleSetCurrentTab={handleSetCurrentTab} />;
      case 'personalInfo':
        return <PersonalInfo handleSetCurrentTab={handleSetCurrentTab} />;
      case 'favoritePlace':
        return <Favorite handleSetCurrentTab={handleSetCurrentTab} />;
      case 'travelerType':
        return <SelectTravelerType handleSetCurrentTab={handleSetCurrentTab} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div css={mypageContainer}>{renderComponent(currentTab)}</div>
      {currentTab === 'main' ? (
        <MenuBar />
      ) : (
        <BottomButton text="저장" clickedFn={handleData} />
      )}
    </>
  );
};

export default Mypage;

const mypageContainer = css`
  display: flex;
  flex-direction: column;

  width: 100dvw;
  height: 100dvh;
  padding: 0 2rem;

  background-color: white;
`;
