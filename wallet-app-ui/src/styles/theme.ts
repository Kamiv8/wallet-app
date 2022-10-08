import { DefaultTheme } from 'styled-components';

export type TColors = {
  white: string;
  orange: string;
  darkBlue: string;
  lightBlue: string;
  error: string;
  orangePlaceholder: string;
  darkBluePlaceholder: string;
  errorPlaceholder: string;
};

export type TFontSize = {
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
};

type TFontWeight = {
  700: number;
  400: number;
};

type THorizontalMargin = {
  column: number;
};

export type TTheme = {
  colors: TColors;
  fonts: TFontSize;
  weight: TFontWeight;
  horizontalMargin: THorizontalMargin;
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
  fonts: {
    xs: '10px',
    s: '12px',
    m: '15px',
    l: '20px',
    xl: '25px',
    xxl: '32px',
  },
  weight: {
    400: 400,
    700: 700,
  },
  horizontalMargin: {
    column: 16,
  },
};

export default theme;
