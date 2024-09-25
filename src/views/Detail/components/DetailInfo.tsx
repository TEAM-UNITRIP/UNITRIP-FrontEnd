import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

import { COLORS, FONTS } from '@/styles/constants';

import { getDetailIntroRes } from '../utils/getDetailIntro1';

interface detailInfoItem {
  restDate: string;
  useTime?: string;
  useTimeCulture?: string;
  useFee: string;
}

interface detailInfoProps {
  contentTypeId: string;
}

const DetailInfo = (props: detailInfoProps) => {
  const { contentTypeId } = props;

  const [info, setInfo] = useState<detailInfoItem>({
    restDate: '-',
    useTime: '-',
    useTimeCulture: '-',
    useFee: '-',
  });

  useEffect(() => {
    getDetailIntro1Res();
  }, []);

  const getDetailIntro1Res = async () => {
    const res = await getDetailIntroRes(contentTypeId);

    if (res) {
      setInfo({
        restDate: res[0].restdate !== '' ? res[0].restdate : '-',
        useTime:
          contentTypeId === '12'
            ? res[0].usetime !== ''
              ? res[0].usetime
              : '-'
            : '-',
        useTimeCulture:
          contentTypeId === '14'
            ? res[0].usetimeculture !== ''
              ? res[0].usetimeculture
              : '-'
            : '-',
        useFee: contentTypeId === '14' ? res[0].usefee : '-',
      });
    }
  };

  return (
    <section css={detailInfoContainer}>
      <div css={infoItem}>
        <span css={title}>휴무일</span>
        <p css={content}>{info.restDate}</p>
      </div>
      <div css={infoItem}>
        <span css={title}>이용시간</span>
        <p css={content}>{info.useTime}</p>
      </div>
      <div css={infoItem}>
        <span css={title}>이용요금</span>
        <p css={content}>{info.useFee}</p>
      </div>
    </section>
  );
};

export default DetailInfo;

const detailInfoContainer = css`
  display: flex;
  gap: 2.4rem;
  flex-direction: column;

  width: 100%;
  padding: 1.7rem 2rem 2.9rem;
`;

const infoItem = css`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
`;

const title = css`
  color: ${COLORS.brand1};

  ${FONTS.H4};
`;

const content = css`
  color: ${COLORS.gray8};

  ${FONTS.Body5};
`;
