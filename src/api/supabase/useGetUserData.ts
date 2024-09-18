import { useEffect, useState } from 'react';

import { UserDataProps } from '@/types/type';
import { unitripSupabase } from '@/utils/supabaseClient';

const useGetUserData = (kakaoId: number) => {
  const [userData, setUserData] = useState<UserDataProps>();

  const fetchData = async () => {
    const { data, error } = await unitripSupabase
      .from('USER')
      .select('*')
      .eq('kakao_id', kakaoId);

    if (error) {
      throw new Error('서버에 문제가 있습니다');
    }

    /* kakao_id에 해당하는 행이 존재하는지 확인 */
    if (data.length) {
      setUserData(data[0]);
    } else {
      throw new Error('일치하는 데이터가 없습니다');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return userData;
};

export default useGetUserData;
