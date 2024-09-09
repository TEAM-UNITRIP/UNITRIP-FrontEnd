import { css } from '@emotion/react';

import SelectRegion from '@/components/SelectRegion';
import { COLORS, FONTS } from '@/styles/constants';

const Region = () => {
  return (
    <section css={regionLayout}>
      <p css={mainText}>
        <span css={highlight}>지역</span>을
        <br />
        선택해주세요
      </p>
      <SelectRegion />
    </section>
  );
};

export default Region;

const regionLayout = css`
  display: flex;
  gap: 3.2rem;
  justify-content: space-between;
  flex-direction: column;

  height: 100%;
`;

const mainText = css`
  height: fit-content;
  margin-top: 1.2rem;

  color: ${COLORS.brand1};

  ${FONTS.H2};
`;

const highlight = css`
  display: inline;

  box-shadow: inset 0 -1.5rem 0 ${COLORS.brand2};
`;
