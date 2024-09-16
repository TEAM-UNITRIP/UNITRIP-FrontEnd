import { css } from '@emotion/react';

import { COLORS, FONTS } from '@/styles/constants';

import {
  HEARING_FACILITIES,
  INFANT_FACILITIES,
  PHYSICAL_FACILITIES,
  VISUAL_FACILITIES,
} from '../../constants/constants';

type category = 'physical' | 'visual' | 'hearing' | 'infant';
interface Facility {
  name: string;
  active: JSX.Element;
  inactive: JSX.Element;
}

export const MAP_CATEGORY_FACILITIES: Record<
  category,
  { categoryName: string; iconList: Facility[] }
> = {
  physical: { categoryName: '지체장애', iconList: PHYSICAL_FACILITIES },
  visual: { categoryName: '시각장애', iconList: VISUAL_FACILITIES },
  hearing: { categoryName: '청각장애', iconList: HEARING_FACILITIES },
  infant: { categoryName: '영유아 가족', iconList: INFANT_FACILITIES },
};

interface CategoryListProps {
  category: category;
}

const CategoryList = (props: CategoryListProps) => {
  const { category } = props;

  const categoryList = MAP_CATEGORY_FACILITIES[category].iconList.map(
    ({ name }) => {
      return (
        <button key={name} css={categoryButtonCss}>
          {name}
        </button>
      );
    },
  );

  return (
    <li css={containerCss}>
      <h3 css={categoryNameCss}>
        {MAP_CATEGORY_FACILITIES[category].categoryName}
      </h3>
      <div css={categoryContainerCss}>{categoryList}</div>
    </li>
  );
};

export default CategoryList;

const containerCss = css`
  margin: 2.4rem 0;
`;

const categoryNameCss = css`
  margin-bottom: 0.8rem;

  color: ${COLORS.brand1};
  ${FONTS.Body2};
`;

const categoryButtonCss = css`
  border-radius: 1.7rem;
  border: 1px solid #d6d6d6;
  padding: 0.7rem 1.5rem;
  color: #616671;
  ${FONTS.Body3}
`;

const categoryContainerCss = css`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
