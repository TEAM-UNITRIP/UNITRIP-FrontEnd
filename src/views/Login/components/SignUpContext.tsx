import React, { createContext, useContext, useState } from 'react';

// Context의 타입 정의
interface SignUpContextType {
  region: { city: string; town: string };
  setRegion: React.Dispatch<
    React.SetStateAction<{ city: string; town: string }>
  >;
  travelerType: string[];
  setTravelerType: React.Dispatch<React.SetStateAction<string[]>>;
}

// 기본값 정의
const defaultContextValue: SignUpContextType = {
  region: { city: '', town: '' },
  setRegion: () => {},
  travelerType: [],
  setTravelerType: () => {},
};

// Context 생성
const SignUpContext = createContext<SignUpContextType>(defaultContextValue);

// Context Provider 컴포넌트
export const SignUpProvider = ({ children }: React.PropsWithChildren) => {
  const [region, setRegion] = useState({ city: '', town: '' });
  const [travelerType, setTravelerType] = useState<string[]>([]);

  const values = { region, setRegion, travelerType, setTravelerType };

  return (
    <SignUpContext.Provider value={values}>{children}</SignUpContext.Provider>
  );
};

// Context를 사용하는 훅
export const useSignUpContext = () => {
  const context = SignUpContext && useContext(SignUpContext);
  return context;
};
