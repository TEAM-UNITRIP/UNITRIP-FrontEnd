import "@emotion/react";
declare module "@emotion/react" {
  // 디자인 시스템에 맞게 수정
  export interface Theme {
    colors: {
      blue: string;
      purple: string;
      green: string;
      yellow: string;
      orange: string;
      red: string;
    };
    fonts: {
      Button_medium: SerializedStyles;
    };
  }
}
