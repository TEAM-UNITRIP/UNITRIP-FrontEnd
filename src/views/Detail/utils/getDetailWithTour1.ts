import { getDetailWithTour1 } from '@/apis/public/detailWithTour1';

export const getDetailWithTourRes = async () => {
  try {
    const response = await getDetailWithTour1({
      numOfRows: 20,
      pageNo: 1,
      MobileOS: 'ETC',
      contentId: 126078,
    });

    return response;
  } catch (err) {
    console.error('소개정보조회 api 에러', err);
  }
};