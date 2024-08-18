import { css } from '@emotion/react';
import React from 'react';

import { HeartMonoIcon, PinLocationMonoIcon } from '@/assets/icon';
import { COLORS, FONTS } from '@/styles/constants';

const SearchResult = () => {
  return (
    <ul css={containerCss}>
      <li css={liCss}>
        <button type="button" css={buttonCss}>
          <HeartMonoIcon css={iconCss} />
          <p css={titleCss}>대전시립미술관</p>
          <p css={addressCSs}>
            <PinLocationMonoIcon /> <span>대전 서구 둔산대로 155</span>
          </p>
        </button>
      </li>
      <li css={liCss}>
        <button type="button" css={buttonCss}>
          <HeartMonoIcon css={iconCss} />
          <p css={titleCss}>대전시립미술관</p>
          <p css={addressCSs}>
            <PinLocationMonoIcon /> <span>대전 서구 둔산대로 155</span>
          </p>
        </button>
      </li>
      <li css={liCss}>
        <button type="button" css={buttonCss}>
          <HeartMonoIcon css={iconCss} />
          <p css={titleCss}>대전시립미술관</p>
          <p css={addressCSs}>
            <PinLocationMonoIcon /> <span>대전 서구 둔산대로 155</span>
          </p>
        </button>
      </li>
      <li css={liCss}>
        <button type="button" css={buttonCss}>
          <HeartMonoIcon css={iconCss} />
          <p css={titleCss}>대전시립미술관</p>
          <p css={addressCSs}>
            <PinLocationMonoIcon /> <span>대전 서구 둔산대로 155</span>
          </p>
        </button>
      </li>
    </ul>
  );
};

export default SearchResult;

const containerCss = css`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;

  height: calc(100vh - 11rem);
  overflow-y: scroll;

  padding: 1.6rem 2rem 0;
`;

const liCss = css`
  position: relative;
`;

const buttonCss = css`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 16.8rem;
  border-radius: 1.2rem;

  background-color: gray;

  color: ${COLORS.white};
`;

const titleCss = css`
  margin: 9.4rem 0 0 1.6rem;
  ${FONTS.H3};
`;

const addressCSs = css`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  margin-left: 1.6rem;

  ${FONTS.Small1};

  & > span {
    padding-top: 0.1rem;
  }
`;

const iconCss = css`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
`;
