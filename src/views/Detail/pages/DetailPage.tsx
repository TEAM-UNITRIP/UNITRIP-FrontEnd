import { css } from '@emotion/react';
import { useState } from 'react';

import { BackgroundImage } from '@/assets/image';
import { COLORS, FONTS } from '@/styles/constants';

import ErrorReport from '../components/ErrorReport';
import Header from '../components/Header';
import PlaceInfo from '../components/PlaceInfo';
import Tab from '../components/Tab';

const DetailContainer = css`
  width: 100dvw;
`;

const BackgroundImg = css`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: auto;
  height: 26.3rem;

  background-size: cover;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
`;

const Title = css`
  padding: 1.2rem 2rem;

  color: ${COLORS.white};

  ${FONTS.H2};
`;

const TabContainer = css`
  width: 100%;
`;

const GapLine = css`
  width: 100%;
  height: 1.3rem;

  background-color: ${COLORS.gray1};
`;

function DetailPage() {
  const [selectedTab, setSelectedTab] = useState<string>('상세정보');
  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };
  return (
    <div css={DetailContainer}>
      <div css={BackgroundImg}>
        <Header />
        <span css={Title}>대전시립미술관</span>
      </div>
      <PlaceInfo />
      <div css={GapLine}></div>
      <div css={TabContainer}>
        <Tab selectedTab={selectedTab} setSelectedTab={handleTabChange} />
      </div>
      <div css={GapLine}></div>

      {selectedTab === '상세정보' ||
      selectedTab === '유니버설' ||
      selectedTab === '지도' ? (
        <ErrorReport />
      ) : null}
    </div>
  );
}

export default DetailPage;
