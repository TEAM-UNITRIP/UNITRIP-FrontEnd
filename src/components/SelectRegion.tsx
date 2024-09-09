import { css } from '@emotion/react';
import { useRef, useState } from 'react';

import { ArrowToggleClosed, ArrowToggleOpen } from '@/assets/icon';
import { REGION_LIST } from '@/constants/REGION_LIST';
import { COLORS, FONTS } from '@/styles/constants';

const SelectRegion = () => {
  const [locationList, setLocationList] = useState<string[]>([]);
  const [inputState, setInputState] = useState({ city: false, town: false });
  const [selectedRegion, setSelectedRegion] = useState({ city: '', town: '' });
  const dropDownRef = useRef<HTMLDivElement>(null);

  const onClickDropDown = (inputType: string, regionName: string) => {
    if (inputType === 'city') {
      setSelectedRegion(() => {
        return {
          city: regionName,
          town: '',
        };
      });

      const town =
        REGION_LIST.find((item) => item.city === regionName)?.town || [];
      setLocationList(town);
    } else if (inputType === 'town') {
      setSelectedRegion((prev) => {
        return {
          ...prev,
          town: regionName,
        };
      });
    }
  };

  return (
    <li css={formItem}>
      <span css={title}>지역*</span>

      <div css={multiInputSection}>
        <div
          ref={dropDownRef}
          data-type="city"
          onClick={() => {
            setInputState((prev) => {
              return { city: !prev.city, town: false };
            });
          }}>
          <div css={inputBox(!selectedRegion.city)}>
            <input type="button" value={selectedRegion.city || '시'} />
            {inputState.city ? <ArrowToggleOpen /> : <ArrowToggleClosed />}
          </div>
          <div css={scrollBox}>
            {inputState.city && (
              <ul css={dropDownBox}>
                {REGION_LIST.map((item) => (
                  <li
                    key={item.city}
                    onClick={() => {
                      onClickDropDown('city', item.city);
                    }}>
                    <button type="button">{item.city}</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div
          ref={dropDownRef}
          data-type="town"
          onClick={() => {
            setInputState((prev) => {
              return { city: false, town: !prev.town };
            });
          }}>
          <div css={inputBox(!selectedRegion.town)}>
            <input type="button" value={selectedRegion.town || '군/구'} />
            {inputState.city && inputState.town ? (
              <ArrowToggleOpen />
            ) : (
              <ArrowToggleClosed />
            )}
          </div>
          <div css={scrollBox}>
            {inputState.city && inputState.town && (
              <ul css={dropDownBox}>
                {locationList.map((item) => (
                  <li
                    key={item}
                    onClick={() => {
                      onClickDropDown('town', item);
                    }}>
                    <button type="button">{item}</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default SelectRegion;

const formItem = css`
  display: flex;
  flex: 1;

  gap: 1.2rem;
  flex-direction: column;

  width: 100%;

  overflow-y: hidden;

  ${FONTS.Body2};

  & input {
    border: none;
  }
`;

const title = css`
  color: ${COLORS.brand1};
`;

const multiInputSection = css`
  display: flex;
  gap: 1.2rem;
  justify-content: space-between;

  flex: 1;

  overflow-y: hidden;

  & > div {
    display: flex;
    gap: 0.8rem;
    flex-direction: column;

    height: 100%;
    flex: 1;
  }
`;

const inputBox = (initial: boolean) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.6rem;
  border: 1px solid ${COLORS.gray3};
  border-radius: 1rem;

  color: ${initial ? COLORS.gray4 : COLORS.gray9};
`;

const scrollBox = css`
  flex: 1;

  height: 100%;
  overflow-y: scroll;
`;

const dropDownBox = css`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;

  padding: 1.6rem;
  border: 1px solid ${COLORS.gray3};
  border-radius: 1rem;

  & > li {
    padding: 0.6rem;
  }
`;
