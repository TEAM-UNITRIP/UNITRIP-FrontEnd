// 검색 관련 공공 데이터 API

import { PlaceBasedAreaItem } from '@/types/main';
import { Response } from '@/types/public';

import { publicDataClient } from '..';

interface placeBasedAreaParams {
  MobileOS: 'IOS' | 'AND' | 'WIN' | 'ETC';
  areaCode?: number;
}

export const getPlaceBasedArea = async (paramsInfo: placeBasedAreaParams) => {
  let params = `MobileApp=UNITRIP&_type=json&arrange=Q&contentTypeId=12&serviceKey=${import.meta.env.VITE_PUBLIC_DATA_SERVICE_KEY}`;

  for (const [key, value] of Object.entries(paramsInfo)) {
    params += `&${key}=${value}`;
  }

  const {
    data: {
      response: {
        body: { items },
      },
    },
  } = await publicDataClient.get<Response<PlaceBasedAreaItem[]>>(
    `/areaBasedList1?${params}`,
  );
  return items;
};
