import { createGlobalStyle } from 'styled-components';

import normalize from './normalize';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans JP';
    src: local('Noto Sans JP');
    font-display: fallback;
  }

  @font-face {
    font-family: 'PT Sans';
    src: local('PT Sans');
    font-display: fallback;
  }

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
      ${theme.fontSize.regular};
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
      ${theme.fontSize.regular};
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

  ul li {
    font-size: 1.75rem;
    line-height: 2;
  }
`;

export default GlobalStyle;
