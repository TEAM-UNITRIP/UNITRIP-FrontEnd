import { css } from '@emotion/react';
import { useState } from 'react';

import BottomButton from '@/components/BottomButton';
import SelectRegion from '@/components/SelectRegion';
import SelectTravelerType from '@/components/SelectTravelerType';

const SignUpPage = () => {
  const [step, setStep] = useState('지역 설정');

  const renderItem = () => {
    if (step === '지역 설정') {
      return <SelectRegion />;
    }
    if (step === '여행자 유형 설정') {
      return <SelectTravelerType handleSetCurrentTab={setStep} />;
    }
  };

  return (
    <>
      <main css={SignUpPageLayout}>
        {renderItem()}
        <BottomButton text="테스트" clickedFn={setStep} />
      </main>
    </>
  );
};

export default SignUpPage;

const SignUpPageLayout = css`
  width: 100%;
`;
