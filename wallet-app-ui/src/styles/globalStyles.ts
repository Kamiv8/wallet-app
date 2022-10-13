import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Source Sans Pro";
    src: url("../assets/fonts/SourceSansPro-Bold.ttf");
    src: url("../assets/fonts/SourceSansPro-Regular.ttf");
  }
  
 *,*::before, *::after {
   box-sizing: border-box;
   padding: 0;
   margin: 0;
 },
  body {
    font-family: "Source Code Pro", sans-serif;
  }
  
  a {
    text-transform: none;
    text-decoration: none;
  }
`;

export default GlobalStyles;
