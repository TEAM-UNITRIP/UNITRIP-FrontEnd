import { css } from '@emotion/react';
import { useState } from 'react';

import getUserData from '@/apis/supabase/getUserData';
import { HeaderBackIcon } from '@/assets/icon';
import BottomButton from '@/components/BottomButton';
import Header from '@/components/Header';
import MenuBar from '@/components/MenuBar';
import { Region } from '@/components/SelectRegion';
import TravelerType from '@/components/TravelerType';
import { useAsyncEffect } from '@/hooks/use-async-effect';
import { UserDataResponse } from '@/types/userAPI';

import Favorite from '../components/Favorite';
import Main from '../components/Main';
import PersonalInfo from '../components/PersonalInfo';
import { MYPAGE_TAB_CONTENTS } from '../constants/text';

const Mypage = () => {
  const [currentTab, setCurrentTab] = useState<string>('main');
  const [userData, setUserData] = useState<UserDataResponse | null>(null);
  const [travelerTypes, setTravelerTypes] = useState<string[]>([]);

  const kakaoId = sessionStorage.getItem('kakao_id');

  useAsyncEffect(async () => {
    const response = await getUserData(Number(kakaoId));
    setUserData(response);

    if (response) {
      setTravelerTypes(response.universal_type);
    }
  }, []);

  const backToMainTab = () => {
    setCurrentTab('main');
  };

  const handleSetCurrentTab = (clickedTab: string) => {
    setCurrentTab(clickedTab);
  };

  const parseRegion = (regionString: string): Region => {
    const [city, town] = regionString.split(' ');
    return { city, town };
  };

  const renderComponent = (state: string) => {
    if (!userData) {
      return <div>로딩 중...</div>;
    }

    const userRegion = parseRegion(userData.region);

    switch (state) {
      case 'main':
        return (
          <Main
            name={userData.name}
            profile={userData.profile}
            handleSetCurrentTab={handleSetCurrentTab}
          />
        );
      case MYPAGE_TAB_CONTENTS.PERSONAL_INFO:
        return <PersonalInfo name={userData.name} region={userRegion} />;
      case MYPAGE_TAB_CONTENTS.FAVORITE_TRAVEL_LIST:
        return <Favorite />;
      case MYPAGE_TAB_CONTENTS.TRAVELER_TYPE:
        return (
          <TravelerType
            travelerType={travelerTypes}
            setTravelerType={setTravelerTypes}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {currentTab === 'main' ? (
        <Header title="마이페이지" />
      ) : (
        <Header
          title={currentTab}
          leftIcon={HeaderBackIcon}
          leftFn={backToMainTab}
        />
      )}
      <div css={mypageContainer}>{renderComponent(currentTab)}</div>
      {currentTab === 'main' ? (
        <MenuBar />
      ) : (
        <BottomButton text="저장" clickedFn={backToMainTab} />
      )}
    </>
  );
};

export default Mypage;

const mypageContainer = css`
  display: flex;
  flex-direction: column;

  width: 100dvw;
  height: calc(100dvh - 8rem - 4.8rem);
  padding: 0 2rem;

  background-color: white;
`;
