import { css } from '@emotion/react';

import { SearchMonoIcon } from '@/assets/icon';
import { COLORS, FONTS } from '@/styles/constants';
import { SearchResItem } from '@/types/search';

interface RelatedWordListProps {
  relatedWordList: SearchResItem[];
}

const RelatedWordList = (props: RelatedWordListProps) => {
  const { relatedWordList } = props;

  console.log(relatedWordList);

  const renderRelatedWordList = () => {
    return relatedWordList?.map(({ title, contentid }) => (
      <li key={contentid}>
        <button css={wordCss}>
          <SearchMonoIcon />
          <span css={wordTextCss}>{title}</span>
        </button>
      </li>
    ));
  };

  return <ul css={containerCss}>{renderRelatedWordList()}</ul>;
};

export default RelatedWordList;

const containerCss = css`
  display: flex;
  flex-direction: column;

  margin-top: 2.4rem;
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

  color: ${COLORS.brand1};

  ${FONTS.Body3};
`;
