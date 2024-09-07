import { css } from '@emotion/react';

import { StarIcon } from '@/assets/icon';
import { COLORS, FONTS } from '@/styles/constants';

const TotalScore = () => {
  return (
    <div css={containerCss}>
      <div css={starContainerCss}>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
      <div css={scoreContainerCss}>
        4.2 <span>/ 5.0</span>
      </div>
    </div>
  );
};

export default TotalScore;

const containerCss = css`
  display: flex;
  gap: 3.2rem;

  margin: 1.5rem 0 1.5rem 2rem;
`;

const starContainerCss = css`
  display: flex;
  gap: 0.3rem;

  & > svg {
    width: 2.2rem;
    height: 2.2rem;
  }
`;

const scoreContainerCss = css`
  display: flex;
  gap: 1.2rem;

  ${FONTS.H4};

  & > span {
    color: ${COLORS.gray3};
  }
`;
