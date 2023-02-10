import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import RubikBoldWoff2 from './fonts/Rubik-Bold.woff2';
import RubikBoldTtf from './fonts/Rubik-Bold.ttf';
import RubikLightWoff2 from './fonts/Rubik-Light.woff2';
import RubikLightTtf from './fonts/Rubik-Light.ttf';
import RubikMediumWoff2 from './fonts/Rubik-Medium.woff2';
import RubikMediumTtf from './fonts/Rubik-Medium.ttf';
import RubikRegularWoff2 from './fonts/Rubik-Regular.woff2';
import RubikRefularTtf from './fonts/Rubik-Regular.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Rubik-Bold';
    src: local('Rubik-Bold'), url(${RubikBoldTtf}) format('truetype'),
    url(${RubikBoldWoff2}) format('woff2');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Rubik-Light';
    src: local('Rubik-Light'), url(${RubikLightTtf}) format('truetype'),
    url(${RubikLightWoff2}) format('woff2');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Rubik-Medium';
    src: local('Rubik-Medium'), url(${RubikMediumTtf}) format('truetype'),
    url(${RubikMediumWoff2}) format('woff2');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Rubik-Regular';
    src: local('Rubik-Regular'), url(${RubikRefularTtf}) format('truetype'),
    url(${RubikRegularWoff2}) format('woff2');
    font-weight: 400;
  }
  
html {
  font-family: 'Rubik-Light', sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Document
 * ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 */

:where(html) {
  line-height: 1.15; /* 1 */
}

/* Sections
 * ========================================================================== */

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Edge, Firefox, and Safari.
 */

:where(h1) {
  font-size: 2em;
  margin-block-end: 0.67em;
  margin-block-start: 0.67em;
}

/* Grouping content
 * ========================================================================== */

/**
 * Remove the margin on nested lists in Chrome, Edge, and Safari.
 */

:where(dl, ol, ul) :where(dl, ol, ul) {
  margin-block-end: 0;
  margin-block-start: 0;
}

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Correct the inheritance of border color in Firefox.
 */

:where(hr) {
  box-sizing: content-box; /* 1 */
  color: inherit; /* 2 */
  height: 0; /* 1 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

:where(pre) {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
 * ========================================================================== */

/**
 * Add the correct text decoration in Safari.
 */

:where(abbr[title]) {
  text-decoration: underline;
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

:where(b, strong) {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

:where(code, kbd, samp) {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

:where(small) {
  font-size: 80%;
}

/* Tabular data
 * ========================================================================== */

/**
 * 1. Correct table border color in Chrome, Edge, and Safari.
 * 2. Remove text indentation from table contents in Chrome, Edge, and Safari.
 */

:where(table) {
  border-color: currentColor; /* 1 */
  text-indent: 0; /* 2 */
}

/* Forms
 * ========================================================================== */

/**
 * Remove the margin on controls in Safari.
 */

:where(button, input, select) {
  margin: 0;
}

/**
 * Remove the inheritance of text transform in Firefox.
 */

:where(button) {
  text-transform: none;
}

/**
 * Correct the inability to style buttons in iOS and Safari.
 */

:where(button, input:is([type='button' i], [type='reset' i], [type='submit' i])) {
  -webkit-appearance: button;
}

/**
 * Add the correct vertical alignment in Chrome, Edge, and Firefox.
 */

:where(progress) {
  vertical-align: baseline;
}

/**
 * Remove the inheritance of text transform in Firefox.
 */

:where(select) {
  text-transform: none;
}

/**
 * Remove the margin in Firefox and Safari.
 */

:where(textarea) {
  margin: 0;
}

/**
 * 1. Correct the odd appearance in Chrome, Edge, and Safari.
 * 2. Correct the outline style in Safari.
 */

:where(input[type='search' i]) {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Safari.
 */

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/**
 * Correct the text style of placeholders in Chrome, Edge, and Safari.
 */

::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.54;
}

/**
 * Remove the inner padding in Chrome, Edge, and Safari on macOS.
 */

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style upload buttons in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/**
 * Remove the inner border and padding of focus outlines in Firefox.
 */

:where(
    button,
    input:is([type='button' i], [type='color' i], [type='reset' i], [type='submit' i])
  )::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus outline styles unset by the previous rule in Firefox.
 */

:where(
    button,
    input:is([type='button' i], [type='color' i], [type='reset' i], [type='submit' i])
  ):-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Remove the additional :invalid styles in Firefox.
 */

:where(:-moz-ui-invalid) {
  box-shadow: none;
}

/* Interactive
 * ========================================================================== */

/*
 * Add the correct styles in Safari.
 */

:where(dialog) {
  background-color: white;
  border: solid;
  color: black;
  height: fit-content;
  left: 0;
  margin: auto;
  padding: 1em;
  position: absolute;
  right: 0;
  width: -moz-fit-content;
  width: fit-content;
}

:where(dialog:not([open])) {
  display: none;
}

/*
 * Add the correct display in all browsers.
 */

:where(summary) {
  display: list-item;
}
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Layout = styled.div`
  position: relative;
`;
