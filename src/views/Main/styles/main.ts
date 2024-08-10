import { css } from '@emotion/react';

import { COLORS } from '@/styles/constants';

export const whiteBg = css`
  background-color: ${COLORS.white};
`;
export const scrollContainer = css`
  width: 100%;
  overflow-x: scroll;
`;
export const cardContainer = css`
  display: flex;
  gap: 1.2rem;

  width: fit-content;
  margin-top: 1.6rem;
  margin-left: 2rem;
`;
