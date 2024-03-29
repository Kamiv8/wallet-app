import { DefaultTheme } from 'styled-components';

export type TMediaQuery = {
  max: number | null;
  min: number;
};

export type TColors = {
  white: string;
  orange: string;
  darkBlue: string;
  lightBlue: string;
  red: string;
  error: string;
  orangePlaceholder: string;
  darkBluePlaceholder: string;
  errorPlaceholder: string;
  orangeHover: string;
  shadow: string;
  green: string;
  backgroundBlur: string;
  chartColors: Array<string>;
  chartBackgroundColors: Array<string>;
  tableCardColors: {
    pink: string;
    green: string;
    blue: string;
    yellow: string;
  };
};

export type TGradients = {
  main: string;
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

export type TMediaQueries = {
  mobile: TMediaQuery;
  tablet: TMediaQuery;
  desktop: TMediaQuery;
  largeScreen: TMediaQuery;
};

export type TTheme = {
  colors: TColors;
  fonts: TFontSize;
  weight: TFontWeight;
  horizontalMargin: THorizontalMargin;
  gradients: TGradients;
  mediaQueries: TMediaQueries;
};

const theme: DefaultTheme & TTheme = {
  colors: {
    white: 'rgba(255,255,255,1)',
    orange: 'rgba(245,168,34,1)',
    orangePlaceholder: 'rgba(245,168,34,.7)',
    darkBlue: 'rgba(28,26,50,1)',
    darkBluePlaceholder: 'rgba(28,26,50,.7)',
    lightBlue: 'rgba(106,221,221,1)',
    red: 'rgba(223,27,27,1)',
    error: 'rgba(237,67,55,1)',
    errorPlaceholder: 'rgba(237,67,55,.7)',
    orangeHover: 'rgba(245,168,34,.24)',
    shadow: 'rgba(0,0,0.5)',
    green: 'rgba(21,151,0,1)',
    backgroundBlur: 'rgba(100,100,100,.15)',
    chartColors: [
      '#FF6384',
      '#63FF84',
      '#2196f3',
      '#8463FF',
      '#6384FF',
      '#D04646',
    ],
    chartBackgroundColors: [
      'rgba(255,99,132,0.2)',
      'rgba(99,255,132,0.2)',
      'rgba(33,150,243,0.2)',
      'rgba(132,99,255,0.2)',
      'rgba(99,132,255,0.2)',
      'rgba(208,70,70,0.2)',
    ],
    tableCardColors: {
      pink: 'rgba(170, 116, 195, 1)',
      green: 'rgba(116, 195, 148, 1)',
      blue: 'rgba(84, 150, 178, 1)',
      yellow: 'rgba(180, 195, 116, 1)',
    },
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
  gradients: {
    main: 'linear-gradient(135deg, rgba(245,168,34,1) 0%, rgba(106,221,221,1) 100%)',
  },
  mediaQueries: {
    mobile: {
      min: 0,
      max: 768,
    },
    tablet: {
      min: 769,
      max: 1023,
    },
    desktop: {
      min: 1024,
      max: 1439,
    },
    largeScreen: {
      min: 1440,
      max: null,
    },
  },
};

export default theme;
