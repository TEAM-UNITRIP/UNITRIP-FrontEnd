import { css } from '@emotion/react';
import { useState } from 'react';

import {
  ArrowBackIconIosDownIcon,
  ArrowBackIconIosUpIcon,
} from '@/assets/icon';
import {
  Facility,
  HEARING_FACILITIES,
  INFANT_FACILITIES,
  PHYSICAL_FACILITIES,
  VISUAL_FACILITIES,
} from '@/constants/facilities';
import { COLORS, FONTS } from '@/styles/constants';

import { category, filterState } from '../../types/category';

interface FacilitiesIconListProps {
  category: category;
  filterState: filterState;
  handleFilterState: (category: category, facility: string) => void;
}

const MAP_CATEGORY_FACILITIES: Record<
  category,
  { categoryName: string; iconList: Facility[] }
> = {
  physical: { categoryName: '지체장애', iconList: PHYSICAL_FACILITIES },
  visual: { categoryName: '시각장애', iconList: VISUAL_FACILITIES },
  hearing: { categoryName: '청각장애', iconList: HEARING_FACILITIES },
  infant: { categoryName: '지적장애', iconList: INFANT_FACILITIES },
};

const FacilitiesAccordian = (props: FacilitiesIconListProps) => {
  const { category, filterState, handleFilterState } = props;

  const [isOpen, setIsOpen] = useState(true);

  const facilityState = filterState[category];
  const handleOnClick = (facility: string) => {
    handleFilterState(category, facility);
  };

  const iconList = MAP_CATEGORY_FACILITIES[category].iconList.map(
    ({ name, default: defaultIcon, selected: selectedIcon }) => {
      return (
        <li css={iconListCss} key={name}>
          <button onClick={() => handleOnClick(name)}>
            {facilityState[name] ? selectedIcon : defaultIcon}
          </button>
          <span>{name}</span>
        </li>
      );
    },
  );

  return (
    <li>
      <button css={categoryTitleCss} onClick={() => setIsOpen((prev) => !prev)}>
        {MAP_CATEGORY_FACILITIES[category].categoryName}
        {isOpen ? <ArrowBackIconIosUpIcon /> : <ArrowBackIconIosDownIcon />}
      </button>
      {isOpen && <ul css={iconListContainerCss}>{iconList}</ul>}
    </li>
  );
};

export default FacilitiesAccordian;

const categoryTitleCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  color: ${COLORS.brand1};
  ${FONTS.H5};
  margin: 1.2rem 0;
`;

const iconListContainerCss = css`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;

  margin-bottom: 1.2rem;
`;

const iconListCss = css`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  align-items: center;

  color: ${COLORS.brand1};
  ${FONTS.Small2};
`;
