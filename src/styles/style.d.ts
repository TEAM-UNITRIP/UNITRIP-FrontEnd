import "@emotion/react";
declare module "@emotion/react" {
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
