import { css } from '@emotion/react';
import { useState } from 'react';

import { MapMonoGrayIcon } from '@/assets/icon';
import SelectTravelerType from '@/components/SelectTravelerType';
import { COLORS, FONTS } from '@/styles/constants';
import MypageHeader from '@/views/Mypage/components/MypageHeader';
import { currentTabType } from '@/views/Mypage/pages/Mypage';

interface TravelerTypeProps {
  handleSetCurrentTab?: (clicked: currentTabType) => void;
}

const TravelerType = (props: TravelerTypeProps) => {
  const { handleSetCurrentTab } = props;

  const [travelerTypes, setTravelerTypes] = useState<string[]>([]);

  return (
    <>
      <MypageHeader
        handleSetCurrentTab={handleSetCurrentTab}
        state={'travelerType'}
      />
      <div css={contentContainer}>
        <div>
          <p css={mainText}>
            <span css={highlight}>여행자 유형</span>
            을 <br />
            모두 선택해주세요
          </p>
          <p css={subText}>다중선택 가능</p>
        </div>
        <SelectTravelerType
          currentTravelerType={travelerTypes}
          setTravelerType={setTravelerTypes}
        />

        <div>
          <div css={explaination}>
            <MapMonoGrayIcon />
            <p>여행자 유형은 장소 추천과 리뷰 필터링에 반영돼요!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelerType;

const contentContainer = css`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  height: calc(100dvh - 4.8rem);
`;

const mainText = css`
  margin-top: 1.2rem;

  color: ${COLORS.brand1};

  ${FONTS.H2};
`;

const highlight = css`
  display: inline;

  box-shadow: inset 0 -1.5rem 0 ${COLORS.brand2};
`;

const subText = css`
  padding: 0.9rem 0;

  color: ${COLORS.gray4};
  text-align: end;
  ${FONTS.Body3};
`;

const explaination = css`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  width: calc(100% + 4rem);
  padding: 1.2rem 2rem;
  margin-left: -2rem;

  background-color: ${COLORS.gray0};

  color: ${COLORS.gray9};
  ${FONTS.Body3};
  font-weight: 400;
`;
