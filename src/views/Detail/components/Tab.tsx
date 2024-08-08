import { css } from '@emotion/react';

import { COLORS, FONTS } from '@/styles/constants';

import DetailInfo from './DetailInfo';
import Photos from './Photos';

const TabMenu = ['상세정보', '유니버설', '지도', '사진', '리뷰'];

interface tabState {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

const TabContainer = css`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;

  background-color: ${COLORS.white};
`;

const TabList = css`
  display: flex;
  justify-content: space-around;

  padding: 1.5rem 2.4rem 0 2.5rem;
  border-bottom: 0.1rem solid ${COLORS.gray2};

  color: ${FONTS.H5};
`;

const ListItem = (isActive: boolean) => css`
  height: 3.9rem;
  border-bottom: ${isActive ? `0.2rem solid ${COLORS.gray8}` : 'none'};

  color: ${isActive ? COLORS.gray6 : COLORS.gray4};

  cursor: pointer;
`;

function Tab(props: tabState) {
  const { selectedTab, setSelectedTab } = props;

  const tabOnClick = (item: string) => {
    setSelectedTab(item);
  };

  return (
    <div css={TabContainer}>
      <ul css={TabList}>
        {TabMenu.map((item) => (
          <li
            key={item}
            css={ListItem(item === selectedTab)}
            onClick={() => tabOnClick(item)}>
            {item}
          </li>
        ))}
      </ul>
      {selectedTab === '상세정보' && <DetailInfo />}
      {selectedTab === '사진' && <Photos />}
    </div>
  );
}

export default Tab;
