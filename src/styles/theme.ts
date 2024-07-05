import { css, Theme } from "@emotion/react";

const colors = {
  // 우리 디자인 시스템으로 교체
  // Primary
  blue: "#1DA1F2",
  purple: "#794BC4",
  green: "#17BF63",
  yellow: "#FFAD1F",
  orange: "#F45D22",
  red: "#E0245E",
};

const fonts = {
  // 우리 디자인 시스템으로 교체
  Button_medium: css`
    letter-spacing: -0.003125em;
    font-family: "Pretendard";
    font-size: 1.6rem;
    font-weight: 700;
    font-style: normal;
  `,
};

const theme: Theme = {
  colors,
  fonts,
};
export default theme;
