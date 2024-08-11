import { css } from '@emotion/react';
import { useState } from 'react';

import { COLORS, FONTS } from '@/styles/constants';

import { ArrowToggleClosed, ArrowToggleOpen } from '@/assets/icon';
import {
  BaiscFacilities,
  HearingFacilities,
  InfantFacilities,
  OthersFacilities,
  PhysicalFacilities,
  VisualFacilities,
} from '../constants/constants';

interface Facility {
  name: string;
  default: JSX.Element;
  none: JSX.Element;
}

type toggleType = {
  [key: string]: boolean;
};

const universalContainer = css`
  width: 100%;
  padding: 1.7rem 2rem 3rem;
`;

const iconListContainer = css`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const listWrapper = css`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const titleText = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${COLORS.brand1};

  ${FONTS.H5};
`;

const iconList = css`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;

  padding-top: 1.2rem;
`;

const iconWrapper = css`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  flex-direction: column;

  max-width: 7rem;
`;

const iconName = css`
  word-break: keep-all;

  color: ${COLORS.gray5};
  text-align: center;

  ${FONTS.Small2};
`;

const borderLine = css`
  width: 100%;
  margin: 1.2rem 0;
  border: 1px solid ${COLORS.gray1};
`;

function Universal() {
  const [toggles, setToggles] = useState<toggleType>({
    basic: true,
    physical: false,
    visual: false,
    hearing: false,
    infantFamily: false,
    others: false,
  });

  const handleSetToggles = (clicked: keyof typeof toggles) => {
    setToggles((prev) => {
      return {
        ...prev,
        [clicked]: !prev[clicked],
      };
    });
  };

  const renderFacilityIconList = (
    title: string,
    facilities: Facility[],
    key: keyof typeof toggles,
  ) => (
    <div css={listWrapper}>
      <div css={titleText}>
        <span>{title}</span>
        {toggles[key] ? (
          <ArrowToggleOpen onClick={() => handleSetToggles(key)} />
        ) : (
          <ArrowToggleClosed onClick={() => handleSetToggles(key)} />
        )}
      </div>
      {toggles[key] && (
        <ul css={iconList}>
          {facilities.map((item: Facility) => (
            <li key={item.name} css={iconWrapper}>
              {item.default}
              <span css={iconName}>{item.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <section css={universalContainer}>
      <div css={iconListContainer}>
        {renderFacilityIconList('기본 편의시설', BaiscFacilities, 'basic')}
        <div css={borderLine} />
        {renderFacilityIconList('지체장애', PhysicalFacilities, 'physical')}
        <div css={borderLine} />
        {renderFacilityIconList('시각장애', VisualFacilities, 'visual')}
        <div css={borderLine} />
        {renderFacilityIconList('청각장애', HearingFacilities, 'hearing')}
        <div css={borderLine} />
        {renderFacilityIconList(
          '영유아 가족',
          InfantFacilities,
          'infantFamily',
        )}
        <div css={borderLine} />
        {renderFacilityIconList('기타', OthersFacilities, 'others')}
      </div>
    </section>
  );
}
export default Universal;
