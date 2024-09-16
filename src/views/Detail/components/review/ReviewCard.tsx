import { css } from '@emotion/react';
import React from 'react';

import { SmallStarIcon } from '@/assets/icon';
import { COLORS, FONTS } from '@/styles/constants';

interface ReviewCardProps {
  writer: string;
  rate: number;
  description: string;
  convenience: string[];
  imgUrl: string[];
}

const ReviewCard = (props: ReviewCardProps) => {
  const { writer, rate, description, convenience, imgUrl } = props;

  return (
    <li css={containerCss}>
      <div css={contentContainerCss}>
        <div css={headerCss}>
          <span css={authorCss}>{writer}</span>
          <div css={startContainerCss}>
            <SmallStarIcon /> {rate}
          </div>
        </div>
        <div css={categoryCss}>{convenience.join(' | ')}</div>

        <div css={contentCss}>{description}</div>
      </div>

      <div css={imgContainerCss}>
        {imgUrl.map((imgUrl) => (
          <img key={imgUrl} src={imgUrl} />
        ))}
      </div>

      <div css={dateCss}>2024.07.28</div>
    </li>
  );
};

export default ReviewCard;

const containerCss = css`
  padding-bottom: 2rem;
  border-radius: 2rem;
  border; 1px solid rgba(245, 245, 245, 0.5);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.04);
`;

const contentContainerCss = css`
  padding: 2rem;
`;

const authorCss = css`
  color: ${COLORS.brand1};
  ${FONTS.Body1};
`;

const startContainerCss = css`
  display: flex;
  align-items: center;

  gap: 0.4rem;

  color: ${COLORS.brand1};
  ${FONTS.Small1};
`;

const headerCss = css`
  display: flex;
  justify-content: space-between;
`;

const categoryCss = css`
  margin-top: 0.4rem;

  color: ${COLORS.brand1};
  ${FONTS.Body2};
`;

const contentCss = css`
  margin-top: 1.6rem;

  color: ${COLORS.brand1};
  ${FONTS.Body5};
`;

const imgContainerCss = css`
  display: flex;
  gap: 0.5rem;

  width: 100%;
  padding: 0 2rem;
  overflow: auto;

  & > img {
    width: 12.3rem;
    height: 12.3rem;

    border-radius: 1.1rem;
  }
`;

const dateCss = css`
  margin: 1.6rem 0 0 2rem;

  font-family: 'Apple SD Gothic Neo', sans-serif;
  font-style: normal;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 140%;

  color: ${COLORS.gray4};
`;
