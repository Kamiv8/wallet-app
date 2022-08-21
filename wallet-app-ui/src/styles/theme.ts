import { DefaultTheme } from 'styled-components';

type TColors = {
  white: string;
  orange: string;
  darkBlue: string;
  lightBlue: string;
  error: string;
  orangePlaceholder: string;
  darkBluePlaceholder: string;
  errorPlaceholder: string;
};

type TTheme = {
  colors: TColors;
};

const theme: DefaultTheme & TTheme = {
  colors: {
    white: 'rgba(255,255,255,1)',
    orange: 'rgba(245,168,34,1)',
    orangePlaceholder: 'rgba(245,168,34,.7)',
    darkBlue: 'rgba(28,26,50,1)',
    darkBluePlaceholder: 'rgba(28,26,50,.7)',
    lightBlue: 'rgba(106,221,221,1)',
    error: 'rgba(237,67,55,1)',
    errorPlaceholder: 'rgba(237,67,55,.7)',
  },
};

export default theme;
