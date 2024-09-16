import { css } from '@emotion/react';
import React from 'react';

import BottomSheet from '@/components/BottomSheet';
import { COLORS, FONTS } from '@/styles/constants';

import CategoryList from './CategoryList';

interface CategoryBottomSheetProps {
  closeBottomSheet: () => void;
}

const CategoryBottomSheet = (props: CategoryBottomSheetProps) => {
  const { closeBottomSheet } = props;
  return (
    <BottomSheet
      closeBottomSheet={closeBottomSheet}
      height={'80vh'}
      buttonText={'확인'}
      bottomSheetCss={css`
        padding: 4rem 2rem 7rem 2rem;
      `}>
      <header css={titleCss}>
        <h3>리뷰 필터</h3>
      </header>
      <ul>
        <CategoryList category={'physical'} />
        <CategoryList category={'visual'} />
        <CategoryList category={'hearing'} />
        <CategoryList category={'infant'} />
      </ul>
    </BottomSheet>
  );
};

export default CategoryBottomSheet;

const titleCss = css`
  margin-bottom: 1.2rem;

  color: ${COLORS.brand1};
  ${FONTS.H4};
`;