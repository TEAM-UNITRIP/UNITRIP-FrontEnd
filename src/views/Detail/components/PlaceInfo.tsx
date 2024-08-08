import { css } from '@emotion/react';

import { ArrowDownIcon, CallIcon, ClockIcon, MapPinIcon } from '@/assets/icon';
import { COLORS, FONTS } from '@/styles/constants';

const PlaceInfoContainer = css`
  display: flex;
  gap: 0.6rem;
  flex-direction: column;

  width: 100%;
  padding: 1.6rem 2rem;

  background-color: ${COLORS.white};
`;

const ListItem = css`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  color: ${COLORS.gray9};

  ${FONTS.Body4};
`;

function PlaceInfo() {
  return (
    <section css={PlaceInfoContainer}>
      <div css={ListItem}>
        <MapPinIcon />
        <span>대전광역시 서구 둔산대로 155</span>
      </div>
      <div css={ListItem}>
        <CallIcon />
        <span>010-0000-0000</span>
      </div>
      <div css={ListItem}>
        <ClockIcon />
        <span>수요일 10:00-19:00</span>
        <ArrowDownIcon />
      </div>
    </section>
  );
}

export default PlaceInfo;
