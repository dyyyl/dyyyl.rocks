import { createGlobalStyle } from 'styled-components';

import normalize from './normalize';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${theme.font.secondary};
  }

  h1, h2, h3, p {
    margin: 0;
    letter-spacing: 1px;
    font-weight: normal;
  }

  h1 {
    font-family: ${theme.font.primary};
    color: ${theme.color.black.regular};
    ${theme.fontSize.larger};
  }

  h2 {
    font-family: ${theme.font.primary};
    ${theme.fontSize.larger};
  }

  h3 {
    ${theme.fontSize.large};
  }

  p {
    ${theme.fontSize.small};
    color: ${theme.color.black.regular};
  }

  @media (max-width: ${theme.screen.md}) {
    h1 {
      ${theme.fontSize.regular};
    }
    h2 {
      ${theme.fontSize.regular};
    }
    h3 {
      ${theme.fontSize.small};
    }
    p {
      ${theme.fontSize.small};
    }
  }

  @media (max-width: ${theme.screen.sm}) {
    h1 {
      ${theme.fontSize.regular};
    }
    h2 {
      ${theme.fontSize.regular};
    }
    h3 {
      ${theme.fontSize.small};
    }
    p {
      ${theme.fontSize.small};
    }
  }

  button {
    border: none;
    background: none;
    outline: none;
    padding: 0;
    cursor: pointer;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: ${theme.color.black.regular};
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }

    &:active {
      text-decoration: none;
    }
  }
`;

export default GlobalStyle;
