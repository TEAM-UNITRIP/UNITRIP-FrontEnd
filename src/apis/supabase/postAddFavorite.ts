import { useLocation } from 'react-router-dom';

import { unitripSupabase } from '@/utils/supabaseClient';

const postAddFavorite = async () => {
  const kakaoId = sessionStorage.getItem('kakao_id');

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const place = queryParams.get('contentId');

  // 현재 사용자의 favorite 배열을 가져오기
  const { data, error: fetchError } = await unitripSupabase
    .from('USER')
    .select('favorite')
    .eq('kakao_id', kakaoId);

  if (fetchError) {
    throw new Error('사용자 정보를 가져오는 데 문제가 발생했습니다');
  }

  // 기존 favorite 배열에 새로운 값을 추가
  const updatedFavorites = [...(data[0].favorite || []), place];

  const { error } = await unitripSupabase
    .from('USER')
    .update({
      favorite: updatedFavorites,
    })
    .eq('kakao_id', kakaoId);

  if (error) {
    throw new Error('서버에 문제가 있습니다');
  }
};

export default postAddFavorite;
