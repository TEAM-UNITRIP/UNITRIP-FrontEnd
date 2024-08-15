import { css } from '@emotion/react';

import { ToggleXIcon } from '@/assets/icon';
import { COLORS, FONTS } from '@/styles/constants';

const RecentSearch = () => {
  const wordList = ['미술관', '수목원', '음악분수'].map((item) => {
    return (
      <button key={item} css={word} type="button">
        <span css={wordText}>{item}</span>
        <button type="button">
          <ToggleXIcon />
        </button>
      </button>
    );
  });

  return (
    <div css={container}>
      <p css={title}>최근 검색어</p>
      <div css={wordContainer}>{wordList}</div>
    </div>
  );
};

export default RecentSearch;

const container = css`
  padding: 0 2rem;
`;

const title = css`
  margin: 2.7rem 0 2rem;

  color: ${COLORS.brand1};

  ${FONTS.Body2};
`;

const word = css`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  height: 3.7rem;
  padding: 0 0.9rem 0 1.5rem;
  border-radius: 4rem;

  background-color: ${COLORS.gray1};
`;

const wordText = css`
  padding-top: 0.2rem;

  color: ${COLORS.gray6};

  ${FONTS.Body3}
`;

const wordContainer = css`
  display: flex;
  gap: 1rem;
`;
