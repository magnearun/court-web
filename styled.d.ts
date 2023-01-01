import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Record<string, string>;
    space: number[];
    fontSizes: number[];
    breakpoints: number[];
    m: number[];
    mq: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      tablet: string;
      laptop: string;
      laptopL: string;
      desktop: string;
      desktopL: string;
    };
  }
}
