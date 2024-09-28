import { css } from '@emotion/react';

import { HeartFillMonoIcon, PinLocationMonoIcon } from '@/assets/icon';
import { COLORS, FONTS } from '@/styles/constants';

interface TravelCardProps {
  name: string;
  address: string;
  imgUrl: string;
  isHeart: boolean;
}

const TravelCard = (props: TravelCardProps) => {
  const { name, address, imgUrl, isHeart } = props;

  return (
    <li css={card(imgUrl)}>
      <div css={background}>
        <div css={heart}>{isHeart && <HeartFillMonoIcon />}</div>
        <p css={nameCss}>{name}</p>
        <div css={addressContainer}>
          <PinLocationMonoIcon />
          <address css={locationCss}>{address}</address>
        </div>
      </div>
    </li>
  );
};

export default TravelCard;

const card = (imgUrl: string) => css`
  position: relative;

  height: 24.8rem;
  border-radius: 1.2rem;

  background-color: ${COLORS.gray4};
  background-position: center center;
  background-size: cover;
  background-image: url(${imgUrl});

  min-width: 23.2rem;
`;

const background = css`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;

  height: 24.8rem;
  padding: 1.6rem;
  border-radius: 1.2rem;

  background: linear-gradient(
    180deg,
    rgb(0 0 0 / 0%) 0%,
    rgb(0 0 0 / 34%) 100%
  );

  min-width: 23.2rem;
`;

const heart = css`
  margin-left: auto;
`;

const nameCss = css`
  margin-top: auto;

  color: ${COLORS.white};
  ${FONTS.H4};
`;

const locationCss = css`
  color: ${COLORS.white};

  ${FONTS.Small2};
`;

const addressContainer = css`
  display: flex;
  gap: 0.3rem;
  align-items: center;

  margin-top: 0.2rem;
`;
