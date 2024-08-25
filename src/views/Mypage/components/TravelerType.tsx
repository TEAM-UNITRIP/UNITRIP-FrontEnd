import { css } from '@emotion/react';
import { useState } from 'react';

import {
  BlindTypeIcon,
  CheckEmptyIcon,
  CheckFilledIcon,
  HearingTypeIcon,
  InfantTypeIcon,
  MapMonoGrayIcon,
  NoneTypeIcon,
  PhysicalTypeIcon,
} from '@/assets/icon';
import { COLORS, FONTS } from '@/styles/constants';

import { currentTabType } from '../pages/Mypage';
import Header from './Header';

interface TravelerTypeProps {
  handleSetCurrentTab: (clicked: currentTabType) => void;
}

const TYPE_LIST = [
  { id: 'physical', icon: <PhysicalTypeIcon />, text: '지체장애인' },
  { id: 'blind', icon: <BlindTypeIcon />, text: '시각장애인' },
  { id: 'hearing', icon: <HearingTypeIcon />, text: '청각장애인' },
  { id: 'infant', icon: <InfantTypeIcon />, text: '영유아가족' },
  { id: 'none', icon: <NoneTypeIcon />, text: '해당되지 않아요' },
];

function TravelerType(props: TravelerTypeProps) {
  const { handleSetCurrentTab } = props;
  const [seletedType, setSelectedType] = useState<string[]>([]);

  const handleSetSelectedType = (id: string) => {
    setSelectedType((prev) => {
      if (prev.includes(id)) {
        return prev.filter((type) => type !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <>
      <Header handleSetCurrentTab={handleSetCurrentTab} page={'travelerType'} />
      <div css={contentContainer}>
        <div>
          <p css={mainText}>
            <span css={highlight}>여행자 유형</span>
            을 <br />
            모두 선택해주세요
          </p>
          <p css={subText}>다중선택 가능</p>

          <ul css={list}>
            {TYPE_LIST.map((item) => (
              <li
                key={item.text}
                css={listItem}
                onClick={() => handleSetSelectedType(item.id)}>
                <div css={itemText}>
                  {item.icon}
                  {item.text}
                </div>

                {seletedType.includes(item.id) ? (
                  <CheckFilledIcon />
                ) : (
                  <CheckEmptyIcon />
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div css={explaination}>
            <MapMonoGrayIcon />
            <p>여행자 유형은 장소 추천과 리뷰 필터링에 반영돼요!</p>
          </div>

          <button type="button" css={submitBtn}>
            저장
          </button>
        </div>
      </div>
    </>
  );
}

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

const list = css`
  display: flex;
  flex-direction: column;
`;

const listItem = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.7rem 0 1.7rem 0.4rem;

  color: ${COLORS.gray9};
  ${FONTS.H5};
  font-weight: 400;
`;

const itemText = css`
  display: flex;
  gap: 1.2rem;
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

const submitBtn = css`
  width: 100%;
  padding: 1.7rem 15.35rem;
  margin: 1.2rem 0;
  border-radius: 1.2rem;

  background-color: ${COLORS.brand1};

  color: ${COLORS.white};

  ${FONTS.Body2};
`;
