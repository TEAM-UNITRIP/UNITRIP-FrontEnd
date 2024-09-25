/** 무장애정보 조회 API */
import { detailWithTour11Res } from '@/types/detailWithTour1';
import { Response } from '@/types/public';

import { publicDataClient } from '..';

interface detailWithTour1Params {
  numOfRows: number;
  pageNo: number;
  MobileOS: 'IOS' | 'AND' | 'WIN' | 'ETC';
  contentId: number;
}

export const getDetailWithTour1 = async (paramsInfo: detailWithTour1Params) => {
  let params = `MobileApp=UNITRIP&_type=json&serviceKey=${import.meta.env.VITE_PUBLIC_DATA_SERVICE_KEY}`;

  for (const [key, value] of Object.entries(paramsInfo)) {
    params += `&${key}=${value}`;
  }

  const {
    data: {
      response: {
        body: {
          items: { item },
        },
      },
    },
  } = await publicDataClient.get<Response<detailWithTour11Res>>(
    `/detailWithTour1?${params}`,
  );

  return item;
};
