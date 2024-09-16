import { css } from '@emotion/react';
import { MouseEvent, useRef } from 'react';
import { createPortal } from 'react-dom';

import { COLORS, FONTS } from '@/styles/constants';

import { category, filterState } from '../../types/category';
import FacilitiesAccordian from './FacilitiesAccordian';

interface FilterBottomSheetProps {
  closeBottomSheet: () => void;
  filterState: filterState;
  handleFilterState: (category: category, facility: string) => void;
}

const FilterBottomSheet = (props: FilterBottomSheetProps) => {
  const { closeBottomSheet, filterState, handleFilterState } = props;
  const bottomSheetRef = useRef<HTMLDivElement>(null);

  const handleOnClickBackground = (e: MouseEvent<HTMLDivElement>) => {
    if (bottomSheetRef.current?.contains(e.target as Node)) return;
    closeBottomSheet();
  };

  const portalContent = (
    <div css={backgroundCss} onClick={handleOnClickBackground}>
      <div css={containerCss} ref={bottomSheetRef}>
        <header css={titleCss}>
          <h3>필터 상세 설정</h3>
        </header>
        <ul>
          <FacilitiesAccordian
            category={'physical'}
            filterState={filterState}
            handleFilterState={handleFilterState}
          />
          <hr css={lineCss} />
          <FacilitiesAccordian
            category={'visual'}
            filterState={filterState}
            handleFilterState={handleFilterState}
          />
          <hr css={lineCss} />
          <FacilitiesAccordian
            category={'hearing'}
            filterState={filterState}
            handleFilterState={handleFilterState}
          />
          <hr css={lineCss} />
          <FacilitiesAccordian
            category={'infant'}
            filterState={filterState}
            handleFilterState={handleFilterState}
          />
        </ul>
        <div css={buttonCotainerCss} onClick={closeBottomSheet}>
          <button css={buttonCss}>해당 조건 적용하기</button>
        </div>
      </div>
    </div>
  );

  return createPortal(portalContent, document.body);
};

export default FilterBottomSheet;

const backgroundCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.3);
`;

const containerCss = css`
  position: absolute;
  bottom: 0;

  width: 100vw;
  height: 80vh;
  padding: 4.2rem 2rem 7rem 2rem;
  border-radius: 1.2rem 1.2rem 0rem 0rem;

  background-color: white;

  overflow: scroll;
`;

const titleCss = css`
  margin-bottom: 1.2rem;

  color: ${COLORS.brand1};
  ${FONTS.H4};
`;

const lineCss = css`
  border-top: 1px solid rgba(241, 241, 241, 1);
`;

const buttonCotainerCss = css`
  position: fixed;
  left: 0;
  bottom: 1.2rem;

  width: 100vw;
  padding: 0 2rem;
`;

const buttonCss = css`
  width: 100%;
  padding: 1.4rem 0;

  border-radius: 1.2rem;

  color: ${COLORS.brand1};
  background-color: ${COLORS.brand2};

  ${FONTS.Body3};
`;
