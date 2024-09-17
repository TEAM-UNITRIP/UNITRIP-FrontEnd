//전역 변수
declare global {
  interface Window {
    Kakao: {
      init: (appKey: string) => void;
      isInitialized: () => boolean;
      Auth: {
        authorize(options: { redirectUri: string; scope: string }): void;
        setAccessToken(
          token: string,
        ): Promise<ShippingAddressResponse | ShippingAddressError>;
      };
      API: {
        request: (settings: {
          url: string;
          data: { property_keys: string[] };
        }) => Promise;
      };
    };
  }
}

//로컬 모듈로 인식
export {};
