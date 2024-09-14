import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

import { SearchMonoIcon } from '@/assets/icon';
import { COLORS, FONTS } from '@/styles/constants';
import { SearchResItem } from '@/types/search';

interface RelatedWordListProps {
  relatedWordList: SearchResItem[];
  loading: boolean;
  handleSearchInputValue: (value: string) => void;
}

const RelatedWordList = (props: RelatedWordListProps) => {
  const { relatedWordList, loading, handleSearchInputValue } = props;

  const navigate = useNavigate();

  const handleOnClick = (title: string) => {
    handleSearchInputValue(title);
    navigate(`/search/${title}`);
  };

  const renderRelatedWordList = () => {
    return relatedWordList?.map(({ title, contentid }) => (
      <li key={contentid}>
        <button css={wordCss} onClick={() => handleOnClick(title)}>
          <SearchMonoIcon />
          <span css={wordTextCss}>{title}</span>
        </button>
      </li>
    ));
  };

  return (
    <ul css={containerCss}>
      {loading && <div css={loadingCss}>로딩중..</div>}
      {renderRelatedWordList()}
    </ul>
  );
};

export default RelatedWordList;

const containerCss = css`
  display: flex;
  flex-direction: column;

  position: absolute;
  z-index: 1000;

  background-color: white;

  width: 100vw;
  min-height: 100vh;
`;

const wordCss = css`
  display: flex;
  gap: 2.2rem;
  align-items: center;

  height: 5.9rem;
  margin-left: 2.4rem;
`;

const wordTextCss = css`
  padding-top: 0.2rem;

  width: calc(100vw - 24px - 6rem);
  color: ${COLORS.brand1};

  ${FONTS.Body3};

  text-align: left;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const loadingCss = css`
  width: 100vw;
  height: 100vh;
`;
