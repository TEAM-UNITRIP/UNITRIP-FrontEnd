import { css } from '@emotion/react';

import { COLORS, FONTS } from '@/styles/constants';

interface FacilityIConListProps {
  title: string;
  facilities: Facility[];
}

interface Facility {
  name: string;
  default: JSX.Element;
  none: JSX.Element;
}

function FacilityIconList(props: FacilityIConListProps) {
  const { title, facilities } = props;

  return (
    <div css={listWrapper}>
      <div css={titleText}>
        <span>{title}</span>
      </div>

      <ul css={iconList}>
        {facilities.map((item: Facility) => (
          <li key={item.name} css={iconWrapper}>
            {item.default}
            <span css={iconName}>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FacilityIconList;

const listWrapper = css`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const titleText = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${COLORS.brand1};

  ${FONTS.H5};
`;

const iconList = css`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;

  padding-top: 1.2rem;
`;

const iconWrapper = css`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  flex-direction: column;

  padding: 0 0.5rem;

  max-width: 7rem;
`;

const iconName = css`
  word-break: keep-all;

  color: ${COLORS.gray5};
  text-align: center;

  ${FONTS.Small2};
`;
