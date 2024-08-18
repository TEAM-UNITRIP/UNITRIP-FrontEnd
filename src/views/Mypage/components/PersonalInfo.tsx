import { css } from '@emotion/react';
import { useState } from 'react';

import { COLORS, FONTS } from '@/styles/constants';

import { REGION_LIST } from '../constants/region';
import { currentTabType } from '../pages/Mypage';
import Header from './Header';

interface PersonalInfoProps {
  handleSetCurrentTab: (clicked: currentTabType) => void;
}

function PersonalInfo(props: PersonalInfoProps) {
  const { handleSetCurrentTab } = props;

  const [locationList, setLocationList] = useState<string[]>([]);

  const onChangeRegion = (selected: string) => {
    const town = REGION_LIST.find((item) => item.city === selected)?.town || [];
    setLocationList(town);
  };

  return (
    <div>
      <Header handleSetCurrentTab={handleSetCurrentTab} page={'personalInfo'} />

      <form action="submit" css={PersonalInfoContainter}>
        <ul css={itemList}>
          <li css={formItem}>
            <span css={title}>이름*</span>

            <input type="text" css={input} placeholder="이돌이" disabled />
          </li>

          <li css={formItem}>
            <span css={title}>생년월일*</span>

            <div css={multiInputSection}>
              <input
                type="number"
                css={birth('year')}
                disabled
                placeholder="2015"
              />
              <input
                type="number"
                css={birth('month')}
                disabled
                placeholder="9"
              />
              <input
                type="number"
                css={birth('date')}
                disabled
                placeholder="7"
              />
            </div>
          </li>

          <li css={formItem}>
            <span css={title}>성별</span>
            <input type="text" css={input} placeholder="선택안함" disabled />
          </li>

          <li css={formItem}>
            <span css={title}>지역*</span>

            <div css={multiInputSection}>
              <div css={region}>
                <select
                  name="city"
                  defaultValue="default"
                  css={selectTab}
                  onChange={(e) => onChangeRegion(e.target.value)}>
                  <option value="default" disabled>
                    지역
                  </option>
                  {REGION_LIST.map((item, idx) => (
                    <option value={item.city} key={idx}>
                      {item.city}
                    </option>
                  ))}
                </select>
              </div>

              <div css={region}>
                <select name="town" defaultValue="default" css={selectTab}>
                  <option value="default">시/군/구</option>
                  {locationList.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </li>
        </ul>
        <button type="submit" css={submitBtn}>
          저장
        </button>
      </form>
    </div>
  );
}

export default PersonalInfo;

const PersonalInfoContainter = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: calc(100dvh - 6.2rem);
`;

const itemList = css`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  flex-direction: column;

  width: 100%;
  padding-top: 2.7rem;
`;

const formItem = css`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;

  width: 100%;

  ${FONTS.Body2};
`;

const title = css`
  color: ${COLORS.brand1};
`;

const inputDefault = css`
  padding: 1.6rem;
  border: 1px solid ${COLORS.gray3};
  border-radius: 1rem;

  color: ${COLORS.gray9};
`;

const input = css`
  ${inputDefault};
  width: 100%;

  font-weight: 400;
`;

const multiInputSection = css`
  display: flex;
  justify-content: space-between;
`;

const birth = (variant: string) => css`
  ${inputDefault};
  width: ${variant === 'year' ? '38%' : '28%'};
`;

const region = css`
  ${inputDefault};
  width: 48%;
`;

const selectTab = css`
  width: 100%;
  border: none;
  outline: none;
`;

const submitBtn = css`
  width: 100%;
  padding: 1.7rem 0;
  border-radius: 1.2rem;

  background-color: ${COLORS.brand1};

  color: ${COLORS.white};
  text-align: center;

  ${FONTS.Body2};
`;
