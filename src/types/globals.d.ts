//전역 변수
declare global {
  interface Window {
    Kakao: {
      init: (appKey: string) => void;
      isInitialized: () => boolean;
    };
  }
}

//로컬 모듈로 인식
export {};
