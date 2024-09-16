import { css } from '@emotion/react';
import { createPortal } from 'react-dom';

import { COLORS, FONTS } from '@/styles/constants';

import FacilitiesAccordian from './FacilitiesAccordian';

const FilterBottomSheet = () => {
  const portalContent = (
    <div css={backgroundCss}>
      <div css={containerCss}>
        <header css={titleCss}>
          <h3>필터 상세 설정</h3>
        </header>
        <ul>
          <FacilitiesAccordian category={'physical'} />
          <hr css={lineCss} />
          <FacilitiesAccordian category={'visual'} />
          <hr css={lineCss} />
          <FacilitiesAccordian category={'hearing'} />
          <hr css={lineCss} />
          <FacilitiesAccordian category={'infant'} />
        </ul>
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
  padding: 4.2rem 2rem 0 2rem;
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
