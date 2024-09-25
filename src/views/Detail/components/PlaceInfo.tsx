import { css } from '@emotion/react';

import { CallIcon, ClockIcon, MapPinIcon } from '@/assets/icon';
import { COLORS, FONTS } from '@/styles/constants';

interface placeInfoProps {
  placeInfo: {
    addr: string;
    tel: string;
    useTime: string;
  };
}

const PlaceInfo = (props: placeInfoProps) => {
  const { addr, tel, useTime } = props.placeInfo;

  return (
    <section css={placeInfoContainer}>
      <div css={listItem}>
        <MapPinIcon />
        <span>{addr}</span>
      </div>
      <div css={listItem}>
        <CallIcon />
        <span>{tel}</span>
      </div>
      <div css={listItem}>
        <ClockIcon />
        <span>{useTime}</span>
      </div>
    </section>
  );
};

export default PlaceInfo;

const placeInfoContainer = css`
  display: flex;
  gap: 0.6rem;
  flex-direction: column;

  width: 100%;
  padding: 1.6rem 2rem;
`;

const listItem = css`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  color: ${COLORS.gray9};

  ${FONTS.Body4};
`;
