import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

import {
  MapFavoirteIcon,
  MapSearchActiveIcon,
  MapSearchInactiveIcon,
  RefreshMonoIcon,
} from '@/assets/icon';
import MenuBar from '@/components/MenuBar';
import { COLORS, FONTS } from '@/styles/constants';

import { POSITION_LATLNG } from '../constants/POSITION_LATLNG';

const { kakao } = window;

interface locType {
  lat: number | undefined;
  lng: number | undefined;
}

const MapPage = () => {
  const [map, setMap] = useState(null);
  const [region, setRegion] = useState({ city: '', town: '' });
  const [loc, setLoc] = useState<locType>();
  const [getLocActive, setGetLocActive] = useState(false);

  /** 저장된 유저 정보로 default 위도, 경도 세팅 */
  const setDefaultLocation = (city: string, town: string) => {
    setRegion({ city: '서울특별시', town: '성동구' });

    const currentCity = POSITION_LATLNG.find((item) => item.city === city);
    const currentTown = currentCity?.town.find((item) => item.key === town);

    setLoc({
      lat: currentTown?.lat,
      lng: currentTown?.lng,
    });
  };

  /** 사용자의 위치에 따른 위도, 경도 값 업데이트 */
  useEffect(() => {
    setDefaultLocation(region.city, region.town);
  }, [region.city, region.town]);

  /** 업데이트 된 위도, 경도 값 가져와서 카카오맵 center로 지정, 지도 띄우기 */
  useEffect(() => {
    if (loc?.lat && loc?.lng) {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(loc.lat, loc.lng),
        level: 4,
      };
      const kakaoMap = new kakao.maps.Map(container, options);
      setMap(kakaoMap);
      console.log(map);
    }
  }, [loc]);

  /** 사용자의 현재 위치 (위도, 경도) 받아오기 */
  const getCurrentLoc = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLoc({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setGetLocActive(true);
        },
        (err) => {
          alert('동의 거부 - 권한 재설정 필요');
          console.log(err);
        },
      );
    } else {
      //브라우저가 geolocation 지원 X
      alert('해당 브라우저에서 현재 위치를 가져올 수 없습니다.');
    }
  };

  return (
    <div id="map" css={MapContainer}>
      <section css={buttonSection}>
        <div css={topButtonSection}>
          <MapFavoirteIcon />
        </div>
        <div css={bottomButtonSection}>
          <button css={searchButton} type="button">
            주변 여행지 찾아보기
            <RefreshMonoIcon />
          </button>
          <button css={rightButton} onClick={getCurrentLoc} type="button">
            {getLocActive ? <MapSearchActiveIcon /> : <MapSearchInactiveIcon />}
          </button>
        </div>
        <MenuBar />
      </section>
    </div>
  );
};

export default MapPage;

const MapContainer = css`
  position: relative;

  width: 100%;
  height: 100dvh;
`;

const buttonSection = css`
  position: absolute;
  z-index: 2;

  width: 100%;
`;

const topButtonSection = css`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  padding: 0.5rem 1.3rem 0.5rem 0;
`;

const bottomButtonSection = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  position: fixed;
  bottom: 10.3rem;

  width: 100%;
  padding-right: 1.3rem;
`;

const searchButton = css`
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 1.4rem;

  width: 17.7rem;
  height: 3.9rem;
  padding: 0.9rem 1.6rem;
  border-radius: 1rem;

  background-color: ${COLORS.brand1};

  color: ${COLORS.white};

  ${FONTS.Body3};
`;

const rightButton = css`
  position: absolute;
  right: 1.3rem;
  bottom: 1.1rem;
`;
