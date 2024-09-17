import { css } from '@emotion/react';

import { CameraIcon, ToggleXFillIcon } from '@/assets/icon';
import { COLORS, FONTS } from '@/styles/constants';

interface ImageInputProps {
  imgList: string[];
  addImg: (imgUrl: string) => void;
  removeImg: (imgUrl: string) => void;
}

const ImageInput = (props: ImageInputProps) => {
  const { imgList, addImg, removeImg } = props;

  const handleOnChange = () => {
    addImg('asdf');
  };

  return (
    <>
      {imgList.length > 0 ? (
        <div css={imgFlexContainerCss}>
          {imgList.map((imgUrl) => (
            <div key={imgUrl} css={imgBoxContainerCss}>
              <img src={imgUrl} css={imgCss} />
              <button onClick={() => removeImg(imgUrl)}>
                <ToggleXFillIcon />
              </button>
            </div>
          ))}
          <label css={imageSquareLabelCss}>
            <CameraIcon />
            이미지 첨부
            <input css={imageButtonCss} type="file" onChange={handleOnChange} />
          </label>
        </div>
      ) : (
        <div css={imageContainerCss}>
          더 생생하게 경험을 공유하고 싶다면?
          <label css={imageLabelCss}>
            이미지 첨부하기 (0/10)
            <input css={imageButtonCss} type="file" onChange={handleOnChange} />
          </label>
        </div>
      )}
    </>
  );
};

export default ImageInput;

const imageContainerCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  border-radius: 1.2rem;

  padding: 3.2rem 0;
  background-color: ${COLORS.gray0};
  color: ${COLORS.gray6};
  ${FONTS.Body3};
`;

const imageLabelCss = css`
  border-radius: 1rem;
  padding: 0.8rem 1.6rem;

  background-color: ${COLORS.brand1};
  color: ${COLORS.white};
  ${FONTS.Body3}
`;

const imageSquareLabelCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  width: 10.4rem;
  height: 10.4rem;

  border-radius: 1.2rem;

  background-color: ${COLORS.gray1};
  color: ${COLORS.gray6};

  font-family: 'Apple SD Gothic Neo', sans-serif;
  font-style: normal;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 140%;
`;

const imgFlexContainerCss = css`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(3, 1fr);

  border-radius: 1.2rem;

  margin: 0 auto;
`;

const imgBoxContainerCss = css`
  position: relative;

  & > button {
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
  }
`;

const imageButtonCss = css`
  width: 0;
  height: 0;
  padding: 0;
  border: 0;
`;

const imgCss = css`
  width: 10.4rem;
  height: 10.4rem;

  border-radius: 1.2rem;
`;
