/** 카카오맵 그리기
 * 호출 일시 : /map 초기화면, 현위치 버튼 클릭 시
 */
import { locType } from '../pages/MapPage';

const { kakao } = window;

export const createKakaoMap = (loc: locType | undefined, level: number) => {
  if (loc?.lat && loc?.lng) {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(loc.lat, loc.lng),
      level: level,
    };
    const kakaoMap = new kakao.maps.Map(container, options);
    return kakaoMap;
  }
};
