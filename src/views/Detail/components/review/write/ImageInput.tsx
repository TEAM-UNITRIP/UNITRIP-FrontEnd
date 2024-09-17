import { css } from '@emotion/react';

import { COLORS, FONTS } from '@/styles/constants';

const ImageInput = () => {
  return (
    <div css={imageContainerCss}>
      더 생생하게 경험을 공유하고 싶다면?
      <button css={imageButtonCss}>이미지 첨부하기 (0/10)</button>
    </div>
  );
};

export default ImageInput;

const imageContainerCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  border-radius: 1.2rem;

  padding: 3.2rem 0;
  background-color: ${COLORS.gray0};
  color: ${COLORS.gray6};
  ${FONTS.Body3};
`;

const imageButtonCss = css`
  border-radius: 1rem;
  padding: 0.8rem 1.6rem;

  background-color: ${COLORS.brand1};
  color: ${COLORS.white};
  ${FONTS.Body3}
`;
