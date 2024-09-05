import { useState } from 'react';

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

  return <>{renderItem()}</>;
};

export default SignUpPage;
