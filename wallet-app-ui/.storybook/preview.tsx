import type { Preview } from '@storybook/react';
import theme from '../src/styles/theme';
import GlobalStyle from '../src/styles/globalStyles';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from 'styled-components';
import messages from '../src/i18n/messages';
import {
  reactRouterParameters,
  withRouter,
} from 'storybook-addon-react-router-v6';

const preview: Preview = {
  globals: {
    locale: 'en',
    locales: {
      en: 'English',
      pl: 'Polski',
    },
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      reactRouter: reactRouterParameters({}),
    },
    decorators: [withRouter],
    reactIntl: {
      defaultLocale: 'en',
      locales: ['en', 'pl'],
      messages: messages,
    },
  },
};

const GlobalStyles = GlobalStyle;

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
    defaultTheme: 'main',
    Provider: ThemeProvider,
    themes: {
      main: theme,
    },
  }),
];

export default preview;
