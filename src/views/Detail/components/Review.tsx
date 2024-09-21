import { css } from '@emotion/react';
import { useState } from 'react';

import { createInitialFilterState } from '@/views/Search/constants/category';
import { category } from '@/views/Search/types/category';

import CategoryBottomSheet from './review/CategoryBottomSheet';
import NoReview from './review/NoReview';
import ReviewCard from './review/ReviewCard';
import SelectedCategory from './review/SelectedCategory';
import TotalReview from './review/TotalReview';
import TotalScore from './review/TotalScore';

const REVIEW_DATA = [
  {
    writer: '왕이샹',
    rate: 5,
    description:
      '앱에서 보았던 것과 같이 작품마다 점자표지판으로 설명이 있어 시각장애인도 불편하지 않게 관람이 가능했어요. 오디오 가이드 대여 서비스도 제공하니 필요하신 분들은 꼭 대여해서 쓰세요!!',
    convenience: ['주차장', '경사로'],
    imgUrl: ['~~~', '~~~~'],
  },
  {
    writer: '왕이샹',
    rate: 5,
    description:
      '앱에서 보았던 것과 같이 작품마다 점자표지판으로 설명이 있어 시각장애인도 불편하지 않게 관람이 가능했어요. 오디오 가이드 대여 서비스도 제공하니 필요하신 분들은 꼭 대여해서 쓰세요!!',
    convenience: ['주차장', '경사로'],
    imgUrl: ['~~~', '~~~~'],
  },
  {
    writer: '왕이샹',
    rate: 5,
    description:
      '앱에서 보았던 것과 같이 작품마다 점자표지판으로 설명이 있어 시각장애인도 불편하지 않게 관람이 가능했어요. 오디오 가이드 대여 서비스도 제공하니 필요하신 분들은 꼭 대여해서 쓰세요!!',
    convenience: ['주차장', '경사로'],
    imgUrl: ['~~~', '~~~~'],
  },
];

const Review = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [filterState, setFilterState] = useState(() =>
    createInitialFilterState(),
  );

  const openBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };
  const closeBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  const handleFilterState = (category: category, facility: string) => {
    const categoryFacilities = filterState[category];

    setFilterState((prev) => ({
      ...prev,
      [category]: {
        ...categoryFacilities,
        [facility]: !categoryFacilities[facility],
      },
    }));
  };

  if (REVIEW_DATA.length === 0) return <NoReview />;

  return (
    <>
      <TotalScore />
      <TotalReview />
      <SelectedCategory
        filterState={filterState}
        handleFilterState={handleFilterState}
        openBottomSheet={openBottomSheet}
      />
      <ul css={reviewCardContainerCss}>
        {REVIEW_DATA.map((item, idx) => {
          return <ReviewCard key={idx + item.writer + item.rate} {...item} />;
        })}
      </ul>

      {isBottomSheetOpen && (
        <CategoryBottomSheet
          closeBottomSheet={closeBottomSheet}
          filterState={filterState}
          handleFilterState={handleFilterState}
        />
      )}
    </>
  );
};

export default Review;

const reviewCardContainerCss = css`
  padding: 2.3rem 2rem 0;
`;
