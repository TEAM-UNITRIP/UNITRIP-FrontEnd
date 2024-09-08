import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

const { kakao } = window;

const MapPage = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const container = document.getElementById('map');
    const options = { center: new kakao.maps.LatLng(33.450701, 126.570667) };
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);
    console.log(map);
  }, []);

  return <div id="map" css={MapContainer}></div>;
};

export default MapPage;

const MapContainer = css`
  width: 100%;
  height: 100dvh;
`;
