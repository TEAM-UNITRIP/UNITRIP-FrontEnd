import { css } from '@emotion/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChevronLeftIcon } from '@/assets/icon';
import { COLORS, FONTS } from '@/styles/constants';

import CategoryBottomSheet from '../components/review/write/CategoryBottomSheet';
import ExperienceInput from '../components/review/write/ExperienceInput';
import Facilities from '../components/review/write/Facilities';
import ImageInput from '../components/review/write/ImageInput';
import ScoreSection from '../components/review/write/ScoreSection';

const WriteReviewPage = () => {
  const navigate = useNavigate();

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const [score, setScore] = useState(0);

  const handleScore = (score: number) => {
    setScore(score);
  };

  const openBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  return (
    <>
      <div css={containerCss}>
        <header css={headerCss}>
          <button type="button" onClick={() => navigate(-1)}>
            <ChevronLeftIcon />
          </button>
          <span>리뷰 작성</span>
        </header>

        <div css={writeContainerCss}>
          <ScoreSection score={score} handleScore={handleScore} />
          <ExperienceInput />
          <Facilities openBottomSheet={openBottomSheet} />
          <ImageInput />
        </div>

        <button css={submitCss}>등록하기</button>
      </div>
      {isBottomSheetOpen && <CategoryBottomSheet />}
    </>
  );
};

export default WriteReviewPage;

const containerCss = css`
  padding: 0 2rem;
`;

const headerCss = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  padding: 1.2rem 0;

  margin-bottom: 2rem;

  color: ${COLORS.gray9};
  ${FONTS.Body2};

  & > button {
    position: absolute;
    left: 0;
  }
`;

const writeContainerCss = css`
  display: flex;
  flex-direction: column;

  gap: 2.8rem;
`;

const submitCss = css`
  width: 100%;
  height: 5.6rem;

  border-radius: 1.2rem;
  margin-top: 7.2rem;

  color: ${COLORS.white};
  background-color: ${COLORS.brand1};
  ${FONTS.Body2}
`;
