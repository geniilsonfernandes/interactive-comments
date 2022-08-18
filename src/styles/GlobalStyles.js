import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: "Roboto", sans-serif;
      background: ${theme.colors.bg[100]};
    }
    button {
      font-family: "Roboto", sans-serif;
    }
  `}

`;
