import { css } from '@emotion/react';

import {
  Sample01Image,
  Sample02Image,
  Sample03Image,
  Sample04Image,
  Sample05Image,
  Sample06Image,
  Sample07Image,
  Sample08Image,
  Sample09Image,
  Sample10Image,
  Sample11Image,
  Sample12Image,
} from '@/assets/image';

const PhotosContainer = css`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(3, 1fr);

  width: 100%;
  padding: 1rem;

  place-items: center center;
`;

const PhotoWrapper = css`
  position: relative;

  width: 100%;

  &::after {
    content: '';

    display: block;

    padding-bottom: 100%;
  }
`;

const PhotoItem = css`
  position: absolute;

  width: 100%;
  height: 100%;
  border-radius: 1.1rem;
  object-fit: cover;
`;

function Photos() {
  return (
    <section css={PhotosContainer}>
      <div css={PhotoWrapper}>
        <img src={Sample01Image} alt="" css={PhotoItem} />
      </div>
      <div css={PhotoWrapper}>
        <img src={Sample02Image} alt="" css={PhotoItem} />
      </div>
      <div css={PhotoWrapper}>
        <img src={Sample03Image} alt="" css={PhotoItem} />
      </div>
      <div css={PhotoWrapper}>
        <img src={Sample04Image} alt="" css={PhotoItem} />
      </div>
      <div css={PhotoWrapper}>
        <img src={Sample05Image} alt="" css={PhotoItem} />
      </div>
      <div css={PhotoWrapper}>
        <img src={Sample06Image} alt="" css={PhotoItem} />
      </div>
      <div css={PhotoWrapper}>
        <img src={Sample07Image} alt="" css={PhotoItem} />
      </div>
      <div css={PhotoWrapper}>
        <img src={Sample08Image} alt="" css={PhotoItem} />
      </div>
      <div css={PhotoWrapper}>
        <img src={Sample09Image} alt="" css={PhotoItem} />
      </div>
      <div css={PhotoWrapper}>
        <img src={Sample10Image} alt="" css={PhotoItem} />
      </div>
      <div css={PhotoWrapper}>
        <img src={Sample11Image} alt="" css={PhotoItem} />
      </div>
      <div css={PhotoWrapper}>
        <img src={Sample12Image} alt="" css={PhotoItem} />
      </div>
    </section>
  );
}

export default Photos;
