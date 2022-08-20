import { DefaultTheme } from 'styled-components';

type TColors = {
  white: string;
};

type TTheme = {
  colors: TColors;
};

const theme: DefaultTheme & TTheme = {
  colors: {
    white: 'rgba(255,255,255,1)',
  },
};

export default theme;
