import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
  }

  html{
    font-family: 'Noto Sans KR', sans-serif;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
  a {
  text-decoration: none;
  color: inherit; }

  button,
  input,
  select,
  textarea {
    border: 0;
    background-color: transparent; }
    button:focus,
    input:focus,
    select:focus,
    textarea:focus {
      outline: none;
      box-shadow: none; }

  a,
  button {
    cursor: pointer; }

  ul,
  ol {
    padding-left: 0;
    list-style: none; }

`;

export default GlobalStyle;
