import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

import { NoReviewIcon } from '@/assets/icon';
import { COLORS, FONTS } from '@/styles/constants';

const NoReview = () => {
  return (
    <div css={containerCss}>
      <NoReviewIcon />
      <div css={titleCss}>아직 리뷰가 없어요</div>
      <p css={descriptionCss}>
        해당 장소에 대해 알고 계시나요?
        <br /> 새롭게 리뷰를 작성해 주세요!
      </p>

      <Link to="review/write" css={buttonCss}>
        리뷰 작성하기
      </Link>
    </div>
  );
};

export default NoReview;

const containerCss = css`
  display: flex;
  flex-direction: column;

  align-items: center;

  margin-top: 1.5rem;
`;

const titleCss = css`
  margin: 1.25rem 0 0.5rem;
  color: ${COLORS.gray9};
  ${FONTS.Body2}
`;

const descriptionCss = css`
  text-align: center;

  color: ${COLORS.brand1};
  ${FONTS.Small1}
`;

const buttonCss = css`
  padding: 0.5rem 1rem;
  margin: 1.5rem 0;

  border-radius: 0.625rem;

  color: ${COLORS.white};
  background-color: ${COLORS.brand1};

  ${FONTS.Body3};
`;
