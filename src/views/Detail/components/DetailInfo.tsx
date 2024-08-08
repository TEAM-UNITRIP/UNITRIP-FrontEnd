import { css } from '@emotion/react';

import { COLORS, FONTS } from '@/styles/constants';

const InfoContents = [
  {
    title: '휴무일',
    content: '연중무휴',
  },
  {
    title: '이용시간',
    content: '주중 10:30~22:30 (매표마감 21:30)',
  },
  {
    title: '이용요금',
    content: '-',
  },
];

const DetailInfoContainer = css`
  display: flex;
  gap: 2.4rem;
  flex-direction: column;

  width: 100%;
  padding: 1.7rem 2rem 2.9rem;
`;

const InfoItem = css`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
`;

const Title = css`
  color: ${COLORS.brand1};
  ${FONTS.H4};
`;

const Content = css`
  color: ${COLORS.gray8};
  ${FONTS.Body5};
`;

function DetailInfo() {
  return (
    <section css={DetailInfoContainer}>
      {InfoContents.map((item) => (
        <div css={InfoItem} key={item.title}>
          <span css={Title}>{item.title}</span>
          <p css={Content}>{item.content}</p>
        </div>
      ))}
    </section>
  );
}

export default DetailInfo;
