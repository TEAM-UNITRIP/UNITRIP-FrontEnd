import { css } from '@emotion/react';

import { COLORS, FONTS } from '@/styles/constants';
import { category, filterState } from '@/views/Search/types/category';

import { categoryButtonCss } from '../../styles/review';
import { MAP_CATEGORY_FACILITIES } from './CategoryList';

interface SelectedCategoryProps {
  openBottomSheet: () => void;
  filterState: filterState;
  handleFilterState: (category: category, facility: string) => void;
}

const SelectedCategory = (props: SelectedCategoryProps) => {
  const { openBottomSheet, filterState, handleFilterState } = props;

  const selectedCategory: {
    category: category;
    facilityList: string[];
  }[] = [];

  const categoryKeys = Object.keys(filterState) as category[];

  const renderSelectedCategoryList = () => {
    const categoryList = Object.entries(filterState)
      .map(([, objectValue]) => Object.entries(objectValue).map(([key]) => key))
      .map((name) => name);

    categoryList.forEach((facilityList, idx) => {
      if (facilityList.length > 0) {
        selectedCategory.push({
          category: categoryKeys[idx],
          facilityList,
        });
      }
    });

    return selectedCategory.map(({ category, facilityList }) => {
      return (
        <div key={category} css={selectedCategoryContainerCss}>
          <div css={categoryNameCss}>
            {MAP_CATEGORY_FACILITIES[category].categoryName}
          </div>
          <ul css={facilitiesContainerCss}>
            {facilityList.map((facility) => {
              return (
                <button
                  key={facility}
                  css={categoryButtonCss(filterState[category][facility])}
                  onClick={() => handleFilterState(category, facility)}>
                  {facility}
                </button>
              );
            })}
          </ul>
        </div>
      );
    });
  };

  return (
    <div css={containerCss}>
      {renderSelectedCategoryList()}
      <button css={buttonCss} onClick={openBottomSheet}>
        필터 더보기
      </button>
    </div>
  );
};

export default SelectedCategory;

const containerCss = css`
  padding-top: 0.94rem;
`;

const selectedCategoryContainerCss = css`
  display: flex;
  align-items: center;
  gap: 4rem;

  padding: 0 0 0.94rem 1.9rem;

  overflow: auto;
`;

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

const categoryNameCss = css`
  width: 7.4rem;

  color: ${COLORS.brand1};
  ${FONTS.Body2};
`;

const facilitiesContainerCss = css`
  display: flex;
  gap: 1rem;

  overflow: auto;
`;
