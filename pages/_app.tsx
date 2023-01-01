import type { AppProps } from "next/app";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import "react-datepicker/dist/react-datepicker.css";
import "@reach/dialog/styles.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { DatePickerStyles } from "@/styles/datepicker";
import GlobalStyle from "@/styles/globalStyles";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#2b924d",
      light: "#ebf6ee",
    },
    text: {
      primary: "#111111",
    },
    secondary: {
      main: "#19857b",
    },
    background: {
      default: "#f2f2f2",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
      <MuiThemeProvider theme={muiTheme}>
        <GlobalStyle />
        <DatePickerStyles />
        <Component {...pageProps} />
      </MuiThemeProvider>
      {/* </LocalizationProvider> */}
    </>
  );
}

export default MyApp;
