import { UserDataProps } from '@/types/type';
import { unitripSupabase } from '@/utils/supabaseClient';

const getUserData = async (kakaoId: number) => {
  const { data, error } = await unitripSupabase
    .from('USER')
    .select('*')
    .eq('kakao_id', kakaoId);

  if (error) {
    throw new Error('서버에 문제가 있습니다');
  }

  /* kakao_id에 해당하는 행이 존재하는지 확인 */
  if (data.length) {
    const { name, region, universal_type, favorite_list }: UserDataProps =
      data[0];

    return { name, region, universal_type, favorite_list };
  } else {
    throw new Error('일치하는 데이터가 없습니다');
  }
};

export default getUserData;
