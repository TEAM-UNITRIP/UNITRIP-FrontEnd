import { css } from '@emotion/react';

import { ShieldCheckMonoIcon, Star1Icon } from '@/assets/icon';
import { COLORS, FONTS } from '@/styles/constants';

interface ReviewCardProps {
  name: string;
  score: string;
  content: string;
  reviewCount: string;
}

const ReviewCard = (props: ReviewCardProps) => {
  const { name, score, content, reviewCount } = props;
  return (
    <ul css={card}>
      <div
        css={css`
          position: relative;
        `}>
        <img css={placeImg} src="" alt={`${name} 장소 사진`} />
        <div css={placeName}>
          <ShieldCheckMonoIcon />
          <p
            css={css`
              padding-top: 0.2rem;
            `}>
            {name}
          </p>
        </div>
      </div>

      <div css={reviewBox}>
        <p css={scoreText}>
          <Star1Icon />
          {score}
        </p>
        <p css={contentText}>{content}</p>
        <p css={reviewCountText}>리뷰 {reviewCount}</p>
      </div>
    </ul>
  );
};

export default ReviewCard;

const card = css`
  display: flex;
  flex-direction: column;

  width: 27.8rem;
  height: 30rem;
  border-radius: 1.2rem;

  background-color: ${COLORS.gray0};
`;

const placeImg = css`
  height: 16.4rem;

  background-color: pink;

  border-top-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;
`;

const placeName = css`
  ${FONTS.Small2};
  display: flex;
  gap: 0.4rem;
  align-items: center;
  position: absolute;
  top: 12.2rem;
  left: 1.6rem;

  padding: 0.4rem 0.8rem;
  border-radius: 1rem;

  background-color: rgb(23 23 23 / 56%);

  color: ${COLORS.white};
`;

const reviewBox = css`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const scoreText = css`
  ${FONTS.Body1};
  display: flex;
  gap: 0.4rem;

  margin-top: 1.2rem;

  color: ${COLORS.gray9};
`;

const contentText = css`
  ${FONTS.Body3};
  display: -webkit-box;
  overflow: hidden;

  width: 23.8rem;
  margin-top: 1rem;

  color: ${COLORS.gray7};

  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const reviewCountText = css`
  ${FONTS.Small1};
  margin-top: 0.6rem;

  color: ${COLORS.gray4};
`;
