import { muiTheme } from "pages/_app";

type BreakpointKey = "xs" | "sm" | "md" | "lg" | "xl";
type MediaBreakpoint = { [key in BreakpointKey]: string };

export const mq = muiTheme.breakpoints.keys.reduce<MediaBreakpoint>(
  (acc, label) => {
    return {
      ...acc,
      [label]: `@media (min-width:${muiTheme.breakpoints.values[label]}px)`,
    };
  },
  {} as MediaBreakpoint
);
