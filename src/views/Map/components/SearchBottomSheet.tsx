import { css } from '@emotion/react';

import BottomSheet from '@/components/BottomSheet';

import BottomSheetContent from './BottomSheetContent';

/** bottomsheet props
 * @param closeBottomSheet 바텀시트 닫는 함수
 * @param height 바텀시트 height값 -> 22.8rem
 * @param buttonText button text -> X
 * @param noButton button 여부 -> true
 * @param bottomSheetCss 바텀시트 css 오버라이딩
 */
interface searchBottomSheetProps {
  title: string;
  address: string;
  image: string;
  contentId: string;
  closeBottomSheet: () => void;
}

/** 주변 여행지 검색 시 보여지는 바텀시트 */
const SearchBottomSheet = (props: searchBottomSheetProps) => {
  const { title, address, image, contentId, closeBottomSheet } = props;

  return (
    <div>
      <BottomSheet
        closeBottomSheet={closeBottomSheet}
        height={'22.8rem'}
        noButton
        sheetBackgroundCss={css`
          background-color: transparent;
        `}>
        <BottomSheetContent
          title={title}
          address={address}
          image={image}
          contentId={contentId}
        />
      </BottomSheet>
    </div>
  );
};

export default SearchBottomSheet;
