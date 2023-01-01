import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset};

  html,
  body {
    color: ${({ theme }) => theme.palette.text.primary};
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

`;

export default GlobalStyle;
