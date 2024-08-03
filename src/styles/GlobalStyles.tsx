import { css, Global } from '@emotion/react';
import { ReactElement } from 'react';

import { reset } from './reset';

const globalCss = css`
  /* font-face 추가 필요 */
  ${reset}

  #root, body, html {
    margin: 0 auto;

    background-color: #f5f5f5;
    max-width: 90rem;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  }

  #root::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }

  * {
    max-width: 90rem;
    box-sizing: border-box;
  }

  html {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgb(0 0 0 / 0%);

    scroll-behavior: smooth;

    user-select: none;

    display: flex;
    justify-content: center;
  }

  ul,
  li {
    padding-left: 0;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input,
  button {
    outline: none;

    border: none;

    background-color: transparent;
  }

  button {
    padding: 0;

    cursor: pointer;
  }

  input {
    appearance: none;

    &:focus {
      outline: none;
    }
  }
`;
export function GlobalStyles(): ReactElement {
  return <Global styles={[globalCss]} />;
}
