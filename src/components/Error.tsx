import { css } from '@emotion/react';

import { ErrorIcon } from '@/assets/icon';
import { COLORS, FONTS } from '@/styles/constants';

interface ErrorPros {
  message: string;
  resetErrorBoundary: () => void; // resetErrorBoundary 추가
}

const Error = ({ message, resetErrorBoundary }: ErrorPros) => {
  console.log(message);
  return (
    <div css={errorContainer}>
      <ErrorIcon />
      <span css={errorDetail}>{message}</span>
      <button onClick={resetErrorBoundary}>이전 페이지로</button>
    </div>
  );
};

export default Error;

const errorContainer = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const errorDetail = css`
  color: ${COLORS.gray9};
  ${FONTS.Body2};
`;
