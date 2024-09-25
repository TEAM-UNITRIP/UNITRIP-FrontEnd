import { getdetailIntro1 } from '@/apis/public/detailIntro1';

export const getDetailIntroRes = async (contentTypeId: string) => {
  try {
    const response = await getdetailIntro1({
      numOfRows: 20,
      pageNo: 1,
      MobileOS: 'ETC',
      contentId: 126078,
      contentTypeId: contentTypeId,
    });

    return response;
  } catch (err) {
    console.error('소개정보조회 api 에러', err);
  }
};
