import { css } from '@emotion/react';
import React from 'react';

import { COLORS, FONTS } from '@/styles/constants';

import Description from './Description';
import Question from './Question';

interface FacilitiesProps {
  openBottomSheet: () => void;
}

const Facilities = (props: FacilitiesProps) => {
  const { openBottomSheet } = props;

  return (
    <div>
      <Question>어떤 편의시설이 있었나요?</Question>
      <Description>남겨주신 정보는 다른 사용자에게 큰 도움이 돼요</Description>

      <button css={categoryButtonCss} onClick={openBottomSheet}>
        편의시설 선택하기
      </button>
    </div>
  );
};

export default Facilities;

const categoryButtonCss = css`
  height: 5.6rem;
  padding: 1.2rem 2.4rem;
  margin-top: 1.6rem;

  border: 1px solid ${COLORS.gray3};
  border-radius: 1.2rem;
  width: 100%;

  color: ${COLORS.gray9};
  ${FONTS.Body2};
`;
