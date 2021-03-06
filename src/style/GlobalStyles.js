import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  @font-face {
  font-family: 'Independence_hall';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2102-01@1.0/Independence_hall.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'ParkYongJun';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_220508@1.0/ParkYongJun.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
`;

export default GlobalStyle;
