import { css } from '@emotion/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { HeaderBackIcon } from '@/assets/icon';
import BottomButton from '@/components/BottomButton';
import Header from '@/components/Header';
import SelectRegion from '@/components/SelectRegion';
import TravelerType from '@/views/Mypage/components/TravelerType';

const SignUpPage = () => {
  const [step, setStep] = useState('여행자 유형 설정');

  const navigate = useNavigate();

  const moveBack = () => {
    if (step === '지역 설정') {
      navigate(`/`);
    }
    if (step === '여행자 유형 설정') {
      setStep('지역 설정');
    }
  };

  const renderItem = () => {
    if (step === '지역 설정') {
      return <SelectRegion />;
    }
    if (step === '여행자 유형 설정') {
      return <TravelerType handleSetCurrentTab={setStep} />;
    }
  };

  return (
    <>
      <Header leftIcon={HeaderBackIcon} leftFn={moveBack} />
      <main css={SignUpPageLayout}>{renderItem()}</main>
      <BottomButton text="테스트" clickedFn={setStep} />
    </>
  );
};

export default SignUpPage;

const SignUpPageLayout = css`
  width: 100%;
  padding: 2rem;
`;
