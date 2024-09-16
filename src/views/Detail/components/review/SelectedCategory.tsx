import { css } from '@emotion/react';

import { COLORS, FONTS } from '@/styles/constants';

const SelectedCategory = () => {
  return (
    <div>
      <button css={buttonCss}>필터 더보기</button>
    </div>
  );
};

export default SelectedCategory;

const buttonCss = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 1.2rem 0;

  color: ${COLORS.brand1};
  background-color: ${COLORS.gray0};
  ${FONTS.Body1}
`;
