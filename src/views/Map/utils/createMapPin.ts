import { KakaoMarkerImage } from '@/assets/image';
import { locationBasedList1Res } from '@/types/locationBasedList1';

import { mapType } from '../pages/MapPage';

interface positionType {
  latlng: kakao.maps.LatLng;
}

export const createMapPin = (
  apiRes: locationBasedList1Res[] | undefined,
  kakaoMap: mapType | undefined,
) => {
  if (!apiRes || apiRes.length === 0) {
    console.log('검색 결과가 없습니다.');
    return { markers: [], kakaoMap: null };
  }

  const position: positionType[] = [];
  const imageSrc = KakaoMarkerImage;
  const imageSize = new kakao.maps.Size(30, 45);
  const imageOption = { offset: new kakao.maps.Point(27, 69) };

  const markerImage = new kakao.maps.MarkerImage(
    imageSrc,
    imageSize,
    imageOption,
  );

  apiRes?.forEach((item) => {
    position.push({
      latlng: new kakao.maps.LatLng(Number(item.mapy), Number(item.mapx)),
    });
  });

  const markers: kakao.maps.Marker[] = [];

  position.forEach((item) => {
    const marker = new kakao.maps.Marker({
      map: kakaoMap,
      position: item.latlng,
      image: markerImage,
    });
    markers.push(marker);
  });

  return { curMarkers: markers };
};
