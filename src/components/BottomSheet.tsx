import { css, SerializedStyles } from '@emotion/react';
import { MouseEvent, ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';

import { COLORS, FONTS } from '@/styles/constants';

interface BottomSheetProps {
  closeBottomSheet: () => void;
  height: string;

  onClickButton?: () => void;
  buttonText?: string;
  noButton?: boolean;
  bottomSheetCss?: SerializedStyles;
  sheetBackgroundCss?: SerializedStyles;
  children: ReactNode;
}

/**
 * @param closeBottomSheet 바텀시트 닫는 함수
 * @param height 바텀시트 height값
 * @param buttonText button text
 * @param noButton button 여부
 * @param bottomSheetCss 바텀시트 css 오버라이딩
 * @param sheetBackgroundCss 바텀시트 배경 css 오버라이딩
 */
const BottomSheet = (props: BottomSheetProps) => {
  const {
    closeBottomSheet,
    height,
    buttonText,
    noButton,
    bottomSheetCss,
    sheetBackgroundCss,
    children,
    onClickButton,
  } = props;

  document.body.style.overflow = 'hidden';

  const bottomSheetRef = useRef<HTMLDivElement>(null);

  const handleOnClickBackground = (e: MouseEvent<HTMLDivElement>) => {
    if (bottomSheetRef.current?.contains(e.target as Node)) return;
    closeBottomSheet();
    document.body.style.overflow = '';
  };

  const portalContent = (
    <div
      css={css`
        ${backgroundCss}
        ${sheetBackgroundCss}
      `}
      onClick={handleOnClickBackground}>
      <div
        css={css`
          ${containerCss(height)}
          ${bottomSheetCss}
        `}
        ref={bottomSheetRef}>
        {children}
        {!noButton && (
          <div
            css={buttonCotainerCss}
            onClick={() => {
              onClickButton && onClickButton();
              closeBottomSheet();
              document.body.style.overflow = '';
            }}>
            <button css={buttonCss}>{buttonText}</button>
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(
    portalContent,
    document.getElementById('root') as HTMLElement,
  );
};

export default BottomSheet;

const backgroundCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 999;

  width: 100vw;
  height: 100vh;
  margin: 0 auto;

  background-color: rgb(0 0 0 / 30%);
`;

const containerCss = (height: string) => css`
  position: absolute;
  bottom: 0;
  overflow: auto;

  width: 100vw;
  height: ${height};
  border-radius: 1.2rem 1.2rem 0 0;

  background-color: white;
`;

const buttonCotainerCss = css`
  position: absolute;
  bottom: 1.2rem;
  left: 0;

  width: 100vw;
  padding: 0 2rem;
`;

const buttonCss = css`
  width: 100%;
  padding: 1.4rem 0;
  border-radius: 1.2rem;

  background-color: ${COLORS.brand2};

  color: ${COLORS.brand1};

  ${FONTS.Body3};
`;
