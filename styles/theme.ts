import { DefaultTheme } from "styled-components";
const breakpoints = [320, 375, 425, 768, 1024, 1440, 2560];
const breakpointsSizes = {
  mobileS: `${breakpoints[0]}px`,
  mobileM: `${breakpoints[1]}px`,
  mobileL: `${breakpoints[2]}px`,
  tablet: `${breakpoints[3]}px`,
  laptop: `${breakpoints[4]}px`,
  laptopL: `${breakpoints[5]}px`,
  desktop: `${breakpoints[6]}px`,
  desktopL: `${breakpoints[7]}px`,
};

export const theme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
    background: "#f2f2f2",
    green: "#2b924d",
    lightgreen: "#ebf6ee",
  },
  // space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  // fontSizes: [12, 14, 16, 20, 24, 32],
  // breakpoints,
  // mq: {
  //   mobileS: `@media screen and (min-width: ${breakpointsSizes.mobileS})`,
  //   mobileM: `@media screen and (min-width: ${breakpointsSizes.mobileM})`,
  //   mobileL: `@media screen and (min-width: ${breakpointsSizes.mobileL})`,
  //   tablet: `@media screen and (min-width: ${breakpointsSizes.tablet})`,
  //   laptop: `@media screen and (min-width: ${breakpointsSizes.laptop})`,
  //   laptopL: `@media screen and (min-width: ${breakpointsSizes.laptopL})`,
  //   desktop: `@media screen and (min-width: ${breakpointsSizes.desktop})`,
  //   desktopL: `@media screen and (min-width: ${breakpointsSizes.desktop})`,
  // },
  // m: [0, 1, 2],
};
