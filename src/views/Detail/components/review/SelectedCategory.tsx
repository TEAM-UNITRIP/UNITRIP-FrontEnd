import { css } from '@emotion/react';

import { COLORS, FONTS } from '@/styles/constants';
import { category, filterState } from '@/views/Search/types/category';

import { categoryButtonCss } from '../../styles/review';
import { MAP_CATEGORY_FACILITIES } from './CategoryList';

interface SelectedCategoryProps {
  openBottomSheet: () => void;
  filterState: filterState;
}

const SelectedCategory = (props: SelectedCategoryProps) => {
  const { openBottomSheet, filterState } = props;

  const selectedCategory: {
    category: category;
    facilityList: string[];
  }[] = [];

  const categoryKeys = Object.keys(filterState) as category[];

  const renderSelectedCategoryList = () => {
    const categoryList = Object.entries(filterState)
      .map(([, objectValue]) =>
        Object.entries(objectValue)
          .filter(([, value]) => value)
          .map(([key]) => key),
      )
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
                <li key={facility} css={categoryButtonCss(false)}>
                  {facility}
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
  };

  return (
    <div>
      {renderSelectedCategoryList()}
      <button css={buttonCss} onClick={openBottomSheet}>
        필터 더보기
      </button>
    </div>
  );
};

export default SelectedCategory;

const selectedCategoryContainerCss = css`
  display: flex;
  align-items: center;
  gap: 4rem;

  width: 
  height: 6.5rem;

  padding-left: 1.9rem;

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
