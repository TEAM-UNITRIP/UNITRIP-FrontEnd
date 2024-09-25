import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';

import { DefaultImage } from '@/assets/image';
import { COLORS, FONTS } from '@/styles/constants';

import ErrorReport from '../components/ErrorReport';
import Header from '../components/Header';
import PlaceInfo from '../components/PlaceInfo';
import Tab from '../components/Tab';
import { getDetailCommonRes } from '../utils/getDetailCommon1';
import { getDetailIntroRes } from '../utils/getDetailIntro1';

export interface placeInfoType {
  title: string;
  info: {
    addr: string;
    tel: string;
    useTime: string;
  };
  imageUrl: string;
}

export interface detailInfoType {
  useTime?: string;
  useTimeCulture?: string;
}

const DetailPage = () => {
  const [selectedTab, setSelectedTab] = useState('상세정보');
  const [placeInfo, setPlaceInfo] = useState<placeInfoType>({
    title: '',
    info: {
      addr: '',
      tel: '',
      useTime: '',
    },
    imageUrl: '',
  });
  const [latlng, setLatLng] = useState({
    lat: '',
    lng: '',
  });
  const contentTypeId = useRef('12');

  useEffect(() => {
    const fetchData = async () => {
      await getDetailCommon1Res();
      await getDetailIntro1Res();
    };

    fetchData();
  }, []);

  const getDetailCommon1Res = async () => {
    const res = await getDetailCommonRes();

    if (res) {
      setPlaceInfo({
        title: res[0].title,
        info: {
          addr: res[0].addr1 !== '' ? res[0].addr1 : '-',
          tel: res[0].tel !== '' ? res[0].tel : '-',
          useTime: '',
        },
        imageUrl: res[0].firstimage !== '' ? res[0].firstimage : DefaultImage,
      });

      contentTypeId.current = res[0].contenttypeid;

      setLatLng({
        lat: res[0].mapy,
        lng: res[0].mapx,
      });
    }
  };

  const getDetailIntro1Res = async () => {
    const res = await getDetailIntroRes(contentTypeId.current);

    if (res) {
      setPlaceInfo((prev) => ({
        ...prev,
        info: {
          ...prev.info,
          useTime: res[0].usetime !== '' ? res[0].usetime : '-',
        },
      }));
    }
  };

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div css={detailContainer}>
      <div css={backgroundImg(placeInfo.imageUrl)}>
        <Header />
        <span css={title}>{placeInfo.title}</span>
      </div>
      <PlaceInfo placeInfo={placeInfo.info} />
      <div css={gapLine}></div>
      <Tab
        selectedTab={selectedTab}
        setSelectedTab={handleTabChange}
        contentTypeId={contentTypeId.current}
        latlng={latlng}
      />
      <div css={gapLine}></div>

      {selectedTab === '상세정보' ||
      selectedTab === '유니버설' ||
      selectedTab === '지도' ||
      selectedTab === '사진' ? (
        <ErrorReport />
      ) : null}
    </div>
  );
};

export default DetailPage;

const detailContainer = css`
  width: 100dvw;
`;

const backgroundImg = (url: string) => css`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: auto;
  height: 26.3rem;

  background: linear-gradient(
    180deg,
    rgb(0 0 0 / 0%) 0%,
    rgb(0 0 0 / 34%) 100%
  );
  background-size: cover;
  background-image: url(${url});
  background-repeat: no-repeat;
`;

const title = css`
  padding: 1.2rem 2rem;

  color: ${COLORS.white};

  ${FONTS.H2};
`;

const gapLine = css`
  width: 100%;
  height: 1.3rem;

  background-color: ${COLORS.gray1};
`;
