import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import getDummyData from '@/apis/supabase/getDummyData';
import { COLORS, FONTS } from '@/styles/constants';
import { MainDummyResponse } from '@/types/api/dummy';

import { cardContainer, scrollContainer } from '../styles/main';
import ReviewCard from './ReviewCard';

const RecommendedTravel = () => {
  const [placeData, setPlaceData] = useState<MainDummyResponse[]>();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getDummyData();
      setPlaceData(response);
    };

    fetchData();
  }, []);

  const moveToPlace = (contentId: number) => {
    navigate(`/${contentId}`);
  };

  return (
    <section css={sectionCss}>
      <h3 css={subTitle}>믿고 보는 유니트립 리뷰</h3>
      <h2 css={title}>유니트립 추천 여행지 🏖️</h2>
      {placeData && (
        <div css={scrollContainer}>
          <li css={cardContainer}>
            {placeData.map((place) => {
              return (
                <ReviewCard
                  key={place.contentId + place.place}
                  name={place.place}
                  thumbnail={place.thumbnail}
                  score={place.rating}
                  content={place.overview}
                  reviewCount={place.review_count}
                  onClick={() => moveToPlace(place.contentId)}
                />
              );
            })}
          </li>
        </div>
      )}
    </section>
  );
};

export default RecommendedTravel;

const sectionCss = css`
  padding-top: 3.2rem;
  margin-bottom: 14.6rem;
`;

const subTitle = css`
  margin: 0 0 0 2rem;

  color: ${COLORS.gray7};
  ${FONTS.Body2};
`;
const title = css`
  margin-left: 2rem;

  color: ${COLORS.gray9};
  ${FONTS.H4};
`;
