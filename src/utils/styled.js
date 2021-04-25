import React from 'react';
import PropTypes from 'prop-types';
import {
  createGlobalStyle,
  ThemeProvider,
} from 'styled-components';

/* eslint-disable sort-keys */

const breakpoints = {
  xxs: 400,
  xs: 600,
  s: 700,
  m: 900,
  l: 1100,
  xl: 1400,
  xxl: 1600,
};

const mediaQueries = {
  landscape: '@media (orientation: landscape)',
  nonTouch: '@media (pointer: fine)',
  touch: '@media (hover: none) and (pointer: coarse)',
  portrait: '@media (orientation: portrait)',
};

/* eslint-enable sort-keys */

Object.keys(breakpoints).forEach(breakpoint => {
  mediaQueries[breakpoint] = `@media screen and (min-width: ${breakpoints[breakpoint]}px)`;
});

const GlobalStyle = createGlobalStyle`
  html {
    overflow: auto;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  button,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    border: 0;
    padding: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    font-family: 'Tahoma', sans-serif;
    line-height: 1.2;
  }

  ol[class],
  ul[class] {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;

    &::before,
    &::after {
      content: '';
      content: none;
    }
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  sup {
    font-size: 50%;
    vertical-align: super;
  }

  sub {
    font-size: 50%;
    vertical-align: sub;
  }

  #root {
    overflow: hidden;
    min-height: 100vw;
  }

  @keyframes slideFade {
    to {
      opacity: 0;
      transform: translate(-50%, 100%);
    }
  }

  @keyframes fade {
    to {
      opacity: 0;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(359deg);
    }
  }

  @keyframes glow {
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
    }
  }
`;

/* eslint-disable sort-keys */

const theme = {
  colors: {
    accent: '#234669',
    // brandOrange: '#ff5200',
    // brandRed: '#aa1b2e',
    // brandYellow: '#ffab00',
    // darkGray: '#1d1d1b',
    gray: '#808285',
    // highlightRed: '#d70324',
    // shadowOrange: '#d55127',
    // warningRed: '#ac182b',
  },
  fonts: {
    openSans: '\'Open Sans\', sans-serif',
  },
  spacing: {
    regular: '10px',
    double: '20px',
  },
  transitions: {
    default: '0.4s',
  },
};

/* eslint-enable sort-keys */

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  breakpoints,
  mediaQueries,
  GlobalStyle,
  Theme,
};
