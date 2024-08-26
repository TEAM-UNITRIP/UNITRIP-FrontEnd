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

const COMPONENT_LIST = [
  { tab: 'personalInfo', component: PersonalInfo },
  { tab: 'favoritePlace', component: Favorite },
  { tab: 'travelerType', component: TravelerType },
];

function Mypage() {
  const [currentTab, setCurrentTab] = useState<currentTabType>('main');

  const handleSetCurrentTab = (clicked: currentTabType) => {
    setCurrentTab(clicked);
  };
  return (
    <>
      {currentTab === 'main' && (
        <div css={mypageContainer}>
          <Main handleSetCurrentTab={handleSetCurrentTab} />
          <footer css={footer}>
            <MenuBar />
          </footer>
        </div>
      )}

      {COMPONENT_LIST.map(
        ({ tab, component: Component }) =>
          currentTab === tab && (
            <div css={mypageContainer} key={tab}>
              <Component handleSetCurrentTab={handleSetCurrentTab} />
            </div>
          ),
      )}
    </>
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
