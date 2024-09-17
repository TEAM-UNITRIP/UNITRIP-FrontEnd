import { KakaoResProps } from '../types/loginType';

const getKaKaoInfo = async () => {
  const response: KakaoResProps = await window.Kakao.API.request({
    url: '/v2/user/me',
    data: {
      property_keys: ['kakao_account.profile'],
    },
  });

  if (!response) {
    throw new Error('응답이 없습니다');
  }

  return response;
};

export default getKaKaoInfo;
