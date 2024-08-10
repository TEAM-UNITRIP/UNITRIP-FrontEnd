import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

import { COLORS, FONTS } from '@/styles/constants';

import { cardContainer, scrollContainer } from '../styles/main';
import TravelCard from './TravelCard';

const NearbyTravel = () => {
  return (
    <section css={container}>
      <h2 css={title}>서울 주변 갈 만한 여행지 🗺️</h2>
      <div css={scrollContainer}>
        <li css={cardContainer}>
          <TravelCard name="대전 오월드" address="대전 중구 사정공원로 70" />
          <TravelCard name="대전 오월드" address="대전 중구 사정공원로 70" />
          <TravelCard name="대전 오월드" address="대전 중구 사정공원로 70" />
          <TravelCard name="대전 오월드" address="대전 중구 사정공원로 70" />
        </li>
      </div>
      <Link to="" css={link}>
        서울 여행지 둘러보기
      </Link>
    </section>
  );
};

export default NearbyTravel;

const container = css`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  width: 100%;
  padding-bottom: 3.2rem;
  margin: 2.4rem 0 1.2rem;
`;

const title = css`
  ${FONTS.H4};

  margin-left: 2rem;

  color: ${COLORS.gray9};
`;

const link = css`
  ${FONTS.Body2};

  display: flex;
  justify-content: center;
  align-items: center;

  width: calc(100% - 4rem);
  height: 5.6rem;
  margin-top: 1.6rem;
  margin-left: 2rem;
  border: 1px solid ${COLORS.gray3};
  border-radius: 1.2rem;

  color: ${COLORS.gray9};
`;
