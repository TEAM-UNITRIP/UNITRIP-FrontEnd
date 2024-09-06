import { css } from '@emotion/react';

import SelectRegion from '@/components/SelectRegion';
import { COLORS, FONTS } from '@/styles/constants';

const PersonalInfo = () => {
  return (
    <>
      <form action="submit" css={PersonalInfoContainter}>
        <ul css={itemList}>
          <li css={formItem}>
            <span css={title}>이름*</span>

            <input type="text" css={input} placeholder="이돌이" disabled />
          </li>

          <li css={formItem}>
            <span css={title}>생년월일*</span>

            <div css={multiInputSection}>
              <input
                type="number"
                css={birth('year')}
                disabled
                placeholder="2015"
              />
              <input
                type="number"
                css={birth('month')}
                disabled
                placeholder="9"
              />
              <input
                type="number"
                css={birth('date')}
                disabled
                placeholder="7"
              />
            </div>
          </li>

          <li css={formItem}>
            <span css={title}>성별</span>
            <input type="text" css={input} placeholder="선택안함" disabled />
          </li>

          <SelectRegion />
        </ul>
      </form>
    </>
  );
};

export default PersonalInfo;

const PersonalInfoContainter = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: calc(100dvh - 6.2rem);
`;

const itemList = css`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  flex-direction: column;

  width: 100%;
  padding-top: 2.7rem;
`;

const formItem = css`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;

  width: 100%;

  ${FONTS.Body2};
`;

const title = css`
  color: ${COLORS.brand1};
`;

const inputDefault = css`
  padding: 1.6rem;
  border: 1px solid ${COLORS.gray3};
  border-radius: 1rem;

  color: ${COLORS.gray9};
`;

const input = css`
  ${inputDefault};
  width: 100%;

  font-weight: 400;
`;

const multiInputSection = css`
  display: flex;
  justify-content: space-between;
`;

const birth = (variant: string) => css`
  ${inputDefault};
  width: ${variant === 'year' ? '38%' : '28%'};
`;
