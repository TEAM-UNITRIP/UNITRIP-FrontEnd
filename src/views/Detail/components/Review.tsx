import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import getReviews from '@/apis/supabase/getReviews';
import { useAsyncEffect } from '@/hooks/use-async-effect';
import { ReviewResponse } from '@/types/api/review';
import { isGuideShown } from '@/utils/storageHideGuide';
import {
  getFilterList,
  INITIAL_FILTER_STATE,
} from '@/views/Search/constants/category';
import { category, filterState } from '@/views/Search/types/category';

import { STORAGE_KEY } from '../constants/localStorageKey';
import CategoryBottomSheet from './review/CategoryBottomSheet';
import Guide from './review/Guide';
import NoReview from './review/NoReview';
import ReviewCard from './review/ReviewCard';
import SelectedCategory from './review/SelectedCategory';
import TotalReview from './review/TotalReview';
import TotalScore from './review/TotalScore';

const Review = () => {
  const { contentId } = useParams();

  const [reviewData, setReviewData] = useState<ReviewResponse[]>();
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [showGuide, setShowGuide] = useState(() =>
    isGuideShown(STORAGE_KEY.hideReviewFilterGuide),
  );

  const [filterState, setFilterState] = useState(INITIAL_FILTER_STATE);

  const openBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };
  const closeBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  const handleSetShowGuide = (value: boolean) => {
    setShowGuide(value);
    document.body.style.overflow = '';
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

  const handleFilterStateObject = (value: filterState) => {
    setFilterState(value);
  };

  const selectedFilterList = getFilterList(filterState);

  useEffect(() => {
    if (showGuide) document.body.style.overflow = 'hidden';
  }, []);

  useAsyncEffect(async () => {
    const data = await getReviews(contentId as string);
    setReviewData(data);
  }, []);

  if (!reviewData || reviewData.length === 0) return <NoReview />;

  return (
    <>
      <TotalScore reviewData={reviewData} />
      <TotalReview reviewCount={reviewData.length} />
      <SelectedCategory
        filterState={filterState}
        handleFilterState={handleFilterState}
        openBottomSheet={openBottomSheet}
      />
      <ul css={reviewCardContainerCss}>
        {reviewData
          ?.filter(({ convenience }) =>
            selectedFilterList.every((c) => convenience.includes(c)),
          )
          .map((item, idx) => {
            return <ReviewCard key={idx + item.writer + item.rate} {...item} />;
          })}
      </ul>

      {showGuide && <Guide handleSetShowGuide={handleSetShowGuide} />}
      {isBottomSheetOpen && (
        <CategoryBottomSheet
          closeBottomSheet={closeBottomSheet}
          filterState={filterState}
          handleFilterState={handleFilterStateObject}
        />
      )}
    </>
  );
};

export default Review;

const reviewCardContainerCss = css`
  padding: 2.3rem 2rem 0;
`;
