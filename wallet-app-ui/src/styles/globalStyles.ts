import { createGlobalStyle } from 'styled-components';
import { TTheme } from './theme';

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
 }
  body {
    font-family: "Source Code Pro", sans-serif;
  }
  
  a {
    text-transform: none;
    text-decoration: none;
  }
  a:-webkit-any-link {
    cursor: pointer;
    text-decoration: none;
  }
  ::-webkit-scrollbar {
      width: 5px;
  }

  ::-webkit-scrollbar-track {
      background: ${({ theme }: { theme: TTheme }) => theme.colors.darkBlue};;
  }

  ::-webkit-scrollbar-thumb {
      background: ${({ theme }: { theme: TTheme }) => theme.colors.orange};
      border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }: { theme: TTheme }) =>
        theme.colors.orangePlaceholder};
  }
  
`;

export default GlobalStyles;
