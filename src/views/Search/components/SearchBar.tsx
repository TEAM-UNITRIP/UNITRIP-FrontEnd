import { css } from '@emotion/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ChevronLeftIcon } from '@/assets/icon';
import { COLORS, FONTS } from '@/styles/constants';

const SearchBar = () => {
  const navigate = useNavigate();

  return (
    <div css={containerCss}>
      <button type="button" onClick={() => navigate(-1)}>
        <ChevronLeftIcon />
      </button>
      <input css={inputCss} placeholder="어디로, 어떤 여행을 떠날까요?" />
    </div>
  );
};

export default SearchBar;

const containerCss = css`
  display: flex;
  gap: 1.2rem;

  padding: 0.8rem 2rem 0;
`;

const inputCss = css`
  width: 100%;
  padding: 1.2rem 1.6rem;
  border: 1px solid ${COLORS.brand1};
  border-radius: 99.9rem;

  color: ${COLORS.gray9};
  ${FONTS.Body2};

  &::placeholder {
    color: ${COLORS.gray4};
    ${FONTS.Body2};
  }
`;
